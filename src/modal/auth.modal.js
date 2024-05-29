const mongoose = require("mongoose");

const AuthorizationSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    accessToken: {
      type: String,
    },
    expiresAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

AuthorizationSchema.index({ unique: true });
const Authorization = mongoose.model("Authorization", AuthorizationSchema);

module.exports = Authorization;
