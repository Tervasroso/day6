const db = require("../database");

const customer = {
  getById: function (id, callback) {
    return db.query(
      "select * from customer where id_customer=?",
      [id],
      callback
    );
  },
  getAll: function (callback) {
    return db.query("select * from customer", callback);
  },
  add: function (customer, callback) {
    return db.query(
      "insert into customer (fname,lname,streetaddress) values(?,?,?)",
      [customer.fname, customer.lname, customer.streetaddress],
      callback
    );
  },
  delete: function (id, callback) {
    return db.query("delete from customer where id_customer=?", [id], callback);
  },
  update: function (id, customer, callback) {
    return db.query(
      "update customer set fname=?,lname=?, streetaddress=? where id_customer=?",
      [customer.fname, customer.lname, customer.streetaddress, id],
      callback
    );
  },
};
module.exports = customer;
