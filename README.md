# Virtual Desktop Client

This repository uses [Protocol Buffers](https://protobuf.dev/) (ProtoBuf) to define the binary serialization format used to communicate with a "Virtual Desktop Manager" program. This allows the code in the "Virtual Desktop Manager" to be re-used as a server from scripting languages acting as clients.

The server and client need to define some custom code to know which ProtoBuf messages to send and receive. The data is usually sent over the stdin and stdout pipes of the programs.
