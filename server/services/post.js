const model = require('../models')

class PostService {
    static async createPost(data) {
        try {
            const info = await model.Post.create(data);
            return info;
        } catch (e) {
            throw e;
        }
    }

    static async getAllPosts() {
        try {
            const info = await model.Post.findAll(
                {
                    include: [{
                        model: model.Comment,
                        as: 'comments'
                    }],
                    order: [
                        ['createdAt', 'DESC'],
                        [{ model: model.Comment, as: 'comments' }, 'createdAt', 'ASC'],
                    ],
                }
            );
            return info;
        } catch (e) {
            throw e;
        }       
    }

    static async getPost(postId) {
        try {
            const info = await model.Post.findOne(
                {
                    where: { id: postId },
                    include: [{
                        model: model.Comment,
                        as: 'comments'
                    }]
                }
            );
            return info;
        } catch (e) {
            throw e;
        }       
    }

    static async updatePost(postId, data) {
        try {
            const info = await model.Post.findOne({ where: { id: postId }});
            if(info){
                const updated = await model.Post.update(data, { where: {id: postId }})
                return updated;
            }
            else {
                return null
            }
        } catch (e) {
            throw e;
        }
    }

    static async deletePost(postId) {
        try {
            const info = await model.Post.findOne({ where: {id: postId }})
            if(info) {
                return await model.Post.destroy({ where: {id: postId }})
            }
            return null
        } catch (e) {
            throw e 
        }
    }
}

module.exports = PostService
