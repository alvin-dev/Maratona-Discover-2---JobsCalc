const express = require('express'); // lib para criar o servidor 
const routes = express.Router() // funcionalidade do express para criar as rotas

const profile = {
    name: "Alvaro",
    avatar: "https://github.com/alvin-dev.png",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4,
    "value-hour": 75
}

const views = __dirname + "/views/"
// __dirname é sempre o diretório em que o script atualmente em execução reside. Então, se você digitou __dirname em /d1/d2/myscript.js, o valor seria /d1/d2.

const jobs = [
    {
        id: 1,
        name: "Pizzaria Guloso",
        "daily-hours": 2,
        "total-hours": 1,
        created_at: Date.now()
    },
    {
        id: 2,
        name: "OneTwo Project",
        "daily-hours": 3,
        "total-hours": 47,
        created_at: Date.now()
    }
]




function remainingDays(job) {
    //calculo de tempo restante
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()

    const createdDate = new Date(job.created_at)
    const dueDay = createdDate.getDate() + Number(remainingDays)
    const dueDateInMs = createdDate.setDate(dueDay)

    const timeDiffInMs = dueDateInMs - Date.now()
    
    //trandformar milli em dias
    const dayInMs = 1000 * 60 * 60 * 24
    const dayDiff = Math.floor(timeDiffInMs / dayInMs)
    
    //restam x dias
    return dayDiff 
}


routes.get('/', (req, res) => {

    // mapeia os objetos do jobs e nomeia como job
    const updatedJobs = jobs.map((job) => {

        // ajustes no job
        const remaining = remainingDays(job)
        const status = remaining <= 0 ? 'done' : 'progress'

        return {
            ...job,
            remaining,
            status,
            budget: profile["value-hour"] * job["total-hours"]
        }
    })

    

    return res.render(views + "index", { jobs: updatedJobs })
})














routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', (req, res) => {
    // req.body = { name: 'land page', 'daily-hours': '4', 'total-hours': 

    const jobId = jobs[jobs.length - 1]?.id || 1;

    jobs.push({
        id: lastId + 1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        created_at: Date.now() // atribuindo data de hoje
    })
    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))


module.exports = routes