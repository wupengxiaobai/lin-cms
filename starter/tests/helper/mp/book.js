/**
 * mpBook 帮助
 */
require('../initial');
const {
    db
} = require('lin-mizar/lin/db');
const {
    mpBook
} = require('../../../app/models/mp/book');

const run = async () => {
    await mpBook.bulkCreate([{
            title: '深入理解计算机系统',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言2',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言3',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言4',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言5',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言2',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言3',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言4',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言5',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言2',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言3',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言4',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言5',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言2',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言3',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言4',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言5',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言2',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言3',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言4',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言5',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言2',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言3',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言4',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言5',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言2',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言3',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言4',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言5',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言2',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言3',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言4',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言5',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言2',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言3',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言4',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言5',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言2',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言3',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言4',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言5',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言2',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖2',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '深入理解计算机系统3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言3',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖3',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言4',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖4',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: '深入理解计算机系统5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
        {
            title: 'C程序设计语言5',
            author: '（美）Brian W. Kernighan',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
            fav_nums: 999
        },
        {
            title: '偶买噶5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        }, {
            title: '新盖中盖5',
            author: 'Randal E.Bryant',
            like_status: 0,
            image: 'https://img3.doubanio.com/lpic/s1470003.jpg',
            fav_nums: 999
        },
    ]);
    db.close();
};

run();