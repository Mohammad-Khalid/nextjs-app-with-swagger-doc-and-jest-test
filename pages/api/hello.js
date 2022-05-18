// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 * @swagger
 * /api/hello:
 *  get:
 *   description: Returns a string 'Hello World'
 *   summary: Returns a string 'Hello World'
 *   responses:
 *    200:
 *      description: A successful response
 *
 */

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
