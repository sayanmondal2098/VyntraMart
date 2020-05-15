package com.tmsl.vmart.dao;

import com.tmsl.vmart.model.Discount;

public interface DiscountDAO {
	
	public boolean saveDiscount(double discount);
	
	public Discount getDiscountByValue(double percentage);
}
