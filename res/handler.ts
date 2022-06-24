import { MessageEmbed } from "discord.js";
import { commands } from "../src/collections";
import { Owner } from '../config/config.json';



export async function Handler(message: any, command: any, args: any) {
    const embed = new MessageEmbed()
        .setTitle('Permission Denied')
        .setThumbnail(message.author.displayAvatarURL())
        .addField('Reason:', 'This command has the ownerOnly property set to true.',true)
        .addField(`Code:`, `\`{ name: \'${command}\', ownerOnly: true }\``);

    const cmds = commands.get(command);
    if (cmds.default.ownerOnly == true && message.author.id !== Owner) return message.delete().then(() => message.channel.send({ embeds: [embed], content: `${message.author}` }));
    if (!message.member.permissions.has(cmds.default.permissions)) return message.delete().then(() => message.channel.send(`${message.author} You do not have permission to use this command.`));

    if (!cmds) return console.log('This command does not exist');
    


    return await cmds.default.run(message, args);
}
