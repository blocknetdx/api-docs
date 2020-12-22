# Hydra API

## Authentication

## Pub/Sub Methods

Call                                              | Description
--------------------------------------------------|---------------
[eth_subscribe](#eth_subscribe)                             | Starts a subscription (on WebSockets / IPC / TCP transports) to a particular 
[eth_unsubscribe](#eth_unsubscribe)                             | Unsubscribes from a subscription.

### eth_subscribe

Starts a subscription (on WebSockets / IPC / TCP transports) to a particular event. For every event that matches the subscription a JSON-RPC notification with event details and subscription ID will be sent to a client. **(WIP)**


#### Request Parameters
> Sample Data

```http
{
  "param": ""
}
```

> Sample Request

```http
curl https://<PROJECT-URL>/xrs/eth_passthrough/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_subscribe","params": [],"id":1}'
```

<code class="api-call">eth_subscribe</code>

This call does not take parameters.


#### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```http

```

Parameter       | Type    | Description
----------------|---------|-------------
reply           | object  | test.

### eth_unsubscribe

Unsubscribes from a subscription.

#### Request Parameters
> Sample Data

```http
{
  "subscription_id": "0xb53c4832f1dca4a5"
}
```

> Sample Request

```http
curl https://<PROJECT-URL>/xrs/eth_passthrough/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_unsubscribe","params": ["0xb53c4832f1dca4a5"],"id":1}'
```

<code class="api-call">eth_unsubscribe [subscription_id]</code>

Parameter       | Type    | Description
----------------|---------|-------------
subscription_id           | string  | Subscription ID.


#### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```http
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

## JSON-RPC Methods

Call                                              | Description
--------------------------------------------------|---------------
[web3_clientVersion](#web3_clientVersion)                             | Returns the current client version.
[web3_sha3](#web3_sha3)                             | Returns Keccak-256 (not the standardized SHA3-256) of the given data.
[eth_syncing](#eth_syncing)                             | Returns an object with data about the sync status or `false`.
[net_listening](#net_listening)                             | Returns `true` if client is actively listening for network connections.
[net_peerCount](#net_peerCount)                             | Returns number of peers currenly connected to the client.
[net_version](#net_version)                             | Returns the current network protocol version.
[eth_accounts](#eth_accounts)     | Returns a list of addresses owned by the client.
[eth_blockNumber](#eth_blockNumber)                           | Returns the number of the most recent block.
[eth_call](#eth_call)             | Executes a new message call immediately without creating a transaction on the block chain.
[eth_chainId](#eth_chainId)               | Returns the EIP155 chain ID used for transaction signing at the current best block. Null is returned if not available.
[eth_estimateGas](#eth_estimateGas)                 | Makes a call or transaction, which won’t be added to the blockchain and returns the used gas, which can be used for estimating the used gas.
[eth_gasPrice](#eth_gasPrice)                         | Returns the current gas price in wei.
[eth_getBalance](#eth_getBalance)                       | Returns the balance of the account of given address.
[eth_getBlockByHash](#eth_getBlockByHash) | Returns information about a block by hash.
[eth_getBlockByNumber](#eth_getBlockByNumber)             | Returns information about a block by block number.
[eth_getBlockTransactionCountByHash](#eth_getBlockTransactionCountByHash)           | Returns the number of transactions in a block from a block matching the given block hash.
[eth_getBlockTransactionCountByNumber](#eth_getBlockTransactionCountByNumber)           | Returns the number of transactions in a block from a block matching the given block number.
[eth_getCode](#eth_getCode)                           | Returns code at a given address.
[eth_getLogs](#eth_getLogs)                   | Returns an array of all logs matching a given filter object.
[eth_getStorageAt](#eth_getStorageAt)               | Returns the value from a storage position at a given address.
[eth_getTransactionByBlockHashAndIndex](#eth_getTransactionByBlockHashAndIndex)                             | Returns information about a transaction by block number and transaction index position.
[eth_getTransactionByHash](#eth_getTransactionByHash)                             | Returns the information about a transaction requested by transaction hash.
[eth_getTransactionCount](#eth_getTransactionCount)                             | Returns the number of transactions sent from an address.
[eth_getTransactionReceipt](#eth_getTransactionReceipt)                             | Returns the receipt of a transaction by transaction hash.
[eth_getUncleByBlockHashAndIndex](#eth_getUncleByBlockHashAndIndex)                             | Returns information about a uncle of a block by hash and uncle index position.
[eth_getUncleByBlockNumberAndIndex](#eth_getUncleByBlockNumberAndIndex)                             | Returns information about a uncle of a block by number and uncle index position.
[eth_getUncleCountByBlockHash](#eth_getUncleCountByBlockHash)                             | Returns the number of uncles in a block from a block matching the given block hash.
[eth_getUncleCountByBlockNumber](#eth_getUncleCountByBlockNumber)                             | Returns the number of uncles in a block from a block matching the given block number.
[eth_getWork](#eth_getWork)                             | Returns the hash of the current block, the seedHash, and the boundary condition to be met ("target").
[eth_hashrate](#eth_hashrate)                             | Returns the number of hashes per second that the node is mining with.
[eth_mining](#eth_mining)                             | Returns `true` if client is actively mining new blocks.
[eth_protocolVersion](#eth_protocolVersion)                             | Returns the current ethereum protocol version.
[eth_sendRawTransaction](#eth_sendRawTransaction)                             | Creates new message call transaction or a contract creation for signed transactions.
[eth_submitWork](#eth_submitWork)                             | Used for submitting a proof-of-work solution.
event. For every event that matches the subscription a JSON-RPC notification with event details and subscription ID will be sent to a client.



## Filter Methods
Call                                              | Description
--------------------------------------------------|---------------
[eth_getFilterChanges](#eth_getFilterChanges)         | Polling method for a filter, which returns an array of logs which occurred since last poll.
[eth_getFilterLogs](#eth_getFilterLogs)                         | Returns an array of all logs matching filter with given id.
[eth_newBlockFilter](#eth_newBlockFilter)                             | Creates a filter in the node, to notify when a new block arrives. To check if the state has changed, call [eth_getFilterChanges](#eth_getFilterChanges).
[eth_newFilter](#eth_newFilter)                             | Creates a filter object, based on filter options, to notify when the state changes (logs). To check if the state has changed, call [eth_getFilterChanges](#eth_getFilterChanges).
[eth_newPendingTransactionFilter](#eth_newPendingTransactionFilter)                             | Creates a filter in the node, to notify when new pending transactions arrive. To check if the state has changed, call [eth_getFilterChanges](#eth_getFilterChanges).
[eth_uninstallFilter](#eth_uninstallFilter)                             | Uninstalls a filter with given id. Should always be called when watch is no longer needed. Additonally Filters timeout when they aren’t requested with [eth_getFilterChanges](#eth_getFilterChanges) for a period of time.

### eth_getFilterChanges

Polling method for a filter, which returns an array of logs which occurred since last poll.

#### Request Parameters
> Sample Data

```http
{
  "filter_id": "0x16"
}
```

> Sample Request

```http
curl https://api.oracleminer.com/xrs/eth_passthrough/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_getFilterChanges","params": ["0x16"],"id":1}'
```

<code class="api-call">eth_getFilterChanges [filter_id]</code>

Parameter       | Type    | Description
----------------|---------|-------------
filter_id           | string  | Filter ID.


#### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```http
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












