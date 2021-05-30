package ir.piana.business.prediction.module.competition.data.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "weekly_matches")
@SequenceGenerator(name = "master_seq", initialValue = 1, sequenceName = "master_seq", allocationSize = 1)
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class WeeklyMatchesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "master_seq")
    @Column(name = "ID")
    private long id;
    @Column(name = "weekly_match_status_id")
    private long statusId;
    @ManyToOne
    @JoinColumn(name="season_id")
    SeasonEntity seasonEntity;
    @Column(name = "week_number")
    private long weekNumber;
    @Column(name = "start_date")
    private String startDate;
    @Column(name = "end_date")
    private String endDate;
    @Column(name = "is_active")
    @JsonProperty("isActive")
    private boolean isActive;
}
