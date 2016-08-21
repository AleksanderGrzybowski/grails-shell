# Grails shell

This quick-n-dirty NodeJS script provides very useful CLI interface to Grails console plugin.

NOTE: this was quickly written, but it works for me. Look inside the source if you want to.

[grails-console](https://github.com/sheehan/grails-console/blob/master/README.md) is a commonly used Grails plugin, that allows developers to inspect the state of running web application by running arbitrary Groovy code. It is okay, but editing code in big `textarea` field isn't very comfortable, and executing shell commands from Groovy requires some boilerplate. This utility makes possible to directly execute arbitrary Groovy/Bash code straight from terminal.

Sample usage:

```
$ ./console.js my.server.com adminUser adminPassword -g "Math.random()"
0.3995024062594924
$ ./console.js my.server.com adminUser adminPassword -c "uname -a"
Linux laptop 4.6.0-1-amd64 #1 SMP Debian 4.6.4-1 (2016-07-18) x86_64 GNU/Linux
$ 

```

It is assumed that plugin route is protected by default Spring Security session-based auth (if it isn't, well, you have bigger problems). Also, please refrain from 'hacking' into your coworkers' boxes, who happen to have firewall disabled. While uploading metasploit shell and changing wallpaper to Nicolas Cage meme may seem amusing at first, you may be held accountable for it. ~~Just add your ssh key for some future use.~~

