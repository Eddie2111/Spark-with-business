import mongoose from 'mongoose';

    const userSchema = new mongoose.Schema({
    serial: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    companyName: { type: String, default: ' ' },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    companyDescription: { type: String, default: ' ' },
    companyAddress: { type: String, default: ' ' },
    companyWebsite: { type: String, unique: true, default: ' ' },
    companyEmail: { type: String, unique: true, default: ' ' },
    profilePicture: { type: String, default: ' ' },
    coverImage: { type: String, default: ' ' },
    featuredImages: [{ type: String }],
    linkedin: { type: String, unique: true, default: ' ' },
    facebook: { type: String, unique: true, default: ' ' },
    twitter: { type: String, unique: true, default: ' ' },
    phone: { type: String, unique: true, default: ' ' },
    loginLocation: [{ type: String }]
    }, { collection: 'Users' });
    

const User = mongoose.model('User', userSchema);

export default User;
