-- phpMyAdmin SQL Dump
-- version 5.2.2-dev+20231218.fdb7583f7c
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2024 at 08:59 PM
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
-- Table structure for table `ref_burger_steak`
--

CREATE TABLE `ref_burger_steak` (
  `burger_steak_id` int(11) NOT NULL,
  `burger_steak_name` varchar(250) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ref_burger_steak`
--

INSERT INTO `ref_burger_steak` (`burger_steak_id`, `burger_steak_name`, `price`) VALUES
(1, 'Burger Steak', 60),
(2, 'Burger Steak with Egg', 70),
(3, 'Burger Steak with Shanghai', 80),
(4, 'Double Burger Steak', 100),
(5, 'Jumbo Burger Steak with Fries', 150);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ref_burger_steak`
--
ALTER TABLE `ref_burger_steak`
  ADD PRIMARY KEY (`burger_steak_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ref_burger_steak`
--
ALTER TABLE `ref_burger_steak`
  MODIFY `burger_steak_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
