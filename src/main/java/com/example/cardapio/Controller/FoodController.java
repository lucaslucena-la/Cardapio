package com.example.cardapio.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.cardapio.food.Food;
import com.example.cardapio.food.FoodRepository;

@RestController
@RequestMapping("food")
public class FoodController {
	
	@Autowired
	private FoodRepository repository;
	
	@GetMapping
	public List<Food> getAll() {
		
		
		List<Food> foodList = repository.findAll();
		return foodList;
	}
}
