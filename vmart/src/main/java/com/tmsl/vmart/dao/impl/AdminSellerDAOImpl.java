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
import com.tmsl.vmart.dao.AdminSellerDAO;
<<<<<<< HEAD
import com.tmsl.vmart.model.Category;
=======
import com.tmsl.vmart.model.AdminSeller;
>>>>>>> 105dc22d1951618d4809cbc58d4b206bccb041ca
import com.tmsl.vmart.model.Product;
import com.tmsl.vmart.model.Seller;

@Repository
@Transactional
@ContextConfiguration(classes = { ApplicationContextConfig.class })
public class AdminSellerDAOImpl implements AdminSellerDAO {

	@Autowired
	private SessionFactory sessionFactory;

	public AdminSellerDAOImpl(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		Session session = sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<Product> pList = session.createQuery("from products").list();
		return pList;
	}

	public List<Seller> getAllSellers() {
		Session session = sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<Seller> sList = session.createQuery("from seller").list();
		return sList;
	}

	public boolean saveCatagory(Category category) {
		try {
			Session session = sessionFactory.getCurrentSession();
			session.save(category);
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

}
