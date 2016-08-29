// DONE TODO: Add your controller logic here.
const PostModel = require('../models/PostModel.js');

module.exports = {
    /* GET - list - Return a list of all items */
    list: function(req, res) {
        PostModel.find(function(err, posts) {
            res.render('posts.ejs', {
                posts
            });
        });
    },
    /* GET - show - Return a single item based on the ID */
    show: function(req, res) {
        const id = req.params.id;
        PostModel.findOne({
            _id: id
        }, function(err, post) {
            //return res.json(item);
            res.render('post.ejs', {
                post
            });
        });
    },
    /* GET - New Blog post */
    new: function(req, res) {
        PostModel.find(function(err, posts) {
            res.render('post_form.ejs');
        });
    },
    /* Get - prefilled Blog post form */
    edit: function(req, res) {
        const id = req.params.id;
        PostModel.findOne({
            _id: id
        }, function(err, post) {
            res.render('edit_post_form.ejs', {
                post
            });
        });
    },
    /* POST - create - Create a new item */
    create: function(req, res) {
        const author = req.body.author;
        const date = req.body.date;
        const text = req.body.text;
        const model = new PostModel({
            author: author,
            date: date,
            text: text
        });
        model.save(function(err, post) {
            res.redirect('/');
        });
    },
    /* PUT - update - Update a single item based on the ID in the url */
    update: function(req, res) {
        const id = req.params.id;
        PostModel.findOne({
            _id: id
        }, function(err, post) {
              post.author = req.body.author;
              post.date = req.body.date;
              post.text = req.body.text;
            post.save(function(err, post) {
                res.redirect('/');
            });
        });
    },
    /* DELETE - remove - Delete a single item based on the ID in the url */
    remove: function(req, res) {
        var id = req.params.id;
        PostModel.findByIdAndRemove(id, function(err, post) {
            console.log("Deleted");
            res.redirect('/');
        });
    }
};
