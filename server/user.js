// user.js
/**
 * 用户信息
 */
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
	userId : { type: String },
	userName : { type: String },
	password : { type: String },
	realName : { type: String },
	cPhoto : {type: String}
});

module.exports = mongoose.model('User', UserSchema);