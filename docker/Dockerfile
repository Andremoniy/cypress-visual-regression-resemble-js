FROM centos:centos8
RUN cd /etc/yum.repos.d/ && sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-* && sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-* && yum update -y && yum install -y sudo && curl -fsSL https://rpm.nodesource.com/setup_16.x | sudo bash - && yum install -y nodejs && yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib
ADD sample_application /app
WORKDIR /app
CMD npm i && npm start&
CMD cd /sample_application_cypress && npm i && npm run cypress:run