const express = require('express');
const res = require('express/lib/response');
const app = express();
const recycleRouter = require('./routes/recycleRoute');
const PORT = 9000;

//middleware
app.use(express.json());
app.use('/list', recycleRouter);

//error
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({ errMsg: err.message})
});

app.listen(PORT, () => {
    console.log('app running PORT 9000')
})