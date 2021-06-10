/*
Navicat MySQL Data Transfer

Source Server         : Somber
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : aaa

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2021-06-10 15:48:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '张三', '123456');
INSERT INTO `user` VALUES ('2', '李四', '456');
INSERT INTO `user` VALUES ('9', '赵云', '222');
INSERT INTO `user` VALUES ('11', '曹孟德', '333');
INSERT INTO `user` VALUES ('3', 'asd', '2345');
INSERT INTO `user` VALUES ('4', '丽丽', '45678');
INSERT INTO `user` VALUES ('12', '赵云', '222');
