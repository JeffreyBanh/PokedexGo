// hold for now
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// app.use(cors());

const path = require('path')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');


require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
})

server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log('MongoDB database connection established successfully');
// })


// app.use(require('./routes'));


// app.listen(PORT, () => {
//     console.log(`Express server running on port ${PORT}`);
// });

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);

//get all
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});