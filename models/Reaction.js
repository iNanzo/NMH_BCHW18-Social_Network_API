const { Schema, Types } = require("mongoose");
const getDate =  require("../utils/date.js"); 


const reactionSchema = new Schema(
  {
    reactionId:
    {
        Type: Types.ObjectId,
    },
    reactionBody:
    {
        type: String,
        required: true,
        maxlength: 280,
    },
    username:
    {
        type: String,
        required: true,
    },
    postDate:
    {
        type: Date,
        default: Date.now,
        get: getDate.formatDate,
    },
  },
  {
      toJSON: { getters: true }
  },
  {
      id: false,
  },
);

module.exports = reactionSchema;