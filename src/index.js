const express = require('express');
const usersRoutes = require('./routes/users.js');
const app = express();

app.listen(3000, () => {
    console.log("Server start at port 3000");
})

app.use('/users', usersRoutes);

app.get("/", (req, res) => {
    res.json({
        "id": '01',
        "name": "Enjang Setiawan"
    });
});

app.post("/", (req, res) => {
    res.send('Hello Post Index');
});