-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-12-16 14:24:35
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
-- Database: `cauth`
--
CREATE DATABASE IF NOT EXISTS `cauth` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `cauth`;

-- --------------------------------------------------------

--
-- 表的结构 `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `isbn` varchar(20) NOT NULL,
  `openid` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `alt` varchar(100) NOT NULL,
  `publisher` varchar(100) NOT NULL,
  `summary` varchar(1000) NOT NULL,
  `price` varchar(100) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `tags` varchar(100) DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `books`
--

INSERT INTO `books` (`id`, `isbn`, `openid`, `title`, `image`, `alt`, `publisher`, `summary`, `price`, `rate`, `tags`, `author`) VALUES
(35, '9787115351531', 'oqTbb4gfZ9l1Ebmtu016BGgZo8H0', '图解HTTP', 'https://img3.doubanio.com/view/subject/m/public/s27283822.jpg', 'https://book.douban.com/subject/25863515/', '人民邮电出版社', '本书对互联网基盘——HTTP协议进行了全面系统的介绍。作者由HTTP协议的发展历史娓娓道来，严谨细致地剖析了HTTP协议的结构，列举诸多常见通信场景及实战案例，最后延伸到Web安全、最新技术动向等方面。本书的特色为在讲解的同时，辅以大量生动形象的通信图例，更好地帮助读者深刻理解HTTP通信过程中客户端与服务器之间的交互情况。读者可通过本书快速了解并掌握HTTP协议的基础，前端工程师分析抓包数据，后端工程师实现REST API、实现自己的HTTP服务器等过程中所需的HTTP相关知识点本书均有介绍。\n本书适合Web开发工程师，以及对HTTP协议感兴趣的各层次读者。', '49.00元', 8.1, 'HTTP 1164,网络 550,计算机 497,协议 337,互联网 303,Web 204,web 201,网络编程 168', '【日】上野宣'),
(36, '9787115293800', 'oqTbb4gfZ9l1Ebmtu016BGgZo8H0', '算法（第4版）', 'https://img3.doubanio.com/view/subject/m/public/s28322244.jpg', 'https://book.douban.com/subject/19952400/', '人民邮电出版社', '本书全面讲述算法和数据结构的必备知识，具有以下几大特色。\n     算法领域的经典参考书\nSedgewick畅销著作的最新版，反映了经过几十年演化而成的算法核心知识体系\n 内容全面\n全面论述排序、搜索、图处理和字符串处理的算法和数据结构，涵盖每位程序员应知应会的50种算法\n 全新修订的代码\n全新的Java实现代码，采用模块化的编程风格，所有代码均可供读者使用\n 与实际应用相结合\n在重要的科学、工程和商业应用环境下探讨算法，给出了算法的实际代码，而非同类著作常用的伪代码\n 富于智力趣味性\n简明扼要的内容，用丰富的视觉元素展示的示例，精心设计的代码，详尽的历史和科学背景知识，各种难度的练习，这一切都将使读者手不释卷\n       科学的方法\n用合适的数学模型精确地讨论算法性能，这些模型是在真实环境中得到验证的\n 与网络相结合\n配套网站algs4.cs.princeton.edu提供了本书内容的摘要及相关的代码、测试数据、编程练习、教学课件等资源', '99.00元', 9.4, '算法 2009,计算机 825,编程 709,计算机科学 406,Algorithms 393,计算机-算法 380,经典 256,Java 246', '塞奇威克 (Robert Sedgewick),韦恩 (Kevin Wayne)'),
(37, '9787115282828', 'oqTbb4gfZ9l1Ebmtu016BGgZo8H0', '数学之美', 'https://img3.doubanio.com/view/subject/m/public/s9114855.jpg', 'https://book.douban.com/subject/10750155/', '人民邮电出版社', '几年前，“数学之美”系列文章原刊载于谷歌黑板报，获得上百万次点击，得到读者高度评价。读者说，读了“数学之美”，才发现大学时学的数学知识，比如马尔可夫链、矩阵计算，甚至余弦函数原来都如此亲切，并且栩栩如生，才发现自然语言和信息处理这么有趣。\n今年，作者吴军博士几乎把所有文章都重写了一遍，为的是把高深的数学原理讲得更加通俗易懂，让非专业读者也能领略数学的魅力。读者通过具体的例子学到的是思考问题的方式 —— 如何化繁为简，如何用数学去解决工程问题，如何跳出固有思维不断去思考创新。', '45.00元', 8.7, '数学 11521,计算机 4857,科普 3987,吴军 3020,计算机科学 2164,互联网 1932,科学 1293,Programming 750', '吴军'),
(38, '9787229030933', 'oqTbb4gfZ9l1Ebmtu016BGgZo8H0', '三体Ⅲ', 'https://img3.doubanio.com/view/subject/m/public/s26012674.jpg', 'https://book.douban.com/subject/5363767/', '重庆出版社', '与三体文明的战争使人类第一次看到了宇宙黑暗的真相，地球文明像一个恐惧的孩子，熄灭了寻友的篝火，在暗夜中发抖。自以为历经沧桑，其实刚刚蹒跚学步；自以为悟出了生存竞争的秘密，其实还远没有竞争的资格。\n使两个文明命悬一线的黑暗森林打击，不过是宇宙战场上一个微不足道的插曲。真正的星际战争没人见过，也不可能见到，因为战争的方式和武器已经远远超出人类的想象，目睹战场之日，即是灭亡之时。\n宇宙的田园时代已经远去，昙花一现的终极之美最终变成任何智慧体都无法做出的梦，变成游吟诗人缥缈的残歌；宇宙的物竞天择已到了最惨烈的时刻，在亿万光年暗无天日的战场上，深渊最底层的毁灭力量被唤醒，太空变成了死神广阔的披风。\n太阳系中的人们永远不会知道这一切，最后直面真相的，只有两双眼睛。', '38.00元', 9.2, '科幻 24820,刘慈欣 21951,三体 14314,小说 8658,中国科幻 8293,科幻小说 7612,中国 6574,硬科幻 6441', '刘慈欣'),
(39, '9787536693968', 'oqTbb4gfZ9l1Ebmtu016BGgZo8H0', '三体Ⅱ', 'https://img3.doubanio.com/view/subject/m/public/s3078482.jpg', 'https://book.douban.com/subject/3066477/', '重庆出版社', '三体人在利用魔法般的科技锁死了地球人的科学之后，庞大的宇宙舰队杀气腾腾地直扑太阳系，意欲清除地球文明。\n面对前所未有的危局，经历过无数磨难的地球人组建起同样庞大的太空舰队，同时，利用三体人思维透明的致命缺陷，制订了神秘莫测的“面壁计划”，精选出四位“面壁者”。秘密展开对三体人的反击。\n三体人自身虽然无法识破人类的诡谲计谋，却依靠由地球人中的背叛者挑选出的“破壁人”，与“面壁者”展开智慧博弈……\n“面壁计划”究竟能否成功？地球人究竟能否在这场你死我活的文明生存竞争中战而胜之？神秘的\n“黑暗森林”究竟意味着什么？', '32.00', 9.3, '科幻 24044,刘慈欣 20745,三体 12572,小说 8352,科幻小说 8014,中国 7135,黑暗森林 6368,中国科幻 5230', '刘慈欣'),
(40, '9787115275790', 'oqTbb4gfZ9l1Ebmtu016BGgZo8H0', 'JavaScript高级程序设计（第3版）', 'https://img3.doubanio.com/view/subject/m/public/s8958650.jpg', 'https://book.douban.com/subject/10546125/', '人民邮电出版社', '本书是JavaScript 超级畅销书的最新版。ECMAScript 5 和HTML5 在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript 增添了很多适应未来发展的新特性。本书这一版除增加5 章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript 语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax 与Comet 服务器端通信，HTML5 表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的最佳开发实践。本书附录展望了未来的API 和ECMAScript Harmony 规范。\n本书适合有一定编程经验的Web 应用开发人员阅读，也可作为高校及社会实用技术培训相关专业课程的教材。', '99.00元', 9.3, 'JavaScript 2211,Web前端开发 1012,前端开发 624,前端 474,javascript 472,编程 425,Web开发 380,计算机 376', '[美] Nicholas C. Zakas'),
(41, '9787508051000', 'oqTbb4gfZ9l1Ebmtu016BGgZo8H0', '非暴力沟通', 'https://img1.doubanio.com/view/subject/m/public/s9346487.jpg', 'https://book.douban.com/subject/3533221/', '华夏出版社', '作为一个遵纪守法的好人，也许我们从来没有想过和“暴力”扯上关系。不过如果稍微留意一下现实生活中的谈话方式，并且用心体会各种谈话方式给我们的不同感受，我们一定会发现，有些话的确伤人！言语上的职责、嘲讽、否定、说教以及任意打断、拒不回应、随意出口的评价和结论给我们带来的情感和精神上的创伤，甚至比肉体的伤害更加令人痛苦。这些无心或有意的语言暴力让人与人变得冷漠、隔阂、敌视', '29.00元', 8.5, '心理学 5554,沟通 5034,人际沟通 3713,非暴力沟通 3104,心理 2233,沟通术 1736,人际关系 1520,情感 1461', '[美] 马歇尔·卢森堡'),
(42, '9787121331565', 'oqTbb4gfZ9l1Ebmtu016BGgZo8H0', 'Vue移动开发实战技巧', 'https://img3.doubanio.com/view/subject/m/public/s29662615.jpg', 'https://book.douban.com/subject/27662351/', '电子工业出版社', '内容简介\nVue.js是一个渐进式的JavaScript 框架，与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。作为2016年社区最火的前端框架，越来越多的公司都在尝试用Vue来开发自己的项目。本书主要以项目维度，站在实战的角度，从项目的搭建，项目开发，到项目的优化，结合实际，多维度介绍了Vue.js。本书从实战场景出发，结合各种实用demo，结合开发环境构建，从无到有，剖析原理，全面介绍Vue2.0的实用技巧。后面几章重点讲解Vue内部实现机制，针对各种业务形态的支持以及网站调优方等等，是Vue技术体系追随者不可多得的实战宝典。', '58', 0, 'Vue 8,前端 6,开发 4,移动 3,软件开发 1,互联网 1,vue.js 1,Vue.js 1', '李利德'),
(43, '9787115437303', 'oqTbb4gfZ9l1Ebmtu016BGgZo8H0', '深入React技术栈', 'https://img3.doubanio.com/view/subject/m/public/s29162154.jpg', 'https://book.douban.com/subject/26918038/', '人民邮电出版社', '全面讲述React技术栈的第一本原创图书，pure render专栏主创倾力打造\n覆盖React、Flux、Redux及可视化，帮助开发者在实践中深入理解技术和源码\n前端组件化主流解决方案，一本书玩转React“全家桶”\n本书讲解了非常多的内容，不仅介绍了面向普通用户的API、应用架构和周边工具，还深入介绍了底层实现。此外，本书非常重视实战，每一节都有实际的例子，细节丰富。我从这本书里学到了很多东西，强烈推荐！\n——阮一峰，蚂蚁金服技术专家，国内技术圈知名博主，《ES 6标准入门（第2版）》作者\nReact从诞生起就颠覆了诸多传统前端开发的“铁律”，这种破旧立新开启了前端开发全新的时代。它的用法和理念，代表了现在和未来几年前端技术的潮流风向。如果不想落伍，最好进行系统学习。实践出真知，从牛人的实践中收获自己的真知，恐怕是最好的捷径。这是我看到的第一本React中文原创著作，读来倍感亲切。\n——张克军，豆瓣前端专家，国内技术圈知名博主，前端布道师\n本书内容翔实，一扫“文档说明书”之风，有大量作者的实战经验。由浅入深，无论你是 React 初学者，还是进阶人士，本书都值得一读！\n——寸志，陆金所前端架构师，《前端外刊评论》发起人\n本书从几个维度去介绍 React。一是作为 View 库，它怎么实现组件化，以及它背后的实现原理。二是扩展到 Flux 应用架构及重要的衍生品 Redux，它们怎么与 React 结合做应用开发。三是对 React 与 server 的碰撞产生的一些思考。四是讲述它在可视化方面的优势与劣势。\n本书适合有一定经验的前端开发人员阅读。\n陈屹\n前端架构师，就职于阿里巴巴。热衷开源事业，长年专注于前端架构、数据可视化、Node.js等领域，知乎专栏pure render的创办人。', 'CNY 79.00', 8.3, 'React 135,Web前端 67,JavaScript 58,前端 31,前端开发 26,Web开发 21,编程 19,技术 17', '陈屹'),
(44, '9787010009247', 'oqTbb4gfZ9l1Ebmtu016BGgZo8H0', '毛泽东选集 第三卷', 'https://img1.doubanio.com/view/subject/m/public/s1815767.jpg', 'https://book.douban.com/subject/1077621/', '人民出版社', '《毛泽东选集(第3卷)》包括了毛泽东同志在中国革命各个时期中的重要著作。几年前各地方曾经出过几种不同版本的《毛泽东选集》，都是没有经过著者审查的，体例颇为杂乱，文字亦有错讹，有些重要的著作又没有收进去。现在的这部选集，是按照中国共产党成立后所经历的各个历史时期并且按照著作年月次序而编辑的。这部选集尽可能地搜集了一些为各地方过去印行的集子还没有包括在内的重要著作。选集中的各篇著人，都经著者校阅过，其中有些地方著者曾作了一些文字上的修正，也有个别的文章曾作了一些内容上的补充和修改。 \n下面有几点属于出版事务的声明：\n第一，现在出版的这个选集，还是不很完备的。由于国民党反动派对于革命文献的毁灭，由于在长期战争中革命文献的散失，我们现在还不能够找到毛泽东同志的全部著作，特别是毛泽东同志所写的许多书信和电报（这些在毛泽东同志著作中占很大的部分）。\n第二，有些曾经流行的著作，例如《农村调查》，遵照著者的意见，没有编入；又如《经济问题与财政问题》，也遵照著者的意见，只编进了其中的第一章（即《关于过去工作的基本总结》）。\n第三，选集中作了一些注释。其中一部分是属于题解的，附在各篇第一页的下面；其他部分，有属于政治性质的，有属于技术性质的，都附在文章的末尾。\n第四，本选集有两种装订的本子。一种是各时期的著作合订的一卷本，另一种是四卷本。四卷本的第一卷包括第一次国内革命战争时期和第二次国内革命战争时期的著作；第二卷和第三卷包括抗日战争时期的著作；第四卷包括第三次国内革命战争时期的著作。', '18.00元', 8.9, '毛泽东 302,政治 171,哲学 125,毛泽东选集 113,历史 78,中国 65,革命 63,马克思主义 61', '毛泽东'),
(45, '9787115352460', 'oqTbb4gfZ9l1Ebmtu016BGgZo8H0', 'Node.js实战', 'https://img3.doubanio.com/view/subject/m/public/s27264241.jpg', 'https://book.douban.com/subject/25870705/', '人民邮电出版社', '服务器端JavaScript？没错。Node.js是一个JavaScript服务器，支持可伸缩的高性能Web应用。借助异步I/O，这个服务器可以同时做很多事情，能满足聊天、游戏和实时统计等应用的需求。并且既然是JavaScript，那你就可以全栈使用一种语言。\n本书向读者展示了如何构建产品级应用，对关键概念的介绍清晰明了，贴近实际的例子，涵盖从安装到部署的各个环节，是一部讲解与实践并重的优秀著作。通过学习本书，读者将深入异步编程、数据存储、输出模板、读写文件系统，掌握创建TCP/IP服务器和命令行工具等非HTTP程序的技术。本书同样非常适合熟悉Rails、Django或PHP开发的读者阅读学习。\n本书主要内容：\nNode.js及其扩展的安装配置；\n全面理解异步编程和事件循环；\n学会开发微博、聊天和游戏等热门应用。', '69.00元', 8.2, 'Node.js 125,JavaScript 65,nodejs 48,node.js 40,web开发 39,前端开发 32,编程 30,node 21', ''),
(46, '9787010009230', 'oqTbb4gfZ9l1Ebmtu016BGgZo8H0', '毛泽东选集 第二卷', 'https://img1.doubanio.com/view/subject/m/public/s23005817.jpg', 'https://book.douban.com/subject/1125026/', '人民出版社', '这部选集，包括了毛泽东同志在中国革命各个时期中的重要著作。几年前各地方曾经出过几种不同版本的《毛泽东选集》，都是没有经过著者审查的，体例颇为杂乱，文字亦有错讹，有些重要的著作又没有收进去。现在的这部选集，是按照中国共产党成立后所经历的各个历史时期并且按照著作年月次序而编辑的。这部选集尽可能地搜集了一些为各地方过去印行的集子还没有包括在内的重要著作。选集中的各篇著人，都经著者校阅过，其中有些地方著者曾作了一些文字上的修正，也有个别的文章曾作了一些内容上的补充和修改。', '23.00元', 9.1, '毛泽东 353,政治 208,毛泽东选集 207,哲学 158,革命 94,马克思主义 82,历史 81,政经战略 74', '毛泽东');

-- --------------------------------------------------------

--
-- 表的结构 `csessioninfo`
--

CREATE TABLE `csessioninfo` (
  `open_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uuid` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `skey` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_visit_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `session_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_info` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='会话管理用户信息';

--
-- 转存表中的数据 `csessioninfo`
--

INSERT INTO `csessioninfo` (`open_id`, `uuid`, `skey`, `create_time`, `last_visit_time`, `session_key`, `user_info`) VALUES
('oqTbb4gfZ9l1Ebmtu016BGgZo8H0', '60c976ba-1508-4800-b742-b4f91b7e1da9', '8f2cbefc2dd31724b14dc8d62d1a700ba80a667f', '2018-10-16 02:18:11', '2018-10-20 12:03:06', 'knQhy3zdtkuCJP7oZOXVcw==', '{\"openId\":\"oqTbb4gfZ9l1Ebmtu016BGgZo8H0\",\"nickName\":\"iFdou๑\",\"gender\":1,\"language\":\"zh_CN\",\"city\":\"Jieyang\",\"province\":\"Guangdong\",\"country\":\"China\",\"avatarUrl\":\"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ1wvVIflib4Bfcw1MpNibc2CheECs7nVnSWNicuLcrne2nW6TUoicfXnUNTt5ykdd7DkM0D5no7OibEYA/132\",\"watermark\":{\"timestamp\":1540036986,\"appid\":\"wxfcaf5ee004e79ae1\"}}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `csessioninfo`
--
ALTER TABLE `csessioninfo`
  ADD PRIMARY KEY (`open_id`),
  ADD KEY `openid` (`open_id`) USING BTREE,
  ADD KEY `skey` (`skey`) USING BTREE;

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
--
-- Database: `egg`
--
CREATE DATABASE IF NOT EXISTS `egg` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `egg`;

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
(44, '把北京路', '1a468fb9131005d90fd68f6d73f0a930', '42', '2018-12-05 10:13:00'),
(45, 'ff', '7e741884359c21f89d84323c1ab5d102', '42', '2018-12-10 10:16:28');

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
(35, '程序设计基础CAP35', 'public/img/avatar/2018-11-28_1543370451346.jpg', 'yyyy', 'conduct', 2, 'linlin', 'lin', '阿克苏学校', '', 42, 1, 'public/img/popular_banner/default.png', 1, 1, 1, '[101,107]'),
(37, '大学计算机37', 'public/img/avatar/2018-12-16_1544961310424.jpg', 'description', 'wait', 1, 'linlin', 'lin', '社会大学', '', 9, 2, 'public/img/popular_banner/1.png', 1, 1, 1, '[101,102,107]'),
(38, 'VisualBasic6.0P38', 'public/img/avatar/2018-12-16_1544949787673.png', '2222道法自然---借鉴自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制', 'wait', 1, '学习要求', '考试安排', '社会大学', '', 8, 2, 'public/img/popular_banner/2.png', 1, 1, 1, '[101,102,107]'),
(39, '大学计算机基础CAP39', 'public/img/avatar/2018-12-16_1544960140437.jpg', '22222道法自然---借鉴自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制自然界信息处理机制', 'wait', 1, '学习要求', '考试安排', '社会大学', '', 5, 2, 'public/img/popular_banner/3.png', 1, 2, 1, '[101,102,107]'),
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
(107, '大的', 'public/img/avatar/2018-12-03_1543826429734.jpg', '未设置', 'wait', 1, '未设置', '未设置', '未设置', '', 3, 1, 'public/img/popular_banner/default.png', 1, 8, 2, '[101,102]'),
(108, '测试班课', 'public/img/avatar/2018-12-09_1544336818336.jpg', '你好', 'wait', 1, '无', '无', '阿勒泰学校', '', 0, 1, 'public/img/popular_banner/default.png', 1, 1, 1, '[131]');

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
(32, 'fft', 'yy', 'conduct', 1, '2018-12-05 02:29:51', 35),
(33, 'tt', 'yyt', 'conduct', 1, '2018-12-10 10:45:23', 35);

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
(15, '[{\"student_id\":\"129\",\"content\":\"55\",\"time\":\"2018-12-05 10:31:07\"},{\"student_id\":\"129\",\"content\":\"tt\",\"time\":\"2018-12-10 11:17:59\"},{\"student_id\":\"129\",\"content\":\"uhy\",\"time\":\"2018-12-10 16:03:31\"},{\"student_id\":\"129\",\"content\":\"11号\",\"time\":\"2018-12-10 16:20:31\"},{\"student_id\":\"129\",\"content\":\"11\",\"time\":\"2018-12-10 16:21:01\"},{\"student_id\":\"129\",\"content\":\"图\",\"time\":\"2018-12-10 16:21:16\"},{\"student_id\":\"129\",\"content\":\"图\",\"time\":\"2018-12-10 16:21:19\"},{\"student_id\":\"129\",\"content\":\"看看\",\"time\":\"2018-12-10 16:21:50\"},{\"student_id\":\"131\",\"content\":\"11\",\"time\":\"2018-12-10 16:22:17\"},{\"student_id\":\"131\",\"content\":\"刚刚\",\"time\":\"2018-12-10 18:44:46\"}]', 32, ''),
(16, '[{\"student_id\":\"129\",\"content\":\"tt\",\"time\":\"2018-12-10 18:45:43\"},{\"student_id\":\"129\",\"content\":\"4ruh2\",\"time\":\"2018-12-10 18:46:14\"},{\"student_id\":\"129\",\"content\":\"xd\",\"time\":\"2018-12-10 18:46:39\"},{\"student_id\":\"129\",\"content\":\"rr\",\"time\":\"2018-12-10 18:48:15\"},{\"student_id\":\"129\",\"content\":\"日\",\"time\":\"2018-12-10 18:50:20\"},{\"student_id\":\"129\",\"content\":\"14\",\"time\":\"2018-12-10 18:50:25\"},{\"student_id\":\"129\",\"content\":\"1\",\"time\":\"2018-12-10 18:51:09\"},{\"student_id\":\"129\",\"content\":\"刚刚\",\"time\":\"2018-12-10 18:53:30\"},{\"student_id\":\"129\",\"content\":\"刚刚\",\"time\":\"2018-12-10 18:54:08\"},{\"student_id\":\"129\",\"content\":\"把\",\"time\":\"2018-12-10 18:54:33\"},{\"student_id\":\"129\",\"content\":\"看看\",\"time\":\"2018-12-10 18:55:15\"},{\"student_id\":\"131\",\"content\":\"r\",\"time\":\"2018-12-11 08:49:04\"},{\"student_id\":\"131\",\"content\":\"xx\",\"time\":\"2018-12-11 08:49:15\"},{\"student_id\":\"131\",\"content\":\"dfd\",\"time\":\"2018-12-11 08:49:21\"}]', 33, '');

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
(183, 101, 35, 40, 0, 0, 140, 0, 4, 0, 331, 0, 4, 0, 0),
(206, 101, 105, 40, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0),
(207, 107, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(209, 129, 58, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0),
(210, 129, 35, 0, 0, 0, 222, 0, 0, 0, 0, 0, 0, 0, 0),
(211, 130, 35, 0, 0, 0, 666, 0, 0, 0, 0, 0, 0, 0, 0),
(212, 130, 107, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0),
(213, 107, 104, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0),
(215, 107, 107, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0),
(217, 131, 35, 100, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0);

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
(125, 131, 60, 82, 35, ''),
(126, 130, 60, 81, 35, ''),
(127, 130, 61, 83, 35, ''),
(128, 129, 61, 83, 35, ''),
(129, 131, 61, 84, 35, ''),
(133, 131, 60, 82, 35, '');

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
(80, '小组1', 60, 35, ''),
(81, '小组2', 60, 35, ''),
(82, '小组3', 60, 35, ''),
(83, '看看', 61, 35, ''),
(84, '你号', 61, 35, '');

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
(60, '好', 35, ''),
(61, '111', 35, '');

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
(102, 'test', '测试账号test', '96bf667672de5e9d44981bba58139bae', 1, '测试账号test', 'public\\img\\user\\avatar\\test.png', 2, 'aa1a1bd629401c971771c06015ed9cdb', '空邮箱', '', '2018-11-18 09:06:05', '2018-11-20 01:24:09'),
(107, 'a', 'good', '7fe20e0ab5723a00e4868541e6efdd35', 1, '', 'public/img/user/avatar/a.jpg', 2, '4e1ae175a7cf203ab0041eadc571226f', '963098168@qq.com', '73361', '2018-11-19 00:29:03', '2018-11-22 01:49:54'),
(108, 'Jason', 'XP', '96bf667672de5e9d44981bba58139bae', 1, '', 'public/img/user/avatar/Jason.png', 2, '1e786fdd5f6326fb3799b5502b25f8d8', 'linnoalan@gmail.com', '', '2018-11-19 00:57:46', '2018-11-19 02:37:26'),
(109, 'Jason2', '高飞老师', '96bf667672de5e9d44981bba58139bae', 1, '', 'public/img/user/avatar/Jason2.jpg', 1, 'e882f42844e478684a812138abc02274', 'linnoalan@gmail.co', '', '2018-11-19 02:52:38', '2018-11-19 02:54:44'),
(128, 'student', 'student', '30fe2f460e3f50be5c644570c302ccbc2932496d9c2ce2603cf19582c4058916', 1, 'student', 'public\\img\\user\\avatar\\default.jpg', 1, 'b2b54b29babbaa1c4507749e8df9a654', 'student', '', '2018-11-23 01:36:05', '2018-11-23 01:36:05'),
(129, 'b', '未定义', 'bc1b948ee420e755558f5beedbd62086', 1, '', 'public\\img\\user\\avatar\\default.jpg', 1, '1a468fb9131005d90fd68f6d73f0a930', '963098168@qq.com', '', '2018-11-28 07:26:20', '2018-11-28 07:26:53'),
(130, 'c', '阿达', 'f4ffa3190ea253f3f1e6d1d479cd72d1', 2, '', 'public/img/user/avatar/c.JPG', 2, '81a5f8433d65fd38b2f128244e062fec', 'hhhh@cc.c', '', '2018-12-03 02:17:22', '2018-12-04 02:14:07'),
(131, 'lin', '未定义', '96bf667672de5e9d44981bba58139bae', 2, '', 'public\\img\\user\\avatar\\default.jpg', 2, '7e741884359c21f89d84323c1ab5d102', '2013144937@qq.com', '', '2018-12-09 06:24:12', '2018-12-09 06:24:12'),
(132, 'lin', '未定义', '96bf667672de5e9d44981bba58139bae', 2, '', 'public\\img\\user\\avatar\\default.jpg', 2, '7e741884359c21f89d84323c1ab5d102', '2013144937@qq.com', '', '2018-12-09 06:24:12', '2018-12-09 06:24:12'),
(133, 'lin', '未定义', '96bf667672de5e9d44981bba58139bae', 2, '', 'public\\img\\user\\avatar\\default.jpg', 2, '7e741884359c21f89d84323c1ab5d102', '2013144937@qq.com', '', '2018-12-09 06:24:12', '2018-12-09 06:24:12'),
(134, 'lin', '未定义', '96bf667672de5e9d44981bba58139bae', 2, '', 'public\\img\\user\\avatar\\default.jpg', 2, '7e741884359c21f89d84323c1ab5d102', '2013144937@qq.com', '', '2018-12-09 06:24:12', '2018-12-09 06:24:12');

-- --------------------------------------------------------

--
-- 表的结构 `suggest`
--

CREATE TABLE `suggest` (
  `id` int(11) NOT NULL,
  `problem` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '反馈问题',
  `img` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '反馈图片',
  `address` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '联系方式',
  `md` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '手机型号',
  `os` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '手机版本号',
  `date` varchar(300) CHARACTER SET utf8 NOT NULL COMMENT '反馈时间'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `suggest`
--

INSERT INTO `suggest` (`id`, `problem`, `img`, `address`, `md`, `os`, `date`) VALUES
(6, '111111', 'public/img/suggest/2018-12-10_1544423360505.jpg', '69999999', 'FRD-AL00', '8.0.0', '2018-12-10 14:29:20'),
(7, '', 'public/img/suggest/2018-12-10_1544423841116.jpg', '', '', '', '2018-12-10 14:37:21'),
(8, '', 'public/img/suggest/2018-12-10_1544424196154.jpg', '', '', '', '2018-12-10 14:43:16'),
(9, 'problem', '', '', '', '', '2018-12-10 14:57:46'),
(10, 'problem', '', '', '', '', '2018-12-10 15:57:07'),
(11, 'problem', '', '', '', '', '2018-12-11 09:26:38'),
(12, 'problem', '', '', '', '', '2018-12-11 09:27:09'),
(13, 'problem', '', '', '', '', '2018-12-11 09:31:07'),
(14, '111111', '', '', 'ONEPLUS A5010', '7.1.1', '2018-12-12 08:26:31'),
(15, '111111', '', '', 'ONEPLUS A5010', '7.1.1', '2018-12-12 08:27:01');

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
(372, '我', '1', 'end', 5, 107, '2018-12-03 19:19:38'),
(375, '11', '1', 'conduct', 1, 35, '2018-12-10 15:59:48');

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
(631, '卡', 'B', 403, 373, 35),
(632, '1', 'A', 404, 373, 35),
(633, '2', 'B', 404, 373, 35),
(634, '3', 'C', 404, 373, 35),
(635, '4', 'D', 404, 373, 35),
(636, '他', 'A', 405, 374, 35),
(637, '我', 'B', 405, 374, 35),
(638, '刚刚', 'A', 406, 374, 35),
(639, '11', 'B', 406, 374, 35),
(640, '111', 'D', 406, 374, 35),
(641, 'dd', 'A', 407, 375, 35),
(642, 'ss', 'B', 407, 375, 35);

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
(403, '刚刚', 0, 1, 373, 35),
(404, '你好', 0, 1, 373, 35),
(405, '111', 0, 1, 374, 35),
(406, '图', 0, 2, 374, 35),
(407, '22', 0, 1, 375, 35);

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
(113, 0, 400, 371, '1a468fb9131005d90fd68f6d73f0a930', '[624]', '2018-12-03'),
(114, 0, 400, 371, 'aa1a1bd629401c971771c06015ed9cdb', '[625]', '2018-12-08'),
(115, 0, 403, 373, '1a468fb9131005d90fd68f6d73f0a930', '[630]', '2018-12-10'),
(116, 0, 404, 373, '1a468fb9131005d90fd68f6d73f0a930', '[633]', '2018-12-10'),
(117, 0, 405, 374, '1a468fb9131005d90fd68f6d73f0a930', '[636]', '2018-12-10'),
(118, 0, 406, 374, '1a468fb9131005d90fd68f6d73f0a930', '[639]', '2018-12-10'),
(119, 0, 407, 375, '1a468fb9131005d90fd68f6d73f0a930', '[642]', '2018-12-10');

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
-- Indexes for table `suggest`
--
ALTER TABLE `suggest`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- 使用表AUTO_INCREMENT `brainstorming_comment`
--
ALTER TABLE `brainstorming_comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- 使用表AUTO_INCREMENT `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- 使用表AUTO_INCREMENT `course`
--
ALTER TABLE `course`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- 使用表AUTO_INCREMENT `havelearned`
--
ALTER TABLE `havelearned`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=218;

--
-- 使用表AUTO_INCREMENT `member_group_child`
--
ALTER TABLE `member_group_child`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;

--
-- 使用表AUTO_INCREMENT `member_group_class`
--
ALTER TABLE `member_group_class`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- 使用表AUTO_INCREMENT `member_group_type`
--
ALTER TABLE `member_group_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '// id', AUTO_INCREMENT=135;

--
-- 使用表AUTO_INCREMENT `suggest`
--
ALTER TABLE `suggest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=376;

--
-- 使用表AUTO_INCREMENT `vote_child`
--
ALTER TABLE `vote_child`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=643;

--
-- 使用表AUTO_INCREMENT `vote_class`
--
ALTER TABLE `vote_class`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=408;

--
-- 使用表AUTO_INCREMENT `vote_class_selected`
--
ALTER TABLE `vote_class_selected`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

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
--
-- Database: `laravel`
--
CREATE DATABASE IF NOT EXISTS `laravel` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `laravel`;

-- --------------------------------------------------------

--
-- 表的结构 `articles`
--

CREATE TABLE `articles` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `published_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `articles`
--

INSERT INTO `articles` (`id`, `title`, `content`, `published_at`, `created_at`, `updated_at`) VALUES
(1, 'lin1', 'lin content', '2018-07-20 19:19:23', '2018-07-17 23:39:38', '2018-07-20 19:19:23'),
(2, 'linlin', 'lincontent', '2018-07-18 08:01:18', '2018-07-18 00:01:18', '2018-07-18 00:01:18'),
(3, '2', '2', '2018-07-20 02:45:08', '2018-07-19 18:45:08', '2018-07-19 18:45:08'),
(4, '哈哈', '行', '2018-07-20 02:54:40', '2018-07-19 18:54:40', '2018-07-19 18:54:40'),
(5, '1', '1', '2018-07-20 02:58:57', '2018-07-19 18:58:57', '2018-07-19 18:58:57'),
(6, '1', '1', '2018-07-19 16:00:00', '2018-07-19 19:01:19', '2018-07-19 19:01:19'),
(7, '1', '1', '2018-07-20 03:02:16', '2018-07-19 19:02:16', '2018-07-19 19:02:16'),
(8, 'hhh', 'hhh', '2018-05-19 19:15:58', '2018-07-19 19:15:58', '2018-07-19 19:15:58'),
(9, 'ji1ojiojoi', 'jiojoijo', '2018-07-20 03:16:18', '2018-07-19 19:16:18', '2018-07-19 19:16:18'),
(10, 'jdsifj', 'jfjidsj', '2018-07-19 16:00:00', '2018-07-19 19:16:51', '2018-07-19 19:16:51'),
(11, '1111', '1111', '2018-07-20 19:20:44', '2018-07-20 19:20:44', '2018-07-20 19:20:44');

-- --------------------------------------------------------

--
-- 表的结构 `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2018_07_18_065102_create_articles_table', 1),
(2, '2018_07_18_070800_insert_table_articles', 1);

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'linlin', 'linlin@qq.com', 'linlin', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- 使用表AUTO_INCREMENT `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Database: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- 表的结构 `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(11) NOT NULL,
  `dbase` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `user` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `query` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- 表的结构 `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_length` text COLLATE utf8_bin,
  `col_collation` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) COLLATE utf8_bin DEFAULT '',
  `col_default` text COLLATE utf8_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- 表的结构 `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `column_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

--
-- 转存表中的数据 `pma__column_info`
--

INSERT INTO `pma__column_info` (`id`, `db_name`, `table_name`, `column_name`, `comment`, `mimetype`, `transformation`, `transformation_options`, `input_transformation`, `input_transformation_options`) VALUES
(1, 'egg', 'vote_class_selected', 'vote_child_id', '', '', '', '', '', 'å­æŠ•ç¥¨çš„id'),
(2, 'egg', 'vote_class_selected', 'student_token', '', '', '', '', '', 'å­¦ç”Ÿçš„token'),
(3, 'egg', 'vote_class_selected', 'selected', '', '', '', ' ', '', 'é€‰æ‹©çš„é€‰é¡¹ï¼Œå› ä¸ºæœ‰å¤šä¸ªé€‰é¡¹ï¼Œæ‰€ä»¥ä½¿ç”¨[]'),
(4, 'egg', 'vote_class_selected', 'date', '', '', '', '', '', 'æ—¶é—´'),
(5, 'egg', 'vote_class_selected', 'selected_arr', '', '', '', ' ', '', 'é€‰æ‹©çš„é€‰é¡¹ï¼Œå› ä¸ºæœ‰å¤šä¸ªé€‰é¡¹ï¼Œæ‰€ä»¥ä½¿ç”¨[]'),
(6, 'egg', 'vote_class_selected', 'vote_class_id', '', '', '', '', '', 'å­æŠ•ç¥¨çš„id');

-- --------------------------------------------------------

--
-- 表的结构 `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `settings_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

-- --------------------------------------------------------

--
-- 表的结构 `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `export_type` varchar(10) COLLATE utf8_bin NOT NULL,
  `template_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `template_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- 表的结构 `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- 表的结构 `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sqlquery` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- 表的结构 `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- 表的结构 `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- 表的结构 `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

-- --------------------------------------------------------

--
-- 表的结构 `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- 表的结构 `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- 表的结构 `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT '0',
  `x` float UNSIGNED NOT NULL DEFAULT '0',
  `y` float UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- 表的结构 `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `display_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- 表的结构 `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `prefs` text COLLATE utf8_bin NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

--
-- 转存表中的数据 `pma__table_uiprefs`
--

INSERT INTO `pma__table_uiprefs` (`username`, `db_name`, `table_name`, `prefs`, `last_update`) VALUES
('root', 'egg', 'course', '{\"CREATE_TIME\":\"2018-09-18 09:19:02\",\"col_order\":[0,1,2,3,4,5,6,7,8,9,10,11,15,12,13,14,16],\"col_visib\":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],\"sorted_col\":\"`course`.`id`  ASC\"}', '2018-12-15 13:51:07'),
('root', 'egg', 'havelearned', '{\"sorted_col\":\"`havelearned`.`id` ASC\"}', '2018-12-10 07:17:41'),
('root', 'egg', 'student', '[]', '2018-11-23 01:35:50'),
('root', 'egg', 'suggest', '{\"sorted_col\":\"`problem` ASC\"}', '2018-12-10 06:29:39');

-- --------------------------------------------------------

--
-- 表的结构 `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text COLLATE utf8_bin NOT NULL,
  `schema_sql` text COLLATE utf8_bin,
  `data_sql` longtext COLLATE utf8_bin,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') COLLATE utf8_bin DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- 表的结构 `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `config_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- 转存表中的数据 `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2018-12-16 13:24:25', '{\"lang\":\"zh_CN\",\"Console\\/Mode\":\"collapse\"}');

-- --------------------------------------------------------

--
-- 表的结构 `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL,
  `tab` varchar(64) COLLATE utf8_bin NOT NULL,
  `allowed` enum('Y','N') COLLATE utf8_bin NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- 表的结构 `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indexes for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indexes for table `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indexes for table `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indexes for table `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indexes for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indexes for table `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indexes for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indexes for table `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indexes for table `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indexes for table `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indexes for table `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indexes for table `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indexes for table `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用表AUTO_INCREMENT `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
