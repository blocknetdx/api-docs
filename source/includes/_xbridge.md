# XBridge API

The following set of calls are used to conduct decentralized and trustless exchanges over the Blocknet network.

See [XBridge Setup](#xbridge-setup) for instructions on setting up your environment for use with XBridge.

Call                                              | Description
--------------------------------------------------|---------------
[dxMakeOrder](#dxmakeorder)                       | Create an exact order
[dxMakePartialOrder](#dxmakepartialorder)         | Create a partial order
[dxTakeOrder](#dxtakeorder)                       | Take an existing order
[dxCancelOrder](#dxcancelorder)                   | Cancel your own order
[dxGetOrder](#dxgetorder)                         | Returns order details by ID
[dxGetOrders](#dxgetorders)                       | Returns all orders with details
[dxGetOrderBook](#dxgetorderbook)                 | Returns open orders
[dxGetMyOrders](#dxgetmyorders)                   | Returns all your own orders with details
[dxFlushCancelledOrders](#dxflushcancelledorders) | Removes your cancelled orders
[dxGetOrderFills](#dxgetorderfills)               | Returns all recent filled orders
[dxGetOrderHistory](#dxgetorderhistory)           | Returns the OHLCV data my market
[dxGetTradingData](#dxgettradingdata)             | Returns on-chain trading records
[dxGetLocalTokens](#dxgetlocaltokens)             | Returns all assets connected locally
[dxGetNetworkTokens](#dxgetnetworktokens)         | Returns all assets connected on the network
[dxGetTokenBalances](#dxgettokenbalances)         | Returns available balances for your assets
[dxGetNewTokenAddress](#dxgetnewtokenaddress)     | Returns a newly generated address
[dxGetUtxos](#dxgetutxos)                         | Returns compatible UTXOs for asset
[dxSplitAddress](#dxsplitaddress)                 | Splits UTXOs in a specified address
[dxSplitInputs](#dxsplitinputs)                   | Splits specified UTXOs
[dxLoadXBridgeConf](#dxloadxbridgeConf)           | Reloads the `xbridge.conf`
[Status Codes](#status-codes)                     | XBridge order status codes
[Error Codes](#error-codes)                       | Error codes










## dxMakeOrder

> Sample Data

```shell
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
This call is used to create a new exact order. Exact orders must be taken for the full order amount. For partial orders, see [dxMakePartialOrder](#dxmakepartialorder).

### Input Selection
**Note**: XBridge will first attempt use funds from the specified maker address. If this address does not have sufficient funds to cover the order, then it will pull funds from other addresses in the wallet. Change is deposited to the address with the largest input used. There are plans to add the capability of strictly only using funds from the specified address.

### Tradeable Assets
You can only create orders for assets supported by your node (view with [dxGetLocalTokens](#dxgetlocaltokens)) *and* the network (view with [dxGetNetworkTokens](#dxgetnetworktokens)). If an asset is not showing for [dxGetLocalTokens](#dxgetlocaltokens), it has not been properly configured (refer back to #2 in [XBridge Setup](#xbridge-setup)).

### Fees
There are no fees to make orders, but there are transaction fees for the maker asset's native network.


### Request Parameters

> Sample Request

```shell
blocknet-cli dxMakeOrder SYS 0.100 SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK LTC 0.01 LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z exact
```
<code class="api-call">dxMakeOrder [maker] [maker_size] [maker_address] [taker] [taker_size] [taker_address] [type] [dryrun]\(optional)</code>

Parameter     | Type          | Description
--------------|---------------|-------------
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
maker_size    | string(float) | Maker trading size. String is used to preserve precision.
maker_address | string        | Maker address containing the outgoing asset.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
taker_size    | string(float) | Taker trading size. String is used to preserve precision.
taker_address | string        | Maker address for receiving the incoming asset.
type          | string        | This is the order type.<br>`exact`: Matches a specific order. <br>For partial orders, see [dxMakePartialOrder](#dxmakepartialorder).
dryrun        | string        | (Optional Parameter)<br>`dryrun`: Validate the order without actually submitting the order to the network.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
{
  "id": "4306aa07113c4562ffa6278ecd9a3990ead53a0227f74ddd9122272e453ae07d",
  "maker": "SYS",
  "maker_size": "0.100",
  "maker_address": "SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK",
  "taker": "LTC",
  "taker_size": "0.01",
  "taker_address": "LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z",
  "updated_at": "2018-01-16T00:00:00.00000Z",
  "created_at": "2018-01-15T18:15:30.12345Z",
  "block_id": "38729344720578447445023782734923740427863289632489723984723",
  "order_type": "exact",
  "partial_minimum": "0.000000",
  "partial_repost": false,
  "status": "created"
}
```

Key             | Type          | Description
----------------|---------------|-------------
id              | string        | The order ID.
maker           | string        | Maker trading asset; the ticker of the asset being sold by the maker.
maker_size      | string(float) | Maker trading size. String is used to preserve precision.
maker_address   | string        | Maker address for sending the outgoing asset.
taker           | string        | Taker trading asset; the ticker of the asset being sold by the taker.
taker_size      | string(float) | Taker trading size. String is used to preserve precision.
taker_address   | string        | Maker address for receiving the incoming asset.
updated_at      | string        | ISO 8601 datetime, with microseconds, of the last time the order was updated.
created_at      | string        | ISO 8601 datetime, with microseconds, of when the order was created.
block_id        | string        | The block hash of the current block on the Blocknet blockchain at the time the order was created.
order_type      | string        | The order type.
partial_minimum | string        | The minimum amount that can be taken. This applies to `partial` order types and will show `0` on `exact` order types. See [dxMakePartialOrder](#dxmakepartialorder) for more details.
partial_repost  | string        | Whether the order will be reposted or not. This applies to `partial` order types and will show `false` for `exact` order types. See [dxMakePartialOrder](#dxmakepartialorder) for more details.
status          | string        | [View order status codes](#status-codes)


> Sample 400 Response

```shell
{
  "error": "Invalid parameters: Minimum supported size is 0.000001",
  "code": 1025,
  "name": "dxMakeOrder"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```shell
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxMakeOrder"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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










## dxMakePartialOrder

> Sample Data

```shell
{
  "maker": "SYS",
  "maker_size": "1",
  "maker_address": "SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK",
  "taker": "LTC",
  "taker_size": "0.1",
  "taker_address": "LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z",
  "minimum_size": "0.2",
  "repost": true
}
```
This call is used to create a new partial order. Partial orders don't require the entire order to be filled. For exact orders, see [dxMakeOrder](#dxmakeorder).

### Input Creation/Selection

When a partial order is created, multiple inputs will be selected or generated (see details below). Using multiple inputs is optimal for allowing partial orders of varying sizes while minimizing the amount of change (change is not reposted). This maximizes the amount remaining that can be immediately reposted.

The way input selection/generation is done depends on your total `maker_size` and `minimum_size`. XBridge will first attempt to find existing inputs that are properly sized for the order. If needed, existing inputs will automatically be split into the proper size at the time the order is posted. While the inputs are being generated, the order will remain in the `new` state. Once the generated inputs have 1 confirmation the order will proceed to the `open` state. [View order states](#status-codes).

It is planned to extend this call to allow you to specify exactly which inputs you would like to use in an order so you can utilize your own strategies and pre-generate inputs so you can post orders immediately.

**Note**: XBridge will first attempt use funds from the specified maker address. If this address does not have sufficient funds to cover the order, then it will pull funds from other addresses in the wallet. Change is deposited to the address with the largest input used. There are plans to add the capability of strictly only using funds from the specified address.

### Tradeable Assets
You can only create orders for assets supported by your node (view with [dxGetLocalTokens](#dxgetlocaltokens)) *and* the network (view with [dxGetNetworkTokens](#dxgetnetworktokens)). If an asset is not showing for [dxGetLocalTokens](#dxgetlocaltokens), it has not been properly configured (refer back to #2 in [XBridge Setup](#xbridge-setup)).

### Fees
There are no fees to make orders, but there are transaction fees for the maker asset's native network.


### Request Parameters

> Sample Request

```shell
blocknet-cli dxMakePartialOrder SYS 1 SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK LTC 0.1 LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z 0.2 true
```
<code class="api-call">dxMakePartialOrder [maker] [maker_size] [maker_address] [taker] [taker_size] [taker_address] [minimum_size] [repost]\(optional) [dryrun]\(optional)</code>

Parameter     | Type          | Description
--------------|---------------|-------------
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
maker_size    | string(float) | Maker trading size. String is used to preserve precision.
maker_address | string        | Maker address for sending the outgoing asset.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
taker_size    | string(float) | Taker trading size. String is used to preserve precision.
taker_address | string        | Maker address for receiving the incoming asset.
minimum_size  | string(float) | The minimum maker amount that can be traded in the partial order.
repost        | string        | (Optional Parameter) Defaults to `true`.<br>`true`: Receive filled orders for both the maker and taker assets as specified, as well as the inverse with the maker asset as the taker and the taker asset as the maker.
When the order is partially taken, the remainder will be reposted. This will happen continuously as long as the remaining size is greater than the specified `minimum_size`.<br>`false`: When the order is partially taken, the remaining amount will not be reposted.
dryrun        | string        | (Optional Parameter)<br>`dryrun`: Validate the order without actually submitting the order to the network.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
{
  "id": "4306a107113c4562afa6273ecd9a3990ead53a0227f74ddd9122272e453ae07d",
  "maker": "SYS",
  "maker_size": "1.000000",
  "maker_address": "SVTbaYZ8olpVn3uNyImst3GKyrvfzXQgdK",
  "taker": "LTC",
  "taker_size": "0.100000",
  "taker_address": "LVvFhZroMRGTtg1hHp7jVew3YoZRX8y35Z",
  "updated_at": "2018-01-16T00:00:00.00000Z",
  "created_at": "2018-01-15T18:15:30.12345Z",
  "block_id": "38729344720548447445023782734923740427863289632489723984723",
  "order_type": "partial",
  "partial_minimum": "0.200000",
  "partial_repost": true,
  "status": "created"
}
```

Key             | Type          | Description
----------------|---------------|-------------
id              | string        | The order ID. When partial orders are reposted they are given a new order ID.
maker           | string        | Maker trading asset; the ticker of the asset being sold by the maker.
maker_size      | string(float) | Maker trading size. String is used to preserve precision.
maker_address   | string        | Maker address for sending the outgoing asset.
taker           | string        | Taker trading asset; the ticker of the asset being sold by the taker.
taker_size      | string(float) | Taker trading size. String is used to preserve precision.
taker_address   | string        | Maker address for receiving the incoming asset.
updated_at      | string        | ISO 8601 datetime, with microseconds, of the last time the order was updated.
created_at      | string        | ISO 8601 datetime, with microseconds, of when the order was created.
block_id        | string        | The block hash of the current block on the Blocknet blockchain at the time the order was created.
order_type      | string        | The order type.
partial_minimum | string        | The minimum amount that can be taken. This applies to `partial` order types and will show `0` on `exact` order types.
partial_repost  | string        | Whether the order will be reposted or not. This only applies to `partial` order types and will always show `false` if you are not the maker.
status          | string        | [View order status codes](#status-codes)


> Sample 400 Response

```cli
{
  "error": "Invalid parameters: Minimum supported size is 0.000001",
  "code": 1025,
  "name": "dxMakePartialOrder"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxMakePartialOrder"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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

```shell
{
  "id": "4306aa07113c4562ffa6278ecd9a3990ead53a0227f74ddd9122272e453ae07d",
  "send_address": "LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z",
  "receive_address": "SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK",
  "dryrun": "dryrun"
}
```
This call is used to take an order. Taking your own order is not supported. You can only take orders if the maker and taker assets are supported by your node (view with [dxGetLocalTokens](#dxgetlocaltokens)). If an asset is not showing for [dxGetLocalTokens](#dxgetlocaltokens), it has not been properly configured (refer back to #2 in [XBridge Setup](#xbridge-setup)).

Taking an order has a 0.015 BLOCK fee. There are also transaction fees for the taker asset's native network. If the taker asset is BLOCK, there needs to be *at least* two UXTOs - one or more to cover the 0.015 BLOCK fee and one or more to cover the traded amount.

**Note**: XBridge will first attempt use funds from the specified send address. If this address does not have sufficient funds to cover the order, then it will pull funds from other addresses in the wallet. Change is deposited to the address with the largest input used. There are plans to add the capability of strictly only using funds from the specified address.


### Request Parameters

> Sample Request

```shell
blocknet-cli dxTakeOrder 4306aa07113c4562ffa6278ecd9a3990ead53a0227f74ddd9122272e453ae07d LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK
```
<code class="api-call">dxTakeOrder [order_id] [send_address] [receive_address] [amount]\(optional) [dryrun]\(optional)</code>

Parameter       | Type          | Description
----------------|---------------|-------------
order_id        | string        | ID of order being filled.
send_address    | string        | Taker address for sending the outgoing asset.
receive_address | string        | Taker address for receiving the incoming asset.
amount          | string        | (Optional Parameter) <br>The amount to take (only applies to [partial orders](#dxmakepartialorder)).
dryrun          | string        | (Optional Parameter) <br>`dryrun`: Validate the order without actually submitting the order to the network.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
{
  "id": "4306aa07113c4562ffa6278ecd9a3990ead53a0227f74ddd9122272e453ae07d",
  "maker": "SYS",
  "maker_size": "0.100",
  "taker": "LTC",
  "taker_size": "0.01",
  "updated_at": "1970-01-01T00:00:00.00000Z",
  "created_at": "2018-01-15T18:15:30.12345Z",
  "order_type": "exact",
  "partial_minimum": "0.000000",
  "partial_repost": false,
  "status": "accepting"
}
```

Key           | Type          | Description
--------------|---------------|-------------
id            | string        | The order ID.
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
maker_size    | string(float) | Maker trading size. String is used to preserve precision.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
taker_size    | string(float) | Taker trading size. String is used to preserve precision.
updated_at    | string        | ISO 8601 datetime, with microseconds, of the last time the order was updated.
created_at    | string        | ISO 8601 datetime, with microseconds, of when the order was created.
status        | string        | [View order status codes](#status-codes).


> Sample 400 Response

```shell
{
  "error": "Transaction 4306aa07113c4562ffa6278ecd9a3990ead53a0227f74ddd9122272e453ae07d not found",
  "code": 1021,
  "name": "dxTakeOrder"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```shell
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxTakeOrder"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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

```shell
{
  "id": "91d0ea83edc79b9a2041c51d08037cff87c181efb311a095dfdd4edbcc7993a9"
}
```
This call is used to cancel one of your own orders, which automatically rolls back the order if a trade is in process. Upon closing the client, open orders are automatically cancelled.

**Note**: An order can't be cancelled once it goes into `created` state.


### Request Parameters

> Sample Request

```shell
blocknet-cli dxCancelOrder 91d0ea83edc79b9a2041c51d08037cff87c181efb311a095dfdd4edbcc7993a9
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

```shell
{
  "id": "91d0ea83edc79b9a2041c51d08037cff87c181efb311a095dfdd4edbcc7993a9",
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

Key           | Type          | Description
--------------|---------------|-------------
id            | string        | The order ID.
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

```shell
{
  "error": "Invalid order id",
  "code": 1021,
  "name": "dxCancelOrder"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```shell
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxCancelOrder"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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

```shell
{
  "id": "6be548bc46a3dcc69b6d56529948f7e679dd96657f85f5870a017e005caa050a"
}
```
This call is used to retrieve order info.


### Request Parameters

> Sample Request

```shell
blocknet-cli dxGetOrder 6be548bc46a3dcc69b6d56529948f7e679dd96657f85f5870a017e005caa050a
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

```shell
{
  "id": "6be548bc46a3dcc69b6d56529948f7e679dd96657f85f5870a017e005caa050a",
  "maker": "SYS",
  "maker_size": "0.100",
  "taker": "LTC",
  "taker_size": "0.01",
  "updated_at": "1970-01-01T00:00:00.00000Z",
  "created_at": "2018-01-15T18:15:30.12345Z",
  "order_type": "exact",
  "partial_minimum": "0.000000",
  "partial_repost": false,
  "status": "open"
}
```

Key             | Type          | Description
----------------|---------------|-------------
id              | string        | The order ID.
maker           | string        | Maker trading asset; the ticker of the asset being sold by the maker.
maker_size      | string(float) | Maker trading size. String is used to preserve precision.
taker           | string        | Taker trading asset; the ticker of the asset being sold by the taker.
taker_size      | string(float) | Taker trading size. String is used to preserve precision.
updated_at      | string        | ISO 8601 datetime, with microseconds, of the last time the order was updated.
created_at      | string        | ISO 8601 datetime, with microseconds, of when the order was created.
order_type      | string        | The order type.
partial_minimum | string        | The minimum amount that can be taken. This applies to `partial` order types and will show `0` on `exact` order types.
partial_repost  | string        | Whether the order will be reposted or not. This applies to `partial` order types and will show `false` if you are not the maker of this order.
status          | string        | [View order status codes](#status-codes)


> Sample 400 Response

```shell
{
  "error": "Invalid order id",
  "code": 1021,
  "name": "dxGetOrder"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```shell
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetOrder"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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

This call is used to retrieve all orders of every market pair.

**Note**: This call will only return orders for markets with both assets supported by your node (view with [dxGetLocalTokens](#dxgetlocaltokens)). To bypass this and view all orders, set `ShowAllOrders=true` in your `xbridge.conf` header and reload it with [dxLoadXBridgeConf](#dxloadxbridgeconf).


### Request Parameters

> Request

```shell
blocknet-cli dxGetOrders
```
<code class="api-call">dxGetOrders</code>

This call does not take parameters.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
[
  {
    "id": "91d0ea83edc79b9a2041c51d08037cff87c181efb311a095dfdd4edbcc7993a9",
    "maker": "SYS",
    "maker_size": "100.000000",
    "taker": "LTC",
    "taker_size": "10.500000",
    "updated_at": "2018-01-15T18:25:05.12345Z",
    "created_at": "2018-01-15T18:15:30.12345Z",
    "order_type": "partial",
    "partial_minimum": "10.000000",
    "partial_orig_maker_size": "100.000000",
    "partial_orig_taker_size": "10.500000",
    "partial_repost": false,
    "partial_parent_id": "",
    "status": "open"
  },
  {
    "id": "a1f40d53f75357eb914554359b207b7b745cf096dbcb028eb77b7b7e4043c6b4",
    "maker": "SYS",
    "maker_size": "0.100000",
    "taker": "LTC",
    "taker_size": "0.010000",
    "updated_at": "2018-01-15T18:25:05.12345Z",
    "created_at": "2018-01-15T18:15:30.12345Z",
    "order_type": "exact",
    "partial_minimum": "0.000000",
    "partial_orig_maker_size": "0.000000",
    "partial_orig_taker_size": "0.000000",
    "partial_repost": false,
    "partial_parent_id": "",
    "status": "open"
  },
  {
    "id": "6be548bc46a3dcc69b6d56529948f7e679dd96657f85f5870a017e005caa050a", 
    "maker": "SYS",
    "maker_size": "4.000000",
    "taker": "LTC",
    "taker_size": "0.800000",
    "updated_at": "2018-01-15T18:25:05.12345Z", 
    "created_at": "2018-01-15T18:15:30.12345Z", 
    "order_type": "partial",
    "partial_minimum": "0.400000",
    "partial_orig_maker_size": "8.000000",
    "partial_orig_taker_size": "0.800000",
    "partial_repost": false,
    "partial_parent_id": "",
    "status": "open"
  }
]
```

Key                     | Type          | Description
------------------------|---------------|-------------
Array                   | array         | An array of all orders with each order having the following parameters.
id                      | string        | The order ID.
maker                   | string        | Maker trading asset; the ticker of the asset being sold by the maker.
maker_size              | string(float) | Maker trading size. String is used to preserve precision.
taker                   | string        | Taker trading asset; the ticker of the asset being sold by the taker.
taker_size              | string(float) | Taker trading size. String is used to preserve precision.
updated_at              | string        | ISO 8601 datetime, with microseconds, of the last time the order was updated.
created_at              | string        | ISO 8601 datetime, with microseconds, of when the order was created.
order_type              | string        | The order type.
partial_minimum*        | string        | The minimum amount that can be taken.
partial_orig_maker_size*| string        | The partial order original maker_size.
partial_orig_taker_size*| string        | The partial order original taker_size.
partial_repost          | string        | Whether the order will be reposted or not. This applies to `partial` order types and will show `false` if you are not the maker of this order.
partial_parent_id       | string        | The previous order id of a reposted partial order. This will return an empty string if there is no parent order.
status                  | string        | [View order status codes](#status-codes)

\* This only applies to `partial` order types and will show `0` on `exact` order types.


> Sample 400 Response

```shell
{
  "error": "Invalid parameters: This function does not accept any parameters",
  "code": 1025,
  "name": "dxGetOrders"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```shell
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetOrders"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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










## dxGetOrderBook

> Sample Data

```shell
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

**Note**: This call will only return orders for markets with both assets supported by your node (view with [dxGetLocalTokens](#dxgetlocaltokens)). To bypass this and view all orders, set `ShowAllOrders=true` in your `xbridge.conf` header and reload it with [dxLoadXBridgeConf](#dxloadxbridgeconf).


### Request Parameters

> Sample Request

```shell
blocknet-cli dxGetOrderBook 1 LTC SYS 100
```
<code class="api-call">dxGetOrderBook [detail] [maker] [taker] [max_orders]\(optional)</code>

<br><b>Detail 1</b><br>
Retrieves the best bid and ask.

Key           | Type          | Description
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

```shell
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

Key           | Type          | Description
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

```shell
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

Key           | Type          | Description
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

```shell
{
  "detail": 3,
  "maker": "LTC",
  "taker": "SYS",
  "bids": [
    //[ price, size, order_id ],
    [ "253.00", "15.00", "0cc2e8a7222f1416cda996031ca21f67b53431614e89651887bc300499a6f83e" ]
  ],
  "asks": [
    //[ price, size, order_id ],
    [ "254.15", "15.01", "b20f0028eb77b7b745c1953f7521cbef31f40d5543595196d7eb911db43c6434" ],
    [ "254.15", "15.01", "920f53f7521cbef3c64343b0020d554196d7eb98eb7735911db45b7b745c11f4" ],
    [ "254.15", "15.01", "1dbbf31f7b745c12120f0028eb7795196dbcbe4043c6434d554953f75357eb91" ]
  ]
}
```

<br><b>Detail 3</b><br>
Retrieves a list of non-aggregated orders. This is useful for bot trading.

Key           | Type          | Description
--------------|---------------|-------------
detail        | int           | Detail level: `3`
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
bids          | array         | An array of bids.
- price       | string(float) | The highest bid price for the asset. String is used to preserve precision.
- size        | string(float) | The size of the bid order. String is used to preserve precision.
- order_id    | string        | The ID of the bid order.
asks          | array         | An array of asks.
- price       | string(float) | The lowest ask price for the asset. String is used to preserve precision.
- size        | string(float) | The size of the ask order. String is used to preserve precision.
- order_id    | string        | The ID of the ask order.


> Sample 200 Response \(Detail 4)

```shell
{
  "detail": 4,
  "maker": "LTC",
  "taker": "SYS",
  "bids": [
    //[ price, size, [order_ids] ],
    [ "253.00", "15", [ "920f53f7521cbef3c64343b0020d554196d7eb98eb7735911db45b7b745c11f4" ] ],
  ],
  "asks": [
    //[ price, size, [order_ids] ],
    [ "254.00", "15", [ "32f5a551-3da6-4ff0-8ae6-0b60535c5237", "b20f0028eb77b7b745c1953f7521cbef31f40d5543595196d7eb911db43c6434", "a1f40d53f75357eb914554359b207b7b745cf096dbcb028eb77b7b7e4043c6b4", "1dbbf31f7b745c12120f0028eb7795196dbcbe4043c6434d554953f75357eb91" ] ],
  ]
}
```

<br><b>Detail 4</b><br>
Retrieves the best bid and ask with the order GUIDs.

Key           | Type          | Description
--------------|---------------|-------------
detail        | int           | Detail level: `4`
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
bids          | array         | An array of the best bids.
- price       | string(float) | The highest bid price for the asset. String is used to preserve precision.
- size        | string(float) | The size of bid orders at this price. String is used to preserve precision.
- order_ids   | array         | An array of ID for bid orders at this price.
asks          | array         | An array of the best asks.
- price       | string(float) | The lowest ask price for the asset. String is used to preserve precision.
- size        | string(float) | The size of ask orders at this price. String is used to preserve precision.
- order_ids   | array         | An array of ID for ask orders at this price.


> Sample 400 Response

```shell
{
  "error": "Invalid detail level",
  "code": 1015,
  "name": "dxGetOrderBook"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```shell
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetOrderBook"
}
```

<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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










## dxGetMyOrders

This call is used to retrieve all of your orders (of all states) from the local client. It will only return orders from your current session.


### Request Parameters

> Request

```shell
blocknet-cli dxGetMyOrders
```
<code class="api-call">dxGetMyOrders</code>

This call does not take parameters.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
[
  {
    "id": "91d0ea83edc79b9a2041c51d08037cff87c181efb311a095dfdd4edbcc7993a9", 
    "maker": "SYS",
    "maker_size": "100.000000",
    "taker": "LTC",
    "taker_size": "10.500000",
    "updated_at": "2018-01-15T18:25:05.12345Z", 
    "created_at": "2018-01-15T18:15:30.12345Z",
    "order_type": "partial",
    "partial_minimum": "10.000000",
    "partial_repost": true, 
    "status": "open"
  },
  {
    "id": "a1f40d53f75357eb914554359b207b7b745cf096dbcb028eb77b7b7e4043c6b4", 
    "maker": "SYS",
    "maker_size": "0.100000",
    "taker": "LTC",
    "taker_size": "0.010000",
    "updated_at": "2018-01-15T18:25:05.12345Z", 
    "created_at": "2018-01-15T18:15:30.12345Z", 
    "order_type": "exact",
    "partial_minimum": "0.000000",
    "partial_repost": false,
    "status": "open"
  },
  {
    "id": "6be548bc46a3dcc69b6d56529948f7e679dd96657f85f5870a017e005caa050a", 
    "maker": "SYS",
    "maker_size": "4.000000",
    "taker": "LTC",
    "taker_size": "0.400000",
    "updated_at": "2018-01-15T18:25:05.12345Z", 
    "created_at": "2018-01-15T18:15:30.12345Z", 
    "order_type": "partial",
    "partial_minimum": "0.400000",
    "partial_repost": false,
    "status": "open"
  }
]
```

Key             | Type          | Description
----------------|---------------|-------------
Array           | array         | An array of all orders with each order having the following parameters.
id              | string        | The order ID.
maker           | string        | Maker trading asset; the ticker of the asset being sold by the maker.
maker_size      | string(float) | Maker trading size. String is used to preserve precision.
maker_address   | string        | Address for sending the outgoing asset.
taker           | string        | Taker trading asset; the ticker of the asset being sold by the taker.
taker_size      | string(float) | Taker trading size. String is used to preserve precision.
taker_address   | string        | Address for receiving the incoming asset.
updated_at      | string        | ISO 8601 datetime, with microseconds, of the last time the order was updated.
created_at      | string        | ISO 8601 datetime, with microseconds, of when the order was created.
order_type      | string        | The order type.
partial_minimum | string        | The minimum amount that can be taken. This applies to `partial` order types and will show `0` on `exact` order types.
partial_repost  | string        | Whether the order will be reposted or not. This applies to `partial` order types and will show `false` for `exact` order types.
status          | string        | [View order status codes](#status-codes)


> Sample 400 Response

```shell
{
  "error": "Invalid parameters: This function does not accept any parameters",
  "code": 1025,
  "name": "dxGetMyOrders"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
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

Key           | Type          | Description
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










## dxFlushCancelledOrders 

> Sample Data

```shell
{
  "ageMillis": 600000
}
```
This call is used to remove your cancelled orders that are older than the specified amount of time.


### Request Parameters

> Sample Request

```shell
blocknet-cli dxFlushCancelledOrders 600000
```
<code class="api-call">dxFlushCancelledOrders [ageMillis]\(optional)</code>

Parameter     | Type          | Description
--------------|---------------|-------------
ageMillis     | int           | (Optional Parameter) Defaults to `0`.<br>Remove cancelled orders older than this amount of milliseconds. If `0`, all cancelled orders will be removed.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
{
  "ageMillis": 0,
  "now": "20191126T024005.352285",
  "durationMicrosec": 0,
  "flushedOrders": [
    {
      "id": "582a02ada05c8a4bb39b34de0eb54767bcb95a7792e5865d3a0babece4715f47",
      "txtime": "20191126T023945.855058",
      "use_count": 1
    },
    {
      "id": "a508cd8d110bdc0b1fd819a89d94cdbf702e3aa40edbe654af5d556ff3c43a0a",
      "txtime": "20191126T023956.270409",
      "use_count": 1
    }
  ]
}
```

Key               | Type          | Description
------------------|---------------|-------------
ageMillis         | int           | The millisecond value specified when making the call.
now*              | string        | ISO 8601 datetime, with microseconds, of when the call was executed.
durationMicrosec* | int           | The amount of time in milliseconds it took to process the call.
flushedOrders     | array         | Array of cancelled orders that were removed.
id                | string        | The order ID.
txtime            | string        | ISO 8601 datetime, with microseconds, of when the order was created.
use_count*        | int           | This value is strictly for debugging purposes.

\* For debugging purposes

> Sample 400 Response

```shell
{
  "error": "Invalid parameters: ageMillis must be an integer >= 0",
  "code": 1025,
  "name": "dxFlushCancelledOrders"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```shell
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxFlushCancelledOrders"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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










## dxGetOrderFills 

> Sample Data

```shell
{
  "maker": "SYS",
  "taker": "LTC",
  "combined": false
}
```
This call is used to retrieve all recent filled orders by a given trade pair. It will only return orders that have been filled in your current session.


### Request Parameters

> Sample Request

```shell
blocknet-cli dxGetOrderFills SYS LTC false
```
<code class="api-call">dxGetOrderFills [maker] [taker] [combined]\(optional)</code>

Parameter     | Type          | Description
--------------|---------------|-------------
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
combines      | bool          | (Optional Parameter) Defaults to `true`.<br>`true`: Receive filled orders for both the maker and taker assets as specified, as well as the inverse with the maker asset as the taker and the taker asset as the maker.<br>`false`: Receive filled orders only with the maker and taker assets as specified.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
[
  {
    "id": "a1f40d53f75357eb914554359b207b7b745cf096dbcb028eb77b7b7e4043c6b4",
    "time": "2018-01-16T13:15:05.12345Z",
    "maker": "SYS",
    "maker_size": "101.00000000",
    "taker": "LTC",
    "taker_size": "0.01000000"
  },
  {
    "id": "91d0ea83edc79b9a2041c51d08037cff87c181efb311a095dfdd4edbcc7993a9",
    "time": "2018-01-16T13:15:05.12345Z",
    "maker": "LTC",
    "maker_size": "0.01000000",
    "taker": "SYS",
    "taker_size": "101.00000000"
  }
]
```

Key           | Type          | Description
--------------|---------------|-------------
Array         | array         | Array of orders sorted by date descending (most recent filled trade first).
id            | string        | The order ID.
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
block_id      | string        | Blocknet block hash ID at the time the order was filled.
  "block_id": "69a1f3bc5031e55800a37062d3c74c017cf233730e7c00813f5cbe7d9d7d0230"
 -->


> Sample 400 Response

```shell
{
  "error": "Invalid parameters: (maker) (taker) (combined, default=true)[optional]",
  "code": 1025,
  "name": "dxGetOrderFills"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```shell
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetOrderFills"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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

```shell
{
  "maker": "SYS",
  "taker": "LTC",
  "start_time": 1540660180,
  "end_time": 1540660420,
  "granularity": 60
}
```
This call is used to retrieve the OHLCV data by trade pair for a specified time range and interval. It can return the order history for any [compatible asset](https://docs.blocknet.org/protocol/xbridge/compatibility/#supported-digital-assets) since all trade history is stored on-chain.


### Request Parameters

> Sample Request

```shell
blocknet-cli dxGetOrderHistory SYS LTC 1540660180 1540660420 60 true
```

<code class="api-call">dxGetOrderHistory [maker] [taker] [start_time] [end_time] [granularity] [order_ids]\(optional) [with_inverse]\(optional) [limit]\(optional)</code>

<!-- 
<code class="api-call">dxGetOrderHistory [maker] [taker] [start_time] [end_time] [granularity] [order_ids]\(optional) [with_inverse]\(optional) [limit]\(optional) [interval_timestamp]\(optional)</code>
 -->
 
Parameter     | Type          | Description
--------------|---------------|-------------
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
start_time    | int           | The Unix time in seconds for the start time boundary to search.
end_time      | int           | End Unix time in seconds for the end time boundary to search.
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

```shell
[
  //[ time, low, high, open, close, volume, id(s) ],
  [ "2018-01-16T13:15:05.12345Z", 1.10, 2.0, 1.10, 1.4, 1000, [ "0cc2e8a7222f1416cda996031ca21f67b53431614e89651887bc300499a6f83e" ] ],
  [ "2018-01-16T14:15:05.12345Z", 0, 0, 0, 0, 0, [] ],
  [ "2018-01-16T15:15:05.12345Z", 1.12, 2.2, 1.10, 1.4, 1000, [ "91d0ea83edc79b9a2041c51d08037cff87c181efb311a095dfdd4edbcc7993a9", "0cc2e8a7222f1416cda996031ca21f67b53431614e89651887bc300499a6f83e", "a1f40d53f75357eb914554359b207b7b745cf096dbcb028eb77b7b7e4043c6b4" ] ],
  [ "2018-01-16T16:15:05.12345Z", 1.14, 2.0, 1.10, 1.4, 1000, [ "a1f40d53f75357eb914554359b207b7b745cf096dbcb028eb77b7b7e4043c6b4" ] ],
  [ "2018-01-16T17:15:05.12345Z", 1.15, 2.0, 1.10, 1.4, 1000, [ "6be548bc46a3dcc69b6d56529948f7e679dd96657f85f5870a017e005caa050a" ] ]
]
```

Key           | Type          | Description
--------------|---------------|-------------
time          | string        | ISO 8601 datetime, with microseconds, of the time at the beginning of the time slice.
low           | float64       | Exchange rate lower bound within the time slice.
high          | float64       | Exchange rate upper bound within the time slice.
open          | float64       | Exchange rate of first filled order at the beginning of the time slice.
close         | float64       | Exchange rate of last filled order at the end of the time slice.
volume        | int64         | Total volume of the taker asset within the time slice.
order_ids     | array         | Array of GUIDs of all filled orders within the time slice.


> Sample 400 Response

```shell
{
  "error": "Invalid parameters: granularity=6 must be one of: 60,300,900,3600,21600,86400",
  "code": 1025,
  "name": "dxGetOrderHistory"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```shell
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetOrderHistory"
}
```

<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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










## dxGetTradingData

This call returns the XBridge trading records. This information is pulled from on-chain history so pulling a large amount of blocks will result in longer response times.

**This call replaces the `gettradingdata` call, which will be deprecated. Please update to use `dxGetTradingData` as soon as possible**


### Request Parameters

> Sample Request

```shell
blocknet-cli dxGetTradingData 1440
```

<code class="api-call">dxGetTradingData [blocks]\(optional) [errors]\(optional)</code>
 
Parameter     | Type          | Description
--------------|---------------|-------------
blocks        | int           | (Optional Parameter) Defaults to `43200`.<br>Number of blocks to return trade records for (60s block time).
errors        | bool          | (Optional Parameter) Defaults to `false`.<br>Shows an error if an error is detected. This may be useful if you're building a custom client and change the on-chain order history data format.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
[
  {
    "timestamp" : 1559970139,
    "fee_txid" : "4b409e5c5fb1986930cf7c19afec2c89ac2ad4fddc13c1d5479b66ddf4a8fefb",
    "nodepubkey" : "Bqtms8j1zrE65kcpsEorE5JDzDaHidMtLG",
    "id" : "9eb57bac331eab34f3daefd8364cdb2bb05259c407d805d0bd0c",
    "taker" : "BLOCK",
    "taker_size" : 0.001111,
    "maker" : "SYS",
    "maker_size" : 0.001000
  },
  {
    "timestamp" : 1559970139,
    "fee_txid" : "3de7479e8a88ebed986d3b7e7e135291d3fd10e4e6d4c6238663db42c5019286",
    "nodepubkey" : "Bqtms8j1zrE65kcpsEorE5JDzDaHidMtLG",
    "id" : "fd0fed3ee9fe557d5735768c9bdcd4ab2908165353e0f0cef0d5",
    "taker" : "BLOCK",
    "taker_size" : 0.001577,
    "maker" : "SYS",
    "maker_size" : 0.001420
  },
  {
    "timestamp" : 1559970139,
    "fee_txid" : "9cc4a0dae46f2f1849b3ab6f93ea1c59aeaf0e95662d90398814113f12127eae",
    "nodepubkey" : "BbrQKtutGBLuWHvq26EmHKuNaztnfBFWVB",
    "id" : "f74c614489bd77efe545c239d1f9a57363c5428e7401b2018d350",
    "taker" : "BLOCK",
    "taker_size" : 0.000231,
    "maker" : "SYS",
    "maker_size" : 0.001100
  }
]
```

Key           | Type          | Description
--------------|---------------|-------------
timestamp     | int           | Unix epoch timestamp of when the trade took place.
fee_txid      | string        | The Blocknet trade fee transaction ID.
nodepubkey    | string        | Service Node that received the trade fee.
id            | string        | XBridge transaction ID.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
taker_size    | int           | Taker trading size.
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
maker_size    | int           | Maker trading size.










## dxGetLocalTokens

This call is used to retrieve all the assets supported by your node. If an asset is not showing for [dxGetLocalTokens](#dxgetlocaltokens), it has not been properly configured (refer back to #2 in [XBridge Setup](#xbridge-setup)).


### Request Parameters

> Sample Request

```cli
blocknet-cli dxGetTradingData 1440
```

<code class="api-call">dxGetTradingData [blocks]\(optional) [errors]\(optional)</code>
 
Parameter     | Type          | Description
--------------|---------------|-------------
blocks        | int           | (Optional Parameter) Defaults to `43200`.<br>Number of blocks to return trade records for (60s block time).
errors        | bool          | (Optional Parameter) Defaults to `false`.<br>Shows an error if an error is detected. This may be useful if you're building a custom client and change the on-chain order history data format.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
[
  {
    "timestamp" : 1559970139,
    "fee_txid" : "4b409e5c5fb1986930cf7c19afec2c89ac2ad4fddc13c1d5479b66ddf4a8fefb",
    "nodepubkey" : "Bqtms8j1zrE65kcpsEorE5JDzDaHidMtLG",
    "id" : "9eb57bac331eab34f3daefd8364cdb2bb05259c407d805d0bd0c",
    "taker" : "BLOCK",
    "taker_size" : 0.001111,
    "maker" : "SYS",
    "maker_size" : 0.001000
  },
  {
    "timestamp" : 1559970139,
    "fee_txid" : "3de7479e8a88ebed986d3b7e7e135291d3fd10e4e6d4c6238663db42c5019286",
    "nodepubkey" : "Bqtms8j1zrE65kcpsEorE5JDzDaHidMtLG",
    "id" : "fd0fed3ee9fe557d5735768c9bdcd4ab2908165353e0f0cef0d5",
    "taker" : "BLOCK",
    "taker_size" : 0.001577,
    "maker" : "SYS",
    "maker_size" : 0.001420
  },
  {
    "timestamp" : 1559970139,
    "fee_txid" : "9cc4a0dae46f2f1849b3ab6f93ea1c59aeaf0e95662d90398814113f12127eae",
    "nodepubkey" : "BbrQKtutGBLuWHvq26EmHKuNaztnfBFWVB",
    "id" : "f74c614489bd77efe545c239d1f9a57363c5428e7401b2018d350",
    "taker" : "BLOCK",
    "taker_size" : 0.000231,
    "maker" : "SYS",
    "maker_size" : 0.001100
  }
]
```

Key           | Type          | Description
--------------|---------------|-------------
timestamp     | int           | Unix epoch timestamp of when the trade took place.
fee_txid      | string        | The Blocknet trade fee transaction ID.
nodepubkey    | string        | Service Node that received the trade fee.
id            | string        | XBridge transaction ID.
taker         | string        | Taker trading asset; the ticker of the asset being sold by the taker.
taker_size    | int           | Taker trading size.
maker         | string        | Maker trading asset; the ticker of the asset being sold by the maker.
maker_size    | int           | Maker trading size.










## dxGetLocalTokens

This call is used to retrieve all the assets supported by your node. If an asset is not showing for [dxGetLocalTokens](#dxgetlocaltokens), it has not been properly configured (refer back to #2 in [XBridge Setup](#xbridge-setup)).


### Request Parameters

> Request

```shell
blocknet-cli dxGetLocalTokens
```
<code class="api-call">dxGetLocalTokens</code>

This call does not take parameters.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
[
  "BLOCK",
  "LTC",
  "MONA",
  "SYS"
]
```

Key           | Type          | Description
--------------|---------------|-------------
Array         | array         | An array of all the assets supported by the local client.


> Sample 400 Response

```shell
{
  "error": "Bad request",
  "code": 1004,
  "name": "dxGetLocalTokens"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```shell
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetLocalTokens"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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

This call is used to retrieve all the assets currently supported by the network. This list may differ from the [compatibility list](https://docs.blocknet.org/protocol/xbridge/compatibility/#supported-digital-assets) due to assets being unofficially supported or assets not being supported by any nodes on the network.


### Request Parameters

> Request

```shell
blocknet-cli dxGetNetworkTokens
```
<code class="api-call">dxGetNetworkTokens</code>

This call does not take parameters.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
[
  "LTC",
  "SYS",
  "MONA",
  "BLOCK"
]
```

Key           | Type          | Description
--------------|---------------|-------------
Array         | array         | An array of all the assets supported by the network.

> Sample 400 Response

```shell
{
  "error": "Bad request",
  "code": 1004,
  "name": "dxGetNetworkTokens"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```shell
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetNetworkTokens"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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

This call is used to retrieve the asset __*available*__ balances for all connected wallets on the local client. This will only return balances for the assets supported by your node (view with [dxGetLocalTokens](#dxgetlocaltokens)). If an asset is not showing for [dxGetLocalTokens](#dxgetlocaltokens), it has not been properly configured (refer back to #2 in [XBridge Setup](#xbridge-setup)).

**Note**: These balances do not include Segwit UTXOs or those being used in open or in process orders. XBridge works best with pre-sliced UTXOs so that your entire wallet balance is capable of multiple simultaneous trades. Use [dxSplitInputs](#dxsplitinputs) or [dxSplitAddress](#dxsplitaddress) to generate trading inputs.


### Request Parameters

> Request

```shell
blocknet-cli dxGetTokenBalances
```
<code class="api-call">dxGetTokenBalances</code>

This call does not take parameters.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
{
  "LTC": "0.568942",
  "SYS": "1050.128493",
  "MONA": "3.452",
  "BLOCK": "250.83492174"
}
```

Key           | Type          | Description
--------------|---------------|-------------
Object        | object        | Key-value object of the assets and respective balances.
-- key        | string        | The asset symbol.
-- value      | string(float) | The available wallet balance amount. String is used to preserve precision.


> Sample 400 Response

```shell
{
  "error": "Bad request",
  "code": 1004,
  "name": "dxGetTokenBalances"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```shell
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetTokenBalances"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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

```shell
{
  "asset": "SYS"
}
```
This call is used to generate a new address for the specified asset. 

**Note**: This call will only work for the assets supported by your node (view with [dxGetLocalTokens](#dxgetlocaltokens)). If an asset is not showing for [dxGetLocalTokens](#dxgetlocaltokens), it has not been properly configured (refer back to #2 in [XBridge Setup](#xbridge-setup)).


### Request Parameters

> Sample Request

```shell
blocknet-cli dxGetNewTokenAddress SYS
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

```shell
[
  "SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK"
]
```

Key           | Type          | Description
--------------|---------------|-------------
Array         | array         | An array containing the newly generated address for the given asset.


> Sample 400 Response

```shell
{
  "error": "Bad request",
  "code": 1004,
  "name": "dxGetNewTokenAddress"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```shell
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetNewTokenAddress"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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










## dxGetUtxos

> Sample Data

```shell
{
  "asset": "BLOCK"
}
```
Returns all compatible and unlocked UTXOs for the specified asset. Currently only P2PKH UTXOs are supported (Segwit UTXOs not supported). 

**Note**: You can only view UTXOs for assets supported by your node (view with [dxGetLocalTokens](#dxgetlocaltokens)). If an asset is not showing for [dxGetLocalTokens](#dxgetlocaltokens), it has not been properly configured (refer back to #2 in [XBridge Setup](#xbridge-setup)).


### Request Parameters

> Sample Request

```shell
blocknet-cli dxGetUtxos BLOCK
```
<code class="api-call">dxGetUtxos [asset] [include_used]\(optional)</code>

Parameter     | Type          | Description
--------------|---------------|-------------
asset         | string        | The ticker of the asset you want to view UTXOs for.
include_used  | bool          | (Optional Parameter) Defaults to `false`.<br>`true`: Include UTXOs used in existing orders.<br>`false`: Only show UXTOs not used in existing orders.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
[
  {
    "txid": "c019edf2a71efcfc9b1ec50cd0d9db54c55b74acd0bcc81cefd6ffbba359a210",
    "vout": 2,
    "amount": "3.26211780",
    "address": "BrPHj12ZSm7roD2gvrjRG2gD4TzeP1YDXG",
    "scriptPubKey": "7b1ef56a92cec50cd0d147876a914ffd6fcbb4c5724a4057de",
    "confirmations": 11904,
    "orderid": ""
  },
  {
    "txid": "a91c224c0725745cd0bcc81cefd6ffbba3f6cc36956cd566c50cd0d9db5c55b7",
    "vout": 0,
    "amount": "2.44485198",
    "address": "BJYS5dd4Mx5bFxfYDX136SLrv5kGCZaUtF",
    "scriptPubKey": "7e36ab914fc645b2b9fd5ce704f54bc34a59a56c9671eb355b",
    "confirmations": 20690,
    "orderid": "e1b0f4bf05e6c47506abf5d717c95baa1b6de79dd1758673a8cdd171ddad6578"
  },
  {
    "txid": "01f74e6d7e5eade3e555fea978ec1be1cd9006406a4054ba1f74e6d349c67586",
    "vout": 0,
    "amount": "0.18996410",
    "address": "BZJjXdv3XSJcJc132gDi136SLrv5kdd4Mx",
    "scriptPubKey": "7a47f87fb0bcc81cefd6ffbeb596b786fcfe45878d41fe2110",
    "confirmations": 142995,
    "orderid": ""
  }
]
```

Key             | Type          | Description
----------------|---------------|-------------
txid            | string        | Transaction ID of the UTXO.
vout            | int           | Vout index of the UTXO.
amount          | string        | UTXO amount.
address         | string        | UTXO address.
scriptPubKey    | string        | UTXO address script pubkey.
confirmations   | int           | UTXO blockchain confirmation count.
orderid         | string        | The order ID if the UTXO is currently being used in an order.


> Sample 400 Response

```shell
{
  "error": "Unable to connect to wallet",
  "code": 1018,
  "name": "dxGetUtxos"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```shell
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetUtxos"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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
1018  | 400   | Unable to connect to wallet
1002  | 500   | Internal server error










## dxSplitAddress

> Sample Data

```cli
{
  "asset": "BLOCK",
  "split_amount": "4",
  "address": "BWQrvmuHB4C68KH5V7fcn9bFtWN8y5hBmR"
}
```
Splits unused coin in the given address into the specified size. Left over amounts end up in change. UTXOs being used in existing orders will not be included by the splitter (see [dxGetUtxos](#dxgetutxos)).

**Note**: You can only split UTXOs for assets supported by your node (view with [dxGetLocalTokens](#dxgetlocaltokens)). If an asset is not showing for [dxGetLocalTokens](#dxgetlocaltokens), it has not been properly configured (refer back to #2 in [XBridge Setup](#xbridge-setup)).


### Request Parameters

> Sample Request

```shell
blocknet-cli dxSplitAddress BLOCK 4 BWQrvmuHB4C68KH5V7fcn9bFtWN8y5hBmR
```
<code class="api-call">dxSplitAddress [asset] [split_amount] [address] [include_fees]\(optional) [show_rawtx]\(optional) [submit]\(optional)</code>

Parameter     | Type          | Description
--------------|---------------|-------------
asset         | string        | The ticker of the asset you want to split UTXOs for.
split_amount  | string        | The desired output size. For example, an address with a balance of 10 and split amount of 2.5 would yield 4 UTXOs at 2.5 each.
address       | string        | The address to split UTXOs in. Only coin in this address will be split.
include_fees  | bool          | (Optional Parameter) Defaults to `true`.<br>`true`: Include the trade P2SH deposit fees in the split UTXO (add deposit fee to `spit_amount` value.<br>`false`: Ignore the deposit fees and make the split UTXO exactly for the `split_amount`.
show_rawtx    | bool          | (Optional Parameter) Defaults to `false`.<br>`true`: Include the raw transaction in the response (can be submitted manually).<br>`false`: Omit the raw transaction from the response.
submit        | bool          | (Optional Parameter) Defaults to `true`.<br>`true`: Submit the raw transaction to the network.<br>`false`: Do not submit the raw transaction to the network.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "token": "BLOCK",
  "include_fees": true,
  "split_amount_requested": "4.0",
  "split_amount_with_fees": "4.00040000",
  "split_utxo_count": 6,
  "split_total": "24.44852981",
  "txid": "7f87cba104b3c19f6e25fbc82b3cde5d73714e01d6a54943d3c8fb07ce315db4",
  "rawtx": ""
}
```

Key                    | Type          | Description
-----------------------|---------------|-------------
token                  | string        | The asset you are splitting UTXOs for.
include_fees           | bool          | Whether you requested to include the fees.
split_amount_requested | string        | The requested split amount.
split_amount_with_fees | string(float) | The requested split amount with fees included.
split_utxo_count       | int           | The amount of resulting split UTXOs.
split_total            | string(float) | The total amount of in the address prior to splitting.
txid                   | string        | The hex string of the splitting transaction.
rawtx                  | string        | The hex string of the raw splitting transaction.


> Sample 400 Response

```cli
{
  "error": "Unable to connect to wallet",
  "code": 1018,
  "name": "dxSplitAddress"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxSplitAddress"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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
1018  | 400   | Unable to connect to wallet
1002  | 500   | Internal server error










## dxSplitInputs

> Sample Data

Code  | Type  | Error
------|-------|------------
1001  | 401   | Unauthorized
1018  | 400   | Unable to connect to wallet
1002  | 500   | Internal server error










## dxSplitInputs

> Sample Data

```cli
{
  "asset": "BLOCK",
  "split_amount": "4",
  "address": "BWQrvmuHB4C68KH5V7fcn9bFtWN8y5hBmR"
  "include_fees": true,
  "show_rawtx": false,
  "submit": true,
  "utxos": [{"txid":"7a54943d3cf87cba104c82b3cde5d7371b3c19f6e25fb4e01d68fb07ce315db4","vout":0},...]
}
```
Splits specified UTXOs into the given size and address. Left over amounts end up in change. UTXOs being used in existing orders will not be included by the splitter (see [dxGetUtxos](#dxgetutxos)).

**Note**: You can only split UTXOs for assets supported by your node (view with [dxGetLocalTokens](#dxgetlocaltokens)). If an asset is not showing for [dxGetLocalTokens](#dxgetlocaltokens), it has not been properly configured (refer back to #2 in [XBridge Setup](#xbridge-setup)).


### Request Parameters

> Sample Request

```shell
blocknet-cli dxSplitInputs BLOCK 4 BWQrvmuHB4C68KH5V7fcn9bFtWN8y5hBmR true false true [{"txid":"7a54943d3cf87cba104c82b3cde5d7371b3c19f6e25fb4e01d68fb07ce315db4","vout":0},...]
```
<code class="api-call">dxSplitInputs [asset] [split_amount] [address] [include_fees] [show_rawtx] [submit] [utxos]</code>

Parameter     | Type          | Description
--------------|---------------|-------------
asset         | string        | The ticker of the asset you want to split UTXOs for.
split_amount  | string        | The desired output size. For example, an address with a balance of 10 and split amount of 2.5 would yield 4 UTXOs at 2.5 each.
address       | string        | The address split UTXOs and change will be sent to.
include_fees  | bool          | `true`: Include the trade P2SH deposit fees in the split UTXO (add deposit fee to `spit_amount` value.<br>`false`: Ignore the deposit fees and make the split UTXO exactly for the `split_amount`.
show_rawtx    | bool          | `true`: Include the raw transaction in the response (can be submitted manually).<br>`false`: Omit the raw transaction from the response.
submit        | bool          | `true`: Submit the raw transaction to the network.<br>`false`: Do not submit the raw transaction to the network.
utxos         | array         | A JSON array of UTXO input objects.
- txid        | string        | The UTXO transaction ID.
- vout        | int           | The UTXO output index.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
{
  "token": "BLOCK",
  "include_fees": true,
  "split_amount_requested": "4.0",
  "split_amount_with_fees": "4.00040000",
  "split_utxo_count": 6,
  "split_total": "24.44852981",
  "txid": "7f87cba104b3c19f6e25fbc82b3cde5d73714e01d6a54943d3c8fb07ce315db4",
  "rawtx": ""
}
```

Key                    | Type          | Description
-----------------------|---------------|-------------
token                  | string        | The asset you are splitting UTXOs for.
include_fees           | bool          | Whether you requested to include the fees.
split_amount_requested | string        | The requested split amount.
split_amount_with_fees | string(float) | The requested split amount with fees included.
split_utxo_count       | int           | The amount of resulting split UTXOs.
split_total            | string(float) | The total amount of in the address prior to splitting.
txid                   | string        | The hex string of the splitting transaction.
rawtx                  | string        | The hex string of the raw splitting transaction.


> Sample 400 Response

```cli
{
  "error": "Unable to connect to wallet",
  "code": 1018,
  "name": "dxSplitInputs"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxSplitInputs"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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
1018  | 400   | Unable to connect to wallet
1002  | 500   | Internal server error










<!-- ## dxGetLockedUtxos

> Sample Data

```shell
{
  "id": "f2b1ebf45b81da67171bfc55f34c20c9bbc55d8234b8f5c61d0965f61e3c3156"
}
```
This call is used to retrieve the locked UTXOs for a specified order ID. You can only use this call if you have a Service Node setup.


### Request Parameters

> Sample Request

```shell
blocknet-cli dxGetLockedUtxos f2b1ebf45b81da67171bfc55f34c20c9bbc55d8234b8f5c61d0965f61e3c3156
```
<code class="api-call">dxGetLockedUtxos [order_id]</code>

Parameter     | Type          | Description
--------------|---------------|-------------
id            | string        | The order ID to recieve the UTXOs for.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```shell
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

Key           | Type          | Description
--------------|---------------|-------------
id            | string        | The order ID.
Object        | object        | Key-value object of the asset and UTXOs for the specified order.
-- key        | string        | The asset symbol.
-- value      | array         | The UTXOs locked for the given order ID.

> Sample 400 Response

```shell
{
  "error": "Not an exchange node",
  "code": 1029,
  "name": "dxGetLockedUtxos"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```shell
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetLockedUtxos"
}
```

<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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










## dxLoadXBridgeConf

This call is used to reload `xbridge.conf` to run newly configured settings without needing to restart the Blocknet client.

**Note**: This may disrupt trades in progress.


### Request Parameters

> Request

```shell
blocknet-cli dxLoadXBridgeConf
```
<code class="api-call">dxLoadXBridgeConf</code>

This call does not take parameters.


### Response Parameters

<aside class="success">
200 OK
</aside>

> 200 Response

```shell
true
```

Type          | Description
--------------|-------------
bool          | `true`: Successfully reloaded file.


> Sample 400 Response

```shell
{
  "error": "Bad request",
  "code": 1004,
  "name": "dxLoadXBridgeConf"
}
```

<aside class="warning">
400 Bad Request
</aside>

Key           | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```shell
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxLoadXBridgeConf"
}
```
<aside class="warning">
500 Internal Server Error
</aside>

Key           | Type          | Description
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









