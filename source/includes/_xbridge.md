# XBridge API

The following set of calls are used to conduct decentralized and trustless exchanges over the Blocknet network.

See [XBridge Setup](#xbridge-setup) for instructions on setting up your environment for use with XBridge.

Call                                          | Description
----------------------------------------------|---------------
[dxMakeOrder](#dxmakeorder)                   | Create an order
[dxTakeOrder](#dxtakeorder)                   | Take an existing order
[dxCancelOrder](#dxcancelorder)               | Cancel your own order
[dxGetOrder](#dxgetorder)                     | Returns order details by ID
[dxGetOrders](#dxgetorders)                   | Returns all orders with details
[dxGetMyOrders](#dxgetmyorders)               | Returns all your own orders with details
[dxGetOrderFills](#dxgetorderfills)           | Returns all recent filled orders
[dxGetOrderHistory](#dxgetorderhistory)       | Returns the OHLCV data my market
[dxGetLocalTokens](#dxgetlocaltokens)         | Returns all assets connected locally
[dxGetNetworkTokens](#dxgetnetworktokens)     | Returns all assets connected on the network
[dxGetTokenBalances](#dxgettokenbalances)     | Returns available balances for your assets
[dxGetNewTokenAddress](#dxgetnewtokenaddress) | Returns a newly generated address
[dxGetOrderBook](#dxgetorderbook)             | Returns open orders
[dxLoadXBridgeConf](#dxloadxbridgeConf)       | Reloads the `xbridge.conf`
[gettradingdata](#gettradingdata)             | Returns on-chain trading records
[Status Codes](#status-codes)                 | XBridge order status codes
[Error Codes](#error-codes)                   | Error codes










## dxMakeOrder

> Sample Data

```cli
{
  "maker": "SYS",
  "maker_size": "0.100",
  "maker_address": "SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK",
  "taker": "LTC",
  "taker_size": "0.01",
  "taker_address": "LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z",
  "type": "exact"
}
```
This call is used to create a new order. Only assets returned in [dxGetLocalTokens](#dxgetlocaltokens) can be used for the maker and taker asset. If an asset is not showing, it has not been properly configured (refer back to #2 in [XBridge Setup](#xbridge-setup). Use [dxGetNetworkTokens](#dxgetnetworktokens) to view all the assets currently supported on the network.

There are no fees to make orders, but there are transaction fees for the maker asset's native network.

**Note**: XBridge will first attempt use funds from the specified maker address. If this address does not have sufficient funds to cover the order, then it will pull funds from other addresses in the wallet. Change is deposited to the address with the largest input used. There are plans to add the capability of strictly only using funds from the specified address.


### Request Parameters

> Sample Request

```cli
blocknetdx-cli dxMakeOrder SYS 0.100 SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK LTC 0.01 LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z exact
```
<code class="api-call">dxMakeOrder [maker] [maker_size] [maker_address] [taker] [taker_size] [taker_address] [type] [dryrun]\(optional)</code>

Parameter     | Type          | Description
--------------|---------------|-------------
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
maker_size    | string(float) | Maker trading size. String is used to preserve precision.
maker_address | string        | Maker address for sending the outgoing asset.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
taker_size    | string(float) | Taker trading size. String is used to preserve precision.
taker_address | string        | Maker address for receiving the incoming asset.
type          | string        | This is the order type.<br>`exact`: Matches a specific order. <br>`limit`: (not yet supported) <br>`market`: (not yet supported)
dryrun        | string        | (Optional Parameter)<br>`dryrun`: Receive a response without actually submitting the order to the network.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "id": "2cd2a2ac-e6ff-4beb-9b45-d460bf83a092",
  "maker": "SYS",
  "maker_size": "0.100",
  "maker_address": "SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK",
  "taker": "LTC",
  "taker_size": "0.01",
  "taker_address": "LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z",
  "updated_at": "2018-01-16T00:00:00.00000Z",
  "created_at": "2018-01-15T18:15:30.12345Z",
  "block_id": "38729344720578447445023782734923740427863289632489723984723",
  "status": "created"
}
```

Parameter     | Type          | Description
--------------|---------------|-------------
id            | string        | The order UUID.
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
maker_size    | string(float) | Maker trading size. String is used to preserve precision.
maker_address | string        | Maker address for sending the outgoing asset.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
taker_size    | string(float) | Taker trading size. String is used to preserve precision.
taker_address | string        | Maker address for receiving the incoming asset.
updated_at    | string        | ISO 8601 datetime, with microseconds, of the last time the order was updated.
created_at    | string        | ISO 8601 datetime, with microseconds, of when the order was created.
block_id      | string        | The UUID block hash of the current block on the Blocknet blockchain at the time the order was created.
status        | string        | [View order status codes](#status-codes)


> Sample 400 Response

```cli
{
  "error": "Invalid parameters: Minimum supported size is 0.000001",
  "code": 1025,
  "name": "dxMakeOrder"
}
```

<aside class="warning">
400 Bad Request
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxMakeOrder"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


<aside class="warning">
Error Codes
</aside>

Code  | Type  | Error
------|-------|------------
1001  | 401   | Unauthorized
1011  | 400   | Invalid maker symbol
1012  | 400   | Invalid taker symbol
1018  | 400   | Unable to connect to wallet
1024  | 400   | Size must be greater than 0
1025  | 400   | Invalid parameters
1026  | 400   | Bad address
1002  | 500   | Internal server error










## dxTakeOrder

> Sample Data

```cli
{
  "id": "2cd2a2ac-e6ff-4beb-9b45-d460bf83a092",
  "send_address": "LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z",
  "receive_address": "SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK",
  "dryrun": "dryrun"
}
```
This call is used to take an order. Taking your own order is currently not supported. Only assets returned in [dxGetLocalTokens](#dxgetlocaltokens) can be used for the maker and taker asset. If an asset is not showing, it has not been properly configured (refer back to #2 in [XBridge Setup](#xbridge-setup). Use [dxGetNetworkTokens](#dxgetnetworktokens) to view all the assets currently supported on the network.

Taking an order has a 0.015 BLOCK fee. There are also transaction fees for the taker asset's native network. If the taker asset is BLOCK, there needs to be *at least* two UXTOs - one or more to cover the 0.015 BLOCK fee and one or more to cover the traded amount.

**Note**: XBridge will first attempt use funds from the specified send address. If this address does not have sufficient funds to cover the order, then it will pull funds from other addresses in the wallet. Change is deposited to the address with the largest input used. There are plans to add the capability of strictly only using funds from the specified address.


### Request Parameters

> Sample Request

```cli
blocknetdx-cli dxTakeOrder 2cd2a2ac-e6ff-4beb-9b45-d460bf83a092 LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK
```
<code class="api-call">dxTakeOrder [order_id] [send_address] [receive_address] [dryrun]\(optional)</code>

Parameter       | Type          | Description
----------------|---------------|-------------
id              | string        | UUID of order being filled.
send_address    | string        | Taker address for sending the outgoing asset.
receive_address | string        | Taker address for receiving the incoming asset.
dryrun          | string        | (Optional Parameter) <br>`dryrun`: Receive a response without actually submitting the order to the network.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "id": "2cd2a2ac-e6ff-4beb-9b45-d460bf83a092",
  "maker": "SYS",
  "maker_size": "0.100",
  "taker": "LTC",
  "taker_size": "0.01",
  "updated_at": "1970-01-01T00:00:00.00000Z",
  "created_at": "2018-01-15T18:15:30.12345Z",
  "status": "finished"
}
```

Parameter     | Type          | Description
--------------|---------------|-------------
id            | string        | The order UUID.
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
maker_size    | string(float) | Maker trading size. String is used to preserve precision.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
taker_size    | string(float) | Taker trading size. String is used to preserve precision.
updated_at    | string        | ISO 8601 datetime, with microseconds, of the last time the order was updated.
created_at    | string        | ISO 8601 datetime, with microseconds, of when the order was created.
status        | string        | Order status: `finished`


> Sample 400 Response

```cli
{
  "error": "Transaction 4306aa07113c4562ffa6278ecd9a3990ead53a0227f74ddd9122272e453ae07d not found",
  "code": 1021,
  "name": "dxTakeOrder"
}
```

<aside class="warning">
400 Bad Request
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxTakeOrder"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


<aside class="warning">
Error Codes
</aside>

Code  | Type  | Error
------|-------|------------
1001  | 401   | Unauthorized
1011  | 400   | Invalid maker symbol
1012  | 400   | Invalid taker symbol
1020  | 400   | Invalid order
1021  | 400   | Invalid order id
1025  | 400   | Invalid parameters
1026  | 400   | Bad address
1002  | 500   | Internal server error










## dxCancelOrder

> Sample Data

```cli
{
  "id": "2cd2a2ac-e6ff-4beb-9b45-d460bf83a092"
}
```
This call is used to cancel one of your own orders, which automatically rolls back the order if a trade is in process.


### Request Parameters

> Sample Request

```cli
blocknetdx-cli dxCancelOrder 2cd2a2ac-e6ff-4beb-9b45-d460bf83a092
```
<code class="api-call">dxCancelOrder [order_id]</code>

Parameter     | Type          | Description
--------------|---------------|-------------
id            | string        | ID of order being cancelled.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "id": "2cd2a2ac-e6ff-4beb-9b45-d460bf83a092",
  "maker": "SYS",
  "maker_size": "0.100",
  "maker_address": "SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK",
  "taker": "LTC",
  "taker_size": "0.01",
  "taker_address": "LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z",
  "updated_at": "1970-01-01T00:00:00.00000Z",
  "created_at": "2018-01-15T18:15:30.12345Z",
  "status": "canceled"
}
```

Parameter     | Type          | Description
--------------|---------------|-------------
id            | string        | The order UUID.
maker         | string        | Sending asset of party cancelling the order.
maker_size    | string(float) | Sending trading size. String is used to preserve precision.
maker_address | string        | Address for sending the outgoing asset.
taker         | string        | Receiving asset of party cancelling the order.
taker_size    | string(float) | Receiving trading size. String is used to preserve precision.
taker_address | string        | Address for receiving the incoming asset.
updated_at    | string        | ISO 8601 datetime, with microseconds, of the last time the order was updated.
created_at    | string        | ISO 8601 datetime, with microseconds, of when the order was created.
status        | string        | [View order status codes](#status-codes)


> Sample 400 Response

```cli
{
  "error": "Invalid order id",
  "code": 1021,
  "name": "dxCancelOrder"
}
```

<aside class="warning">
400 Bad Request
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxCancelOrder"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


<aside class="warning">
Error Codes
</aside>

Code  | Type  | Error
------|-------|------------
1001  | 401   | Unauthorized
1021  | 400   | Invalid order id
1025  | 400   | Invalid parameters
1002  | 500   | Internal server error










## dxGetOrder

> Sample Data

```cli
{
  "id": "2cd2a2ac-e6ff-4beb-9b45-d460bf83a092"
}
```
This call is used to retrieve order info.


### Request Parameters

> Sample Request

```cli
blocknetdx-cli dxGetOrder 2cd2a2ac-e6ff-4beb-9b45-d460bf83a092
```
<code class="api-call">dxGetOrder [order_id]</code>

Parameter     | Type          | Description
--------------|---------------|-------------
id            | string        | ID of order of interest.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "id": "2cd2a2ac-e6ff-4beb-9b45-d460bf83a092",
  "maker": "SYS",
  "maker_size": "0.100",
  "taker": "LTC",
  "taker_size": "0.01",
  "updated_at": "1970-01-01T00:00:00.00000Z",
  "created_at": "2018-01-15T18:15:30.12345Z",
  "status": "open"
}
```

Parameter     | Type          | Description
--------------|---------------|-------------
id            | string        | The order UUID.
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
maker_size    | string(float) | Maker trading size. String is used to preserve precision.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
taker_size    | string(float) | Taker trading size. String is used to preserve precision.
updated_at    | string        | ISO 8601 datetime, with microseconds, of the last time the order was updated.
created_at    | string        | ISO 8601 datetime, with microseconds, of when the order was created.
status        | string        | [View order status codes](#status-codes)


> Sample 400 Response

```cli
{
  "error": "Invalid order id",
  "code": 1021,
  "name": "dxGetOrder"
}
```

<aside class="warning">
400 Bad Request
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetOrder"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


<aside class="warning">
Error Codes
</aside>

Code  | Type  | Error
------|-------|------------
1001  | 401   | Unauthorized
1021  | 400   | Invalid order id
1025  | 400   | Invalid parameters
1002  | 500   | Internal server error










## dxGetOrders

This call is used to retrieve all orders of every market pair. It will only return orders for assets returned in dxGetLocalTokens.

**Note**: This call will only return orders for markets with both assets returned in dxGetLocalTokens.


### Request Parameters

> Request

```cli
blocknetdx-cli dxGetOrders
```
<code class="api-call">dxGetOrders</code>

This call does not take parameters.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
[
  {
    "id": "2cd2a2ac-e6ff-4beb-9b45-d460bf83a092", 
    "maker": "SYS",
    "maker_size": "0.100",
    "taker": "LTC",
    "taker_size": "0.01",
    "updated_at": "2018-01-15T18:25:05.12345Z", 
    "created_at": "2018-01-15T18:15:30.12345Z", 
    "status": "finished"
  },
  {
    "id": "12b672d4-cc43-4941-8b35-b1d0ea110908", 
    "maker": "SYS",
    "maker_size": "0.100",
    "taker": "LTC",
    "taker_size": "0.01",
    "updated_at": "2018-01-15T18:25:05.12345Z", 
    "created_at": "2018-01-15T18:15:30.12345Z", 
    "status": "finished"
  },
  {
    "id": "01639dfa-db96-440c-85bd-6d4feda8ace6", 
    "maker": "SYS",
    "maker_size": "0.100",
    "taker": "LTC",
    "taker_size": "0.01",
    "updated_at": "2018-01-15T18:25:05.12345Z", 
    "created_at": "2018-01-15T18:15:30.12345Z", 
    "status": "finished"
  }
]
```

Parameter     | Type          | Description
--------------|---------------|-------------
Array         | array         | An array of all orders with each order having the following parameters.
id            | string        | The order UUID.
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
maker_size    | string(float) | Maker trading size. String is used to preserve precision.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
taker_size    | string(float) | Taker trading size. String is used to preserve precision.
updated_at    | string        | ISO 8601 datetime, with microseconds, of the last time the order was updated.
created_at    | string        | ISO 8601 datetime, with microseconds, of when the order was created.
status        | string        | [View order status codes](#status-codes)


> Sample 400 Response

```cli
{
  "error": "Invalid parameters: This function does not accept any parameters",
  "code": 1025,
  "name": "dxGetOrders"
}
```

<aside class="warning">
400 Bad Request
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetOrders"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


<aside class="warning">
Error Codes
</aside>

Code  | Type  | Error
------|-------|------------
1001  | 401   | Unauthorized
1025  | 400   | Invalid parameters
1002  | 500   | Internal server error










## dxGetMyOrders

This call is used to retrieve all of your orders (of all states) from the local client. It will only return orders from your current session.


### Request Parameters

> Request

```cli
blocknetdx-cli dxGetMyOrders
```
<code class="api-call">dxGetMyOrders</code>

This call does not take parameters.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
[
  {
    "id": "2cd2a2ac-e6ff-4beb-9b45-d460bf83a092", 
    "maker": "SYS",
    "maker_size": "0.100",
    "taker": "LTC",
    "taker_size": "0.01",
    "updated_at": "2018-01-15T18:25:35.12345Z", 
    "created_at": "2018-01-15T18:15:37.12345Z", 
    "status": "finished"
  },
  {
    "id": "12b672d4-cc43-4941-8b35-b1d0ea110908", 
    "maker": "SYS",
    "maker_size": "0.100",
    "taker": "LTC",
    "taker_size": "0.01",
    "updated_at": "2018-01-15T18:25:25.12345Z", 
    "created_at": "2018-01-15T18:15:32.12345Z", 
    "status": "finished"
  },
  {
    "id": "01639dfa-db96-440c-85bd-6d4feda8ace6", 
    "maker": "SYS",
    "maker_size": "0.100",
    "taker": "LTC",
    "taker_size": "0.01",
    "updated_at": "2018-01-15T18:25:52.12345Z", 
    "created_at": "2018-01-15T18:15:26.12345Z", 
    "status": "finished"
  }
]
```

Parameter     | Type          | Description
--------------|---------------|-------------
Array         | array         | An array of all orders with each order having the following parameters.
id            | string        | The order UUID.
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
maker_size    | string(float) | Maker trading size. String is used to preserve precision.
maker_address | string        | Address for sending the outgoing asset.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
taker_size    | string(float) | Taker trading size. String is used to preserve precision.
taker_address | string        | Address for receiving the incoming asset.
updated_at    | string        | ISO 8601 datetime, with microseconds, of the last time the order was updated.
created_at    | string        | ISO 8601 datetime, with microseconds, of when the order was created.
status        | string        | [View order status codes](#status-codes)


> Sample 400 Response

```cli
{
  "error": "Invalid parameters: This function does not accept any parameters",
  "code": 1025,
  "name": "dxGetMyOrders"
}
```

<aside class="warning">
400 Bad Request
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetMyOrders"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


<aside class="warning">
Error Codes
</aside>

Code  | Type  | Error
------|-------|------------
1001  | 401   | Unauthorized
1025  | 400   | Invalid parameters
1002  | 500   | Internal server error










## dxGetOrderFills 

> Sample Data

```cli
{
  "maker": "SYS",
  "taker": "LTC",
  "combined": false
}
```
This call is used to retrieve all recent filled orders by a given trade pair. It will only return orders that have been filled in your current session.


### Request Parameters

> Sample Request

```cli
blocknetdx-cli dxGetOrderFills SYS LTC false
```
<code class="api-call">dxGetOrderFills [maker] [taker] [combined]\(optional)</code>

Parameter     | Type          | Description
--------------|---------------|-------------
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
combines      | boolean       | (Optional Parameter) Defaults to `true`.<br>`true`: Receive filled orders for both the maker and taker assets as specified, as well as the inverse with the maker asset as the taker and the taker asset as the maker.<br>`false`: Receive filled orders only with the maker and taker assets as specified.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
[
  {
    "id": "00a2afce-4754-443e-93d6-1f600501e3ac",
    "time": "2018-01-16T13:15:05.12345Z",
    "maker": "SYS",
    "maker_size": "101.00000000",
    "taker": "LTC",
    "taker_size": "0.01000000"
  },
  {
    "id": "7de354c3-6c66-44e7-bf30-eaf942df5fcc",
    "time": "2018-01-16T13:15:05.12345Z",
    "maker": "LTC",
    "maker_size": "0.01000000",
    "taker": "SYS",
    "taker_size": "101.00000000"
  }
]
```

Parameter     | Type          | Description
--------------|---------------|-------------
Array         | array         | Array of orders sorted by date descending (most recent filled trade first).
id            | string        | The order UUID.
time          | string        | Time the order was filled.
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
maker_size    | string(float) | Maker trading size. String is used to preserve precision.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
taker_size    | string(float) | Taker trading size. String is used to preserve precision.

<!-- 
maker_txid    | string        | The transaction ID(hash) of maker asset on the asset's network.
  "maker_txid": "f2b1ebf45b81da67171bfc55f34c20c9bbc55d8234b8f5c61d0965f61e3c3156",
taker_txid    | string        | The transaction ID(hash) of taker asset on the asset's network.
  "taker_txid": "bcb7543c2f66777927899e701c8309be77904b9c0ef286791fb1a1813bb9099d",
block_id      | string        | Blocknet block hash UUID at the time the order was filled.
  "block_id": "69a1f3bc5031e55800a37062d3c74c017cf233730e7c00813f5cbe7d9d7d0230"
 -->


> Sample 400 Response

```cli
{
  "error": "Invalid parameters: (maker) (taker) (combined, default=true)[optional]",
  "code": 1025,
  "name": "dxGetOrderFills"
}
```

<aside class="warning">
400 Bad Request
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetOrderFills"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


<aside class="warning">
Error Codes
</aside>

Code  | Type  | Error
------|-------|------------
1001  | 401   | Unauthorized
1011  | 400   | Invalid maker symbol
1012  | 400   | Invalid taker symbol
1025  | 400   | Invalid parameters
1002  | 500   | Internal server error










## dxGetOrderHistory

> Sample Data

```cli
{
  "maker": "SYS",
  "taker": "LTC",
  "start_time": 1540660180,
  "end_time": 1540660420,
  "granularity": 60
}
```
This call is used to retrieve the OHLCV data by a trade pair within a specified time range. It can return the order history for any [compatible asset](https://docs.blocknet.co/protocol/xbridge/compatibility/#supported-digital-assets) since all trade history is stored on-chain.


### Request Parameters

> Sample Request

```cli
blocknetdx-cli dxGetOrderHistory SYS LTC 1540660180 1540660420 60 true
```

<code class="api-call">dxGetOrderHistory [maker] [taker] [start_time] [end_time] [granularity] [order_ids]\(optional) [with_inverse]\(optional) [limit]\(optional)</code>

<!-- 
<code class="api-call">dxGetOrderHistory [maker] [taker] [start_time] [end_time] [granularity] [order_ids]\(optional) [with_inverse]\(optional) [limit]\(optional) [interval_timestamp]\(optional)</code>
 -->
 
Parameter     | Type          | Description
--------------|---------------|-------------
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
start_time    | int           | Start time(Unix time) representing the lower boundary to search.
end_time      | int           | End time(Unix time) representing the upper boundary to search.
granularity   | int           | Time interval slice in seconds: <br>`60`, `300`, `900`, `3600`, `21600`, `86400`
order_ids     | bool          | (Optional Parameter) Defaults to `false`.<br>`true`: Receive the GUIDs of all filled orders in each slice.<br>`false`: Do not receive the order GUIDs.
with_inverse  | bool          | (Optional Parameter) Defaults to `false`.<br>`false`: Returns the orders in the specified market pair.<br>`true`: Returns the orders in the inverse pair too, e.g. LTC SYS -> SYS LTC would be returned as well.
limit         | int           | (Optional Parameter) Defaults to `2147483647`.<br>The max number of interval slices returned.

<!-- 
add parameter as option in call parameters above (currently uncommented)

interval_timestamp | string | (Optional Parameter) Defaults to `at_start`.<br>`at_start`: Description.<br>`at_end`: Description.

at_start means all orders that fall in the specified number up to the next time interval. at_end means all the orders that happened in the time interval immediately prior to the specified number
 -->


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
[
  //[ time, low, high, open, close, volume, id(s) ],
  [ "2018-01-16T13:15:05.12345Z", 1.10, 2.0, 1.10, 1.4, 1000, [ "0cc2e8a7222f1416cda996031ca21f67b53431614e89651887bc300499a6f83e" ] ],
  [ "2018-01-16T14:15:05.12345Z", 0, 0, 0, 0, 0, [] ],
  [ "2018-01-16T15:15:05.12345Z", 1.12, 2.2, 1.10, 1.4, 1000, [ "0cc2e8a7222f1416cda996031ca21f67b53431614e89651887bc300499a6f83e" ] ],
  [ "2018-01-16T16:15:05.12345Z", 1.14, 2.0, 1.10, 1.4, 1000, [ "0cc2e8a7222f1416cda996031ca21f67b53431614e89651887bc300499a6f83e" ] ],
  [ "2018-01-16T17:15:05.12345Z", 1.15, 2.0, 1.10, 1.4, 1000, [ "0cc2e8a7222f1416cda996031ca21f67b53431614e89651887bc300499a6f83e" ] ]
]
```

Parameter     | Type          | Description
--------------|---------------|-------------
time          | string        | ISO 8601 datetime, with microseconds, of the time at the beginning of the time slice.
low           | float64       | Exchange rate lower bound within the time slice.
high          | float64       | Exchange rate upper bound within the time slice.
open          | float64       | Exchange rate of first filled order at the beginning of the time slice.
close         | float64       | Exchange rate of last filled order at the end of the time slice.
volume        | int64         | Total volume of the taker asset within the time slice.
order_ids     | array         | Array of GUIDs of all filled orders within the time slice.


> Sample 400 Response

```cli
{
  "error": "Invalid parameters: granularity=6 must be one of: 60,300,900,3600,21600,86400",
  "code": 1025,
  "name": "dxGetOrderHistory"
}
```

<aside class="warning">
400 Bad Request
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetOrderHistory"
}
```

<aside class="warning">
500 Internal Server Error
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


<aside class="warning">
Error Codes
</aside>

Code  | Type  | Error
------|-------|------------
1001  | 401   | Unauthorized
1004  | 400   | Bad request
1011  | 400   | Invalid maker symbol
1012  | 400   | Invalid taker symbol
1025  | 400   | Invalid parameters
1002  | 500   | Internal server error

<!-- 
1016  | 400   | Invalid time
 -->










## dxGetLocalTokens

This call is used to retrieve all the assets supported by the local client. You can only trade on markets with these assets. If an asset is not showing, it has not been properly configured (refer back to #2 in [XBridge Setup](#xbridge-setup).


### Request Parameters

> Request

```cli
blocknetdx-cli dxGetLocalTokens
```
<code class="api-call">dxGetLocalTokens</code>

This call does not take parameters.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
[
  "LTC",
  "SYS",
  "MONA",
  "BLOCK"
]
```

Parameter     | Type          | Description
--------------|---------------|-------------
Array         | array         | An array of all the assets supported by the local client.


> Sample 400 Response

```cli
{
  "error": "Bad request",
  "code": 1004,
  "name": "dxGetLocalTokens"
}
```

<aside class="warning">
400 Bad Request
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetLocalTokens"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


<aside class="warning">
Error Codes
</aside>

Code  | Type  | Error
------|-------|------------
1001  | 401   | Unauthorized
1004  | 400   | Bad request
1025  | 400   | Invalid parameters
1002  | 500   | Internal server error










## dxGetNetworkTokens

This call is used to retrieve all the assets currently supported by the network. This list may differ from the [compatibility list](https://docs.blocknet.co/protocol/xbridge/compatibility/#supported-digital-assets) due to assets being unofficially supported or assets not being supported by any nodes on the network.


### Request Parameters

> Request

```cli
blocknetdx-cli dxGetNetworkTokens
```
<code class="api-call">dxGetNetworkTokens</code>

This call does not take parameters.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
[
  "LTC",
  "SYS",
  "MONA",
  "BLOCK"
]
```

Parameter     | Type          | Description
--------------|---------------|-------------
Array         | array         | An array of all the assets supported by the network.

> Sample 400 Response

```cli
{
  "error": "Bad request",
  "code": 1004,
  "name": "dxGetNetworkTokens"
}
```

<aside class="warning">
400 Bad Request
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetNetworkTokens"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


<aside class="warning">
Error Codes
</aside>

Code  | Type  | Error
------|-------|------------
1001  | 401   | Unauthorized
1004  | 400   | Bad request
1025  | 400   | Invalid parameters
1002  | 500   | Internal server error










## dxGetTokenBalances

This call is used to retrieve the asset __*available*__ balances for all connected wallets on the local client. This will only return balances for the assets returned in [dxGetLocalTokens](#dxgetlocaltokens). If an asset is not showing and is not returned in or the value is showing 0, it has not been properly configured (refer back to #2 in [XBridge Setup](#xbridge-setup).

**Note**: These balances do not include orders that are using locked UTXOs to support a pending or open order. XBridge works best with pre-sliced UTXOs so that your entire wallet balance is capable of multiple simultaneous trades.


### Request Parameters

> Request

```cli
blocknetdx-cli dxGetTokenBalances
```
<code class="api-call">dxGetTokenBalances</code>

This call does not take parameters.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "LTC": "0.568942",
  "SYS": "1050.128493",
  "MONA": "3.452",
  "BLOCK": "250.83492174"
}
```

Parameter     | Type          | Description
--------------|---------------|-------------
Object        | object        | Key-value object of the assets and respective balances.
-- key        | string        | The asset symbol.
-- value      | string(float) | The available wallet balance amount. String is used to preserve precision.


> Sample 400 Response

```cli
{
  "error": "Bad request",
  "code": 1004,
  "name": "dxGetTokenBalances"
}
```

<aside class="warning">
400 Bad Request
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetTokenBalances"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


<aside class="warning">
Error Codes
</aside>

Code  | Type  | Error
------|-------|------------
1001  | 401   | Unauthorized
1004  | 400   | Bad request
1025  | 400   | Invalid parameters
1002  | 500   | Internal server error










## dxGetNewTokenAddress

> Sample Data

```cli
{
  "asset": "SYS"
}
```
This call is used to generate a new address for the specified asset. This call will only work for the assets returned in [dxGetLocalTokens](#dxgetlocaltokens).


### Request Parameters

> Sample Request

```cli
blocknetdx-cli dxGetNewTokenAddress SYS
```
<code class="api-call">dxGetNewTokenAddress [asset]</code>

Parameter     | Type          | Description
--------------|---------------|-------------
asset         | string        | The ticker of the asset you want to generate an address for.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
[
  "SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK"
]
```

Parameter     | Type          | Description
--------------|---------------|-------------
Array         | array         | An array containing the newly generated address for the given asset.


> Sample 400 Response

```cli
{
  "error": "Bad request",
  "code": 1004,
  "name": "dxGetNewTokenAddress"
}
```

<aside class="warning">
400 Bad Request
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetTokenBalances"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


<aside class="warning">
Error Codes
</aside>

Code  | Type  | Error
------|-------|------------
1001  | 401   | Unauthorized
1004  | 400   | Bad request
1025  | 400   | Invalid parameters
1002  | 500   | Internal server error










<!-- ## dxGetLockedUtxos

> Sample Data

```cli
{
  "id": "f2b1ebf45b81da67171bfc55f34c20c9bbc55d8234b8f5c61d0965f61e3c3156"
}
```
This call is used to retrieve the locked UTXOs for a specified order UUID.


### Request Parameters

> Sample Request

```cli
blocknetdx-cli dxGetLockedUtxos f2b1ebf45b81da67171bfc55f34c20c9bbc55d8234b8f5c61d0965f61e3c3156
```
<code class="api-call">dxGetLockedUtxos [order_id]</code>

Parameter     | Type          | Description
--------------|---------------|-------------
id            | string        | The order UUID to recieve the UTXOs for.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
[
  {
    "id" : "91d0ea83edc79b9a2041c51d08037cff87c181efb311a095dfdd4edbcc7993a9",
    "LTC" : [
      6be548bc46a3dcc69b6d56529948f7e679dd96657f85f5870a017e005caa050a,
      6be548bc46a3dcc69b6d56529948f7e679dd96657f85f5870a017e005caa050a,
      6be548bc46a3dcc69b6d56529948f7e679dd96657f85f5870a017e005caa050a
    ]
  }
]
```

Parameter     | Type          | Description
--------------|---------------|-------------
id            | string        | The order UUID.
Object        | object        | Key-value object of the asset and UTXOs for the specified order.
-- key        | string        | The asset symbol.
-- value      | array         | The UTXOs locked for the given order UUID.

> Sample 400 Response

```cli
{
  "error": "Not an exchange node",
  "code": 1029,
  "name": "dxGetLockedUtxos"
}
```

<aside class="warning">
400 Bad Request
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetLockedUtxos"
}
```

<aside class="warning">
500 Internal Server Error
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


<aside class="warning">
Error Codes
</aside>

Code  | Type  | Error
------|-------|------------
1001  | 401   | Unauthorized
1004  | 400   | Bad request
1029  | 400   | Not an exchange node
1002  | 500   | Internal server error -->










## dxGetOrderBook

> Sample Data

```cli
{
  "detail": 1,
  "maker": "LTC",
  "taker": "SYS",
  "max_orders": 100
}
```
This call is used to retrieve open orders at various detail levels:
<br><b>Detail 1</b> - Retrieves the best bid and ask.
<br><b>Detail 2</b> - Retrieves a list of aggregated orders. This is useful for charting.
<br><b>Detail 3</b> - Retrieves a list of non-aggregated orders. This is useful for bot trading.
<br><b>Detail 4</b> - Retrieves the best bid and ask with the order GUIDs.
<br>

**Note**: This call will only return orders for markets with both assets returned in dxGetLocalTokens.


### Request Parameters

> Sample Request

```cli
blocknetdx-cli dxGetOrderBook 1 LTC SYS 100
```
<code class="api-call">dxGetOrderBook [detail] [maker] [taker] [max_orders]\(optional)</code>

Parameter     | Type          | Description
--------------|---------------|-------------
detail        | int           | Detail level: `1`, `2`, `3`, `4`
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
max_orders    | int           | (Optional Parameter) Defaults to `50`.<br>The maximum total orders to display for bids and asks combined. Odd values are rounded up 1. Quantity is split evenly between bids and asks.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response \(Detail 1)

```cli
{
  "detail": 1,
  "maker": "LTC",
  "taker": "SYS",
  "bids": [
    //[ price, size, quantity ],
    [ "253", "15", 1 ],
  ],
  "asks": [
    //[ price, size, quantity ],
    [ "253.01", "15", 3 ],
  ]
}
```

<br><b>Detail 1</b><br>
Retrieves the best bid and ask.

Parameter     | Type          | Description
--------------|---------------|-------------
detail        | int           | Detail level: `1`
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
bids          | array         | An array of the best bids.
- price       | string(float) | The highest bid price for the asset. String is used to preserve precision.
- size        | string(float) | The size of bid orders at this price. String is used to preserve precision.
- quantity    | int           | The total bid orders at this price.
asks          | array         | An array of the best asks.
- price       | string(float) | The lowest ask price for the asset. String is used to preserve precision.
- size        | string(float) | The size of ask orders at this price. String is used to preserve precision.
- quantity    | int           | The total ask orders at this price.


> Sample 200 Response \(Detail 2)

```cli
{
  "detail": 2,
  "maker": "LTC",
  "taker": "SYS",
  "bids": [
    //[ price, size, quantity ],
    [ "253.00", "15.00", 1 ]
  ],
  "asks": [
    //[ price, size, quantity ],
    [ "254.15", "15.01", 3 ]
  ]
}
```

<br><b>Detail 2</b><br>
Retrieves a list of aggregated orders. This is useful for charting.

Parameter     | Type          | Description
--------------|---------------|-------------
detail        | int           | Detail level: `2`
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
bids          | array         | An array of bids.
- price       | string(float) | The bid price for the asset. String is used to preserve precision.
- size        | string(float) | The size of bid orders at this price. String is used to preserve precision.
- quantity    | int           | The total bid orders at this price.
asks          | array         | An array of asks.
- price       | string(float) | The ask price for the asset. String is used to preserve precision.
- size        | string(float) | The size of ask orders at this price. String is used to preserve precision.
- quantity    | int           | The total ask orders at this price.


> Sample 200 Response \(Detail 3)

```cli
{
  "detail": 3,
  "maker": "LTC",
  "taker": "SYS",
  "bids": [
    //[ price, size, order_id ],
    [ "253.00", "15.00", "d1ebd0b8-5398-4278-8e20-d480ac1d5869" ]
  ],
  "asks": [
    //[ price, size, order_id ],
    [ "254.15", "15.01", "d93b735b-ae1b-4ac6-b96b-d92966dd6ea1" ],
    [ "254.15", "15.01", "32f5a551-3da6-4ff0-8ae6-0b60535c5237" ],
    [ "254.15", "15.01", "t8a64a7r-k47h-9fg4-24kf-j49f94mf83mf" ]
  ]
}
```

<br><b>Detail 3</b><br>
Retrieves a list of non-aggregated orders. This is useful for bot trading.

Parameter     | Type          | Description
--------------|---------------|-------------
detail        | int           | Detail level: `3`
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
bids          | array         | An array of bids.
- price       | string(float) | The highest bid price for the asset. String is used to preserve precision.
- size        | string(float) | The size of the bid order. String is used to preserve precision.
- order_id    | string        | The UUID of the bid order.
asks          | array         | An array of asks.
- price       | string(float) | The lowest ask price for the asset. String is used to preserve precision.
- size        | string(float) | The size of the ask order. String is used to preserve precision.
- order_id    | string        | The UUID of the ask order.


> Sample 200 Response \(Detail 4)

```cli
{
  "detail": 4,
  "maker": "LTC",
  "taker": "SYS",
  "bids": [
    //[ price, size, [order_ids] ],
    [ "253.00", "15", [ "d1ebd0b8-5398-4278-8e20-d480ac1d5869" ] ],
  ],
  "asks": [
    //[ price, size, [order_ids] ],
    [ "254.00", "15", [ "32f5a551-3da6-4ff0-8ae6-0b60535c5237", "d93b735b-ae1b-4ac6-b96b-d92966dd6ea1", "32f5a551-3da6-4ff0-8ae6-0b60535c5237", "t8a64a7r-k47h-9fg4-24kf-j49f94mf83mf" ] ],
  ]
}
```

<br><b>Detail 4</b><br>
Retrieves the best bid and ask with the order GUIDs.

Parameter     | Type          | Description
--------------|---------------|-------------
detail        | int           | Detail level: `4`
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
bids          | array         | An array of the best bids.
- price       | string(float) | The highest bid price for the asset. String is used to preserve precision.
- size        | string(float) | The size of bid orders at this price. String is used to preserve precision.
- order_ids   | array         | An array of UUID for bid orders at this price.
asks          | array         | An array of the best asks.
- price       | string(float) | The lowest ask price for the asset. String is used to preserve precision.
- size        | string(float) | The size of ask orders at this price. String is used to preserve precision.
- order_ids   | array         | An array of UUID for ask orders at this price.


> Sample 400 Response

```cli
{
  "error": "Invalid detail level",
  "code": 1015,
  "name": "dxGetOrderBook"
}
```

<aside class="warning">
400 Bad Request
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetOrderBook"
}
```

<aside class="warning">
500 Internal Server Error
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


<aside class="warning">
Error Codes
</aside>

Code  | Type  | Error
------|-------|------------
1001  | 401   | Unauthorized
1004  | 400   | Bad request
1011  | 400   | Invalid maker symbol
1012  | 400   | Invalid taker symbol
1015  | 400   | Invalid detail level
1025  | 400   | Invalid parameters
1002  | 500   | Internal server error










## dxLoadXBridgeConf

This call is used to reload `xbridge.conf` to run newly configured settings without needing to restart the Blocknet client.

**Note**: This may disrupt trades in progress.


### Request Parameters

> Request

```cli
blocknetdx-cli dxLoadXBridgeConf
```
<code class="api-call">dxLoadXBridgeConf</code>

This call does not take parameters.


### Response Parameters

<aside class="success">
200 OK
</aside>

> 200 Response

```cli
true
```

Type          | Description
--------------|-------------
bool          | `true`: Successfully reloaded file.


> Sample 400 Response

```cli
{
  "error": "Bad request",
  "code": 1004,
  "name": "dxLoadXBridgeConf"
}
```

<aside class="warning">
400 Bad Request
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxLoadXBridgeConf"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


<aside class="warning">
Error Codes
</aside>

Code  | Type  | Error
------|-------|------------
1001  | 401   | Unauthorized
1004  | 400   | Bad request
1025  | 400   | Invalid parameters
1002  | 500   | Internal server error










## gettradingdata

This call returns the XBridge trading records. This information is pulled from on-chain history so pulling a large amount of blocks will result in longer response times.


### Request Parameters

> Sample Request

```cli
blocknetdx-cli gettradingdata 1440
```

<code class="api-call">gettradingdata [blocks]\(optional)</code>
 
Parameter     | Type          | Description
--------------|---------------|-------------
blocks        | int           | (Optional Parameter) Defaults to `43200`.<br>Number of blocks to return trade records for (60s block time).


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
[
  {
    "timestamp" : 1559970139,
    "txid" : "4b409e5c5fb1986930cf7c19afec2c89ac2ad4fddc13c1d5479b66ddf4a8fefb",
    "to" : "Bqtms8j1zrE65kcpsEorE5JDzDaHidMtLG",
    "xid" : "9eb57bac331eab34f3daefd8364cdb2bb05259c407d805d0bd0c",
    "from" : "BLOCK",
    "fromAmount" : 0.001111,
    "to" : "SYS",
    "toAmount" : 0.001000
  },
  {
    "timestamp" : 1559970139,
    "txid" : "3de7479e8a88ebed986d3b7e7e135291d3fd10e4e6d4c6238663db42c5019286",
    "to" : "Bqtms8j1zrE65kcpsEorE5JDzDaHidMtLG",
    "xid" : "fd0fed3ee9fe557d5735768c9bdcd4ab2908165353e0f0cef0d5",
    "from" : "BLOCK",
    "fromAmount" : 0.001577,
    "to" : "SYS",
    "toAmount" : 0.001420
  },
  {
    "timestamp" : 1559970139,
    "txid" : "9cc4a0dae46f2f1849b3ab6f93ea1c59aeaf0e95662d90398814113f12127eae",
    "to" : "BbrQKtutGBLuWHvq26EmHKuNaztnfBFWVB",
    "xid" : "f74c614489bd77efe545c239d1f9a57363c5428e7401b2018d350",
    "from" : "BLOCK",
    "fromAmount" : 0.000231,
    "to" : "SYS",
    "toAmount" : 0.001100
  }
]
```

Parameter     | Type          | Description
--------------|---------------|-------------
timestamp     | int           | Unix epoch timestamp of when the trade took place.
txid          | string        | The Blocknet trade fee transaction ID.
to            | string        | Service Node that received the trade fee.
xid           | string        | XBridge transaction ID.
from          | string        | Taker trading asset; the ticker of the asset being sold by the taker.
fromAmount    | int           | Taker trading size.
to            | string        | Maker trading asset; the ticker of the asset being sold by the maker.
toAmount      | int           | Maker trading size.










## Status Codes

The XBridge API uses the following order status codes:


Status          | Description
----------------|-------------
new             | New order, not yet broadcasted
open            | Open order, waiting for taker
accepting       | Taker accepting order
hold            | Counterparties acknowledge each other
initialized     | Counterparties agree on order
created         | Swap process starting
commited        | Swap finalized
finished        | Order complete
expired         | Order expired
offline         | Maker or taker went offline
canceled        | Order was canceled
invalid         | Problem detected with the order
rolled back     | Trade failed, funds being rolled back
rollback failed | Funds unsuccessfully redeemed in failed trade










## Error Codes

The XBridge API uses the following error codes:


Code  | Type  | Error
------|-------|------------
1004  | 400   | Bad request
1011  | 400   | Invalid maker symbol
1012  | 400   | Invalid taker symbol
1015  | 400   | Invalid detail level
1016  | 400   | Invalid time
1017  | 400   | Invalid asset
1018  | 400   | Unable to connect to wallet
1019  | 400   | Insufficient funds
1020  | 400   | Funds not signed for
1021  | 400   | Invalid order ID
1022  | 400   | Unknown session
1023  | 400   | Revert transaction failed
1024  | 400   | Invalid amount
1025  | 400   | Invalid parameters
1026  | 400   | Invalid address
1027  | 400   | Invalid signature
1028  | 400   | Invalid state
1029  | 400   | Not an exchange node
1030  | 400   | Dust amount
1031  | 400   | Insufficient funds
1032  | 400   | Unsupported asset
1024  | 400   | Size must be greater than 0
1001  | 401   | Unauthorized
1002  | 500   | Internal server error









