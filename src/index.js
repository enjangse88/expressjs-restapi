require('dotenv').config();
const PORT = process.env.PORT || 4000;
const express = require('express');
const usersRoutes = require('./routes/users.js');
const middlewareLogRequests = require('./middleware/logs.js');



const app = express();

app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server start at port ${PORT}`);
})

app.use(middlewareLogRequests);

app.use('/users', usersRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Gundam Payment"
    });
});

/*app.post("/", (req, res) => {
    res.send('Hello Post Index');
});*/