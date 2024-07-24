export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('user_name')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users')
}
