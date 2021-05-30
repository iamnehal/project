import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/posts', postRoutes);


const CONNECTION_URL = 'mongodb://nehalchandra:niku22021998@cluster0-shard-00-00.7kvvz.mongodb.net:27017,cluster0-shard-00-01.7kvvz.mongodb.net:27017,cluster0-shard-00-02.7kvvz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-13r5vz-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT|| 3001;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);