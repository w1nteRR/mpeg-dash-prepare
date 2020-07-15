const fs = require('fs')

const { converterFolderLocation } = require('../utils/constants')

require('../utils/proto')

const pattern = {
    video: [],
    audio: [],
    subtitles: []
}

async function preConvertationCheck(file, fileCheck) {

    const dir = file.fileNameFromPath()

    const pathToFolder = `${converterFolderLocation}/${dir}`
	const pathToFile = `${converterFolderLocation}/${dir}/${fileCheck}`

    try {
        if(!fs.existsSync(pathToFolder)) await fs.promises.mkdir(pathToFolder)
	
		if(fs.existsSync(pathToFile)) throw new Error('File exists')

    } catch (err) {
        throw err
    }
}

async function scanExists(file) {
    const dirName = file.fileNameFromPath()

    try {
        
        return await fs.promises.readdir(`${converterFolderLocation}/${dirName}`)

    } catch (err) {
        throw err
    }
}

function initPatterns(file, streams) {

    const fileName = file.fileNameFromPath()
    
    streams.forEach(item => {
        switch(item.codec_type) {
            case 'video':
                return pattern.video.push(`${fileName}_${item.index}.264`)
            case 'audio':
                return pattern.audio.push(`${fileName}_${item.tags.language}_${item.index}.aac`)
            case 'subtitle':
                return pattern.subtitles.push(`${fileName}_${item.tags.language}_${item.tags.title.toLowerCase()}_${item.index}.vtt`)
            default:
                return pattern
        }
    })
}

function getAvailableFiles (dir) {
    const files = {}
    
    for(const [key, value] of Object.entries(pattern)) {
        files[key] = value.filter(file => dir.includes(file))
    }

    return files
}

module.exports = {
    preConvertationCheck,
    scanExists,
    initPatterns,
    getAvailableFiles
}