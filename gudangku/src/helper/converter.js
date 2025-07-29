export const converterUcFirst = (val) => {
    if (typeof val !== 'string' || val.length === 0) {
        var res = val
    } else {
        var res = val.charAt(0).toUpperCase() + val.slice(1)
    }

    return res
}

export const number_format = (number, decimals, dec_point, thousands_sep) => {
    number = number.toFixed(decimals)

    var nstr = number.split('.')
    var x1 = nstr[0]
    var x2 = nstr.length > 1 ? dec_point + nstr[1] : ''
    
    var rgx = /(\d+)(\d{3})/
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + thousands_sep + '$2')
    }
    
    return x1 + x2
}