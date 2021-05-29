package ir.piana.business.prediction.module.competition.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class WeeklyMatchCompetitionModel {
    private long competitionId;
    private long predictionId;
    private long hostTeamId;
    private String hostTeamName;
    private String hostTeamLogo;
    private long hostGoals;
    private long guestTeamId;
    private String guestTeamName;
    private String guestTeamLogo;
    private long guestGoals;
}
