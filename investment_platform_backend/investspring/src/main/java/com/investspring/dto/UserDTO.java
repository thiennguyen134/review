package com.investspring.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
public class UserDTO {
    // Getters and setters
    private String username;
    private Set<String> roles;

}
