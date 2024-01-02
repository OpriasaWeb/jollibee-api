-- phpMyAdmin SQL Dump
-- version 5.2.2-dev+20231218.fdb7583f7c
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 02, 2024 at 10:59 PM
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
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL,
  `fullname` varchar(250) NOT NULL,
  `position` varchar(200) NOT NULL,
  `age` varchar(200) NOT NULL,
  `number` varchar(200) NOT NULL,
  `email` text NOT NULL,
  `branch_id` int(11) NOT NULL,
  `years_of_service` int(11) NOT NULL,
  `date_started` date DEFAULT NULL,
  `date_updated` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employee_id`, `fullname`, `position`, `age`, `number`, `email`, `branch_id`, `years_of_service`, `date_started`, `date_updated`) VALUES
(1, 'Jeremy Opriasa', 'Manager', '24', '09558591662', 'jeremyasairpo@gmail.com', 5, 7, '2024-01-02', NULL),
(2, 'Elsi Bartolome', 'Assistant Manager', '38', '09658447558', 'elsibartolomekuma@gmail.com', 2, 2, '2024-01-02', NULL),
(3, 'Coco Pantalan', 'Service Crew 3', '29', '09855522456', 'cocopinantalan@gmail.com', 5, 11, '2024-01-02', NULL),
(4, 'Adobong Manok', 'Finance', '26', '09665532254', 'lunarsngkalunasarn@gmail.com', 3, 5, '2024-01-02', '2024-01-02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
