import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import db from './utlis/db';
import schema from './schema';
require('dotenv').config();

const app = express();

const server = new ApolloServer({
    schema, cors: true, introspection: true, tracing: true, path: '/',
});

server.applyMiddleware({
    app,
    path: '/',
    cors: true,
});

app.listen({ port: process.env.PORT }, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
}); 