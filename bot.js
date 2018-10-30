const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = '?';
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`UnderWorld' Community🌹`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 
 client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  **ولكم نورت السيرفر:rose: **
:crown:**اسم العضو ** ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = "?";
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "alpha codes";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('```**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**```');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });
 
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

client.on('message', message => {
 
    if (message.content === "?mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
 
           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
//™¦༺♚ƙἶղց|MaS♚༺¦™#7105
if (message.content === "?unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
 
           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }
 
 
 
});

client.on('message', async message =>{
  var prefix = "?";
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#070000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK : false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
 
    await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت** : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
 
 
 
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
 
  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
 
  return;
 
  }
 
});

var prefix = "?"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).kick();
 
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('*ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });

client.on('message', message => {
    if (message.content.startsWith("?avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('ready',async () => {
  client.channels.find(ch => ch.id === "506826416550182912" && ch.type === 'voice').join();
});

client.on('message',message =>{
    var prefix = "?";
    if(message.content.startsWith(prefix + 'topinv')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://i.imgur.com/xawnz68.jpg")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

var prefix = "?"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

var RAW1 = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
var RAW2 = ["ًں“™__60%__  **|**  ًں“ک__40%__","ًں“™__63%__  **|**  ًں“ک__37%__","ًں“™__89%__  **|**  ًں“ک__11%__","ًں“™__97%__  **|**  ًں“ک__3%__"]
client.on('message', message => {
    if(!message.guild) return;
    if (message.author.bot) return;
      let id = message.author.id,prefix="?";
      if (ti[id] && (new Date).getTime() - ti[id] < 20*1000) {
          let r = (new Date).getTime() - ti[id];
          r = 20*1000 - r;
      message.channel.send(` **Please wait ${pretty(r, {verbose:true})}**`).then(m => m.delete(5000));
      return;
      }
      if ( message.content == prefix+'لو خيروك'){
         
          try{
  //body
  }catch(e){
 
  }
         var Embed = new Discord.RichEmbed()
.setImage(RAW1[Math.floor(Math.random() * RAW2.length)])
message.channel.sendEmbed(Embed).then(msg => {
    msg.react('ًں“ک').then( r => {
        msg.react('ًں“™')
 
        let blueFilter = (reaction, user) => reaction.emoji.name === 'ًں“ک' && user.id === message.author.id;
    let orangeFilter = (reaction, user) => reaction.emoji.name === 'ًں“™' && user.id === message.author.id;
 
 
    let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
    let orange = msg.createReactionCollector(orangeFilter, { time: 15000 });
 
 
    blue.on("collect", r => {
        msg.delete();
        message.channel.send(RAW2[Math.floor(Math.random() * RAW2.length)]).then(m => m.delete(60000));
 
        })
       
 orange.on("collect", r => {
        msg.delete();
        message.channel.send(RAW2[Math.floor(Math.random() * RAW2.length)]).then(m => m.delete(60000));
 
        })
 
                                })
                                })
                              ti[id] = (new Date).getTime()
                                }
                                });

const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?" ;   // البرفكس هنا



var requestHelp = async function(type, user, message) {
    switch(type) {
        case "games":
            var gamesHelp = await new Discord.RichEmbed()
                .addField("?لو خيروك** ", "لو خيروك** ")
                .addField("?roll** ", "9or3a** ")
                .addField("?skin** ", "ur mc skin** ")
            user.send(gamesHelp);
        break;
        case "general":
            var generalHelp = await new Discord.RichEmbed()
                .addField("?ping", " **Your ping** ")
                .addField("?avatar", " **افتارك** ")
                .addField("?topinv", " **top invites** ")
                .addField("?mb", " **members info** ")
                .addField("?server", " **server info** ")
            user.send(generalHelp);
        break;
        case "admin":
        if(message.member.hasPermission("ADMINISTRATOR")) {
            var adminHelp = await new Discord.RichEmbed()
                .addField("?clear", " **مسح الشات** ")
                .addField("?bc", " **بروكاست** ")
                .addField("?mute", " **Mute member** ")
                .addField("?unmute", " **UnMute member** ")
                .addField("?kick", " **kick member** ")
                .addField("?ban", " **ban member** ")
                .addField("?mutechannel", " **mutechat** ")
                .addField("?unmutechannel", " **unmutechat** ")
                .addField("?moveall", " **moveall to ur room** ")
                .addField("?move", " **move anymember to ur room** ")


            user.send(adminHelp); 
        } else {
            return;
        }
        break;
    }
}






var reactForGamesHelp = {
    messageId: null,
    reaction: null
}, 
reactForGeneralHelp = {
    messageId: null,
    reaction: null
}, 
reactForAdminHelp = {
    messageId: null,
    reaction: null
};



function define(identify) {
    var data = {}
    data["user"] = client.users.find("id", identify.user_id)
    data["channel"] = client.channels.find("id", identify.channel_id);
    data["emoji"] = identify.emoji.id ? `${identify.emoji.name}:${identify.emoji.id}` : identify.emoji.name;
    data["member"] = data["channel"].guild.members.find("id", identify.user_id)
    data["message"] = data["channel"].messages.find("id", identify.message_id);
    data["reaction"] = data["message"].reactions.get(data.emoji)
    return data;
}


client.on('raw',  packet  => {
    if(packet.t == "MESSAGE_REACTION_ADD") {
        var data = define(packet.d)
        if(data.user.id == client.user.id) return;
            switch (packet.d.message_id) {
            case reactForGamesHelp.messageId:
                if(reactForGamesHelp.reaction === data.emoji) {
                    requestHelp("games", data.member, data.message)
                    data.reaction.remove(data.member)
                } else {
                    data.reaction.remove(data.member)
                }
                break;

            case reactForGeneralHelp.messageId:
                if(reactForGeneralHelp.reaction === data.emoji) {
                    requestHelp("general", data.member, data.message)
                    data.reaction.remove(data.member)
                } else {
                    data.reaction.remove(data.member)
                }
                break;


            case reactForAdminHelp.messageId:
                if(reactForAdminHelp.reaction === data.emoji) {
                    requestHelp("admin", data.member, data.message)
                    data.reaction.remove(data.member)
                } else {
                    data.reaction.remove(data.member)
                }
                break;
        }
    }
});






client.on("message", message => {
    if(message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    if(message.content == prefix + `set ${args[1]} help`) {
        if(args[1] == "games" || args[1] == "general" || args[1] == "admin") {
            var  filter = m => m.author.id === message.author.id
            message.channel.send("give me the channel id now !");        
            message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
            .then(collected => {
                var toSetChannel = collected.first();
                var channel = message.guild.channels.find("id", toSetChannel.content);
                if(channel) {
                    message.channel.send("give me the message id now !")
                    var  filter = m => m.author.id === message.author.id
                    message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
                    .then(collected => {
                        var ToSetMessage = collected.first();
                        channel.fetchMessages().then(messages => {
                            var defined =  messages.filter(message => message.id == ToSetMessage.content);
                            var msg = defined.first()
                            if(defined) {
                                message.channel.send("send the emoji now!")
                                message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
                                .then(collected => {
                                    msg.react(collected.first().content)
                                    var rect = collected.first().content
                                    setReactionData(channel, msg, rect, args[1])
                                })
                            } 
                        })
                        .catch(console.error)
                    });
                } else {
                    message.channel.send("sorry i can't find this channel")
                }
            })
        }
    }
})
var setReactionData = function(channel, message, reaction, identify) {
    if(identify == "games") {
        reactForGamesHelp = {
            channel: channel,
            messageId: message.id,
            reaction: reaction
        }
    } else if(identify == "general") {
        reactForGeneralHelp = {
            channel: channel,
            messageId: message.id,
            reaction: reaction
        }
    } else if(identify == "admin") {
        reactForAdminHelp = {
            channel: channel,
            messageId: message.id,
            reaction: reaction
        }
    }
}   

   client.on('message', message => { // Leaked by [ @Fr3on Gamer#9338 ]
	if(message.content.startsWith(prefix + 'move all')) {
	 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
	   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
	if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
	 var author = message.member.voiceChannelID;
	 var m = message.guild.members.filter(m=>m.voiceChannel)
	 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
	 m.setVoiceChannel(author)
	 })
	 message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


	 }
	   });

    client.on('message', message => { // Leaked by [ @Fr3on Gamer#9338 ]
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
        if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("⚠️|`انت لا تمتلك الخاصيه المطلوبة`");
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``للأستخدام اكتب  : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("`لا تستطيع سحب `"+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }
}
});

client.on('message', function(message) { // Leaked by [ @Fr3on Gamer#9338 ]
    if(message.content.startsWith(prefix + 'roll')) {
       var args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

client.on('message', message => { // Leaked by [ @Fr3on Gamer#9338 ]
    if (message.author.bot) return;
    if(message.content == '?mb') {
    const embed = new Discord.RichEmbed()
    .addField(`حالة الأعضاء 🔋`,'-',   true)
.addField(`💚 اونلاين :   ${message.guild.members.filter(m=>m.presence.status == 'online').size}`,'-',   true)
.addField(`❤ مشغول :     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`,'-',   true)
.addField(`💛 خامل :      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}`,'-',   true)
.addField(`🖤 اوفلاين :   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}`,'-',  true)
.addField(`💙   الكل :  ${message.guild.memberCount}`,'-',   true)
         message.channel.send({embed});

    }
  });

client.on("message", message => { // Leaked by [ @Fr3on Gamer#9338 ]
var args = message.content.split(" ").slice(1).join(" ")
if(message.content.startsWith(prefix + 'args')) {
if(!args) return message.reply("please select a slice");
message.channel.send(`let args = message.content.split(" ").slice(${args}).join(" ")`);
}

    if(message.content.startsWith(prefix + "server")) { // Leaked by [ @M3a4x ]
    	var verificationLevels = ['1', '2', '3', '4', '5']
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Sorry, But you need `Manage Server` prermission for this");
        const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("BLACK")
        .addField(":id: **Server ID**:", message.guild.id, true)

        .addField(":calendar: **Created On**", `${message.guild.createdAt.toLocaleString()} \n ${moment(message.guild.createdAt).fromNow()}`,true)

        .addField(":crown: **Owned by**:", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator} [${message.guild.owner.user.id}]`, true)

        .addField(`:speech_balloon: **Channels** [${message.guild.channels.size}]:`, ` Voice [${message.guild.channels.filter(m => m.type === 'voice').size}] | Text [${message.guild.channels.filter(m => m.type === 'text').size}] | Category [${message.guild.channels.filter(m => m.type == 'category').size}]`,true)

        .addField(`:busts_in_silhouette: **Members** [${message.guild.memberCount}]: `, `Online [${message.guild.members.filter(m => m.presence.status != 'offline').size}] | Offline [${message.guild.members.filter(m => m.presence.status === 'offline').size}]`, true)

        .addField(`:closed_lock_with_key: **Roles**: `, `[${message.guild.roles.size}]`, true)

        .addField(`:earth_africa: **Others:** `, `**Region:** ${message.guild.region} \n **Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`, true)

        message.channel.send({embed:embed})
    }
})


client.on("message", message => { // Leaked by [ @Fr3on Gamer#9338 ]

    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** اكتب اسم سكنك . **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });



client.login(process.env.BOT_TOKEN);
