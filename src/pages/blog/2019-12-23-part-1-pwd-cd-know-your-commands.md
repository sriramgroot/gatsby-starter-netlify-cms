---
templateKey: blog-post
title: 'Part 1 [pwd & cd] - Know your commands'
date: 2019-12-23T07:34:03.355Z
description: >-
  If you are an developer, you are most likely to encounter the terminal with
  the `scary green fonts` at least once in your life.
author: subin
category: Terminal
featuredpost: true
featuredimage: /img/shut_up_take_money.jpg
tags:
  - Linux
  - Terminal
  - KnowYourCommands
---
Having a basic understanding on Linux CLI commands will allow any user to navigate around the Linux with ease. This series will act as an beginners guide to all basic linux commands and their usage.

This post will focus on **[pwd](#pwd)** & **[cd](#cd)** commands.

![shut_up_take_money](/img/part-1-know-your-commands/shut_up_take_money.jpg)

## pwd

pwd stands for `Print Working Directory`. It prints the path of the current working directory, starting from the root.

**Syntax:**

```bash
pwd
```

**Usage:**

```bash
$ pwd
/home/subin
```

---

## cd

cd stands for `Change Directory`. This command is used to change the current working directory.

**Syntax:**

```bash
cd [optional directory path]
```

**Usage:**

- `cd [absolute_path]` - Changes the current working directory to the mentioned absolute path

```bash
$ pwd
/home/subin

$ cd /home/subin/Download

$ pwd
/home/subin/Download
```

- `cd [relative_path]` - Changes the current working directory to the path relative to the current directory.

```bash
$ pwd
/home/subin

$ cd Download

$ pwd
/home/subin/Download
```

- `cd ~` - Changes the current working directory to the user home directory which is `/home/subin` in my case.

```bash
$ cd /home/subin/Download

$ pwd
/home/subin/Download

$ cd ~

$ pwd
/home/subin

$ cd ~/Documents

$ pwd
/home/subin/Documents
```

- `cd` - Works similar to `cd ~`, changes the current working directory to the user home directory

```bash
$ cd /home/subin/Download

$ pwd
/home/subin/Download

$ cd

$ pwd
/home/subin
```

- `cd /` - Changes the current working directory to root directory.

```bash
$ pwd
/home/subin

$ cd /

$ pwd
/
```

- `cd ..` - This command is used to move one level up from the current directory, or to move to the parent directory of current directory.

```bash
$ pwd
/home/subin

$ cd ~/Downloads/movie

$ pwd
/home/subin/Downloads/movie

$ cd ..

$ pwd
/home/subin/Downloads

$ cd ../Documents

$ pwd
/home/subin/Documents
```

- `cd -` - This command takes you back to the previous working directory.

```bash
$ pwd
/home/subin

$ cd ~/Downloads/movie

$ pwd
/home/subin/Downloads/movie

$ cd ~

$ pwd
/home/subin

$ cd -

$ pwd
/home/subin/Downloads/movie
```

---

## All Parts of this series
- Part 1 - [pwd & cd](/blog/2019-10-19-part-1-know-your-commands)
- Part 2 - [echo & ls](/blog/2019-10-27-part-2-know-your-commands)
- Part 3 - [touch & mkdir](/blog/2019-11-16-part-3-know-your-commands)
* More coming soon.

---

**Note:**
All examples above are based on below imaginary directory structure.

```
.
├── home
│   └── subin
│       ├── .bashrc
│       ├── .config
│       ├── Downloads
│       │   └── movie
│       │       └── some_movie.mp4
│       ├── Desktop
│       ├── Documents
│       │   └── test_doc.txt
│       ├── Music
│       └── Pictures
├── lib
├── opt
└── tmp
```If you are an developer, you are most likely to encounter the terminal with the `scary green fonts` at least once in your life.

Having a basic understanding on Linux CLI commands will allow any user to navigate around the Linux with ease. This series will act as an beginners guide to all basic linux commands and their usage.

This post will focus on **[pwd](#pwd)** & **[cd](#cd)** commands.

![shut_up_take_money](/img/part-1-know-your-commands/shut_up_take_money.jpg)

## pwd

pwd stands for `Print Working Directory`. It prints the path of the current working directory, starting from the root.

**Syntax:**

```bash
pwd
```

**Usage:**

```bash
$ pwd
/home/subin
```

---

## cd

cd stands for `Change Directory`. This command is used to change the current working directory.

**Syntax:**

```bash
cd [optional directory path]
```

**Usage:**

- `cd [absolute_path]` - Changes the current working directory to the mentioned absolute path

```bash
$ pwd
/home/subin

$ cd /home/subin/Download

$ pwd
/home/subin/Download
```

- `cd [relative_path]` - Changes the current working directory to the path relative to the current directory.

```bash
$ pwd
/home/subin

$ cd Download

$ pwd
/home/subin/Download
```

- `cd ~` - Changes the current working directory to the user home directory which is `/home/subin` in my case.

```bash
$ cd /home/subin/Download

$ pwd
/home/subin/Download

$ cd ~

$ pwd
/home/subin

$ cd ~/Documents

$ pwd
/home/subin/Documents
```

- `cd` - Works similar to `cd ~`, changes the current working directory to the user home directory

```bash
$ cd /home/subin/Download

$ pwd
/home/subin/Download

$ cd

$ pwd
/home/subin
```

- `cd /` - Changes the current working directory to root directory.

```bash
$ pwd
/home/subin

$ cd /

$ pwd
/
```

- `cd ..` - This command is used to move one level up from the current directory, or to move to the parent directory of current directory.

```bash
$ pwd
/home/subin

$ cd ~/Downloads/movie

$ pwd
/home/subin/Downloads/movie

$ cd ..

$ pwd
/home/subin/Downloads

$ cd ../Documents

$ pwd
/home/subin/Documents
```

- `cd -` - This command takes you back to the previous working directory.

```bash
$ pwd
/home/subin

$ cd ~/Downloads/movie

$ pwd
/home/subin/Downloads/movie

$ cd ~

$ pwd
/home/subin

$ cd -

$ pwd
/home/subin/Downloads/movie
```

---

## All Parts of this series
- Part 1 - [pwd & cd](/blog/2019-10-19-part-1-know-your-commands)
- Part 2 - [echo & ls](/blog/2019-10-27-part-2-know-your-commands)
- Part 3 - [touch & mkdir](/blog/2019-11-16-part-3-know-your-commands)
* More coming soon.

---

**Note:**
All examples above are based on below imaginary directory structure.

```
.
├── home
│   └── subin
│       ├── .bashrc
│       ├── .config
│       ├── Downloads
│       │   └── movie
│       │       └── some_movie.mp4
│       ├── Desktop
│       ├── Documents
│       │   └── test_doc.txt
│       ├── Music
│       └── Pictures
├── lib
├── opt
└── tmp
```
