const service = require('./service')

async function main() {
    try {
        const result = await service.obterPessoas('a')
        const names = []
        for (let i = 0; i<= result.results.lenght -1; i++){
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.log('names',names)
    }catch (erro0) {
        console.error('erro interno', erro0)
    }
}

main()