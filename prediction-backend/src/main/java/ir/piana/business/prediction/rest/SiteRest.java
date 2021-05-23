package ir.piana.business.prediction.rest;

import ir.piana.business.prediction.common.data.cache.AppDataCache;
import ir.piana.business.prediction.common.data.cache.DataSourceService;
import ir.piana.business.prediction.common.model.ResponseModel;
import ir.piana.business.prediction.common.util.CommonUtils;
import ir.piana.business.prediction.module.auth.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/site")
public class SiteRest {
    SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy/MM/dd");
    SimpleDateFormat simpleTimeFormat = new SimpleDateFormat("hh:mm:ss");

    @Autowired
    private DataSourceService dataSourceService;

    @Autowired
    private AppDataCache appDataCache;
}
