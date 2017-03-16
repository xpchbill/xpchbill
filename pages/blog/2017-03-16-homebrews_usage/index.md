---
title: Homebrew的安装及使用
date: '2017-03-16T04:19:02.863Z'
layout: post
draft: true
place: blog
tags:
  - Homebrew
categories:
  - 环境配置
coverPhoto: null
---

Homebrew是Mac OSX上的软件包管理工具，能在Mac中方便的安装软件或者卸载软件，相当于linux下的apt-get、yum神器；Homebre可以在Mac上安装一些OS X没有的UNIX工具，Homebrew将这些工具统统安装到了 /usr/local/Cellar 目录中，并在 /usr/local/bin 中创建符号链接。

## Homebrew的安装
Homebrew的安装很简单，只需在终端下输入如下指令：
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
Homebrew安装成功后，会自动创建目录 /usr/local/Cellar 来存放Homebrew安装的程序。这时你在命令行状态下面就可以使用 brew 命令了.
> 如果在安装过程中返回400，可以在几分钟后尝试重新安装。

## 常用的Homebrew命令
  - 更新：brew update
  - 安装包信息检索：brew info
  - 安装包搜索：brew search foo
  - 安装包列表：brew list
  - 过时信息：brew outdated
  - 安装：brew install FORMULA
  - 升级：brew upgrade FORMULA
  - 链接: brew link node@0.12
  - 卸载链接: brew unlink node
  - 卸载：brew uninstall
  - 完全卸载：brew uninstall –force FORMULA

## homebrew-cask
但是还不够完美，因为homebrew本身可直接安装的应用程序不是很多，这时候我们就需要安装homebrew-caskhttp://caskroom.io/来完善下：
```
brew install caskroom/cask/brew-cask
```
接下来我们就可以通过brew cask来安装更多的应用了：
```
brew cask install google-chrome
brew cask install qq
brew cask install alfred
brew cask install nodejs
...
```
homebrew-cask提供的应用程序很多，但是都是稳定版本的，如果想要安装测试版的应用，你还需要安装homebrew-cask-versionshttps://github.com/caskroom/homebrew-versions：
```
brew tap caskroom/versions
```
安装完成之后，你就可以安装测试版本的应用了，如：
```
brew cask install google-chrome-canary
brew cask install sublime-text3
```
如果你不太清楚你的应用名字，可以搜索，如：
```
brew cask search baidu
```
