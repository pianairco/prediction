package ir.piana.business.prediction.module.competition.rest;

import ir.piana.business.prediction.common.model.ResponseModel;
import ir.piana.business.prediction.module.auth.data.entity.UserEntity;
import ir.piana.business.prediction.module.auth.model.UserModel;
import ir.piana.business.prediction.module.competition.data.entity.*;
import ir.piana.business.prediction.module.competition.data.repository.*;
import ir.piana.business.prediction.module.competition.model.CompetitionResultModel;
import ir.piana.business.prediction.module.competition.model.PredictingMatchesModel;
import ir.piana.business.prediction.module.competition.model.WeeklyMatchCompetitionModel;
import ir.piana.business.prediction.module.competition.model.WeeklyMatchModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/modules/competition/weekly-matches")
public class MatchesRest {
    @Autowired
    private WeeklyMatchesCompetitionPredictionRepository competitionPredictionRepository;

    @Autowired
    private WeeklyMatchesRepository weeklyMatchesRepository;

    @Autowired
    private WeeklyMatchesCompetitionRepository competitionRepository;

    @Autowired
    private WeeklyMatchesCompetitionResultRepository competitionResultRepository;

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private SeasonRepository seasonRepository;

    @PostConstruct
    public void init() {
        System.out.println();
    }

    @GetMapping(path = "open",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<WeeklyMatchModel>> getWeeklyMatches() {
        List<WeeklyMatchesEntity> futureWeeklyMatches = weeklyMatchesRepository.
                findFutureWeeklyMatches("1400/03/18", "1400/03/20");
        List<WeeklyMatchModel> models = futureWeeklyMatches.stream()
                .map(f -> WeeklyMatchModel.builder()
                        .id(f.getId())
                        .statusId(f.getStatusId())
                        .leagueLogo(String.valueOf(f.getSeasonEntity().getLeagueEntity().getId()).concat(".png"))
                        .leagueName(f.getSeasonEntity().getLeagueEntity().getName())
                        .seasonTag(f.getSeasonEntity().getTag())
                        .weekNumber(f.getWeekNumber())
                        .startDate(f.getStartDate())
                        .endDate(f.getEndDate())
                        .isActive(f.isActive())
                        .build())
                .collect(Collectors.toList());
        return ResponseEntity.ok(models);
    }

    @GetMapping(path = "competitions",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<WeeklyMatchCompetitionModel>> getWeeklyMatchesCompetitions(
            @RequestParam("weeklyMatchesId") long weeklyMatchId) {
        List<WeeklyMatchesCompetitionEntity> weeklyMatchesCompetitions = competitionRepository.
                findAllByWeeklyMatchesId(weeklyMatchId);

        List<WeeklyMatchCompetitionModel> competitionModels = new ArrayList<>();
        if(weeklyMatchesCompetitions != null && !weeklyMatchesCompetitions.isEmpty()) {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            UserEntity userEntity = null;
            if(authentication.getPrincipal() instanceof UserModel) {
                userEntity = ((UserModel) authentication.getPrincipal()).getUserEntity();
            }
            List<WeeklyMatchesCompetitionPredictionEntity> registered = competitionPredictionRepository.
                    findRegisteredByUserAndCompetition(
                            userEntity.getId(),
                            Arrays.asList(weeklyMatchId));

            for(WeeklyMatchesCompetitionEntity competitionEntity : weeklyMatchesCompetitions) {
                Optional<WeeklyMatchesCompetitionPredictionEntity> any = registered.stream()
                        .filter(p -> p.getCompetitionEntity().getId() == competitionEntity.getId())
                        .findAny();
                Optional<TeamEntity> hostTeamEntity = teamRepository
                        .findById(competitionEntity.getHostTeamId());
                Optional<TeamEntity> guestTeamEntity = teamRepository
                        .findById(competitionEntity.getGuestTeamId());
                if(!any.isPresent()) {
                    competitionModels.add(WeeklyMatchCompetitionModel.builder()
                            .competitionId(competitionEntity.getId())
                            .hostTeamId(hostTeamEntity.get().getId())
                            .hostTeamLogo(hostTeamEntity.get().getLogo())
                            .hostTeamName(hostTeamEntity.get().getName())
                            .guestTeamId(guestTeamEntity.get().getId())
                            .guestTeamName(guestTeamEntity.get().getName())
                            .guestTeamLogo(guestTeamEntity.get().getLogo())
                            .build());
                } else {
                    competitionModels.add(WeeklyMatchCompetitionModel.builder()
                            .competitionId(competitionEntity.getId())
                            .predictionId(any.isPresent() ? any.get().getId() : null)
                            .hostGoals(any.isPresent() ? any.get().getHostGoals() : null)
                            .guestGoals(any.isPresent() ? any.get().getGuestGoals() : null)
                            .hostTeamId(hostTeamEntity.get().getId())
                            .hostTeamLogo(hostTeamEntity.get().getLogo())
                            .hostTeamName(hostTeamEntity.get().getName())
                            .guestTeamId(guestTeamEntity.get().getId())
                            .guestTeamName(guestTeamEntity.get().getName())
                            .guestTeamLogo(guestTeamEntity.get().getLogo())
                            .build());
                }
            }
        }
        return ResponseEntity.ok(competitionModels);
    }

    @PostMapping(path = "predicting-matches",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<WeeklyMatchCompetitionModel>> predictingMatches(
            @RequestBody List<PredictingMatchesModel> predictingMatchesModels) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserEntity userEntity = null;
        if(authentication.getPrincipal() instanceof UserModel) {
            userEntity = ((UserModel) authentication.getPrincipal()).getUserEntity();
        }
        List<WeeklyMatchesCompetitionPredictionEntity> result = new ArrayList<>();
        long weeklyMatchId = 0;
        if(userEntity != null) {
            List<Long> collect = predictingMatchesModels.stream()
                    .map(p -> p.getWeeklyMatchId()).collect(Collectors.toList());
            weeklyMatchId = collect.get(0);
            List<WeeklyMatchesCompetitionPredictionEntity> registeredPredictions = competitionPredictionRepository
                    .findRegisteredByUserAndCompetition(userEntity.getId(), collect);
            if(registeredPredictions != null) {
                for(WeeklyMatchesCompetitionPredictionEntity registeredPrediction: registeredPredictions) {
                    Optional<PredictingMatchesModel> first = predictingMatchesModels.stream()
                            .filter(p -> p.getPredictionId() == registeredPrediction.getId()).findFirst();
                    if (first.isPresent()) {
                        registeredPrediction.setHostGoals(first.get().getHostGoals());
                        registeredPrediction.setGuestGoals(first.get().getGuestGoals());
                        result.add(registeredPrediction);
                    }
                }
            }
        }

        List<Long> regiteredIds = result.stream().map(p -> p.getId()).collect(Collectors.toList());
        List<PredictingMatchesModel> remainedPredictionModels = predictingMatchesModels.stream()
                .filter(p -> !regiteredIds.contains(p.getPredictionId()))
                .collect(Collectors.toList());

        for(PredictingMatchesModel model: remainedPredictionModels) {
            result.add(WeeklyMatchesCompetitionPredictionEntity.builder()
                    .userEntity(userEntity)
                    .competitionEntity(competitionRepository.findById(model.getCompetitionId()).get())
                    .hostGoals(model.getHostGoals())
                    .guestGoals(model.getGuestGoals())
                    .build());
        }

        competitionPredictionRepository.saveAll(result);
        return this.getWeeklyMatchesCompetitions(weeklyMatchId);
    }

    @PutMapping(path = "weekly-matches-close",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseModel> weeklyMatchesClose(
            @RequestBody Map<String, Long> body) {
        Optional<WeeklyMatchesEntity> byId = weeklyMatchesRepository.findById(body.get("weekly-matches-id"));
        if(byId.isPresent() && byId.get().getStatusId() == 1) {
            byId.get().setStatusId(2);
            byId.get().setActive(false);
            weeklyMatchesRepository.save(byId.get());

            List<WeeklyMatchesCompetitionEntity> competitions = competitionRepository
                    .findAllByWeeklyMatchesId(byId.get().getId());

            List<WeeklyMatchesCompetitionResultEntity> result = new ArrayList<>();
            for(WeeklyMatchesCompetitionEntity competition : competitions) {
                result.add(WeeklyMatchesCompetitionResultEntity.builder()
                        .hostGoals(0)
                        .guestGoals(0)
                        .competitionEntity(competition)
                        .registeringTime(0)
                        .build());
            }

            competitionResultRepository.saveAll(result);
        }
        return ResponseEntity.ok(ResponseModel.builder().code(0).build());
    }

    @GetMapping(path = "competition-results",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<WeeklyMatchCompetitionModel>> getWeeklyMatchesCompetitionResults(
            @RequestParam("weeklyMatchesId") long weeklyMatchId) {
        List<WeeklyMatchesCompetitionResultEntity> resultEntities = competitionResultRepository
                .findLastResults(weeklyMatchId);

        List<WeeklyMatchCompetitionModel> competitionModels = new ArrayList<>();
        if(resultEntities != null && !resultEntities.isEmpty()) {
            for(WeeklyMatchesCompetitionResultEntity resultEntity : resultEntities) {
                Optional<TeamEntity> hostTeamEntity = teamRepository
                        .findById(resultEntity.getCompetitionEntity().getHostTeamId());
                Optional<TeamEntity> guestTeamEntity = teamRepository
                        .findById(resultEntity.getCompetitionEntity().getGuestTeamId());
                competitionModels.add(WeeklyMatchCompetitionModel.builder()
                        .competitionId(resultEntity.getCompetitionEntity().getId())
                        .hostTeamId(hostTeamEntity.get().getId())
                        .hostTeamLogo(hostTeamEntity.get().getLogo())
                        .hostTeamName(hostTeamEntity.get().getName())
                        .hostGoals(resultEntity.getHostGoals())
                        .guestTeamId(guestTeamEntity.get().getId())
                        .guestTeamName(guestTeamEntity.get().getName())
                        .guestTeamLogo(guestTeamEntity.get().getLogo())
                        .guestGoals(resultEntity.getGuestGoals())
                        .registeringTime(resultEntity.getRegisteringTime())
                        .build());
            }
        }
        return ResponseEntity.ok(competitionModels);
    }

    @GetMapping(path = "results",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CompetitionResultModel>> getCompetitionResults(
            @RequestParam("weeklyMatchesId") long weeklyMatchId) {
        List<WeeklyMatchesCompetitionResultEntity> competitionResults = competitionResultRepository.
                findLastResults(weeklyMatchId);

        List<CompetitionResultModel> resultModels = new ArrayList<>();
        if(competitionResults != null && !competitionResults.isEmpty()) {
            for(WeeklyMatchesCompetitionResultEntity competitionResult : competitionResults) {
                resultModels.add(CompetitionResultModel.builder()
                        .weeklyMatchId(weeklyMatchId)
                        .competitionId(competitionResult.getCompetitionEntity().getId())
                        .registeringTime(competitionResult.getRegisteringTime())
                        .hostGoals(competitionResult.getHostGoals())
                        .guestGoals(competitionResult.getGuestGoals())
                        .build());
            }
        }
        return ResponseEntity.ok(resultModels);
    }

    @PostMapping(path = "matches-result",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CompetitionResultModel>> matchesResult(
            @RequestBody CompetitionResultModel model) {
        WeeklyMatchesCompetitionResultEntity lastResult = competitionResultRepository
                .findLastResult(model.getCompetitionId());
        if(lastResult.getRegisteringTime() == model.getRegisteringTime()) {
            lastResult.setHostGoals(model.getHostGoals());
            lastResult.setGuestGoals(model.getGuestGoals());
            competitionResultRepository.save(lastResult);
            return getCompetitionResults(model.getWeeklyMatchId());
            /*return ResponseEntity.ok(CompetitionResultModel.builder()
                    .competitionId(lastResult.getCompetitionEntity().getId())
                    .weeklyMatchId(lastResult.getCompetitionEntity().getWeeklyMatchesId())
                    .guestGoals(lastResult.getGuestGoals())
                    .hostGoals(lastResult.getHostGoals())
                    .registeringTime(lastResult.getRegisteringTime())
                    .build());*/
        } else if(lastResult.getRegisteringTime() > model.getRegisteringTime() ||
                lastResult.getHostGoals() > model.getHostGoals() ||
                lastResult.getGuestGoals() > model.getGuestGoals()) {
            return ResponseEntity.badRequest().build();
        }

        WeeklyMatchesCompetitionResultEntity result = WeeklyMatchesCompetitionResultEntity.builder()
                .competitionEntity(competitionRepository.findById(model.getCompetitionId()).get())
                .registeringTime(model.getRegisteringTime())
                .hostGoals(model.getHostGoals())
                .guestGoals(model.getGuestGoals())
                .build();


        competitionResultRepository.save(result);
        /*return ResponseEntity.ok(CompetitionResultModel.builder()
                .competitionId(result.getCompetitionEntity().getId())
                .weeklyMatchId(result.getCompetitionEntity().getWeeklyMatchesId())
                .guestGoals(result.getGuestGoals())
                .hostGoals(result.getHostGoals())
                .registeringTime(result.getRegisteringTime())
                .build());*/
        return getCompetitionResults(model.getWeeklyMatchId());
    }

    @PostMapping(path = "matches-results",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CompetitionResultModel>> matchesResults(
            @RequestBody List<CompetitionResultModel> models) {
        List<WeeklyMatchesCompetitionResultEntity> result = new ArrayList<>();

        for(CompetitionResultModel model: models) {
            result.add(WeeklyMatchesCompetitionResultEntity.builder()
                    .competitionEntity(competitionRepository.findById(model.getCompetitionId()).get())
                    .registeringTime(model.getRegisteringTime())
                    .hostGoals(model.getHostGoals())
                    .guestGoals(model.getGuestGoals())
                    .build());
        }

        competitionResultRepository.saveAll(result);
        return getCompetitionResults(models.get(0).getWeeklyMatchId());
    }
}
