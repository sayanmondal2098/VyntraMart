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
-- Table structure for table `products_piclist`
--

DROP TABLE IF EXISTS `products_piclist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_piclist` (
  `products_pid` bigint NOT NULL,
  `picList` varchar(255) DEFAULT NULL,
  KEY `FK7ski772fewksbxc0bmg4os137` (`products_pid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_piclist`
--

LOCK TABLES `products_piclist` WRITE;
/*!40000 ALTER TABLE `products_piclist` DISABLE KEYS */;
INSERT INTO `products_piclist` VALUES (21,'https://assets.myntassets.com/h_1440'),(21,'q_90'),(21,'w_1080/v1/assets/images/1700944/2019/6/8/c3d336e4-8c86-4434-94b2-c9b28b6dd6471559989322777-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--2.jpg'),(21,'w_1080/v1/assets/images/1700944/2019/6/8/20153ade-f325-4613-a851-f79f8dc00c571559989322759-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--3.jpg'),(21,'w_1080/v1/assets/images/1700944/2019/6/8/67f8fc06-3131-4ae9-a869-2b485f0aca3c1559989322742-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--4.jpg'),(21,'w_1080/v1/assets/images/1700944/2019/6/8/ec064f55-1640-4bdb-92f2-b1b22cb190391559989322722-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--5.jpg');
/*!40000 ALTER TABLE `products_piclist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-17 11:36:59
