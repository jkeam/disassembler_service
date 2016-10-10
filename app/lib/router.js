
class Router {

  constructor(newLogger, request) {
    this.logger = newLogger;
    this.request = request;
  }

  //opt: {version, code}
  route(opt, routeMap, done) {
    const url = routeMap[opt.version];
    this.logger.log(`Calling ${url} for ${opt.version}`);

    this.request.post({
      url: url,
      form: {code: opt.code}
    }, (err, httpResponse, body) => {
      done(body);
    });

  }

}

module.exports = Router;
