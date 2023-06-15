import mongoose, { Schema } from "mongoose"

const noteScheme = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
}, { timestamps: true })

export default mongoose.model('note', noteScheme)