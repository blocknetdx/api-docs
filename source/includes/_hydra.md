# Hydra API

## JSON-RPC Methods

Call                                              | Description
--------------------------------------------------|---------------
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
[eth_getFilterChanges](#eth_getFilterChanges)         | Polling method for a filter, which returns an array of logs which occurred since last poll.
[eth_getFilterLogs](#eth_getFilterLogs)                         | Returns an array of all logs matching filter with given id.
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
[eth_newBlockFilter](#eth_newBlockFilter)                             | Creates a filter in the node, to notify when a new block arrives. To check if the state has changed, call [eth_getFilterChanges](#eth_getFilterChanges).
[eth_newFilter](#eth_newFilter)                             | Creates a filter object, based on filter options, to notify when the state changes (logs). To check if the state has changed, call [eth_getFilterChanges](#eth_getFilterChanges).
[eth_newPendingTransactionFilter](#eth_newPendingTransactionFilter)                             | Creates a filter in the node, to notify when new pending transactions arrive. To check if the state has changed, call [eth_getFilterChanges](#eth_getFilterChanges).
[eth_protocolVersion](#eth_protocolVersion)                             | Returns the current ethereum protocol version.
[eth_sendRawTransaction](#eth_sendRawTransaction)                             | Creates new message call transaction or a contract creation for signed transactions.
[eth_submitWork](#eth_submitWork)                             | Used for submitting a proof-of-work solution.
[eth_protocolVersion](#eth_subscribe)                             | Starts a subscription (on WebSockets / IPC / TCP transports) to a particular event. For every event that matches the subscription a JSON-RPC notification with event details and subscription ID will be sent to a client.
[eth_syncing](#eth_syncing)                             | Returns an object with data about the sync status or `false`.
[eth_uninstallFilter](#eth_uninstallFilter)                             | Uninstalls a filter with given id. Should always be called when watch is no longer needed. Additonally Filters timeout when they aren’t requested with [eth_getFilterChanges](#eth_getFilterChanges) for a period of time.
[net_listening](#net_listening)                             | Returns `true` if client is actively listening for network connections.
[net_peerCount](#net_peerCount)                             | Returns number of peers currenly connected to the client.
[net_version](#net_version)                             | Returns the current network protocol version.
[web3_clientVersion](#web3_clientVersion)                             | Returns the current client version.
[web3_sha3](#web3_sha3)                             | Returns Keccak-256 (not the standardized SHA3-256) of the given data.











### xrGetNetworkServices

This call is used to view the XRouter services currently supported on the network, along with the number of nodes supporting each service. XRouter SPV calls use the `xr::` namespace. XCloud services use the `xrs::` namespace and can be called using [xrService](#xrservice) and [xrServiceConsensus](#xrserviceconsensus).


#### Request Parameters

> Sample Request

```cli
blocknet-cli xrGetNetworkServices
```
<code class="api-call">xrGetNetworkServices</code>

This call does not take parameters.


#### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "reply": {
    "spvwallets": [ "xr::BLOCK", "xr::BTC", "xr::LTC", "xr::MNP", "xr::SYS", "xr::TBLOCK" ],
    "services": [ "xrs::BTCgetbestblockhash", "xrs::BTCgetblockhash", "xrs::BTCgettransaction", "xrs::SYSgetbestblockhash", "xrs::SYSgetblock", "xrs::SYSgetgovernanceinfo", "xrs::SYSgetmempool", "xrs::SYSlistoffers", "xrs::SYSofferinfo", "xrs::twilio" ],
    "nodecounts": {
      "xr::BLOCK": 27,
      "xr::BTC": 13,
      "xr::LTC": 21,
      "xr::MNP": 1,
      "xr::SYS": 9,
      "xrs::BTCgetbestblockhash": 12,
      "xrs::BTCgetblockhash": 12,
      "xrs::BTCgettransaction": 5,
      "xrs::SYSgetbestblockhash": 7,
      "xrs::SYSgetblock": 6,
      "xrs::SYSgetgovernanceinfo": 4,
      "xrs::SYSgetmempool": 4,
      "xrs::SYSlistoffers": 4,
      "xrs::SYSofferinfo": 4,
      "xrs::twilio": 1
    }
  },
  "uuid": "cd408df7-0ff8-4e29-b5cf-0148af83f93a"
}
```

Parameter       | Type    | Description
----------------|---------|-------------
reply           | object  | An object containing information on supported services.
spvwallets      | array   | An array of supported SPV wallets, represented by the asset's ticker.
services        | array   | An array of supported XCloud services.
nodecounts      | object  | An object of supported SPV wallets and XCloud services with how many nodes support each.
-- key          | string  | The SPV wallet or XCloud service with it's namespace.
-- value        | int     | The amount of nodes supporting each respective service.
uuid            | string  | The response ID, which can be used to view this response again with [xrGetReply](#xrgetreply).









