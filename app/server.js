const Router       = require('./lib/router');
const winston      = require('winston');
const Busboy       = require('busboy');
const http         = require('http');
const request      = require('request');
const port         = process.env.ENV_PORT || 8000;
const env          = process.env.NODE_ENV || 'dev';
const ROUTE_MAP    = process.env.ROUTE_MAP || './config/routeMap';
const routeMap     = require(ROUTE_MAP);

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: `./logs/${env}.log` })
  ]
});

const handlePost = (req, res) => {
  const router = new Router(logger, request);
  const busboy = new Busboy({ headers: req.headers });
  let version = "";
  let code = "";

  const writeOutput = (respObject) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(respObject));
  };

  busboy.on('field', (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) => {
    if (fieldname == 'version') {
      version = val;
    } else if (fieldname == 'code') {
      code = val;
    }
  });

  busboy.on('finish', () => {
    router.route({version, code}, routeMap, writeOutput);
  });

  req.pipe(busboy);
};

const router = (req, res) => {
  if (req.method == 'POST') {
    handlePost(req, res);
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Please submit a post with a json payload.');
  }
};

http.createServer(router).listen(port, '0.0.0.0');
console.log(`Server running at http://0.0.0.0:${port}/`);
