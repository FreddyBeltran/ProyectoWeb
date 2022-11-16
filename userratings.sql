-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 02, 2022 at 02:00 AM
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
-- Table structure for table `userratings`
--

CREATE TABLE `userratings` (
  `user` int(10) UNSIGNED NOT NULL,
  `movie` int(10) UNSIGNED NOT NULL,
  `rating` tinyint(4) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `userratings`
--
ALTER TABLE `userratings`
  ADD PRIMARY KEY (`user`,`movie`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `userratings`
--
ALTER TABLE `userratings`
  ADD CONSTRAINT `pelicula` FOREIGN KEY (`movie`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuarios` FOREIGN KEY (`user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
