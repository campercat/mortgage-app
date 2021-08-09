package com.mortgage.app.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
  @GetMapping(value = {"/applications"})
  public String forward() {
    return "forward:/";
  }
}
