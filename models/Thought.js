const { Schema, Types, model } = require("mongoose");
const Reaction = require("./Reaction")
const getDate =  require("../utils/date.js"); 


const thoughtSchema = new Schema(
  {
    thoughtText:
    {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 280,
    },
    postDate:
    {
        type: Date,
        default: Date.now,
        get: getDate.formatDate,
    },
    username:
    {
        type: String,
        required: true,
    },
    reactions: [Reaction]
  },
  {
    toJSON: 
    {
        getters: true,
        virtuals: true,
    }
});

thoughtSchema.virtual("reactionCount")
    .get(function () {
        return this.reactions.length;
    });

const Thought = model("Thought", thoughtSchema);
module.exports = Thought;