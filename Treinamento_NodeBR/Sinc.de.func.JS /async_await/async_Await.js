const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

obterUsuario = () => {
        return new Promise(function resolvePromise(resolve, reject) {
            return resolve({
                id: 1,
                nome: 'Luke',
                dataNascimento: new Date()
            })
        })
        
}

obterTelefone = (idUsuario) => {
    return new Promise(function resolvePromise(resolve, reject) {
        return resolve({
        telefone:'998899999',
        ddd:21
        })
    })
}

function obterEndereco (idUsuario, callback) {
    return callback(null, {
        endereco: 'Rua Paulo Nunes',
        numero: 333,
        cep: 32345555,
        bairro: 'Luiz Paulo'
    })
}
main()
async function main() {
    try {
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
            const endereco = resultado[1]
            const telefone = resultado[0]

        console.log(`
            nome: ${usuario.nome},
            telefone: (${telefone.ddd}) ${telefone.telefone},
            endereco: ${endereco.endereco}, ${endereco.numero}
            `)
    } catch(erro0) {
        console.error('erro', erro0)
    }
}

// const usuarioPromise = obterUsuario()

// usuarioPromise
//     .then(function (usuario) {
//         return obterTelefone(usuario.id)
//             .then(function resolverTelefone(result) {
//                 return {
//                     usuario: {
//                     nome: usuario.nome,
//                     id: usuario.id
//                 },
//                 telefone: result
//             }
//         })
//     })
//     .then(function (resultado) {
//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         return endereco.then(function resolverendereco(result) {
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         })
//     })
//     .then(function(resultado) {
//         console.log(`
//             nome: ${resultado.usuario.nome}
//             endereco: ${resultado.endereco.endereco}, ${resultado.endereco.numero}
//             telefone: ${resultado.telefone.ddd} ${resultado.telefone.telefone}`)
// })
//     .catch(function (erro0) {
//         console.error('nao foi possivel obter usuario', erro0)
//     })

// obterUsuario(function resolverUsuario(erro0, usuario) {
//     if (erro0) {
//         console.error('não foi possível obter usuário', erro0)
//         return;
//     }

//     obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
//         if (erro1) {
//             console.error('Não foi possível obter telefone do usuário', erro1)
//             return;
//         }


//         obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
//             if (erro2) {
//                 console.error('Não foi possível obter endereço do usuário', erro2)
//                 return;
//             }

//             console.log(`
//                 nome:${usuario.nome}
//                 endereco: ${endereco.endereco} numero: ${endereco.numero} cep: ${endereco.cep} bairro: ${endereco.bairro}
//                  `)

//         })
//     })
// })
