const mongoose = require('mongoose');
const ObjectId  = mongoose.Types.ObjectId();

const validatelib = require('validator')

const schema = mongoose.Schema(
    {
        products: [{
            type: ObjectId,
            ref: "Product"
        }],
        name: {
            type: String,
            maxLength: 100,
            minLength: 5,
            unique: true,
            trim: true,
            required: [true, 'Name shouldn\'t be empty!']
        },
        description: {
            type: String,
            maxLength: 2000,
        },
        email: {
            type: String,
            maxLength: 200,
            minLength: 5,
            trim: true,
            required: [true, 'Email shouldn\'t be empty!'],
            validate:  [validatelib.isEmail, 'Email should be empty!']
        },
        website: {
            type: String,
            maxLength: 400,
            trim: true,
            validate: [validatelib.isURL, 'URL should be empty!']
        },
        location: {
            type: String,
            maxLength: 500
        },
        suppliers: [{
            name: String,
            contactNumber: String,
            id: {
                type: ObjectId,
                ref: "Supplier"
            }
        }],
        status: {
            type: String,
            enum: ['inactive', 'active']
        }
    },
    {
        timestamps: true,
        versionKey: false
    })




const brandSchema = mongoose.model('Brand', schema);
module.exports = brandSchema



