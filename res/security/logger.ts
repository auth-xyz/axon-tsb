import { client } from "../../src/client";
import { writeFileSync, existsSync } from "fs";
import { Prefix } from "../../config/config.json";

export default class __logger__ {
  public static initialize() {
    client.on("messageCreate", (message) => {
      if (message.author.bot) return;
      if (!message.content.startsWith(Prefix)) return;
      const args = message.content.slice(Prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();

      // Check if file exists or not, if it doesn't create it

      if (!existsSync("./res/security/logs/log.txt")) {
        return writeFileSync("./res/security/logs/log.txt", "", "utf8");
      }

      // Write to file
      writeFileSync(
        "./res/security/logs/log.txt",
        `${message.author.username}#${message.author.discriminator} (${message.author.id}) used command ${command} with arguments ${args}\n`,
        "utf8"
      );
    });
  }
}
