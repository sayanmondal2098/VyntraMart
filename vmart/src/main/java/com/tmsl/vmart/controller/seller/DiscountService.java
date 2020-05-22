package com.tmsl.vmart.controller.seller;

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

import com.tmsl.vmart.dao.DiscountDAO;
import com.tmsl.vmart.model.Discount;

@Controller
@CrossOrigin
public class DiscountService {

	@Autowired
	private DiscountDAO discountDAO;

	public DiscountService(DiscountDAO discountDAO) {
		super();
		this.discountDAO = discountDAO;
	}

	@RequestMapping(value = "/all_discounts", method = RequestMethod.GET)
	public ResponseEntity<String> allDiscount() {
		List<Discount> discountList = discountDAO.getAllDiscount();
		JSONObject result = new JSONObject();
		JSONArray discountArray = new JSONArray();
		for (Discount d : discountList) {
			JSONObject tempCust = new JSONObject();
			tempCust.put("discount getPercentage", d.getPercentage());
			tempCust.put("discount id", d.getDiscountID());
			discountArray.put(tempCust);
		}
		result.put("discounts", discountArray);

		return new ResponseEntity<String>(result.toString(), HttpStatus.OK);
	}
}
