package ir.piana.business.prediction.module.competition.data.entity;

import ir.piana.business.prediction.module.auth.data.entity.UserEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "weekly_matches_competition_prediction")
@SequenceGenerator(name = "master_seq", initialValue = 1, sequenceName = "master_seq", allocationSize = 1)
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class WeeklyMatchesCompetitionPredictionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "master_seq")
    @Column(name = "ID")
    private long id;
    @ManyToOne
    @JoinColumn(name="weekly_matches_competition_id")
    private WeeklyMatchesCompetitionEntity competitionEntity;
    @ManyToOne
    @JoinColumn(name="user_id")
    private UserEntity userEntity;
    @Column(name = "host_goals")
    private long hostGoals;
    @Column(name = "guest_goals")
    private long guestGoals;
}
