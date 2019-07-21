// 小程序 book 模型
"use strict";

const {
    InfoCrudMixin
} = require('lin-mizar/lin/interface')
const {
    merge
} = require('lodash')
const {
    Sequelize,
    Model
} = require("sequelize");
const {
    db
} = require("lin-mizar/lin/db");

class mpBook extends Model {
    toJSON() {
        let origin = {
            id: this.id,
            title: this.title,
            author: this.author,
            image: this.image,
            like_status: this.like_status,
            fav_nums: this.fav_nums
        };
        return origin;
    }
}

mpBook.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    author: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    title: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    image: {
        type: Sequelize.STRING(100),
        allowNull: true
    },
    like_status: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    fav_nums: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
}, merge({
        tableName: "mp_book",
        modelName: "mp_book",
        sequelize: db
    },
    InfoCrudMixin.options
))

module.exports = {
    mpBook
}