# XQuery API
## XQuery Authentication

Before data from XQuery API can be consumed by a client, a *Project* must be
requested and activated via the [Projects
API](/#projects-api-xquery-hydra). This gives you a `<PROJECT-ID>` and
`<API-KEY>` of an active project. The `<PROJECT-ID>` must be included in
the request URL, and the `<API-KEY>` must be  in the `Api-Key` header
of a request. See examples below for details on how these values are
included in XQuery requests.
<br>
See [Authentication Error Codes](/#authentication-error-codes) for possible error codes and their meanings. 

## Make XQuery Requests

### help example
On the right is a command line example using `curl` to request *help*
from XQuery about which endpoints are available to XQuery clients.

> XQuery Sample Request - help endpoint 

<code class="api-call">help</code>

```shell
# Example to display all available xquery endpoints via help endpoint:
curl http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/help \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" 
# NOTE: The -X POST parameter is required, but the "Content-Type"
# and "Api-Key" headers are optional for this help endpoint. 
```


<br><br><br><br><br><br><br><br><br><br>

By default, `curl` does not print the Response Headers. To see the Response Headers printed in the above example, add "`-D -`"
options to the `curl` command, like this ---->

<code class="api-call">help, print headers</code>

> XQuery Sample Request - help endpoint, print headers 

```shell
# Example to display all available xquery endpoints via help endpoint:
curl -D - http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/help \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" 
# NOTE: The -X POST parameter is required, but the "Content-Type"
# and "Api-Key" headers are optional for this help endpoint. 
```

<br><br><br><br><br><br><br><br><br><br><br>
Whether the response code is 200 (success) or not, the Response Headers
will always contain useful information about the project. ---->
>  XQuery Sample Response Headers

```shell
PROJECT-ID: <PROJECT-ID>
API-TOKENS: <API Token Count>
API-TOKENS-USED: <API Tokens Used Count>
API-TOKENS-REMAINING: <API Tokens Remaining Count>
```
<br><br><br><br><br><br><br><br><br><br><br>

> XQuery Sample Response Body - help endpoint

<aside class="success">
200 OK
</aside>

```shell
Powered by
	https://blocknet.co
	https://xquery.io

List available endpoints
	http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/help
	e.g. curl -X POST http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/help 

Current Graph
	http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/help/graph
	e.g. curl -X POST http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/help/graph | jq

GraphQL data types
	http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/help/schema
	e.g. curl -X POST http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/help/schema

GraphQL endpoint
	http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/indexer/
	e.g. See https://api.blocknet.co/#xquery-api
```

The Response Body of a request to the *help* endpoint returns a list
of all available XQuery endpoints ---->

### help/graph example
On the right is a command line example using `curl` to request
information from XQuery about the graph it's currently configured to index.

> XQuery Sample Request - help/graph  endpoint

<code class="api-call">help/graph</code>

```shell
# Example to display the xquery graph via help/graph endpoint:
curl http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/help/graph \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" | jq
# NOTE: The -X POST parameter is required, but the "Content-Type"
# and "Api-Key" headers are optional for this help/graph endpoint. 
```

> XQuery Sample Response - help/graph endpoint 

```json
{
  "type": "app",
  "volume": "/snode",
  "graph": "AVAX_ETH",
  "endpoint": "/indexer",
  "chains": [
    {
      "name": "ETH_UNISWAP_v2",
      "abi": "uniswapRouter_v2.json",
      "query": [
        {
          "name": "Withdrawal"
        },
        {
          "name": "Deposit"
        },
        {
          "name": "Approval"
        },
        {
          "name": "Burn"
        },
        {
          "name": "Mint"
        },
        {
          "name": "Swap"
        },
        {
          "name": "Sync"
        },
        {
          "name": "Transfer"
        },
        {
          "name": "Approval"
        },
        {
          "name": "Burn"
        },
        {
          "name": "Mint"
        },
        {
          "name": "Swap"
        },
        {
          "name": "Sync"
        },
        {
          "name": "Transfer"
        }
      ],
      "address": [
        {
          "name": "Uniswap_Router_v2",
          "address": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
        }
      ],
      "historical": [
        {
          "fromBlock": "10207858"
        }
      ]
    },
    {
      "name": "ETH_UNISWAP_v3",
      "abi": "uniswapRouter_v3.json",
      "query": [
        {
          "name": "Withdrawal"
        },
        {
          "name": "Deposit"
        },
        {
          "name": "Approval"
        },
        {
          "name": "Burn"
        },
        {
          "name": "Mint"
        },
        {
          "name": "Swap"
        },
        {
          "name": "Sync"
        },
        {
          "name": "Transfer"
        },
        {
          "name": "Approval"
        },
        {
          "name": "Burn"
        },
        {
          "name": "Mint"
        },
        {
          "name": "Swap"
        },
        {
          "name": "Sync"
        },
        {
          "name": "Transfer"
        }
      ],
      "address": [
        {
          "name": "Uniswap_Router_v3",
          "address": "0xe592427a0aece92de3edee1f18e0157c05861564"
        }
      ],
      "historical": [
        {
          "fromBlock": "12369634"
        }
      ]
    },
    {
      "name": "AVAX_PANGOLIN",
      "abi": "pangolinRouter.json",
      "query": [
        {
          "name": "Withdrawal"
        },
        {
          "name": "Deposit"
        },
        {
          "name": "Approval"
        },
        {
          "name": "Burn"
        },
        {
          "name": "Mint"
        },
        {
          "name": "Swap"
        },
        {
          "name": "Sync"
        },
        {
          "name": "Transfer"
        },
        {
          "name": "Approval"
        },
        {
          "name": "Burn"
        },
        {
          "name": "Mint"
        },
        {
          "name": "Swap"
        },
        {
          "name": "Sync"
        },
        {
          "name": "Transfer"
        }
      ],
      "address": [
        {
          "name": "Pangolin_Router",
          "address": "0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106"
        }
      ],
      "historical": [
        {
          "fromBlock": "57347"
        }
      ]
    }
  ]
}
```
<br><br><br><br><br><br><br><br><br>

<aside class="success">
200 OK
</aside>

The Response Body of a request to the *help/graph* endpoint returns a
JSON object of the structure of the current XQuery graph ---->

### help/schema example
On the right is a command line example using `curl` to request
information from XQuery about the currently available GraphQL data types.

> XQuery Sample Request - help/shema endpoint

<code class="api-call">help/schema</code>

```shell
# Example to display the xquery schema via help/schema endpoint:
curl http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/help/schema \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" 
# NOTE: The -X POST parameter is required, but the "Content-Type"
# and "Api-Key" headers are optional for this help/schema endpoint. 
```

> XQuery Sample Response - help/schema endpoint 

```shell
type xquery {
  id: Int!
  xquery_chain_name: Str!
  xquery_query_name: Str!
  xquery_timestamp: Int!
  xquery_tx_hash: Str!
  xquery_token0_name: Str!
  xquery_token0_symbol: Str!
  xquery_token0_decimals: Str!
  xquery_token1_name: Str!
  xquery_token1_symbol: Str!
  xquery_token1_decimals: Str!
  xquery_side: Str!
  xquery_address_filter: Str!
  xquery_blocknumber: Int!
  xquery_fn_name: Str!
  xquery_from: Str!
  xquery_to: Str!
  xquery_value: Str!
  xquery_src: Str!
  xquery_wad: Str!
  xquery_dst: Str!
  xquery_owner: Str!
  xquery_spender: Str!
  xquery_sender: Str!
  xquery_amount0: Str!
  xquery_amount1: Str!
  xquery_amount0in: Str!
  xquery_amount1in: Str!
  xquery_amount0out: Str!
  xquery_amount1out: Str!
  xquery_reserve0: Str!
  xquery_reserve1: Str!
  xquery_none: Str!
  xquery_deadline: Str!
  xquery_v: Str!
  xquery_r: Str!
  xquery_s: Str!
  xquery_data: Str!
  xquery_tokena: Str!
  xquery_tokenb: Str!
  xquery_amountadesired: Str!
  xquery_amountbdesired: Str!
  xquery_amountamin: Str!
  xquery_amountbmin: Str!
  xquery_token: Str!
  xquery_amounttokendesired: Str!
  xquery_amounttokenmin: Str!
  xquery_amountavaxmin: Str!
  xquery_amountout: Str!
  xquery_reservein: Str!
  xquery_reserveout: Str!
  xquery_amountin: Str!
  xquery_path: Str!
  xquery_amounta: Str!
  xquery_reservea: Str!
  xquery_reserveb: Str!
  xquery_liquidity: Str!
  xquery_approvemax: Str!
  xquery_amountoutmin: Str!
  xquery_amountinmax: Str!
  xquery_amountethmin: Str!
  xquery_params: Str!
  xquery_nonce: Str!
  xquery_expiry: Str!
  xquery_amountminimum: Str!
  xquery_recipient: Str!
  xquery_feebips: Str!
  xquery_feerecipient: Str!
  xquery_amount0delta: Str!
  xquery_amount1delta: Str!

}
```
<br><br><br><br><br><br><br><br><br>

<aside class="success">
200 OK
</aside>

The Response Body of a request to the *help/schema* endpoint returns a
list of currently available GraphQL data types ---->

### indexer example
On the right is a command line example using `curl` to make an SQL-style
query to retrieve specific data from one or more blockchains hosted
by `<NODE-URL>`. Note, data matching specific criteria can be
retrieved from multiple blockchains in a single query. For example,
data from ETH, AVAX, BSC, NEVM, FTM, etc... can be retrieved in a single query.

> XQuery Sample Request - indexer endpoint

<code class="api-call">indexer</code>

```shell
# Example to make an SQL query to xquery via indexer endpoint:
curl http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/indexer \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" 
    -d "{\"query\": \"query MyQuery { \
       xquery(where: {xquery_address_filter: {_eq: "Pegasys_Router"}}, order_by: {xquery_blocknumber: desc}, limit: 2) { \
        id \
        xquery_chain_name \
        xquery_query_name \
        xquery_timestamp \
        xquery_tx_hash \
        xquery_token0_name \
        xquery_token0_symbol \
        xquery_token0_decimals \
        xquery_token1_name \
        xquery_token1_symbol \
        xquery_token1_decimals \
        xquery_side \
        xquery_address_filter \
        xquery_blocknumber \
        xquery_from \
        xquery_to \
        xquery_sender \
        xquery_amount0 \
        xquery_amount1 \
        xquery_amount0in \
        xquery_amount1in \
        xquery_amount0out \
        xquery_amount1out \
        } }\"}" | jq
```

> XQuery Sample Response - indexer endpoint

```json
{
    "data": {
        "xquery": [
            {
                "id": 56821,
                "xquery_chain_name": "SYS",
                "xquery_query_name": "Approval",
                "xquery_timestamp": 0,
                "xquery_tx_hash": "0x427edc5a07d66701b1eb7af78eeb8e0dd381252d0eb8078d64e1184eb8ae973f",
                "xquery_token0_name": "Pegasys LP Token",
                "xquery_token0_symbol": "PLP",
                "xquery_token0_decimals": 18,
                "xquery_token1_name": "",
                "xquery_token1_symbol": "",
                "xquery_token1_decimals": null,
                "xquery_side": "",
                "xquery_address_filter": "Pegasys_Router",
                "xquery_blocknumber": 76113,
                "xquery_from": "",
                "xquery_to": "0x2048564077C14B231ECc8C2690829726e9F84a3b",
                "xquery_sender": "",
                "xquery_amount0": null,
                "xquery_amount1": null,
                "xquery_amount0in": null,
                "xquery_amount1in": null,
                "xquery_amount0out": null,
                "xquery_amount1out": null
            },
            {
                "id": 56822,
                "xquery_chain_name": "SYS",
                "xquery_query_name": "Transfer",
                "xquery_timestamp": 0,
                "xquery_tx_hash": "0x427edc5a07d66701b1eb7af78eeb8e0dd381252d0eb8078d64e1184eb8ae973f",
                "xquery_token0_name": "Tether USD",
                "xquery_token0_symbol": "USDT",
                "xquery_token0_decimals": 6,
                "xquery_token1_name": "",
                "xquery_token1_symbol": "",
                "xquery_token1_decimals": null,
                "xquery_side": "",
                "xquery_address_filter": "Pegasys_Router",
                "xquery_blocknumber": 76113,
                "xquery_from": "0x0Df7d92a4DB09d3828a725D039B89FDC8dfC96A6",
                "xquery_to": "0x2048564077C14B231ECc8C2690829726e9F84a3b",
                "xquery_sender": "",
                "xquery_amount0": null,
                "xquery_amount1": null,
                "xquery_amount0in": null,
                "xquery_amount1in": null,
                "xquery_amount0out": null,
                "xquery_amount1out": null
            }
        ]
    }
}
```
<br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br>

<aside class="success">
200 OK
</aside>

The Response Body of a request to the *indexer* endpoint returns a
JSON object containing all blockchain data matching the criteria
specified in the SQL query ---->
