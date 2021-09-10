import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { IReply } from '../Dev/Message'
import Utils from '../Dev/index'
import WAClient from '../../lib/WAClient'
import BaseCommand from '../../lib/BaseCommand'
import MessageHandler from '../../Handlers/MessageHandler'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'gify',
            description: 'Gets gif according to the Searched term search term!',
            category: 'misc',
            aliases: ['gif'],
            usage: `${client.config.prefix}gify [term]`,
            dm: true,
            baseXp: 30
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        const getGify = async (keyword: string): Promise<string | null> => {
            // Fetching gif json by providing keyword
            const data: { results: IGifyResponse[] } = await Utils.fetch(
                `https://g.tenor.com/v1/search?q=${keyword}&key=LIVDSRZULELA&limit=8`,
                {}
            )
            return data.results?.[Math.floor(Math.random() * data.results.length)]?.media[0]?.mp4?.url
        }
        
         const getGifReply = async (query: string, users?: [string, string]): Promise<IReply> => {
            if (!query) return { body: `Please Provide the query to search for!` }
            const gif = await getGify(query)
            if (!gif) return { body: 'No GIF Found!' }
            const [body, type, mime] = [await Utils.download(gif), MessageType.video, Mimetype.gif]
            return {
                body,
                type,
                mime,
                caption: !users ? `*Query: ${query}*` : `${users[0]} _${Utils.capitalize(query)}ed_ ${users[1]}`
            }
        }
        
        interface IGifyResponse {
            media: {
                mp4: {
                    url: string
                }
            }[]}
        }
    }