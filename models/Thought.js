const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: "Please Enter Reaction",
      maxlength: 280
    },
    username: {
      type: String,
      required: " Please Enter Username",
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

const ThoughtSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    thoughtText: {
      type: String,
      required: "Please enter thoughts in form of text",
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
    id: false
  }
);

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;