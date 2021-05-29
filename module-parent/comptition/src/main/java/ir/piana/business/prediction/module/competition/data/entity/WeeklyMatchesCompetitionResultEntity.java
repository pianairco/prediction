package ir.piana.business.prediction.module.competition.data.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "weekly_matches_competition_result")
@SequenceGenerator(name = "master_seq", initialValue = 1, sequenceName = "master_seq", allocationSize = 1)
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class WeeklyMatchesCompetitionResultEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "master_seq")
    @Column(name = "ID")
    private long id;
    @ManyToOne
    @JoinColumn(name="weekly_matches_competition_id")
    WeeklyMatchesCompetitionEntity competitionEntity;
    @Column(name = "host_goals")
    private long hostGoals;
    @Column(name = "guest_goals")
    private long guestGoals;
}
