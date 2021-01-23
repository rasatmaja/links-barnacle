-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 23, 2021 at 10:46 AM
-- Server version: 10.3.27-MariaDB-log-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rasatmaj_site`
--
CREATE DATABASE IF NOT EXISTS `rasatmaj_site` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `rasatmaj_site`;

-- --------------------------------------------------------

--
-- Table structure for table `links`
--

DROP TABLE IF EXISTS `links`;
CREATE TABLE IF NOT EXISTS `links` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SECTION` varchar(100) NOT NULL,
  `NAME` varchar(200) NOT NULL,
  `DESCRIPTIONS` varchar(255) NOT NULL,
  `HYPERLINKS` varchar(225) NOT NULL,
  `ICON` blob NOT NULL,
  `COLOR` varchar(10) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `links`
--

INSERT INTO `links` (`ID`, `SECTION`, `NAME`, `DESCRIPTIONS`, `HYPERLINKS`, `ICON`, `COLOR`) VALUES(1, 'SOCIAL_MEDIA', 'Instagram', '', 'https://www.instagram.com/rasatmaja/', '', '#CF2872');
INSERT INTO `links` (`ID`, `SECTION`, `NAME`, `DESCRIPTIONS`, `HYPERLINKS`, `ICON`, `COLOR`) VALUES(2, 'SOCIAL_MEDIA', 'Github', '', 'https://github.com/rasatmaja', '', '#211F1F');
INSERT INTO `links` (`ID`, `SECTION`, `NAME`, `DESCRIPTIONS`, `HYPERLINKS`, `ICON`, `COLOR`) VALUES(3, 'SOCIAL_MEDIA', 'LinkedIn', '', 'https://www.linkedin.com/in/rasatmaja/', '', '#0E72A3');
INSERT INTO `links` (`ID`, `SECTION`, `NAME`, `DESCRIPTIONS`, `HYPERLINKS`, `ICON`, `COLOR`) VALUES(4, 'SOCIAL_MEDIA', 'Twitter', '', 'https://twitter.com/rasatmaja', '', '#49B0EE');
INSERT INTO `links` (`ID`, `SECTION`, `NAME`, `DESCRIPTIONS`, `HYPERLINKS`, `ICON`, `COLOR`) VALUES(5, 'SOCIAL_MEDIA', 'Blog on Hashnode', '', 'https://hashnode.rasio.dev/', '', '#0E72A3');
INSERT INTO `links` (`ID`, `SECTION`, `NAME`, `DESCRIPTIONS`, `HYPERLINKS`, `ICON`, `COLOR`) VALUES(6, 'CONTACT', 'Email', 'If you would like to discuss about your ideas.', 'mailto:contact@rasio.dev', '', '#D51F23');
INSERT INTO `links` (`ID`, `SECTION`, `NAME`, `DESCRIPTIONS`, `HYPERLINKS`, `ICON`, `COLOR`) VALUES(7, 'HIGHLIGHT', 'MERN Bootcamp', 'by Jean Rauwers (ig: dev.jeanrauwers)', 'https://github.com/rasatmaja', '', '');
INSERT INTO `links` (`ID`, `SECTION`, `NAME`, `DESCRIPTIONS`, `HYPERLINKS`, `ICON`, `COLOR`) VALUES(8, 'HIGHLIGHT', 'Ebook: Build a portfolio', 'by Josh Comeau (twitter: @JoshWComeau)', 'https://www.joshwcomeau.com/effective-portfolio/', '', '');
INSERT INTO `links` (`ID`, `SECTION`, `NAME`, `DESCRIPTIONS`, `HYPERLINKS`, `ICON`, `COLOR`) VALUES(9, 'COOL_STUFF', 'Currated wallpapers', 'by E (ig: @thisisetv)', 'https://www.thisise.tech/wallpapers', '', '');
INSERT INTO `links` (`ID`, `SECTION`, `NAME`, `DESCRIPTIONS`, `HYPERLINKS`, `ICON`, `COLOR`) VALUES(10, 'HIGHLIGHT', 'Front-end Performance Checklist', 'by Vitaly Friedman', 'https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/', '', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
