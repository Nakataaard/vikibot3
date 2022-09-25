let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa1:* 6289696764138
│┝‷✧ *Dana:* 6289696764138
│┝‷✧ *Pulsa2:* 6283131853217
│┝‷✧ *Gopay:* 6289696764138
│┝‷✧ *Ovo:* 6289696764138
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6289696764138?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
