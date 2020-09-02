const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
  // title: {
  //   type: String,
  //   required: true,
  // },
  // description: {
  //   type: String,
  // },
  image: {
    type: Buffer,
  },
});

ImageSchema.methods.toJSON = function () {
  const result = this.toObject();
  delete result.image;
  return result;
};

module.exports = mongoose.model("Image", ImageSchema);
