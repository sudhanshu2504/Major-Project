const mongoose = require('mongoose');

const courseListSchema = new mongoose.Schema({
  courseId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  level: { type: String, required: true },
  courseOutput: { type: Object, required: true }, // Use Object to represent JSON
  createdBy: { type: String, required: true },
  username: { type: String },
  userProfileImage: { type: String },
  includeVideo: { type: String, default: 'Yes', required: true },
  courseBanner: { type: String, default: '/placeholder.png' },
  publish: { type: Boolean, default: false }
});
mongoose.models = {};

export default mongoose.model('CourseList', courseListSchema);
