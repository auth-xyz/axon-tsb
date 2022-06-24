import { password, Prefix } from "../config/config.json";
import { client } from "./client";
import __logger__ from "../res/security/logger";
import __events__ from "./events";

export default class __client_class__ {
  public static async initialize() {
    await __events__.initialize();
    //await __logger__.initialize();

    client.login(password);
  }
}
