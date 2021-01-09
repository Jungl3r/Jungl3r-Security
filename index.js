const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = ".";

Client.on("ready", () => {
    console.log("Le bot est actuellement opérationnel");
});

Client.on('ready', () => {
    Client.user.setActivity('Jungl3r Security', { type: 'STREAMING', url: "https://www.twitch.tv/667" })
});

Client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;

    //*ping
    if (message.content == prefix + "ping")
        message.reply("pong");

    if (message.member.hasPermission("ADMINISTRATOR")) {
        if (message.content.startsWith(prefix + "ban")) {
            let mention = message.mentions.members.first();

            if (mention == undefined) {
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                if (mention.bannable) {
                    mention.ban();
                    message.channel.send(mention.displayName + " a été **banni** avec __succès__.");
                }
                else {
                    message.reply("Impossible de bannir ce membre.");
                }
            }
        }
        else if(message.content.startsWith(prefix + "kick" )){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou **mal** mentionné.");
            }
            else {
                if(mention.kickable){
                    mention.kick();
                    message.channel.send(mention.displayName + " a été **kick** avec __succès__.")
                }
                else {
                    message.reply("**Impossible** de __kick__ ce membre.")
                }
            }
        }
        else if(message.content.startsWith(prefix + "mute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou **mal** __mentionneé__.")
            }
            else {
                mention.roles.add("797463469930577964");
                message.channel.send(mention.displayName + " **mute** avec __succès__. ");
            }
        }
        else {
            if(message.content.startsWith(prefix + "unmute")){
                let mention = message.mentions.members.first();

                if(mention == undefined){
                    message.reply("Membre non ou **mal** __mentionneé__.")
                }
                else {
                    mention.roles.remove("797463469930577964");
                    message.channel.send(mention.displayName + " a été **demute** avec __succès__. ");
                }
            }
        }
    }
});



Client.login("Nzk3NDQ4MTY0MjQzNDA2ODY4.X_mneg.W7k-WUQ1x65JjgwzsUTcpp6vXzY")

