# Hydra API
## Hydra Authentication

> Hydra Authentication

```shell
# <EVM> in the following example should be replaced by
# the EVM whose data is desired (e.g. ETH, AVAX, etc...) 
curl http://<NODE-URL>/xrs/evm_passthrough/<EVM>/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" 
```

Before data from Hydra API can be consumed by a client, a *Project* must be
requested and activated via the [Projects
API](/#projects-api-xquery-hydra). This gives you a `<PROJECT-ID>` and
`<API-KEY>` of an active project. The `<PROJECT-ID>` must be included in
the request URL, and the `<API-KEY>` must be  in the `Api-Key` header
of a request, as in the Hydra Authentication example in the right panel --->
<br>
See [Authentication Error Codes](/#authentication-error-codes) for possible error codes and their meanings. 
 
## Make Hydra Requests
[EVM](https://docs.blocknet.org/resources/glossary/#evm) JSON-RPC
requests are made via the `/xrs/evm_passthrough/<EVM>/<PROJECT-ID>`
route. A JSON-RPC request should have a request body containing the
`EVM JSON-RPC method` (string) and optionally `EVM JSON-RPC params` (string array).

### ETH example
On the right is a command line example using `curl` to request
the current block number of the ETH EVM. `method` = `eth_blockNumber` and `params` = [].

> Sample EVM JSON-RPC Request - ETH

```shell
# In this example, <EVM> should be replaced by ETH to get
# the current block number of the ETH chain.
# <NODE-URL>, <PROJECT-ID> and <API-KEY> values should be replaced
# by the values obtained when the project was requested/activated
# through the Projects API
curl http://<NODE-URL>/xrs/evm_passthrough/<EVM>/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params": [],"id":1}' | jq
```

<code class="api-call">eth_blockNumber</code>

This call does not take parameters.

<br><br><br><br><br><br><br><br><br>

By default, `curl` does not print the Response Headers. To see the Response Headers printed in the above example, add "`-D -`"
options to the `curl` command, like this ---->

> Sample EVM JSON-RPC Request - ETH - Print Response Headers

```shell
curl -D - http://<NODE-URL>/xrs/evm_passthrough/<EVM>/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params": [],"id":1}'
```
<br><br><br><br><br><br><br><br><br><br><br>
Whether the response code is 200 (success) or not, the Response Headers
will always contain useful information about the project. ---->
>  Sample EVM JSON-RPC Response Headers

```shell
PROJECT-ID: <PROJECT-ID>
API-TOKENS: <API Token Count>
API-TOKENS-USED: <API Tokens Used Count>
API-TOKENS-REMAINING: <API Tokens Remaining Count>
```
<br>

> Sample EVM JSON-RPC Response Body - ETH

<aside class="success">
200 OK
</aside>

```json
{
  "jsonrpc": "2.0",
  "result": "0x895cc6",
  "id": 1
}
```
<br><br><br>

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | Integer of the current block number the client is on.
id           | int  | ID number.
<br><br><br>

### AVAX C chain example
On the right is a command line example using `curl` to request
the current block number of the AVAX C chain EVM. `method` = `eth_blockNumber`
and `params` = []. <br><br>
**IMPORTANT:** Some EVMs, like the AVAX C chain, require
augmentation of the URL to access their JSON RPC methods. For AVAX C
chain EVM access, `/ext/bc/C/rpc` must be appended to the URL, like this ---->

> Sample EVM JSON-RPC Request - AVAX C chain EVM

```shell
# In this example, <EVM> should be replaced by AVAX to get
# the current block number of the AVAX C chain.
# <NODE-URL>, <PROJECT-ID> and <API-KEY> values should be replaced
# by the values obtained when the project was requested/activated
# through the Projects API
curl http://<NODE-URL>/xrs/evm_passthrough/<EVM>/<PROJECT-ID>/ext/bc/C/rpc \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params": [],"id":1}' | jq
```

<code class="api-call">eth_blockNumber</code>

This call does not take parameters.
<br><br><br><br><br><br><br><br>


<aside class="success">
200 OK
</aside>

> Sample EVM JSON-RPC Response Body - AVAX C chain EVM

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xdf2fe8"
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | Integer of the current block number the client is on.
id           | int  | ID number.

<br><br><br>

### AVAX Info isBootstrapped example
On the right is a command line example using `curl` to request
the current *isBootstrapped* status of the AVAX C chain EVM hosted at `<NODE-URL>`. `method` = `info.isBootstrapped`
and `params` = ["chain":"C"]. <br><br>

> Sample JSON-RPC Request - AVAX info

```shell
# In this example, <EVM> should be replaced by AVAX to call
# the info.isBootstrapped method of the AVAX node.
# <NODE-URL>, <PROJECT-ID> and <API-KEY> values should be replaced
# by the values obtained when the project was requested/activated
# through the Projects API
curl http://<NODE-URL>/xrs/evm_passthrough/<EVM>/<PROJECT-ID>/ext/info \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"info.isBootstrapped","params": {"chain":"C"},"id":1}' | jq
```

<code class="api-call">info.isBootstrapped</code>


Similar to the [AVAX C chain example](/#avax-c-chain-example) above,
access to the *info* space of the AVAX node requires augmentation of
the URL. However, instead of augmenting the URL with `/ext/bc/C/rpc`
to access the AVAX C chain EVM, `ext/info` must be appended to the
URL to access the *info* space. Also, as per the [AVAX
API](https://docs.avax.network/apis/avalanchego/apis/issuing-api-calls/),
a parameter designating which of the 3 AVAX chain is being referenced must be passed
when calling the `info.isBootstrapped` method. The final `curl`
command looks like this ---->

<br><br>

<aside class="success">
200 OK
</aside>

> Sample JSON-RPC Response Body - AVAX info

```json
{
  "jsonrpc": "2.0",
  "result": {
    "isBootstrapped": true
  },
  "id": 1
}
```

### AVAX Health example
On the right is a command line example using `curl` to request
the current *health* status of the AVAX node hosted at `<NODE-URL>`. `method` = `health.health`
and `params` = []. <br><br>

> Sample JSON-RPC Request - AVAX health

```shell
# In this example, <EVM> should be replaced by AVAX to call
# the health.health method of the AVAX node.
# <NODE-URL>, <PROJECT-ID> and <API-KEY> values should be replaced
# by the values obtained when the project was requested/activated
# through the Projects API
curl http://<NODE-URL>/xrs/evm_passthrough/<EVM>/<PROJECT-ID>/ext/health \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"health.health","params": [],"id":1}' | jq
```

<code class="api-call">health.health</code>


Similar to the [AVAX C chain example](/#avax-c-chain-example) above,
access to the *health* space of the AVAX node requires augmentation of
the URL. However, instead of augmenting the URL with `/ext/bc/C/rpc`
to access the AVAX C chain EVM, `ext/health` must be appended to the
URL to access the *health* space. Also, as per the [AVAX
API](https://docs.avax.network/apis/avalanchego/apis/issuing-api-calls/),
no parameters are passed when calling the `health.health` method. The final `curl`
command looks like this ---->

<br><br>

<aside class="success">
200 OK
</aside>

> Sample JSON-RPC Response Body - AVAX health

```json
{
  "jsonrpc": "2.0",
  "result": {
    "checks": {
      "C": {
        "message": {
          "consensus": {
            "longestRunningBlock": "84.1507ms",
            "outstandingBlocks": 1
          },
          "vm": null
        },
        "timestamp": "2022-05-15T00:07:01.113890064Z",
        "duration": 29143
      },
      "P": {
        "message": {
          "consensus": {
            "longestRunningBlock": "0s",
            "outstandingBlocks": 0
          },
          "vm": {
            "primary-percentConnected": 0.9955925177653572
          }
        },
        "timestamp": "2022-05-15T00:07:01.114159406Z",
        "duration": 372805
      },
      "X": {
        "message": {
          "consensus": {
            "outstandingVertices": 0,
            "snowstorm": {
              "outstandingTransactions": 0
            }
          },
          "vm": null
        },
        "timestamp": "2022-05-15T00:07:01.113783807Z",
        "duration": 47628
      },
      "bootstrapped": {
        "message": [],
        "timestamp": "2022-05-15T00:07:01.113865158Z",
        "duration": 25517
      },
      "network": {
        "message": {
          "connectedPeers": 1492,
          "sendFailRate": 0,
          "timeSinceLastMsgReceived": "113.905213ms",
          "timeSinceLastMsgSent": "113.905213ms"
        },
        "timestamp": "2022-05-15T00:07:01.113908308Z",
        "duration": 13986
      },
      "router": {
        "message": {
          "longestRunningRequest": "82.871428ms",
          "outstandingRequests": 45
        },
        "timestamp": "2022-05-15T00:07:01.113968981Z",
        "duration": 53199
      }
    },
    "healthy": true
  },
  "id": 1
}
```

### Error codes
 If one of the inputs (`method` and/or `params`) are malformed, then the client may receive one the following error responses:

<aside class="warning">
400 Bad Request
</aside>

> MalformedJSONData Response Body

```json
{
  "message": "malformed json post data"
  "error": 1000
}
```

Parameter       | Type    | Description
----------------|---------|-------------
message      | string | Request contains malformed JSON POST data.
error        | number | Error code.

<aside class="warning">
400 Bad Request
</aside>

> MissingParameters Response Body

```json
{
  "error": "missing parameters"
}
```

Parameter       | Type    | Description
----------------|---------|-------------
error        | string | Request misses parameters.

<aside class="warning">
401 Unauthorized
</aside>

> DisallowedMethod Response Body

```json
{
  "error": "disallowed method <method>"
}
```

Parameter       | Type    | Description
----------------|---------|-------------
error        | string | Disallowed JSON-RPC eth method.



## EVM Error Codes
If the request body input for the `evm_passthrough` route is correct, then the following errors may be returned by the EVM client.

If an error is returned after a EVM JSON-RPC request, the `error` field in the response object **MUST** be an object which contains a `code` and `message` field. The following table displays all error codes and its associated messages.

> Sample Error Response Body

```json
{
    "id": 1
    "jsonrpc": "2.0",
    "error": {
        "code": -32700,
        "message": "Parse error"
    }
}
```

Code  | Message  | Description | Object Name
------|-------|------------ | ---------
-32700 |  Parse error | Invalid JSON  | ParseError
-32600 |  Invalid request | JSON is not a valid request object |  InvalidRequest
-32601 |  Method not found |  Method does not exist | MethodNotFound
-32602 |  Invalid params |  Invalid method parameters | InvalidParams
-32603 |  Internal error |  Internal JSON-RPC error | InternalError
-32000 |  Invalid input | Missing or invalid parameters | InvalidInput
-32001 |  Resource not found | Requested resource not found | ResourceNotFound
-32002 |  Resource unavailable |  Requested resource not available |  ResourceUnavailable
-32003 |  Transaction rejected |  Transaction creation failed | TransactionRejected
-32004 |  Method not supported |  Method is not implemented | MethodNotSupported
-32005 |  Limit exceeded |  Request exceeds defined limit | LimitExceeded
-32006 |  JSON-RPC version not supported |  Version of JSON-RPC protocol is not supported | Json-rpcVersionNotSupported



<!-- ## Pub/Sub Methods

Call                                              | Description
--------------------------------------------------|---------------
[eth_subscribe](#eth_subscribe)                             | Starts a subscription (on WebSockets / IPC / TCP transports) to a particular 
[eth_unsubscribe](#eth_unsubscribe)                             | Unsubscribes from a subscription.

### eth_subscribe

Starts a subscription (on WebSockets / IPC / TCP transports) to a particular event. For every event that matches the subscription a JSON-RPC notification with event details and subscription ID will be sent to a client.


#### Request Parameters
> Sample Data

```json
{
  "events": "logs"
}
```

> Sample Request

```shell
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_subscribe","params": ["logs"],"id":1}'
```

<code class="api-call">eth_subscribe [events]</code>

Parameter       | Type    | Description
----------------|---------|-------------
events           | string  | Event to be subscribed on.


#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "params": {
    "subscription": "string",
    "result": "string"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
params           | string  | Parameters Object
subscription  | string | ID of the newly created subscription of the node
result        | string  | eth_subscriptionResult (string) or eth_subscriptionNewHeads (object) or Log (object) or eth_subscriptionNewPendingTransaction (object) or eth_subscriptionSyncing (object)
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_unsubscribe

Unsubscribes from a subscription.

#### Request Parameters
> Sample Data

```json
{
  "subscription_id": "0xb53c4832f1dca4a5"
}
```

> Sample Request

```shell
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_unsubscribe","params": ["0xb53c4832f1dca4a5"],"id":1}'
```

<code class="api-call">eth_unsubscribe [subscription_id]</code>

Parameter       | Type    | Description
----------------|---------|-------------
subscription_id           | string  | Subscription ID.


#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": true,
  "id": 1
}

```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | boolean  | `true` if the subscription was cancelled successful.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error -->

## EVM JSON-RPC Methods

Call                                              | Description
--------------------------------------------------|---------------
[web3_clientVersion](#web3_clientversion)                             | Returns the current client version.
[web3_sha3](#web3_sha3)                             | Returns Keccak-256 (not the standardized SHA3-256) of the given data.
[net_listening](#net_listening)                             | Returns `true` if client is actively listening for network connections.
[net_peerCount](#net_peercount)                             | Returns number of peers currenly connected to the client.
[net_version](#net_version)                             | Returns the current network protocol version.
[eth_blockNumber](#eth_blocknumber)                           | Returns the number of the most recent block.
[eth_call](#eth_call)             | Executes a new message call immediately without creating a transaction on the block chain.
[eth_chainId](#eth_chainid)               | Returns the EIP155 chain ID used for transaction signing at the current best block. Null is returned if not available.
[eth_estimateGas](#eth_estimategas)                 | Makes a call or transaction, which won’t be added to the blockchain and returns the used gas, which can be used for estimating the used gas.
[eth_gasPrice](#eth_gasprice)                         | Returns the current gas price in wei.
[eth_getBalance](#eth_getbalance)                       | Returns the balance of the account of given address.
[eth_getBlockByHash](#eth_getblockbyhash) | Returns information about a block by hash.
[eth_getBlockByNumber](#eth_getblockbynumber)             | Returns information about a block by block number.
[eth_getBlockTransactionCountByHash](#eth_getblocktransactioncountbyhash)           | Returns the number of transactions in a block from a block matching the given block hash.
[eth_getBlockTransactionCountByNumber](#eth_getblocktransactioncountbynumber)           | Returns the number of transactions in a block from a block matching the given block number.
[eth_getCode](#eth_getCode)                           | Returns code at a given address.
[eth_getLogs](#eth_getLogs)                   | Returns an array of all logs matching a given filter object.
[eth_getStorageAt](#eth_getStorageAt)               | Returns the value from a storage position at a given address.
[eth_getTransactionByBlockHashAndIndex](#eth_gettransactionbyblockhashandindex)                             | Returns information about a transaction by block number and transaction index position.
[eth_getTransactionByHash](#eth_gettransactionbyhash)                             | Returns the information about a transaction requested by transaction hash.
[eth_getTransactionCount](#eth_gettransactioncount)                             | Returns the number of transactions sent from an address.
[eth_getTransactionReceipt](#eth_gettransactionreceipt)                             | Returns the receipt of a transaction by transaction hash.
[eth_getUncleByBlockHashAndIndex](#eth_getunclebyblockhashandindex)                             | Returns information about a uncle of a block by hash and uncle index position.
[eth_getUncleByBlockNumberAndIndex](#eth_getunclebyblocknumberandindex)                             | Returns information about a uncle of a block by number and uncle index position.
[eth_getUncleCountByBlockHash](#eth_getunclecountbyblockhash)                             | Returns the number of uncles in a block from a block matching the given block hash.
[eth_getUncleCountByBlockNumber](#eth_getunclecountbyblocknumber)                             | Returns the number of uncles in a block from a block matching the given block number.
[eth_getWork](#eth_getwork)                             | Returns the hash of the current block, the seedHash, and the boundary condition to be met ("target").
[eth_hashrate](#eth_hashrate)                             | Returns the number of hashes per second that the node is mining with.
[eth_mining](#eth_mining)                             | Returns `true` if client is actively mining new blocks.
[eth_sendRawTransaction](#eth_sendrawtransaction)                             | Creates new message call transaction or a contract creation for signed transactions.
[eth_submitWork](#eth_submitwork)                             | Used for submitting a proof-of-work solution.
[eth_syncing](#eth_syncing)                             | Returns an object with data about the sync status or `false`.

### web3_clientVersion

Returns the current web3 client version.

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"web3_clientVersion","params": [],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">web3_clientVersion</code>

 This call does not take parameters.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "Geth/v1.9.23-stable-8c2f2715/linux-amd64/go1.15.3",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | The current client version.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### web3_sha3

Returns Keccak-256 (not the standardized SHA3-256) of the given data.

#### Request Parameters

> Sample Data

```json
{
  "sha3_data": "0x68656c6c6f20776f726c64"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"web3_sha3","params": ["0x68656c6c6f20776f726c64"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">web3_sha3 [sha3_data]</code>

Parameter       | Type    | Description
----------------|---------|-------------
sha3_data           | string  | The data to convert into a SHA3 hash.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | The Keccak-256 hash of the given string.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### net_listening

Returns `true` if client is actively listening for network
connections. <br>

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"net_listening","params": [],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

**NOTE:** The `net_listening` method works as expected for the ETH
EVM. However, for the AVAX C chain EVM, [Avalanche
docs](https://docs.avax.network/nodes/maintain/chain-config-flags/#net)
has this to say about the `net_listening` method:<br>
"Note: Coreth is a virtual machine and does not have direct access to the networking layer, so net_listening always returns true and net_peerCount always returns 0. For accurate metrics on the network layer, users should use the AvalancheGo APIs."

<code class="api-call">net_listening</code>

This call does not take parameters.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": true,
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | boolean  | `true` when listening, otherwise `false`.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### net_peerCount

Returns number of peers currenly connected to the client.

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"net_peerCount","params": [],"id":1}' | jq
# For AVAX C chain, net_peerCount always returns 0. However,
# AVAX node peer count can be retrieved through a call to the
# info.peers method like this:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/info \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"info.peers","params":
	{"chain":"C"},"id":1}' | jq | head
```

**NOTE:** The `net_peerCount` method works as expected for the ETH
EVM. However, for the AVAX C chain EVM, [Avalanche
docs](https://docs.avax.network/nodes/maintain/chain-config-flags/#net)
has this to say about the `net_peerCount` method:<br>
"Note: Coreth is a virtual machine and does not have direct access to the networking layer, so net_listening always returns true and net_peerCount always returns 0. For accurate metrics on the network layer, users should use the AvalancheGo APIs."

<code class="api-call">net_peerCount</code>

This call does not take parameters.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response - ETH

```json
{
  "jsonrpc": "2.0",
  "result": "0x19",
  "id": 1
}
```
 
Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | Integer of the number of connected peers.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> Sample Response - AVAX

```json
{
  "jsonrpc": "2.0",
  "result": {
    "numPeers": "1493",
    "peers": [
      {
        "ip": "18.158.15.12:9651",
        "publicIP": "18.158.15.12:9651",
        "nodeID": "NodeID-kZNuQMHhydefgnwjYX1fhHMpRNAs9my1",
        "version": "avalanche/1.7.10",
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | result object | object containing results
numPeers           | string  | Number of Peers
peers           | peer object | object containing a list of all peers, including all known details about each peer

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### net_version

Returns the current network protocol version.

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"net_version","params": [],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">net_version</code>

This call does not take parameters.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "1",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | The current network protocol version.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_blockNumber

Returns the number of the most recent block.

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params": [],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_blockNumber</code>

This call does not take parameters.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0x895cc6",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | Integer of the current block number the client is on.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_call

Executes a new message call immediately without creating a transaction on the block chain.

> Sample Data

```json
{
  "from": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
  "to": 0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
  "gas": "0x76c0",
  "gasPrice": "0x9184e72a000",
  "value": "0x186a0",
  "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
  "block_parameter": "latest"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_call","params": [{"from": "0x407d73d8a49eeb85d32cf465507dd71d507100c1","to": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b","gas": "0x76c0","gasPrice": "0x9184e72a000","value": "0x186a0","data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"}, "latest"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

#### Request Parameters

<code class="api-call">eth_call [from] [to] [gas] [gasPrice] [value] [data] [block_parameter]</code>

Parameter       | Type    | Description
----------------|---------|-------------
from           | string  | The address the transaction is sent from.
to | string | The address the transaction is directed to.
gas | string | Integer of the gas provided for the transaction execution. [eth_call(#eth_call) consumes zero gas, but this parameter may be needed by some executions.
gasPrice | string | Integer of the gas price used for each paid gas.
value | string | Integer of the value sent with this transaction.
data | string | Hash of the method signature and encoded parameters.
block_parameter | string | Integer block number, or the string 'latest', 'earliest' or 'pending'.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0x",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | The return value of the executed contract.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_chainId

Returns the EIP155 chain ID used for transaction signing at the current best block. `null` is returned if not available.

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_chainId","params": [],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_chainId</code>

This call does not take parameters.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0x1",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | EIP 155 Chain ID, or `null` if not available.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_estimateGas

Makes a call or transaction, which won’t be added to the blockchain and returns the used gas, which can be used for estimating the used gas.

#### Request Parameters
> Sample Data

```json
{
  "from": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
  "to": 0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
  "gas": "0x76c0",
  "gasPrice": "0x9184e72a000",
  "value": "0x186a0",
  "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_estimateGas","params": [{"from": "0x407d73d8a49eeb85d32cf465507dd71d507100c1","to": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b","gas": "0x76c0","gasPrice": "0x9184e72a000","value": "0x186a0","data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"}],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_estimateGas [from] [to] [gas] [gasPrice] [value] [data]</code>

Parameter       | Type    | Description
----------------|---------|-------------
from           | string  | The address the transaction is sent from.
to | string | The address the transaction is directed to.
gas | string | Integer of the gas provided for the transaction execution. [eth_call](#eth_call) consumes zero gas, but this parameter may be needed by some executions.
gasPrice | string | Integer of the gas price used for each paid gas.
value | string | Integer of the value sent with this transaction.
data | string | Hash of the method signature and encoded parameters.


#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0x5cec",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | The amount of gas used.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getBalance

Returns the balance of the account of given address.

#### Request Parameters
> Sample Data

```json
{
  "address": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
  "block_parameter": "latest"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getBalance","params": ["0x407d73d8a49eeb85d32cf465507dd71d507100c1", "latest"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getBalance [address] [block_parameter]</code>

Parameter       | Type    | Description
----------------|---------|-------------
address | string | The address to check for balance.
block_parameter | string | Integer block number, or the string 'latest', 'earliest' or 'pending'.


#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0x0",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | Integer of the current balance in wei.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getBlockByHash

Returns information about a block by hash.

#### Request Parameters
> Sample Data

```json
{
  "block_hash": "0x5bc28118ff3f15c4ae1cd14548c9a89c87405c5a9f0536c517f5955ace4b1011",
  "show_tx_details: "false"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getBlockByHash","params": ["0x5bc28118ff3f15c4ae1cd14548c9a89c87405c5a9f0536c517f5955ace4b1011",false],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getBlockByHash [block_hash] [show_tx_details]</code>

Parameter       | Type    | Description
----------------|---------|-------------
block_hash | string | Hash of a block.
show_tx_details | string | If `true` it returns the full transaction objects, if `false` only the hashes of the transactions.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "author": "0x04668ec2f57cc15c381b461b9fedab5d451c8f7f",
    "difficulty": "0x8fc884a6ef5d3",
    "extraData": "0x737069646572303808148293",
    "gasLimit": "0x97eca0",
    "gasUsed": "0x93c8e0",
    "hash": "0x5bc28118ff3f15c4ae1cd14548c9a89c87405c5a9f0536c517f5955ace4b1011",
    "logsBloom": "0xb54fd322d4722e4086848ca0101b7a4540400102088d40cd02e38106515881c10cb0844a840482220581dc221f02090a8d731a020340b74be026c0f6623c964463a028e0a609b18662b0f6ea20c1c0142e9f0026840430801f131f318a8d307c0e40b10602330d049190f0a0900d0c0d08c85661104d20101c2281973901585ac203405eaa8ef48148034481e080036c0001db0149149903e76090282412407c860c11f6041613c305ec2bc08f1b9e2103d58018b08509676c66c2036856c48143702bb78a5025999de78807f2a8061430203785640c24b18d93901f045a692030d04a2f1b702829d28b8a91101821660aa8d1128411c7828041900668e8b0ac",
    "miner": "0x04668ec2f57cc15c381b461b9fedab5d451c8f7f",
    "mixHash": "0xc4eff2c5e48a5516daf6847a9161ccec9488887c5e43b4772d27809dc0781cf1",
    "nonce": "0xb92ff3801727d0f8",
    "number": "0x899ec6",
    "parentHash": "0xb0d783f4d16d860251c8b891b5b36c8014d5704c27f094defec6f1e8c5968459",
    "receiptsRoot": "0x99a36ee91c716bb56de300ed3929d14c4f929098c3e3a693898e28157e718081",
    "sealFields": [
      "0xa0c4eff2c5e48a5516daf6847a9161ccec9488887c5e43b4772d27809dc0781cf1",
      "0x88b92ff3801727d0f8"
    ],
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "size": "0x882a",
    "stateRoot": "0xf103dce771f5b5af88d822002d3ecc51294056e2a4c2282375086e605a867a14",
    "timestamp": "0x5de09562",
    "totalDifficulty": "0x2c416379f60ef20fb1c",
    "transactions": [
      "0x5cfcf948c5b93ce012e381dacdfc8fe829e3f7828c015aa32c2d0aff333b6d69",
      "0x9d0559cc6e6484dbcfa16e3767203e7add7c978b2eef0272af2784634ec50974",
      "0x4fe5e1bac1fb05eafd7921438f0d70ea367049aa0d5ed4828f3c6d412e803e91",
      "0x0dc7d5377728506a7f790ae45911817a26ff9cfc05e27a57590d94d0edefb967",
      "0x65fc7f666ce352974b18a1d952d29a4280ff2161d13b503b0f335123e0766000",
      "0x63f589ed630edf6f68156dd03191e50164caa1990bd3725b630da5dbe018f7b3",
      "0x1f289a438ef8dae4753be7774cf043b05973aebd66c3bff95488f4cd16bd1196",
      "0xced9a652a80497323e6519e5cd81052157694875d24ad289bc7001a8dfe00bcb",
      "0x039300300a9732c495cc26c1280f15718592e9682f8e32bc18bd8d42e16a0577",
      "0xc4ca5a967dc0c0c54e5e82ade7da850f6cdb5fa6789de904bc0e8936794bb0f2",
      "0xeca49b5b48dbb748d0471c4c16b5044bae3b877c423f49dab534beed2729cdde",
      "0xe5eb8709c09d6902cbe6c012b81bf8b3e15409fe19c63bf153a6d5fefdf5cf16",
      "0x3e32c69abe8c4a8cfba6daf79ea6a51d07afae7bc2abce7d8daa077587562e74",
      "0x8f96943a084f3766fe70c7baf2dc4a5ffb9a661a3e5ce42e03075f7ea2769378",
      "0x4d6495579d1886d716903371f3cd044d4433cbd31c4a933e7d313483c64ec530",
      "0xdc7d2a16be795215cf11eb4415a1aa493a9c31f8eb1f89adf87a23b3d4bea3d0",
      "0xa705415a2489c896f5a929fc97bdfa3394dd48497ad66a06752ce54297c8b842",
      "0x14bb43db31b60a107ede336bb6f6e44605399f55e4792f3ff7bb4af7210ad285",
      "0xf8d60ddbca6115691cc440c6a1aab34b4ffd13c126f31b92425ef7edb620d479",
      "0xdfb50b65cbaa58900b7fe77f3b42f4ecc1ca4f96646c7bf1762ed3aeb63c7688",
      "0x99f21998e84ac9200efbb07f605bc8afbf117f244af7a29388e6e087c19fbdb0",
      "0x07fb11af81cc814506f1a1ac7103965c451aee2b4cce9ceecef45b8fc81d836a",
      "0x0315af1a375d2fdf0a9d7a521f7f19acc2fe1d9227f83884dd5b4f47d98e6efd",
      "0x428529907787995c9ce33d111e2894c358064030d1529763bb32339a967e5992",
      "0xe4c726fdbe76706649e3a9ed6c7a56f7891bc3e1976957812251b61dd5f6c027",
      "0x401ed47d7555bca1c5138d6b7c4c578cc31dc1e4dad3c3675caabe1c5c299e9b",
      "0x178f17e86414475cd37c08b87c7fe107dc2d07aa712089bce7898a84dd37329c",
      "0x50650e090b234e9b69f81a4ffde1d49326a789c0cb449cab204dc406b9475c10",
      "0xd3bf79237eefcf3e8087c903a096c0a3af75e087ee3301766f5da43e516cd2b7",
      "0xf07a9f7855cd2bd58f16f17fa0ef2053fa98fd03ba269179710eccb551978d14",
      "0x5bcf5fc14ff8d72096b1204e42c811c48978d452c2db666bf4c7e99150c2c16e",
      "0x4325c1585e053093d092fe172c1f98bf09929a4dd86c368e85ae27c6dcdbef85",
      "0x31080266eddb27f53a3480730549a85dedfa32016a41ad075f8b13fe5ec13263",
      "0xb07ac99a62e51111acd6565556c62e406430d794f097a2d800a9932f3ebb08e5",
      "0x44255b0b8d7467c9b48e8b215f742e921305dedc7812b3c30081f26806b5cc9b",
      "0x690ef6ff3f8e41f26a308d42244c7a268fe2a8bdd35c65fd21fd015224bb87ca",
      "0xbdc071164c5f3ee53359e454950fa7a36f8aad14e270395bc993b71932e31c84",
      "0xd022ca49c5be1304e26956a72e4e7efbd2eea6cbd2de831ee79a428ce48c2a3d",
      "0x3b918c1d53de319494fd8892390f0e6cd6eb217a6dd3e5c2bb3777a3e7ddd6d4",
      "0x90879e23911df700b8613ece8ee35ca30eb5a89d1ca04d24c602ba84dbce8e0a",
      "0x45273285759f20353de9cf076d429e3daee87e821fbb746f3a0c77c670d12920",
      "0xdc4b1635791e748804d5332dba5b36a870098154510f944d4f1c14e3200aeab7",
      "0xb02b5e0f84be828b074efc3a5ffdcf1d6d188423aee5fea02a0ed6d9d92f5d79",
      "0x93ad2cafe4fef762ffb838115b625ffd76023f171f1d4da23572c3717ab429c3",
      "0x59e52718da689cd66405c27724a4b188a401df680c0cb3e0dcbb9f9c0e46a493",
      "0x496ab9c3e4c79c4f797aa7d76b376cd19c147a2a57eb48dbd52dcb61e5a45ab7",
      "0x8f46d0351a0697eebad9e65f35626e02f04aac36c5c4f5817de4b53ee7903e52",
      "0x8b9b6b3c4987c8f41a0c33d6eda6a79a07352d449ec606dfbee53c5bbf58bce2",
      "0xce2e08f4104f96637206b30d0e0b838549fba98b4b46b0cb2899573dbf838393",
      "0x74985b94902e276f86041771f920226a61307bace3986a6ab0176c042aab8e0e",
      "0x15722f46a7e834eb43a3111afb8b236efe3780107e476e4cd2d8a4574c146643",
      "0xd86fed31c4ef94d290eb9b9a7287da5c87a0b8b9872544a071e4febf8f80af69",
      "0x0be519ac2a2e39bdd875f278bb2ba3d8c1413130f4708cef459a6de75749a852",
      "0x94923595b1e26a5dc2e0d59d39d63698a35588e713434238d315401fbbde29f8",
      "0xc94d0ec19d3df5951fba1306b9b097f418e0ccc4ee4088865925ba4116825ac5",
      "0x7b5cceb1aa7e9a17d6429eb475b29a6e12cfc5137ac01054ca706a9648d0de33",
      "0xd820707f3ae4aa04ab4fe19eadc8b4945803cea6f57680c3970f377ca154fbf1",
      "0x1aae653b0b7130f0fc40678c94309ccb170271efff7d914a062e7a7c49496b3a",
      "0xc9e6b1d707f44771f44f93f1de52fe0ed57dd6f9db33ced966980d717b1fb127",
      "0x93b52b088ab167700eda4401f5ca1e6a6148b7d822a49c03863891912d6ac9a4",
      "0xb90b421879412770e758bdd45b7195b81279e7da1eead734e1749feeb13b5918",
      "0xc585710e9880d8215986fae102a2bf11caf82d1f81680f9d8c8fa86bb16c93d1",
      "0x5788a99cf99bf3161307ad9b0d6091c00666fe08868521afc384c18f8400315f",
      "0x06823c999440325edd867c094ca5ebb41dc28eb9ea6dd04dfdfc5d809e1bf9c1",
      "0x68cec353137215e13d3a2667105782feb6d56531c7ba9011604261a2e282eb88",
      "0xa787ed36b95df9257747f5af0a35cddb1b5eed4270ec48188e1db5bd489d9948",
      "0xa35cbf7903416e3d4cbf551c4bc0afa778fd014a2fcd05ff1490ca63c2d136cd",
      "0xf7b18ea5e22c1e54948811a2330be75163890250b6a0b720fece11ddde12a9fb",
      "0xd9a128ea60815ef43b33f089d59521cc11c86d76e85a1f2d853f2c26daeec221",
      "0x10a718193976caa332d9de09302c38265bc5ddfa7394dd2cad517675cc46cfad",
      "0x4534dbd4dfadd0a234744f1fac53b125712f54a50810a9e548e03dbd05b92752",
      "0xceb5a50055161b2daf52abc7ba7862b3d7c0a3ede5e56d5a414a24ea7af1710f",
      "0x7c9f30c0f294542a8868cba9bac8967e9398e3cc7e654f0f6b294ae869bd7712",
      "0x198cfb78cc1be5ce3526375439222e0a1e13ec052a95a97d79c677355695d8e8",
      "0x561d7c0a3ec74cc7ad129647300c25610982202348dba00a168921579817e540",
      "0x6afab9b5e3463a9d25ca3306b30980bdcc27421bedd3a2b24daf5abe29d8f1c6",
      "0x0c0cec67ffbe564ba85071dbed58f746257c7052367365c38a72c7c5f331f1a6",
      "0x8b9d1c44a39a7d04fa53143e27fc38a41936a7898b3b32c22260d7aff762f7f9",
      "0x249dba5287216b027cfc7fb5a9b92c33417484d68f7ecd50cfce29f1bafa7f14",
      "0xa4bb7036e625de02af7a389ad83695de9b225649414dfc839d1e0e98d15914c4",
      "0x576c6183980df86297e4b54255928786516b2a8b029fc13b059419451d59c0b1",
      "0x0230c6dd3f6383464b82abe1594356f5238db244713e2828410a52f69b515af4",
      "0x36e54958c7606f107516526c9d855e863029a73b10d6375c4de9bca4f5e55448",
      "0xebc0d3d709d04e74441ea5dbefaabb68e66b7f6007fb7c0e1f3146ebd0bd2145",
      "0xf6294fef87e9a8767a332b20d30f912357497deb3de1c65f80dd650aad8ff0e9",
      "0xdac1997ea5ef55ba0d3443ddfaa3748dc3dcb0e995537d49c92c4b7c4ea02599",
      "0xc6caadca4246469ac34857c2278155b8e07d96465552f42e27e29772a203df2f",
      "0xcc8474658822e1ace734558219adfa8463006ddc47beec3a35b2a62d8061fa20",
      "0x00a7a891ea0786f8b4fcb72a3291e10c7e2031bdd30515da408de2d5c784c4b5",
      "0x5f3a52bc746b87fa5cd148f33d434bd07be3c0d378cb2350657b315e13f08ca2",
      "0x2d8a03457d9d5a90e61fc927f806b18190ed33366f8a70a0f3bd88dedd275de7",
      "0xcf5da6fb2fa3c5ad461cd6ce198e02651644b5dcccc4eeb57e80fe6c1f714127",
      "0x5adee0d00aa01767441616a2b1cd8a2d6e35828cbf358aa0bc5c0e4026678e01",
      "0x1ec03369744ad69c9a5e22d7afb455c38930687654540c214d34b9761d5aaee0",
      "0x56c48612f3ffc8e3064dc66c02bd6ef932c1548a004573f037f23ebd71b61b71",
      "0x835ad5e80858c4f3b5bb91427cdb6aa50d7eeee7d6f868e9d3155469fef26eb1",
      "0xb94067688a6a667f22a95220d29d92ed8401fd842344cd67c1e0e0e0c717f17b",
      "0x14f265d013d51f7c122a5032d06ec58439beaf06e68d810635b44950cc508796",
      "0x9bb4e6dd707e69510c1cef3602c4e46901a9ec61bc79b73c315f0594ff7ce5e2",
      "0xefeeb9bef1026305495ac3694e22ac22d6a56fd10c482c8cf6e3da0e561ea6f8",
      "0xd649f43433f151096431674b297f29a2cc79f55180f870d73fdcf61d1c72e053",
      "0x624dd38e1a775a2fd2040d30979dcfd65e9bbbe1283615c844afe0ab81daf2cc",
      "0xb34670919db74dbf4803b23d6c36a68e138300e538e1001f06156dab5ac4cd82",
      "0x9e7f40f5fe63d1ed5429733c4f6bc6a480fb5fdf3f080015a32828e27898aeff",
      "0x608bd230419ab1939d942e12dd6c2cfea4847342f0600d7b5c7ba32e77b578bc",
      "0x2214d586392bab5976bdba36b1dcb1b5750377f83c7cfd9a66fdf93ff6014a0b",
      "0xf29c2859851627a1ed2722d0b08b5ab40359534a8140950284c8b0f7527d0705",
      "0x6fd3f2266ae429bd41ba05e2389e5745a99402f0bf7b13f14fbd42183f149d22",
      "0x00fdae5f47ea62c5287e34721729a93b9d33bff3ded29b73dcce5f4e1fd412fa",
      "0x864ae872a968339c1d01b083ecdca074a0098998c12e1a09095ff242f26ffc9f",
      "0x9e86c592291d225d1572c88247921639fb6c6e8a273bc690460d75517b8307e7",
      "0xdc4d5cc8749957d29436d8d9e0fa13af09d336533fa1dd9f1a9c28ce6e11cef8",
      "0x5603c8eaaf3101ce662cc56bef395c88a812e1575bfc58be7d790ea4dc65aafd",
      "0x5921d458195e827fe96089215350855efa2d4793b07a688df1d8c4a623a5799f",
      "0x5fdd73e69f6ff8d13d189c3fcd9f9e07160c1e7ac5c8d49710ec995a032530dd",
      "0x5ef5bf0ac00c37c9a0189e01685bd55a49063d21f824cb42029075a8a5692de6",
      "0xe2bbf787fe13eeda2e5c5507980330b16fdbe3ea33081baacd9570d608f71be6",
      "0xf772e14be8f79b101d9e322d2d06c76e97856d5fc8e81a1967b837b37f212f21",
      "0x00329ee26509279b26ccfdb6b63d06e6372fa2c0f91b4b6d732c5f849ba3d598",
      "0x343f113699f9a9a3be8778f4566e102a7586c48a736a2e66a8871d026bbe591b",
      "0xa1341a72bee8ee1e19bb8dc46bb5fda07dcdd6761c6343fdec491951b071fda6",
      "0x6973775310887548b9bc0526feec1c5fbbae3ef4c91b3289cad59ff4a31fa6e2",
      "0xc9d59730fcc592fae79aedf1bd90363be1de66ded2fc58b06fd1dc3965447544",
      "0x2783745825b0e9440d8f62c4cee24f518632962ef6112675673eaad4aa176792",
      "0x7ce35bbd3f705190096cf97c5b03357b94f9a09057d3d17f6ea6fd12714719b9",
      "0xb98d780167358951bcbc315bd63daa98e14140efe379d7cf7bba6333b2e5474c",
      "0xf14d02a85773749cc7863bf21c1d060429a9826fdb280a6d3806d093b874bf52",
      "0x86a951dc9320b71ef11ee4b5522ea315f4c73e0add4c257a7ecba056264227db",
      "0xe0f1d301dd515db71cc00ab697267797469a09d3a5b8928107351e086c79b548",
      "0x223d84cc639875e3fb1db9a86e881276cb9bc855fd561a23cd49015ea6d95d84",
      "0x2679121eadb62ac673869b263b93212c8bfef71838af6dcf76c38ad5c1cfb82b",
      "0x7302e2398de8a5f4b2f2bf2fef9bbe985de0f6587d5e9ca6506e837bb550621d",
      "0x0f73506d46fb3268194628601fe220dd215083016a21a235cbaf41b39903194c",
      "0xc2cf64038579d57cf5bf944433eb06543810580198094b7c93b280f32aa742f1",
      "0x51a4392e48f1c7840499a2e2b5627ec886c955c1271ce810079b8da79c205121",
      "0x50c598726695002a1fdc7ec918fda1d837383c896ba3df377db467270814032b",
      "0xff738df7a7d02b289caf1f3abca8e3bbe83c7404fa7175f4a2bb862fdc315c9a",
      "0xc3adf448a8b477274ff129edd51c82aa8620a4630a17fc44de00bd875743368e",
      "0x5f5a9e1569d55e93af11bf51e9c8c579ac30e93c6ecc68f51fba2b4a0d2470f2",
      "0x53a22fed0fe79c3e307caec367cf0b5d1a5027c367c8d59402d0cf73b725e130",
      "0xbc74f21b1251d0d7d7bef6ec65de0acbe9bffee03eca5a563eb737ff01e3b3ad",
      "0x2fcf9b8b6689f2927e3ea6d17a5b13c202cc47f8730739e69af6a3b7da56ad52",
      "0x17b8fe4ffba27bb9f30b6f539c6f68ed268e596dfa96693d6cff220b2a3a3a96",
      "0x99477172724eae9b79a0b0807c3963f13073e2f54fb3d61dc817ad4760c6d999",
      "0xb599b01b7d6d1a3b4e3f169f7e8133e260cfbb415536b210c319c078ab4f79a6",
      "0x790f23f1ed6728d36d715652a59a3c8bb0c44fbbe3d10bb8d0f07ea71ad84fc7",
      "0x7460717055e45f9a28c2e175775bdae8b2d8ba6784c930bde6daaa2cd198dce8",
      "0x9e62b0332c192fcaa226f38a0bd32d17aa479ecea17e38fca78f57238368a604",
      "0xada52ebda60b993b93a318f04556c06487b6d334ea4792ea882951560716493f",
      "0xe5b0c409ce816c4d38a2bfc353cebbaa6e53dd1c726fe2477b065bee5877f734",
      "0x1e2f0bcb66acfb6bebcccb9087809e5c3d1693aa19153992b70a1045b92c488b",
      "0x357787f38361a4595d33ab272d4e780764f7c36d338f79e6e50d85c98797c02a",
      "0x1e8c7f0093fbf45b25b1ca96e767a03c6b0df33d1d9951042d9c7fbccabee933",
      "0x1ebb80e6ad9f54fe03308d6acb5985f8b751e659bcd1adda7669a179f5a829c5",
      "0x2da72e404857eec247954006f6f744e954234e7b419089a4d8a13a9f150dafd4",
      "0x01570ffd879d5658e9f68796e7db9b8f4071f815d8b520eb0238602d0cdfa26f",
      "0x8ad45f2d06c52b21107003f53198c77c1379f229edb78d5d8a81e6167b25d819",
      "0x5ba86c83c16e6e1416a234f0c161c3011fa7bc0757108f10f7567e740989450e",
      "0x2ff2ab1766d791ebc63d0471fd7f9f2ea5c8ef12101f19ab30a3ee4f74145af2",
      "0xe551f70057fafa622263e69ba9f62bf97ae0b3a2dff4e8616607066c6b7ad5e0",
      "0xaf4934b2cb48ee018d9a78c0e4e05339eece74ac1d4f7ea29b37147ce62fa212",
      "0x57b085efa1a7958a44f9d49230d247e625602ff1a5ce40095d6fa97530ae3b52",
      "0xf69f0c6d5153349df96cfdcd5ea7af4e2d36069f74c1586e912a01479fe47b21",
      "0x58ce2d769b58865aebc9bdfc69f7ec6e687aaab8333a5ccbc4c99a20397cc3c7",
      "0x70c077c8d00321e4d9cb31dcdb31bba53b98b7bffd8433d804511e32275c76f3",
      "0x323091c8bb1a54407915b449ec173bce42bebe7d9d3801331c3bfd90cb053550",
      "0xf96fb121bd40f2858401718489428cc792c1af8411dae66fd61c53c7b6582adc",
      "0xf5b38f037c9496a248a82003debfe21ebd41d19dbbc37e24dd690f521f8cd010",
      "0xb41955657877328a96ded97e469876faaa51b2126aef5fc823368ba06f471bdd",
      "0x7e28400e7140eae17d26a21a59c1330285bfd441ca0c2394f0602a61ec3b94fe",
      "0x09514fc9b40e3fe8254fb0484fcfb42fc667d6a12c2289f0a515cec89467c097",
      "0xa650c5e53c7b68503dee2d4b2582e0fa546c7cab465bb1bf69f24527d2243825",
      "0xd660f1e85cb7c947fc0c32796f49b7349240c36f50d63112c6e80434d878d607",
      "0x98208aa8f812674fd934c5799750dd76191263399734400f6b1099f25f1aa420",
      "0xce59aae8bff5e46c731c627d1613e5f05f6b615530155fd0e0170d80233bf19d",
      "0x0cd322fb873a9fa131f6cd5f996a7095426e302cf72c6b1bf2fedf5af1a53973",
      "0x403778cfeffb6d89290f74751a03f27a6b44c7213c831c71509a72cc44d211d7",
      "0x8910bf1b65e7ab163a04544d876412729eae264cdad9d5f5c142fca97cc3f468",
      "0x9e2629f702874d4cab0c8d7aa996cdf0c1e28563559fd8090e975c8b43f7c5da",
      "0x7184425b1e153ad4c264ff6ee39fe945c3478fceb10062bed7f84fc63b825441",
      "0xb7ff20ce4593e29d704125472c39ee6d7e610577fb0670cd28080940b66f0da3",
      "0xd6cdeb7ef37b46b42a1c8da039101ea3e296a0c80443749622309b6cb32ad5bd",
      "0x72bb0bfb35a8632f19e73f6b95cc3c17093407baf1e8b1aba6fa95d458274227",
      "0x42b4dd3574cef4c04ee1598b2613abd2a04db0ecfaa6cde89dd725b97a5e3396",
      "0x2138c080ba3bfc7e44f93f61c0be343aea5f6c9cfd90c3dbeb6506bce6986660",
      "0x2dd8337e4774e440d335283501a21db0ab7d006461952662fe5c22b311400060",
      "0xe33046ebbcfeec214dea7d4e13f632cbb1b147ab0700dac6824d4d023872f92e",
      "0xaed0d78b2326a7876333138469542e43c810f42ce607fb3415a333da27609999",
      "0x57e7bfe4c87462b9ed2eb9e893e05f67ebba3082d551baf6f6a2954ccb8924d9",
      "0xfec0b431ad594ec43ceb6fe1522ace71bc0ed674a2c65e4bad252ce552d2879d",
      "0xc865a37dfc79f84d37e3770ed095975129a565f65f3d02fdc8eb10032886e1dc",
      "0xe21e2c4feb59c24ab4db15c7ff4e63e91a7841e5a08ef431a1d417b948be282f",
      "0x21d67c2cf664e1e0482414c8a11de0ac01597fa74a3071141fb17eba1fa11c9f",
      "0xc4c92fc7b5bd25ebbfc65844d85376219a13705c9d7f213ba93cfc8dd71f0bcd",
      "0x9a61819b335804466d9c09ad2807154202e9e6a88d50c85ef20afc163ba3f093",
      "0xa6e921525033982f975e77588a7107e8f63c0b6b567209aca9352c8f31e7c5f6",
      "0x1ae504db4dde9f2d82eccc2c13db850edd9f8eb7af0df3fdab4a7cd43358b013",
      "0x4b39442f31a3fdc09d7156eaab9ddbaa105743c9b93732fbfb38f9f62a8d0da1",
      "0xdd511c99aa2fcb12e4b1aa9204ab1145b9a0c9758df18a8e18477841d0f53fce",
      "0x4b5b45ce67b47fc94461e10ea648f4a832c5e0dbffd6560d9d538f8d978a5909",
      "0x346a58f1fdaa751fc149fc5d07d03b740f7df964e5c266d9e02a01f1c32be87f",
      "0x4dac57d992da935d5859266666cbbcdf95af537a08ca53258e5738f0f44bdbee",
      "0x39c8fb8e0b0bf3bb42a2f12fb54a65555b4fd55b01bed3236d0f47edf6b960e3",
      "0xff8214b2ea605b629ab11381420e79c0ff37f423047b9ad8eec0a0e40a2487cc",
      "0x238ddc1946da5ca7c85c06d67f41638b68f5ae4ef78612e628167ee9c925e5a1"
    ],
    "transactionsRoot": "0xd5ac4c4bb5d2e024e7781da24e0c830525c2c3b1694d080019da38419bd1aecb",
    "uncles": []
  },
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | Block object.
author | string | The address of the author of the block.
difficulty | string | Integer of the difficulty for this block. 
extraData | string | The ‘extra data’ field of this block.
gasLimit | string | The maximum gas allowed in this block.
gasUsed | string | The total used gas by all transactions in this block.
hash | string | Hash of the block. null when its pending block.
logsBloom | string | The bloom filter for the logs of the block. `null` when its pending block.
miner | string | Alias of ‘author’.
mixHash | string | The mix hash.
nonce | string | Hash of the generated proof-of-work. `null` when its pending block. Missing in case of PoA.
number | string | The block number. `null` when its pending block.
parentHash | string | Hash of the parent block.
receiptsRoot | string | The root of the receipts tree of the block.
sealFields | array | Array of seal fields.
sha3Uncles | string | SHA3 of the uncles data in the block.
size | string | Integer the size of this block in bytes.
stateRoot | string | The root of the final state tree of the block.
timestamp | string | The unix timestamp for when the block was collated.
totalDifficulty | string | Integer of the total difficulty of the chain until this block.
transactions | array | Array of transaction objects, or 32 bytes transaction hashes depending on the last given parameter.
transactionsRoot | string | The root of the transaction trie of the block.
uncles | array | Array of uncle hashes.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error


### eth_getBlockByNumber

Returns information about a block by block number.

#### Request Parameters
> Sample Data

```json
{
  "block_parameter": "0x899eef",
  "show_tx_details: "false"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params": ["0x899eef",false],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getBlockByNumber [block_parameter] [show_tx_details]</code>

Parameter       | Type    | Description
----------------|---------|-------------
block_parameter           | string  | Integer block number, or the string 'latest', 'earliest' or 'pending'.
show_tx_details | boolean | If `true` it returns the full transaction objects, if `false` only the hashes of the transactions.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "author": "0xeea5b82b61424df8020f5fedd81767f2d0d25bfb",
    "difficulty": "0x8f3b4bbc6db44",
    "extraData": "0x424a30312f4254432e434f4d2f00074e81",
    "gasLimit": "0x981106",
    "gasUsed": "0x980b62",
    "hash": "0x6980a67cfb87b83005cc21310922d0809173dff9a13767a7dc403bfdf63b18a1",
    "logsBloom": "0x84a2e522ab32826a0a5c9e3c3040581128c1b5c40419523d1006c1c8439680c6162312e75314a02221912282b20a8bd81b93133209c4eb5ac022d4b360edbf851a138042c65288004b119e19982254378212200e6ace305b2a022c3492547058b411a1ca57a2841002cdb001e26f094a4d6710220ad49c548269a270313038aa50b0c05f4c130011040fc3dee131861108402f7f29159c4b0d8438ae833921b327122d2c80ace0c2b4078db07b78dd808b240b85e82008a36ad7300c0e2c3934141290a7cdf89f41ec4c012403b2b235208ec2a6a20a416847899cb3534c6333e936a43c51d33a0888938996eab38770a9e74122dcb380c81c8402101d5808d6",
    "miner": "0xeea5b82b61424df8020f5fedd81767f2d0d25bfb",
    "mixHash": "0x306c193162c2513c1b8ac0ed30ea8b32e24deae3bceeebc4977e43c12d4d3700",
    "nonce": "0xba6200996d3eb51c",
    "number": "0x899eef",
    "parentHash": "0x756d19a6ec9d0612dad99b1c4092adc098f112b87d0909ac1d0e95bd59bcf4e6",
    "receiptsRoot": "0x5fa05c98ac82b86f7c50b9800875080a6619b610dfdea0e759563131ddbaff5c",
    "sealFields": [
      "0xa0306c193162c2513c1b8ac0ed30ea8b32e24deae3bceeebc4977e43c12d4d3700",
      "0x88ba6200996d3eb51c"
    ],
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "size": "0x8d19",
    "stateRoot": "0xbfd16c094150c7a205990d9b7ebae66900dd3f986c64abfd1f5f84b4835d2e97",
    "timestamp": "0x5de09832",
    "totalDifficulty": "0x2c417a6dff0ab7e6a61",
    "transactions": [
      "0x8c7f557db86c456b1c1bf4f8ee9b9c61b3505b30b550968c9eabb11ee451120f",
      "0x1e8fd505ef60d3312b2afb7fbc2db426fcfcf9393960b5c06fc6f082ebb3a89f",
      "0x22e61ad6d7ea50e95cb5ec3877493381784d7f498d1755fc6379c97d7a3a5902",
      "0x97ccccbf333e5e83155f72c0eaaa354b5b9b3695ff92e8d96fb4ba9a3cdbdedc",
      "0x94d2edeb65889f81323ff7e9f7e68cd72ee6b5840db03b082952ecd89fea5cdc",
      "0x71fed9886897892b86a0aacffc3b18d29720580ab0f39759b34155a8b3d00146",
      "0xfa893777634ce7fabf90dab0c8567180828b55dcc1d8eaf564ff4de03b8a5527",
      "0xba36a43e80f460501f4069588cca0deda767073954ad72cb79030cefc580a6a7",
      "0xb22c728592179267d09aaad3f2b57e7f3a7e659aea8a3b30935c73d0652159b8",
      "0x8cb8ac5b6ef22d7a400e3c57c9e004c219d82fd3a5823eb3f15520b0468e02c8",
      "0xf5b25b6d7807759bb440d4c196408733dcc352a5341398f0063ae9eea94a2ff7",
      "0x5dac88661df90095522895781b2317b7daf01f99f5c2ed9d8c9440eb6ce71fa5",
      "0x8e4d5bc8d7735a32c3e86abd8e2c7a910a894f633be55e90b09e384ef2797990",
      "0x6b98e3e757336041ae64928afcbb64c832d609bb9a193aae2b21bb6f12681fe0",
      "0x78b7aaffe9eb0dc22ff53322590b94c64a4502d31f981218052c8b2fc732680b",
      "0xae30436278b22488900452b104565206b5f27070ca41219ff6cfdec7cdad93d2",
      "0x9b814adc4f6943405c1b358b846aa940aef91097ea7e6eed4c757eec58528442",
      "0xb00a47238959f9504542e3c678e3b4a9d37c6395935e2d4a16a15e1756d1a402",
      "0xf98128b93b3f9285292db37fc0cbb47c49020a5a580cec184765bb2493e23feb",
      "0xc1ced43235c26b0659e531af434772ade7f535ea98e39e28f1489b1d883f3e67",
      "0xf037d1597b45c5e3d25756687c6c2e092b982b7c558836d5e7f7b84c423ddcf4",
      "0xa228094820abccfcbd380c5c9f757bb75e893347e8a579c4d0a61592da3a92b6",
      "0xa0b5c64e62c66df4e45eb0e470aadd5f215537f233029ef00d284cf03c68490f",
      "0x362693814b23a1d842df99cdb89eaf7cebd874f4c15295e34e8500687b31b7e9",
      "0xe467c642a6cf14a05ae1ecd3593891026aac91c54ef5c5334d585702a6265322",
      "0xa386b9a428f7f0ce1e4378a983be4c81907a83ad3fc09c1014429116bd4d3ff4",
      "0x1ca8da030029f70d8d2054f3c6d0b565395b303b82e550b1e302552af9b28e20",
      "0xec7238f2673a1cd245c565daa5935b421afd48dc8bf465640943b2a1032ed7be",
      "0x9360f9d583eeb7d8033eedc08ef3618d278300f2f857fd3e5dc03f0f9f1a8257",
      "0xd0adbe2f610b1c531eacb64cf0cd1fb9518bdd82f9395f9ce12c53fee52927e4",
      "0x6880c4cb13e10d92cb1da12de57ef35adc9482a34ef0eba026b3160f35e04e22",
      "0x94b80a3d13c54d315c763a69ac5dd995303c815abdc69ba147961e1c6d235d82",
      "0x14a1adeb19da8b6a987d5ea179dc7974235758ffa815b3521d1b7108e15b2a90",
      "0xc9548ceb70f87398dd508d054b5a167e99e53ca1b93fce60ff2a15dfef1bb572",
      "0xb053295cac5d4ea4715f97525b06fa4ec1770d4e137134e37ca38b623496d662",
      "0xfff92c8653475136723588c8973c0032f25cd2e206a46a75ae77f313d5bb7d06",
      "0x4134839604c21ca483ae5566c9e6e7d708d9319e9b4afca3222ee11a99fee968",
      "0xaf2d60b9f8de2d06cd7777aeda94b35785366b16e540d64016090dc302d12a55",
      "0x267c3305c54668c3c5608b398978e827bbd334862749716c2d4c96e917f8b98c",
      "0x7907eae9a62bfe38e62476d9feb9125e39a73e82f8b8e646577dfe623a0b5371",
      "0x41f48caf7805d8565d06a70e6c5844e3a115e67b92755a24619d4881292ea2f1",
      "0xaae0c24c29168b54343f44be8ccaa7e3a4f5452056f354bc7d8f46735e1e419b",
      "0x9332463555765c4aecd6f15406709576d0f3e210210a170a7f13dfb4ae1ade6a",
      "0x099d55e335ebd1bbbf20309fee63d979e84245504288c71961be191517d3bdb1",
      "0x73655b63fd40780dc582484e3c0c578292af159f3b0d241dbbcfddbfa3a3c31d",
      "0x36128576779194f8e2023c3a2d1ad490ff533ecafe65d7fa92a9d07b783ea294",
      "0x7b74a8a8c408a9ec26e6a182f20d64a7124414d69d8b5d6afecc9d4de58c5a97",
      "0x7743a0c102ba0db156213858a5b3f9e4ce5440309e5b9bfa2ba446693487062e",
      "0x7c42f134c4811ae82a2328837c8d753bca8db4bc8f11c513d6ebafcce3143e65",
      "0x55869ee8789a8fc32f894343ba7a60d3cd08c6f019415270d6276b074fe65962",
      "0xcf8feebfa5693e2de8a8748af411be501610addea68b45e5284a019d6dedbad2",
      "0x9ddf86fb484d5936b7ef035a5b1084482842e4e41af842927355706c8d5e5686",
      "0xb0592253b55bfd3beeb100c888cd82b162d68e03ba5fdbd4a55d2236d6e6883e",
      "0xb1b01dd5a81e97de8236b574d3d2ca1adfcb3484d0cf631e8e0b162dcb9d9dc5",
      "0x4b1b0e57ed9afb2af730e42f3bf282b1449423b3a10c8e3df9a8ed5e0db8f510",
      "0x51f49c320a66e50a070d8b6250275ed8b61c76658b78e2bf663532efd01fd305",
      "0x313ee0a13b8b098002f52edf15652c14e8761fed7a92c61b4d9cae635892ee7e",
      "0x90c51ac39831ef9e7e5dd8b662e65112e45d2181c793a5331f588783555ddc2a",
      "0x35b727c5c57e2c375f8b32895c58d019b21e6e19f3e20acf45a06626cd2c8734",
      "0x1bd2d7d6002cc210f3427fc5c2125784c831edefbf0aa67f88fc012cf5f30d20",
      "0x2aeeb1be72152dfda39acefcab5e0d382854e15941e66734e0752a2939cf7171",
      "0x398e7c23519332404a09c478c3ebbdc8fd412b57a72fed96ae28490d4c8645c8",
      "0x25e6ad33aac8eb7c5f648de2cf3c93fdcabeb5771608298faeffa02ce6c14ca5",
      "0x616965177e41550e07a577b7361fc86c2c4bc4ad0d458fcc3683730ca923963a",
      "0xb24f34da66843850fc9323599989718dd3118140df5d2df28166e2d59a6b6348",
      "0x3d93c916e3a50abacdc260a3d416d6faf17a2a1a48a0e64edc41657a91e55945",
      "0x9e1066b3296ea327ac012825be5295ec246a08616266248c21ee674530a9f4d1",
      "0x2d2dbf2c042b5fc06ffa249bfb0a7450a41d53315c26f244a7dfc9fe9be44253",
      "0x68591cc4f07d0f06d9e1f184badedc76ee8b1e7c3ca18418453c8aa4ab51a6f8",
      "0x4dcfde1f227e1c839445a4414b2b17db979a46805f5b582eff448fa7d39c75c6",
      "0x553811a67dc6514fb96ce75ed881ae10699189f6fb8ebcbb0c64f2bb61714ab9",
      "0x1c89b9e484857142cfa2b9e3c3b059c93b9d227304c81dc2fbba8d26a0cd47f6",
      "0x93979b113d14c21c89cf90fb46287b17760f759e16b7d99d3965b6bbb1821090",
      "0xda7e2786e6aac21fdbf16904f5934c1938aeb52d62a96151979974f66a0f091a",
      "0x515eb46b0502963016a3d6713bf8e2da596bc6a523955a2254d859a62c904338",
      "0x7a78f8ede6645d1eae48d2ba248ff37adb3a4f2e7d3b68b65601b0cc98747da4",
      "0xe8fbb56dbecb1c03613a0329677f12fd0ca80235fa5cdd950bcfcb81efd3bf9d",
      "0xb223b4cf014e1419ef9e1f6555aed430e73c01f0a25e3f29cc3f946ffd22ec18",
      "0xdf1aab0db4db7e0582014d6535791f63e7567affaf368e312024b3c464ef8a76",
      "0x84ea882b51696784293e296057507e9abb92d3b2dc135d2b0156eac170e9d366",
      "0x8ee9d9271f3ba7c51e7660c551e31e26946574e0d8e4864e9eed99de23954552",
      "0x725c6091718776428909cc88a4163691fd5914c08e928b7d88ca2d5ed4b829f1",
      "0xed9dcac818559de2699434abfc160ff39b9a957586f905ad17c2ee32c4390fe7",
      "0xbfc13d421dfc8213a70d4fee815e942edc15060cdf53a2f64093262a7b8c6a52",
      "0xf433edce21943fd120f51a6164966d11fda5d45745b3b6ccd6fc397108f4aa76",
      "0x25b5976e9ec2304cc3b29683f3542c7f435c9bf752b7dc080b883f6b2b38a86e",
      "0x3cff17284741d86ab80dd7c6ff157986f6f9a2d8cb159009050fe96484d2bf5a",
      "0x59c134783c166b9049d2e3ace23ac6d496ae249fbc12ed5464d3607597be1ee9",
      "0x9ce8a9d57636fd21b53f0465148359aaa8c0774403ca44788035f18dabb5cf9e",
      "0x17013799e74eaac474d853386dd2d8477a29807857ba860e2bbe9214ebd1fb54",
      "0xc2e8d2239ae49b47e0a4549f134e04e626d988f7af24cda5e95e07e750360e84",
      "0x2e15dcd8b69843536b2fcc2e0286f3c09ba90534b3a19a88f301a1d9e62aa0c9",
      "0x804b66d5abfa6fc35e1a917de4d385514d00dabf834c9f61bb539231c872a384",
      "0xd2920e5de37bb78386438b8c3fd392bf0a6eba44c81143fd2b0127053f5f922a",
      "0x00c674e1311e58683d009d01af1989ae6a74b77c7371cb0692fac3fd5216d5e1",
      "0xbdd332a6b75affb5eb504bf8e54c8074c87ea7a13300de67d4ef1f9bf0d7f0fd",
      "0x7bf4a9bd232a2d3bcc95dee2b89e1fa9bb7e7405df6b59ec3cfa796f1e491d94",
      "0xfeff5d3daf3041226d7e56e893ad9b2bb554ec4dce4a586d23047f787a1def5a",
      "0x4d95edaca0652c7fae069a859d52b650bce2ff34a7c1190b12cb8ae00af197e9",
      "0x6b735f204c65443cb86e9f5793cd3095fe8ebc4aac9d9bb9693e56a09d9991dd",
      "0x29fa3b84ee421488a3e59e4d93a65b5f65041bd5551bc0b6f52282929f38fd65",
      "0x4b4b3b925cfa3015f3f74ed1562787475b0a1e9a556d58de3fbaddb545dbaf38",
      "0x40379603c7a7f1bf4c5277ee012ac5ae8a0e3426e397f532256114a62bc85e24",
      "0x5f35ca4f98a2c1924f51adbc1949d949e2a95c5c7f07adaa07158cc7b1af60e3",
      "0xa3d183e68ba9b5062e0b9719a41a510a47188338e4cd9bbaa93fb7ba5ca3e66e",
      "0x77fadb35eb7a1f7fe9088ea28bfd6a8a5359bb722e95a0d464a2c3dc5a0a10a7",
      "0xb97bca2e28a6f31ef6a118a43e98159eb075d3a218916358c5b64798dcb64c0c",
      "0x2ca5e0a727906be8832f5c0d123825a9c7a49a55d663f1fbea0f512f102f4309",
      "0x3b505362ff6cecfe3d51b6dc6df7bc450c40315ec978150b3f9e24180f628ec3",
      "0xa5fe52cd37ad5ab2e1c6497689aebdeac9c06d6f7585cb71eb8c42466ad3c70b",
      "0x3d4861eb2b2240bcc2d5d29f95e11be5461159eca4f81b886cf5d4a2dc160093",
      "0x7083e2db70d84378828069a9d82eef1c824a07725fe5d6655d4b557322af7d9b",
      "0x736d108ba97735a60333d2df0c6b9c7e6ddcc3f06cdd5b2631c1d7f9619f06ac",
      "0x30d21e8f625ec1d803cf8d7b7ecb61d9e19c6ee1fb286bbec806d8ba839f492c",
      "0xa9db7e5b44f2bdb2c7324c91178c2503dfa75f613efd9d4df560e50d6e074e9f",
      "0x5073228204952831c4068526916aac257361adf2b9e29241ed53a86e9433dbc2",
      "0xf06e14cdbd2a1b46ec57f7de1f955f50158be79a09bdad568960f892f99e1876",
      "0x7451543e985925400fe0331366b6c3aced952590f6f53235ca15a1f3066f0efe",
      "0xd3cf3cbdfe7a1a1ebf5438c4d8b98286de975b9c5687ce6b4663c10af21e7494",
      "0xa85785314c3c7c17b82db846cbfef67cc23a4f997dab6386cb3805164cdffc6c",
      "0xc36bb82002cada6ab52a874bff78d3e0b3d58d3a29d6bf9be438ea76d329bc0c",
      "0x8477b4d9ffdcf926b9771192ecf6469b6b9a371e6f9c578d4a9d7dee0eb9d157",
      "0x0153a845b3f3e00f7ecc0244e110dbabb9e84fc37b5e6aa42f759c6ed4623d7e",
      "0xed508572512eb795c332049103ed6abac0214ecacc124436c5bc3c61e66d5553",
      "0xb27b2cb463bfb95f4f3ab68931c1ceae26b8b078ebe0b9230b02ce6ee5a8371f",
      "0x9cba5b48599a4861800fcbf180c2b65ea72e905de964b9e3ade2351bfa6026ab",
      "0x0ca3b81fe65dac2662643b07b322c4452d260e654fd0fe5389d39956ade55ae4",
      "0xb316228a37e418408248bf5e32fc19cb97879c4789a40b1a7e50aa48955315c9",
      "0xa6002559dc983b436fd1639641a75a9b114362f1470d60c62d7d7bf807120052",
      "0x9edec20164a73509cbd7d0931f2cb434806e6ab71e212f763afb81a402a99129",
      "0x160f52ef17252c4705231c14905db97fd137dfe5ed93564cb833dae7c74ee063",
      "0x4ec287fdafc6fe1b20169bd461e766933bbd5871a41b7b00024bb19f86dc2cc8",
      "0x5b7d8412a446470c8b4debbd85758aba5c4cf52df9dbd6ab6e493620c1803965",
      "0x547dbd142590efabca87be6ce46b8ebcdd30f11af0292c6757c0623cdbcc69bf",
      "0x31be2b9136736d94078f6aa5fd9e951f1bf4bfc7df863581d77aa8eca6e3f88d",
      "0x8bd691433e4ce619090b0242d4f8cbd4963c173213e92f626d4c00dba7ee3730",
      "0x01ec3b80fded7f46deca8a82f9da88b0330acae4e4b3451b528ca1e074bc6bb8",
      "0x8d8e895b07af06142dc37d1fc42dcc302f3300bad1db278a057dee436d2bb3f7",
      "0x0b59ddd7483f656e949aa07da21ccc67d4808f1adcdfdb4e072cda221868d1b0",
      "0x341c2e0699ba717d29b1156f40e0b2bf02a79ddde35091893cf0475de7b749aa",
      "0xe835be19817369c878cde2c628ba51fffed116f47ec5a17accd2cce80f5d2b9e",
      "0x574ef6a04cd331f496541b2d61568ed86fd3893067832ab941a665ab5749134a",
      "0xceb2acfac747d8331245e466e539982695b73c647f3421eea8245b9fb72ddd38",
      "0xd9cfab1625fdead7bed56276ff24ee03edbefce0ab2e4550eaba0c470801b83b",
      "0x26f29b46f5db2c7c9f06510b0a4a705038700fd0f343d16e6dd8fdaec0435371",
      "0x2a870afb156e6c8ddf77c002dd9aba5a70502e9b55b7e1babf17512cdbcf446c",
      "0x470913545772a37496e8864066bf3d7b76476fb0b7f17f847ad8a70fe9273235",
      "0xfa60012c38d75e7369c317c87abba46ae00261861ff7470c329c3cb78d7b836d",
      "0x1ac92f9b79cca8f26ec9fcbd44f804229b3cc9023985ab15932267c0e99a7256",
      "0xbe11b21b41ca1dd9bf6d5223916f3b2dcf4673381538c6f0284dae92e759bcfc",
      "0x147a2115992fb0a6794e4c8302de09289ca896a9c0465c5779790fd5302a2276",
      "0x0928d1b66da6829d7599ba58eb56bf9b6104d32d6949a947c2bfab6e37ba248d",
      "0xc7f5cb3f7705742b6435cc28225bc04fcc8ba6334f8bdc2c1a6bd980908aa07a",
      "0x8e48c7c710189466854e84fc7c85267ed5c43813be06623b412c025537fdd632",
      "0x40c82396defede7004ec7065ffbe813e4b698f0661fb8fe7d1275f645406b890",
      "0xee8dd4cfb737fcf116f2a0ac7ab47a097a3dec869af1e7d4e373f2a4951ae1ac",
      "0xb81407241306461dbe9f0f171e1c192fa72feaa512a5b0ca706c2fcef7ac87e7",
      "0xa415cb01e232b758df9a364bf59f51b0fc38e3aa6f5365f5e1784569ca411d4a",
      "0x6b6185a0b54b44d8c6c4645633343561230dd5369341d00a40f69f4eb6d08465",
      "0x3017e334b2ae9f54560493bcda857b1c596dfec1a5af0190f32211ffeb413547",
      "0x6bd9884060174d294b6f34b00b0d058e94497ccbb1a214254c89cb5ec60d00a0",
      "0x5a87637f331f180292df0b5ea70b6525e044ca804de538e1d3e1a69f32aaae33",
      "0xb184a3a5d4f1aecb857102750df78d78fff2931d7e02855972635c156796ab0a",
      "0x27bf92c559aa54196d71dc9a615d377ecd3dc73fd37bce93e4a8cda60885d75c",
      "0x5c7ce01d89e08848ffbfc57ae995f731b7d3be10ae28218cbb357519ea6decbd",
      "0x30b1c00686deef42e22c78fb935ee9a22955dc6b001d2367f64d7fe22e2b5038",
      "0x2338a4709ab616b05abe43e74d1c37de7f512e2188dfe9ecb59e02829f9dfae1",
      "0x4da0008b0c6aff6e2ff5f2e12dfecaa7757998b779607d1b48befc964e18fe04",
      "0x6cf0687f9737bcc687028c618916318a5544ef038d0a01db0b51917ba93ec7be",
      "0x144b8feb2ca393a1c0efac70fb34ad9ef285fe9f3f85a1352559b606bac7c8a7",
      "0x3783da36cad1cbcc9614a372a1073cc79f6a178c1b65c6d0405056ea8b1441eb",
      "0x4c44b22cd23e4e4adce5ba6029a3e3650af9a754120c0425e7210a8d551774cb",
      "0x0546210776cbd2e00208c2fa6f3ff01a2858b0b4be32a5d3846962ec7323d724",
      "0xc4446797af855548a297f0032a117557a8a359c3fe5514879ee0bb86cba6aeff",
      "0x75c5d8abb889048c31f6b346b627425626ba4b3c1a8a34855e051c58b41bc423",
      "0xb8f0cf4192ec59e6272beabed5b63f395a93d85a31d5b4c1e76660f1838e54b0",
      "0xf09e4a64d058b37a9c81293a186466b8a81e4260b33a13a8c4b86f4310779e06",
      "0x31c7f885a2eec4bc8dbcb579fcaafb96b631dde10e37524a0c4bf6c8a3c26383",
      "0x2846cd96c05621d101d3fc3e3339ba01e14dd694c1003487f2cbbd1e037d9029",
      "0xee42740aa488645646955b9a782514a9d3b73822b2574c31d65e16e86360fd5f",
      "0x8a5f7d0b1408ab063c73c16b608aa4e1c0b9d2e111083126844b4506aca7b62c",
      "0x096df1a6e95c4a455aef820ae82d43b96804cd5b9fc290ca772bc8a79d5f8be5",
      "0x4f81f0054155eb439a0ad61826218e2695350b02c1c91535e171f156461b5748",
      "0x710ca4e51f2ae0cd187866e39400059ec349798e20f4b14f0f9c6ca18b2f83b9",
      "0x630e33d85b5a2ee3c1a0ab69bb3498bac4b0f58b4fff29eec4d345dd8f783afd",
      "0xe2d19501bb682569bdf30c1f96775f9d64c457430c20f557b37f98db7ecc1a5d",
      "0x2be6013804312d261a51ca94f27a0d5da8b357ff24cf6f231f3c9247266c010a",
      "0xf538b7a4591dc98fc5f473b39e38387741a2505ada5252d6bff511fe55a913e7",
      "0x90aafee7605b3dd4fae58ec820bd01000821ab1277ce4d2f2a56d81c56b5101f",
      "0x58bd6f6c48850ccbc8c379eec3848b4a800b2214ff9c99e3a845a428764cd130",
      "0x11960b9e1e467009f2cbd9db5e583be709bf836b1953f49dad21ae6913023769",
      "0x6eefb7f32cd377462c1cfb9fd93c8591010cf6a3c153b78343314e06752a0eb5",
      "0x0cda22dfec4780c41c3606925f4f9380fc0c16256ae420dcf8f9315a7a245b6e",
      "0xe8dedd36ef30b6ad6f626d0fd9d3dea2ab3a6497bfa62e94fdadedabf212c5c9",
      "0x54856976775236d1779b315a4a25981efe335352ba6a8fd7f1ca62bc080b465c",
      "0xd75886c66a98ade344e4000ce4e0f9521e7be82fc5e4a471b3d36616928b25fb",
      "0x0299b30b76b29737ed48290b9a6536a917231eac83056e3f607d64566b8d66e7",
      "0x219749ec4cc4a7bc33f43a38ba54cfd2e73c77bfae1dc42327caca98ec2b5a67",
      "0x93c94d4b68edf0e928b16e7411f99a6fe73e523023e9d0594a515dc0563afca0",
      "0x14b62bc786bf169abaa36865d91f41a9b30101905a79544a1ef9fe116a695be9",
      "0x72d3902f033643c03f40ff76121622a949afc9d426cf8657cb16f69910a52448",
      "0x74841fb4daaf9f16dc1792a3c6cc4b82ee8941c91e9e5bd63387846dfe15f891",
      "0x0e04b0528bb9edfdc0024e0e8077bea300e3d7a97684b1dbf672487727e61511",
      "0x4036773eaf5bd24d93547b25debff3e238a9a3147b8fbda0cfda78daf8395933",
      "0xf51bf5efecf882741cd32190a0702ea967e2a74754cbeeb6c8d9ed22978889e2"
    ],
    "transactionsRoot": "0x03384378a4d327b4bd34d198554cea29030d843e3df1a433350f6b1be94e550d",
    "uncles": []
  },
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | Block object.
author | string | The address of the author of the block.
difficulty | string | Integer of the difficulty for this block. 
extraData | string | The ‘extra data’ field of this block.
gasLimit | string | The maximum gas allowed in this block.
gasUsed | string | The total used gas by all transactions in this block.
hash | string | Hash of the block. null when its pending block.
logsBloom | string | The bloom filter for the logs of the block. `null` when its pending block.
miner | string | Alias of ‘author’.
mixHash | string | The mix hash.
nonce | string | Hash of the generated proof-of-work. `null` when its pending block. Missing in case of PoA.
number | string | The block number. `null` when its pending block.
parentHash | string | Hash of the parent block.
receiptsRoot | string | The root of the receipts tree of the block.
sealFields | array | Array of seal fields.
sha3Uncles | string | SHA3 of the uncles data in the block.
size | string | Integer the size of this block in bytes.
stateRoot | string | The root of the final state tree of the block.
timestamp | string | The unix timestamp for when the block was collated.
totalDifficulty | string | Integer of the total difficulty of the chain until this block.
transactions | array | Array of transaction objects, or 32 bytes transaction hashes depending on the last given parameter.
transactionsRoot | string | The root of the transaction trie of the block.
uncles | array | Array of uncle hashes.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getBlockTransactionCountByHash

Returns the number of transactions in a block from a block matching the given block hash.

#### Request Parameters
> Sample Data

```json
{
  "block_hash": "0x4faaf9dc3b7f58275d18d0d08a9c2aaf91c41102cfe915bbbd208506f1b85ebe"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByHash","params": ["0x4faaf9dc3b7f58275d18d0d08a9c2aaf91c41102cfe915bbbd208506f1b85ebe"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getBlockTransactionCountByHash [block_hash]</code>

Parameter       | Type    | Description
----------------|---------|-------------
block_hash           | string  | Hash of a block.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0xef",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | Integer of the number of transactions in this block.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getBlockTransactionCountByNumber

Returns the number of transactions in the block with the given block number.

#### Request Parameters
> Sample Data

```json
{
  "block_parameter": "latest"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByNumber","params": ["latest"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getBlockTransactionCountByNumber [block_parameter]</code>

Parameter       | Type    | Description
----------------|---------|-------------
block_parameter | string  | Integer block number, or the string 'latest', 'earliest' or 'pending'.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0xac",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | Integer of the number of transactions in this block.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getCode

Returns code at a given address.

#### Request Parameters
> Sample Data

```json
{
  "address": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
  "block_parameter": "latest"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getCode","params": ["0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b", "latest"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getCode [address] [block_parameter]</code>

Parameter       | Type    | Description
----------------|---------|-------------
block_parameter | string  | Integer block number, or the string 'latest', 'earliest' or 'pending'.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0x",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | The code from the given address.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getLogs

Returns an array of all logs matching a given filter object.

#### Request Parameters
> Sample Data

```json
{
  "fromBlock": "0x1",
  "toBlock": 0x2",
  "address": "0x8888f1f195afa192cfee860698584c030f4c9db1",
  "topics": "0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getLogs","params":[{"fromBlock":"0x1","toBlock":"0x2","address":"0x8888f1f195afa192cfee860698584c030f4c9db1","topics":["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"]}],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getLogs [fromBlock] [toBlock] [address] [topics]</code>

Parameter       | Type    | Description
----------------|---------|-------------
fromBlock           | string  | Integer block number, or 'latest' for the last mined block or 'pending', 'earliest' for not yet mined transactions.
toBlock | string | Integer block number, or 'latest' for the last mined block or 'pending', 'earliest' for not yet mined transactions.
address | string | Contract address or a list of addresses from which logs should originate.
topics | Array | Topics are order-dependent. It’s possible to pass in null to match any topic, or a subarray of multiple topics of which one should be matching.


#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": [
    {
    "address": "string",
    "blockHash": "string",
    "blockNumber": "string",
    "data": "string",
    "logIndex": "string",
    "topics": [
    "string"
    ],
    "transactionHash": "string",
    "transactionIndex": "string"
    }
  ]
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | array  | Array of log objects, or an empty array if nothing has changed since last poll.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getStorageAt

Returns the value from a storage position at a given address.

#### Request Parameters
> Sample Data

```json
{
  "address": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
  "storage_position": "0x0",
  "block_parameter": "0x2"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getStorageAt","params": ["0x407d73d8a49eeb85d32cf465507dd71d507100c1", "0x0", "0x2"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getStorageAt [address] [storage_position] [block_parameter]</code>

Parameter       | Type    | Description
----------------|---------|-------------
address           | string  | Address of the code.
storage_position | string | Integer of the position in the storage.
block_parameter | string | Integer block number, or the string 'latest', 'earliest' or 'pending'.


#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | array  | The value at this storage position.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getTransactionByBlockHashAndIndex

Returns information about a transaction by block hash and transaction index position.

#### Request Parameters
> Sample Data

```json
{
  "block_hash": "0x4faaf9dc3b7f58275d18d0d08a9c2aaf91c41102cfe915bbbd208506f1b85ebe",
  "tx_index_position": "0x0"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getTransactionByBlockHashAndIndex","params": ["0x4faaf9dc3b7f58275d18d0d08a9c2aaf91c41102cfe915bbbd208506f1b85ebe","0x0"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getTransactionByBlockHashAndIndex [block_hash] [tx_index_position]</code>

Parameter       | Type    | Description
----------------|---------|-------------
block_hash           | string  | Hash of block.
tx_index_position | string | Integer of the transaction index position.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "blockHash": "0x4faaf9dc3b7f58275d18d0d08a9c2aaf91c41102cfe915bbbd208506f1b85ebe",
    "blockNumber": "0x899eff",
    "chainId": null,
    "condition": null,
    "creates": null,
    "from": "0x4b21981d6b29545e7b0741ec88e46971e89fcd03",
    "gas": "0xf618",
    "gasPrice": "0xdf8475800",
    "hash": "0xaeb94782f2fb8749ed688eec51da4a92d556b2903d55feb6e55ed8024d564879",
    "input": "0x",
    "nonce": "0x70",
    "publicKey": "0x52da29319261294d49f0e8554ff82ae4804a028524c80053844bad3ac106cec6d70e66f709b7d9b4fabfb8c9896da61fc45c764a83fb1e7608d5c8ce50b1bb5e",
    "r": "0xf8e4a34b54843a744563a3eefe2dd592e8969ff0aac224c310d96cf060e594a2",
    "raw": "0xf86b70850df847580082f6189411667ee05a59d8b481d3f8081a9c0665680f105787d529ae9e860000801ba0f8e4a34b54843a744563a3eefe2dd592e8969ff0aac224c310d96cf060e594a2a05ac3adfbc859f4ea1cee116fd59ae0b28e417dc04c813bf9515323621036691f",
    "s": "0x5ac3adfbc859f4ea1cee116fd59ae0b28e417dc04c813bf9515323621036691f",
    "standardV": "0x0",
    "to": "0x11667ee05a59d8b481d3f8081a9c0665680f1057",
    "transactionIndex": "0x0",
    "v": "0x1b",
    "value": "0xd529ae9e860000"
  },
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | Transaction object.
blockHash | string | Hash of the block where this transaction was in. `null` when its pending.
blockNumber | string | Block number where this transaction was in. `null` when its pending.
chainId | string | The chain id of the transaction, if any.
condition | string | (optional) conditional submission, Block number in block or timestamp in time or `null`.
creates | string | Creates contract hash.
from | string | Address of the sender.
gas | string | Gas provided by the sender.
gasPrice | string | Gas price provided by the sender in Wei.
hash | string | Hash of the transaction.
input | string | The data send along with the transaction.
nonce | string | The number of transactions made by the sender prior to this one.
publicKey | string | Public key of the signer.
r | string | The R field of the signature.
raw | string | Raw transaction data.
s | string | The S field of the signature.
standardV | string | The standardised V field of the signature (0 or 1).
to | string | Address of the receiver. `null` when its a contract creation transaction.
transactionIndex | string | Integer of the transactions index position in the block. `null` when its pending.
v | string | The standardised V field of the signature.
value | string | Value transferred in Wei.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getTransactionByBlockNumberAndIndex

Returns information about a transaction by block number and transaction index position.

#### Request Parameters
> Sample Data

```json
{
  "block_parameter": "latest",
  "tx_index_position": "0x0"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getTransactionByBlockHashAndIndex","params": ["0x4faaf9dc3b7f58275d18d0d08a9c2aaf91c41102cfe915bbbd208506f1b85ebe","0x0"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getTransactionByBlockNumberAndIndex [block_parameter] [tx_index_position]</code>

Parameter       | Type    | Description
----------------|---------|-------------
block_parameter           | string  | Integer block number, or the string 'latest', 'earliest' or 'pending'.
tx_index_position | string | Integer of the transaction index position.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "blockHash": "0xb37a1ab54c006e8e33eed645154395f88386dc2d5fdd27ffc2a6def1506e4aff",
    "blockNumber": "0xa4d4e4",
    "chainId": "0x1",
    "condition": null,
    "creates": null,
    "from": "0xe62193bc1c340ef2205c0bd71691fad5e5072253",
    "gas": "0x7530",
    "gasPrice": "0x267ddb953d7",
    "hash": "0x858b3fe4664c5fd635665a58c8f6fcb18e50b58966973dca821d35351d630bd8",
    "input": "0x0000001d0000000000000000000000000000000000000000000000000000000000000072",
    "nonce": "0x6e98",
    "publicKey": "0x0cd7e5751be4a638ad4b2fe02d960f86b211e6a9aa6b1dcf156c70605c7231b1b8ccfa06727e226424d7a49ccd2fed2260159c59642eda637ae8c4f803748703",
    "r": "0xf0f639556c62bbe7dfd8ac06219c14c1470df14b47ae00d5ede457d8be1e5a30",
    "raw": "0xf88b826e98860267ddb953d78275309400000000b1786c9698c160d78232c78d6f6474fe80a40000001d000000000000000000000000000000000000000000000000000000000000007226a0f0f639556c62bbe7dfd8ac06219c14c1470df14b47ae00d5ede457d8be1e5a30a0613d0c71160c9eeec28d9cc9def558e3a551c52b40ec398a2ed0dc67083da230",
    "s": "0x613d0c71160c9eeec28d9cc9def558e3a551c52b40ec398a2ed0dc67083da230",
    "standardV": "0x1",
    "to": "0x00000000b1786c9698c160d78232c78d6f6474fe",
    "transactionIndex": "0x0",
    "v": "0x26",
    "value": "0x0"
  },
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | Transaction object.
blockHash | string | Hash of the block where this transaction was in. `null` when its pending.
blockNumber | string | Block number where this transaction was in. `null` when its pending.
chainId | string | The chain id of the transaction, if any.
condition | string | (optional) conditional submission, Block number in block or timestamp in time or `null`.
creates | string | Creates contract hash.
from | string | Address of the sender.
gas | string | Gas provided by the sender.
gasPrice | string | Gas price provided by the sender in Wei.
hash | string | Hash of the transaction.
input | string | The data send along with the transaction.
nonce | string | The number of transactions made by the sender prior to this one.
publicKey | string | Public key of the signer.
r | string | The R field of the signature.
raw | string | Raw transaction data.
s | string | The S field of the signature.
standardV | string | The standardised V field of the signature (0 or 1).
to | string | Address of the receiver. `null` when its a contract creation transaction.
transactionIndex | string | Integer of the transactions index position in the block. `null` when its pending.
v | string | The standardised V field of the signature.
value | string | Value transferred in Wei.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getTransactionByHash

Returns the information about a transaction requested by transaction hash.

#### Request Parameters
> Sample Data

```json
{
  "tx_hash": "0x091e312f48b184fc86c1d14f6dac5ffad3e49e10752d59d4de4e87655d0156f4"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params": ["0x091e312f48b184fc86c1d14f6dac5ffad3e49e10752d59d4de4e87655d0156f4"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getTransactionByHash [tx_hash]</code>

Parameter       | Type    | Description
----------------|---------|-------------
tx_hash           | string  | Hash of a transaction.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "blockHash": "0xf9d2f0c8a90055028ea4185e204de7c920cdeabb4135a7525e203089025f1c26",
    "blockNumber": "0x89aa13",
    "chainId": "0x1",
    "condition": null,
    "creates": null,
    "from": "0x4b729cf402cfcffd057e254924b32241aedc1795",
    "gas": "0x5208",
    "gasPrice": "0xdf8475800",
    "hash": "0x091e312f48b184fc86c1d14f6dac5ffad3e49e10752d59d4de4e87655d0156f4",
    "input": "0x",
    "nonce": "0x1cd69",
    "publicKey": "0x5957d98b80b878a98306bca8ff66f0fcac79894becea5d369cc4c348025f355d2fe4a9b1aa8a94f369529f6e3302c9d1d2f7cff0c0acc877091edf1534b96897",
    "r": "0x639332e84dccaffc930168855650530400d691c6ce51d6061695feee0434b63f",
    "raw": "0xf86f8301cd69850df8475800825208944e0ab04e7a1fd61dac88a1f4b54efc6de730d0d98803300c3206ed2c008025a0639332e84dccaffc930168855650530400d691c6ce51d6061695feee0434b63fa0674acfef71f6f9f4434e119d0c2b7580fddd28ac530c8f1a85d6b5af601df075",
    "s": "0x674acfef71f6f9f4434e119d0c2b7580fddd28ac530c8f1a85d6b5af601df075",
    "standardV": "0x0",
    "to": "0x4e0ab04e7a1fd61dac88a1f4b54efc6de730d0d9",
    "transactionIndex": "0x0",
    "v": "0x25",
    "value": "0x3300c3206ed2c00"
  },
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | Transaction object.
blockHash | string | Hash of the block where this transaction was in. `null` when its pending.
blockNumber | string | Block number where this transaction was in. `null` when its pending.
chainId | string | The chain id of the transaction, if any.
condition | string | (optional) conditional submission, Block number in block or timestamp in time or `null`.
creates | string | Creates contract hash.
from | string | Address of the sender.
gas | string | Gas provided by the sender.
gasPrice | string | Gas price provided by the sender in Wei.
hash | string | Hash of the transaction.
input | string | The data send along with the transaction.
nonce | string | The number of transactions made by the sender prior to this one.
publicKey | string | Public key of the signer.
r | string | The R field of the signature.
raw | string | Raw transaction data.
s | string | The S field of the signature.
standardV | string | The standardised V field of the signature (0 or 1).
to | string | Address of the receiver. `null` when its a contract creation transaction.
transactionIndex | string | Integer of the transactions index position in the block. `null` when its pending.
v | string | The standardised V field of the signature.
value | string | Value transferred in Wei.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getTransactionCount

Returns the number of transactions sent from an address.

#### Request Parameters
> Sample Data

```json
{
  "address": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
  "block_parameter": "latest"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getTransactionCount","params": ["0x407d73d8a49eeb85d32cf465507dd71d507100c1","latest"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getTransactionCount [address] [block_parameter]</code>

Parameter       | Type    | Description
----------------|---------|-------------
address           | string  | The address.
block_parameter | string | Integer block number, or the string 'latest', 'earliest' or 'pending'.


#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0x0",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | array  | Integer of the number of transactions send from this address.
id           | int  | ID number.


<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getTransactionReceipt

Returns the receipt of a transaction by transaction hash.

**Note**: Receipt not available for pending transactions.
#### Request Parameters
> Sample Data

```json
{
  "tx_hash": "0x091e312f48b184fc86c1d14f6dac5ffad3e49e10752d59d4de4e87655d0156f4"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params": ["0x091e312f48b184fc86c1d14f6dac5ffad3e49e10752d59d4de4e87655d0156f4"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getTransactionReceipt [tx_hash]</code>

Parameter       | Type    | Description
----------------|---------|-------------
tx_hash           | string  | Hash of a transaction.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "blockHash": "0xf9d2f0c8a90055028ea4185e204de7c920cdeabb4135a7525e203089025f1c26",
    "blockNumber": "0x89aa13",
    "contractAddress": null,
    "cumulativeGasUsed": "0x5208",
    "from": "0x4b729cf402cfcffd057e254924b32241aedc1795",
    "gasUsed": "0x5208",
    "logs": [],
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "status": "0x1",
    "to": "0x4e0ab04e7a1fd61dac88a1f4b54efc6de730d0d9",
    "transactionHash": "0x091e312f48b184fc86c1d14f6dac5ffad3e49e10752d59d4de4e87655d0156f4",
    "transactionIndex": "0x0"
  },
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | object  | Transaction receipt object.
blockHash | string  | Hash of the block where this transaction was in.
blockNumber | string  | Block number where this transaction was in.
contractAddress | string  | The contract address created, if the transaction was a contract creation, otherwise `null`.
cumulativeGasUsed | string | The total amount of gas used when this transaction was executed in the block.
from | string  | The address of the sender.
gasUsed | string  | The amount of gas used by this specific transaction alone.
logs | array | Array of log objects, which this transaction generated.
logsBloom | string  | A bloom filter of logs/events generated by contracts during transaction execution. Used to efficiently rule out transactions without expected logs.
status | string  | `0x0` indicates transaction failure, `0x1` indicates transaction success. Set for blocks mined after Byzantium hard fork EIP609, `null` before.
to | string | Address of the receiver. `null` when its a contract creation transaction
transactionHash | string  | Hash of the transaction.
transactionIndex | string  | Integer of the transactions index position in the block.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getUncleByBlockHashAndIndex

Returns information about a uncle of a block by hash and uncle index position.

**Note**: An uncle doesn’t contain individual transactions.
#### Request Parameters
> Sample Data

```json
{
  "block_hash": "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",
  "uncleindex_position": "0x0"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getUncleByBlockHashAndIndex","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35","0x0"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getUncleByBlockHashAndIndex [block_hash] [uncle_index_position]</code>

Parameter       | Type    | Description
----------------|---------|-------------
block_hash  | string |  Hash of a block.
uncle_index_position |  string |  Integer of the uncle index position.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "author": "0xea674fdde714fd979de3edf0f56aa9716b898ec8",
    "difficulty": "0xbf93da424b943",
    "extraData": "0x65746865726d696e652d657539",
    "gasLimit": "0x7a121d",
    "gasUsed": "0x79ea62",
    "hash": "0x824cce7c7c2ec6874b9fa9a9a898eb5f27cbaf3991dfa81084c3af60d1db618c",
    "logsBloom": "0x0948432021200401804810002000000000381001001202440000010020000080a016262050e44850268052000400100505022305a64000054004200b0c04110000080c1055c42001054b804940a0401401008a00112d80082113400c10006580140005011a40220020000010001c0a00082300434002000050840010102082801c2000148540201004491814020480080111a0300600000003800640024200109c00202010044000880000106810a1a010000028a0100000422000140011000050a2a44b3080001060800000540c108102102600d000004730404a880100600021080100403000180000062642408b440060590400080101e046f08000000430",
    "miner": "0xea674fdde714fd979de3edf0f56aa9716b898ec8",
    "mixHash": "0x0b15fe0a9aa789c167b0f5ade7b72969d9f2193014cb4e98382254f60ffb2f4a",
    "nonce": "0xa212d6400b89b3f6",
    "number": "0x5bad54",
    "parentHash": "0x05e19fb68d9ec798073808e8b3170875cb327d4b6cde7d6f60fe194677bb26fd",
    "receiptsRoot": "0x90807b32c4aa4610c57289de57fa68ba50ed53f14dd2c25f1862aa049029dcd6",
    "sealFields": [
      "0xa00b15fe0a9aa789c167b0f5ade7b72969d9f2193014cb4e98382254f60ffb2f4a",
      "0x88a212d6400b89b3f6"
    ],
    "sha3Uncles": "0xf763576c1ea6a8c61a206e16b1a2451bec5cba1c7545d7ff733a1e8c78715569",
    "size": null,
    "stateRoot": "0xebc7a1603bfffe0a14bdb89f898e2f2824abb40f04579beb7b920c56d6e273c9",
    "timestamp": "0x5b54143f",
    "totalDifficulty": "0x12ac10796e617adf1f3",
    "transactions": [],
    "transactionsRoot": "0x7562cba41e067b364b933e7b566fb2444f6954fef3964a5a487d4cd79d97a56c",
    "uncles": []
  },
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | object  | Transaction receipt object.
author |  string  | The address of the author of the block.
difficulty  | string  | Integer of the difficulty for this block.
extraData | string  | The ‘extra data’ field of this block.
gasLimit  | string  | The maximum gas allowed in this block.
gasUsed | string  | The total used gas by all transactions in this block.
hash  | string  | Hash of the block. null when its pending block.
logsBloom | string  | The bloom filter for the logs of the block. null when its pending block.
miner | string  | Alias of ‘author’.
mixHash | string |  The mix hash.
nonce | string  | Hash of the generated proof-of-work. null when its pending block. Missing in case of PoA.
number |  string | The block number. null when its pending block.
parentHash  | string  | Hash of the parent block.
receiptsRoot |  string  | The root of the receipts trie of the block.
sealFields  | array | Array of seal fields.
sha3Uncles  | string |  SHA3 of the uncles data in the block.
size  | string  | Integer the size of this block in bytes.
stateRoot | string  | The root of the final state trie of the block.
timestamp | string  | The unix timestamp for when the block was collated.
totalDifficulty | string |  Integer of the total difficulty of the chain until this block.
transactions  | array | Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.
transactionsRoot  | string |  The root of the transaction trie of the block.
uncles  | array | Array of uncle hashes.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getUncleByBlockNumberAndIndex

Returns information about a uncle of a block by number and uncle index position.

**Note**: An uncle doesn’t contain individual transactions.
#### Request Parameters
> Sample Data

```json
{
  "block_parameter": "0x29c",
  "uncle_index_position": "0x0"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getUncleByBlockNumberAndIndex","params": ["0x29c","0x0"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getUncleByBlockNumberAndIndex [block_parameter] [uncle_index_position]</code>

Parameter       | Type    | Description
----------------|---------|-------------
block_parameter | string |  Integer block number, or the string 'latest', 'earliest' or 'pending'.
uncle_index_position |  string |  Integer of the uncle index position.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "author": "0x5bf5e9cf9b456d6591073513de7fd69a9bef04bc",
    "difficulty": "0x57f117f5c",
    "extraData": "0x476574682f76312e302e302f77696e646f77732f676f312e342e32",
    "gasLimit": "0x1388",
    "gasUsed": "0x0",
    "hash": "0x932bdf904546a2287a2c9b2ede37925f698a7657484b172d4e5184f80bdd464d",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "miner": "0x5bf5e9cf9b456d6591073513de7fd69a9bef04bc",
    "mixHash": "0x4500aa4ee2b3044a155252e35273770edeb2ab6f8cb19ca8e732771484462169",
    "nonce": "0x24732773618192ac",
    "number": "0x299",
    "parentHash": "0xa779859b1ee558258b7008bbabff272280136c5dd3eb3ea3bfa8f6ae03bf91e5",
    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "sealFields": [
      "0xa04500aa4ee2b3044a155252e35273770edeb2ab6f8cb19ca8e732771484462169",
      "0x8824732773618192ac"
    ],
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "size": null,
    "stateRoot": "0x2604fbf5183f5360da249b51f1b9f1e0f315d2ff3ffa1a4143ff221ad9ca1fec",
    "timestamp": "0x55ba4827",
    "totalDifficulty": "0xc3601160946",
    "transactions": [],
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "uncles": []
  },
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | object  | Transaction receipt object.
author |  string  | The address of the author of the block.
difficulty  | string  | Integer of the difficulty for this block.
extraData | string  | The ‘extra data’ field of this block.
gasLimit  | string  | The maximum gas allowed in this block.
gasUsed | string  | The total used gas by all transactions in this block.
hash  | string  | Hash of the block. null when its pending block.
logsBloom | string  | The bloom filter for the logs of the block. null when its pending block.
miner | string  | Alias of ‘author’.
mixHash | string |  The mix hash.
nonce | string  | Hash of the generated proof-of-work. null when its pending block. Missing in case of PoA.
number |  string | The block number. null when its pending block.
parentHash  | string  | Hash of the parent block.
receiptsRoot |  string  | The root of the receipts trie of the block.
sealFields  | array | Array of seal fields.
sha3Uncles  | string |  SHA3 of the uncles data in the block.
size  | string  | Integer the size of this block in bytes.
stateRoot | string  | The root of the final state trie of the block.
timestamp | string  | The unix timestamp for when the block was collated.
totalDifficulty | string |  Integer of the total difficulty of the chain until this block.
transactions  | array | Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.
transactionsRoot  | string |  The root of the transaction trie of the block.
uncles  | array | Array of uncle hashes.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getUncleCountByBlockHash

Returns information about a uncle of a block by number and uncle index position.

**Note**: An uncle doesn’t contain individual transactions.
#### Request Parameters
> Sample Data

```json
{
  "block_hash": "0x4faaf9dc3b7f58275d18d0d08a9c2aaf91c41102cfe915bbbd208506f1b85ebe"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockHash","params": ["0x4faaf9dc3b7f58275d18d0d08a9c2aaf91c41102cfe915bbbd208506f1b85ebe"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getUncleByBlockNumberAndIndex [block_parameter] [uncle_index_position]</code>

Parameter       | Type    | Description
----------------|---------|-------------
block_hash  | string |  Hash of a block.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0x0",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | object  | Integer of the number of uncles in this block.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getUncleCountByBlockNumber

Returns the number of uncles in a block from a block matching the given block number.

#### Request Parameters
> Sample Data

```json
{
  "block_parameter": "latest"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockNumber","params": ["latest"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getUncleCountByBlockNumber [block_parameter]</code>

Parameter       | Type    | Description
----------------|---------|-------------
block_parameter | string |  Integer block number, or the string 'latest', 'earliest' or 'pending'.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0x0",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | object  | Integer of the number of uncles in this block.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getWork

Returns the hash of the current block, the seedHash, and the boundary condition to be met (“target”).

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getWork","params": [],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getWork</code>

This call does not take parameters.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": [
      "string"
  ],
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | array  | Array of current block header pow-hash, seed hash used for the DAG, boudary condition ("target") 2^256/difficulty and the current block number.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_hashrate

Returns the number of hashes per second that the node is mining with.

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_hashrate","params": [],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_hashrate</code>

This call does not take parameters.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0x0",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | array  | Number of hashes per second.
id           | int  | ID number.

**Note**: This call will only return 0x0 as the mining hash rate.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_mining

Returns `true` if client is actively mining new blocks.

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_mining","params": [],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_mining</code>

This call does not take parameters.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": false,
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | array  | `true` if the client is mining, otherwise `false`
id           | int  | ID number.

**Note**: This call will only return false.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_sendRawTransaction

Submits a signed transaction to the EVM network.

> Sample Data

```json
{
  "tx_data": "0xf86c8085098bca5a008307a1209437ede5f23cdcecfba18331126668ef705ea78489872386f26fc100008025a04058f161da3a3b028d2a0cbb98f3d22045f97a41150506cb9a52cbf0238622e8a077b6880c0d4c2c1c4ebe23c51d86954aebafaa766cd38806d299997f3face0dd"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":["0xf86c8085098bca5a008307a1209437ede5f23cdcecfba18331126668ef705ea78489872386f26fc100008025a04058f161da3a3b028d2a0cbb98f3d22045f97a41150506cb9a52cbf0238622e8a077b6880c0d4c2c1c4ebe23c51d86954aebafaa766cd38806d299997f3face0dd"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

#### Request Parameters

<code class="api-call">eth_sendRawTransaction [tx_data]</code>

Parameter       | Type    | Description
----------------|---------|-------------
tx_data           | string  | The signed transaction data

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0xbb4e52e164889e0f9a7228792ab18ba866a32934f0f136e0e563fdfaaefd34dc",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | array  | The transaction hash, or the zero hash if the transaction is not yet available.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_submitWork

Used for submitting a proof-of-work solution.

> Sample Data

```json
{
  "nonce": "0x0000000000000001",
  "pow_hash": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
  "mix_digest": "0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_submitWork","params": ["0x0000000000000001","0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef","0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

#### Request Parameters

<code class="api-call">eth_submitWork [nonce] [pow_hash] [mix_digest]</code>

Parameter       | Type    | Description
----------------|---------|-------------
nonce string |  The nonce found (64 bits).
pow_hash  | string  | The header’s pow-hash (256 bits)
mix_digest |  string |  The mix digest (256 bits).

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": false,
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | array  | `true` if the provided solution is valid, otherwise `false`.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_syncing

Returns an object with data about the sync status or `false`.<br>
**NOTE:** The `eth_syncing` method works as expected for the ETH
EVM. However, for the AVAX C chain EVM, the `eth_syncing` method
doesn't exist. To get information about AVAX C chain sync status, the
AVAX *info* space [info.isBootstrapped](/#avax-info-isbootstrapped-example)
method should be used instead.

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_syncing","params": [],"id":1}' | jq
```

<code class="api-call">eth_syncing</code>

This call does not take parameters.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": false,
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | boolean  | An object with sync status data or false, when not syncing.
id           | int  | ID number.
## Filter Methods
Call                                              | Description
--------------------------------------------------|---------------
[eth_getFilterChanges](#eth_getfilterchanges)         | Polling method for a filter, which returns an array of logs which occurred since last poll.
[eth_getFilterLogs](#eth_getfilterlogs)                         | Returns an array of all logs matching filter with given id.
[eth_newBlockFilter](#eth_newblockfilter)                             | Creates a filter in the node, to notify when a new block arrives. To check if the state has changed, call [eth_getFilterChanges](#eth_getfilterchanges).
[eth_newFilter](#eth_newfilter)                             | Creates a filter object, based on filter options, to notify when the state changes (logs). To check if the state has changed, call [eth_getFilterChanges](#eth_getfilterchanges).
[eth_newPendingTransactionFilter](#eth_newpendingtransactionfilter)                             | Creates a filter in the node, to notify when new pending transactions arrive. To check if the state has changed, call [eth_getFilterChanges](#eth_getfilterchanges).
[eth_uninstallFilter](#eth_uninstallfilter)                             | Uninstalls a filter with given id. Should always be called when watch is no longer needed. Additonally Filters timeout when they aren’t requested with [eth_getFilterChanges](#eth_getfilterchanges) for a period of time.

### eth_getFilterChanges

Polling method for a filter, which returns an array of logs which occurred since last poll.

#### Request Parameters
> Sample Data

```json
{
  "filter_id": "0x16"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getFilterChanges","params": ["0x16"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getFilterChanges [filter_id]</code>

Parameter       | Type    | Description
----------------|---------|-------------
filter_id           | string  | Filter ID.


#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "logIndex": "0x1",
      "blockNumber": "0x1b4",
      "blockHash": "0x8216c5785ac562ff41e2dcfdf5785ac562ff41e2dcfdf829c5a142f1fccd7d",
      "transactionHash": "0xdf829c5a142f1fccd7d8216c5785ac562ff41e2dcfdf5785ac562ff41e2dcf",
      "transactionIndex": "0x0",
      "address": "0x16c5785ac562ff41e2dcfdf829c5a142f1fccd7d",
      "data": "0x0000000000000000000000000000000000000000000000000000000000000000",
      "topics": ["0x59ebeb90bc63057b6515673c3ecf9438e5058bca0f92585014eced636878c9a5"]
    },
    ...
  ]
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | array  | Array of log objects, or an empty array if nothing has changed since last poll.
logIndex | string | Integer of the log index position in the block. Value is `null` when its pending.
blockNumber | string | The block number. Value is `null` when its pending.
blockHash | string | Hash of the block where this log was in. Value is `null` when its pending.
transactionHash | string | Hash of the transactions this log was created fom. Value is `null` when its pending.
transactionIndex | string | Integer of the transactions index position log was created from. Value is `null` when its pending.
address | string | Address from which this log originated.
data | string | Contains the non-indexed arguments of the log.
topics | array | Array of indexed log arguments.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_getFilterLogs

Returns an array of all logs matching filter with given id.

#### Request Parameters
> Sample Data

```json
{
  "filter_id": "0x16"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getFilterLogs","params": ["0x16"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_getFilterLogs [filter_id]</code>

Parameter       | Type    | Description
----------------|---------|-------------
filter_id           | string  | Filter ID.


#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "logIndex": "0x1",
      "blockNumber": "0x1b4",
      "blockHash": "0x8216c5785ac562ff41e2dcfdf5785ac562ff41e2dcfdf829c5a142f1fccd7d",
      "transactionHash": "0xdf829c5a142f1fccd7d8216c5785ac562ff41e2dcfdf5785ac562ff41e2dcf",
      "transactionIndex": "0x0",
      "address": "0x16c5785ac562ff41e2dcfdf829c5a142f1fccd7d",
      "data": "0x0000000000000000000000000000000000000000000000000000000000000000",
      "topics": ["0x59ebeb90bc63057b6515673c3ecf9438e5058bca0f92585014eced636878c9a5"]
    },
    ...
  ]
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | array  | Array of log objects, or an empty array if nothing has changed since last poll.
logIndex | string | Integer of the log index position in the block. Value is `null` when its pending.
blockNumber | string | The block number. Value is `null` when its pending.
blockHash | string | Hash of the block where this log was in. Value is `null` when its pending.
transactionHash | string | Hash of the transactions this log was created fom. Value is `null` when its pending.
transactionIndex | string | Integer of the transactions index position log was created from. Value is `null` when its pending.
address | string | Address from which this log originated.
data | string | Contains the non-indexed arguments of the log.
topics | array | Array of indexed log arguments.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_newBlockFilter

Creates a filter in the node, to notify when a new block arrives. To check if the state has changed, call [eth_getFilterChanges](#eth_getFilterChanges).

#### Request Parameters
> Sample Data

```json
{
  "filter_id": "0x16"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_newBlockFilter","params": [],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_newBlockFilter</code>

This call does not take parameters.


#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0x1",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | array  | A filter id.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_newFilter

Creates a filter object, based on filter options, to notify when the state changes (logs). To check if the state has changed, call [eth_getFilterChanges](#eth_getFilterChanges).

#### Request Parameters
> Sample Data

```json
{
  "fromBlock": "0x1",
  "toBlock": 0x2",
  "address": "0x8888f1f195afa192cfee860698584c030f4c9db1",
  "topics": "0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_newFilter","params": ["0x1","0x2","0x8888f1f195afa192cfee860698584c030f4c9db1","0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_newFilter [fromBlock] [toBlock] [address] [topics]</code>

Parameter       | Type    | Description
----------------|---------|-------------
fromBlock           | string  | Integer block number, or 'latest' for the last mined block or 'pending', 'earliest' for not yet mined transactions.
toBlock           | string  | Integer block number, or 'latest' for the last mined block or 'pending', 'earliest' for not yet mined transactions.
address           | string  | Contract address or a list of addresses from which logs should originate.
topics | array | Topics are order-dependent. It’s possible to pass in null to match any topic, or a subarray of multiple topics of which one should be matching.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0x1",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | array  | The filter id.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_newPendingTransactionFilter

Creates a filter in the node, to notify when new pending transactions arrive. To check if the state has changed, call [eth_getFilterChanges](#eth_getFilterChanges).

#### Request Parameters
> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_newPendingTransactionFilter","params": [],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_newPendingTransactionFilter</code>

This call does not take parameters.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0x3",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | array  | A filter id.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_newFilter

Creates a filter object, based on filter options, to notify when the state changes (logs). To check if the state has changed, call [eth_getFilterChanges](#eth_getFilterChanges).

#### Request Parameters
> Sample Data

```json
{
  "fromBlock": "0x1",
  "toBlock": 0x2",
  "address": "0x8888f1f195afa192cfee860698584c030f4c9db1",
  "topics": "0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"
}
```

> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_newFilter","params": ["0x1","0x2","0x8888f1f195afa192cfee860698584c030f4c9db1","0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_newFilter [fromBlock] [toBlock] [address] [topics]</code>

Parameter       | Type    | Description
----------------|---------|-------------
fromBlock           | string  | Integer block number, or 'latest' for the last mined block or 'pending', 'earliest' for not yet mined transactions.
toBlock           | string  | Integer block number, or 'latest' for the last mined block or 'pending', 'earliest' for not yet mined transactions.
address           | string  | Contract address or a list of addresses from which logs should originate.
topics | array | Topics are order-dependent. It’s possible to pass in null to match any topic, or a subarray of multiple topics of which one should be matching.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": "0x1",
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | array  | The filter id.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error

### eth_uninstallFilter

Uninstalls a filter with given id. Should always be called when watch is no longer needed. Additonally filters timeout when they aren’t requested with [eth_getFilterChanges](#eth_getFilterChanges) for a period of time.

#### Request Parameters
> Sample Request

```shell
# For ETH:
curl http://<NODE-URL>/xrs/evm_passthrough/ETH/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_newPendingTransactionFilter","params": [],"id":1}' | jq
# For AVAX C chain:
curl http://<NODE-URL>/xrs/evm_passthrough/AVAX/<PROJECT-ID>/ext/bc/C/rpc \ 
...
```

<code class="api-call">eth_uninstallFilter [filter_id]</code>

Parameter       | Type    | Description
----------------|---------|-------------
filter_id           | string  | Filter id.

#### Responses

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": true,
  "id": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | boolean  | `true` if the filter was successfully uninstalled, otherwise `false`.
id           | int  | ID number.

<aside class="success">
200 OK
</aside>

> ErrorResponse

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
id           | int  | ID number.
error        | ParseError (object) or InvalidRequest (object) or MethodNotFound (object) or InvalidParams (object) or InternalError (object) or InvalidInput (object) or ResourceNotFound (object) or ResourceUnavailable (object) or TransactionRejected (object) or MethodNotSupported (object) or LimitExceeded (object) or Json-rpcVersionNotSupported (object) | JSON RPC Error


