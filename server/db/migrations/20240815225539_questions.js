export async function up(knex) {
  return knex.schema.createTable('questions', (table) => {
    table.increments('id').primary()
    table.string('question')
    table.string('option_1')
    table.string('option_2')
    table.string('option_3')
    table.string('option_4')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('questions')
}
