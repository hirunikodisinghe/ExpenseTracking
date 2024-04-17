import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        unique: true,

    },


    DriverID: {
        type: Numbers,
        required: true,
        unique: true, 
    },

    TripID: {
        type: Numbers,
        required: true,
        unique: true, 
    },

    Ratings: {
        type: String,
        required: true,
        unique: true,

    },

    Reason: {
        type: String,
        required: true,
        unique: true,

    },

}, {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;
