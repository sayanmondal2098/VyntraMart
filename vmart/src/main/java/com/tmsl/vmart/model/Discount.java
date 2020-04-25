package com.tmsl.vmart.model;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="discounts")
public class Discount {
	
	private Long discountID;
	private Set<Product> products;
	private Double percentage;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long getDiscountID() {
		return discountID;
	}
	
	public void setDiscountID(Long discountID) {
		this.discountID = discountID;
	}
	
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "discount")
	public Set<Product> getProducts() {
		return products;
	}
	
	public void setProducts(Set<Product> products) {
		this.products = products;
	}
	
	public Double getPercentage() {
		return percentage;
	}
	
	public void setPercentage(Double percentage) {
		this.percentage = percentage;
	}
	
	

}
