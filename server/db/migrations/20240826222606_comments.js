export const up = function (knex) {
  return knex.schema.createTable('comments', (table) => {
    table.integer('id').primary()
    table.string('user_id').references('users.auth0_id').onDelete('CASCADE')
    table.integer('spam_id').references('spam.id').onDelete('CASCADE')
    table.string('comment_text')
    table.timestamp('created_date', { useTz: true })
  })
}

export const down = function (knex) {
  return knex.schema.dropTable('comments')
}
