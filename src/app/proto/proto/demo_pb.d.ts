// package: revinate
// file: proto/demo.proto

import * as jspb from "google-protobuf";

export class FibonacciRequest extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FibonacciRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FibonacciRequest): FibonacciRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FibonacciRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FibonacciRequest;
  static deserializeBinaryFromReader(message: FibonacciRequest, reader: jspb.BinaryReader): FibonacciRequest;
}

export namespace FibonacciRequest {
  export type AsObject = {
    value: number,
  }
}

export class FibonacciResponse extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FibonacciResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FibonacciResponse): FibonacciResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FibonacciResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FibonacciResponse;
  static deserializeBinaryFromReader(message: FibonacciResponse, reader: jspb.BinaryReader): FibonacciResponse;
}

export namespace FibonacciResponse {
  export type AsObject = {
    value: number,
  }
}

export class FactorialRequest extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FactorialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FactorialRequest): FactorialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FactorialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FactorialRequest;
  static deserializeBinaryFromReader(message: FactorialRequest, reader: jspb.BinaryReader): FactorialRequest;
}

export namespace FactorialRequest {
  export type AsObject = {
    value: number,
  }
}

export class FactorialResponse extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FactorialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FactorialResponse): FactorialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FactorialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FactorialResponse;
  static deserializeBinaryFromReader(message: FactorialResponse, reader: jspb.BinaryReader): FactorialResponse;
}

export namespace FactorialResponse {
  export type AsObject = {
    value: number,
  }
}

