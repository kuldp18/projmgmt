require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const colors = require('colors');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const cors = require('cors');
const app = express();

// Connect to database
connectDB();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.get('/', (req, res) => {
  res.json({ status: 'Working!' });
});

app.listen(port, console.log(`Server running on port ${port}!`));
