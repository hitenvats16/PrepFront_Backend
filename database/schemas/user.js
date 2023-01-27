import { Schema } from "mongoose";

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new Schema({
    'email': {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    'password': {
        type: String,
        required: true,
        maxlength: 1000,
        immutable: true
    },
    'full_name': {
        type: String,
        required: true
    },
    'isAdmin':{
        type: Boolean,
        default: false
    },
    'College': {
        type: String,
    }
},{
    timestamps: true,
})

export default UserSchema

