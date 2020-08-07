
import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const UserSchema = new Schema({
    name: {type: String, trim: true, required: true},
    email: {type: String, lowercase: true, trim: true, unique: true, required: true},
    gAPI: { type: String, trim: true, required: true},
    organizationID: {type: Number, trim: true},
},
{
    collection: 'users'
}
);

UserSchema.plugin(timestamps);

export const User = mongoose.model('User', UserSchema);
export const UserTC = composeWithMongoose(User);