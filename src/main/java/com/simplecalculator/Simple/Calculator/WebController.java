package com.simplecalculator.Simple.Calculator;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
    @GetMapping("/simple-calculator")
    public String calInterface(){
        return "SimpleCalculator";
    }
}
