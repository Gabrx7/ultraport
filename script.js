function comecar(){
    
}

function boasvindas(){
    document.location.href = ('inicio.html')
    var nome = document.getElementById('nome')
    var apre = document.getElementById('apre')

    var agora = new Date()
    var hr = agora.getHours()

    if (hr >= 6 && hr < 12){
        var hr = ('bom dia!')
    } else if ( hr >= 12 && hr < 18){
        var h2 = ('boa tarde!')
    } else if ( hr >= 18 && hr < 24) {
        var hr = ('boa noite!')
    } else {
        var hr = ('boa madrugada!')
    }

    var nome = (nome.value)
    apre.innerHTML=(`Olaa ${nome}, ${hr} Seja vem vindo ao meu site! `)         
}
    function mEntrar0(){
        var linha = document.getElementById('risco0')
        linha.style.transition = '0.2s'
        linha.style.background = '#ffff00'
    }

    function mSair0(){
        var linha = document.getElementById('risco0')
        linha.style.background = '#000'
    }

    function mEntrar1(){
        var linha = document.getElementById('risco1')
        linha.style.transition = '0.2s'
        linha.style.background = '#ffff00'
    }

    function mSair1(){
        var linha = document.getElementById('risco1')
        linha.style.background = '#000'
    }


    function mEntrar2(){
        var linha = document.getElementById('risco2')
        linha.style.transition = '0.2s'
        linha.style.background = '#ffff00'
    }

    function mSair2(){
        var linha = document.getElementById('risco2')
        linha.style.background = '#000'
    }

    function mEntrar3(){
        var linha = document.getElementById('img3')
        linha.style.transition = '0.5s'
        linha.style.border = '4px solid #ffff00'
    }


    function mSair3(){
        var linha = document.getElementById('img3')
        linha.style.border = '4px solid #000'
    }

    function mEntrar4(){
        var linha = document.getElementById('risco4')
        linha.style.transition = '0.2s'
        linha.style.background = '#ffff00'
    }

    function mSair4(){
        var linha = document.getElementById('risco4')
        linha.style.background = '#000'
    }

    function mEntrarzap(){
        var linha = document.getElementById('whatsapp')
        linha.innerHTML = (`44 9 9761-9331`)
    }