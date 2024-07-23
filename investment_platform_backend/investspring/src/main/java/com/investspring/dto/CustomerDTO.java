package com.investspring.dto;

import lombok.Data;

@Data
public class CustomerDTO {
    private String firstName;
    private String lastName;
    private java.time.LocalDate dateOfBirth;
}
