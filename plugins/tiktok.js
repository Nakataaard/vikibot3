let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetch(`https://xteam.xyz/dl/tiktok?url=${args[0]}&APIKEY=bd8acebc873dfe88`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { link_dl1 } = json.result
await conn.sendFile(m.chat, link_dl1, 'tt.mp4', null, m)
}

handler.help = ['tiktok <url>', 'tiktoknowm <url>', 'tt <url>']
handler.tags = ['downloader']
handler.command = /^(tiktok|tiktoknowm|tt)$/i

module.exports = handler
