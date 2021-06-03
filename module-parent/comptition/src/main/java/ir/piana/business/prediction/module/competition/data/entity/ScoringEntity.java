package ir.piana.business.prediction.module.competition.data.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import ir.piana.business.prediction.module.auth.data.entity.UserEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "scoring")
@SequenceGenerator(name = "master_seq", initialValue = 1, sequenceName = "master_seq", allocationSize = 1)
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ScoringEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "master_seq")
    @Column(name = "ID")
    private long id;
    @ManyToOne
    @JoinColumn(name="weekly_matches_competition_id")
    private WeeklyMatchesCompetitionEntity competitionEntity;
    @Column(name="user_id")
    private long userId;
    @Column(name = "score")
    private long score;
    @Column(name = "step")
    private long step;
    @Column(name = "is_final")
    @JsonProperty("isFinal")
    private boolean isFinal;
    @Column(name = "host_goals")
    private long hostGoals;
    @Column(name = "guest_goals")
    private long guestGoals;
}
