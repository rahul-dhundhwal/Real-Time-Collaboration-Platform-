// This file contains business logic and service functions that interact with the models and handle data processing.

const Document = require('../models/document'); // Assuming a Document model exists
const User = require('../models/user'); // Assuming a User model exists

const createDocument = async (data) => {
    const document = new Document(data);
    return await document.save();
};

const getDocumentById = async (id) => {
    return await Document.findById(id);
};

const updateDocument = async (id, data) => {
    return await Document.findByIdAndUpdate(id, data, { new: true });
};

const deleteDocument = async (id) => {
    return await Document.findByIdAndDelete(id);
};

const getAllDocuments = async () => {
    return await Document.find();
};

module.exports = {
    createDocument,
    getDocumentById,
    updateDocument,
    deleteDocument,
    getAllDocuments,
};