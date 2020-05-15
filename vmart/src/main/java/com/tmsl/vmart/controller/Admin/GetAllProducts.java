package com.tmsl.vmart.controller.Admin;

import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.tmsl.vmart.dao.ProductDAO;
import com.tmsl.vmart.model.Product;

@CrossOrigin
@Controller
public class GetAllProducts {

	@Autowired
	private ProductDAO productDAO;

	public GetAllProducts(ProductDAO productDAO) {
		super();
		this.productDAO = productDAO;
	}

	@RequestMapping(value = "/all_products", method = RequestMethod.POST)
	public ResponseEntity<String> Login(@RequestParam("adminId") String adminEmail,
			@RequestParam("password") String adminPassword) {
		List<Product> products = productDAO.getAllProducts();
		JSONObject result = new JSONObject();
		JSONArray productList = new JSONArray();
		for (Product p : products) {
			JSONObject tempCust = new JSONObject();
			tempCust.put("cid", p.getPid());
			tempCust.put("name", p.getName());
			tempCust.put("getDescription", p.getDescription());
			tempCust.put("price", p.getPrice());
			productList.put(tempCust);
		}
		result.put("products", productList);

		return new ResponseEntity<String>(result.toString(), HttpStatus.OK);
	}

}
