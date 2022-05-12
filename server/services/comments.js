const model = require('../models')

class CommentService {
    static async createComment(data) {
        try {
            const info = await model.Comment.create(data);
            return info;
        } catch (e) {
            throw e;
        }
    }

    static async getAllComments() {
        try {
            const info = await model.Comment.findAll({})
            return info
        } catch (e) {
            throw e
        }       
    }

    static async updateComment(productId, userId, data) {
        try {
            const info = await model.Comment.findOne({ where: {id: productId, userId: userId }})
            if(info){
                const updated = await model.Post.update(data, { where: {id: productId }})
                return updated
            }
            else {
                return null
            }
        } catch (e) {
            throw e 
        }
    }

    static async deletePost(productId, userId) {
        try {
            const info = await model.Comment.findOne({ where: {id: productId, userId: userId}})
            if(info) {
                return await model.Comment.destroy({ where: {id: productId }})
            }
            return null
        } catch (e) {
            throw e 
        }
    }
}

module.exports = CommentService;
