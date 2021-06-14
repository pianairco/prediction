package ir.piana.business.prediction.module.competition.rest;

import ir.piana.business.prediction.module.auth.data.entity.UserEntity;
import ir.piana.business.prediction.module.auth.model.UserModel;
import ir.piana.business.prediction.module.competition.data.entity.TeamEntity;
import ir.piana.business.prediction.module.competition.data.entity.WeeklyMatchesCompetitionPredictionEntity;
import ir.piana.business.prediction.module.competition.data.entity.WeeklyMatchesCompetitionResultEntity;
import ir.piana.business.prediction.module.competition.data.repository.*;
import ir.piana.business.prediction.module.competition.data.view.CompetitionPredictionView;
import ir.piana.business.prediction.module.competition.model.PredictingMatchesModel;
import ir.piana.business.prediction.module.competition.model.WeeklyMatchCompetitionModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/modules/competition/weekly-matches")
public class PredictionRest {
    @Autowired
    protected CompetitionPredictionRepository cpRepository;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private WeeklyMatchesCompetitionPredictionRepository competitionPredictionRepository;

    @Autowired
    private WeeklyMatchesRepository weeklyMatchesRepository;

    @Autowired
    private ScoringRepository scoringRepository;

    @Autowired
    private WeeklyMatchesCompetitionRepository competitionRepository;

    @Autowired
    private WeeklyMatchesCompetitionResultRepository competitionResultRepository;

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private SeasonRepository seasonRepository;

    @PostConstruct
    public void init() {
        System.out.println();
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @PostMapping(path = "predicting-match",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<WeeklyMatchCompetitionModel> predictingMatches(
            @RequestBody PredictingMatchesModel predictingMatchesModel) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserEntity userEntity = null;
        if(authentication.getPrincipal() instanceof UserModel) {
            userEntity = ((UserModel) authentication.getPrincipal()).getUserEntity();
        }
        long weeklyMatchId = 0;
        if(userEntity == null)
            throw new RuntimeException();


            weeklyMatchId = predictingMatchesModel.getWeeklyMatchId();
            Optional<WeeklyMatchesCompetitionPredictionEntity> registeredPrediction = competitionPredictionRepository
                    .findByIdAndUserEntity(predictingMatchesModel.getPredictionId(), userEntity);
            if (registeredPrediction.isPresent()) {
                registeredPrediction.get().setHostGoals(predictingMatchesModel.getHostGoals());
                registeredPrediction.get().setGuestGoals(predictingMatchesModel.getGuestGoals());
            }
            competitionPredictionRepository.save(registeredPrediction.get());

        Optional<WeeklyMatchesCompetitionResultEntity> lastResult = competitionResultRepository
                .findLastResult(weeklyMatchId);
        Optional<TeamEntity> guestTeamEntity = teamRepository
                .findById(registeredPrediction.get().getCompetitionEntity().getGuestTeamId());

        Optional<TeamEntity> hostTeamEntity = teamRepository
                .findById(registeredPrediction.get().getCompetitionEntity().getHostTeamId());

        WeeklyMatchCompetitionModel res = WeeklyMatchCompetitionModel.builder()
                .isLocked(lastResult.isPresent())
                .organizer(guestTeamEntity.get().getLeagueOrganizerEntity().getName())
                .competitionId(registeredPrediction.get().getCompetitionEntity().getId())
                .predictionId(registeredPrediction.get().getId())
                .hostTeamId(hostTeamEntity.get().getId())
                .hostTeamLogo(hostTeamEntity.get().getLogo())
                .hostTeamName(hostTeamEntity.get().getName())
                .guestTeamId(guestTeamEntity.get().getId())
                .guestTeamName(guestTeamEntity.get().getName())
                .guestTeamLogo(guestTeamEntity.get().getLogo())
                .build();

        return ResponseEntity.ok(res);
    }
}
