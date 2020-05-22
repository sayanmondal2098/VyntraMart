package com.tmsl.vmart.dao;

import java.util.List;

import com.tmsl.vmart.model.Discount;

public interface DiscountDAO {
	
	public boolean saveDiscount(double discount);
	
	public Discount getDiscountByValue(double percentage);
	
	public List<Discount> getAllDiscount();
}
