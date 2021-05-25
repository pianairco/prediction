package ir.piana.business.prediction.module.competition.data.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "weekly_matches_competition")
@SequenceGenerator(name = "master_seq", initialValue = 1, sequenceName = "master_seq", allocationSize = 1)
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class WeeklyMatchesCompetitionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "master_seq")
    @Column(name = "ID")
    private long id;
    @Column(name = "weekly_matches_id")
    private long weeklyMatchesId;
    @Column(name = "host_team_id")
    private long hostTeamId;
    @Column(name = "guest_team_id")
    private String guestTeamId;
}
