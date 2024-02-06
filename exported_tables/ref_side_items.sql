-- phpMyAdmin SQL Dump
-- version 5.2.2-dev+20231218.fdb7583f7c
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2024 at 09:01 PM
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
-- Table structure for table `ref_side_items`
--

CREATE TABLE `ref_side_items` (
  `side_items_id` int(11) NOT NULL,
  `side_items_name` varchar(250) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ref_side_items`
--

INSERT INTO `ref_side_items` (`side_items_id`, `side_items_name`, `price`) VALUES
(1, 'Jolly Hotdog', 60),
(2, 'Jolly Hotdog with Cheese', 65),
(3, 'Jolly Hotdog Regular', 50),
(4, 'Jolly Spaghetti', 60),
(5, 'Burger Steak', 60),
(6, 'Shanghai Rolls', 60),
(7, 'Jolly Twirl', 60),
(8, 'Mashed Potato', 40),
(9, 'Buttered Corn', 40);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ref_side_items`
--
ALTER TABLE `ref_side_items`
  ADD PRIMARY KEY (`side_items_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ref_side_items`
--
ALTER TABLE `ref_side_items`
  MODIFY `side_items_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
