/**
 * miniPro的书籍接口
 */
const {
    LinRouter
} = require("lin-mizar");

//  自定义未找到err子类
const {
    mpBookNotFount
} = require('../../libs/err-code')

// book 模型
const {
    mpBook
} = require("../../models/mp/book");

const {
    getSafeParamId
} = require("../../libs/util");

const {
    MpBookSearchValidator
} = require("../../validators/mp/book")



const mpBookApi = new LinRouter({
    prefix: "/mpv1/book"
});


/**
 * 获取所有书籍
 */
mpBookApi.get("/", async ctx => {
    const book = await mpBook.findAll()
    if (book.length < 1) {
        throw new mpBookNotFount({
            msg: '没有任何书籍数据'
        })
    }
    ctx.json(book)
})

/**
 * 根据id获取一条book数据
 */
mpBookApi.get("/:id", async ctx => {
    const id = getSafeParamId(ctx);
    const book = await mpBook.findOne({
        where: {
            id,
            delete_time: null
        }
    })
    ctx.json(book);
});


/**
 * 根据参数进行模糊查询 (validators/mp/book)
 */
const {
    Op
} = require('sequelize')
mpBookApi.get("/search/one", async ctx => {
    const v = await new MpBookSearchValidator().validate(ctx);
    const book = await mpBook.findOne({
        where: {
            title: {
                [Op.like]: `%${v.get("query.q")}%`
            },
            delete_time: null
        }
    });
    if (!book) {
        throw new mpBookNotFount({
            errorCode: 999,
            msg: "没有找到相关书籍"
        });
    }
    ctx.json(book);
});

module.exports = {
    mpBookApi
}