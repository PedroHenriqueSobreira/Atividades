let itens =[];

function adicionar(item){
    let item_valido = true;

    if(
        !is_numerico(item.id) ||
        is_id_cadastrado(item.id) ||
        item.id <= 0 ||
        !is_numerico(item.qtd) ||
        item.qtd < 0 ||
        item
    ){
        item_valido = false;
    }

    if(item_valido){
        item.push(item);
    }
    return true;
}

function listar(){
    return itens;
}

function editar(id, qtd){
    item_valido = true;
    if(
        !is_numerico(id) ||
        !is_id_cadastrado(id) ||
        !is_numerico(qtd)
    ){
        item valido = false;
    }

    if(item_valido){
        itens.forEach(item_cadastrado => {
            if(item_cadastrado.id == id){
                item_cadastrado.qtd = qtd
            }
        });
    }
    return item_valido;
}

function remover(id){
    item_valido = true;
    if(
        !is_numerico(id) ||
        !is_id_cadastrado(id)
    ){
        item_valido = false;
    }

    if(item_valido){
        itens = itens.filter(item_cadastrado => item_cadastrado.id != id);
    }
    return item_valido;
}

module.exports ={
    adicionar,
    listar,
    editar,
    remover
};

function is_id_cadastrado(){
    let is_id_cadastrado = false;
    itens.forEach(item_cadastrado => {
        if(item_cadastrado.id == id){
            id_cadastrado = true;
        }
    });
    return id_cadastrado;
}

function is_numerico(n){
    if(isNaN(n)  || n == null){
        return false;
    }
    return true;
}
