/// <reference path="./global.d.ts" />
'use strict';

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
  const movies = await app.platformatic.entities.movie.find();
  console.log(movies);
};
