-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 02, 2022 at 01:53 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `daw_movies`
--

-- --------------------------------------------------------

--
-- Table structure for table `usermovielist`
--

CREATE TABLE `usermovielist` (
  `movelistid` int(10) UNSIGNED NOT NULL,
  `moveid` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usermovielist`
--
ALTER TABLE `usermovielist`
  ADD PRIMARY KEY (`movelistid`,`moveid`),
  ADD KEY `peliculas` (`moveid`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `usermovielist`
--
ALTER TABLE `usermovielist`
  ADD CONSTRAINT `listas` FOREIGN KEY (`movelistid`) REFERENCES `userlist` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `peliculas` FOREIGN KEY (`moveid`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
