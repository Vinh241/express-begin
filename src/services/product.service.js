const connection = require('../dbs/config.database');

class ProductService {
    static getAllProduct = () => {
        var sql = "SELECT * FROM product";
        return  connection.execute(sql).then(([rows,fieldData])=>{
            return rows;
        })
        // return new Promise((resolve, reject) => {
        //     connection.query(sql, (err, result) => {
        //         if (err) reject(err);
        //         else resolve(result);
        //     })
        // })
    }
    static postProduct = async (id,thumbnail,price,title,quantity,CategoryId)=>{
        var sql = "INSERT INTO product (id,thumbnail,price,title,quantity,CategoryId) VALUES (?,?,?,?,?,?)"
        var value = [id,thumbnail,price,title,quantity,CategoryId];
        return connection.execute(sql,value)
    }
}

module.exports = { ProductService }