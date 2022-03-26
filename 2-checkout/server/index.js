require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.json());

app.get('/test', (req, res) => {
  console.log('req.session_id:::', req.session_id);
  res.send();
})

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);


/*----------------------------------*/

// By default, every new visitor to the site gets assigned a unique "session_id". This is stored as a cookie in the client's browser and can be read on every request to the server using req.session_id.

// For testing purposes you can clear the cookie from the broswer — causing the server to generate and assign a new one — by going to Chrome's Dev Tools > Application tab > Storage/Cookies (sidebar) > clicking on the s_id cookie and deleting it.