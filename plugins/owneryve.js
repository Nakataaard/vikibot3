let handler = function (m) {
	this.sendContact(m.chat, '6289696764138', 'Owner SiestaBotz :)', m)
}

handler.customPrefix = ['🍭Owner SiestaBotz'] 
handler.command = new RegExp

module.exports = handler