if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const dbConnect = require('./database/dbConnect');
const { errorHandler, notFound } = require('./middleware/errorHandler');
const seedDB = require('./seed');

const app = express();

dbConnect();
seedDB();

const allowedOrigins = ['https://atq-crud.vercel.app', 'http://localhost:3000'];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRoutes = require('./routes/auth/authRoutes');
const postRoutes = require('./routes/posts/postRoutes');
const commentsRoutes=require('./routes/comments/commentsRoute')
app.use(authRoutes);
app.use('/api', postRoutes);
app.use('/api',commentsRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
