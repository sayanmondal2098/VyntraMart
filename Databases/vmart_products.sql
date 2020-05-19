-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vmart
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `pid` bigint NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `timestamp` bigint DEFAULT NULL,
  `catID` bigint NOT NULL,
  `discountID` bigint NOT NULL,
  `sellerID` bigint NOT NULL,
  `seller` bigint DEFAULT NULL,
  PRIMARY KEY (`pid`),
  KEY `FK18mpj66od1u7cflcnovrnwc4n` (`catID`),
  KEY `FK13gq36h4q1oosvh08fa82grtk` (`discountID`),
  KEY `FK9q2nmn0fohc4m5xk5hcjv05v6` (`sellerID`),
  KEY `FK64hndymlemelpy0tjbunybifh` (`seller`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (22,'Keep this hip this season with the HRX Men\'s Athleisure T-shirt. This versatile T-shirt can be styled any way you like for the ultimate gym-to-street look.','HRX by Hrithik Roshan',699,NULL,8,1097,15,NULL),(23,'Keep it cool and casual this season with this high-quality Kook N Keech Marvel tee. When you\'re out running errands, you\'ll look your best when you combine this black piece with your favourite pair of sunglasses and trainer shoes.','Kook N Keech Marvel',599,NULL,8,1098,15,NULL),(24,'The feel of this Difference of Opinion tee is absolutely amazing thanks to the designer\'s use of cotton. When you\'re going for a stroll in the park, put this sea green piece with a pair of chinos and sneakers to feel both comfortable and stylish outside.','Difference of Opinion',1249,NULL,8,1099,15,NULL),(26,'Elevate the look of your wardrobe with a few more basic tees like this. You\'ll feel entirely at ease in this grey melange piece on top of a relaxed-fit chino and slip-on tennis shoe when you\'re going out shopping or catching a movie.','Sztori',999,NULL,8,1098,15,NULL),(27,'WROGN brings to you a range of trendy T-shirts to spruce up your wardrobe. Team this piece with a pair of jeans and sneakers for cool, casual look.','WROGN',999,NULL,8,1098,15,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-19 13:47:53
