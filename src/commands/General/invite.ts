import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'invite',
            description: 'Awakes the invite link 🌟',
            category: 'general',
            usage: `${client.config.prefix}invite`,
            aliases: ['link']
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        let code = groupInviteCode(jid); await M.reply(`https://chat.whatsapp.com/+${code}`)}
    }

function jid(jid: any) {
    throw new Error('Function not implemented.')
}
function groupInviteCode(jid: (jid: any) => void) {
    throw new Error('Function not implemented.')
}

