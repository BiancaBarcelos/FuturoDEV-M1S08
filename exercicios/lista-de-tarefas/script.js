function addLista() {
    let divInput = document.getElementById('divInput');
    let input = document.getElementById("txtInput");
    let taskText = input.value.trim(); // Remove espaços antes e depois do texto
    let divBtn = document.createElement('div'); // div dos dois botões

    // Valida Campo Vazio e roda o algoritmo
    if (taskText !== "") {
        divInput.classList.remove('erro');
        
        // Criar um novo item de lista
        let listaItem = document.createElement("li");
        listaItem.classList = 'itemLista';
    
        // Adicionar texto da tarefa
        listaItem.textContent = taskText;
    
        // Criação dos botões de ação (concluir e excluir tarefa)
        criaBotaoAcao("../../assets/checklist.png", "completa", listaItem, divBtn);
        criaBotaoAcao("../../assets/lixeira.png", "deleta", listaItem, divBtn);
    
        // Adicionar novo item de lista à lista de tarefas
        document.getElementById("listaTarefa").appendChild(listaItem);
    
        // Limpar campo de entrada após adicionar a tarefa
        input.value = "";
    } else {
        divInput.classList.add('erro');
    }
    
}

// Função para marcar uma tarefa como concluída ou não concluída
function alternaTarefaCompleta(lista) {
    lista.classList.toggle("completa");
}

// Função para excluir uma tarefa
function deletaTarefa(lista) {
    lista.remove();
}

// cria botão de ação 
function criaBotaoAcao(imgSrc, acao, listaItem, divBtn) {
    let criarBtn = document.createElement("button");
    let img = document.createElement("img");
    img.setAttribute('src' , imgSrc)

    criarBtn.appendChild(img);

    if ( acao === 'completa') {
        criarBtn.onclick = function () {
            alternaTarefaCompleta(listaItem);
        };
    }else {
        criarBtn.onclick = function () {
            deletaTarefa(listaItem);
        };
    }

    divBtn.appendChild(criarBtn);
    listaItem.appendChild(divBtn); // adiciona a div com os dois botões dentro do item da lista
}


