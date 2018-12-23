/* O presente projeto tem por finalidade criar um programa que:
1° Obtenha os dados de um usuário
2° Obtenha o numero de telefone e o Id do usuário
3° Obtenha o endereço de usuário pelo Id
*/

obterUsuario = (callback) => {
        
    return callback(null, {
        id: 1,
        nome: 'Luke',
        dataNascimento: new Date()
    })
        
}

obterTelefone = (idUsuario, callback) => {
    return callback(null, {
        telefone:'998899999',
        ddd:21
    })
}

obterEndereco = (idUsuario, callback) => {
    return callback(null, {
        endereco: 'Rua Paulo Nunes',
        numero: 333,
        cep: 32345555,
        bairro: 'Luiz Paulo'
    })
}

obterUsuario(function resolverUsuario(erro0, usuario) {
    if(erro0) {
        console.error('não foi possível obter usuário', erro0)
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
        if(erro1) {
            console.error('Não foi possível obter telefone do usuário', erro1)
            return;
    }


        obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
            if(erro2) {
                console.error('Não foi possível obter endereço do usuário', erro2)
                return;
            }

            console.log(`
                nome:${usuario.nome}
                endereco: ${endereco.endereco} numero: ${endereco.numero} cep: ${endereco.cep} bairro: ${endereco.bairro}
                 `)

        })
    })
})