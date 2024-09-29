import mysql2 from 'mysql2/promise';

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'usuarioLeads',
    password: '12345678',
    database: 'leads_db'
})

export default pool;