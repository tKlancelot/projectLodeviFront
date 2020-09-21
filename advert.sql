-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : Dim 20 sep. 2020 à 23:34
-- Version du serveur :  8.0.21-0ubuntu0.20.04.4
-- Version de PHP : 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `businessCaseFinal`
--

-- --------------------------------------------------------

--
-- Structure de la table `advert`
--
/*
CREATE TABLE `advert` (
  `id` int NOT NULL,
  `car_model_id` int DEFAULT NULL,
  `reference` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `mileage` int NOT NULL,
  `fuel_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `release_year` date NOT NULL,
  `publication_date` date NOT NULL,
  `garage_id` int DEFAULT NULL,
  `picture` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
*/
--
-- Déchargement des données de la table `advert`
--

INSERT INTO `advert` (`id`, `car_model_id`, `reference`, `price`, `description`, `mileage`, `fuel_type`, `release_year`, `publication_date`, `garage_id`, `picture`) VALUES
(1, 2, '2v48', 18500.5, 'une voiture qui tiendra le coup !', 28500, 'essence', '2020-09-12', '2016-09-01', 2, 'car_mit_eclipse_cross.jpg'),
(2, 1, '169b', 18000, 'une super voiture, confortable et un design splendide', 62000, 'diesel', '2016-09-08', '2020-09-16', 3, 'car_toy_aven.jpg'),
(3, 5, '21f5', 12900, 'une voiture en or!', 51500, 'diesel', '2014-01-06', '2020-09-16', 1, 'car_peu_308.jpg'),
(4, 4, '3cdf', 19000, 'une voiture magnifique', 39000, 'essence', '2014-01-06', '2020-09-16', 1, 'car_peu_3008.jpg'),
(5, 3, '3cdf', 20500, 'une autre belle voiture', 34000, 'diesel', '2015-06-06', '2020-09-12', 2, 'car_hon_civic.png'),
(6, 6, 'c8ad', 10500, 'une voiture robuste', 78000, 'bio-ethanol', '2015-01-20', '2020-09-12', 4, 'car_ren_clio.jpg'),
(7, 8, 'df5e', 24000, 'ouah, la belle mercedes !', 8900, 'bio-ethanol', '2020-09-20', '2020-09-12', 2, 'car_merc_classe_a.jpg'),
(12, 9, 'mc94', 19890, 'une superbe citroën quasi neuve !', 18500, 'essence', '2018-09-01', '2020-09-20', 2, 'car_citroen_c4.jpg'),
(13, 10, 'ccf9', 20450, 'une très belle voiture !', 16200, 'essence', '2017-09-01', '2020-09-20', 2, 'car_ren_megane.jpg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `advert`
--
ALTER TABLE `advert`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_54F1F40BF64382E3` (`car_model_id`),
  ADD KEY `IDX_54F1F40BC4FFF555` (`garage_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `advert`
--
ALTER TABLE `advert`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `advert`
--
ALTER TABLE `advert`
  ADD CONSTRAINT `FK_54F1F40BC4FFF555` FOREIGN KEY (`garage_id`) REFERENCES `garage` (`id`),
  ADD CONSTRAINT `FK_54F1F40BF64382E3` FOREIGN KEY (`car_model_id`) REFERENCES `car_model` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
