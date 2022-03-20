/*
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const BlackAlpha = require('blackalpha-public');
const Alpha = BlackAlpha.events
const Build = BlackAlpha.build
const _alpha = BlackAlpha.tima
const {MessageType} = require('@m.rtima/blackalpha-web-api');
let Work_Mode = Build.WORKTYPE = = 'public' ? false : true
const fs = require("fs") 
const alpha = fs.readFileSync('./node_modules/blackalpha-public/media/alphabot.mp3') 

const Language = require('../language');
const Lang = Language.getString('_alpha');
const stats = Language.getString('system_stats')

Alpha.operate(
     { pattern: Build.MENU, froMe: Work_Mode, dontAddCommandList: true, deleteCommand: true }, (async (alphaMSG) => {
	 await BlackAlpha.alpha_setup()
     const ver = stats.version
     const name = Build.name
     await _alpha.sendPanel( ver, name alphaMSG)
}));
Alpha.operate(
     { pattern: 'bacommandlist', froMe: Work_Mode, dontAddCommandList: true, deleteCommand: false }, (async (alphaMSG) => {
	 await BlackAlpha.alpha_setup()
     var text = await _alpha.timaname()
     await _alpha.sendFullMenu( alphaMSG, text, Lang )
}));


Alpha.operate(
     {pattern: 'about', froMe: Work_Mode, dontAddCommandList: true, deletecommand: false,}, (async (amdiMSG) => {
     await BlackAlpha.alpha_setup()
     await _alpha.about( alphaMSG )
     var text2 = await _alpha.about2()
     await alphaMSG.client.sendMessage(alphaMSG.jid, text2,MessageType.text);
     var vcard = await _alpha.vcard()
     await alphaMSG.client.sendMessage(alphaMSG.jid, {displayname: "M.R TIMA", vcard: vcard}, MessageType.contact, {quoted: alphaMSG.data}))
}));


var probut = ''
if (Build.Lang = = 'EN') probut = '👤 Profile Settings'
if (Build.Lang = = 'SI') probut = '👤 Profile සැකසුම්'
var grpbut = ''
if  (Build.Lang = = 'EN') grpbut = '📉 Group Settings'
if  (Build.Lang = = 'SI') grpbut = '📉 කණ්ඩායම් සැකසුම්'
Alpha.operate(
     {pattern: 'baadmin', froMe: true, dontAddCommandList: true, deleteCommand: false}, (async (alphaMSG) => {
	 await BlackAlpha.alpha_setup()
	 const ver = stats.version
	 const name = Build.name
	 var adminmenu = await _alpha.admin(probut, grpbut, ver, name)
	 await alphaMSG.client.sendMessage(alphaMSG.jid, adminmenu, MessageType.buttonMessage, {quoted: alphaMSG.data}));
}));
Alpha.operate(
     {pattern: 'baprosett', froMe: true, dontAddCommandList: true,  deleteCommand: false}, (async (alphaMSG) => {
	 await BlackAlpha.alpha_setup()
	 var PROF
var probut = ''
if (Build.LANG == 'EN') probut = '👤 Profile Settings'
if (Build.LANG == 'SI') probut = '👤 Profile සැකසුම්'
var grpbut = ''
if (Build.LANG == 'EN') grpbut = '📉 Group Settings'
if (Build.LANG == 'SI') grpbut = '📉 කණ්ඩායම් සැකසුම්'
Alpha.operate(
    {pattern: 'baadmin', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (alphaMSG) => {    
    await BlackAlpha.alpha_setup()
    const ver = stats.version
    const name = Build.NAME
    var adminmenu = await _alpha.admin(probut, grpbut, ver, name) 
    await alphaMSG.client.sendMessage(alphaMSG.jid, adminmenu, MessageType.buttonsMessage, {quoted: alphaMSG.data});
}));
Alpha.operate(
    {pattern: 'baprosett', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (alphaMSG) => {
    await BlackAlpha.alpha_setup()
    var PROF = await _alpha.profile() 
    await alphaMSG.client.sendMessage(alphaMSG.jid, PROF, MessageType.text, {quoted: alphaMSG.data});
}));
Alpha.operate(
    {pattern: 'bagrpsett', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (alphaMSG) => {
    await BlackAlpha.alpha_setup()
    var GRP = await _alpha.grp() 
    await alphaMSG.client.sendMessage(alphaMSG.jid, GRP, MessageType.text, {quoted: alphaMSG.data});
}));

Alpha.operate(
    {pattern: 'gmanager', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (alphaMSG) => {
    await BlackAlpha.alpha_setup()
    await _alpha.grpManage(alphaMSG)
}));
