const socket = require('socket.io-client')('https://clichat.herokuapp.com/')
const emoji = require('node-emoji')
const chalk = require('chalk')
const repl = require('repl')
const prompt = require('prompt')

// replace the null username with your name.
let username = ''

socket.on('Fuckery', data => {
    console.log(chalk.green( '\n' + data))
})

socket.on('disconnect', (data) => {
    console.log(chalk.red(data))
})

socket.on('incomingMessage', (data) => {
    const { cmd, username } = data
    console.log(chalk.yellow('message: ') + chalk.grey(username + '\t') + chalk.white(cmd.split('\n')[0]))
})

repl.start({
    prompt: '',
    eval: (cmd) => {
        socket.emit('newMessage', { cmd, username })
    }
})






//     const input = () => {

//         try{
//             prompt.start()
//             prompt.get('message', async (err, result) => {
//             await socket.emit('newMessage', result.message)
//             // input()
//             })
            
//         } catch(e){
//             process.exit(1)
//             // console.log(e)
//         }
    
    
// }



