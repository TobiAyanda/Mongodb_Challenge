const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        user: {type: String, default: ""},
        name: {type: String, default: ""},
        birthday: {type: String, default: ""},
    },
    {
        timestamps: {
            createdAt: "createdOn",
            updatedAt: "updatedOn"
        },
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    }
);

const ProfileModel = mongoose.model("Profile", schema);

module.exports = ProfileModel;