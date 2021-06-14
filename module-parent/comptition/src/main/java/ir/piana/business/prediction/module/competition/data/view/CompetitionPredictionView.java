package ir.piana.business.prediction.module.competition.data.view;

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
public class CompetitionPredictionView {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "master_seq")
    @Column
    private long id;
//    @Column
//    private String organizer;
//    @Column
//    private long competitionId;
//    @Column
//    private long predictionId;
    /*@Column
    private long hostTeamId;
    @Column
    private String hostTeamName;
    @Column
    private String hostTeamLogo;*/
    @Column(name = "host_goals")
    private long hostGoals;
    /*@Column
    private long guestTeamId;
    @Column
    private String guestTeamName;
    @Column
    private String guestTeamLogo;*/
    @Column(name = "guest_goals")
    private long guestGoals;
    @Column(name = "registering_time")
    private long registeringTime;
/*    @Column
    private String tags;
    @Column
    private long registeredHostGoals;
    @Column
    private long registeredGuestGoals;*/
}
