String.prototype.fileNameFromPath = function () {
    return this.replace(/^.*[\\\/]/, '').slice(0, -4)
}