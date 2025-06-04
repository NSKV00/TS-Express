
import app from "./app";
import { AppDataSource } from "./data-source";
//npm run tsc -- --init
// let names:string = "4"
// names = String(10)


// interface Produto {
//     id:number,
//     name:string,
//     price:Price,
//     description:string
// }
// interface Price {
//     total:number,
//     installments: number,
//     installmentsValue: number
// }
// const produtosList:Produto[] = [
//     {
//         id:1,
//         name:"TV",
//         price: {
//             installments:10,
//             installmentsValue:100,
//             total:1000
//         },
//         description:"teste"
//     }
// ]

// function listProdutos(produtos:Produto[]):Produto[] {
//     return produtos
// }
// const list = listProdutos(produtosList)
// console.log(list)
AppDataSource.initialize().then(()=>{
    console.log("database conectado")
     app.listen(3001,()=>{
        console.log("server is running")
     })
}).catch((error)=>{
    console.log(error)
})