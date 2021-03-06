import express from 'express';
import routes from './src/routes/bibleRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

// using cors
const cors = require('cors');
app.use(cors());

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/faithdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
// app.use(express.static('public'));

app.get('/', (req, res) => 
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);

// using ngrok to make localhost available to others
// const ngrok = require('ngrok');
// ngrok.connect({
//     proto: 'http',
//     addr: process.env.PORT,
// }, (err, url) => {
//     if (err) {
//         console.error('Error while connection Ngrok', err);
//         return new Error('Ngrok Failed');
//     }
// });