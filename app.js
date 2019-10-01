// const add = require('./utils.js')
// const sum = add(4,-2)
// console.log(add(4,-2))
//const validator = require('validator')
// const chalk = require('chalk')
const notes = require('./notes.js')
// const msg = getNotes()
// console.log(msg)
// console.log(validator.isURL('gmail.com'))
// const log = console.log
// log(chalk.bold.underline.inverse.blue("Error!"))

// const command = process.argv[2]

// console.log(process.argv)

// if(command==='add')
// {
//     console.log('Adding notes!')
// }
// else if(command==='remove')
// {
//     console.log('Removing notes!')
// }

const yargs = require('yargs')

yargs.version('1.1.0')

// console.log(process.argv)
// console.log(yargs.argv)

// Adding add, remove, list, read commands

// add command

yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true, 
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})



yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
        
    }
})

yargs.command({
    command: 'list',
    describe: 'listing all the notes',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'reading the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'    
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()