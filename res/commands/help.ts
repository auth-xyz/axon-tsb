import { MessageEmbed } from "discord.js";
import { commands } from "../../src/collections";

const _help_=
{
    name: 'help',
    ownerOnly: false,
    permissions: ['READ_MESSAGE_HISTORY'],

    run: (message:any,args:any) => {
        const keys = Array.from( commands.keys() );

        if (!args) {
            const embed = new MessageEmbed()
            .setTitle('Available Commands')
            .setDescription(`${keys.join(', ')}`)
            .setFooter({ text: `Requested by ${message.author.tag}` })

        return message.channel.send({ embeds: [embed] });
        }
    }
}

export default _help_;