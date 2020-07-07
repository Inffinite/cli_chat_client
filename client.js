const socket = require('socket.io-client')('https://clichat.herokuapp.com/')
const emoji = require('node-emoji')
const chalk = require('chalk')
const repl = require('repl')
const prompt = require('prompt')

// replace the null username with your name.
let username = ''

socket.on('Fuckery', data => {
    console.log(chalk.green('[+] A new user has connected.'))
})

socket.on('disconnect', (data) => {
    console.log(chalk.red(data))
})

socket.on('incomingMessage', (data) => {
    const { cmd, username } = data
    console.log(chalk.yellow('\n' + username + '\t') + chalk.white(cmd.split('\n')[0]))
})

repl.start({
    prompt: '',
    eval: (cmd) => {
        socket.emit('newMessage', { cmd, username })
    }
})

