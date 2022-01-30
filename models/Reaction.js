const { Schema, Types, model } = require("mongoose");
const dayjs =  require("../utils/date.js"); 

const reactionSchema = new Schema(
  {
    reactionId:
    {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody:
    {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    username:
    {
      type: String,
      required: true,
    },
    date:
    {
      type: Date,
      default: Date.now,
      get: dayjs.dateFormat,
    },
  },
  {
    toJSON: 
    {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

const Reaction = model("reaction", reactionSchema);
module.exports = Reaction;