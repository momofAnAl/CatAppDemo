const express = require('express')
const cors = require('cors')
const app = express();
const PORT = 4000;

app.use(cors());

app.use(express.static(`${__dirname}/public`));

//Routes
app.get('/api/cat/', (req, res) => res.status(200).send('Smelly cat'));
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));