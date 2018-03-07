  // Import Knex Configuration
const config = require('./knexfile.js')

// Create Knex object using configuration
const knex = require('knex')(config)


// General Select Query
knex('famous_people').select().where( 'last_name', 'ilike', process.argv[2]).asCallback(function(err, rows) {
  if (err) {
    console.error(err)
    return
  }
  console.log('test',rows)
  console.log("Searching...");
  console.log(`Found ${rows.length} person(s) by the name '${process.argv[2]}':`);
  for(let row in rows ){
    let r = rows[row];
    console.log(`- ${r.id}: ${r.first_name} ${r.last_name}, born '${r.birthdate.toLocaleDateString()}'`);
  }
return
});








