package com.tmsl.vmart.dao.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.test.context.ContextConfiguration;

import com.mysql.cj.protocol.Resultset;
import com.mysql.cj.x.protobuf.MysqlxDatatypes.Scalar;
import com.tmsl.vmart.config.ApplicationContextConfig;
import com.tmsl.vmart.dao.AdminSellerDAO;
import com.tmsl.vmart.model.AdminSeller;
import com.tmsl.vmart.model.Customer;
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

	public boolean saveSeller(Seller seller) {
		try {
			Session session = sessionFactory.getCurrentSession();
			session.save(seller);
			return true;
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
			return false;
		}
	}

	public boolean isExistingSeller(String email) {
		Session session=sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<AdminSeller> customerList=session
				.createQuery("from AdminSeller where email=:param_email")
				.setParameter("param_email",email)
				.list();
		if(customerList.size()>0)
		{
			return true;
		}
		return false;
	}
	

	public boolean verifySeller(String email, String password) {
		Session session =  sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<AdminSeller> customerList = session
				.createQuery("from AdminSeller where email=:param_email and password=:param_pass")
				.setParameter("param_email", email)
				.setParameter("param_pass",password)
				.list();
		if (customerList.size()>0) {
			return true;
		} else {
			return false;
		}
	}

	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		Session session = sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<Product> pList = session
				.createQuery("from products")
				.list();
		return pList;
	}

	public List<Seller> getAllSellers() {
		Session session = sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<Seller> sList = session
				.createQuery("from seller")
				.list();
		return sList;
	}


}
