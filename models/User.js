const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema(
  {
    username:
    {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    email:
    {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Please enter a valid E-Mail address."]
    },
    thoughts:
    [{
      type: Schema.Types.ObjectId,
      ref: 'thought',
    }],
    friends:
    [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
  },
  {
    toJSON: 
    {
      getters: true,
      virtuals: true,
    },
  }
);

userSchema.virtual('friendCount').get(function(){
    return this.friends.length
})

const User = model('user', userSchema);
module.exports = User;