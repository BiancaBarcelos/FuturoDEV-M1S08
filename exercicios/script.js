// exercício 01
function addBgColor(event) {
    event.preventDefault();
    
    let alteracaoBg = document.getElementById('texto');
   
    alteracaoBg.classList.toggle('bgTxt');
}

// exercício 02
function mudarTxt(event){
    event.preventDefault();
    
    let alterandoTxt = document.getElementsByClassName('mudandoTxt');
    
    alterandoTxt[0].innerHTML = 'Daqui a um<span class="alteraEstilo"> ano</span> você vai desejar ter <span class="alteraEstilo">começado hoje</span>.'
    alterandoTxt[1].innerText = '- Karen Lumb'
}

// exercício 03
function addTxtfeitoPor(event) {
    event.preventDefault();
    
    let feitoPorDiv = document.querySelector('div#feitoPor');
    let feitoPorTxt = document.createElement('p');
    let txtNode = document.createTextNode('Produzido na Semana 8 - FuturoDEV [Eco]');
    
    feitoPorTxt.appendChild(txtNode);
    
    if (!feitoPorDiv.hasChildNodes()) {
        
        feitoPorDiv.appendChild(feitoPorTxt);
    }
}


// exercício 04
function removeTxtfeitoPor(event) {
    event.preventDefault();

    let feitoPorDiv = document.querySelector('div#feitoPor');

    if (feitoPorDiv.hasChildNodes()) {
        feitoPorDiv.removeChild(feitoPorDiv.firstElementChild);
    }
}

// exercício 05

function alteraEstilo(event) {
    event.preventDefault();

    let corSpan = document.getElementsByClassName('alteraEstilo');
    let corBtn = document.getElementsByClassName('alteraBgBtn')

    for (let i = 0; i < corSpan.length; i++) {
        const corTxt = corSpan[i];
    
        corTxt.setAttribute('style' , 'color: #FAB405');
    }

    for (let i = 0; i < corBtn.length; i++) {
        const corBg = corBtn[i];
    
        corBg.setAttribute('style' , 'background-color: #FAB405');
    } 
}


// exercício 06

function addClasse(event) {
    event.preventDefault();

    let footer = document.querySelector('footer');
    
    footer.classList.add('linha');
    
}

// exercício 07

function removeClasse(event) {
    event.preventDefault();

    let footer = document.querySelector('footer');
    
    footer.classList.remove('linha');
    
}

// exercício 08

function addAtributo(event) {
    event.preventDefault();

    let footer = document.querySelector('footer');
    
    footer.setAttribute('alt' , 'Linha branca no rodapé da página');
    
}

// exercício 09

function removeAtributo(event) {
    event.preventDefault();

    let footer = document.querySelector('footer');
    
    footer.removeAttribute('alt');
    
}
