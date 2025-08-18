import mongoose from 'mongoose';

const FaqSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const FaqModel = mongoose.models.faq || mongoose.model('faq', FaqSchema);
export default FaqModel;