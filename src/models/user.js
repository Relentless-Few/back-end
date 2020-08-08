
import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const UserSchema = new Schema({
    uid: {type: String, trim: true, required: true},
    displayName: {type: String, trim: true, required: true},
    email: {type: String, lowercase: true, trim: true, unique: true, required: true},
    apiKey: { type: String, trim: true, required: true},
    organizationID: [{type: Number, trim: true}],
    photoUrl: {type: String, trim: true},
    phoneNumber: {type: String, trim: true},
    lastLoginAt: {type: String, trim: true},
},
{
    collection: 'users'
}
);

UserSchema.plugin(timestamps);

export const User = mongoose.model('User', UserSchema);
export const UserTC = composeWithMongoose(User);