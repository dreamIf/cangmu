# 仓母科技官方网站

这是仓母科技的官方网站源代码，一个简单的静态网站，展示公司的服务和信息。

## 网站结构

网站包含以下页面：

- **首页 (index.html)**: 公司简介和主要服务概览
- **关于我们 (about.html)**: 公司历史、使命和团队介绍
- **服务 (services.html)**: 详细的服务介绍和客户评价
- **联系我们 (contact.html)**: 联系表单和公司联系信息

## 技术栈

- HTML5
- CSS3
- JavaScript (原生)
- Font Awesome 图标库

## 部署指南

### 方法一：使用传统虚拟主机

1. 下载所有网站文件
2. 通过FTP上传到您的虚拟主机
3. 确保域名 `www.cangmu.cc` 已正确解析到您的主机IP

### 方法二：使用GitHub Pages (免费)

1. 在GitHub上创建一个新仓库
2. 上传所有网站文件到该仓库
3. 在仓库设置中启用GitHub Pages
4. 配置自定义域名 `www.cangmu.cc`

### 方法三：使用Netlify (免费)

1. 注册Netlify账号
2. 创建新站点，选择从GitHub导入
3. 选择包含网站文件的仓库
4. 配置自定义域名 `www.cangmu.cc`

## 文件夹结构

```
/
├── index.html          # 首页
├── about.html          # 关于我们页面
├── services.html       # 服务页面
├── contact.html        # 联系我们页面
├── css/
│   └── style.css       # 主样式文件
├── js/
│   └── main.js         # 主JavaScript文件
├── img/                # 图片文件夹（需自行添加图片）
└── README.md           # 本文档
```

## 图片需求

网站需要以下图片（请自行添加到img文件夹）：

- hero-bg.jpg - 首页背景图
- about-company.jpg - 关于我们页面的公司图片
- services-bg.jpg - 服务页面背景图
- ios-development.jpg - iOS开发服务图片
- android-development.jpg - Android开发服务图片
- cross-platform.jpg - 跨平台开发服务图片
- app-maintenance.jpg - 应用维护服务图片
- team-1.jpg, team-2.jpg, team-3.jpg, team-4.jpg - 团队成员照片
- client-1.jpg, client-2.jpg, client-3.jpg - 客户头像

## 自定义

您可以根据需要修改以下内容：

- 公司信息和描述
- 联系方式
- 服务详情
- 团队成员信息
- 颜色方案（在CSS文件中修改）

## 许可

本网站仅供仓母科技内部使用。 