// Get the client
import mysql, { type RowDataPacket } from 'mysql2/promise';
import express from 'express';
import type { Connection } from 'mysql2';

const app = express()

app.get("/pessoas", async (req, res) => {
  let connection: Connection | null = null
  // Create the connection to database
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'luademel',
    });

    // Using placeholders

    // const result = 
    //   await connection
    //   .execute('INSERT INTO pessoa (id,nome) VALUES (?,?)',[3,"Maria"])
    // console.log(result)

    const [dados, campos] = await connection.execute<IPessoa[]>('SELECT * FROM pessoa')
    console.log(dados[0]);
    res.status(200).json(dados)

  } catch (err) {
    //TODO:
    console.log(err);
    if (connection) {
      await (connection as Connection).end();
    }
  }
  // Close the connection
  res.send('olá')
})
app.post("/pessoas", (req, res) => {
  //Per as informações do usuário => REQ.body
  //condectar com o banco
  //inserir
  //Retornar al que indique que deu certo
 })
app.listen(8000, () => {
  console.log("Iniciando o servidor na porta 8000")
})



interface IPessoa extends RowDataPacket {
  id: number,
  nome: string,
}

