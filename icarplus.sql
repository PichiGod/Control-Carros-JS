-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2023 at 01:57 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `icarplus`
--

-- --------------------------------------------------------

--
-- Table structure for table `carros`
--

CREATE TABLE `carros` (
  `id` int(75) NOT NULL,
  `descripcion` varchar(75) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `modelo` varchar(50) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `ano` int(4) NOT NULL,
  `imagen` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carros`
--

INSERT INTO `carros` (`id`, `descripcion`, `marca`, `modelo`, `tipo`, `ano`, `imagen`) VALUES
(7, 'Ford Fiesta', 'Ford', '1234', 'Automatico', 2018, 'https://s1.cdn.autoevolution.com/images/news/gallery/ford-fiesta-soldiers-on-in-the-us-for-2018-model-year-with-one-notable-upgrade_9.jpeg ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carros`
--
ALTER TABLE `carros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carros`
--
ALTER TABLE `carros`
  MODIFY `id` int(75) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
