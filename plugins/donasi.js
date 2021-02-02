let handler = async m => m.reply(`
╭─「 Donasi • Pulsa • Saweria」
│ • Telkomsel [085337396419]
│ • Gopay [085337396419]
│ • Saweria ( https://saweria.co/iMentoz )
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282340533705
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
