export const useConvertation = () => {
    
    const bitrateToTh = bitrate => bitrate / 1000 
    
    const durationToHours = duration => {
        let h = Math.floor(duration / 3600)
        let m = Math.floor(duration % 3600 / 60)
        let s = Math.floor(duration % 3600 % 60)

        return `${h}h ${m}m ${s}s`
    }

    const sizeToGb = bytes => {
        let size = bytes / 1073741824
        return `${size.toFixed(2)}Gb`
    }

    return {
        bitrateToTh,
        durationToHours,
        sizeToGb
    }
}