const express = require('express');
const app = express();

const portfolioRouter = require('./routes/portfolio');

app.use('/api/portfolio', portfolioRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});
