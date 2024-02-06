-- phpMyAdmin SQL Dump
-- version 5.2.2-dev+20231218.fdb7583f7c
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2024 at 08:56 PM
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
-- Table structure for table `jollibee_branch`
--

CREATE TABLE `jollibee_branch` (
  `branch_id` int(11) NOT NULL,
  `branch_name` varchar(250) NOT NULL,
  `branch_address` varchar(250) NOT NULL,
  `branch_telephone` varchar(250) NOT NULL,
  `branch_number` varchar(250) NOT NULL,
  `branch_date_established` date NOT NULL,
  `branch_employees` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jollibee_branch`
--

INSERT INTO `jollibee_branch` (`branch_id`, `branch_name`, `branch_address`, `branch_telephone`, `branch_number`, `branch_date_established`, `branch_employees`) VALUES
(1, 'Multinational, Sto Niño', 'Sto Niño, Sucat Road, Parañaque City', '534-3323-000', '09558455755', '2024-01-15', 22),
(2, 'Valley 1, Sucat Road', 'San Antonio, Sucat Road, Parañaque City', '940-3889-2893', '09558457221', '2024-01-15', 25),
(3, 'Kabihasnan, Roxas Blvrd', 'San Dionisio, Roxas Blvrd, Parañaque City', '994-9938-0984', '09254587626', '2024-01-15', 20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jollibee_branch`
--
ALTER TABLE `jollibee_branch`
  ADD PRIMARY KEY (`branch_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jollibee_branch`
--
ALTER TABLE `jollibee_branch`
  MODIFY `branch_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
