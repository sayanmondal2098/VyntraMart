package com.tmsl.vmart.dao;

import java.util.List;

import com.tmsl.vmart.model.Product;

public interface ProductDAO {

	public boolean saveproduct(Product product);

	public List<Product> getAllProducts();
	
	public List<Product> getProductsByCategory(String catID);
	
	public Product getProductsByPID(Long pID);

	public boolean isExistingProduct(Long pId);

	public Product getProductBySellerName(Integer pId);

}
