// importou as configurações
const Database = require('config')

// inicia conexão
Database()

// criando a tabela profile 
// PRIMARY KEY - identificador dos dados que estão sendo requeridos    
// TEXT - O valor é uma string de texto, armazenada usando a codificação do banco de dados (UTF-8, UTF-16BE ou UTF-16LE)          
// INTEGER - O valor é um número inteiro com sinal, armazenado em 1, 2, 3, 4, 6 ou 8 bytes dependendo da magnitude do valor.
// PRIMARY KEY - Uma chave primária é uma coluna ou grupo de colunas usado para identificar a exclusividade das linhas em uma tabela. Cada tabela possui uma e apenas uma chave primária.
// AUTOINCREMENT - responsavel pelo numero nunca mudar 
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