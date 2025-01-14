// This file exports controller functions that handle requests and responses for various routes.

const UserController = require('./userController');
const DocumentController = require('./documentController');
const ChatController = require('./chatController');

module.exports = {
    UserController,
    DocumentController,
    ChatController
};