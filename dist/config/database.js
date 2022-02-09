"use strict";require('dotenv').config();

module.exports = {
    dialect: 'sqlite',
    storage: './db.sqlite',
   /*  port: process.env.DATA_PORT,
    host: process.env.DATA_HOST,
    username: process.env.DATA_USERNAME,
    password: process.env.DATA_PASSWORD,
    database: process.env.DATA_BASE, */
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    /* dialectOptions: {
      timezone: '-03:00'
    },
    timezone: '-03:00' */
  }


