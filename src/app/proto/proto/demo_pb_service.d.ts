// package: revinate
// file: proto/demo.proto

import * as proto_demo_pb from "../proto/demo_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DemoServiceFibonacci = {
  readonly methodName: string;
  readonly service: typeof DemoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_demo_pb.FibonacciRequest;
  readonly responseType: typeof proto_demo_pb.FibonacciResponse;
};

type DemoServiceFactorial = {
  readonly methodName: string;
  readonly service: typeof DemoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_demo_pb.FactorialRequest;
  readonly responseType: typeof proto_demo_pb.FactorialResponse;
};

export class DemoService {
  static readonly serviceName: string;
  static readonly Fibonacci: DemoServiceFibonacci;
  static readonly Factorial: DemoServiceFactorial;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class DemoServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  fibonacci(
    requestMessage: proto_demo_pb.FibonacciRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_demo_pb.FibonacciResponse|null) => void
  ): UnaryResponse;
  fibonacci(
    requestMessage: proto_demo_pb.FibonacciRequest,
    callback: (error: ServiceError|null, responseMessage: proto_demo_pb.FibonacciResponse|null) => void
  ): UnaryResponse;
  factorial(
    requestMessage: proto_demo_pb.FactorialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_demo_pb.FactorialResponse|null) => void
  ): UnaryResponse;
  factorial(
    requestMessage: proto_demo_pb.FactorialRequest,
    callback: (error: ServiceError|null, responseMessage: proto_demo_pb.FactorialResponse|null) => void
  ): UnaryResponse;
}

