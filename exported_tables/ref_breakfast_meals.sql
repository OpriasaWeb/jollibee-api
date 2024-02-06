-- phpMyAdmin SQL Dump
-- version 5.2.2-dev+20231218.fdb7583f7c
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2024 at 08:58 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurant_menu`
--

-- --------------------------------------------------------

--
-- Table structure for table `ref_breakfast_meals`
--

CREATE TABLE `ref_breakfast_meals` (
  `breakfast_meals_id` int(11) NOT NULL,
  `breakfast_meals_name` varchar(250) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ref_breakfast_meals`
--

INSERT INTO `ref_breakfast_meals` (`breakfast_meals_id`, `breakfast_meals_name`, `price`) VALUES
(1, 'Longganisa with Egg', 80),
(2, 'Tocino with Egg', 80),
(3, 'Corned Beef with Egg', 100),
(4, 'Hotdog with Egg', 80);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ref_breakfast_meals`
--
ALTER TABLE `ref_breakfast_meals`
  ADD PRIMARY KEY (`breakfast_meals_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ref_breakfast_meals`
--
ALTER TABLE `ref_breakfast_meals`
  MODIFY `breakfast_meals_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
