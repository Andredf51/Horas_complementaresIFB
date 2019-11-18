const Pool = require('pg').Pool
//Quando for fazer a conexão com o banco entrar com as suas credenciais 
const pool = new Pool({
    user: 'postgresql',
    host: 'localhost',
    database: 'banco',
    password: 'password',
    port: 5432,
});
// Testando a conexão com a tabela produtos que foi criada para a view
const getProdutos = (request, response) => {
    pool.query('SELECT * FROM Produtos', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
//Exportando a função
module.exports={
    getProdutos
}