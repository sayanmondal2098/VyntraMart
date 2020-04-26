package com.tmsl.vmart.controller;

import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.tmsl.vmart.dao.CustomerDAO;
import com.tmsl.vmart.model.Customer;

@Controller
public class SuperController {
	
	@Autowired
	private CustomerDAO customerDAO;

	public SuperController(CustomerDAO customerDAO) {
		super();
		this.customerDAO = customerDAO;
	}
	
	@RequestMapping(value = "/all_customers",method = RequestMethod.GET)
	public ModelAndView register(){
		List<Customer> customers=customerDAO.getAllCustomers();
		JSONObject result=new JSONObject();	
		JSONArray customerList=new JSONArray();
		for(Customer c:customers)
		{
			JSONObject tempCust=new JSONObject();
			tempCust.put("cid", c.getCid());
			tempCust.put("name", c.getName());
			tempCust.put("email", c.getEmail());
			tempCust.put("password", c.getPassword());
			customerList.put(tempCust);
		}
		result.put("customers", customerList);
		ModelAndView mv=new ModelAndView();
		mv.setViewName("temp_display");
		mv.addObject("response",result);
		return mv;
	}

}
