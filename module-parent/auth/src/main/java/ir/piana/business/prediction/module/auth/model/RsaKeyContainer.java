package ir.piana.business.prediction.module.auth.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.KeyPair;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RsaKeyContainer {
    private KeyPair keyPair;
    private String base64PublicKey;
    private String base64PrivateKey;
}
