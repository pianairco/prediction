package ir.piana.business.prediction.module.competition.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class WeeklyMatchCompetitionModel {
    private String organizer;
    private long competitionId;
    private long predictionId;
    private long hostTeamId;
    private String hostTeamName;
    private String hostTeamLogo;
    private Long hostGoals;
    private long guestTeamId;
    private String guestTeamName;
    private String guestTeamLogo;
    private Long guestGoals;
    private Long registeringTime;
    private String[] tags;
    private Long registeredHostGoals;
    private Long registeredGuestGoals;
    @JsonProperty("isLocked")
    private boolean isLocked;
}
