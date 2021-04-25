// importou as configurações
const Database = require('./config')

// async - A declaração async function define uma função assíncrona, que retorna um objeto AsyncFunction

// await - "esperar" ele espera algo ser executado para seguir para a proxima. O operador await é utilizado para esperar por uma Promise. Ele pode ser usado apenas dentro de uma async function

const initDb = {
    async init() {
       
        // inicia conexão
        const db = await Database()

        // PRIMARY KEY - identificador dos dados que estão sendo requeridos    
        // TEXT - O valor é uma string de texto, armazenada usando a codificação do banco de dados (UTF-8, UTF-16BE ou UTF-16LE)          
        // INTEGER - O valor é um número inteiro com sinal, armazenado em 1, 2, 3, 4, 6 ou 8 bytes dependendo da magnitude do valor.
        // PRIMARY KEY - Uma chave primária é uma coluna ou grupo de colunas usado para identificar a exclusividade das linhas em uma tabela. Cada tabela possui uma e apenas uma chave primária.
        // AUTOINCREMENT - responsavel pelo numero nunca mudar 

        // criando a tabela profile 
        await db.exec(`
            CREATE TABLE profile (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                avatar TEXT,
                monthly_budget INT,
                days_per_week INT,
                hours_per_day INT,
                vacation_per_year INT,
                value_hour INT
            )`);

        // criando a tabela jobs
        await db.exec(`
            CREATE TABLE jobs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                daily_hours INT,
                total_hours INT,
                created_at DATETIME
            )`)

        // roda um comando no banco de dados
        await db.run(`INSERT INTO profile (
            name,
            avatar,
            monthly_budget,
            days_per_week,
            hours_per_day,
            vacation_per_year,
            value_hour
        ) VALUES (
            "Alvaro",
            "https://github.com/alvin-dev.png",
            3000,
            5,
            5,
            4,
            70
        );`) // OBS: ponto e virgula no final é importante

        await db.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            created_at
        ) VALUES (
            "Pizzaria Guloso",
            2,
            1,
            1618702091479
        );`)

        await db.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            created_at
        ) VALUES (
            "OneTwo Project",
            3,
            47,
            1618702091479
        );`)

        // fecha a conexão com o db
        await db.close()
    }
}

initDb.init()