
export async function up(knex) {
  return knex.schema.createTable('ratings', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id').onDelete('CASCADE')
    table.integer('spam_id').references('spam.id').onDelete('CASCADE')
    table.integer('rating')
    // Each user can only rate spam once: 
    table.unique(['user_id', 'spam_id'])
  })
}

export async function down(knex) {
  return knex.schema.dropTable('ratings')
}
