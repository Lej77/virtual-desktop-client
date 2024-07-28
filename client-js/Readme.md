# Virtual Desktop Client (JavaScript)

This JavaScript client is built for the [`Deno` runtime](https://deno.com/) and communicates with a "Virtual Desktop Manager" to get information about virtual desktops and manipulate windows.

## Build

First we need to prepare for building our JavaScript for the `Deno` runtime:

1. Run `npm install`.

2. [Install `deno`](https://docs.deno.com/runtime/manual/getting_started/installation/).

    - It is a single executable so it can also be [downloaded from GitHub](https://github.com/denoland/deno/releases).

This client uses [`github.com/grpc/grpc-web`](https://github.com/grpc/grpc-web) to generate JavaScript from the Protocol Buffers definition. This part is optional since we check in the latest generated bindings. If you want to update the bindings then install `grpc-web`'s build dependencies first:

3. Install the `protoc` binary.

     - (Windows) Can use `choco install protoc` if [Chocolatey](https://chocolatey.org/) is installed.

4. Maybe install the [`protoc-gen-js`](https://github.com/protocolbuffers/protobuf-javascript) plugin for `protoc`.

    - Can download it manually from their [release page](https://github.com/protocolbuffers/protobuf-javascript/releases).

    - Can use [third party](https://www.npmjs.com/package/protoc-gen-js) NPM installer: `npm install -g protoc-gen-js`

    - This should already be install by `npm install` since we have `protoc-gen-js` as a dev dependency.

5. Install the [`grpc-web` plugin](https://github.com/grpc/grpc-web#code-generator-plugin) for `protoc` so that we can generate typescript definitions.

    - (Windows) Can use `scoop install protoc-gen-grpc-web` if [Scoop](https://scoop.sh/) is installed.

    - Can download binaries manually from: <https://github.com/grpc/grpc-web/releases>

Final we can generate bindings and bundle all our code:

6. Run `npm run generate` to generate parsing code for the ProtoBuf definitions.

7. Run `npm run deno-types` to generate type definitions for the `Deno` runtime.

8. Run `npm run build` to generate final client files in the `dist` subfolder.

    - Note: the JavaScript file and the TypeScript file will both be zipped together into a single `deno-client.zip` file.
