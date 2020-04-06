# VMart

## VyntraMart(Online Cloth Mart)

# Objective:

  We are a company that sell Trendy clothes. Most of our sales comes through our popular ecommerce web site that has very high search engine rakings. We are planning to re-engineer our ecommerce web site since it is currently experiencing some serious scalability issues.
Our top priority in this re-engineering effort is the performance and user experience. We are planning to launch a new e-commerce mobile app as part of this re-engineering effort. In addition to this, we need to add a good recommendation engine to both web and mobile apps to improve our sales.

# Application Overview:
Application to include the below modules as a basic ones and additionally, value adds can be included.
    1.eCart
    2.Order Management & Status tracking
    3.Admin Interface – User & Product Management
    4.Payment Gateway – Mock Payment related interfaces.
    5.Secured authentication mechanism
    6.Tax Calculations – Mock this service
    
More Details:
     The admin interface of the current application that is used to manage product catalog and inventory works fine for now and we will continue to use it with the new customer facing application. The new application should integrate well with this. However, if the database design of the existing application imposes a negative impact on new application performance, it is ok to duplicate this data in the new application database.
  
    The current application supports two type of authentications. Some users use their Facebook accounts for the authentication. Our system manages the credentials of the other users. The new application should support both of these user types. The users of Facebook accounts should be able to share the fashion items of this site with their Facebook friends, so that they can share their comments and likes.
    
    
    The current application uses Gateway1 as the payment gateway. We expect the new application to support PayPal an alternative payment method, in addition to Gateway1.
    
    Our current application uses TaxCalc1 service for tax calculations. The new application should continue to use that service. This is a SaaS application. The cost of using it depends on the number of calls we make. Therefore it is important to minimize the number of calls to this service to minimize the cost.
    
    We use QuickBook SaaS cloud application for accounting and a third party FullFillment1 application to manage our order fulfillment process. This new application should integrate well with them.
    
    
Technology Stack

| Layer  | Technology |
| ------------- | ------------- |
| Presentation Layer  | ReactJS, BootStrap, CSS3/SASS  |
| Server Side Implementation  | Spring Boot Spring Rest Controller , </br>Spring Security , </br>Spring AOP ,</br> Spring Hibernate or JPA  |
| Database  | MYSQL  |


NFR Requirements:-

