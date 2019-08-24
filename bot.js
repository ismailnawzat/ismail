const Discord = require("discord.js")
const client = new Discord.Client();

console.log("Welcome Again !");

client.on('ready', () => {
    client.user.setStatus('idle');
});

client.on("message", message => {
  if (message.content.startsWith("#obc")) {
                              if(!message.channel.guild) return message.reply('**انجب ماعندك برمشن**');
               if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' ');
message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
m.send(`${argresult}\n ${m}`);
})
message.channel.send(`Done Send BroadCast`);
message.delete();
};
});

client.login(process.env.TOKEN);