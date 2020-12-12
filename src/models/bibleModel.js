import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const VerseSchema = new Schema({
    title: {
        type: String,
        required: 'Enter Chapter and Verse'
    },
    message: {
        type: String,
        required: 'Enter the content'
    },
    version: {
        type: String
    },
    testament: {
        type: String
    },
    status: {
        type: String,
        default: 'No'
    }
});