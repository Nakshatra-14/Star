import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'hi',
            description: 'Well....',
            category: 'misc',
            usage: `${client.config.prefix}hi`,
            dm: true
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void (
            await await request.buffer('https://i.pinimg.com/originals/2d/4e/bf/2d4ebf645d543791d1ca71d4177f4272.jpg'),
                MessageType.image,
                undefined,
                undefined,
            M.reply(`Hello! ${M.sender.username}!`))
    }
}
