const mongoose = require('mongoose');

const chaptersSchema = new mongoose.Schema({
    courseId: { type: String, required: true }, // Adjusted to camelCase for consistency
    chapterId: { type: Number, required: true },
    content: { type: Object, required: true }, // Use Object to represent JSON
    videoId: { type: String, required: true }
  });
  
mongoose.models = {};
export default mongoose.model('Chapters', chaptersSchema);
  