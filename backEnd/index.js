const express = require('express');
require ( 'dotenv' ) . config ( );
const commentsRoute = require('./routes/commentsRoute')
const watsonRoute = require('./routes/watsonRoute')
const cors = require('cors');

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(commentsRoute);
app.use(watsonRoute);
app.listen(PORT, ()=>{
    console.log(`ouvindo a porta ${PORT}`);
})