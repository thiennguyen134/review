-- MySQL dump 10.13  Distrib 9.0.0, for Win64 (x86_64)
--
-- Host: localhost    Database: investmentdb
-- ------------------------------------------------------
-- Server version	9.0.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `app_user`
--

DROP TABLE IF EXISTS `app_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `app_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_user`
--

LOCK TABLES `app_user` WRITE;
/*!40000 ALTER TABLE `app_user` DISABLE KEYS */;
INSERT INTO `app_user` VALUES (1,'integrationUser@example.com','$2a$10$rzN5oxgMp5L7gObWHkKMG.ncW9xV5szlcjwEbdJonvmbUeQD3ZaEG','integrationUser'),(2,'integrationUser@example.com','$2a$10$np8tyadGBpCpWK.12QG6eunB91nthA6PmLGWvjiyeRwYyTjnl0sCa','integrationUser'),(3,'testuser@example.com','$2a$10$qiE30uTioYmBuGDv4pm8wOhTCFtIF2v9hh8WsDO7eERCqVMW2w9qa','testuser'),(4,'integrationUser@example.com','$2a$10$Hjn3k9zug2Gl.ik0uiqgLeT6pAs.2s20AmE6nIldhftzKhpAvSJv.','integrationUser'),(5,'integrationUser@example.com','$2a$10$gtV1kzshKkIQ25TP6RZg8unvWgqlBsudG8CCXt22zhC7/eId/mc8C','integrationUser'),(6,'aa7772@student.jamk.fi','$2a$10$d9lJHz57yJ9LTSxy3mf6d.DgjQX1uz8QHDPvuNPbfxTioBhMZWjca','thien'),(7,'aa777dfdfdfd2@student.jamk.fi','$2a$10$rMBLlnHGjQSv08B3crUObuzQa4Uxr1Fi2K/QbU6uUH8MF0xN/nIZ2','toimuon'),(8,'testuser@example.com','$2a$10$lFXUWU6KuPQeBgH.3OyUyecuwfnUgnvHrcCAa.DxDpYo91QQsn8qS','Toimuonhocgiotr'),(9,'integrationUser@example.com','$2a$10$UKdcPiEucVC8cc05IvCJtOvZArvU061gisywR/LF1FMaU3RqAu3oi','integrationUser'),(10,'testuser@example.com','$2a$10$NZpdEfOndfff0j2O1iMZcemMhB3SNcCvVmkJqaqttLMlL/EBh4LGe','money'),(11,'testuser@example.com','$2a$10$2EVCWxYbBOb1rsTzMnRBXuv3ot7/ypPVpmrbh3oD1mYYZD49CEDLW','money2'),(12,NULL,'$2a$10$nGdLKtfV0YB0rifKDFgnweMrL8HInGYK5SkvaDBL.TV8wBimRRLDK','aa7772@student.jamk.fi'),(13,NULL,'$2a$10$74hVq2yqflQDshbcQ15ILeM0eZvfaK0Pp0nHq054mUZL0h/ahh6sm','money@student.jamk.fi');
/*!40000 ALTER TABLE `app_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-22 23:48:14
