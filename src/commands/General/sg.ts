import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { Sticker } from 'wa-sticker-formatter'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'stickertag',
            description: 'tag group members with a sticker',
            category: 'general',
            usage: `${client.config.prefix}stickertag`,

            adminOnly: true
        })
    }

    run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {
        let buffer = `./assets/images/sg1.jpg`
        parsedArgs.flags.forEach((flag) => (parsedArgs.joined = parsedArgs.joined.replace(flag, '')))
        const pack = parsedArgs.joined.split('|')

        const sticker = new Sticker(buffer, {
            pack: pack[1] || 'STICKER TAG',
            author: pack[2] || 'HIRO BOTTO VOID 👾'
        })
    }
}
