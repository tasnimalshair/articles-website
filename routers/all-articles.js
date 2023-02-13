const express = require('express')
const router = express.Router()
const articleController = require('../controllers/articleController');

// PATH starts with => /all-articles

// GET ALL
router.get("/", articleController.article_index_get);

// POST 

router.post('/', articleController.article_post);

// GET BY ID
router.get('/:id', articleController.article_details_get);

// DELETE
router.delete('/:id', articleController.article_delete)

module.exports = router