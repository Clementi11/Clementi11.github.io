# Flynn的个人博客

一个适合技术笔记和项目展示的个人博客，使用 GitHub Pages 原生支持的 Jekyll。文章写在 Markdown 文件中；推送到 GitHub 后，Pages 会自动更新网站。

## 发布到 GitHub

1. 在 `Clementi11` 账号下创建公开仓库，仓库名必须是 `Clementi11.github.io`。
2. 把本目录中的**所有文件和文件夹**上传到仓库根目录，包括以下划线开头的文件夹。
3. 打开仓库 **Settings → Pages**，把 **Build and deployment → Source** 设为 **Deploy from a branch**，选择 `main` 分支和 `/(root)` 目录，然后保存。
4. 发布完成后访问 [https://clementi11.github.io/](https://clementi11.github.io/)。首次构建可能需要几分钟，可以在仓库的 **Actions** 页面查看进度。

仓库名如果不是 `Clementi11.github.io`，需要在 `_config.yml` 中把 `baseurl` 改为 `/<仓库名>`，对应网址也会变成 `https://clementi11.github.io/<仓库名>/`。

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

## 更新项目与个人信息

- 编辑 `_data/projects.yml` 添加或修改项目卡片。
- 编辑 `about/index.html` 更新关于页面。
- 编辑 `_config.yml` 更新博客标题、简介、作者和 GitHub 用户名。
- 编辑 `assets/css/style.css` 调整颜色和布局。

修改 `_config.yml` 后，GitHub Pages 会重新构建网站。

## 本地预览（可选）

安装 Ruby 和 Bundler 后运行：

```sh
bundle install
bundle exec jekyll serve
```

然后打开 `http://127.0.0.1:4000/`。不安装 Ruby 也可以直接在 GitHub 网站中编辑 Markdown 并发布。
