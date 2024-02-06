-- phpMyAdmin SQL Dump
-- version 5.2.2-dev+20231218.fdb7583f7c
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2024 at 09:02 PM
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
-- Table structure for table `restaurant_registration`
--

CREATE TABLE `restaurant_registration` (
  `user_id` int(11) NOT NULL,
  `fullname` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `age` varchar(250) NOT NULL,
  `number` varchar(250) NOT NULL,
  `date_added` date NOT NULL,
  `date_updated` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurant_registration`
--

INSERT INTO `restaurant_registration` (`user_id`, `fullname`, `email`, `password`, `age`, `number`, `date_added`, `date_updated`) VALUES
(1, 'Jeremy Opriasa', 'jeremyopriasa@gmail.com', '$2b$10$we0902A51KLDS1nGk91qMeIvQbobTRF8a2/d0frcCzycY0N3Bgpji', '24', '09855585695', '2024-01-04', NULL),
(2, 'Elsi Opriasa', 'elsiopriasa@gmail.com', '$2b$10$n173iRKnA8jAPbS/AVmLTuuPAhDNQ0tgy960JMAGUQv65QxmCwBVS', '42', '09665255845', '2024-01-04', NULL),
(3, 'Coco Opriasa', 'cocoopriasa@gmail.com', '$2b$10$CBPKt3pCZMkptWzSn79YguHlov3nAb6sSwVZBHb5hfv1udt8sisxi', '37', '09558741222', '2024-01-04', NULL),
(4, '2 Angels na kawawa', 'twoangels@gmail.com', '$2b$10$0YkzxosiZBtfRPHIDSnvY.mx1hOb7bpoYQnH9ni.1OhO7KfoPsFry', '27', '09885545786', '2024-01-05', NULL),
(5, 'Tito Thoughts', 'titothouths@gmail.com', '$2b$10$.R41n4Q3SA6F0SDuUqmP8uwQa2yAzjjgOsy112orTgYFq4gDT/93a', '30', '09885622535', '2024-01-05', NULL),
(6, 'CK Sizzy', 'cksizzy@gmail.com', '$2b$10$qtvYx0gJXKf8IngW9QNl.e56/ivPuyi9T59CkFGE7Nj2VKRNcC2Qu', '24', '09558744254', '2024-01-06', NULL),
(7, 'Hev Abi', 'hevabi@gmail.com', '$2b$10$6MkkLk4Ehm5arMQrCRgK4e8.Y5IeOdq4Samg3fukzNVCBeGZhTFH.', '23', '09225452154', '2024-01-06', NULL),
(8, 'Bryan Adams', 'bryanadams@gmail.com', '$2b$10$YFpyKOYnR3AsohTJSYKc6.uK5vBPB9DfVxJ/hMNUo3gRy1DUm/sjm', '55', '09256854125', '2024-01-06', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurant_registration`
--
ALTER TABLE `restaurant_registration`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurant_registration`
--
ALTER TABLE `restaurant_registration`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
