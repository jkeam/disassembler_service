
class Router {

  constructor(newLogger, request) {
    this.logger = newLogger;
    this.request = request;
  }

  //opt: {version, code}
  route(opt, routeMap, done) {
    const url = routeMap[opt.version];
    this.logger.log(`Calling ${url} for ${opt.version}`);

    if (url && opt.code) {
      this.request.post({
        url: url,
        form: {code: opt.code}
      }, (err, httpResponse, body) => {
        done(body);
      });
    } else {
      this.logger.log(`Calling without url or code. url: ${url}, code: ${opt.version}`);
      done({result: 'Invalid specified'});
    }
  }

}

module.exports = Router;
