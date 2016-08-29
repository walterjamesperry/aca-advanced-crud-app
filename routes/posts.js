const express = require('express');
const router = express.Router();
const PostsController = require('../controllers/PostsController.js');

// DONE - TODO: Add your routes to the route here.
// DONE - Hint: Don't for get to export it!

/* GET list */
router.get('/', PostsController.list);
/* GET new */
router.get('/new', PostsController.new);
/* GET show */
router.get('/:id', PostsController.show);
/* GET edit */
router.get('/edit/:id', PostsController.edit);
/* POST new */
router.post('/', PostsController.create);
/* PUT update */
router.put('/:id', PostsController.update);
/* DELETE remove */
router.delete('/:id', PostsController.remove);

module.exports = router;
