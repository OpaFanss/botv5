let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
▧「 *P U L S A* 」
│ 🍀 *Smartfren:* [${global.ppulsa}]
│ 🌸 *Smartfren:* [${global.ppulsa2}]
▧「 *E - M O N E Y* 」
│ 💮 *Dana:* [${global.pdana}]
└──···
`.trim()
  conn.sendButton(m.chat, caption, global.wm, 'https://telegra.ph/file/395e20536473665ab2c5d.jpg', [`Menu`, '.menu'],m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(donasi)$/i

export default handler



	
	





	














