package ir.piana.business.prediction.module.competition.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PredictingMatchesModel {
    private long weeklyMatchId;
    private long competitionId;
    private long predictionId;
    private long hostGoals;
    private long guestGoals;
}
