import type { TextChannel } from "discord.js";
import { client } from "./client";

export const dataMsg = await ((await client.channels.fetch(process.env.guild)) as TextChannel).messages.fetch(process.env.channel)
export const data = JSON.parse(await (await fetch([...dataMsg.attachments.values()][0].url)).text())
export const saveData = async () => await dataMsg.edit({
    "files": [
        {
            "attachment": Buffer.from(JSON.stringify(data), "utf8"),
            "name": "data.json"
        }
    ]
})
