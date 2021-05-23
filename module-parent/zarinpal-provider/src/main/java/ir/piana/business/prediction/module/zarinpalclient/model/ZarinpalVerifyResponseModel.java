package ir.piana.business.prediction.module.zarinpalclient.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ZarinpalVerifyResponseModel {
    private ZarinpalVerifyResponseDataModel data;
    private List<String> errors;
}
