const express = require('express');
const app = express();
const port = 3000;
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');

app.use(indexRouter);

app.listen(port, () => console.info(`App listening on port:${port}`));
