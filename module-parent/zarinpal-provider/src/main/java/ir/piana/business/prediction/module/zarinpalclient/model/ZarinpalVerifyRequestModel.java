package ir.piana.business.prediction.module.zarinpalclient.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ZarinpalVerifyRequestModel {
    private String merchant_id;
    private Integer amount;
    private String authority;
}
