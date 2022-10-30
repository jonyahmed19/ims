const mongoose = require('mongoose');
const validatorLib = require('validator');
const ObjectId = mongoose.Types.ObjectId();

const schema = mongoose.Schema(
    {
        name: {
            type: String,
            maxLength: 1000,
            required: true,
            trim: true,
            minLength: 20,
        },
        description: {
            type: String,
            maxLength: 2000,
        },
        features: {
            type: String,
            maxLength: 1000,
        },
        unit: {
            type: String,
            required: true,
            enum: {
                values: ['kg', 'litre', 'pcs', 'bag'],
                message: '{VALUES} should be kg/litre/pcs/bag'
            }
        },
        imageURLs: [
            {
                type: String,
                validate: [validatorLib.isURL, 'Image urls should be valid']
            }
        ],
        category: {
            type: String,
            maxLength: 80,
        },
        brand: {
            name: {
                type: String,
                maxLength: 200
            },
            required: true,
            id: {
                type: ObjectId,
                ref: 'Brand'
            }
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)