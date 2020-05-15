package com.tmsl.vmart.dao.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.test.context.ContextConfiguration;

import com.tmsl.vmart.config.ApplicationContextConfig;
import com.tmsl.vmart.dao.DiscountDAO;
import com.tmsl.vmart.model.Discount;

@Repository
@Transactional
@ContextConfiguration(classes = { ApplicationContextConfig.class })
public class DiscountDAOImpl implements DiscountDAO {

	@Autowired
	private SessionFactory sessionFactory;

	public DiscountDAOImpl(SessionFactory sessionFactory) {
		super();
		this.sessionFactory = sessionFactory;
	}

	public boolean saveDiscount(double discount) {
		Session session = sessionFactory.getCurrentSession();
		try {
			session.save(discount);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public Discount getDiscountByValue(double percentage) {
		Session session = sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<Discount> categorie = session.createQuery("from Discount where percentage=:param_percentage")
				.setParameter("param_percentage", percentage).list();
		return categorie.get(0);
	}

}
