function verificar(){

    let anoNascimento = document.getElementById('ano');
    let msg = document.getElementById('txt')
    let img = document.getElementById('imagem')

    let idade = 2024 - anoNascimento.value
    let sexoMasc = document.getElementById('masc')
    let sexoFem = document.getElementById('fem')

    if (anoNascimento.value.length == 0 || anoNascimento.value > 2024) {
        window.alert('Verifique os dados e tente novamente')
        
    } else if (sexoMasc.checked && idade < 12 || sexoFem.checked && idade < 12) {
        msg.innerHTML = `Você é uma criança de ${idade} anos`
        img.src = './assets/criança.png'

    } else if (sexoMasc.checked && idade > 12 && idade < 25) {
        msg.innerHTML = `Você é um jovem de ${idade} anos`
        img.src = './assets/jovemM.png'
    } else if (sexoFem.checked && idade > 12 && idade < 25){
        msg.innerHTML = `Você é uma jovem de ${idade} anos`
        img.src = './assets/jovemF.png'
    } else if (sexoMasc.checked && idade >= 25 && idade <= 60){
        msg.innerHTML = `Você é um homem de ${idade} anos`
        img.src = './assets/homem.png'
    } else if (sexoFem.checked && idade >= 25 && idade <= 60){
        msg.innerHTML = `Você é uma mulher de ${idade} anos`
        img.src = './assets/mulher.png'
    } else if (sexoMasc.checked && idade > 60){
        msg.innerHTML = `Você é um senhor de ${idade} anos`
        img.src = './assets/velho.png'
    } else if (sexoFem.checked && idade > 60){
            msg.innerHTML = `Você é uma senhora de ${idade} anos`
            img.src = './assets/velha.png'
    } else {
        msg.innerHTML = "Selecione seu Sexo"
    }
}