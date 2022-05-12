'use strict';
const postservice = require('../services/post');

class Post {
    static async createPost(req, res) {
        try {
            const { title, content } = req.body;
            if(!title || !content) {
                res.json({
                    message: 'No empty field is allowed.'
                });
            }
            else {
                const data = req.body;
                const info = await postservice.createPost(data);
                return res.json({
                    info:info
                })
            }
        } catch (error) {
            throw error;
        }
    }

    static async Posts(req, res) {
        try {
            const info = await postservice.getAllPosts();
            return res.json({
                info: info
            });
        } catch (error) {
            throw error;
        }
    }

    static async getPost(req, res) {
        try {
            let postId = req.params.postId;
            const info = await postservice.getPost(postId);
            if(!info) {
                return res.json({
                    message: 'No record found'
                });
            }
            return res.json({
                info: info
            });
        } catch (error) {
            throw error;
        }
    }

    static async updatePost(req, res) {
        try {
            const { postId } = req.params;
            const { title, content, photo } = req.body;
            const info = await postservice.updatePost(postId, req.body);
            if(!info) {
                return res.json({
                    message: 'No record found'
                });
            }
            info.title = info.title || title;
            info.content = info.content || content;
            info.photo = info.photo || photo;
            return res.json({
                info: info
            });
        } catch (error) {
            throw error;
        }
    }

    static async deletePost(req, res) {
        try {
          const { postId } = req.params
          const info = await postservice.deletePost(postId)
          if(info) {
            return res.status(200).json({
              message: 'post deleted',
              info: info
            })
          }
          else{
            return res.status(404).json({
              message: 'Not found'
            });
          }
        } catch (e) {
          console.log(e.message)
          return res.status(500).json({
            error: e.message
          })
        }
      }
}

module.exports = Post;