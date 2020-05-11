package com.tmsl.vmart.dao.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.test.context.ContextConfiguration;

import com.tmsl.vmart.config.ApplicationContextConfig;
import com.tmsl.vmart.dao.CategoryDAO;
import com.tmsl.vmart.model.Category;


@Repository
@Transactional
@ContextConfiguration(classes = {ApplicationContextConfig.class})
public class CategoryDAOImpl implements CategoryDAO{
	
	@Autowired
	private SessionFactory sessionFactory;
	
	public CategoryDAOImpl(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public boolean saveCatagory(Category category) {
		try {
			Session session = sessionFactory.getCurrentSession();
			session.save(category);
			return true;
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return false;
		}
	}

	public boolean isExistingCatagory(String sizeChart) {
		Session session=sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<Category> categories = session
				.createQuery("from Category where sizeChart=:param_sizeChart")
				.setParameter("param_sizeChart",sizeChart)
				.list();
		if (categories.size() >0) {
			return true;
		}
		return false;
	}

	public boolean removeCatagory(Category category) {
		// TODO Auto-generated method stub
		return false;
	}

}
