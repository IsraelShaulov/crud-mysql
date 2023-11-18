import express from 'express';
const app = express();
import 'dotenv/config';
import bookRouter from './routes/bookRouter.js';
import cors from 'cors';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json('hello this is the backend');
});

app.use('/books', bookRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
