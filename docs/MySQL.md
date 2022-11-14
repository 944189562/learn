# MySQL 关系数据库

### DDL-对数据表的操作

```mysql
SHOW DATABASES;

USE blog;

SELECT DATABASE();

# 创建数据库
CREATE DATABASE blog;
CREATE DATABASE IF NOT EXISTS blog;
# 设置编码和排序规则
CREATE DATABASE IF NOT EXISTS blog DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

# 删除数据库
DROP DATABASE IF EXISTS blog;

# 修改数据库
ALTER DATABASE huya CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;

# 查看数据表
SHOW TABLES;

# 新建表
CREATE TABLE IF NOT EXISTS `student` (
	`name` VARCHAR(10),
	`age` int,
	`score` int,
	# DECIMAL 表示精确的数字 10位，2位小数
	`height`: DECIMAL(10, 2),
	`birthday`: DATE(1994-05-11),
	# DELETE 默认值
	# NOT NULL 非空
	`phoneNum`: VARCHAR(20) UNION,
)

# 删除表
DROP TABLE IF EXISTS `user`;

# 查看表的结构
DESC student;

# 查看创建表的SQL语句
SHOW CREATE TABLE `student`;

-- CREATE TABLE `student` (
--   `name` varchar(10) DEFAULT NULL,
--   `age` int DEFAULT NULL,
--   `score` int DEFAULT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

# 完整的创建的表的语法：
CREATE TABLE IF NOT EXISTS `users`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(20) NOT NULL,
	age INT DEFAULT 0,
	phoneNum VARCHAR(20) UNIQUE DEFAULT '',
	createTime TIMESTAMP
)

# 修改表
# 1. 修改表的名字
ALTER TABLE `users` RENAME TO `user`;

# 2. 添加一个新的列
ALTER TABLE `user` ADD `updateTime` TIMESTAMP;

# 3. 修改表字段的名称
ALTER TABLE `user` CHANGE `phoneNum` `telPhone` VARCHAR(20);

# 4. 修改字段的类型
ALTER TABLE `user` MODIFY `name` VARCHAR(30);

# 更改createTime自动添加当前时间
ALTER TABLE `user` MODIFY `createTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE `user` MODIFY `updateTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

# 5. 删除表的字段
ALTER TABLE `user` DROP `age`;

# 根据一个表结构去创建另外一张表
CREATE TABLE `user1` LIKE `user`;

# 根据另外一张表中的所有内容；创建一个新的表
CREATE TABLE `user2` (SELECT * FROM `user`);
# DROP TABLE IF EXISTS `user2`;

# 创建表
CREATE TABLE IF NOT EXISTS `members`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(20) NOT NULL,
	`age` INT DEFAULT 18,
	`height` DOUBLE,
	`mid` VARCHAR(20) NOT NULL UNIQUE,
	`tel` VARCHAR(11) UNIQUE DEFAULT NULL
) 

# 修改表的名字
ALTER TABLE `members` RENAME TO `member`;

# 添加一个新的列
ALTER TABLE `member` ADD `createTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE `member` ADD `updateTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

# 修改表字段的名称
ALTER TABLE `member` CHANGE `name` `username` VARCHAR(30) NOT NULL;

# 修改表字段类型
ALTER TABLE `member` MODIFY `tel` VARCHAR(11) UNIQUE;

# 删除表字段
ALTER TABLE `member` ADD `birthday` DATE;
ALTER TABLE `member` DROP `birthday`;

# 根据当前表结构创建另一张表
CREATE TABLE `member2` LIKE `member`;

# DML
# 插入数据
INSERT INTO `member` (`username`, `height`, `mid`, `tel`) VALUES ('jz', 1.88, 'm123', 17582929141);
INSERT INTO `member` (`username`, `height`, `mid`, `tel`) VALUES ('kobe', 1.88, 'm132', 17582929142);
INSERT INTO `member` (`username`, `height`, `mid`, `tel`) VALUES ('hmm', 1.88, 'm213', 17582929143);
INSERT INTO `member` (`username`, `height`, `mid`, `tel`) VALUES ('ll', 1.88, 'm321', 17582929144);
INSERT INTO `member` (`username`, `height`, `mid`, `tel`) VALUES ('curry', 1.88, 'm432', 17582929145);

# 删除数据
DELETE FROM `member` WHERE id = 5;

# 更新id = 4 数据
UPDATE `member` SET `username` = 'hanmeimei' WHERE id = 4;

# DML Data Munipulation Language
# 插入数据
INSERT INTO `user` VALUES (110, 'jz', 18, '0322-131244', '2020-12-01', '2020-12-02')
INSERT INTO `user` (name, age, telPhone) VALUES ('kobe', 40, '0322-123123');

# 更改createTime自动添加当前时间
ALTER TABLE `user` MODIFY `createTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE `user` MODIFY `updateTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

INSERT INTO `user` (name, age, telPhone) VALUES ('hanleilei', 18, '0322-123124');


# 删除数据

# 删除所有数据
DELETE FROM `user`; 

# 删除符合条件的数据，id为110的数据被删除
DELETE FROM `user` WHERE id = 110;

# 更新数据

# 更新所有数据
UPDATE `user` SET `name` = 'hll', telPhone = '0322-10010010';

# 更新符合条件的数据
UPDATE `user` SET `name` = 'hll', telPhone = '0322-10010010' WHERE id = 112;

UPDATE `user` SET `name` = 'lgy', telPhone = '4234-32543545' WHERE id = 112;
```

