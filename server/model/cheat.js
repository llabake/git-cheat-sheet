import { Schema, model } from 'mongoose';

const CheatSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  header: {
    type: String,
    trim: true,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
  },
  commands: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
  },
  keywords: [String]
});

export default model('Cheat', CheatSchema);
