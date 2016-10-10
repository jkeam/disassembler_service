const chai    = require("chai");
const expect  = chai.expect;
const spies   = require('chai-spies');
const request = require('request');
chai.use(spies);

// use null logger
const winston = require('winston');
const logger  = new (winston.Logger)({
  transports: []
});

const Router = require("../app/lib/router");

describe("Router", function() {
  let post;
  let router;

  beforeEach(function() {
    post = chai.spy(request.post);
    router = new Router(logger, {post});
  });
 
  it("can route", function(done) {
    const routeMap = {
      'exampleOne': 'http://exampleOne:8881',
      'exampleTwo': 'http://exampleTwo:8882'
    };

    router.route({version: 'exampleOne', code: 'some_code'}, routeMap, (body) => {
      expect(post).to.have.been.called.with({
        url: 'http://exampleOne:8881',
        form: {code: 'some_code'}
      });
      done();
    });
  });

});
