package com.tmsl.vmart.dao;

import com.tmsl.vmart.model.Category;

public interface CategoryDAO {
	
	public boolean saveCatagory(Category category);
	
	public boolean isExistingCatagory(String sizeChart);
	
	public boolean removeCatagory(Category category);

}
