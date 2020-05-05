package com.tmsl.vmart.dao;

import java.util.List;

import com.tmsl.vmart.model.Product;
import com.tmsl.vmart.model.Seller;

public interface AdminSellerDAO {
	
	public boolean saveSeller(Seller seller);
	
	public boolean isExistingSeller(String email);
	
	public boolean verifySeller(String email, String password);
	
	public List<Seller> getAllSellers(); 
	
	public List<Product> getAllProducts();
	
}
