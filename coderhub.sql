/*
 Navicat Premium Data Transfer

 Source Server         : coderzyp
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : coderhub

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 15/07/2022 14:35:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for avatar
-- ----------------------------
DROP TABLE IF EXISTS `avatar`;
CREATE TABLE `avatar`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `mimetype` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `size` int NULL DEFAULT NULL,
  `user_id` int NULL DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `filename`(`filename`) USING BTREE,
  UNIQUE INDEX `filename_2`(`filename`) USING BTREE,
  UNIQUE INDEX `filename_3`(`filename`) USING BTREE,
  UNIQUE INDEX `filename_4`(`filename`) USING BTREE,
  UNIQUE INDEX `filename_5`(`filename`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of avatar
-- ----------------------------
INSERT INTO `avatar` VALUES (1, 'd2695bc16db889619225969e9f334f9f', 'image/png', 294500, 3, '2022-07-12 14:55:31', '2022-07-12 14:55:31');

-- ----------------------------
-- Table structure for brand
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `website` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `phoneRank` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 100 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of brand
-- ----------------------------
INSERT INTO `brand` VALUES (1, '苹果', 'www.pinguo.com', 1);
INSERT INTO `brand` VALUES (2, '华为', 'www.huawei.com', 2);
INSERT INTO `brand` VALUES (3, 'OPPO', 'www.oppo.com', 3);
INSERT INTO `brand` VALUES (4, '三星', 'www.sanxing.com', 4);
INSERT INTO `brand` VALUES (5, '小米', 'www.xiaomi.com', 5);

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` int NOT NULL,
  `moment_id` int NOT NULL,
  `comment_id` int NULL DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `moment_id`(`moment_id`) USING BTREE,
  INDEX `comment_id`(`comment_id`) USING BTREE,
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (5, 'JavaScript 是世界上最好的语言', 4, 26, NULL, '2022-04-19 14:22:43', '2022-04-19 14:22:43');
INSERT INTO `comment` VALUES (15, '世界上没有最好的语言~', 4, 26, 5, '2022-04-19 14:27:20', '2022-04-19 14:27:20');
INSERT INTO `comment` VALUES (16, '世界上没有最好的语言~', 4, 26, 5, '2022-04-19 14:27:21', '2022-04-19 14:27:21');
INSERT INTO `comment` VALUES (17, '世界上没有最好的语言~', 4, 26, 5, '2022-04-19 14:27:22', '2022-04-19 14:27:22');

-- ----------------------------
-- Table structure for courses
-- ----------------------------
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `price` double NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of courses
-- ----------------------------
INSERT INTO `courses` VALUES (1, '英语', 100);
INSERT INTO `courses` VALUES (2, '语文', 666);
INSERT INTO `courses` VALUES (3, '数学', 888);
INSERT INTO `courses` VALUES (4, '历史', 80);
INSERT INTO `courses` VALUES (5, '物理', 88);
INSERT INTO `courses` VALUES (6, '地理', 33);

-- ----------------------------
-- Table structure for file
-- ----------------------------
DROP TABLE IF EXISTS `file`;
CREATE TABLE `file`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `mimetype` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `size` int NULL DEFAULT NULL,
  `moment_id` int NULL DEFAULT NULL,
  `user_id` int NULL DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `filename`(`filename`) USING BTREE,
  INDEX `moment_id`(`moment_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `file_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `file_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of file
-- ----------------------------
INSERT INTO `file` VALUES (1, 'ed35e0a38a2f03ee2a23f77924d7ad6b', 'image/jpeg', 37622, 26, 3, '2022-07-12 17:54:07', '2022-07-12 17:54:07');
INSERT INTO `file` VALUES (2, 'e2b134ca9e97a28d2c1ecf41ff00e18b', 'image/png', 294500, 26, 3, '2022-07-12 17:54:07', '2022-07-12 17:54:07');

-- ----------------------------
-- Table structure for label
-- ----------------------------
DROP TABLE IF EXISTS `label`;
CREATE TABLE `label`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of label
-- ----------------------------
INSERT INTO `label` VALUES (1, '前端', '2022-07-11 10:41:16', '2022-07-11 10:41:16');
INSERT INTO `label` VALUES (2, '文学', '2022-07-11 10:47:33', '2022-07-11 10:47:33');
INSERT INTO `label` VALUES (3, '爱情', '2022-07-11 10:47:39', '2022-07-11 10:47:39');
INSERT INTO `label` VALUES (4, '青春', '2022-07-11 10:47:47', '2022-07-11 10:47:47');
INSERT INTO `label` VALUES (5, '编程', '2022-07-11 15:13:56', '2022-07-11 15:13:56');
INSERT INTO `label` VALUES (6, 'C语言', '2022-07-11 15:21:49', '2022-07-11 15:21:49');
INSERT INTO `label` VALUES (7, '励志', '2022-07-11 16:23:49', '2022-07-11 16:23:49');
INSERT INTO `label` VALUES (8, '奋斗', '2022-07-11 16:24:49', '2022-07-11 16:24:49');
INSERT INTO `label` VALUES (9, 'PHP', '2022-07-12 09:50:46', '2022-07-12 09:50:46');
INSERT INTO `label` VALUES (10, '程序猿', '2022-07-12 09:50:46', '2022-07-12 09:50:46');

-- ----------------------------
-- Table structure for member
-- ----------------------------
DROP TABLE IF EXISTS `member`;
CREATE TABLE `member`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `age` int NULL DEFAULT 18,
  `height` double NULL DEFAULT NULL,
  `mid` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tel` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `mid`(`mid`) USING BTREE,
  UNIQUE INDEX `tel`(`tel`) USING BTREE,
  UNIQUE INDEX `tel_2`(`tel`) USING BTREE,
  UNIQUE INDEX `tel_3`(`tel`) USING BTREE,
  UNIQUE INDEX `tel_4`(`tel`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of member
-- ----------------------------
INSERT INTO `member` VALUES (1, 'jz', 18, 1.88, 'm123', '17582929141', '2022-04-13 21:38:07', '2022-04-13 21:38:07');
INSERT INTO `member` VALUES (3, 'kobe', 18, 1.88, 'm132', '17582929142', '2022-04-13 21:41:56', '2022-04-13 21:41:56');
INSERT INTO `member` VALUES (4, 'hanmeimei', 18, 1.88, 'm213', '17582929143', '2022-04-13 21:41:56', '2022-04-13 21:46:10');
INSERT INTO `member` VALUES (6, 'curry', 18, 1.88, 'm432', '17582929145', '2022-07-08 11:13:33', '2022-07-08 11:13:33');

-- ----------------------------
-- Table structure for moment
-- ----------------------------
DROP TABLE IF EXISTS `moment`;
CREATE TABLE `moment`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `moment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 26 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of moment
-- ----------------------------
INSERT INTO `moment` VALUES (1, '我说错了，C语言才是最好的语言~', 4, '2020-11-23 22:05:23', '2020-11-27 21:35:42');
INSERT INTO `moment` VALUES (3, '曾几何时，他也好，她也好，都是这家伙的被害者。所以我才憎恶着。这个强求着所谓“大家”的世界。必须建立在牺牲某人之上才能成立的低劣的和平。以温柔和正义粉饰，明明是恶毒之物却登大雅之堂，随着时间的流逝越发凶恶，除欺瞒外别无其二的空虚的概念。过去和世界都是无法改变的。发生过的事情和所谓的“大家”都是无法改变的。但是，并不是说自己只能隶属于他们', 1, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (4, '不要告诉我你不需要保护，不要告诉我你不寂寞，知微，我只希望你，在走过黑夜的那个时辰，不要倔强的选择一个人。', 3, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (5, 'If you shed tears when you miss the sun, you also miss the stars.如果你因失去了太阳而流泪，那么你也将失去群星了。', 1, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (6, '在世间万物中我都发现了你，渺小时，你是阳光下一粒种子，伟大时，你隐身在高山海洋里。', 2, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (8, '限定目的，能使人生变得简洁。', 2, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (9, '翅膀长在你的肩上，太在乎别人对于飞行姿势的批评，所以你飞不起来', 4, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (10, '一个人至少拥有一个梦想，有一个理由去坚强。心若没有栖息的地方，到哪里都是在流浪。', 2, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (11, '不乱于心，不困于情。不畏将来，不念过往。如此，安好。', 3, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (12, '如果你给我的，和你给别人的是一样的，那我就不要了。', 3, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (13, '故事的开头总是这样，适逢其会，猝不及防。故事的结局总是这样，花开两朵，天各一方。', 2, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (14, '你不愿意种花，你说，我不愿看见它一点点凋落。是的，为了避免结束，你避免了一切开始。', 2, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (15, '你如果认识从前的我，也许你会原谅现在的我。', 4, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (16, '每一个不曾起舞的日子，都是对生命的辜负。', 2, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (17, '向来缘浅，奈何情深。', 2, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (18, '心之所向 素履以往 生如逆旅 一苇以航', 3, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (19, '生如夏花之绚烂，死如秋叶之静美。', 3, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (20, '答案很长，我准备用一生的时间来回答，你准备要听了吗？', 4, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (21, '因为爱过，所以慈悲；因为懂得，所以宽容。', 4, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (22, '我们听过无数的道理，却仍旧过不好这一生。', 1, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (23, '我来不及认真地年轻，待明白过来时，只能选择认真地老去。', 2, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (26, 'PHP是世界最好的语言', 3, '2022-04-19 12:56:58', '2022-04-19 12:56:58');

-- ----------------------------
-- Table structure for moment_label
-- ----------------------------
DROP TABLE IF EXISTS `moment_label`;
CREATE TABLE `moment_label`  (
  `moment_id` int NOT NULL,
  `label_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`moment_id`, `label_id`) USING BTREE,
  INDEX `label_id`(`label_id`) USING BTREE,
  CONSTRAINT `moment_label_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `moment_label_ibfk_2` FOREIGN KEY (`label_id`) REFERENCES `label` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of moment_label
-- ----------------------------
INSERT INTO `moment_label` VALUES (9, 7, '2022-07-11 16:24:49', '2022-07-11 16:24:49');
INSERT INTO `moment_label` VALUES (9, 8, '2022-07-11 16:24:49', '2022-07-11 16:24:49');
INSERT INTO `moment_label` VALUES (15, 3, '2022-07-11 16:22:05', '2022-07-11 16:22:05');
INSERT INTO `moment_label` VALUES (15, 5, '2022-07-11 16:18:26', '2022-07-11 16:18:26');
INSERT INTO `moment_label` VALUES (15, 6, '2022-07-11 16:18:26', '2022-07-11 16:18:26');
INSERT INTO `moment_label` VALUES (26, 5, '2022-07-12 09:50:46', '2022-07-12 09:50:46');
INSERT INTO `moment_label` VALUES (26, 9, '2022-07-12 09:50:46', '2022-07-12 09:50:46');
INSERT INTO `moment_label` VALUES (26, 10, '2022-07-12 09:50:46', '2022-07-12 09:50:46');

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `price` double NOT NULL,
  `score` decimal(2, 1) NULL DEFAULT NULL,
  `voteCnt` int NULL DEFAULT NULL,
  `url` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pid` int NULL DEFAULT NULL,
  `brand_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `brand_id`(`brand_id`) USING BTREE,
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 109 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, '华为', '华为nova 3（全网通） ', 2699, 6.7, 65, 'http://detail.zol.com.cn/cell_phone/index1185512.shtml', 1185512, 1);
INSERT INTO `products` VALUES (2, '华为', '华为P20 Pro（6GB RAM/全网通） ', 4488, 8.3, 103, 'http://detail.zol.com.cn/cell_phone/index1207038.shtml', 1207038, 1);
INSERT INTO `products` VALUES (3, '华为', '华为P20（全网通） ', 3388, 8.4, 127, 'http://detail.zol.com.cn/cell_phone/index1175779.shtml', 1175779, 1);
INSERT INTO `products` VALUES (4, '华为', '华为nova 3i（4GB RAM/全网通） ', 1999, 7.0, 9, 'http://detail.zol.com.cn/cell_phone/index1222100.shtml', 1222100, 1);
INSERT INTO `products` VALUES (5, '华为', '华为Mate 10（4GB RAM/全网通） ', 3399, 8.3, 125, 'http://detail.zol.com.cn/cell_phone/index1165672.shtml', 1165672, 1);
INSERT INTO `products` VALUES (6, '华为', '华为nova 3e（全网通） ', 1999, 8.8, 71, 'http://detail.zol.com.cn/cell_phone/index1207608.shtml', 1207608, 1);
INSERT INTO `products` VALUES (7, '华为', '华为nova 2s（4GB RAM/全网通） ', 2399, 7.5, 97, 'http://detail.zol.com.cn/cell_phone/index1204363.shtml', 1204363, 1);
INSERT INTO `products` VALUES (8, '华为', '华为Mate 10 Pro（全网通） ', 3599, 8.7, 92, 'http://detail.zol.com.cn/cell_phone/index1181128.shtml', 1181128, 1);
INSERT INTO `products` VALUES (9, '华为', '华为畅享8（3GB RAM/全网通） ', 1099, 5.3, 28, 'http://detail.zol.com.cn/cell_phone/index1208286.shtml', 1208286, 1);
INSERT INTO `products` VALUES (10, '华为', '华为P10（VTR-AL00/全网通） ', 3488, 7.2, 395, 'http://detail.zol.com.cn/cell_phone/index1160028.shtml', 1160028, 1);
INSERT INTO `products` VALUES (11, '华为', '华为畅享8 Plus（全网通） ', 1499, 5.8, 11, 'http://detail.zol.com.cn/cell_phone/index1210102.shtml', 1210102, 1);
INSERT INTO `products` VALUES (12, '华为', '华为麦芒7（全网通） ', 2399, 7.6, 5, 'http://detail.zol.com.cn/cell_phone/index1227167.shtml', 1227167, 1);
INSERT INTO `products` VALUES (13, '华为', '华为Mate 9（MHA-AL00/4GB RAM/全网通） ', 1788, 7.8, 449, 'http://detail.zol.com.cn/cell_phone/index1143413.shtml', 1143413, 1);
INSERT INTO `products` VALUES (14, '华为', '华为nova 3i（6GB RAM/全网通） ', 2199, 7.0, 9, 'http://detail.zol.com.cn/cell_phone/index1224424.shtml', 1224424, 1);
INSERT INTO `products` VALUES (15, '华为', '华为Mate RS保时捷版（全网通） ', 9999, 6.1, 16, 'http://detail.zol.com.cn/cell_phone/index1210089.shtml', 1210089, 1);
INSERT INTO `products` VALUES (16, '华为', '华为nova 2（PIC-AL00/全网通） ', 1228, 8.0, 209, 'http://detail.zol.com.cn/cell_phone/index1170042.shtml', 1170042, 1);
INSERT INTO `products` VALUES (17, '华为', '华为麦芒6（全网通） ', 2199, 6.1, 57, 'http://detail.zol.com.cn/cell_phone/index1182274.shtml', 1182274, 1);
INSERT INTO `products` VALUES (18, '华为', '华为P9（EVA-AL00/标准版/全网通） ', 1448, 7.8, 648, 'http://detail.zol.com.cn/cell_phone/index404275.shtml', 404275, 1);
INSERT INTO `products` VALUES (19, '华为', '华为nova（CAZ-AL10/高配版/全网通） ', 988, 6.9, 198, 'http://detail.zol.com.cn/cell_phone/index1154505.shtml', 1154505, 1);
INSERT INTO `products` VALUES (20, '华为', '华为畅享8e（全网通） ', 999, 4.8, 4, 'http://detail.zol.com.cn/cell_phone/index1210103.shtml', 1210103, 1);
INSERT INTO `products` VALUES (21, '华为', '华为麦芒5（MLA-AL10/高配版/全网通） ', 1099, 6.8, 136, 'http://detail.zol.com.cn/cell_phone/index1148829.shtml', 1148829, 1);
INSERT INTO `products` VALUES (22, '华为', '华为P10 Plus（VKY-AL00/6GB RAM全网通） ', 2488, 7.5, 186, 'http://detail.zol.com.cn/cell_phone/index1163813.shtml', 1163813, 1);
INSERT INTO `products` VALUES (23, '华为', '华为Mate 9 Pro（4GB RAM/全网通） ', 2799, 8.0, 136, 'http://detail.zol.com.cn/cell_phone/index1159578.shtml', 1159578, 1);
INSERT INTO `products` VALUES (24, 'vivo', 'vivo X7 Plus（全网通） ', 2350, 8.2, 484, 'http://detail.zol.com.cn/cell_phone/index1147812.shtml', 1147812, NULL);
INSERT INTO `products` VALUES (25, 'vivo', 'vivo X9s Plus（全网通） ', 2498, 7.4, 523, 'http://detail.zol.com.cn/cell_phone/index1170837.shtml', 1170837, NULL);
INSERT INTO `products` VALUES (26, 'vivo', 'vivo Y51A（高配版/全网通） ', 998, 6.6, 306, 'http://detail.zol.com.cn/cell_phone/index1115625.shtml', 1115625, NULL);
INSERT INTO `products` VALUES (27, 'vivo', 'vivo X7（全网通） ', 1799, 7.7, 736, 'http://detail.zol.com.cn/cell_phone/index1145877.shtml', 1145877, NULL);
INSERT INTO `products` VALUES (28, 'vivo', 'vivo X9s（全网通） ', 1998, 8.9, 563, 'http://detail.zol.com.cn/cell_phone/index1174429.shtml', 1174429, NULL);
INSERT INTO `products` VALUES (29, 'vivo', 'vivo Y66i（全网通） ', 1198, 6.3, 161, 'http://detail.zol.com.cn/cell_phone/index1204388.shtml', 1204388, NULL);
INSERT INTO `products` VALUES (30, 'vivo', 'vivo X9s  L（移动全网通） ', 1998, 8.9, 563, 'http://detail.zol.com.cn/cell_phone/index1175257.shtml', 1175257, NULL);
INSERT INTO `products` VALUES (31, 'vivo', 'vivo X9L（移动全网通）  ', 1998, 8.5, 1362, 'http://detail.zol.com.cn/cell_phone/index1170124.shtml', 1170124, NULL);
INSERT INTO `products` VALUES (32, 'vivo', 'vivo X20Plus屏幕指纹版（全网通） ', 3598, 6.2, 17, 'http://detail.zol.com.cn/cell_phone/index1205808.shtml', 1205808, NULL);
INSERT INTO `products` VALUES (33, 'vivo', 'vivo Y75（4GB RAM/全网通） ', 1098, 7.5, 27, 'http://detail.zol.com.cn/cell_phone/index1208237.shtml', 1208237, NULL);
INSERT INTO `products` VALUES (34, 'vivo', 'vivo X20（旗舰版/全网通） ', 2598, 9.1, 1075, 'http://detail.zol.com.cn/cell_phone/index1184293.shtml', 1184293, NULL);
INSERT INTO `products` VALUES (35, 'vivo', 'vivo Y55（全网通） ', 999, 6.4, 126, 'http://detail.zol.com.cn/cell_phone/index1156093.shtml', 1156093, NULL);
INSERT INTO `products` VALUES (36, 'vivo', 'vivo Y75（3GB RAM/全网通） ', 1298, 7.5, 27, 'http://detail.zol.com.cn/cell_phone/index1185212.shtml', 1185212, NULL);
INSERT INTO `products` VALUES (37, 'vivo', 'vivo Xplay6（全网通） ', 3498, 8.7, 691, 'http://detail.zol.com.cn/cell_phone/index1159623.shtml', 1159623, NULL);
INSERT INTO `products` VALUES (38, 'OPPO', 'OPPO R17（8GB RAM/全网通） ', 3499, 9.5, 173, 'http://detail.zol.com.cn/cell_phone/index1225806.shtml', 1225806, 3);
INSERT INTO `products` VALUES (39, 'OPPO', 'OPPO Find X（标准版/全网通） ', 4999, 9.5, 774, 'http://detail.zol.com.cn/cell_phone/index1213467.shtml', 1213467, 3);
INSERT INTO `products` VALUES (40, 'OPPO', 'OPPO R15（6GB RAM/全网通） ', 2699, 9.2, 1055, 'http://detail.zol.com.cn/cell_phone/index1206990.shtml', 1206990, 3);
INSERT INTO `products` VALUES (41, 'OPPO', 'OPPO A3（全网通） ', 1799, 8.9, 366, 'http://detail.zol.com.cn/cell_phone/index1211599.shtml', 1211599, 3);
INSERT INTO `products` VALUES (42, 'OPPO', 'OPPO A5（全网通） ', 1500, 8.7, 357, 'http://detail.zol.com.cn/cell_phone/index1221126.shtml', 1221126, 3);
INSERT INTO `products` VALUES (43, 'OPPO', 'OPPO R11（标准版/全网通） ', 1553, 9.1, 1346, 'http://detail.zol.com.cn/cell_phone/index1150077.shtml', 1150077, 3);
INSERT INTO `products` VALUES (44, 'OPPO', 'OPPO A1（3GB RAM/全网通） ', 1000, 7.4, 86, 'http://detail.zol.com.cn/cell_phone/index1209829.shtml', 1209829, 3);
INSERT INTO `products` VALUES (45, 'OPPO', 'OPPO Find X兰博基尼版（全网通） ', 9999, 9.7, 89, 'http://detail.zol.com.cn/cell_phone/index1220645.shtml', 1220645, 3);
INSERT INTO `products` VALUES (46, 'OPPO', 'OPPO R17 Pro（全网通） ', 4299, 9.4, 91, 'http://detail.zol.com.cn/cell_phone/index1225826.shtml', 1225826, 3);
INSERT INTO `products` VALUES (47, 'OPPO', 'OPPO A7x（全网通） ', 1999, 8.7, 48, 'http://detail.zol.com.cn/cell_phone/index1230724.shtml', 1230724, 3);
INSERT INTO `products` VALUES (48, 'OPPO', 'OPPO R11s（4GB RAM/全网通） ', 2299, 9.2, 1310, 'http://detail.zol.com.cn/cell_phone/index1184068.shtml', 1184068, 3);
INSERT INTO `products` VALUES (49, 'OPPO', 'OPPO A83 (全网通) ', 1199, 5.8, 38, 'http://detail.zol.com.cn/cell_phone/index1205003.shtml', 1205003, 3);
INSERT INTO `products` VALUES (50, 'OPPO', 'OPPO A57（全网通） ', 799, 7.6, 577, 'http://detail.zol.com.cn/cell_phone/index1160598.shtml', 1160598, 3);
INSERT INTO `products` VALUES (51, 'OPPO', 'OPPO A73（全网通） ', 1499, 8.4, 380, 'http://detail.zol.com.cn/cell_phone/index1205054.shtml', 1205054, 3);
INSERT INTO `products` VALUES (52, 'OPPO', 'OPPO R17（雾光渐变色/8GB RAM/全网通） ', 3599, 9.5, 171, 'http://detail.zol.com.cn/cell_phone/index1229193.shtml', 1229193, 3);
INSERT INTO `products` VALUES (53, 'OPPO', 'OPPO R11s Plus（全网通） ', 1899, 9.0, 669, 'http://detail.zol.com.cn/cell_phone/index1184231.shtml', 1184231, 3);
INSERT INTO `products` VALUES (54, 'OPPO', 'OPPO R15梦镜版（梦境红/全网通） ', 2999, 9.2, 1032, 'http://detail.zol.com.cn/cell_phone/index1208720.shtml', 1208720, 3);
INSERT INTO `products` VALUES (55, 'OPPO', 'OPPO R17（6GB RAM/全网通） ', 3199, 9.5, 171, 'http://detail.zol.com.cn/cell_phone/index1229159.shtml', 1229159, 3);
INSERT INTO `products` VALUES (56, 'OPPO', 'OPPO R11 Plus（全网通） ', 1788, 9.2, 546, 'http://detail.zol.com.cn/cell_phone/index1170222.shtml', 1170222, 3);
INSERT INTO `products` VALUES (57, 'OPPO', 'OPPO R15梦镜版（陶瓷黑/梦境紫/全网通） ', 3299, 9.2, 1032, 'http://detail.zol.com.cn/cell_phone/index1210656.shtml', 1210656, 3);
INSERT INTO `products` VALUES (58, 'OPPO', 'OPPO A79（全网通） ', 1699, 8.7, 339, 'http://detail.zol.com.cn/cell_phone/index1203640.shtml', 1203640, 3);
INSERT INTO `products` VALUES (59, '小米', '小米8（6GB RAM/全网通） ', 2599, 5.1, 308, 'http://detail.zol.com.cn/cell_phone/index1213787.shtml', 1213787, 5);
INSERT INTO `products` VALUES (60, '小米', '小米6X（4GB RAM/全网通） ', 1349, 5.3, 106, 'http://detail.zol.com.cn/cell_phone/index1170480.shtml', 1170480, 5);
INSERT INTO `products` VALUES (61, '小米', '小米8 SE（4GB RAM/全网通） ', 1699, 5.3, 76, 'http://detail.zol.com.cn/cell_phone/index1217453.shtml', 1217453, 5);
INSERT INTO `products` VALUES (62, '小米', '小米8青春版（4GB RAM/全网通） ', 1399, 6.0, 18, 'http://detail.zol.com.cn/cell_phone/index1231048.shtml', 1231048, 5);
INSERT INTO `products` VALUES (63, '小米', '小米红米Note 5（3GB RAM/全网通） ', 999, 5.5, 98, 'http://detail.zol.com.cn/cell_phone/index1175353.shtml', 1175353, 5);
INSERT INTO `products` VALUES (64, '小米', '小米MIX 2s（6GB RAM/全网通） ', 2999, 5.6, 134, 'http://detail.zol.com.cn/cell_phone/index1202983.shtml', 1202983, 5);
INSERT INTO `products` VALUES (65, '小米', '小米6（6GB RAM/全网通） ', 2409, 6.2, 526, 'http://detail.zol.com.cn/cell_phone/index1161066.shtml', 1161066, 5);
INSERT INTO `products` VALUES (66, '小米', '小米红米6 Pro（3GB RAM/全网通） ', 969, 6.1, 21, 'http://detail.zol.com.cn/cell_phone/index1220665.shtml', 1220665, 5);
INSERT INTO `products` VALUES (67, '小米', '小米8透明探索版（全网通） ', 3699, 5.4, 48, 'http://detail.zol.com.cn/cell_phone/index1216973.shtml', 1216973, 5);
INSERT INTO `products` VALUES (68, '小米', '小米Max 3（4GB RAM/全网通） ', 1699, 5.1, 66, 'http://detail.zol.com.cn/cell_phone/index1205304.shtml', 1205304, 5);
INSERT INTO `products` VALUES (69, '小米', '小米MIX 2（全网通） ', 2299, 5.4, 147, 'http://detail.zol.com.cn/cell_phone/index1160797.shtml', 1160797, 5);
INSERT INTO `products` VALUES (70, '小米', '小米Max 2（全网通） ', 939, 6.2, 119, 'http://detail.zol.com.cn/cell_phone/index1165765.shtml', 1165765, 5);
INSERT INTO `products` VALUES (71, '小米', '小米红米6（3GB RAM/全网通） ', 769, 5.4, 11, 'http://detail.zol.com.cn/cell_phone/index1215069.shtml', 1215069, 5);
INSERT INTO `products` VALUES (72, '小米', '小米红米5 Plus（3GB RAM/全网通） ', 800, 5.8, 75, 'http://detail.zol.com.cn/cell_phone/index1183689.shtml', 1183689, 5);
INSERT INTO `products` VALUES (73, '小米', '小米红米Note 5（4GB RAM/全网通） ', 1299, 5.5, 98, 'http://detail.zol.com.cn/cell_phone/index1209455.shtml', 1209455, 5);
INSERT INTO `products` VALUES (74, '小米', '小米红米Note 4X（3GB RAM/全网通） ', 999, 5.7, 285, 'http://detail.zol.com.cn/cell_phone/index1163122.shtml', 1163122, 5);
INSERT INTO `products` VALUES (75, '小米', '小米Note 3（6GB RAM/全网通） ', 1849, 5.8, 92, 'http://detail.zol.com.cn/cell_phone/index1164780.shtml', 1164780, 5);
INSERT INTO `products` VALUES (76, '小米', '小米5X（全网通） ', 1129, 5.8, 98, 'http://detail.zol.com.cn/cell_phone/index1175015.shtml', 1175015, 5);
INSERT INTO `products` VALUES (77, '小米', '小米红米6A（2GB RAM/全网通） ', 549, 6.1, 3, 'http://detail.zol.com.cn/cell_phone/index1216196.shtml', 1216196, 5);
INSERT INTO `products` VALUES (78, '小米', '小米6X（6GB RAM/全网通） ', 1709, 5.3, 106, 'http://detail.zol.com.cn/cell_phone/index1212271.shtml', 1212271, 5);
INSERT INTO `products` VALUES (79, '小米', '小米MIX（全网通） ', 2900, 5.3, 173, 'http://detail.zol.com.cn/cell_phone/index1158428.shtml', 1158428, 5);
INSERT INTO `products` VALUES (80, '苹果', '苹果iPhone XS（全网通） ', 8699, 5.5, 51, 'http://detail.zol.com.cn/cell_phone/index1229519.shtml', 1229519, 2);
INSERT INTO `products` VALUES (81, '苹果', '苹果iPhone X（全网通） ', 6898, 8.0, 193, 'http://detail.zol.com.cn/cell_phone/index1182639.shtml', 1182639, 2);
INSERT INTO `products` VALUES (82, '苹果', '苹果iPhone XR（全网通） ', 6499, 4.6, 35, NULL, 1205394, 2);
INSERT INTO `products` VALUES (83, '苹果', '苹果iPhone 8 Plus（全网通） ', 5468, 8.5, 84, NULL, 1182632, 2);
INSERT INTO `products` VALUES (84, '苹果', '苹果iPhone XS Max（全网通） ', 9599, 5.8, 30, NULL, 1229520, 2);
INSERT INTO `products` VALUES (85, '苹果', '苹果iPhone 8（全网通） ', 4528, 6.8, 254, NULL, 394162, 2);
INSERT INTO `products` VALUES (86, '苹果', '苹果iPhone 7（全网通） ', 3628, 8.0, 475, 'http://detail.zol.com.cn/cell_phone/index384973.shtml', 384973, 2);
INSERT INTO `products` VALUES (87, '苹果', '苹果iPhone 7 Plus（全网通） ', 4499, 8.1, 335, 'http://detail.zol.com.cn/cell_phone/index1104332.shtml', 1104332, 2);
INSERT INTO `products` VALUES (88, '苹果', '苹果iPhone 6S Plus（全网通） ', 3000, 8.0, 279, 'http://detail.zol.com.cn/cell_phone/index398690.shtml', 398690, 2);
INSERT INTO `products` VALUES (89, '苹果', '苹果iPhone 5S（双4G） ', 1199, 8.2, 2964, 'http://detail.zol.com.cn/cell_phone/index340414.shtml', 340414, 2);
INSERT INTO `products` VALUES (90, '苹果', '苹果iPhone 8 Plus（国际版/全网通） ', 5188, 8.5, 84, 'http://detail.zol.com.cn/cell_phone/index1204817.shtml', 1204817, 2);
INSERT INTO `products` VALUES (91, '苹果', '苹果iPhone 7 Plus（双4G） ', 4388, 8.1, 335, 'http://detail.zol.com.cn/cell_phone/index1177080.shtml', 1177080, 2);
INSERT INTO `products` VALUES (92, '苹果', '苹果iPhone 8（国际版/全网通） ', 4688, 6.8, 254, 'http://detail.zol.com.cn/cell_phone/index1204816.shtml', 1204816, 2);
INSERT INTO `products` VALUES (93, '苹果', '苹果iPhone X（国际版/全网通） ', 6888, 8.0, 191, 'http://detail.zol.com.cn/cell_phone/index1204818.shtml', 1204818, 2);
INSERT INTO `products` VALUES (94, '苹果', '苹果iPhone 7 Plus（国际版/全网通） ', 4749, 8.1, 335, 'http://detail.zol.com.cn/cell_phone/index1155434.shtml', 1155434, 2);
INSERT INTO `products` VALUES (95, '苹果', '苹果iPhone 6S（国际版/双4G） ', 2320, 7.3, 551, 'http://detail.zol.com.cn/cell_phone/index1100448.shtml', 1100448, 2);
INSERT INTO `products` VALUES (96, '锤子科技', '锤子科技坚果Pro 2S（4GB RAM/全网通） ', 1798, 6.3, 22, 'http://detail.zol.com.cn/cell_phone/index1227474.shtml', 1227474, NULL);
INSERT INTO `products` VALUES (97, '锤子科技', '锤子科技坚果R1（6GB RAM/全网通） ', 3499, 5.1, 64, 'http://detail.zol.com.cn/cell_phone/index1162957.shtml', 1162957, NULL);
INSERT INTO `products` VALUES (98, '锤子科技', '锤子科技坚果Pro 2（4GB RAM/全网通） ', 1399, 7.4, 85, 'http://detail.zol.com.cn/cell_phone/index1202624.shtml', 1202624, NULL);
INSERT INTO `products` VALUES (99, '锤子科技', '锤子科技坚果3（全网通） ', 1099, 5.5, 42, 'http://detail.zol.com.cn/cell_phone/index1209757.shtml', 1209757, NULL);
INSERT INTO `products` VALUES (100, '锤子科技', '锤子科技坚果Pro 2S（6GB RAM/全网通） ', 1998, 6.3, 22, 'http://detail.zol.com.cn/cell_phone/index1228692.shtml', 1228692, NULL);
INSERT INTO `products` VALUES (101, '锤子科技', '锤子科技坚果Pro（64GB ROM/全网通） ', 1179, 7.3, 188, 'http://detail.zol.com.cn/cell_phone/index1166591.shtml', 1166591, NULL);
INSERT INTO `products` VALUES (102, '锤子科技', '锤子科技坚果R1（8GB RAM/全网通） ', 4499, 5.1, 64, 'http://detail.zol.com.cn/cell_phone/index1214020.shtml', 1214020, NULL);
INSERT INTO `products` VALUES (103, '锤子科技', '锤子科技坚果Pro 2特别版（全网通） ', 1449, 7.4, 85, 'http://detail.zol.com.cn/cell_phone/index1213907.shtml', 1213907, NULL);
INSERT INTO `products` VALUES (104, '锤子科技', '锤子科技坚果Pro（128GB ROM/全网通） ', 1499, 7.3, 188, 'http://detail.zol.com.cn/cell_phone/index1170719.shtml', 1170719, NULL);
INSERT INTO `products` VALUES (105, '锤子科技', '锤子科技坚果Pro 2（6GB RAM/全网通） ', 1949, 7.4, 85, 'http://detail.zol.com.cn/cell_phone/index1202737.shtml', 1202737, NULL);
INSERT INTO `products` VALUES (106, '锤子科技', '锤子科技M1（全网通） ', 1800, 8.0, 148, 'http://detail.zol.com.cn/cell_phone/index1138532.shtml', 1138532, NULL);
INSERT INTO `products` VALUES (107, '锤子科技', '锤子科技M1L（高配版/全网通） ', 2399, 8.0, 148, 'http://detail.zol.com.cn/cell_phone/index1157726.shtml', 1157726, NULL);
INSERT INTO `products` VALUES (108, '锤子科技', '锤子科技坚果Pro（32GB ROM/全网通） ', 1099, 7.3, 188, 'http://detail.zol.com.cn/cell_phone/index1170718.shtml', 1170718, NULL);

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `age` int NULL DEFAULT NULL,
  `score` int NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student
-- ----------------------------

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `age` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of students
-- ----------------------------
INSERT INTO `students` VALUES (1, 'jz', 18);
INSERT INTO `students` VALUES (2, 'tom', 22);
INSERT INTO `students` VALUES (3, 'lilei', 25);
INSERT INTO `students` VALUES (4, 'lucy', 16);
INSERT INTO `students` VALUES (5, 'lily', 20);

-- ----------------------------
-- Table structure for students_select_courses
-- ----------------------------
DROP TABLE IF EXISTS `students_select_courses`;
CREATE TABLE `students_select_courses`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_id` int NOT NULL,
  `course_id` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `student_id`(`student_id`) USING BTREE,
  INDEX `course_id`(`course_id`) USING BTREE,
  CONSTRAINT `students_select_courses_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `students_select_courses_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of students_select_courses
-- ----------------------------
INSERT INTO `students_select_courses` VALUES (1, 1, 1);
INSERT INTO `students_select_courses` VALUES (2, 1, 2);
INSERT INTO `students_select_courses` VALUES (3, 1, 3);
INSERT INTO `students_select_courses` VALUES (4, 3, 1);
INSERT INTO `students_select_courses` VALUES (6, 2, 3);
INSERT INTO `students_select_courses` VALUES (7, 5, 1);
INSERT INTO `students_select_courses` VALUES (8, 2, 2);
INSERT INTO `students_select_courses` VALUES (9, 3, 3);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `age` int NULL DEFAULT 0,
  `telPhone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `phoneNum`(`telPhone`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 112 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (111, 'kobe', 40, '0322-123123', NULL, NULL);
INSERT INTO `user` VALUES (112, 'hll', 18, '0322-10010010', '2022-04-13 18:01:20', '2022-04-13 18:11:53');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `avatar_url` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'jz', '123', '2022-04-17 17:10:38', '2022-04-17 17:10:38', NULL);
INSERT INTO `users` VALUES (2, 'kobe', '123', '2022-04-17 19:58:23', '2022-04-17 19:58:23', NULL);
INSERT INTO `users` VALUES (3, 'lilei', '202cb962ac59075b964b07152d234b70', '2022-04-17 20:25:50', '2022-07-12 15:47:39', 'http://localhost:8888/users/3/avatar');
INSERT INTO `users` VALUES (4, 'hmm', '202cb962ac59075b964b07152d234b70', '2022-04-18 21:05:08', '2022-04-18 21:05:08', NULL);

SET FOREIGN_KEY_CHECKS = 1;
