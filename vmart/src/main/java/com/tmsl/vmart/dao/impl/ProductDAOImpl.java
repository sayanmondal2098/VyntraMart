package com.tmsl.vmart.dao.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.test.context.ContextConfiguration;

import com.tmsl.vmart.config.ApplicationContextConfig;
import com.tmsl.vmart.dao.ProductDAO;
import com.tmsl.vmart.model.Product;

@Repository
@Transactional
@ContextConfiguration(classes = { ApplicationContextConfig.class })
public class ProductDAOImpl implements ProductDAO {

	@Autowired
	private SessionFactory sessionFactory;

	public ProductDAOImpl(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	public boolean saveproduct(Product product) {
		Session session = sessionFactory.getCurrentSession();
		try {
			session.save(product);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public List<Product> getAllProducts() {
		Session session = sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<Product> pList = session.createQuery("from products").list();
		return pList;
	}

	public boolean isExistingProduct(Long pId) {
		Session session = sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<Product> pList = session.createQuery("from Product where pid=:param_pId")
				.setParameter("param_pId", pId)
				.list();
		if (pList.size()>0) {
			return true;
		} else {
			return false;
		}
	}
	
	public Product getProductBypId(Long pId) {
		Session session = sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<Product> pList = session.createQuery("from Product where pid=:param_pId")
				.setParameter("param_pId", pId)
				.list();
		return pList.get(0);
	}



}
