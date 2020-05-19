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
INSERT INTO `products_piclist` VALUES (22,'https://assets.myntassets.com/h_1440/v1/assets/images/1700944/2019/6/8/c3d336e4-8c86-4434-94b2-c9b28b6dd6471559989322777-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--2.jpg'),(22,'https://assets.myntassets.com/h_1440/v1/assets/images/1700944/2019/6/8/20153ade-f325-4613-a851-f79f8dc00c571559989322759-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--3.jpg'),(22,'https://assets.myntassets.com/h_1440/v1/assets/images/1700944/2019/6/8/67f8fc06-3131-4ae9-a869-2b485f0aca3c1559989322742-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--4.jpg'),(22,'https://assets.myntassets.com/h_1440/v1/assets/images/1700944/2019/6/8/ec064f55-1640-4bdb-92f2-b1b22cb190391559989322722-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--5.jpg'),(23,'https://assets.myntassets.com/v1/assets/images/8972451/2019/3/28/9b6514c7-486e-4151-bbde-62bceca62e111553772641530-Kook-N-Keech-Marvel-Men-Black-Marvel-Printed-Round-Neck-T-sh-1.jpg'),(23,'https://assets.myntassets.com/v1/assets/images/8972451/2019/3/28/0ab21b52-08e6-41bf-8b3b-f8e6325762661553772641495-Kook-N-Keech-Marvel-Men-Black-Marvel-Printed-Round-Neck-T-sh-3.jpg'),(23,'https://assets.myntassets.com/v1/assets/images/8972451/2019/3/28/61dd7e68-18b1-4d54-a608-bed7604e939d1553772641473-Kook-N-Keech-Marvel-Men-Black-Marvel-Printed-Round-Neck-T-sh-4.jpg'),(23,'https://assets.myntassets.com/v1/assets/images/8972451/2019/3/28/18a90f0e-afae-4535-8c42-6f6ca1e85ac11553772641457-Kook-N-Keech-Marvel-Men-Black-Marvel-Printed-Round-Neck-T-sh-5.jpg'),(24,'https://assets.myntassets.com/v1/assets/images/11077774/2019/12/24/29bdd2c8-3e2f-43aa-8ce5-55f3a501a4fa1577166621272-Difference-of-Opinion-Men-Sea-Green-Solid-Round-Neck-T-shirt-1.jpg'),(24,'https://assets.myntassets.com/v1/assets/images/11077774/2019/12/24/2e3bf45f-91fd-4c4d-9122-9c78d8525a6c1577166621181-Difference-of-Opinion-Men-Sea-Green-Solid-Round-Neck-T-shirt-3.jpg'),(24,'https://assets.myntassets.com/v1/assets/images/11077774/2019/12/24/f84b9060-2b32-4329-b512-8427a35a04a61577166621143-Difference-of-Opinion-Men-Sea-Green-Solid-Round-Neck-T-shirt-4.jpg'),(24,'https://assets.myntassets.com/v1/assets/images/11077774/2019/12/24/cd1a9272-d52c-45a3-815a-3f14ac2d89c21577166621080-Difference-of-Opinion-Men-Sea-Green-Solid-Round-Neck-T-shirt-5.jpg'),(26,'https://assets.myntassets.com/v1/assets/images/11008376/2020/2/27/77f25ad3-2229-4dd0-8dab-8163e213c4871582793520222-Sztori-Men-Grey-Melange-Striped-Round-Neck-T-shirt-328158279-1.jpg'),(26,'https://assets.myntassets.com/v1/assets/images/11008376/2020/2/27/414c7cda-ead0-4a2a-8733-900aaf5b22121582793520149-Sztori-Men-Grey-Melange-Striped-Round-Neck-T-shirt-328158279-3.jpg'),(26,'https://assets.myntassets.com/v1/assets/images/11008376/2020/2/27/ccb66781-97d7-4ee9-b995-01508c6320351582793520105-Sztori-Men-Grey-Melange-Striped-Round-Neck-T-shirt-328158279-4.jpg'),(26,'https://assets.myntassets.com/v1/assets/images/11008376/2020/2/27/fc6af485-d92f-4ede-adf5-39d2a19105d11582793520063-Sztori-Men-Grey-Melange-Striped-Round-Neck-T-shirt-328158279-5.jpg'),(27,'https://assets.myntassets.com/v1/assets/images/1321001/2016/5/18/11463561859973-WROGN-Men-Tshirts-4961463561859797-1.jpg'),(27,'https://assets.myntassets.com/v1/assets/images/1321001/2016/5/18/11463561859955-WROGN-Men-Tshirts-4961463561859797-2.jpg'),(27,'https://assets.myntassets.com/v1/assets/images/1321001/2016/5/18/11463561859939-WROGN-Men-Tshirts-4961463561859797-3.jpg'),(27,'https://assets.myntassets.com/v1/assets/images/1321001/2016/5/18/11463561859920-WROGN-Men-Tshirts-4961463561859797-4.jpg');
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

-- Dump completed on 2020-05-19 13:47:50
