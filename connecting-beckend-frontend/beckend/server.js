// Creating server
import express from 'express';
import cors from 'cors';


const app = express();

// get a list 5 jokes

// app.use(express.static('dist'));
// app.use(cors());
const whitelist = ['http://localhost:5173', 'http://localhost:3001'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback( new Error('Note allowed by CORS'));
        }
    }
}

app.use(cors(corsOptions));

app.get('/api/jokes', (req, res) => {

    const jokes = [
        { id: 1, title: "Joke 1", content: "Why don't scientists trust atoms? Because they make up everything!" },
        { id: 2, title: "Joke 2", content: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
        { id: 3, title: "Joke 3", content: "Why don't skeletons fight each other? They don't have the guts." },
        { id: 4, title: "Joke 4", content: "What do you call fake spaghetti? An impasta!" },
        { id: 5, title: "Joke 5", content: "Why did the bicycle fall over? Because it was two-tired!" }
    ];

    res.json(jokes);
});

app.get('/', (req, res) => {
    res.send('Hello world');

});



const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
})

