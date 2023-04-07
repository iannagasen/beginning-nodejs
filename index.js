import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

/** This mounts the `bodyParser.json()` middleware to the `app`
 *  Any incoming requests that have a JSON payload in the request body will have the JSON data parsed
 *    and accessinle on the `req.body` property in subsequent middleware functions or route handlers
 *
 *  Basically it parses the raw request data to a valid JSON data
 */
app.use(bodyParser.json());

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
