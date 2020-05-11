package com.tmsl.vmart.controller.Admin;

import javax.annotation.Resource;

import org.apache.catalina.startup.Catalina;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.tmsl.vmart.dao.CategoryDAO;
import com.tmsl.vmart.model.Category;


@CrossOrigin
@Controller
public class CaterogyService {
	private CategoryDAO categoryDAO;
	
	public CaterogyService(CategoryDAO categoryDAO) {
		// TODO Auto-generated constructor stub
		super();
		this.categoryDAO = categoryDAO;
	}
	
	@RequestMapping(value = "/addCategary",method = RequestMethod.POST)
	public ResponseEntity<String> addCategary(
			@RequestParam("catName") String catName,
			@RequestParam("sizeChart") String sizeChartString) {
		JSONObject result=new JSONObject();
		if (!categoryDAO.isExistingCatagory(sizeChartString)) {
			result.put("existence_check", "not_found");
			Category category = new Category();
			category.setCatName(catName);
			category.setSizeChart(sizeChartString);
			if (categoryDAO.saveCatagory(category)) {
				result.put("registration_status", "successful");
				result.put("catid", category.getCatID());
				result.put("catName", category.getCatName());
				result.put("catUrl", category.getSizeChart());
				result.put("products", category.getProducts());
			}else
			{
				result.put("registration_status", "failed");
			}
		}
		else
		{
			result.put("existence_check", "found");
		}
		return new ResponseEntity<String>(result.toString(), HttpStatus.OK);
		
	}
	
	
	
	@RequestMapping(value = "/removeCategary",method = RequestMethod.POST)
	public ResponseEntity<String> removeCategary(
			@RequestParam("catName") String catName ){
		JSONObject result=new JSONObject();
		if (categoryDAO.isExistingCatagory(catName)) {
			result.put("existence_check", "found");
			Category category = categoryDAO.getCategoriesByCatName(catName);
			categoryDAO.removeCatagory(category);
			result.put("Entry Status", "deleted");
		}
		return new ResponseEntity<String>(result.toString(), HttpStatus.OK);
		
	}
}
