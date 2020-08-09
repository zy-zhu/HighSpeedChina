
let divTyping = document.getElementById('texttitle')
let i = 0,
    timer = 0,
    str = 'Chinese Urbanization and <br>the role of high-speed railway'


function typing() {
    if (i <= str.length) {
        divTyping.innerHTML = str.slice(0, i++) + '_'
        timer = setTimeout(typing, 75)
    }
    else {
        divTyping.innerHTML = str//
        clearTimeout(timer)
    }
}

typing()


