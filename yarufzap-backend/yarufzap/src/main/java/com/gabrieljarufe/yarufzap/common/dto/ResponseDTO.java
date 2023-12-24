package com.gabrieljarufe.yarufzap.common.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class ResponseDTO {
    public Integer code;
    public String message;
}
