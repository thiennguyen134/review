package com.investspring.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "app_user") // Rename the table to avoid using reserved keywords
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String email;
}