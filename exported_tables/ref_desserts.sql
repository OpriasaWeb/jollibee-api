-- phpMyAdmin SQL Dump
-- version 5.2.2-dev+20231218.fdb7583f7c
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2024 at 09:00 PM
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
-- Table structure for table `ref_desserts`
--

CREATE TABLE `ref_desserts` (
  `desserts_id` int(11) NOT NULL,
  `desserts_name` varchar(250) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ref_desserts`
--

INSERT INTO `ref_desserts` (`desserts_id`, `desserts_name`, `price`) VALUES
(1, 'Sundae', 20),
(2, 'Chocolate Sundae', 40),
(3, 'Vanilla Cone Twirl', 30),
(4, 'Chocolate Cone Twirl', 40),
(5, 'Mango Pie', 30),
(6, 'Apple Pie', 30),
(7, 'Tuna Pie', 30);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ref_desserts`
--
ALTER TABLE `ref_desserts`
  ADD PRIMARY KEY (`desserts_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ref_desserts`
--
ALTER TABLE `ref_desserts`
  MODIFY `desserts_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
