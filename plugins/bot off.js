let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply(' *𝕺𝖕𝖆𝕱𝖆𝖓𝖘𝖘-𝕭𝖔𝖙 disuruh owner tidur bye semua🥱😴* ')
    // } else m.reply('Ada nomor Ownerku disini...')
}
handler.help = ['opa(on/off)']
handler.tags = ['main']
handler.command = /^(opaoff)$/i

handler.admin = true

export default handler