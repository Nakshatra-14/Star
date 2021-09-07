import { MessageType } from '@adiwajshing/baileys'
import jimp from '@oliver-moran/jimp'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'neko',
            description: 'Will provide a random anime Neko images',
            category: 'Weeb',
            usage: `${client.config.prefix}neko`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const rnekol = ['kemonomimi', 'neko', 'fox_girl']
        const rnekolc = rnekol[Math.floor(Math.random() * rnekol.length)]
        const neko = await axios.get('https://nekos.life/api/v2/img/' + rnekolc)

        return void M.reply(
            await request.buffer(neko.data.url),
            MessageType.image,
            undefined,
            undefined,
            `*Nico Nico Ni ~*`
        )
    }
}
