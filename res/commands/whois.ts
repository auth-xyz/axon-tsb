import { MessageEmbed } from "discord.js";
import { client } from "../../src/client";
import { commands } from "../../src/collections";

const __wtf__ = {
  name: "whois",
  ownerOnly: false,
  permissions: [""],

  run: (message, args) => {
    const fEmbed = new MessageEmbed()
        .setTitle("User Info")
        .setThumbnail(message.author.displayAvatarURL())
        .addField('Highest Role:', `${message.member.roles.highest.name}`, true)
        .addField('Joined At:', `${message.member.joinedAt.toLocaleString()}`, true)
        .addField('Created At:', `${message.member.user.createdAt.toLocaleString()}`, true)
        .addField('User ID:', `${message.author.id}`, true)

    

    return message.reply({ embeds: [fEmbed], content: `${message.author}` });  },
};

export default __wtf__;
