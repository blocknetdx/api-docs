# Core API

The following set of calls are select, useful core API calls used to interact with the Blocknet blockchain.


Call                                              | Description
--------------------------------------------------|---------------
[getnetworkinfo](#getnetworkinfo)                 | Returns network info
[servicenodelist](#servicenodelist)               | Returns a list of registered Service Nodes
[listproposals](#listproposals)                   | Returns a list governance proposals










## getnetworkinfo

This call is used to retrieve an object containing various state info regarding P2P networking.


### Request Parameters

> Sample Request

```shell
blocknet-cli getnetworkinfo
```
<code class="api-call">getnetworkinfo</code>

This call does not take parameters.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
{
  "version": 4000100,
  "subversion": "/Blocknet:4.0.1/",
  "protocolversion": 70713,
  "xbridgeprotocolversion": 51,
  "xrouterprotocolversion": 50,
  "localservices": "000000000000040d",
  "localrelay": true,
  "timeoffset": -3,
  "networkactive": true,
  "connections": 12,
  "networks": [
    {
      "name": "ipv4",
      "limited": false,
      "reachable": true,
      "proxy": "",
      "proxy_randomize_credentials": false
    },
    {
      "name": "ipv6",
      "limited": false,
      "reachable": true,
      "proxy": "",
      "proxy_randomize_credentials": false
    },
    {
      "name": "onion",
      "limited": true,
      "reachable": false,
      "proxy": "",
      "proxy_randomize_credentials": false
    }
  ],
  "relayfee": 0.00010000,
  "incrementalfee": 0.00001000,
  "localaddresses": [
  ],
  "warnings": ""
}
```

Parameter              | Type    | Description
-----------------------|---------|-------------
version                | int     | The wallet version (i.e. `4000100` = v4.0.1.)
subversion             | string  | The wallet version string.
protocolversion        | int     | The consensus protocol version.
xbridgeprotocolversion | int     | The XBridge protocol version.
xrouterprotocolversion | int     | The XRouter protocol version.
connections            | int     | The number of peers your client has.
warnings               | string  | Any network of blockchain workings.

\* Only a limited portion of the response is described










## servicenodelist

This call is used to retrieve a list of all Service Nodes registered on the Blocknet network.


### Request Parameters

> Sample Request

```shell
blocknet-cli servicenodelist
```
<code class="api-call">servicenodelist</code>

This call does not take parameters.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
[
  {
    "snodekey": "0b38bfac90cc5c683b6a27f952b2346a1009fc0f9c1a0790809f185ab27b14ecc6",
    "tier": "SPV",
    "address": "BUVqkvqD7GCtHRHmchhXVuHqzm77cLuXs1",
    "timelastseen": 1581082882,
    "timelastseenstr": "2020-02-07T13:41:22.000Z",
    "exr": false,
    "status": "offline",
    "score": 0,
    "services": [
      "BLOCK",
      "BTC",
      "DASH",
      "DGB",
      "DYN",
      "GIN",
      "KLKS",
      "xr",
      "xr::BLOCK",
      "xr::BTC",
      "xr::LTC"
    ]
  },
  {
    "snodekey": "0d9f04d506df6a870b3d823ab209a281c95112c0c53afa1a222e051857822a9c95",
    "tier": "SPV",
    "address": "B1KELxido2Sqshd2pDvqr56VexPDRzSCi4",
    "timelastseen": 1581087561,
    "timelastseenstr": "2020-02-07T14:59:21.000Z",
    "exr": true,
    "status": "running",
    "score": 0,
    "services": [
      "BLOCK",
      "BTC",
      "xr",
      "xr::BLOCK",
      "xr::BTC",,
      "xr::ETH",
      "xr::LTC",
      "xr::XST",
      "xr::ZEN",,
      "xrs::eth_accounts",
      "xrs::eth_blockNumber",
      "xrs::eth_call",
      "xrs::eth_chainId",
      "xrs::eth_estimateGas",
      "xrs::eth_gasPrice",
      "xrs::eth_getBalance",
      "xrs::eth_getBlockByHash",
      "xrs::eth_getBlockByNumber",
      "xrs::eth_getBlockTransactionCountByHash",
      "xrs::eth_getBlockTransactionCountByNumber",
      "xrs::ltc_getbestblockhash",
      "xrs::sc_consensus",
      "xrs::sc_consensusblock",
      "xrs::xmr_get_block_count",
      "xrs::xmr_on_get_block_hash",
      "xrs::xst_getbestblockhash",
      "xrs::zen_getbestblockhash"
    ]
  }
]
```

Parameter       | Type    | Description
----------------|---------|-------------
Array           | array   | A list of information on all registered Service Nodes.
Object          | object  | An object containing information on each respective Service Node.
snodekey        | string  | The Service Node's pubkey.
tier            | string  | The tier of this Service Node (currently only `SPV` is supported).
address         | string  | The Service Node's BLOCK address.
timelastseen    | int     | The Unix time the Service Node was last seen.
timelastseenstr | string  | The ISO 8601 datetime the Service Node was last seen.
exr             | bool    | Whether the Service Node is an Enterprise XRouter node. EXR nodes have greater throughput and service capabilities.
status          | string  | The status of the Service Node (`running`, `offline`).
score           | array   | The Service Node's local reputation score.
services        | string  | An array of services the Service Node is supporting.










## listproposals

> Sample Data

```shell
{
  "sinceblock": 45000
}
```
This call is used to retrieves a list of proposals since the specified block. By default this returns proposals for the current and upcoming proposals.


### Request Parameters

> Sample Request

```shell
blocknet-cli listproposals 45000
```
<code class="api-call">listproposals [sinceblock]\(optional)</code>

Parameter       | Type    | Description
----------------|---------|-------------
sinceblock      | int     | (Optional Parameter)<br>Defaults to `0`<br>Specifies the block number of how far back to pull proposals from. A value of `0` will return the proposals for the current and upcoming Superblock.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
[  
  {
    "hash": "06dfa870ac90cc5c683b6a2752b2346a10012c0c3afa1a9fc0f9c1b3d823a209",
    "name": "sample-proposal-name",
    "superblock": 1339200,
    "amount": 1200,
    "address": "Bc6Vqzdo2hdexPDRELxVuH2pDvqhiCtHRz",
    "url": "https://google.com",
    "description": "This is a sample proposal for an example.",
    "votes_yes": 87,
    "votes_no": 3,
    "votes_abstain": 0,
    "status": "passing"
  }
]
```

Parameter       | Type    | Description
----------------|---------|-------------
Array           | array   | A list of details on all returned proposals.
Object          | object  | An object containing the details of each respective proposal.
hash            | string  | The HEX string of the proposal hash.
name            | string  | The name of the proposal.
superblock      | int     | The Superblock the proposal has been submitted for.
amount          | int     | The amount of BLOCK funding being requested by the proposal.
address         | string  | The address that your propsal will be paid out to if it passes.
url             | string  | The URL of your proposal description.
description     | string  | A short description of the proposal.
votes_yes       | int     | The number of yes votes.
votes_no        | int     | The number of no votes.
votes_abstain   | int     | The number of abstained votes.
status          | string  | The current status of the proposal.<br>`passing`: Active and passing. <br>`failing`: Active and failing. <br>`passed`: Finished and passed. <br>`failed`: Finished and failed. <br>`pending`: Active future proposal.









