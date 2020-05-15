// 引入第三方模块
const express =require('express');
const mysql =require('mysql');
const cors =require('cors');

const bodyParser = require('body-parser')

// 解析POST提交数据
var urlencodedParser = bodyParser.urlencoded({extended:false})

// 创建web服务器
const server =express();
// 创建mysql连接池
var pool =mysql.createPool({
    // 服务地址
    host:'127.0.0.1',
    // mysql用户名
    user:'root',
    // mysql密码
    password:'',
    // 端口号
    port:3306,
    // 数据库
    database:'teacher_liu',
    // 最大连接数
    connectionLimit:15,
    charset:'utf8'
});
// 启用web服务器且监听4000端口
server.listen(4000);
// 配置跨域
server.use(cors({
    origin:['http://127.0.0.1:8080','http://localhost:8080'],
    credentials:true
}));

// 托管静态资源
server.use(express.static('public'));


// 服务器的get请求
server.get('/',(req,res)=>{
    res.send('OK');
});
// 服务器首页的get请求
server.get('/articles',(req,res)=>{
    // 获取地址栏传递的参数type
    var type=req.query.type;
    var page=req.query.page;
    // 每页显示记录数
    var pagesize = 10;
    // mysql的偏移值
    var offset = (parseInt(page-1))*pagesize;
    var pagecount=0;
    // 计算某个分类下的文章总页数
    var count=`SELECT COUNT(teacher_articles.id) AS count FROM teacher_articles,teacher_kind WHERE kind_id=teacher_kind.id AND kind_info=?`
    pool.query(count,[type],(err,result)=>{
        if(err) throw err;
        pagecount=Math.ceil(result[0].count/pagesize)
        // console.log(pagecount)
    })
    var sql =  `SELECT teacher_articles.id,subject,description,image FROM teacher_articles,teacher_kind WHERE kind_id=teacher_kind.id AND kind_info=? LIMIT ${offset},${pagesize}`
    pool.query(sql,[type],(err,result)=>{
        if(err) throw err;
        res.send({code:1,message:'成功',articles:result,pagecount:pagecount})
    })
    
})

// 指定谋篇文章内容
server.get('/article',(req,res)=>{
    var id=req.query.id;
    console.log(id)
    var sql = `SELECT * FROM teacher_articles WHERE id=?`;
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send({code:1,message:200,article:result[0]})
        // console.log(result)
    })
})
// 服务器课程页大班的get请求
server.get('/timetableLarge',(req,res)=>{
    var large = req.query.large;
    // console.log(large)
    var sql =  `SELECT large_classes_detail.id,course_title,course_time,course_teacher,course_type,course_target FROM large_classes_detail,large_classes WHERE large_classes_id=large_classes.id AND large_classes_info=?`
    pool.query(sql,[large],(err,result)=>{
        if(err) throw err;
        res.send({code:1,message:'成功',large:result})
    })
})
// 服务器课程页中班的get请求
server.get('/timetableMiddle',(req,res)=>{
    var middle = req.query.middle;
    // console.log(middle)
    var sql =  `SELECT middle_classes_detail.id,course_title,course_time,course_teacher,course_type,course_target FROM middle_classes_detail,middle_classes WHERE middle_classes_id=middle_classes.id AND middle_classes_info=?`
    pool.query(sql,[middle],(err,result)=>{
        if(err) throw err;
        res.send({code:1,message:'成功',middle:result})
    })
})
// 服务器课程页小班的get请求
server.get('/timetableSmall',(req,res)=>{
    var small = req.query.small;
    // console.log(small)
    var sql =  `SELECT small_classes_detail.id,course_title,course_time,course_teacher,course_type,course_target FROM small_classes_detail,small_classes WHERE small_classes_id=small_classes.id AND small_classes_info=?`
    pool.query(sql,[small],(err,result)=>{
        if(err) throw err;
        res.send({code:1,message:'成功',small:result})
    })
})
// 指定课程详情
server.get('/classes/large',(req,res)=>{
    var id = req.query.id;
    var type = req.query.type;
    console.log(id,type)
    var sql = `SELECT * FROM ${type}_classes_detail WHERE id=?`
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        // console.log(result)
        res.send({code:1,message:200,detail:result[0]})
    })
})

// 推荐读物
// 1-1.获取推荐新书的get请求
server.get('/books/newbooks',(req,res)=>{
    var sql = 'SELECT * FROM books_newbook'
    pool.query(sql,(err,result)=>{
        res.send({message:'成功',newbooks:result})
    })
})
// 1-2.指定新书的详情get请求
server.get('/books/newbook',(req,res)=>{
    let nid = req.query.nid;
    var sql = 'SELECT * FROM books_newbook WHERE nid=?'
    pool.query(sql,[nid],(err,result)=>{
        res.send({message:'成功',newbook:result})
    })
})

// 2-1.获取绘本+小中大班绘本
// /books/pictures?kind_id=recommend
server.get('/books/pictures',(req,res)=>{
    let kind_id = req.query.kind_id;
    var sql = 'SELECT * FROM picture_books WHERE kind_id=?'
    pool.query(sql,[kind_id],(err,result)=>{
        res.send({message:'成功',pictures:result})
    })
})
// 2-2指定绘本的详情 get请求
// /books/picture?pid=1
// server.get('/books/picture',(req,res)=>{
//     let pid = req.query.pid;
//     var sql = 'SELECT * FROM picture_books WHERE kind_id=?'
//     pool.query(sql,[pid],(err,result)=>{
//         res.send({message:'成功',pictures:result})
//     })
// })

// 3-1.获取大家都在看的get请求
server.get('/books/everyones',(req,res)=>{
    var sql = 'SELECT * FROM everyone_watching'
    pool.query(sql,(err,result)=>{
        res.send({message:'成功',everyones:result})
    })
})
// 3-2指定大家都在看的书的详情 get请求
// /books/everyone?wid=1
// server.get('/books/everyone',(req,res)=>{
//     let wid = req.query.wid;
//     var sql = 'SELECT * FROM picture_books WHERE kind_id=?'
//     pool.query(sql,[wid],(err,result)=>{
//         res.send({message:'成功',pictures:result})
//     })
// })

// 4-1.获取家长用书的get请求
server.get('/books/patriarchs',(req,res)=>{
    var sql = 'SELECT * FROM patriarch_books'
    pool.query(sql,(err,result)=>{
        res.send({message:'成功',patriarchs:result})
    })
})
// 4-2指定家长用书的详情 get请求
// /books/patriarch?pid=1
// server.get('/books/patriarch',(req,res)=>{
//     let pid = req.query.pid;
//     var sql = 'SELECT * FROM picture_books WHERE pid=?'
//     pool.query(sql,[pid],(err,result)=>{
//         res.send({message:'成功',pictures:result})
//     })
// })