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
import com.tmsl.vmart.dao.CustomerDAO;
import com.tmsl.vmart.model.Customer;

@Repository
@Transactional
@ContextConfiguration(classes = { ApplicationContextConfig.class })
public class CustomerDAOImpl implements CustomerDAO{
	
	@Autowired
	private SessionFactory sessionFactory;

	public CustomerDAOImpl(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public boolean saveCustomer(Customer customer) {
		// TODO Auto-generated method stub
		try {
			Session session=sessionFactory.getCurrentSession();
			session.save(customer);
			return true;
		} catch (HibernateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
	}

	public boolean isExistCustomer(String email) {
		// TODO Auto-generated method stub
		Session session=sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<Customer> customerList=session
				.createQuery("from Customer where email=:param_email")
				.setParameter("param_email",email)
				.list();
		if(customerList.size()>0)
		{
			return true;
		}
		return false;
	}
	
	

}
