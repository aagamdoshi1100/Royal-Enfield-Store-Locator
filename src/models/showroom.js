const mongoose = require("mongoose");

const showroomSchema = new mongoose.Schema({
  state: String,
  cities: Object,
});

export default mongoose.models.showroom ||
  mongoose.model("showroom", showroomSchema);
