

import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImageUrl: { type: String, default: null },
}, { timestamps: true })



const User = mongoose.model('User', UserSchema);
export default User;