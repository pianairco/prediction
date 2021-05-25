package ir.piana.business.prediction.module.competition.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class WeeklyMatchModel {
    private long id;
    private String leagueName;
    private String leagueLogo;
    private String seasonTag;
    private long weekNumber;
    private String startDate;
    private String endDate;
}
