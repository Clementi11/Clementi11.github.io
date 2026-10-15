# Flynn的个人博客

一个以文章为主的个人博客，使用 GitHub Pages 原生支持的 Jekyll。文章写在 Markdown 文件中；推送到 GitHub 后，Pages 会自动更新网站。

## 已发布的网站

网站地址：[https://clementi11.github.io/](https://clementi11.github.io/)。源文件保存在 `Clementi11/Clementi11.github.io` 仓库的 `main` 分支。GitHub Pages 从仓库根目录自动构建；每次提交后可在仓库的 **Actions** 页面查看发布进度。

博客页面只保留首页、文章列表、文章详情和关于页，不显示 GitHub 个人主页链接。

## 写文章

在 `_posts` 文件夹中新建 `YYYY-MM-DD-英文短标题.md`，例如 `2026-10-16-my-first-note.md`：

```md
---
title: 我的第一篇技术笔记
description: 一句话说明这篇文章解决了什么问题。
date: 2026-10-16 09:00:00 +0800
tags: [Python, 自动化]
---

这里开始写正文。支持 Markdown 标题、列表、链接和代码块。
```

把文件提交到 `main` 分支后，文章会出现在首页和文章页。暂时不想发布的草稿放在 `_drafts` 文件夹中即可。

## 更新博客信息

- 编辑 `about/index.html` 更新关于页面。
- 编辑 `_config.yml` 更新博客标题、简介和作者。
- 编辑 `assets/css/style.css` 调整颜色和布局。

修改 `_config.yml` 后，GitHub Pages 会重新构建网站。

## 本地预览（可选）

安装 Ruby 和 Bundler 后运行：

```sh
bundle install
bundle exec jekyll serve
```

然后打开 `http://127.0.0.1:4000/`。不安装 Ruby 也可以直接在 GitHub 网站中编辑 Markdown 并发布。
