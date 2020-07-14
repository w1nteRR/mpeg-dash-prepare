const ffmpeg = require('fluent-ffmpeg')

const { converterFolderLocation } = require('../utils/constants')

require('../utils/proto')

const ff = ffmpeg()

function runFfmpeg (inputFile, options, output, onProcessing, onStart) {
    return new Promise (( resolve, reject ) => {
        ff
            .input(inputFile)
            .outputOptions(options)
            .output(output)
            .on('start', () => onStart())
            .on('progress', progress => onProcessing(progress.percent))
            .on('end', () => resolve())
            .on('err', err => reject(err))
            .run()
    })
}

function killFfmpeg (callback) {
    ff.on('error', () => callback())
    ff.kill('SIGINT')
}

function getMetadata (file) {
    return new Promise (( resolve, reject ) => {
        ffmpeg.ffprobe(file, (err, metadata) => {
            if(err) reject(err)
            resolve(metadata)
        })
    })
}

function initConvertingConfig (fileData) {
    const { file, streamNum, lang, subType, type } = fileData

    const fileName = file.fileNameFromPath()

    const audio = {
        options: [`-map 0:${streamNum}`, '-ac 2', '-ab 192k', '-vn', '-sn'],
        outputPath: `${converterFolderLocation}/${fileName}`,
        outputFile: `${fileName}_${lang}_${streamNum}.aac`.toLowerCase(),
    }
    const subtitles = {
        options: [`-map 0:${streamNum}`, '-vn', '-an'],
        outputPath: `${converterFolderLocation}/${fileName}`,
        outputFile: `${fileName}_${lang}_${subType}_${streamNum}.vtt`.toLowerCase(),
    }

    switch(type) {
        case 'getAudio':
            return audio
        case 'getSubtitles':
            return subtitles
        default: 
            throw new Error('No file type')
    }
}

module.exports = {
    runFfmpeg,
    getMetadata,
    initConvertingConfig,
    killFfmpeg
}