---
sidebar_position: 2
---

# Debian Guest Preparation
## Prepare your VirtualBox for Debian

![image](https://www.digitalmomblog.com/wp-content/uploads/2019/04/star-wars-memes.jpeg.webp)

## Installing Debian Gnu/Linux

:::note
When doing the installation, most of the options are <span class="important-text">DEFAULT</span>. Possible different answers will be marked with "<span class="important-text">ARROWS</span>." If you are in "Guided Mode," switch to <span class="important-text">`Expert Mode`</span>
:::


These are just examples, the whole examples, and nothing but examples. So please help me, GNU/Linux!
You might select other options based on your faith and religion 
(i.e., kepercayaan and keyakinan masing-masing).

* Name: `DEB00-0`
* Type: `Linux`
* Version: `Debian (64 bit)`
* Base Memory: `4096 MB`
* Processors: `4`
* HardDisk
  * Size: `24 GB`
  * Type: `VDI`

:::caution
### Expect the Unexpected

💩 sometimes happens!

![debVBOX-009](../../static/img/legacy_assets/debVBOX-009.jpg)
:::

### Select: NEW

:::note
When doing the installation, most of the options are <span class="important-text">DEFAULT</span>. Possible different answers will be marked with "<span class="important-text">ARROWS</span>." If you are in "Guided Mode," switch to <span class="important-text">`Expert Mode`</span>
:::

![debVBOX-010](../../static/img/legacy_assets/debVBOX-010.jpg)

### Virtual Machine Name and Operating Systems

:::note
When doing the installation, most of the options are <span class="important-text">DEFAULT</span>. Possible different answers will be marked with "<span class="important-text">ARROWS</span>." If you are in "Guided Mode," switch to <span class="important-text">`Expert Mode`</span>
:::

* Select: Expert Mode

![debVBOX-011](../../static/img/legacy_assets/debVBOX-011.jpg)

* Name: `DEB00-0`
* Type: `Linux`
* Version: `Debian (64 bit)`

![debVBOX-012](../../static/img/legacy_assets/debVBOX-012.jpg)

### Hardware

:::note
When doing the installation, most of the options are <span class="important-text">DEFAULT</span>. Possible different answers will be marked with "<span class="important-text">ARROWS</span>." If you are in "Guided Mode," switch to <span class="important-text">`Expert Mode`</span>
:::

* Base Memory: `4096 MB`
* Processors: `4`
:::danger
Make sure you don't cross the red line!
:::

![debVBOX-013](../../static/img/legacy_assets/debVBOX-013.jpg)

### HardDisk

Do not worry about having a 24 GB empty disk! An empty disk does not occupy much space.

  * Size: `24 GB`
  * Type: `VDI`


![debVBOX-014](../../static/img/legacy_assets/debVBOX-014.jpg)

### Export OVA: `DEB00-0`

* Select: 
  * Tools --> Export
  * FINISH

![debVBOX-015](../../static/img/legacy_assets/debVBOX-015.jpg)

### Rename `DEB00-0` to `DEB00-1`

![debVBOX-016](../../static/img/legacy_assets/debVBOX-016.jpg)

* In "General", click `Name: DEB00-0`
* Set `Name: DEB00-1`
* OK

![debVBOX-017](../../static/img/legacy_assets/debVBOX-017.jpg)


![debVBOX-018](../../static/img/legacy_assets/debVBOX-018.jpg)

## Fine Tuning
### General: Basic

* Name: `DEB00-0`
* Type: `Linux`
* Version: `Debian (64 bit)`

![debVBOX-019](../../static/img/legacy_assets/debVBOX-019.jpg)

### General: Advanced

* Shared ClipBoard: `Bi-directional`
* Drag'n Drop: `Bi-directional`

![debVBOX-020](../../static/img/legacy_assets/debVBOX-020.jpg)

### System: MotherBoard

* Base Memory: `4096 MB`
* Boot Order:
  * `Optical`
  * `HardDisk`
* ChipSet: `PIIX3`
* TPM: `None`
* Pointing Device: `USB Tablet`
* Extended Feature: 
  * `Enable I/O APIC`
  * `Enable Hardware Clock in UTC Time`

![debVBOX-021](../../static/img/legacy_assets/debVBOX-021.jpg)

### System: Processor

* Processors: `4`
* Execution Caps: `100%`
* Extended Feature: 
  * `Enable PAE/NX`

![debVBOX-022](../../static/img/legacy_assets/debVBOX-022.jpg)

### System: Acceleration

* Paravirtualization Interface: `Default`
* Hardware Virtualization: `Enable Nesting Page`

![debVBOX-023](../../static/img/legacy_assets/debVBOX-023.jpg)

### Display: Screen

* Video Memory: `16MB`
* Monitor Count: `1`
* Scale Factor: `150%`
* Graphics Controller: `VMSVGA`

![debVBOX-024](../../static/img/legacy_assets/debVBOX-024.jpg)

### Storage: Devices: Controller: IDE

* REMOVE IDE CONTROLLER: (RIGHT CLICK)

![debVBOX-025](../../static/img/legacy_assets/debVBOX-025.jpg)

![debVBOX-026](../../static/img/legacy_assets/debVBOX-026.jpg)

### Storage: Devices: Controller: SATA

* Add Optical Drive

![debVBOX-027](../../static/img/legacy_assets/debVBOX-027.jpg)

* Add ISO Disk Image File

![debVBOX-028](../../static/img/legacy_assets/debVBOX-028.jpg)

You can download the Debian ISO file from the official Debian website at the following URL:
<https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/>

:::caution
The current ISO image is/was **`debian-12.0.0-amd64-netinst.iso`** — but this is subject to change.
:::

![debVBOX-029](../../static/img/legacy_assets/debVBOX-029.jpg)

* Choose ISO Image

![debVBOX-030](../../static/img/legacy_assets/debVBOX-030.jpg)

* Done

![debVBOX-031](../../static/img/legacy_assets/debVBOX-031.jpg)

### Audio
* Audio: `OFF`

![debVBOX-032](../../static/img/legacy_assets/debVBOX-032.jpg)

### Network: Adapter 1

* Enable Network Adapter
  * Attachet to: NAT
  * Advanced:
    * Adapter Type: `Intel Pro/1000 MT Desktop`
    * Cable Connected: Checked
    * Port Forwarding (CLICK)

![debVBOX-033](../../static/img/legacy_assets/debVBOX-033.jpg)

### Port Forwarding Rules (SSH)

| Name   | Protocol | Host IP   | Host Port | Guest IP  | Guest Port |
|--------|----------|-----------|-----------|-----------|------------|
| Rule 1 | TCP      | 127.0.0.1 | 6022      | 10.0.2.15 | 22         |

![debVBOX-034](../../static/img/legacy_assets/debVBOX-034.jpg)

### DONE (OK)

![debVBOX-035](../../static/img/legacy_assets/debVBOX-035.jpg)

### EXPORT: DEB00-1

* TOOLS (CLICK)

![debVBOX-036](../../static/img/legacy_assets/debVBOX-036.jpg)

* If you are in "Guided Mode," switch to "Expert Mode."
* Virtual Machine: `DEB00-1`

![debVBOX-037](../../static/img/legacy_assets/debVBOX-037.jpg)

```
Updated At: 25/06/2023
Path: docs/virtualbox/debian-guest-preparation
```