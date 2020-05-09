package com.tmsl.vmart.dao.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.test.context.ContextConfiguration;

import com.tmsl.vmart.config.ApplicationContextConfig;
import com.tmsl.vmart.dao.SellerDAO;
import com.tmsl.vmart.model.Product;
import com.tmsl.vmart.model.Seller;

@Repository
@Transactional
@ContextConfiguration(classes = ApplicationContextConfig.class)
public class SellerDAOImpl implements SellerDAO {

	@Autowired
	private SessionFactory sessionFactory;

	public SellerDAOImpl(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public boolean saveSeller(Seller seller) {
		try {
			Session session = sessionFactory.getCurrentSession();
			session.save(seller);
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	public boolean isExistingSeller(String name) {
		Session session = sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<Seller> customerList = session.createQuery("from seller where name=:param_name")
				.setParameter("param_name", name).list();
		if (customerList.size() > 0) {
			return true;
		}
		return false;
	}

	public boolean verifySeller(String name, String password) {
		Session session = sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<Seller> sellerList = session.createQuery("from seller where name=:param_name and password=:param_pass")
				.setParameter("param_name", name).setParameter("param_pass", password).list();
		if (sellerList.size() > 0) {
			return true;
		} else {
			return false;
		}
	}

	public Seller getSellerByLoginCredentials(String name, String password) {
		Session session = sessionFactory.getCurrentSession();
		Seller seller = (Seller) session.createQuery("from seller where name=:param_name and password=:param_pass")
				.setParameter("param_name", name).setParameter("param_pass", password).uniqueResult();
		return seller;
	}

	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		return null;
	}

	public boolean addProduct(Product product) {
		// TODO Auto-generated method stub
		return false;
	}

	public boolean removeProduct(Integer pId) {
		// TODO Auto-generated method stub
		return false;
	}

}
