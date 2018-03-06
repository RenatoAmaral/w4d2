const pg = require('pg');

// Create a config to keep logging info safe
const config = require('./settings')

// Instantiate a new client
const client = new pg.Client(config);


//  passed the client down to a modules.
const famousePeople = require('./famouse-people')(client)


// connect to our database


client.connect((err) => {
  if (err) {
    return console.log('Something went wrong:', err)
  }

  // Using the function defined inside the artists module.
  famousePeople.findByName(process.argv[2], (err, result) => {
    if (err) {
      return console.log('Something went wrong:', err)
    }
    console.log("Searching...");
    const rows = result.rows;
    console.log(`Found ${rows.length} person(s) by the name '${process.argv[2]}':\n - ${rows[0].id}: ${rows[0].first_name} ${rows[0].last_name}, born '${rows[0].birthdate.toLocaleDateString()}'`);
    client.end(); // Closes the connection and exits the app
  });

});