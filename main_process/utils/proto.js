String.prototype.fileNameFromPath = function () {
    return this.replace(/^.*[\\\/]/, '').slice(0, -4)
}

String.prototype.fileExt = function () {
    return this.slice(0, -4)
}

String.prototype.replaceExt = function (ext) {
    return this.slice(0, -4) + `${ext}`
}