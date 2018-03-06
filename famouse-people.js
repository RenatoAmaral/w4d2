// This module returns a function that receives the database connection
// inside the `client` argument
module.exports = function(client) {


  const findByName = function(name, callback) {
    const query = "SELECT * from famous_people WHERE last_name = $1 " ;
    client.query(query, [name], callback);
  }
  // The return value of the function becomes the return value of the module.
  return {
    findByName
   }

}