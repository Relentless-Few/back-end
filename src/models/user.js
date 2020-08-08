
import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const UserSchema = new Schema({
    uid: {type: String, required: true },
    displayName: {type: String, trim: true, required: true},
    pat: {type: String, trim: true}
},
{
    collection: 'users'
}
);

UserSchema.plugin(timestamps);

export const User = mongoose.model('User', UserSchema);
export const UserTC = composeWithMongoose(User);