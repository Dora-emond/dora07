function handler(m) {
  this.sendContact(m.chat, '6289601145546', this.getName('6282387704390@s.whatsapp.net'), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
