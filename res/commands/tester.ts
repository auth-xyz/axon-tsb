import { commands } from "../../src/collections";
import { MessageEmbed } from "discord.js";
import * as fs from "fs";
import * as path from "path";

const ascii = fs.readFileSync(
  path.join(__dirname, "../../config/ascii-small.txt"),
  "utf8"
);

const __test_command__ = {
  name: "reload",
  ownerOnly: true,
  permissions: ["ADMINISTRATOR"],
  usage: ' \`a-reload\` ',
  description: 'Reloads the existing commands.',

  run: async (message, args) => {
    const keys = Array.from(commands.keys());
    const emb = new MessageEmbed().setDescription(`
\`\`\`
${ascii}

  COMMAND RELOADER

[ ${keys.join(" | ")} ]
- Were reloaded.

\`\`\`
        `);

    return message.reply({ embeds: [emb] });
  },
};

export default __test_command__;
