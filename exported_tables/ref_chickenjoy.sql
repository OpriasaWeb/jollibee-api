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
-- Table structure for table `ref_chickenjoy`
--

CREATE TABLE `ref_chickenjoy` (
  `chickenjoy_id` int(11) NOT NULL,
  `chickenjoy_name` varchar(250) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ref_chickenjoy`
--

INSERT INTO `ref_chickenjoy` (`chickenjoy_id`, `chickenjoy_name`, `price`) VALUES
(1, 'Original Chickenjoy', 100),
(2, 'Spicy Chickenjoy', 110),
(3, 'Chickenjoy with Jolly Hotdog', 150);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ref_chickenjoy`
--
ALTER TABLE `ref_chickenjoy`
  ADD PRIMARY KEY (`chickenjoy_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ref_chickenjoy`
--
ALTER TABLE `ref_chickenjoy`
  MODIFY `chickenjoy_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
