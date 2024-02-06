-- phpMyAdmin SQL Dump
-- version 5.2.2-dev+20231218.fdb7583f7c
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2024 at 08:57 PM
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
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `branch_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `queue_id` varchar(250) NOT NULL,
  `beverage_id` int(11) DEFAULT NULL,
  `beverage_count` int(11) DEFAULT NULL,
  `breakfast_meal_id` int(11) DEFAULT NULL,
  `breakfast_meal_count` int(11) DEFAULT NULL,
  `breakfast_sandwich_id` int(11) DEFAULT NULL,
  `breakfast_sandwich_count` int(11) DEFAULT NULL,
  `burger_id` int(11) DEFAULT NULL,
  `burger_count` int(11) DEFAULT NULL,
  `burger_steak_id` int(11) DEFAULT NULL,
  `burger_steak_count` int(11) DEFAULT NULL,
  `chickenjoy_id` int(11) DEFAULT NULL,
  `chickenjoy_count` int(11) DEFAULT NULL,
  `dessert_id` int(11) DEFAULT NULL,
  `dessert_count` int(11) DEFAULT NULL,
  `noodles_pasta_id` int(11) DEFAULT NULL,
  `noodles_pasta_count` int(11) DEFAULT NULL,
  `rice_meal_id` int(11) DEFAULT NULL,
  `rice_meal_count` int(11) DEFAULT NULL,
  `side_item_id` int(11) DEFAULT NULL,
  `side_item_count` int(11) DEFAULT NULL,
  `special_id` int(11) DEFAULT NULL,
  `special_count` int(11) DEFAULT NULL,
  `order_count` int(11) NOT NULL,
  `date_ordered` date NOT NULL,
  `is_void` tinyint(1) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `branch_id`, `employee_id`, `queue_id`, `beverage_id`, `beverage_count`, `breakfast_meal_id`, `breakfast_meal_count`, `breakfast_sandwich_id`, `breakfast_sandwich_count`, `burger_id`, `burger_count`, `burger_steak_id`, `burger_steak_count`, `chickenjoy_id`, `chickenjoy_count`, `dessert_id`, `dessert_count`, `noodles_pasta_id`, `noodles_pasta_count`, `rice_meal_id`, `rice_meal_count`, `side_item_id`, `side_item_count`, `special_id`, `special_count`, `order_count`, `date_ordered`, `is_void`, `status`) VALUES
(1, 2, 2, '1', 2, 0, 4, 0, 0, NULL, 0, NULL, 0, NULL, 0, NULL, 2, NULL, 0, NULL, 0, NULL, 4, NULL, 0, NULL, 1, '2024-01-29', 0, 0),
(2, 2, 2, '1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 5, 3, 0, 0, 0, 0, 2, 1, 0, 0, 0, '2024-01-29', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
