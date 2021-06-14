package ir.piana.business.prediction.module.competition.rest;

import ir.piana.business.prediction.common.model.ResponseModel;
import ir.piana.business.prediction.module.auth.data.entity.UserEntity;
import ir.piana.business.prediction.module.auth.model.UserModel;
import ir.piana.business.prediction.module.competition.data.entity.*;
import ir.piana.business.prediction.module.competition.data.repository.*;
import ir.piana.business.prediction.module.competition.data.view.CompetitionPredictionView;
import ir.piana.business.prediction.module.competition.model.CompetitionResultModel;
import ir.piana.business.prediction.module.competition.model.PredictingMatchesModel;
import ir.piana.business.prediction.module.competition.model.WeeklyMatchCompetitionModel;
import ir.piana.business.prediction.module.competition.model.WeeklyMatchModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/modules/competition/weekly-matches")
public class CompetitionRest {
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

    @PostMapping(path = "competition-list",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CompetitionPredictionView>> getWeeklyMatchesCompetitions(
            @RequestParam("weeklyMatchesId") long weeklyMatchId) {


        /*List<WeeklyMatchesCompetitionEntity> weeklyMatchesCompetitions = competitionRepository.
                findAllByWeeklyMatchesId(weeklyMatchId);

        List<WeeklyMatchCompetitionModel> competitionModels = new ArrayList<>();
        if(weeklyMatchesCompetitions != null && !weeklyMatchesCompetitions.isEmpty()) {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            UserEntity userEntity = null;
            if(authentication.getPrincipal() instanceof UserModel) {
                userEntity = ((UserModel) authentication.getPrincipal()).getUserEntity();
            }
            List<WeeklyMatchesCompetitionPredictionEntity> registered = competitionPredictionRepository.
                    findRegisteredByUserAndCompetition(
                            userEntity.getId(),
                            Arrays.asList(weeklyMatchId));

            for(WeeklyMatchesCompetitionEntity competitionEntity : weeklyMatchesCompetitions) {
                Optional<WeeklyMatchesCompetitionPredictionEntity> any = registered.stream()
                        .filter(p -> p.getCompetitionEntity().getId() == competitionEntity.getId())
                        .findAny();
                Optional<TeamEntity> hostTeamEntity = teamRepository
                        .findById(competitionEntity.getHostTeamId());
                Optional<TeamEntity> guestTeamEntity = teamRepository
                        .findById(competitionEntity.getGuestTeamId());
                if(!any.isPresent()) {
                    competitionModels.add(WeeklyMatchCompetitionModel.builder()
                            .organizer(guestTeamEntity.get().getLeagueOrganizerEntity().getNameEn())
                            .competitionId(competitionEntity.getId())
                            .hostTeamId(hostTeamEntity.get().getId())
                            .hostTeamLogo(hostTeamEntity.get().getLogo())
                            .hostTeamName(hostTeamEntity.get().getName())
                            .guestTeamId(guestTeamEntity.get().getId())
                            .guestTeamName(guestTeamEntity.get().getName())
                            .guestTeamLogo(guestTeamEntity.get().getLogo())
                            .build());
                } else {
                    competitionModels.add(WeeklyMatchCompetitionModel.builder()
                            .organizer(guestTeamEntity.get().getLeagueOrganizerEntity().getNameEn())
                            .competitionId(competitionEntity.getId())
                            .predictionId(any.isPresent() ? any.get().getId() : null)
                            .hostGoals(any.isPresent() ? any.get().getHostGoals() : null)
                            .guestGoals(any.isPresent() ? any.get().getGuestGoals() : null)
                            .hostTeamId(hostTeamEntity.get().getId())
                            .hostTeamLogo(hostTeamEntity.get().getLogo())
                            .hostTeamName(hostTeamEntity.get().getName())
                            .guestTeamId(guestTeamEntity.get().getId())
                            .guestTeamName(guestTeamEntity.get().getName())
                            .guestTeamLogo(guestTeamEntity.get().getLogo())
                            .build());
                }
            }
        }*/
        List<CompetitionPredictionView> views = cpRepository.findViews(1, 1);
        return ResponseEntity.ok(views);
    }
}
