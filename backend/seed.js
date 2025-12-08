const pool = require('./models/db');

const seed = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100)
      );
    `);

    await pool.query(`
      INSERT INTO users (name, email) VALUES
      ('Alice', 'alice@example.com'),
      ('Bob', 'bob@example.com');
    `);

    console.log('Database seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
