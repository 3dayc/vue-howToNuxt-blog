export default function(d) {
    let _d = undefined
    if(typeof d === 'string' || typeof d === 'number') {
        _d = new Date(d)
    }
    else {
        _d = d
    }

    if(!_d) {
        return ''
    }
    let month = ("00" + (_d.getMonth() + 1)).slice(-2)
    let day = ("00" + (_d.getDate() + 1)).slice(-2)
    let hour = ("00" + (_d.getHours() + 1)).slice(-2)
    let minute = ("00" + (_d.getMinutes() + 1)).slice(-2)
    let second = ("00" + (_d.getSeconds() + 1)).slice(-2)
    let result = `${_d.getFullYear()}-${month}-${day} ${hour}:${minute}:${second}`

    return result
}