const fs = require('fs')
//console.log('notes.js')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes ..."
}

const addNote = (title, body) => {
    const notes = loadNotes() 
   // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if(duplicateNote === undefined){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold('Item added successfully'))
    }
    else{
        console.log(chalk.red.bold('Title already exists!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const len = notes.length
    const notesToKeep = notes.filter((note) => note.title !== title)
     if(len>notesToKeep.length){
        console.log(chalk.green.bold(title+ ' removed successfully'))
        saveNotes(notesToKeep)
     }
     else{
         console.log(chalk.red.bold('No Item found!'))
     }
    
}

const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.blue.bold("Your Notes"))
    notes.forEach((note) => console.log(note.title))

}

const readNote = (title) =>{
    const notes = loadNotes();
    const present = notes.find((note) => note.title === title)
    if(present){
        console.log(chalk.blue.bold(present.title))
        console.log(present.body)
    }
    else{
        console.log(chalk.red.bold('No node present with this title!'))
    }
}


module.exports = {
    getNotes: getNotes,
    addNote:  addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}