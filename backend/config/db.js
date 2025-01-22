const mysql = require('mysql2/promise')
require('dotenv').config({path: '../.env'})

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// const testConnection = async () => {
//     try {
//         const [rows] = await pool.query('SELECT 1')
//         console.log('Conexão com o banco de dados bem-sucedida!')
//     } catch (error) {
//         console.error('Erro ao conecta com o banco de dados:', error.message)
//     }
// }

// testConnection()

module.exports = pool