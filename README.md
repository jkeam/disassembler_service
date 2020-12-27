# Disassembler Service

[![Build Status](https://travis-ci.org/jkeam/disassembler_service.svg?branch=master)](https://travis-ci.org/jkeam/disassembler_service)

Service endpoint to disassemble code.

## Setup

### Prereq
1. Node v15+
2. yarn 1.22.x+

### Install Dep
```
yarn
```

### Test
```
yarn test
```

### Start Server
```
yarn start
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
