const express = require('express');
const router = express.Router();

// Import controller functions
const { createDocument, getDocument, updateDocument, deleteDocument } = require('../controllers/index');

// Define routes
router.post('/documents', createDocument);
router.get('/documents/:id', getDocument);
router.put('/documents/:id', updateDocument);
router.delete('/documents/:id', deleteDocument);

// Export the router
module.exports = router;