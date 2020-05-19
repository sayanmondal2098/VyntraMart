package com.tmsl.vmart.controller.seller;

import static com.tmsl.vmart.utils.Encryptionmd5.md5;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.tmsl.vmart.dao.SellerDAO;
import com.tmsl.vmart.model.Seller;

@CrossOrigin
@Controller
public class SellerLoginController {

	@Autowired
	private SellerDAO sellerDAO;

	public SellerLoginController(SellerDAO sellerDAO) {
		super();
		this.sellerDAO = sellerDAO;
	}

	@RequestMapping(value = "/sellerLogin", method = RequestMethod.POST)
	public ResponseEntity<String> sellerLogin(@RequestParam("name") String name,
			@RequestParam("password") String password) {
		JSONObject result = new JSONObject();
		if (sellerDAO.isExistingSeller(name)) {
			result.put("existence_check", "found");
			if (sellerDAO.verifySeller(name, md5(password))) {
				result.put("login_status", "successful");
				Seller seller = sellerDAO.getSellerByLoginCredentials(name, md5(password));
				result.put("sid", seller.getSellerID());
				result.put("name", seller.getName());
				result.put("verified", seller.getVerified());
			} else {
				result.put("login_status", "failed");
			}
		} else {
			result.put("existence_check", "not_found");
		}
		return new ResponseEntity<String>(result.toString(), HttpStatus.OK);
	}

}
