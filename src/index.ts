let numero:number = 10
let palavra:string = "Algum texto"
let bol: boolean = true

let x:number|string = 10
x = "Guilherme"

const vetor: number[] = [1,2,3,4,5]
vetor[2] = 10
vetor.push(6)
console.log(vetor)
// vetor = [5,6,7,8,9]

// Vetor de string

let vetorString:string[] = ["a","b","ab"]

type Pessoa={
    id?:number,
    nome:string,
    idade:number
}
const pessoa:Pessoa ={
    id:1,
    nome:"Guilherme",
    idade:18
}
const pessoa2:Pessoa ={
    id:1,
    nome:"Guilherme",
    idade:18
}
pessoa.nome ="Terezinho"


const cloudVoadora = []

const batataVoadora:undefined = undefined


const func =  (nome:string):string=>`${nome} Lindo :3`
func("Tere")

function somaVetor(v:number[]):number{
    const soma = v.reduce((prev,curr)=>prev+curr,0)
    return soma
}
//Corrija o typescript abaixo
function somaVetor2(v:number[]):number{
    let soma = 0
    for (let i = 0; i < v.length; i++) {
        soma = soma + v[i]!
    }
    return soma
}
const result = somaVetor2([1,2,3])
console.log(`O valor de retorno é ${result}`)

//Faça uma função que receba um vetor e devolva a soma
//dos valores pares.

function somaPar(v:number[]):number{
    let soma = 0
    for (let i = 0; i < v.length; i++) {
        if(v[i]!%2==0){
            soma = soma + v[i]!
        }
    }
    return soma
}
console.log(`O valor da somapar é ${somaPar([1,2,3])}`)

//Faça uma função que receba dois vetores e retorne 
//um novo vetor com todos os valores passados.
//Exempo func merge([123],[456]) retorna [1,2,3,4,5,6]




// import express from 'express'

// const app = express()
// app.use(express.json())

// app.get("/",(req,res)=>{
//     res.send("Olá Mundo!")
// })

// app.listen(8000,()=>{
//     console.log("Meu servidor está rodando na porta 8000")
// })