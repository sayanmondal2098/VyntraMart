package com.tmsl.vmart.dao;

import com.tmsl.vmart.model.Customer;

public interface CustomerDAO {
	
	public boolean saveCustomer(Customer customer);
	
	public boolean isExistCustomer(String email);
	
	public boolean verifyCustomer(String email, String password);

}
