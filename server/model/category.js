import { Schema, model } from 'mongoose';

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    lowercase: true,
  },
  cheats: [{ type: Schema.Types.ObjectId, ref: 'Cheat' }],
});

export default model('Category', CategorySchema);
