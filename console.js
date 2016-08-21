#! /usr/bin/env node
var request = require('request').defaults({jar: true});
var path = require('path');

function printUsageAndExit() {
    console.log(`Usage: ./${path.basename(__filename)} [server] [username] [password] [-g | -c] "your code/command"`);
    process.exit(1);
}


if (process.argv.length != 7) {
    printUsageAndExit();
}

var server = process.argv[2];
if (!server.startsWith('http://')) {
    server = 'http://' + server;
}

var loginFormData = {
    username: process.argv[3],
    password: process.argv[4]
};

var option = process.argv[5];
var code;
if (option === "-g") {
    code = process.argv[6];
} else if (option === "-c") {
    code = "\"" + process.argv[6] + "\".execute().text.split(\"\\n\").each{println it};null";
} else {
    printUsageAndExit();
}


request.post(server + '/login/authenticate', {
    form: loginFormData
}, function (err) {
    if (err) throw err;

    request.post(server + '/console/execute', {
        form: {
            autoImportDomains: true,
            code: code
        }
    }, function (err, response, body) {
        body = JSON.parse(body);
        console.log(body.output);
        console.log(body.result);
    })
});
