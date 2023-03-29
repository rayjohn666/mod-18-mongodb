const mongoose = require("mongoose");
const { Schema, model, Types } = require("mongoose");
const dayjs = require('dayjs')

const dateFormat = (timestamp) => {
  return dayjs().format("LLL")
}
// const Thought = model("Thought", thoughtSchema);

const ReactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),

    },
    reactionBody:  {
      type: String,
      required: "whats your reaction?",
      maxlenght: 280,
    
    },
    username: {
      type: String,
      required: "Enter you Username."
    },
    createdAt:  {
        type: String,
        default: Date.now,
        get: timestamp => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: "Any of thoughts on that?",
      minlength: 1,
      maxlength: 280,

    },
    createdAt:  {
      type: String,
      default: Date.now,
      get: timestamp => dateFormat(timestamp),
    
    },
    username: {
      type: String,
      required: "Enter you Username."
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thoughts = mongoose.model("Thoughts",thoughtSchema)

module.exports = Thoughts