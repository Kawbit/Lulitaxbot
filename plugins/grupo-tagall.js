let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `Lulitaxbot ${pesan}`
let teks = `〔 *${wm}* 〕\n 𝘼 𝙦𝙪𝙚 𝙝𝙤𝙧𝙖 𝙥𝙞𝙚𝙣𝙨𝙖𝙣 𝙖𝙣𝙤𝙩𝙖𝙧𝙨𝙚 𝙘𝙙𝙩𝙫 🔪😃 \n\n ${oi}\n\n *𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨:*\n`
for (let mem of participants) {
teks += ` ⚘🩹 @${mem.id.split('@')[0]}\n`}
teks += `└ @_lulita__16\n\n*<3*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler

