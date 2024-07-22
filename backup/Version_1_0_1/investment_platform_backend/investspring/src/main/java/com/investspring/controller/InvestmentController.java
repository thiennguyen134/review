package com.investspring.controller;

import com.investspring.model.Investment;
import com.investspring.service.InvestmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/investments")
public class InvestmentController {

    @Autowired
    private InvestmentService investmentService;

    @PostMapping("/add")
    public Investment addInvestment(@RequestBody Investment investment) {
        return investmentService.save(investment);
    }

    @GetMapping("/user/{userId}")
    public List<Investment> getInvestmentsByUserId(@PathVariable Long userId) {
        return investmentService.findByUserId(userId);
    }
}
