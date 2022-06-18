import mongoose from 'mongoose';

const Simple = new mongoose.Schema({
  message: { type: String, required: true }
});

export default mongoose.model('data', Simple);
