//1- Funcao que recebe nome completo e devolve para abnt Ex Antonio Augusto Ribeiro Pedroza --- Pedroza, Antonio A R
// abnt ultimo nome, primeiro + sigla do outros

function abntParser(name){
    const nameArray = name.split(' ')
    const firstName = nameArray[0]
    const lastName = nameArray[nameArray.length-1]
    let abrev =''

    nameArray.map((name,index)=>{
        if(index != 0 && index != nameArray.length-1){
            
            abrev =abrev + ' ' + getSigla(name)
        }
    })
    const result = lastName + ', ' + firstName + abrev
    return result
}

//função auxiliar

const getSigla = (string) => {
    return string.charAt(0)
}

function show(){
    event.preventDefault()
    var screen = document.querySelector('textarea')
    var [nome] = document.querySelectorAll('input')
    screen.innerHTML  = abntParser(nome.value)
    return false
}