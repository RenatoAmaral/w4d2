  // Import Knex Configuration
const config = require('./knexfile.js')

// Create Knex object using configuration
const knex = require('knex')(config)


// General Select Query

const newfamous = {
      'first_name' : process.argv[2],
      'last_name' : process.argv[3],
      'birthdate' : process.argv[4]
    };

console.log( newfamous)
knex.insert(newfamous).into('famous_people').asCallback(function(err, id) {
        if (err) {
          console.error(err)
          return
        }
        console.log('test',id)


      });






