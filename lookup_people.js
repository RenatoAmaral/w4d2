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
    const rows = result.rows;

    if (err) {
      return console.log('Something went wrong:', err)
    }

    console.log("Searching...");
    console.log(`Found ${rows.length} person(s) by the name '${process.argv[2]}':`);

    for(let row in rows ){
      let r = rows[row];
      console.log(`- ${r.id}: ${r.first_name} ${r.last_name}, born '${r.birthdate.toLocaleDateString()}'`);
    }

  client.end(); // Closes the connection and exits the app

  })
});



