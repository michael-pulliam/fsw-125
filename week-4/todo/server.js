const express = require('express');
const app = express();
const todoRouter = require('./routes/todoRoutes');
const PORT = 3000;
app.use(express.json());
app.use('/todoRoutes', todoRouter);
app.listen(PORT, () => {
    console.log('app running PORT 3000')
})