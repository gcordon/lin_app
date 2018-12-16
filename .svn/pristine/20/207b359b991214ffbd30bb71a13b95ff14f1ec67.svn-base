-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-12-07 12:49:42
-- 服务器版本： 10.1.32-MariaDB
-- PHP Version: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `egg`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 用户名',
  `password` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 密码',
  `encryption_password` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 加密后的密码'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 后台管理员';

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `encryption_password`) VALUES
(1, 'admin', 'admin', '5752dc96740ceee20e14963824a4ed4c');

-- --------------------------------------------------------

--
-- 表的结构 `brainstorming`
--

CREATE TABLE `brainstorming` (
  `id` int(11) NOT NULL,
  `title` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 头脑风暴标题',
  `description` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 头脑风暴详情',
  `status` varchar(300) CHARACTER SET utf8 NOT NULL DEFAULT 'wait' COMMENT '//班课状态（wait => 未开始conduct=》进行中  end=》已结束）',
  `fraction` int(11) NOT NULL COMMENT '// 头脑风暴分数',
  `date` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 头脑风暴发布时间',
  `course_child_id` int(11) NOT NULL COMMENT '// 头脑风暴对应课程的id'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 蓝墨云头脑风暴';

--
-- 转存表中的数据 `brainstorming`
--

INSERT INTO `brainstorming` (`id`, `title`, `description`, `status`, `fraction`, `date`, `course_child_id`) VALUES
(41, '头脑风暴标题', '头脑风暴内容', 'conduct', 6, '2018-11-16 08:11:27', 102),
(42, '666', 'fc', 'conduct', 1, '2018-11-20 07:44:55', 35),
(46, '点点滴滴', '啊啊啊啊', 'wait', 4, '2018-12-03 11:21:19', 107);

-- --------------------------------------------------------

--
-- 表的结构 `brainstorming_comment`
--

CREATE TABLE `brainstorming_comment` (
  `id` int(11) NOT NULL,
  `comment_content` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '//  评论内容',
  `student_token` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '//  评论学生token',
  `brainstorming_id` varchar(300) NOT NULL COMMENT '//  对应头脑风暴id',
  `date` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 发布的时间'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 蓝墨云头脑风暴评论';

--
-- 转存表中的数据 `brainstorming_comment`
--

INSERT INTO `brainstorming_comment` (`id`, `comment_content`, `student_token`, `brainstorming_id`, `date`) VALUES
(43, 'ddd rdddd', '94a5704fb4bf93edcace74c967b293c0', '42', '2018-11-20 15:45:28'),
(44, '把北京路', '1a468fb9131005d90fd68f6d73f0a930', '42', '2018-12-05 10:13:00');

-- --------------------------------------------------------

--
-- 表的结构 `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL COMMENT '// 评论内容',
  `comment_id` int(11) NOT NULL COMMENT '// 评论者id',
  `course_child_id` int(11) NOT NULL COMMENT '// 对应的子课程id',
  `date` date NOT NULL COMMENT '// 评论时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='// 子课程评论';

--
-- 转存表中的数据 `comment`
--

INSERT INTO `comment` (`id`, `content`, `comment_id`, `course_child_id`, `date`) VALUES
(1, '评论内容', 1, 35, '2018-06-01'),
(2, '评论内容', 1, 35, '2018-06-01'),
(15, '评论内容', 1, 35, '0000-00-00'),
(16, '评论内容', 1, 35, '0000-00-00'),
(17, '评论内容', 1, 35, '0000-00-00'),
(18, '评论内容', 1, 35, '0000-00-00'),
(19, '评论内容', 1, 35, '0000-00-00');

-- --------------------------------------------------------

--
-- 表的结构 `course`
--

CREATE TABLE `course` (
  `id` tinyint(4) NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `banner` varchar(300) CHARACTER SET utf8 DEFAULT 'avatar.jpg' COMMENT '//导航',
  `description` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '//简介',
  `status` varchar(300) CHARACTER SET utf8 NOT NULL DEFAULT 'wait' COMMENT '//班课状态（wait => 未开始conduct=》进行中  end=》已结束）暂时用不到',
  `switch` int(2) NOT NULL DEFAULT '1' COMMENT '// 课程的开关（结束班课或开始班课）（1开始2结束）',
  `claim` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 学习要求',
  `examgear` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 考试安排',
  `school` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '//学校',
  `details` varchar(1000) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '//  详情',
  `learn_number` int(4) NOT NULL DEFAULT '0' COMMENT '//学习人数统计',
  `popular` int(11) NOT NULL DEFAULT '1' COMMENT '// 是否是热门课程',
  `popular_banner` varchar(300) NOT NULL DEFAULT 'public/img/popular_banner/default.png' COMMENT '// 热门课程对应的背景图',
  `recommend` int(11) NOT NULL DEFAULT '1' COMMENT '// 是否是推荐课程',
  `course_class_id` tinyint(4) NOT NULL COMMENT '//子课程id',
  `course_type_id` int(11) NOT NULL COMMENT '// 总课程id',
  `teacher_id` varchar(1000) NOT NULL DEFAULT '[]' COMMENT '//对应的创建此课程的老师id'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 子课程表';

--
-- 转存表中的数据 `course`
--

INSERT INTO `course` (`id`, `title`, `banner`, `description`, `status`, `switch`, `claim`, `examgear`, `school`, `details`, `learn_number`, `popular`, `popular_banner`, `recommend`, `course_class_id`, `course_type_id`, `teacher_id`) VALUES
(35, '程序设计基础CAP35', 'public/img/avatar/2018-11-28_1543370451346.jpg', 'yyyy', 'wait', 2, 'linlin', 'lin', '阿克苏学校', '', 40, 1, 'public/img/popular_banner/default.png', 1, 1, 1, '[101,102,107]'),
(37, '大学计算机37', 'public/img/avatar/1.png', 'description', 'wait', 1, '学习要求', '考试安排', '社会大学', '', 9, 2, 'public/img/popular_banner/1.png', 1, 1, 1, '[101,102,107]'),
(38, 'VisualBasic6.0P38', 'public/img/avatar/2.png', '2222道法自然---借鉴自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制', 'wait', 1, '学习要求', '考试安排', '社会大学', '', 8, 2, 'public/img/popular_banner/2.png', 1, 1, 1, '[101,102,107]'),
(39, '大学计算机基础CAP39', 'public/img/avatar/3.png', '22222道法自然---借鉴自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制', 'wait', 1, '学习要求', '考试安排', '社会大学', '', 5, 2, 'public/img/popular_banner/3.png', 1, 2, 1, '[101,102,107]'),
(40, '“互联网+”40', 'public/img/avatar/4.png', '‘道法自然---借鉴自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制’', 'wait', 1, '学习要求', '考试安排', '社会大学', '', 14, 2, 'public/img/popular_banner/4.png', 1, 1, 1, '[101,102,107]'),
(41, '计算思维导论CAP41', 'public/img/avatar/5.png', '‘道法自然---借鉴自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制’', 'wait', 1, '学习要求', '考试安排', '社会大学', '', 5, 1, 'public/img/popular_banner/5.png', 1, 1, 1, '[101,102,107]'),
(53, '网络技术与应用53', 'public/img/avatar/6.png', '‘道法自然---借鉴自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制’', 'wait', 1, '学习要求', '考试安排', '社会大学', '', 6, 1, 'public/img/popular_banner/default.png', 1, 1, 1, '[101,102,107]'),
(54, '网络技术与应用54', 'public/img/avatar/7.png', '‘道法自然---借鉴自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制’', 'wait', 1, '学习要求', '考试安排', '社会大学', '', 5, 1, 'public/img/popular_banner/default.png', 1, 1, 1, '[101,102,107]'),
(55, '计算机网络55', 'public/img/avatar/8.png', '‘道法自然---借鉴自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制’', 'wait', 1, '学习要求', '考试安排', '社会大学', '', 5, 1, 'public/img/popular_banner/default.png', 1, 1, 1, '[101,102,107]'),
(56, 'C语言程序设计56', 'public/img/avatar/9.png', '‘道法自然---借鉴自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制’', 'wait', 1, '学习要求', '考试安排', '社会大学', '', 4, 1, 'public/img/popular_banner/default.png', 1, 1, 1, '[101,102,107]'),
(57, 'Office高级应用57', 'public/img/avatar/default.png', '道法自然---借鉴自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制', 'wait', 1, '学习要求', '考试安排', '社会大学', '', 6, 1, 'public/img/popular_banner/default.png', 1, 1, 1, '[101,102,107]'),
(58, 'Python语言程序设计58', 'public/img/avatar/10.png', '道法自然---借鉴自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制', 'wait', 1, '爸爸', '妈妈', '社会大学', '', 20, 1, 'public/img/popular_banner/default.png', 1, 1, 1, '[101,102,107]'),
(59, '程序设计入门C语言50', 'public/img/avatar/default.png', '道法自然---借鉴自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制', 'wait', 1, 'lin', 'lin', '社会大学', '', 4, 1, 'public/img/popular_banner/default.png', 1, 1, 1, '[101,102,107]'),
(68, 'C语言程序设计CAP68', 'public/img/avatar/default.png', '道法自然---借鉴自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制', 'wait', 1, '', '', '社会大学', '', 4, 1, 'public/img/popular_banner/default.png', 1, 1, 1, '[101,102,107]'),
(71, '从自然时间s到智能1时代1', 'public/img/avatar/default.png', '道法自然---借鉴自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制', 'wait', 1, '', '', '社会大学', '', 3, 1, 'public/img/popular_banner/default.png', 1, 1, 1, '[101,102,107]'),
(97, '6-20', 'public/img/avatar/2018-06-20_1529486755051.jpg', '6-20', 'wait', 1, '未设置', '未设置', '社会大学', '', 4, 1, 'public/img/popular_banner/default.png', 1, 1, 1, '[101,102,107]'),
(98, '从自然时间122', 'public/img/avatar/2018-06-20_1529486804437.jpg', '道法自然---借鉴自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制', 'wait', 1, '', '', '社会大学', '', 4, 1, 'public/img/popular_banner/default.png', 1, 1, 1, '[101,102,107]'),
(99, '测试', 'public/img/avatar/2018-06-22_1529631225977.jpg', '这是测试课程', 'wait', 2, '请不要在课堂说话', '不要乱说话', '社会大学', '', 3, 1, 'public/img/popular_banner/default.png', 1, 7, 2, '[101,102,107]'),
(100, '401', 'public/img/avatar/2018-07-03_1530579681400.jpg', '敢死队', 'wait', 1, 'wq', '没要求', '社会大学', '', 3, 1, 'public/img/popular_banner/default.png', 1, 5, 1, '[101,102,107]'),
(101, '我gu j h h j', 'public/img/avatar/2018-07-10_1531214038229.jpg', 'ygghjjhy', 'wait', 1, '很尴尬uiu', 'fgikjhhjj', '北京南苑学校', '', 3, 1, 'public/img/popular_banner/default.png', 1, 6, 1, '[101,102,107]'),
(102, '11', 'public/img/avatar/2018-11-15_1542289286578.jpg', '111', 'wait', 2, '未设置', '未设置', '阿克苏学校', '', 4, 1, 'public/img/popular_banner/default.png', 1, 12, 2, '[101,102,107]'),
(103, '未设置', 'public/img/avatar/2018-11-19_1542595230333.png', '网瘾研究所', 'wait', 1, '网瘾研究所', '网瘾研究所', '珠海三灶学校', '', 1, 1, 'public/img/popular_banner/default.png', 1, 1, 1, '[108]'),
(104, '阿达', 'public/img/avatar/2018-11-22_1542876535149.jpg', '达', 'wait', 1, '未设置', '未设置', '阿克苏学校', '', 1, 1, 'public/img/popular_banner/default.png', 1, 5, 1, '[107]'),
(105, 'test', 'public/img/avatar/2018-11-28_1543370480881.jpg', 'test', 'wait', 1, '未设置', '未设置', '安庆天柱山学校', '', 3, 1, 'public/img/popular_banner/default.png', 1, 1, 1, '[101]'),
(106, '666666666666666666666', 'public/img/avatar/2018-12-03_1543824854465.jpg', '道法自然---借鉴自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制', 'wait', 1, '', '', '', '', 0, 1, 'public/img/popular_banner/default.png', 1, 1, 1, '[101]'),
(107, '大的', 'public/img/avatar/2018-12-03_1543826429734.jpg', '未设置', 'wait', 1, '未设置', '未设置', '未设置', '', 3, 1, 'public/img/popular_banner/default.png', 1, 8, 2, '[130]');

-- --------------------------------------------------------

--
-- 表的结构 `courseware`
--

CREATE TABLE `courseware` (
  `id` int(11) NOT NULL,
  `title` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 课件总标题',
  `sequence` int(11) NOT NULL COMMENT '// 序号',
  `course_child_id` int(11) NOT NULL COMMENT '// ',
  `date` date NOT NULL COMMENT '// 课件发布时间'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 课件总课件';

--
-- 转存表中的数据 `courseware`
--

INSERT INTO `courseware` (`id`, `title`, `sequence`, `course_child_id`, `date`) VALUES
(229, '第3讲 程序与递归：组合-抽象-构造', 3, 35, '2018-06-02'),
(230, '第4视频答疑', 4, 35, '2018-06-02'),
(231, '第3讲 程序与递归：组合-抽象-构造', 3, 35, '2018-06-02'),
(232, '第4视频答疑', 4, 35, '2018-06-02'),
(233, '第4视频答疑', 4, 35, '2018-06-02'),
(234, '第3讲 程序与递归：组合-抽象-构造', 3, 35, '2018-06-02'),
(235, '第3讲 程序与递归：组合-抽象-构造', 3, 35, '2018-06-02'),
(236, '第4视频答疑', 4, 35, '2018-06-02'),
(237, '第3讲 程序与递归：组合-抽象-构造', 3, 40, '2018-06-02'),
(238, '第4视频答疑', 4, 40, '2018-06-02'),
(239, '第3讲 程序与递归：组合-抽象-构造', 3, 40, '2018-06-02'),
(240, '第4视频答疑', 4, 40, '2018-06-02'),
(241, '父成员小组方案管理1', 0, 40, '2018-06-02');

-- --------------------------------------------------------

--
-- 表的结构 `courseware_child`
--

CREATE TABLE `courseware_child` (
  `id` int(11) NOT NULL,
  `title` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 标题',
  `type` varchar(300) NOT NULL COMMENT '// 类型',
  `sequence` int(11) NOT NULL COMMENT '// 序号',
  `src` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 课程的下载地址',
  `courseware_id` int(11) NOT NULL COMMENT '// 对应的总课件id',
  `courseware_class_id` int(11) NOT NULL COMMENT '// 对应的类课件id',
  `course_child_id` int(11) NOT NULL COMMENT '// 对应的子课程id',
  `date` date NOT NULL COMMENT '// 发布的时间'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 课件子课程';

--
-- 转存表中的数据 `courseware_child`
--

INSERT INTO `courseware_child` (`id`, `title`, `type`, `sequence`, `src`, `courseware_id`, `courseware_class_id`, `course_child_id`, `date`) VALUES
(58, '3.1.1计算机与程序-程序的作用和本质', 'video', 1, '', 229, 136, 35, '2018-06-01'),
(59, '3.1.2计算机与程序-程序的作用和本质', 'video', 1, '', 229, 136, 35, '2018-06-01'),
(60, '4.1.1 视频答疑', 'video', 1, 'public/img/video/666.mp4', 230, 138, 35, '2018-06-01'),
(61, '3.1.1计算机与程序-程序的作用和本质', 'video', 1, '', 231, 139, 35, '2018-06-01'),
(62, '3.1.2计算机与程序-程序的作用和本质', 'video', 1, '', 231, 139, 35, '2018-06-01'),
(63, '4.1.1 视频答疑', 'video', 1, '', 232, 141, 35, '2018-06-01'),
(64, '4.1.1 视频答疑', 'video', 1, '', 233, 142, 35, '2018-06-01'),
(65, '3.1.1计算机与程序-程序的作用和本质', 'video', 1, '', 234, 143, 35, '2018-06-01'),
(66, '3.1.2计算机与程序-程序的作用和本质', 'video', 1, '', 234, 143, 35, '2018-06-01'),
(67, '3.1.1计算机与程序-程序的作用和本质', 'video', 1, '', 235, 145, 35, '2018-06-01'),
(68, '3.1.2计算机与程序-程序的作用和本质', 'video', 1, '', 235, 145, 35, '2018-06-01'),
(69, '4.1.1 视频答疑', 'video', 1, '', 236, 147, 35, '2018-06-01'),
(70, '3.1.1计算机与程序-程序的作用和本质', 'video', 1, '', 237, 148, 40, '2018-06-01'),
(71, '3.1.2计算机与程序-程序的作用和本质', 'video', 1, '', 237, 148, 40, '2018-06-01'),
(72, '4.1.1 视频答疑', 'video', 1, '', 238, 150, 40, '2018-06-01'),
(73, '3.1.1计算机与程序-程序的作用和本质', 'video', 1, '', 239, 151, 40, '2018-06-01'),
(74, '3.1.2计算机与程序-程序的作用和本质', 'video', 1, '', 239, 151, 40, '2018-06-01'),
(75, '4.1.1 视频答疑', 'video', 1, '', 240, 153, 40, '2018-06-01');

-- --------------------------------------------------------

--
-- 表的结构 `courseware_class`
--

CREATE TABLE `courseware_class` (
  `id` int(11) NOT NULL,
  `title` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 课程类标题',
  `sequence` int(11) NOT NULL COMMENT '// 序号',
  `courseware_id` int(11) NOT NULL COMMENT '// 对应的总课件id',
  `course_child_id` int(11) NOT NULL COMMENT '// 对应的子课程id',
  `date` date NOT NULL COMMENT '// 发布时间'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 课程类课件';

--
-- 转存表中的数据 `courseware_class`
--

INSERT INTO `courseware_class` (`id`, `title`, `sequence`, `courseware_id`, `course_child_id`, `date`) VALUES
(136, '3.1计算机与程序-程序的作用和本质', 1, 229, 35, '2018-06-19'),
(137, '3.1.1计算机与程序-程序的作用和本质', 1, 229, 35, '2018-06-01'),
(138, '4.1 视频答疑', 1, 230, 35, '2018-06-19'),
(139, '3.1计算机与程序-程序的作用和本质', 1, 231, 35, '2018-06-19'),
(140, '3.1.1计算机与程序-程序的作用和本质', 1, 231, 35, '2018-06-01'),
(141, '4.1 视频答疑', 1, 232, 35, '2018-06-19'),
(142, '4.1 视频答疑', 1, 233, 35, '2018-06-19'),
(143, '3.1计算机与程序-程序的作用和本质', 1, 234, 35, '2018-06-19'),
(144, '3.1.1计算机与程序-程序的作用和本质', 1, 234, 35, '2018-06-01'),
(145, '3.1计算机与程序-程序的作用和本质', 1, 235, 35, '2018-06-19'),
(146, '3.1.1计算机与程序-程序的作用和本质', 1, 235, 35, '2018-06-01'),
(147, '4.1 视频答疑', 1, 236, 35, '2018-06-19'),
(148, '3.1计算机与程序-程序的作用和本质', 1, 237, 40, '2018-06-19'),
(149, '3.1.1计算机与程序-程序的作用和本质', 1, 237, 40, '2018-06-01'),
(150, '4.1 视频答疑', 1, 238, 40, '2018-06-19'),
(151, '3.1计算机与程序-程序的作用和本质', 1, 239, 40, '2018-06-19'),
(152, '3.1.1计算机与程序-程序的作用和本质', 1, 239, 40, '2018-06-01'),
(153, '4.1 视频答疑', 1, 240, 40, '2018-06-19');

-- --------------------------------------------------------

--
-- 表的结构 `course_class`
--

CREATE TABLE `course_class` (
  `id` tinyint(4) NOT NULL,
  `class_name` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `title` varchar(300) CHARACTER SET utf8 NOT NULL,
  `course_type_id` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 类课程表';

--
-- 转存表中的数据 `course_class`
--

INSERT INTO `course_class` (`id`, `class_name`, `title`, `course_type_id`) VALUES
(1, '计算机基础', '计算机基础', 1),
(2, '编程语言', '编程语言', 1),
(3, '数据库与数据结', '数据库与数据结', 1),
(4, '计算机应用', '计算机应用', 1),
(5, '软件工程', '软件工程', 1),
(6, '计算机组成', '计算机组成', 1),
(7, '经济学', '经济学', 2),
(8, '金融学', '金融学', 2),
(9, '工商管理', '工商管理', 2),
(10, '电子商务', '电子商务', 2),
(11, '公共管理', '公共管理', 2),
(12, '管理科学和工程', '管理科学和工程', 2);

-- --------------------------------------------------------

--
-- 表的结构 `course_type`
--

CREATE TABLE `course_type` (
  `id` tinyint(4) NOT NULL,
  `class_name` varchar(300) CHARACTER SET utf8 NOT NULL,
  `title` varchar(300) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 总课程表';

--
-- 转存表中的数据 `course_type`
--

INSERT INTO `course_type` (`id`, `class_name`, `title`) VALUES
(1, '计算机', '计算机'),
(2, '经济管理', '经济管理'),
(3, '心里学', '心里学'),
(4, '物理', '物理'),
(5, '化学', '化学'),
(6, '生物', '生物'),
(7, '语文', '语文'),
(9, '数学', '数学');

-- --------------------------------------------------------

--
-- 表的结构 `discuss`
--

CREATE TABLE `discuss` (
  `id` int(11) NOT NULL,
  `title` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 答疑/讨论标题',
  `description` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 答疑/讨论详情',
  `status` varchar(300) CHARACTER SET utf8 NOT NULL DEFAULT 'wait' COMMENT '//班课状态（wait => 未开始conduct=》进行中  end=》已结束）',
  `fraction` int(11) NOT NULL COMMENT '// 答疑/讨论分数',
  `date` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 答疑/讨论发布时间',
  `course_child_id` int(11) NOT NULL COMMENT '// 答疑/讨论对应子课程的id'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 蓝墨云答疑/讨论';

--
-- 转存表中的数据 `discuss`
--

INSERT INTO `discuss` (`id`, `title`, `description`, `status`, `fraction`, `date`, `course_child_id`) VALUES
(31, '大的点点滴滴', '放放风的', 'end', 1, '2018-12-03 11:20:07', 107),
(32, 'fft', 'yy', 'end', 1, '2018-12-05 02:29:51', 35);

-- --------------------------------------------------------

--
-- 表的结构 `discuss_comment`
--

CREATE TABLE `discuss_comment` (
  `id` int(11) NOT NULL,
  `comment_content` text CHARACTER SET utf8 NOT NULL COMMENT '//  发送的消息',
  `discuss_id` int(11) NOT NULL COMMENT '//  对应答疑/讨论id',
  `date` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 发布的时间'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 蓝墨云答疑/讨论评论';

--
-- 转存表中的数据 `discuss_comment`
--

INSERT INTO `discuss_comment` (`id`, `comment_content`, `discuss_id`, `date`) VALUES
(13, '[{\"student_id\":\"101\",\"content\":\"1\",\"time\":\"2018-11-20 16:42:58\"},{\"student_id\":\"101\",\"content\":\"2\",\"time\":\"2018-11-20 16:43:03\"},{\"student_id\":\"101\",\"content\":\"3\",\"time\":\"2018-11-20 16:56:08\"},{\"student_id\":\"101\",\"content\":\"刚刚\",\"time\":\"2018-11-20 17:08:39\"},{\"student_id\":\"110\",\"content\":\"的\",\"time\":\"2018-11-20 20:31:03\"},{\"student_id\":\"110\",\"content\":\"刚刚\",\"time\":\"2018-11-20 20:31:13\"},{\"student_id\":\"107\",\"content\":\"77\",\"time\":\"2018-11-20 20:32:02\"},{\"student_id\":\"101\",\"content\":\"111\",\"time\":\"2018-11-20 20:32:11\"},{\"student_id\":\"101\",\"content\":\"666\",\"time\":\"2018-11-20 20:32:14\"},{\"student_id\":\"101\",\"content\":\"777\",\"time\":\"2018-11-20 20:32:17\"},{\"student_id\":\"101\",\"content\":\"77\",\"time\":\"2018-11-20 20:32:32\"},{\"student_id\":\"101\",\"content\":\"66\",\"time\":\"2018-11-21 15:35:32\"},{\"student_id\":\"101\",\"content\":\"11\",\"time\":\"2018-11-21 15:35:37\"},{\"student_id\":\"101\",\"content\":\"1\",\"time\":\"2018-11-22 16:20:37\"},{\"student_id\":\"101\",\"content\":\"nnn\",\"time\":\"2018-11-22 16:20:43\"},{\"student_id\":\"101\",\"content\":\"hhh\",\"time\":\"2018-11-22 16:20:46\"},{\"student_id\":\"101\",\"content\":\"hh\",\"time\":\"2018-11-22 16:20:50\"},{\"student_id\":\"101\",\"content\":\"uuh\",\"time\":\"2018-11-22 16:20:53\"},{\"student_id\":\"101\",\"content\":\"hhh\",\"time\":\"2018-11-22 16:20:55\"},{\"student_id\":\"101\",\"content\":\"uuu\",\"time\":\"2018-11-22 16:20:57\"},{\"student_id\":\"101\",\"content\":\"hhh\",\"time\":\"2018-11-22 16:20:59\"},{\"student_id\":\"101\",\"content\":\"hhh\",\"time\":\"2018-11-22 16:21:02\"},{\"student_id\":\"101\",\"content\":\"hhhh\",\"time\":\"2018-11-22 16:21:04\"},{\"student_id\":\"101\",\"content\":\"hhh\",\"time\":\"2018-11-22 16:21:06\"},{\"student_id\":\"101\",\"content\":\"hhhhhh\",\"time\":\"2018-11-22 16:21:09\"},{\"student_id\":\"101\",\"content\":\"hhh\",\"time\":\"2018-11-22 16:21:12\"},{\"student_id\":\"107\",\"content\":\"h h h g h j j j j\",\"time\":\"2018-12-03 09:33:49\"},{\"student_id\":\"107\",\"content\":\"ghjjjbvvnm\",\"time\":\"2018-12-03 09:34:00\"}]', 30, ''),
(14, '[{\"student_id\":\"107\",\"content\":\"ff\",\"time\":\"2018-11-20 20:32:39\"},{\"student_id\":\"107\",\"content\":\"df\",\"time\":\"2018-11-20 20:32:43\"},{\"student_id\":\"107\",\"content\":\"21\",\"time\":\"2018-12-04 10:35:41\"}]', 31, ''),
(15, '[{\"student_id\":\"129\",\"content\":\"55\",\"time\":\"2018-12-05 10:31:07\"}]', 32, '');

-- --------------------------------------------------------

--
-- 表的结构 `havelearned`
--

CREATE TABLE `havelearned` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `course_child_id` int(11) NOT NULL COMMENT '// 对应的子课程id',
  `experience` int(11) NOT NULL COMMENT '// 学习的经验',
  `schedule` int(11) NOT NULL COMMENT '// 学习的进度',
  `task_id` int(11) NOT NULL COMMENT '// 对应的任务id',
  `task_id_experience` int(11) NOT NULL COMMENT '// 对应的任务id经验',
  `vote_id` int(11) NOT NULL COMMENT '// 对应的投票id',
  `vote_id_experience` int(11) NOT NULL COMMENT '//对应的投票id经验',
  `brainstorming_id` int(11) NOT NULL COMMENT '// 对应的头脑风暴id',
  `brainstorming_id_experience` int(11) NOT NULL COMMENT '//对应的头脑风暴id经验',
  `discuss_id` int(11) NOT NULL COMMENT '// 对应的讨论id',
  `discuss_id_experience` int(11) NOT NULL COMMENT '//对应的讨论id经验',
  `testing_id` int(11) NOT NULL COMMENT '// 对应的测试id',
  `testing_id_experience` int(11) NOT NULL COMMENT '//对应的测试id经验'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='// 学生学习过的课程';

--
-- 转存表中的数据 `havelearned`
--

INSERT INTO `havelearned` (`id`, `student_id`, `course_child_id`, `experience`, `schedule`, `task_id`, `task_id_experience`, `vote_id`, `vote_id_experience`, `brainstorming_id`, `brainstorming_id_experience`, `discuss_id`, `discuss_id_experience`, `testing_id`, `testing_id_experience`) VALUES
(183, 101, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(206, 101, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(207, 107, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(209, 129, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(210, 129, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(211, 130, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(212, 130, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(213, 107, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(215, 107, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- 表的结构 `member_group_child`
--

CREATE TABLE `member_group_child` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL COMMENT '// 学生id',
  `member_group_type_id` int(11) NOT NULL COMMENT '// 总成员小组方案管理id',
  `member_group_class_id` int(11) NOT NULL COMMENT '// 类成员小组方案管理id',
  `course_child_id` int(11) NOT NULL COMMENT '// 对应的子课程id',
  `date` varchar(300) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 子成员小组方案管理';

--
-- 转存表中的数据 `member_group_child`
--

INSERT INTO `member_group_child` (`id`, `student_id`, `member_group_type_id`, `member_group_class_id`, `course_child_id`, `date`) VALUES
(122, 110, 59, 78, 35, ''),
(123, 108, 59, 79, 35, '');

-- --------------------------------------------------------

--
-- 表的结构 `member_group_class`
--

CREATE TABLE `member_group_class` (
  `id` int(11) NOT NULL,
  `title` varchar(300) CHARACTER SET utf8 NOT NULL,
  `member_group_type_id` int(11) NOT NULL COMMENT '// 夫成员小组方案管理id',
  `course_child_id` int(11) NOT NULL COMMENT '// 对应的子课程id',
  `date` varchar(300) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 类成员小组方案管理';

--
-- 转存表中的数据 `member_group_class`
--

INSERT INTO `member_group_class` (`id`, `title`, `member_group_type_id`, `course_child_id`, `date`) VALUES
(78, '小组2', 59, 35, ''),
(79, '小组1', 59, 35, '');

-- --------------------------------------------------------

--
-- 表的结构 `member_group_type`
--

CREATE TABLE `member_group_type` (
  `id` int(11) NOT NULL,
  `title` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 标题',
  `course_child_id` int(11) NOT NULL COMMENT '// 对应的子课程id',
  `date` varchar(300) NOT NULL COMMENT '// 创建的时间'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 父成员小组方案管理';

--
-- 转存表中的数据 `member_group_type`
--

INSERT INTO `member_group_type` (`id`, `title`, `course_child_id`, `date`) VALUES
(59, 'dddff', 35, '');

-- --------------------------------------------------------

--
-- 表的结构 `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `title` text CHARACTER SET utf8 NOT NULL COMMENT '// 消息标题',
  `course_child_id` int(4) NOT NULL COMMENT '// 对应的子课程id',
  `date` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 时间'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 消息中心';

--
-- 转存表中的数据 `message`
--

INSERT INTO `message` (`id`, `title`, `course_child_id`, `date`) VALUES
(189, 'gf', 35, '2018-11-20 20:34:07'),
(190, '1', 35, '2018-11-20 20:36:01');

-- --------------------------------------------------------

--
-- 表的结构 `notice`
--

CREATE TABLE `notice` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL COMMENT '// 公告标题',
  `content` text NOT NULL COMMENT '// 公告内容',
  `course_child_id` int(11) NOT NULL COMMENT '// 对应的子课程id',
  `date` date NOT NULL COMMENT '// 发布时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='// 课程公告';

--
-- 转存表中的数据 `notice`
--

INSERT INTO `notice` (`id`, `title`, `content`, `course_child_id`, `date`) VALUES
(1, '公告标题1', '公告内容1', 35, '2018-06-06'),
(2, '公告标题1', '公告内容1', 35, '2018-06-06'),
(3, '公告标题', '公告}}内', 35, '0000-00-00'),
(4, '公告标题', '公告}}内', 35, '0000-00-00'),
(5, '公告标题', '公告内容', 35, '0000-00-00'),
(6, '公告标题', '公告内容', 35, '0000-00-00');

-- --------------------------------------------------------

--
-- 表的结构 `othercourseware`
--

CREATE TABLE `othercourseware` (
  `id` int(11) NOT NULL,
  `name` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 课件名',
  `type` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 类型（图片、网页连接、视频连接）',
  `src` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 连接',
  `date` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 上传的时间',
  `course_child_id` int(11) NOT NULL COMMENT '// 对应的子课程id'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 其他课件';

--
-- 转存表中的数据 `othercourseware`
--

INSERT INTO `othercourseware` (`id`, `name`, `type`, `src`, `date`, `course_child_id`) VALUES
(3, '视频连接1号', 'video', 'public/img/video/movie.mp4', '2018-06-23 22:22:36', 35),
(5, '网页连接2号', 'url', 'www.baidu.com', '2018-06-23 22:22:36', 35),
(6, '视频连接2号', 'video', 'public/img/video/movie.mp4', '2018-06-23 22:22:36', 35),
(15, 'hh', 'image', 'public/img/othercourseware/image/2018-06-22_1529653763238.jpg', '2018-06-23 22:22:36', 35),
(16, '百度一下', 'url', 'www.baidu.com', '2018-06-23 22:22:36', 35),
(17, 'kk', 'url', 'hhh', '2018-06-23 22:22:36', 35),
(21, 'url3号', 'url', 'www.baidu.com', '2018-06-23 22:22:36', 35),
(22, 'url3号', 'url', 'www.baidu.com', '2018-06-23 22:22:36', 35),
(23, 'url3号', 'url', 'www.baidu.com', '2018-06-23 22:22:36', 35),
(25, '旅途', 'image', 'public/img/othercourseware/image/2018-06-24_1529829639588.jpg', '2018-06-24 16:40:39', 35),
(27, '橘子汁仔仔细细一心一', 'url', '', '2018-06-24 16:44:57', 35),
(28, '11', 'url', '好', '2018-06-25 09:38:41', 99),
(29, 'yy', 'image', 'public/img/othercourseware/image/2018-06-25_1529925972580.jpg', '2018-06-25 19:26:12', 35),
(31, 'hh', 'image', 'public/img/othercourseware/image/2018-06-25_1529926081157.jpg', '2018-06-25 19:28:01', 35),
(32, '55', 'image', 'public/img/othercourseware/image/2018-06-25_1529926150162.jpg', '2018-06-25 19:29:10', 35),
(33, 'ttt', 'image', 'public/img/othercourseware/image/2018-06-25_1529930572716.jpg', '2018-06-25 20:42:52', 35),
(34, '视频一号', 'video', 'public/img/othercourseware/image/2018-07-02_1530514169923.mp4', '2018-07-02 14:49:29', 35),
(35, '视频一号', 'video', 'public/img/othercourseware/image/2018-07-02_1530514492904.mp4', '2018-07-02 14:54:52', 35),
(36, '图片3号', 'image', 'public/img/othercourseware/image/2018-07-02_1530514525222.png', '2018-07-02 14:55:25', 35),
(37, '代码', 'image', 'public/img/othercourseware/image/2018-07-03_1530579771707.jpg', '2018-07-03 09:02:51', 100),
(38, '刚刚', 'url', 'www.baidu.com', '2018-07-03 09:03:20', 100),
(39, '听课', 'image', 'public/img/othercourseware/image/2018-07-03_1530624554785.jpg', '2018-07-03 21:29:14', 35),
(40, '视频一号', 'video', 'public/img/othercourseware/image/2018-07-04_1530688475238.mp4', '2018-07-04 15:14:35', 35),
(41, '-ds', 'image', 'public/img/othercourseware/image/2018-11-15_1542289333655.jpg', '2018-11-15 21:42:13', 102),
(42, 'vv', 'url', 'baidu.com', '2018-11-15 21:42:29', 102),
(43, '安吉莉卡', 'image', 'public/img/othercourseware/image/2018-11-19_1542595303850.jpg', '2018-11-19 10:41:43', 103),
(44, '未设置', 'url', 'http://sb.com', '2018-11-19 10:44:12', 103),
(45, '哈哈哈', 'image', 'public/img/othercourseware/image/2018-12-03_1543835676469.jpg', '2018-12-03 19:14:36', 107);

-- --------------------------------------------------------

--
-- 表的结构 `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL COMMENT '// id',
  `username` varchar(200) CHARACTER SET utf8 NOT NULL,
  `name` varchar(300) CHARACTER SET utf8 NOT NULL DEFAULT '未定义' COMMENT '// 名字 =》 可以修改',
  `password` varchar(200) CHARACTER SET utf8 NOT NULL,
  `sex` int(11) NOT NULL DEFAULT '1' COMMENT '// 性别 1男生2女生',
  `school` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 学校',
  `avatar` varchar(300) CHARACTER SET utf8 NOT NULL DEFAULT 'public\\img\\user\\avatar\\default.jpg' COMMENT '// 头像',
  `decide` int(1) NOT NULL DEFAULT '1' COMMENT '// 判断是老师还是学生（1是学生2是老师）',
  `token` text CHARACTER SET utf8 NOT NULL COMMENT '// token加密md5(md5(username+token))',
  `email` varchar(200) CHARACTER SET utf8 NOT NULL,
  `token_email_code` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 找回密码时发送的验证码',
  `created_at` varchar(200) CHARACTER SET utf8 NOT NULL,
  `updated_at` varchar(200) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 学生表';

--
-- 转存表中的数据 `student`
--

INSERT INTO `student` (`id`, `username`, `name`, `password`, `sex`, `school`, `avatar`, `decide`, `token`, `email`, `token_email_code`, `created_at`, `updated_at`) VALUES
(101, 'admin', '测试账号admin', '96bf667672de5e9d44981bba58139bae', 1, '测试账号admin', 'public/img/user/avatar/admin.png', 2, '69cdabdc26f26c86ca2c9d425e33c671', '87788877@qq.com', '', '2018-11-18 09:06:03', '2018-11-28 01:45:57'),
(102, 'test', '测试账号test', '96bf667672de5e9d44981bba58139bae', 1, '测试账号test', 'public\\img\\user\\avatar\\test.png', 1, 'aa1a1bd629401c971771c06015ed9cdb', '空邮箱', '', '2018-11-18 09:06:05', '2018-11-20 01:24:09'),
(107, 'a', 'good', '7fe20e0ab5723a00e4868541e6efdd35', 1, '', 'public/img/user/avatar/a.jpg', 2, '4e1ae175a7cf203ab0041eadc571226f', '963098168@qq.com', '73361', '2018-11-19 00:29:03', '2018-11-22 01:49:54'),
(108, 'Jason', 'XP', '96bf667672de5e9d44981bba58139bae', 1, '', 'public/img/user/avatar/Jason.png', 2, '1e786fdd5f6326fb3799b5502b25f8d8', 'linnoalan@gmail.com', '', '2018-11-19 00:57:46', '2018-11-19 02:37:26'),
(109, 'Jason2', '高飞老师', '96bf667672de5e9d44981bba58139bae', 1, '', 'public/img/user/avatar/Jason2.jpg', 1, 'e882f42844e478684a812138abc02274', 'linnoalan@gmail.co', '', '2018-11-19 02:52:38', '2018-11-19 02:54:44'),
(128, 'student', 'student', '30fe2f460e3f50be5c644570c302ccbc2932496d9c2ce2603cf19582c4058916', 1, 'student', 'public\\img\\user\\avatar\\default.jpg', 1, 'b2b54b29babbaa1c4507749e8df9a654', 'student', '', '2018-11-23 01:36:05', '2018-11-23 01:36:05'),
(129, 'b', '未定义', 'bc1b948ee420e755558f5beedbd62086', 1, '', 'public\\img\\user\\avatar\\default.jpg', 1, '1a468fb9131005d90fd68f6d73f0a930', '963098168@qq.com', '', '2018-11-28 07:26:20', '2018-11-28 07:26:53'),
(130, 'c', '阿达', 'f4ffa3190ea253f3f1e6d1d479cd72d1', 2, '', 'public/img/user/avatar/c.JPG', 2, '81a5f8433d65fd38b2f128244e062fec', 'hhhh@cc.c', '', '2018-12-03 02:17:22', '2018-12-04 02:14:07');

-- --------------------------------------------------------

--
-- 表的结构 `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL COMMENT '// 任务id',
  `title` varchar(300) NOT NULL COMMENT '// 任务标题',
  `description` text NOT NULL COMMENT '// 任务详情',
  `status` varchar(300) NOT NULL DEFAULT 'wait' COMMENT '//班课状态（wait => 未开始conduct=》进行中  end=》已结束）',
  `fraction` int(11) NOT NULL COMMENT '// 任务分数',
  `course_child_id` tinyint(11) NOT NULL COMMENT '// 任务对应子课程的id',
  `member_group_type_id` int(11) NOT NULL DEFAULT '0' COMMENT '// 对应的父成员小组方案管理id',
  `date` varchar(300) NOT NULL COMMENT '// 任务发布时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='小组任务';

--
-- 转存表中的数据 `task`
--

INSERT INTO `task` (`id`, `title`, `description`, `status`, `fraction`, `course_child_id`, `member_group_type_id`, `date`) VALUES
(1, '任务title23s1', '任务description3', 'conduct', 100, 35, 27, '2018-07-08 14:19:00'),
(2, '任务title23s11', '任务description3', 'wait', 100, 35, 0, '2018-07-08 14:19:36'),
(3, '任务title23s111', '任务description3', 'wait', 100, 35, 24, '2018-07-08 15:05:41'),
(4, '任务title23s1111', '任务description3', 'conduct', 100, 35, 25, '2018-07-08 20:10:32'),
(5, '任务title23s1', '任务description3', 'wait', 100, 35, 27, ''),
(41, '任务title23s1', '任务description3', 'wait', 100, 35, 27, '2018-07-08 14:19:00'),
(42, '任务title23s1', '任务description3', 'wait', 100, 35, 27, '2018-07-08 14:19:00');

-- --------------------------------------------------------

--
-- 表的结构 `task_comment`
--

CREATE TABLE `task_comment` (
  `id` int(11) NOT NULL,
  `comment_content` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 任务学生评论内容',
  `student_token` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 对应的学生token',
  `task_id` int(11) NOT NULL COMMENT '// 对应的蓝墨云指定任务id',
  `date` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 任务学生评论时间'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 任务学生评论';

--
-- 转存表中的数据 `task_comment`
--

INSERT INTO `task_comment` (`id`, `comment_content`, `student_token`, `task_id`, `date`) VALUES
(8, '评论内容', '44c5ce984b55ef8f21a219d3adaddda1', 1, '2018-07-08 14:26:26');

-- --------------------------------------------------------

--
-- 表的结构 `teacher`
--

CREATE TABLE `teacher` (
  `id` tinyint(4) NOT NULL,
  `name` varchar(300) NOT NULL COMMENT '// 姓名',
  `username` varchar(300) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `avatar` varchar(300) DEFAULT '1.jpg' COMMENT '//头像',
  `token` varchar(255) DEFAULT NULL COMMENT '//验证',
  `school` varchar(200) DEFAULT NULL COMMENT '//所属大学',
  `education` varchar(200) DEFAULT NULL COMMENT '//学历',
  `created_at` varchar(255) DEFAULT NULL COMMENT '// 创建时间',
  `updated_at` varchar(255) DEFAULT NULL COMMENT '// 更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='// 教师表';

--
-- 转存表中的数据 `teacher`
--

INSERT INTO `teacher` (`id`, `name`, `username`, `password`, `email`, `avatar`, `token`, `school`, `education`, `created_at`, `updated_at`) VALUES
(1, '', 'lin', 'lin', 'lin@qqc.om', 'public/img/user/avatar/default/teacher_default.png', '87830d74c0e8a30ca2bb7fd92229aa3b', 'lin大学', '博士', '2015-10-10', '2015-10-10'),
(2, '', 'li', 'li', 'li@qq.com', 'public/img/user/avatar/default/teacher_default.png', 'lin2token', 'lin大学', '博士', '2015-10-10', '2015-10-10'),
(3, 'wudada', 'a', '86f7e437faa5a7fce15d1ddcb9eaeaea377667b8', 'a@qq.com', 'public/img/user/avatar/a.jpg', '87830d74c0e8a30ca2bb7fd92229aa3b', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `vote`
--

CREATE TABLE `vote` (
  `id` int(11) NOT NULL,
  `title` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 投票标题',
  `description` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 投票详情',
  `status` varchar(300) CHARACTER SET utf8 NOT NULL DEFAULT 'wait' COMMENT '//投票状态（wait =&gt; 未开始conduct=》进行中 end=》已结束',
  `fraction` int(11) NOT NULL COMMENT '// 投票分数',
  `course_child_id` int(11) NOT NULL COMMENT '// 对应课程的id',
  `date` varchar(300) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 蓝墨云投票';

--
-- 转存表中的数据 `vote`
--

INSERT INTO `vote` (`id`, `title`, `description`, `status`, `fraction`, `course_child_id`, `date`) VALUES
(371, '来来来', '1', 'conduct', 1, 35, '2018-12-03 09:10:56'),
(372, '我', '1', 'end', 5, 107, '2018-12-03 19:19:38');

-- --------------------------------------------------------

--
-- 表的结构 `vote_child`
--

CREATE TABLE `vote_child` (
  `id` int(11) NOT NULL,
  `content` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 选择内容',
  `sequence` varchar(300) NOT NULL COMMENT '// 选择序号',
  `vote_class_id` int(11) NOT NULL COMMENT '// 对应的类选项卡id',
  `vote_id` int(11) NOT NULL COMMENT '// 对应的选项id',
  `course_child_id` int(11) NOT NULL COMMENT '// 对应的子课程id'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 蓝墨云投票子选项 =》 选项卡';

--
-- 转存表中的数据 `vote_child`
--

INSERT INTO `vote_child` (`id`, `content`, `sequence`, `vote_class_id`, `vote_id`, `course_child_id`) VALUES
(624, '好', 'A', 400, 371, 35),
(625, '还行', 'D', 400, 371, 35),
(626, '点点滴滴', 'A', 401, 372, 107),
(627, '得到的', 'D', 401, 372, 107),
(628, '放放风', 'A', 402, 372, 107),
(629, '在政治', 'B', 402, 372, 107),
(630, '把', 'A', 403, 373, 35),
(631, '卡', 'B', 403, 373, 35);

-- --------------------------------------------------------

--
-- 表的结构 `vote_class`
--

CREATE TABLE `vote_class` (
  `id` int(11) NOT NULL,
  `title` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '// 选项标题',
  `select` int(11) NOT NULL DEFAULT '0' COMMENT '// 0单选或1多选',
  `sequence` int(11) NOT NULL COMMENT '// 选项序号',
  `vote_id` int(11) NOT NULL COMMENT '// 投票父id',
  `course_child_id` int(11) NOT NULL COMMENT '// 对应的子课程id'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='// 蓝墨云投票类选项';

--
-- 转存表中的数据 `vote_class`
--

INSERT INTO `vote_class` (`id`, `title`, `select`, `sequence`, `vote_id`, `course_child_id`) VALUES
(400, '你好', 0, 1, 371, 35),
(401, '你好', 0, 1, 372, 107),
(402, '我d j d j s', 0, 2, 372, 107),
(403, '刚刚', 0, 1, 373, 35);

-- --------------------------------------------------------

--
-- 表的结构 `vote_class_selected`
--

CREATE TABLE `vote_class_selected` (
  `id` int(11) NOT NULL,
  `select` int(11) NOT NULL DEFAULT '0' COMMENT '// 0单选1多选',
  `vote_class_id` int(11) NOT NULL,
  `vote_id` int(11) NOT NULL COMMENT '总投票id',
  `student_token` varchar(300) NOT NULL,
  `selected_arr` varchar(300) NOT NULL DEFAULT '[]',
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `vote_class_selected`
--

INSERT INTO `vote_class_selected` (`id`, `select`, `vote_class_id`, `vote_id`, `student_token`, `selected_arr`, `date`) VALUES
(113, 0, 400, 371, '1a468fb9131005d90fd68f6d73f0a930', '[624]', '2018-12-03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brainstorming`
--
ALTER TABLE `brainstorming`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `brainstorming_comment`
--
ALTER TABLE `brainstorming_comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_course_course_class1_idx` (`course_class_id`),
  ADD KEY `fk_course_teacher1_idx` (`teacher_id`(767));

--
-- Indexes for table `courseware`
--
ALTER TABLE `courseware`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courseware_child`
--
ALTER TABLE `courseware_child`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courseware_class`
--
ALTER TABLE `courseware_class`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course_class`
--
ALTER TABLE `course_class`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_course_class_course_type1_idx` (`course_type_id`);

--
-- Indexes for table `course_type`
--
ALTER TABLE `course_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `discuss`
--
ALTER TABLE `discuss`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `discuss_comment`
--
ALTER TABLE `discuss_comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `havelearned`
--
ALTER TABLE `havelearned`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member_group_child`
--
ALTER TABLE `member_group_child`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member_group_class`
--
ALTER TABLE `member_group_class`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member_group_type`
--
ALTER TABLE `member_group_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notice`
--
ALTER TABLE `notice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `othercourseware`
--
ALTER TABLE `othercourseware`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task_comment`
--
ALTER TABLE `task_comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vote`
--
ALTER TABLE `vote`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vote_child`
--
ALTER TABLE `vote_child`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vote_class`
--
ALTER TABLE `vote_class`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vote_class_selected`
--
ALTER TABLE `vote_class_selected`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `brainstorming`
--
ALTER TABLE `brainstorming`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- 使用表AUTO_INCREMENT `brainstorming_comment`
--
ALTER TABLE `brainstorming_comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- 使用表AUTO_INCREMENT `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- 使用表AUTO_INCREMENT `course`
--
ALTER TABLE `course`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- 使用表AUTO_INCREMENT `courseware`
--
ALTER TABLE `courseware`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=242;

--
-- 使用表AUTO_INCREMENT `courseware_child`
--
ALTER TABLE `courseware_child`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- 使用表AUTO_INCREMENT `courseware_class`
--
ALTER TABLE `courseware_class`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=154;

--
-- 使用表AUTO_INCREMENT `course_class`
--
ALTER TABLE `course_class`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- 使用表AUTO_INCREMENT `course_type`
--
ALTER TABLE `course_type`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用表AUTO_INCREMENT `discuss`
--
ALTER TABLE `discuss`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- 使用表AUTO_INCREMENT `discuss_comment`
--
ALTER TABLE `discuss_comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 使用表AUTO_INCREMENT `havelearned`
--
ALTER TABLE `havelearned`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=216;

--
-- 使用表AUTO_INCREMENT `member_group_child`
--
ALTER TABLE `member_group_child`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- 使用表AUTO_INCREMENT `member_group_class`
--
ALTER TABLE `member_group_class`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- 使用表AUTO_INCREMENT `member_group_type`
--
ALTER TABLE `member_group_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- 使用表AUTO_INCREMENT `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=191;

--
-- 使用表AUTO_INCREMENT `notice`
--
ALTER TABLE `notice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用表AUTO_INCREMENT `othercourseware`
--
ALTER TABLE `othercourseware`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- 使用表AUTO_INCREMENT `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '// id', AUTO_INCREMENT=131;

--
-- 使用表AUTO_INCREMENT `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '// 任务id', AUTO_INCREMENT=43;

--
-- 使用表AUTO_INCREMENT `task_comment`
--
ALTER TABLE `task_comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用表AUTO_INCREMENT `vote`
--
ALTER TABLE `vote`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=374;

--
-- 使用表AUTO_INCREMENT `vote_child`
--
ALTER TABLE `vote_child`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=632;

--
-- 使用表AUTO_INCREMENT `vote_class`
--
ALTER TABLE `vote_class`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=404;

--
-- 使用表AUTO_INCREMENT `vote_class_selected`
--
ALTER TABLE `vote_class_selected`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- 限制导出的表
--

--
-- 限制表 `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `fk_course_course_class1` FOREIGN KEY (`course_class_id`) REFERENCES `course_class` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- 限制表 `course_class`
--
ALTER TABLE `course_class`
  ADD CONSTRAINT `fk_course_class_course_type1` FOREIGN KEY (`course_type_id`) REFERENCES `course_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
