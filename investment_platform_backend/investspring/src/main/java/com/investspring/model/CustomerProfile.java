package com.investspring.model;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "customer_profiles")
public class CustomerProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @Column(name = "profile_key", nullable = false)
    private String profileKey;

    @Column(name = "profile_value")
    private String profileValue;
}
