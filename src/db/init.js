// importou as configurações
const Database = require('config')

// inicia conexão
Database()

// criando a tabela profile 
// PRIMARY KEY                              
Database.exec(`
    CREATE TABLE profile (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        avatar TEXT,
        monthly-budget INT,
        days-per-week INT,
        hours-per-day INT,
        vacation-per-year INT,
        value-hour INT

    )`)

// fecha a conexão com o db
Database.close()