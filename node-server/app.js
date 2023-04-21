const express = require('express');
const bodyParser = require('body-parser');

const portfolioRouter = require('./routes/portfolio');

const app = express();

app.use(bodyParser.json());

app.use('/api/portfolio', portfolioRouter);




const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});
