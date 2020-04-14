package com.tmsl.vmart.controller;

import static com.tmsl.vmart.utils.Encryptionmd5.md5;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.tmsl.vmart.dao.CustomerDAO;


@Controller
public class LoginController {
	
	@Autowired
	private CustomerDAO customerDAO;
	
	public LoginController(CustomerDAO customerDAO) {
		super();
		this.customerDAO = customerDAO;
	}
	
	@RequestMapping(value = "/login",method = RequestMethod.POST)
	public ModelAndView Login(@RequestParam("email") String email,
			@RequestParam("password") String password) {
		JSONObject result=new JSONObject();	
		if(customerDAO.isExistCustomer(email)==true) 
		{
			if(customerDAO.verifyCustomer(email, md5(password))==true)
			{
				result.put("Login_status", "successful");
				result.put("WLC", email);
			}
		}
		else
		{
			result.put("Login_Status_check", "Failed");
		}
		ModelAndView mv=new ModelAndView();
		mv.setViewName("temp_display");
		mv.addObject("response",result);
		return mv;
	}

}
