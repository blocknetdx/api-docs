# Projects API - XQuery/Hydra

Before data from [XQuery API](/#xquery-api) or [Hydra API](/#hydra-api) can be
consumed by a client, a *Project* must be requested and activated
through the Projects API. A project is assigned a `project_id` and an
`api_key`, referred to in this document as
`<PROJECT-ID>` and `<API-KEY>`. Both the `<PROJECT-ID>` and `<API-KEY>` must be provided in API calls to [XQuery API](/#xquery-api) and [Hydra API](/#hydra-api) as proof/authentication that the calls are being made from an *active* project.

## XQuery/Hydra Nodes

There will soon be a website which provides a list of
Service Nodes (SNodes) supporting XQuery and/or
Hydra services. This website will also provides details about which specific
[EVM](https://docs.blocknet.org/resources/glossary/#evm) data services are supported by each
SNode.
<br><br>
The URL of this website will be posted here as soon as it's live.
<br><br>
After choosing one of the SNodes from the above-mentioned site, make a
note of the Service Node's IP address or URL. This Node URL will henceforth be referred
to as `<NODE-URL>` in this document.

## Request and Activate A New Project

The next step after selecting an SNode as your XQuery/Hydra data provider is to
create a new project on that SNode via the `request_project` call.

### request_project
The format of the `request_project` call is
illustrated in the Sample Request in the panel on the right --->
> Sample Requests

```shell
# Sample request_project call with no params passed - requests an
# XQuery only project by default
# (Tier level doesn't apply to an XQuery project):
curl http://<NODE-URL>/xrs/projects \
      -X POST \
      -H "Content-Type: application/json" \
      -d '{"id": 1, "method": "request_project", "params": []}' | jq
```
```shell
# Sample request_project call with params passed to request a
# Hydra project with tier2/Archival access to ETH data:
curl http://<NODE-URL>/xrs/projects \
      -X POST \
      -H "Content-Type: application/json" \
      -d '{"id": 1, "method": "request_project", "params": [{"Hydra": "True", "Tier": 2}]}' | jq
```
```shell
# Sample request_project call with params passed to request a
# XQuery project:
curl http://<NODE-URL>/xrs/projects \
      -X POST \
      -H "Content-Type: application/json" \
      -d '{"id": 1, "method": "request_project", "params": [{"XQuery": "True"}]}' | jq
```

<code class="api-call">request_project [XQuery] [Hydra] [Tier]</code>

This call takes optional parameters [XQuery] [Hydra] and/or [Tier].<br>
These parameters determine which kind of project is being requested.

- If no *Hydra* parameter is passed, an [XQuery](/#xquery-api) project
is requested.
- If boolean param *Hydra* is passed with
value *True* and boolean param *XQuery* is also passed with
value *True*, an error is returned (though a future release may allow
a project to have both *XQuery* and *Hydra* access).
- If boolean param *Hydra* is passed with value *True* and boolean
param *XQuery* is *not* passed with
value *True*, a [Hydra](/#hydra-api) project is requested and the [Tier level](/#tier1) of the Hydra project is set according to the integer value passed as the *Tier* param. (Tier
defaults to 1 if *Tier* param is not passed.)
- If the kind of project requested of an SNode is not supported by the SNode, an error is returned. For example, if an XQuery
  project is requested of an SNode which does not support XQuery, or
  if a Tier 2 Hydra project is requested of an SNode which does not
  support ETH access via [Hydra](/#hydra-api), an error is returned.

### *Tier1 
(Only applies to [Hydra](/#hydra-api) projects.) 

- If `<NODE-URL>` hosts the
Ethereum blockchain, a *tier1* [Hydra](/#hydra-api) project only has access to the most
recent 128 blocks of ETH data (a.k.a. non-archival ETH data) via the
[Hydra API](/#hydra-api).
- [Hydra API](/#hydra-api) access to other [EVMs](https://docs.blocknet.org/resources/glossary/#evm), like Avalanche or SYS NEVM, is not restricted for a *tier1* project.

### *Tier2
(Only applies to [Hydra](/#hydra-api) projects.) 

- If `<NODE-URL>` hosts the
Ethereum blockchain, a *tier2* [Hydra](/#hydra-api) project has full access to all ETH
archival data (i.e. ETH data from any block since the inception block) via the
[Hydra API](/#hydra-api).
- [Hydra API](/#hydra-api) access to other
  [EVMs](https://docs.blocknet.org/resources/glossary/#evm), like
  Avalanche or SYS NEVM, is not restricted for a *tier2* project.

### Response

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "result": {
    "api_key": "P3m8HKVT8xjqvVuDa3dMQPvblYFDyHU0BpLXu33lC6Q",
    "min_amount_aablock": 0.0448866189,
    "min_amount_aablock_usd": 0.005680833333333334,
    "min_amount_ablock": 0.0041770833,
    "min_amount_ablock_usd": 0.005346666666666667,
    "min_amount_avax": 0.0005160809,
    "min_amount_eth": 5.5585e-06,
    "min_amount_sysblock": 0.0425569007,
    "min_amount_sysblock_usd": 0.005680833333333334,
    "min_amount_usd": 0.006683333333333334,
    "min_amount_sys": 0.058075037,
    "payment_avax_address": "0x82269041C8AF1B23eF50257f3FD15340e7d329EA",
    "payment_eth_address": "0x570DB9e59e5895730FA5D888aa5A147bbc36113f",
    "payment_nevm_address": "0x65753B07c2371AA34c3c5e62b714e731dBF5Ab41",
    "project_id": "f0d833d4-a113-497b-9a2a-875382edb7dc",
    "quote_expiry_time": "2022-11-17 22:36:42 UTC",
    "quote_start_time": "2022-11-17 21:36:42 UTC"
  }
}

```

Parameter       | Type    | Description
----------------|---------|-------------
result          | object   | Object of the result.
api_key      | string    | API Key of the project, referred to in this document as `<API-KEY>`.
min_amount_aablock | number | The cost of 1000 api calls in aaBLOCK. If *null*, it means this payment option is not available.
min_amount_aablock_usd | number | The cost of 1000 api calls in USD when paying with aaBLOCK.  
min_amount_ablock | number | The cost of 1000 api calls in aBLOCK. If *null*, it means this payment option is not available.
min_amount_ablock_usd | number | The cost of 1000 api calls in USD when paying with aBLOCK.  
min_amount_avax | number | The cost of 1000 api calls in AVAX. If *null*, it means this payment option is not available.
min_amount_eth | number | The cost of 1000 api calls in ETH. If *null*, it means this payment option is not available.
min_amount_sysblock | number | The cost of 1000 api calls in sysBLOCK. If *null*, it means this payment option is not available.
min_amount_sysblock_usd | number | The cost of 1000 api calls in USD when paying with sysBLOCK.  
min_amount_usd | number | The cost of 1000 api calls in USD when paying with AVAX, ETH or SYS. 
min_amount_sys | number | The cost of 1000 api calls in SYS. If *null*, it means this payment option is not available.   
payment_avax_address | string     | The Avalanche address to which payment should be sent if paying in ARC20 aaBLOCK or in AVAX.
payment_eth_address | string     | The Ethereum address to which payment should be sent if paying in ERC20 aBLOCK or in ETH.  
payment_nevm_address | string     | The Syscoin NEVM address to which payment should be sent if paying in SYS-ERC20 sysBLOCK or in SYS. 
project_id      | string | The project ID of the project, referred to in this document as `<PROJECT-ID>`
quote_expiry_time     | string    | Expiry time (in UTC) of price quotes returned by the `request_project` call. Payments made after this time only receive half the normal number of api calls. Currently set to 1 hour after *quote_start_time*. See [extend_project](/#extend-project) to learn about fetching new price quotes and extending *quote_expiry_time*.
quote_start_time     | string    | Time (in UTC) when `request_project` was called.

### Response Parameter Notes:
- The `min_amount_<coin>` values represent two things:
  1. The minimum amount of `<coin>` that needs to be sent to activate
     the project.
  1. The cost of 1000 api calls denominated in `<coin>`.
- If *null* is returned for the
*min_amount_aablock* value, or for the
*min_amount_avax* value, it means
Avalanche blockchain data is not available from `<NODE-URL>`.
- If *null* is returned for the
*min_amount_ablock* value, or for the
*min_amount_eth* value, it means
Ethereum blockchain data is not available from `<NODE-URL>`.
- If *null* is returned for the
*min_amount_sysblock* value, or for the
*min_amount_sys* value, it means
Syscoin NEVM blockchain data is not available from `<NODE-URL>`.

### Activate Project
Once a new project has been requested and a response has been
received, the next step is to activate the project by sending payment.

- To activate the project returned by the `request_project` call,
send a payment amount sufficient to purchase 1000 or more api
calls. The payment does *not* need to be sent in a single
transaction. As soon as the total amount of `<coin>` sent is >= `min_amount_<coin>`, the project is activated.  (See [Response Parameters](/#response) for details.)
- The number of api calls awarded for payments sent *before* *quote_expiry_time* is calculated as:<br>
1000 x *payment amount* / *cost of 1000 api calls*.<br>
- The number of api calls awarded for payments sent *after* *quote_expiry_time* is half the normal amount and is calculated as:<br>
1000 x *payment amount* / *cost of 1000 api calls* / 2.<br>
See [extend_project](/#extend-project) to learn about fetching new price quotes and extending *quote_expiry_time*.
- There is no maximum number of api calls which can be purchased. 
- It doesn't matter on which chain the payment is made, or which currency
is used to make the payment (e.g. ETH, aBLOCK, AVAX, aaBLOCK, SYS, sysBLOCK); an *active* project is an *active* project.
- Send payment to the payment address corresponding to the currency in which payment is being made. (See [Response Parameters](/#response) for details.) 
- The cost per 1000 api calls is determined by [which kind of project is requested](/#request-and-activate-a-new-project), and by the
operator of the SNode at `<NODE-URL>`.
- The payment amounts are fixed in USD by the SNode operator, but
denominated in various cryptos such as ETH,
[aBLOCK](https://docs.blocknet.org/blockchain/ablock/), AVAX, 
[aaBLOCK](https://docs.blocknet.org/blockchain/aablock/), SYS
and/or sysBLOCK. The `min_amount_usd` price is the USD price fixed by
the SNode operator for payments made in ETH, AVAX or SYS. The
`min_amount_ablock_usd`, `min_amount_aablock_usd`, and
`min_amount_sysblock_usd` prices are the USD prices fixed by the SNode
operator for payments made in `ablock`, `aablock` and `sysblock`,
respectively. These 3 fixed USD prices are often discounted by the SNode
operator compared to `min_amount_usd` to encourage clients to pay in
some form of `BLOCK` token. All these USD prices are provided only for
reference; there is no option to pay in USD.

### Project Details
- An API call to either [XQuery API](/#xquery-api) or [Hydra API](/#hydra-api) counts
as 1 API call and deducts 1 from the total remaining API calls in
the project.
- There is no expiration time for a project. A project remains active
  until all api calls have been used, or until the user or the SNode operator [cancels the project](/#cancel-project).
- A project cannot be upgrade or changed from XQuery to Hydra, or from
  *tier1* to *tier2*. Instead of upgrading, the user should request a new project, passing the
  appropriate parameters to request the [kind of project desired.](/#request-and-activate-a-new-project)

### Extend Project
The `extend_project` method should be called if the
[*quote_expiry_time*](/#response) has passed and the client
wants to purchase more api calls for the project. `extend_project`
simply fetches new price quotes for
the purchase of api calls and extends the
[*quote_expiry_time*](/#response) to 1 hour in the future from when
it is called. This allows the client to
receive full api call credit for payments they send. (Payments
sent after *quote_expiry_time* only receive half the normal number of
api calls).

The `extend_project` method works very much like the
[`request_project`](/#request_project)  method, the main
difference being that the `request_project`
method generates a new `<PROJECT-ID>/<API-KEY>` pair, whereas the `extend_project` method works with an
existing `<PROJECT-ID>/<API-KEY>` pair.

Note: The kind of project (e.g. XQuery/Hydra/Tier1/Tier2) cannot be
changed by the `extend_project` method. If a new kind of project is
needed, [`request_project`](/#request_project) must be called to
request a new project.

The `extend_project` method can be called as in the example in the right panel ---->

> Sample Request

```shell
curl http://<NODE-URL>/xrs/projects/<PROJECT-ID> \
      -X POST \
      -H "Content-Type: application/json" \
      -H "Api-Key: <API-KEY>" \
      -d '{"id": 1, "method": "extend_project", "params": []}' | jq
```
<code class="api-call">extend_project</code>

This call does not take parameters.

### Response

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "result": {
    "api_key": "P3m8HKVT8xjqvVuDa3dMQPvblYFDyHU0BpLXu33lC6Q",
    "min_amount_aablock": 0.0448866189,
    "min_amount_aablock_usd": 0.005680833333333334,
    "min_amount_ablock": 0.0041770833,
    "min_amount_ablock_usd": 0.005346666666666667,
    "min_amount_avax": 0.0005160809,
    "min_amount_eth": 5.5641e-06,
    "min_amount_sysblock": 0.0425569007,
    "min_amount_sysblock_usd": 0.005680833333333334,
    "min_amount_usd": 0.006683333333333334,
    "min_amount_sys": 0.058075037,
    "payment_avax_address": "0x82269041C8AF1B23eF50257f3FD15340e7d329EA",
    "payment_eth_address": "0x570DB9e59e5895730FA5D888aa5A147bbc36113f",
    "payment_nevm_address": "0x65753B07c2371AA34c3c5e62b714e731dBF5Ab41",
    "project_id": "f0d833d4-a113-497b-9a2a-875382edb7dc",
    "quote_expiry_time": "2022-11-17 23:04:46 UTC",
    "quote_start_time": "2022-11-17 22:04:46 UTC"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
result          | object   | Object of the result.
api_key      | string    | API Key of the project, referred to in this document as `<API-KEY>`.
min_amount_aablock | number | The cost of 1000 api calls in aaBLOCK. If *null*, it means this payment option is not available.
min_amount_aablock_usd | number | The cost of 1000 api calls in USD when paying with aaBLOCK.  
min_amount_ablock | number | The cost of 1000 api calls in aBLOCK. If *null*, it means this payment option is not available.
min_amount_ablock_usd | number | The cost of 1000 api calls in USD when paying with aBLOCK.  
min_amount_avax | number | The cost of 1000 api calls in AVAX. If *null*, it means this payment option is not available.
min_amount_eth | number | The cost of 1000 api calls in ETH. If *null*, it means this payment option is not available.
min_amount_sysblock | number | The cost of 1000 api calls in sysBLOCK. If *null*, it means this payment option is not available.
min_amount_sysblock_usd | number | The cost of 1000 api calls in USD when paying with sysBLOCK.  
min_amount_usd | number | The cost of 1000 api calls in USD when paying with AVAX, ETH or SYS. 
min_amount_sys | number | The cost of 1000 api calls in SYS. If *null*, it means this payment option is not available.   
payment_avax_address | string     | The Avalanche address to which payment should be sent if paying in ARC20 aaBLOCK or in AVAX.
payment_eth_address | string     | The Ethereum address to which payment should be sent if paying in ERC20 aBLOCK or in ETH.  
payment_nevm_address | string     | The Syscoin NEVM address to which payment should be sent if paying in SYS-ERC20 sysBLOCK or in SYS. 
project_id      | string | The project ID of the project, referred to in this document as `<PROJECT-ID>`
quote_expiry_time     | string    | Expiry time (in UTC) of price quotes returned by the `extend_project` call. Payments made after this time only receive half the normal number of api calls. Currently set to 1 hour after *quote_start_time*.
quote_start_time     | string    | Time (in UTC) when `extend_project` was called. 

### Get Project Stats
Any time after a project comes into existence via a call to
[request_project](#request_project), the client can retrieve all details/statistics
about the project by calling the `get_project_stats` method, as in the example in the right panel ---->

> Sample Request

```shell
curl http://<NODE-URL>/xrs/projects/<PROJECT-ID> \
      -X POST \
      -H "Content-Type: application/json" \
      -H "Api-Key: <API-KEY>" \
      -d '{"id": 1, "method": "get_project_stats", "params": []}' | jq
```
<code class="api-call">get_project_stats</code>

This call does not take parameters.

### Response

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "error": 0,
  "result": {
    "Hydra": true,
    "XQuery": false,
    "amount_aablock": 0.05,
    "amount_ablock": 0,
    "amount_avax": 0.0005,
    "amount_eth": 0,
    "amount_sysblock": 0,
    "amount_sys": 0,
    "api_key": "XiZYv7K0ef71i4cUU407DKv1_ByybhvqxJyu81TA9LM",
    "api_tokens": 2310,
    "api_tokens_remaining": 2308,
    "api_tokens_used": 2,
    "min_amount_aablock": 0.0378651247,
    "min_amount_aablock_usd": 0.0049299999999999995,
    "min_amount_ablock": 0.003625,
    "min_amount_ablock_usd": 0.00464,
    "min_amount_avax": 0.0004462401,
    "min_amount_eth": 4.7566e-06,
    "min_amount_sysblock": 0.0377980662,
    "min_amount_sysblock_usd": 0.0049299999999999995,
    "min_amount_usd": 0.0058,
    "min_amount_sys": 0.0515807728,
    "payment_avax_address": "0xDE2856f36570E3129518774dc9aC6E1eCB5dE33C",
    "payment_eth_address": "0xa3b6Cf8d9Dd98d9F937d1147A1E75aa1EfA8B951",
    "payment_nevm_address": "0x5a68D16C16807746FBa2E9b28818FA299f50C37A",
    "project_id": "c0aebddb-f918-457f-ac77-26d557a6fc8b",
    "quote_expiry_time": "2022-11-20 02:07:04 UTC",
    "quote_start_time": "2022-11-20 01:07:04 UTC",
    "status": "active_open",
    "tier": 1
  }
}
```
Parameter       | Type    | Description
----------------|---------|-------------
error          | integer  | Error code
result         | object   | Object of the result.
Hydra        | bool | *True* if this project gives access to the [Hydra API](#hydra-api) ; *False* otherwise
XQuery        | bool | *True* if this project gives access to the [XQuery API](#xquery-api) ; *False* otherwise
amount_aablock | number | current amount of aaBLOCK recieved by `<NODE-URL>`. *
amount_ablock | number | current amount of aBLOCK recieved by `<NODE-URL>`. *
amount_avax | number | current amount of AVAX recieved by `<NODE-URL>`. *
amount_eth | number | current amount of ETH recieved by `<NODE-URL>`. *
amount_sysblock | number | current amount of sysBLOCK recieved by `<NODE-URL>`. *
amount_sys | number | current amount of SYS recieved by `<NODE-URL>`. *
api_key      | string    | API Key of the project, referred to in this document as `<API-KEY>`.   
api_tokens | number | Total number of API calls granted to the project  
api_tokens_remaining | number | Number of API calls remaining in the project   
api_tokens_used | number | Number of API calls used in the project   
min_amount_aablock | number | The cost of 1000 api calls in aaBLOCK. If *null*, it means this payment option is not available.
min_amount_aablock_usd | number | The cost of 1000 api calls in USD when paying with aaBLOCK.  
min_amount_ablock | number | The cost of 1000 api calls in aBLOCK. If *null*, it means this payment option is not available.
min_amount_ablock_usd | number | The cost of 1000 api calls in USD when paying with aBLOCK.  
min_amount_avax | number | The cost of 1000 api calls in AVAX. If *null*, it means this payment option is not available.
min_amount_eth | number | The cost of 1000 api calls in ETH. If *null*, it means this payment option is not available.
min_amount_sysblock | number | The cost of 1000 api calls in sysBLOCK. If *null*, it means this payment option is not available.
min_amount_sysblock_usd | number | The cost of 1000 api calls in USD when paying with sysBLOCK.  
min_amount_usd | number | The cost of 1000 api calls in USD when paying with AVAX, ETH or SYS. 
min_amount_sys | number | The cost of 1000 api calls in SYS. If *null*, it means this payment option is not available.   
payment_avax_address | string     | The Avalanche address to which payment should be sent if paying in ARC20 aaBLOCK or in AVAX.
payment_eth_address | string     | The Ethereum address to which payment should be sent if paying in ERC20 aBLOCK or in ETH.  
payment_nevm_address | string     | The Syscoin NEVM address to which payment should be sent if paying in SYS-ERC20 sysBLOCK or in SYS. 
project_id      | string | The project ID of the project, referred to in this document as `<PROJECT-ID>` 
quote_expiry_time     | string    | Expiry time (in UTC) of price quotes returned by the most recent `request_project` or `extend_project` call. Payments made after this time only receive half the normal number of api calls. Currently set to 1 hour after *quote_start_time*. See [extend_project](/#extend-project) to learn about fetching new price quotes and extending *quote_expiry_time*.
quote_start_time     | string    | Time (in UTC) when the most recent call to `request_project`  or `extend_project` was made for this project.
status        | string    | *pending*, *active*, *active_open*, *inactive*, *cancelled* or *user_cancelled*:<br><br>*pending* = "project is not active and *quote_expiry_time* has not yet been reached."<br><br>*active* = "sufficient payment has been made to activate the project, it has API calls remaining, and *quote_expiry_time* has been reached."<br><br>*active_open* = "project is active and *quote_expiry_time* has not yet been reached."<br><br>*inactive* = "project was active, then became inactive due to no API calls remaining."<br><br>*cancelled* = "*pending* project was cancelled due to insufficient payment received to activate the project before *quote_expiry_time*."<br><br>*user_cancelled* = *active* project was cancelled by the client via the [Project Cancellation Protocol.](/#cancel-project)"
tier            | integer | 0 if *Hydra* parameter is *False* ; 1 for a tier1 Hydra project; 2 for a tier2 Hydra project

`*` The `amount_<coin>` parameters represent the *current* amount of
  `<coin>` received by `<NODE-URL>`. This value will increase as the
  client sends more `<coin>` and decrease as the SNode operator
  withdraws `<coin>` from the account.
  
### Cancel Project

*(coming soon; this feature will require smart contract payment channels to be
implemented.)*

If at any time a client who has an active (or active_open) project wishes to cancel
that project, the client can do so by following the procedure below. When a
client cancels a project, a pro rata refund amount is returned to
the client. The pro rata refund amount is calculated from the initial
amount paid, the inital number of API tokens awarded, and the number
of API tokens remaining at the time of cancellation. Cancelling a
project is a two-step process.

#### First Step to Cancel Project 

*(coming soon.)*

#### Second Step to Cancel Project 

*(coming soon.)*

You should now receive your pro rata refund. If you want to check
   the status of your project to confirm it was
   cancelled, you can [call the `get_project_stats` method](/#get-project-stats).

### Authentication Error Codes

If an authentication error is returned after a call to `get_project_stats`, or after a call to either [XQuery API](/#xquery-api) or [Hydra API](/#hydra-api), the `error` field in the response object must be an error number and the `message` field must be a string. The following table displays all error codes and their associated messages:

Error Code  | Error Name  | Message 
------|-------|------------ 
1 | MISSING_API_KEY | API_KEY header missing or project-id missing.
2 | MISSING_PROJECT_ID  | Missing project-id in url.
3 | PROJECT_NOT_EXIST | Bad API_KEY or project-id does not exist.
4 | PROJECT_NOT_SUPPORTED | Project kind not supported by Service Node.
5 | API_TOKENS_EXCEEDED | API calls exceeded!
6 | MISSING_PAYMENT | Payment not received yet. Please submit payment or wait until payment confirms.
7 | API_KEY_DISABLED | API key is disabled.

<aside class="warning">
401 Unauthorized
</aside>

> ApiError MISSING_API_KEY

```shell
{
  "message": "API_KEY header missing or project-id missing",
  "error": 1
}
```

Parameter       | Type    | Description
----------------|---------|-------------
message       | string | Authentication error message.
error        | number | Authentication error code.

<aside class="warning">
401 Unauthorized
</aside>

> ApiError MISSING_PROJECT_ID

```shell
{
  "message": "Missing project-id in url",
  "error": 2
}
```

Parameter       | Type    | Description
----------------|---------|-------------
message       | string | Authentication error message.
error        | number | Authentication error code.

<aside class="warning">
401 Unauthorized
</aside>

> ApiError PROJECT_NOT_EXIST

```shell
{
  "message": "Bad API_KEY or project-id does not exist",
  "error": 3
}
```

Parameter       | Type    | Description
----------------|---------|-------------
message       | string | Authentication error message.
error        | number | Authentication error code.

<aside class="warning">
401 Unauthorized
</aside>

> ApiError PROJECT_NOT_SUPPORTED

```shell
{
  "message": "Project kind not supported by Service Node.",
  "error": 4
}
```

Parameter       | Type    | Description
----------------|---------|-------------
message       | string | Authentication error Message.
error        | number | Authentication error code.

<aside class="warning">
401 Unauthorized
</aside>

> ApiError API_TOKENS_EXCEEDED

```shell
{
  "message": "Project has expired. Please request a new project and api key",
  "error": 5
}
```

Parameter       | Type    | Description
----------------|---------|-------------
message       | string | Authentication error Message.
error        | number | Authentication error code.

<aside class="warning">
401 Unauthorized
</aside>

> ApiError MISSING_PAYMENT

```shell
{
  "message": "Payment not received yet. Please submit payment or wait until payment confirms",
  "error": 6
}
```

Parameter       | Type    | Description
----------------|---------|-------------
message       | string | Authentication error Message.
error        | number | Authentication error code.

<aside class="warning">
401 Unauthorized
</aside>

> ApiError API_KEY_DISABLED

```shell
{
  "message": "API key is disabled",
  "error": 7
}
```

Field       | Type    | Description
----------------|---------|-------------
message       | string | Authentication error Message.
error        | number | Authentication error code.
