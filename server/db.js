const sqlite3 = require('sqlite3').verbose();
 
// open database in memory
let db = new sqlite3.Database('./mydb', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.serialize( () => {
  db.run("CREATE TABLE if not exists users(name, email, birthday, zipcode)")
  db.run("INSERT INTO users VALUES('Shannon Rhodes', 'shannon.rhodes@disney.com', '4/13/94', '06107')")
})
 
// close the database connection
db.close( ( err ) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});