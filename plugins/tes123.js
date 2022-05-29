import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Nani? (・o・)`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
/*const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: info,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '💌 OFFICIAL GROUP',
                        url: sgc
                    }
                },
                {
                    callButton: {
                        displayText: '📞 Add me',
                        phoneNumber: nomorown
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '🗒️MENU',
                        id: '.menu'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '📊PING',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '💰DONASI',
                        id: '.donasi'
                    }
                },
            ]
        }
        return await conn.sendMessage(m.chat, message)*/
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Yaw? ada apa kak?', sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

export default handler