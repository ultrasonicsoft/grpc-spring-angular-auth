// package: revinate
// file: proto/demo.proto

var proto_demo_pb = require("../proto/demo_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DemoService = (function () {
  function DemoService() {}
  DemoService.serviceName = "revinate.DemoService";
  return DemoService;
}());

DemoService.Fibonacci = {
  methodName: "Fibonacci",
  service: DemoService,
  requestStream: false,
  responseStream: false,
  requestType: proto_demo_pb.FibonacciRequest,
  responseType: proto_demo_pb.FibonacciResponse
};

DemoService.Factorial = {
  methodName: "Factorial",
  service: DemoService,
  requestStream: false,
  responseStream: false,
  requestType: proto_demo_pb.FactorialRequest,
  responseType: proto_demo_pb.FactorialResponse
};

exports.DemoService = DemoService;

function DemoServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DemoServiceClient.prototype.fibonacci = function fibonacci(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DemoService.Fibonacci, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DemoServiceClient.prototype.factorial = function factorial(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DemoService.Factorial, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.DemoServiceClient = DemoServiceClient;

