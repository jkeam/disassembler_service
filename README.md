# Disassembler Service

[![Build Status](https://travis-ci.org/jkeam/disassembler_service.svg?branch=master)](https://travis-ci.org/jkeam/disassembler_service)

Service endpoint to disassemble code.

## Setup

### Prereq
Node 1.6 or later

### Install Dep
```
npm install
```

### Test
```
npm test
```

### Start Server
```
npm
npm start
```

## Docker

### Docker
1.  Build image
  ```
  docker build -t jkeam/dissembler-service .
  ```

2.  Run docker
  ```
  docker run -p 8000:8000 -d -e ENV_PORT=8000 -e ROUTE_MAP=./config/javaRouteMap jkeam/dissembler-service
  ```

  or

  ```
  docker run -p 8000:8000 -d -e ENV_PORT=8000 -e ROUTE_MAP=./config/rubyRouteMap jkeam/dissembler-service
  ```
