-- --------------------------------------------------------
-- Queries para la creación de Base de datos y sus 
-- correspondientes tablas.
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura para tabla prueba_sql.cantidad_envios
CREATE TABLE IF NOT EXISTS `cantidad_envios` (
  `idcantidad_envios` int(11) NOT NULL AUTO_INCREMENT,
  `zona` varchar(45) DEFAULT NULL,
  `mes` varchar(45) DEFAULT NULL,
  `cantidad_envios` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idcantidad_envios`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla prueba_sql.cantidad_envios: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `cantidad_envios` DISABLE KEYS */;
INSERT INTO `cantidad_envios` (`idcantidad_envios`, `zona`, `mes`, `cantidad_envios`) VALUES
	(1, 'Amba', '1', '40000'),
	(2, 'BsAs', '1', '50000');
/*!40000 ALTER TABLE `cantidad_envios` ENABLE KEYS */;

-- Volcando estructura para tabla prueba_sql.carrier
CREATE TABLE IF NOT EXISTS `carrier` (
  `carrierId` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL,
  PRIMARY KEY (`carrierId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla prueba_sql.carrier: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `carrier` DISABLE KEYS */;
INSERT INTO `carrier` (`carrierId`, `name`, `capacity`) VALUES
	(1, 'Carrier A', 10000),
	(2, 'Carrier B', 10000),
	(3, 'Carrier C', 3000);
/*!40000 ALTER TABLE `carrier` ENABLE KEYS */;

-- Volcando estructura para tabla prueba_sql.costo
CREATE TABLE IF NOT EXISTS `costo` (
  `idcosto` int(11) NOT NULL,
  `carrier_id` int(11) DEFAULT NULL,
  `zona` varchar(45) DEFAULT NULL,
  `costo` varchar(45) DEFAULT NULL,
  `tiempo_entrega` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idcosto`),
  KEY `carrierId_idx` (`carrier_id`),
  CONSTRAINT `carrierId` FOREIGN KEY (`carrier_id`) REFERENCES `carrier` (`carrierId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla prueba_sql.costo: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `costo` DISABLE KEYS */;
INSERT INTO `costo` (`idcosto`, `carrier_id`, `zona`, `costo`, `tiempo_entrega`) VALUES
	(1, 1, 'Amba', '10', '3'),
	(2, 1, 'BsAs', '20', '5'),
	(4, 2, 'Amba', '15', '2'),
	(5, 2, 'BsAs', '19', '4'),
	(7, 3, 'Amba', '20', '1');
/*!40000 ALTER TABLE `costo` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
