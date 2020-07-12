# XCloud API

The following set of calls are used to communicate and interact with XCloud services remotely over the Blocknet network via XRouter. XCloud consists of services that are powered by XRouter and are therefore interacted with using a subset of commands from the [XRouter API](#xrouter-api). 

You can use the [XCloud Services forum category](https://forum.blocknet.co/c/xcloud-services) as an alternative medium for discovering services, learning more about each service, and finding instructions on how to interact with the service. A simple list of services can also be found on [blockdx.co](https://blockdx.co/xcloud-services).

See [XCloud Setup](#xcloud-setup) for instructions on setting up your environment for use with XCloud.


Call                                               | Description
---------------------------------------------------|---------------
[xrGetNetworkServices](#xrgetnetworkservices)      | Returns supported services
[xrUpdateNetworkServices](#xrupdatenetworkservices)| Returns latest Service Node list
[xrConnect](#xrconnect)                            | Pre-connect to XRouter nodes
[xrConnectedNodes](#xrconnectednodes)              | Returns connected node services and fees
[xrService](#xrservice)*                           | Use to interact with XCloud services
[xrServiceConsensus](#xrServiceconsensus)*         | Use to interact with XCloud services with consensus
[xrGetReply](#xrgetreply)                          | Returns prior response associated with UUID
[xrShowConfigs](#xrshowconfigs)                    | Returns all node configs received as raw text
[xrUpdateConfigs](#xrupdateconfigs)                | Requests latest configs from nodes
[xrReloadConfigs](#xrreloadconfigs)                | Applies changes made to your configs
[xrStatus](#xrstatus)                              | Returns your XRouter configurations










## xrService

> Sample Data

```shell
{
  "service": "BTCgetbestblockhash"
}
```
This call is used to send a request to an XCloud service. XCloud is a decentralized oracle and microservice cloud network powered by XRouter that allows for interaction with microservices, blockchains, off-chain APIs, and cloud tech that's hosted by Service Nodes. If you'd like to operate your own Service Node, see the [Service Node Setup Guide](https://docs.blocknet.co/service-nodes/setup).


### Request Parameters

> Sample Request

```shell
blocknet-cli xrService SYSgetbestblockhash
```
<code class="api-call">xrService [service] [param1 param2 paramN]</code>

Parameter       | Type    | Description
----------------|---------|-------------
service         | string  | The service name without the namespace (*xcloud_service*, not *xrs::[xcloud_service]*).
paramN          | unknown | (Optional Parameter)<br>Refer to service documentation for parameter requirements. Information about an XCloud service can be viewed in the service configuration. Use [xrConnect](#xrconnect) to find a node with the service, then use [xrConnectedNodes](#xrconnectednodes) to review the service information.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
{
  "reply" : "6a29264f48a40cc88f7c56cdc5fd4c62d1daa7f83b204fdcd4a022d8676438c2",
  "error" : null,
  "uuid" : "54b6ec00-8b06-4c2c-9e56-acdff4da69fe"
}
```

Key             | Type    | Description
----------------|---------|-------------
reply           | unknown | The service's response data.
error           | object  | The native error response if an error occurred, otherwise a successful response will contain a `null` error.
uuid            | string  | The response ID, which can be used to view this response again with [xrGetReply](#xrgetreply).










## xrServiceConsensus

> Sample Data

```shell
{
  "service": "SYSgetbestblockhash"
}
```
This call is used to send a request to an XCloud service, along with a specified amount of nodes for consensus. XCloud is a decentralized oracle and microservice cloud network powered by XRouter that allows for interaction with microservices, blockchains, off-chain APIs, and cloud tech that's hosted by Service Nodes. If you'd like to operate your own Service Node, see the [Service Node Setup Guide](https://docs.blocknet.co/service-nodes/setup).


### Request Parameters

> Sample Request

```shell
blocknet-cli xrServiceConsensus 1 SYSgetbestblockhash
```
<code class="api-call">xrServiceConsensus [node_count] [service] [param1 param2 paramN]</code>

Parameter       | Type    | Description
----------------|---------|-------------
node_count      | int     | The number of nodes that will be used to route calls. The most common response (i.e. the response with the most consensus) will be returned as `reply`.
service         | string  | The service name without the namespace (*xcloud_service*, not *xrs::[xcloud_service]*).
paramN          | unknown | (Optional Parameter)<br>Refer to service documentation for parameter requirements. Information about an XCloud service can be viewed in the service configuration. Use [xrConnect](#xrconnect) to find a node with the service, then use [xrConnectedNodes](#xrconnectednodes) to review the service information.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
{
  "reply" : "6a29264f48a40cc88f7c56cdc5fd4c62d1daa7f83b204fdcd4a022d8676438c2",
  "error" : null,
  "uuid" : "54b6ec00-8b06-4c2c-9e56-acdff4da69fe"
}
```

Key             | Type    | Description
----------------|---------|-------------
reply           | unknown | The service's response data. If using a `node_count` greater than 1, this returns the most common reply. Use [xrGetReply](#xrgetreply) to view each nodes individual response.
uuid            | string  | The response ID, which can be used to view this response again with [xrGetReply](#xrgetreply).









