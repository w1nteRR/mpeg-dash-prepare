const fs = require('fs')

const { converterFolderLocation } = require('../utils/constants')

require('../utils/proto')

const files = [
    {
        video: [],
    },
    {
        audio: [],
    },
    {
        subtitles: []
    }
]


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

function runScanner(file, streams, dir) {

    const fileName = file.fileNameFromPath()
    
    streams.forEach(item => {
        switch(item.codec_type) {
            case 'video':
                return files[0].video.push(`${fileName}_${item.index}.264`)
            case 'audio':
                return files[1].audio.push(`${fileName}_${item.tags.language}_${item.index}.aac`)
            case 'subtitle':
                return files[2].subtitles.push(`${item.index}.ttv`)
            default:
                return files
        }
    })

    return {
        getAvailableFiles: () => files.map(item => ({
            [Object.keys(item)]: Object.values(item)[0].filter(file => dir.includes(file))
        }))
    }
}


module.exports = {
    preConvertationCheck,
    scanExists,
    runScanner
}