const express = require('express');
const app = express();
const recycleRouter = require('./routes/recycleRoute');
const PORT = 9000;
app.use(express.json());
app.use('/list', recycleRouter);
app.listen(PORT, () => {
    console.log('app running PORT 9000')
})