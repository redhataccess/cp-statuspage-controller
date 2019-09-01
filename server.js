let StatusPageController = require('statuspage-controller');
let IrcPlugin = require('statuspage-controller-irc');

let plugin_config = {
    host: 'irc.devel.redhat.com',
    nick: 'Statuspage',
    prefix: '[status.redhat.com]',
    channels: [
        '#customer-platform',
        '#iso',
        '#MIM',
        '#cee',
        '#cee_mgrs',
        '#gss-extended',
        '#gss-na',
        '#it-pnt',
        '#sbr-insights',
    ],
};

let spc = new StatusPageController();

let ircPlugin = new IrcPlugin(plugin_config);

spc.addPlugin(ircPlugin);

spc.start();
