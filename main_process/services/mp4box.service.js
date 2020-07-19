const { spawn } = require('child_process')
require('../utils/proto')

const mp4box = 'D:/GPAC/mp4box.exe'  

function repack (file, callback) {
    return new Promise(( resolve, reject ) => {
        const output = file.replaceExt('.mp4')

        const process = spawn(mp4box, ['-add', `${file}`, `${output}`])
        
        process.on('close', code => {
            code === 0
            ?   resolve(code)
            :   reject(code)
        })

        process.stderr.on('data', data => callback(data.toString())) 
    })  
}

module.exports = {
    repack
}