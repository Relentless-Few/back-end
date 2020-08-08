import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.Promise = global.Promise;

const connection = mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.wgs7j.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, {
    autoIndex: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 50,
    bufferMaxEntries: 0,
    keepAlive: 120,
    useNewUrlParser: true,
});

mongoose.set('useCreateIndex', true);

connection
    .then(db => db)
    .catch(err => {
        console.log(err);
    });

export default connection;