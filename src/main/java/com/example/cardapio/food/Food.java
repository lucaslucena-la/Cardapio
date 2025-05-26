package com.example.cardapio.food;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name = "foods")
@Entity(name = "foods")
public class Food {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;  //chave primária
	private String title;
	private String image;
	private Integer price;
	
}
