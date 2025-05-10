import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';

import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import routes from "./api/routes"

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 4000;

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api', routes);

// Set up Apollo Server
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
});

apolloServer.start().then(() => {
    apolloServer.applyMiddleware({ app, path: '/graphql' });
    
    // Start server
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
        console.log(`🔗 GraphQL endpoint: http://localhost:${PORT}/graphql`);
        console.log(`📡 REST API: http://localhost:${PORT}/api`);
    });
});
