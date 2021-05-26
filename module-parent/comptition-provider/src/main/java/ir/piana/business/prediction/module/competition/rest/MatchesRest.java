package ir.piana.business.prediction.module.competition.rest;

import ir.piana.business.prediction.module.competition.data.entity.*;
import ir.piana.business.prediction.module.competition.data.repository.SeasonRepository;
import ir.piana.business.prediction.module.competition.data.repository.TeamRepository;
import ir.piana.business.prediction.module.competition.data.repository.WeeklyMatchesCompetitionRepository;
import ir.piana.business.prediction.module.competition.data.repository.WeeklyMatchesRepository;
import ir.piana.business.prediction.module.competition.model.WeeklyMatchCompetitionModel;
import ir.piana.business.prediction.module.competition.model.WeeklyMatchModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/modules/competition/weekly-matches")
public class MatchesRest {
    @Autowired
    private WeeklyMatchesRepository weeklyMatchesRepository;

    @Autowired
    private WeeklyMatchesCompetitionRepository weeklyMatchesCompetitionRepository;

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private SeasonRepository seasonRepository;

    @PostConstruct
    public void init() {
        System.out.println();
    }

    @GetMapping(path = "open",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<WeeklyMatchModel>> getWeeklyMatches() {
        List<WeeklyMatchesEntity> futureWeeklyMatches = weeklyMatchesRepository.
                findFutureWeeklyMatches("1400/03/18", "1400/03/20");
        List<WeeklyMatchModel> models = futureWeeklyMatches.stream()
                .map(f -> WeeklyMatchModel.builder()
                        .id(f.getId())
                        .leagueLogo(String.valueOf(f.getSeasonEntity().getLeagueEntity().getId()).concat(".png"))
                        .leagueName(f.getSeasonEntity().getLeagueEntity().getName())
                        .seasonTag(f.getSeasonEntity().getTag())
                        .weekNumber(f.getWeekNumber())
                        .startDate(f.getStartDate())
                        .endDate(f.getEndDate())
                        .build())
                .collect(Collectors.toList());
        return ResponseEntity.ok(models);
    }

    @GetMapping(path = "competitions",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<WeeklyMatchCompetitionModel>> getWeeklyMatchesCompetitions(
            @RequestParam("weeklyMatchesId") long weeklyMatchId) {
        List<WeeklyMatchesCompetitionEntity> weeklyMatchesCompetitions = weeklyMatchesCompetitionRepository.
                findAllByWeeklyMatchesId(weeklyMatchId);
        List<WeeklyMatchCompetitionModel> competitionModels = new ArrayList<>();
        if(weeklyMatchesCompetitions != null && !weeklyMatchesCompetitions.isEmpty()) {
            for(WeeklyMatchesCompetitionEntity competitionEntity : weeklyMatchesCompetitions) {
                Optional<TeamEntity> hostTeamEntity = teamRepository
                        .findById(competitionEntity.getHostTeamId());
                Optional<TeamEntity> guestTeamEntity = teamRepository
                        .findById(competitionEntity.getGuestTeamId());
                competitionModels.add(WeeklyMatchCompetitionModel.builder()
                        .hostTeamId(hostTeamEntity.get().getId())
                        .hostTeamLogo(hostTeamEntity.get().getLogo())
                        .hostTeamName(hostTeamEntity.get().getName())
                        .guestTeamId(guestTeamEntity.get().getId())
                        .guestTeamName(guestTeamEntity.get().getName())
                        .guestTeamLogo(guestTeamEntity.get().getLogo())
                        .build());
            }
        }
        return ResponseEntity.ok(competitionModels);
    }
}
