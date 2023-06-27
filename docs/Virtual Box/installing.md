---
sidebar_position: 1
---

# Installing VirtualBox on Windows with Debian ISO

## Installing VirtualBox on GNU/Linux and MacOS is slightly different.

![image](https://dwblog-ecdf.kxcdn.com/wp-content/uploads/2022/05/logo-virtualbox.jpg)

This is a step by step on installing virtual box in windows based operating systems and unix based operating systems

## Table of Content

- [Debian ISO Image](#idx01)
- [Download Manager](#idx02)
- [Intel (VMX) Virtualization Technology](#idx03)
- [Hyper-V](#idx04)
- [Installing VirtualBox](#idx05)

<div id="idx01"></div>

## Debian ISO Image

You can download the Debian ISO file from the official Debian website at the following URL:
https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/

<div id="idx02"></div>

## Download Manager

Using a download manager when downloading large or multiple files simultaneously would be best,
as it can help make the downloading process more efficient and reliable.
Additionally, suppose you have a slower internet connection or experience frequent interruptions while downloading.
In that case, a download manager can help improve your download speed and stability.

- Download from https://www.freedownloadmanager.org
- Or, install a plug-in on your browser.

<div id="idx03"></div>

## Intel (VMX) Virtualization Technology

You may need to enable VMX (Virtual Machine Extensions).
Check your PC firmware configuration manual on how to do this.
E.g.,

- VMX ENABLED:

<img src="https://doit.vlsm.org/assets/images/debVBOX-081-VMX-enable.jpg" width="960" />

- VMX DISABLED:

<img src="https://doit.vlsm.org/assets/images/debVBOX-080-VMX-disable.jpg" width="960" />

<div id="idx04"></div>

## Hyper-V

You may need to disable Hyper-V on Microsoft Windows to install VirtualBox.
You can do this by running the following command in Admin PowerShell:

```
dism.exe /Online /Disable-Feature:Microsoft-Hyper-V
```

<div id="idx05"></div>

## Installing VirtualBox

- Download the latest version of VirtualBox for Windows from the Oracle website
  <https://www.virtualbox.org/wiki/Downloads/>

  - The VirtualBox version <span style={{ color: 'red', fontWeight: 'bold', fontSize: 'larger' }}> is/was 7.0.8 </span> — but this is subject to change.

  - This example will use the previous version, "7.0.4".

- Once the download is complete, run the installer file by double-clicking.
- You will be prompted with a User Account Control (UAC) window. Click on "Yes" to continue.
- The VirtualBox Setup Wizard will appear. Click on "Next" to begin the installation process.
- When doing the installation, most of the options are <span style={{ color: 'red', fontWeight: 'bold', fontSize: 'larger' }}> DEFAULT </span>. Possible different answers will be marked with "<span style={{ color: 'red', fontWeight: 'bold', fontSize: 'larger' }}> ARROWS </span>."

<img src="https://doit.vlsm.org/assets/images/debVBOX-002.jpg" width="960" />

* Read the license agreement, and if you agree, select "I Agree" and click "Next."
* Choose the defaults by clicking either "Yes" or "Next."

<img src="https://doit.vlsm.org/assets/images/debVBOX-003.jpg" width="960" />
<img src="https://doit.vlsm.org/assets/images/debVBOX-004.jpg" width="960" />
<img src="https://doit.vlsm.org/assets/images/debVBOX-005.jpg" width="960" />

* Click "Install" to begin the installation process

<img src="https://doit.vlsm.org/assets/images/debVBOX-006.jpg" width="960" />
<img src="https://doit.vlsm.org/assets/images/debVBOX-007.jpg" width="960" />

* Once the installation is complete, you will be prompted to click "Finish."

<img src="https://doit.vlsm.org/assets/images/debVBOX-008.jpg" width="960" />

### Updated At: 28/06/2023

#### Path: docs/Virtual Box/installing
