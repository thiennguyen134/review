package com.investspring.service;

import com.investspring.model.Investment;
import com.investspring.repository.InvestmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvestmentService {

    @Autowired
    private InvestmentRepository investmentRepository;

    public Investment save(Investment investment) {
        return investmentRepository.save(investment);
    }

    public List<Investment> findByUserId(Long userId) {
        return investmentRepository.findByUserId(userId);
    }
}
