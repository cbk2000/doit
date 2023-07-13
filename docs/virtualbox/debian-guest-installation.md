---
sidebar_position: 3
---

# Debian Guest Installation
## Subtitle Here


![image](https://www.digitalmomblog.com/wp-content/uploads/2019/04/star-wars-memes.jpeg.webp)


## Installing Debian Gnu/Linux

jhh
* VirtualBox Name: DEB00-2

![debVBOX-038](../../static/img/legacy_assets/debVBOX-038.jpg)



## START Install

* CLICK: START

![debVBOX-039](../../static/img/legacy_assets/debVBOX-039.jpg)

![debVBOX-040](../../static/img/legacy_assets/debVBOX-040.jpg)

![debVBOX-041](../../static/img/legacy_assets/debVBOX-041.jpg)



## Debian Installer Menu

* Graphical Install

![debVBOX-042](../../static/img/legacy_assets/debVBOX-042.jpg)



### Select A Language

* English

![debVBOX-043](../../static/img/legacy_assets/debVBOX-043.jpg)



### Select Your Location

* Other (Or else)

![debVBOX-044](../../static/img/legacy_assets/debVBOX-044.jpg)



* Asia (Or else)

![debVBOX-045](../../static/img/legacy_assets/debVBOX-045.jpg)



* Indonesia (Or else)

![debVBOX-046](../../static/img/legacy_assets/debVBOX-046.jpg)



### Configure Locales

* Australia: en_AU.UTF-8
  * Australia is an English-speaking country with a 24-hour clock system.

![debVBOX-047a](../../static/img/legacy_assets/debVBOX-047a.jpg)



### Configure Keyboard

* American English

![debVBOX-048](../../static/img/legacy_assets/debVBOX-048.jpg)



![debVBOX-049](../../static/img/legacy_assets/debVBOX-049.jpg)



### Configure Network (e.g. cbkadal)

* Hostname: cbkadal
  * Remember: <span class="important-text">you are not cbkadal!</span>

![debVBOX-050](../../static/img/legacy_assets/debVBOX-050.jpg)



* Domain Name: BLANK

![debVBOX-051](../../static/img/legacy_assets/debVBOX-051.jpg)



### Setup Users and Passwords (e.g. cbkadal)

* ROOT password: cbkadal
  * Remember: <span class="important-text">you are not cbkadal!</span>

![debVBOX-052](../../static/img/legacy_assets/debVBOX-052.jpg)



* New User Name: Cicak BinKadal
  * Remember: <span class="important-text">you are not Cicak BinKadal!</span>

![debVBOX-053](../../static/img/legacy_assets/debVBOX-053.jpg)



* Username: cbkadal
  * Remember: <span class="important-text">you are not cbkadal!</span>

![debVBOX-054](../../static/img/legacy_assets/debVBOX-054.jpg)



* Passwords (e.g. cbkadal)
  * Remember: <span class="important-text">you are not cbkadal!</span>

![debVBOX-055](../../static/img/legacy_assets/debVBOX-055.jpg)



### Configure The Clock

* Western -- WIB (Sumatera, Jakarta, West/Central Kalimantan)

![debVBOX-056](../../static/img/legacy_assets/debVBOX-056.jpg)



### Partition Disk

![debVBOX-057](../../static/img/legacy_assets/debVBOX-057.jpg)



* Partitioning Method: Guided -- use entire disk

![debVBOX-058](../../static/img/legacy_assets/debVBOX-058.jpg)



* Scan Disk to Partitioning

![debVBOX-059](../../static/img/legacy_assets/debVBOX-059.jpg)



* Partitioning Scheme: All files in one partition

![debVBOX-060](../../static/img/legacy_assets/debVBOX-060.jpg)



* Finish Partitioning

![debVBOX-061](../../static/img/legacy_assets/debVBOX-061.jpg)



* Write to Disk: Yes

![debVBOX-062](../../static/img/legacy_assets/debVBOX-062.jpg)



### Install Base System

![debVBOX-063](../../static/img/legacy_assets/debVBOX-063.jpg)



### Configure The Package Manager

* Scan Extra Media: NO

![debVBOX-064](../../static/img/legacy_assets/debVBOX-064.jpg)



* Debian Archive Mirror Country: Indonesia

![debVBOX-065](../../static/img/legacy_assets/debVBOX-065.jpg)



* Debian Archive Mirror: deb.debian.org

![debVBOX-066](../../static/img/legacy_assets/debVBOX-066.jpg)



* HTTP Proxy: NONE

![debVBOX-067](../../static/img/legacy_assets/debVBOX-067.jpg)



![debVBOX-068](../../static/img/legacy_assets/debVBOX-068.jpg)



### Configuring Popularity Contest

* The default is: NO; but there is nothing wrong if you choose YES!

![debVBOX-069](../../static/img/legacy_assets/debVBOX-069.jpg)



![debVBOX-070](../../static/img/legacy_assets/debVBOX-070.jpg)



### Software Selection

* Debian desktop environment: <span class="important-text">NO</span>
* GNOME: <span class="important-text">NO</span>
* SSH Server: YES
* Standard System Utility: YES

![debVBOX-071](../../static/img/legacy_assets/debVBOX-071.jpg)



![debVBOX-072](../../static/img/legacy_assets/debVBOX-072.jpg)



### Install The GRUB Boot Loader

* Install the GRUB Boot Loader to your primary drive: YES 

![debVBOX-073](../../static/img/legacy_assets/debVBOX-073.jpg)



* Install the GRUB Boot Loader: /dev/sda

![debVBOX-074](../../static/img/legacy_assets/debVBOX-074.jpg)



![debVBOX-075](../../static/img/legacy_assets/debVBOX-075.jpg)



### Finish Installation

![debVBOX-076](../../static/img/legacy_assets/debVBOX-076.jpg)



![debVBOX-077](../../static/img/legacy_assets/debVBOX-077.jpg)



## REBOOT

![debVBOX-078](../../static/img/legacy_assets/debVBOX-078.jpg)



* Select: Debian GNU/Linux

![debVBOX-079](../../static/img/legacy_assets/debVBOX-079.jpg)



## TEST LOGIN

* login: `YOUR ACCOUNT`
* password: `YOUR PASSWORD`

![debVBOX-082](../../static/img/legacy_assets/debVBOX-082.jpg)



* Substitute "ROOT"
  * Enter ROOT password

```
su -

```

* Test Network/Update (ROOT)

```
apt-get update
apt-get dist-upgrade -y

```

* POWEROFF SHUTDOWN

```
poweroff

```

![debVBOX-083](../../static/img/legacy_assets/debVBOX-083.jpg)



### CONSOLE SHUTDOWN

![debVBOX-084](../../static/img/legacy_assets/debVBOX-084.jpg)

```
Updated At: 12/07/2023
Path: docs/virtualbox/debian-guest-installation
```