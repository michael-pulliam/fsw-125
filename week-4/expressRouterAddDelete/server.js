const express = require('express');
const app = express();
const inTakeRouter = require('./routes/itemsIntake');
const PORT = 3000;
app.use(express.json());
app.use('/itemsIntake', inTakeRouter);
app.listen(PORT, () => {
    console.log('app running PORT 3000')
})