-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 24 Ağu 2021, 13:49:17
-- Sunucu sürümü: 10.4.20-MariaDB
-- PHP Sürümü: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `tododb`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `login_register`
--

CREATE TABLE `login_register` (
  `id` int(11) NOT NULL,
  `username` text COLLATE utf8mb4_turkish_ci NOT NULL,
  `mail` text COLLATE utf8mb4_turkish_ci NOT NULL,
  `password` text COLLATE utf8mb4_turkish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `login_register`
--

INSERT INTO `login_register` (`id`, `username`, `mail`, `password`) VALUES
(11, 'reha', 're@', '123');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `todolist`
--

CREATE TABLE `todolist` (
  `id` int(11) NOT NULL,
  `text` text COLLATE utf8mb4_turkish_ci NOT NULL,
  `isComplated` tinyint(1) NOT NULL DEFAULT 0,
  `kullanici_id` int(11) NOT NULL,
  `options` text COLLATE utf8mb4_turkish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `todolist`
--

INSERT INTO `todolist` (`id`, `text`, `isComplated`, `kullanici_id`, `options`) VALUES
(788, 'dsadas', 0, 0, 'Food'),
(789, 'fasfa', 0, 0, 'Food'),
(790, 'aa', 0, 0, 'Food');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `login_register`
--
ALTER TABLE `login_register`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `todolist`
--
ALTER TABLE `todolist`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `login_register`
--
ALTER TABLE `login_register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Tablo için AUTO_INCREMENT değeri `todolist`
--
ALTER TABLE `todolist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=791;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
