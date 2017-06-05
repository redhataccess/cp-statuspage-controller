var StatuspageController = require('statuspage-controller');
var IrcPlugin = require('statuspage-controller-irc');

var plugin_config = {
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
    ],
};

var spc = new StatuspageController();

var ircPlugin = new IrcPlugin(plugin_config);

spc.addPlugin(ircPlugin);

spc.start();