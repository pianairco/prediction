package ir.piana.business.prediction.module.competition.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompetitionResultModel {
    private long weeklyMatchId;
    private long competitionId;
    private long hostGoals;
    private long guestGoals;
    private long registeringTime;
}
