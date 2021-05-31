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
public class WeeklyMatchModel {
    private long id;
    private long statusId;
    private String leagueName;
    private String leagueLogo;
    private String seasonTag;
    private long weekNumber;
    private String startDate;
    private String endDate;
    @JsonProperty("isActive")
    private boolean isActive;
}
