'use strict';
const commentservice = require('../services/comments');

class CommentController {
    static async createComment(req, res) {
        try {
            const { name, content } = req.body;
            if(!name || !content) {
                res.json({
                    message: 'No empty field is allowed.'
                });
            }
            else {
                const data = req.body;
                let postId = req.params.postId;
                const info = await commentservice.createComment(data);
                info.postId = postId;
                await  info.save();
                return res.json({
                    info:info
                })
            }
        } catch (error) {
            throw error;
        }
    }

    static async Comments(req, res) {
        try {
            const info = await commentservice.getAllComments();
            if(!info) {
                return res.json({
                    message: "No comment founds"
                });
            }
            return res.json({
                info: info
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CommentController;