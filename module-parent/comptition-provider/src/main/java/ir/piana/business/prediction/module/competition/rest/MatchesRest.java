package ir.piana.business.prediction.module.competition.rest;

import ir.piana.business.prediction.module.competition.data.entity.SeasonEntity;
import ir.piana.business.prediction.module.competition.data.entity.WeeklyMatchesEntity;
import ir.piana.business.prediction.module.competition.data.repository.SeasonRepository;
import ir.piana.business.prediction.module.competition.data.repository.WeeklyMatchesRepository;
import ir.piana.business.prediction.module.competition.model.WeeklyMatchModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/module/competition/")
public class MatchesRest {
    @Autowired
    private WeeklyMatchesRepository weeklyMatchesRepository;

    @Autowired
    private SeasonRepository seasonRepository;

    @PostConstruct
    public void init() {
        System.out.println();
    }

    @GetMapping(path = "weekly-matches",
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
}
