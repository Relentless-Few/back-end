import { SchemaComposer } from 'graphql-compose';
import db from '../utlis/db';
const schemaComposer = new SchemaComposer();
import {UserQuery, UserMutation } from './user';



schemaComposer.Query.addFields({
    ...UserQuery
})

schemaComposer.Mutation.addFields({
    ...UserMutation
})

export default schemaComposer.buildSchema();