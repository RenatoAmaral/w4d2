exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('milestones', function(table){
      table.increments('id').primary();
      table.string('description');
      table.date('date_achieved');

    }).then(function () {
        console.log('Users Table is Created!');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
  ])
};
