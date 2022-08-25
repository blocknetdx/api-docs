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
[EVM](https://docs.blocknet.co/resources/glossary/#evm) data services are supported by each
SNode. <br>
In the meantime, you can get a list of SNodes providing XQuery
services here:<br>
[https://service-explorer.core.cloudchainsinc.com/#/xcloud-services/nodes/xrs::xquery](https://service-explorer.core.cloudchainsinc.com/#/xcloud-services/nodes/xrs::xquery).<br>
You can also get a list of SNodes providing Hydra services here:<br>
[https://service-explorer.core.cloudchainsinc.com/#/xcloud-services/nodes/xrs::evm_passthrough](https://service-explorer.core.cloudchainsinc.com/#/xcloud-services/nodes/xrs::evm_passthrough)

After choosing one of the SNodes from one of the above sites, make a
note of the Service Node's IP address or URL (found in the *Host*
column of the above sites). This Node URL will henceforth be referred
to as `<NODE-URL>` in this document.

## Request and Activate A New Project

The next step after selecting an SNode as your XQuery/Hydra data provider is to
create a new project on that SNode via the `request_project` call.

### request_project
The format of the `request_project` call is
illustrated in the Sample Request in the panel on the right --->
> Sample Request

```shell
curl http://<NODE-URL>/xrs/projects \
      -X POST \
      -H "Content-Type: application/json" \
      -d '{"id": 1, "method": "request_project", "params": []}' | jq
```
<code class="api-call">request_project</code>

This call does not take parameters.

### Response

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
    "result": {
        "api_key": "7sRZhURnVszL6Lf9B7It4Wr0JVYi_mzVAQ4lrutGnsQ",
        "expiry_time": "2022-05-10 06:05:02 EST",
        "payment_amount_tier1_aablock": null,
        "payment_amount_tier1_ablock": 21.875,
        "payment_amount_tier1_eth": 0.015047,
        "payment_amount_tier2_aablock": null,
        "payment_amount_tier2_ablock": 125.0,
        "payment_amount_tier2_eth": 0.085983,
        "payment_avax_address": "0x88d5B9c6a597C8ad60De610De51C827D6408725D",
        "payment_eth_address": "0x9225d87DAf52F5AAF92Cf1288ae9AC10793cB16e",
        "project_id": "3225c451-09dd-4f98-b538-4828d5b9ab48"
    }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
result          | object   | Object of the result.
api_key      | string    | API Key of the project, referred to in this document as `<API-KEY>`.
expiry_time     | string    | Expiry time of Project request. Project is cancelled if full payment is not made by this time.
payment_amount_tier1_aablock | number | The amount of aaBLOCK to pay for tier1* access privileges. If *null*, it means this payment option is not available.
payment_amount_tier1_ablock | number | The amount of aBLOCK to pay for tier1* access privileges. If *null*, it means this payment option is not available. 
payment_amount_tier1_eth | number | The amount of ETH to pay for tier1* access privileges. If *null*, it means this payment option is not available. 
payment_amount_tier2_aablock | number | The amount of aaBLOCK to pay for tier2* access privileges. If *null*, it means this payment option is not available.
payment_amount_tier2_ablock | number | The amount of aBLOCK to pay for tier2* access privileges. If *null*, it means this payment option is not available. 
payment_amount_tier2_eth | number | The amount of ETH to pay for tier2* access privileges. If *null*, it means this payment option is not available. 
payment_avax_address | string     | The Avalanche address to which payment should be sent if paying in ARC20 aaBLOCK (or in AVAX, if that option is added in the future).
payment_eth_address | string     | The Ethereum address to which payment should be sent if paying in ERC20 aBLOCK or in ETH.
project_id      | string | The project ID of the project, referred to in this document as `<PROJECT-ID>`

### Response Parameter Notes:
- The *expiry_time* returned by a `request_project` call is the
  expiry time for full payment to be made, not the
  expiration time of the project that will be activated once payment is
  made. The latter will always be one month in the future from the time payment is made.
- If *null* is returned for the
*payment_amount_tierX_aablock* values (or for the
*payment_amount_tierX_avax* values if/when they are added), it means
Avalanche blockchain data is not available from `<NODE-URL>`.
- If *null* is returned for the
*payment_amount_tierX_ablock* values, or for the
*payment_amount_tierX_eth* values, it means
Ethereum blockchain data is not available from `<NODE-URL>`.

### *tier1 
- A *tier1* project gets 6 million API calls.
- If `<NODE-URL>` hosts the
Ethereum blockchain, a *tier1* project only has access to the most
recent 128 blocks of ETH data (a.k.a. non-archival ETH data) via the
[Hydra API](/#hydra-api).
- [Hydra API](/#hydra-api) access to other [EVMs](https://docs.blocknet.co/resources/glossary/#evm), like Avalanche, is not restricted for a *tier1* project.
- A *tier1* project has unrestricted access to data from all EVMs hosted
by `<NODE-URL>`via the [XQuery API](/#xquery-api).

### *tier2
- The number of API calls a *tier2* project gets is calculated by the
forumla:<br>
`API calls = payment_amount_tier2/payment_amount_tier1 * 6 million`<br>
For Example, if *payment_amount_tier2_aablock* is 4 and
payment_amount_tier1_aablock is 0.7 then a *tier2* project would get:<br>
`4/0.7 * 6,000,000 = 34,285,714` API calls.
- If `<NODE-URL>` hosts the
Ethereum blockchain, a *tier2* project has full access to all ETH
archival data (i.e. ETH data from any block since the inception block) via the
[Hydra API](/#hydra-api).
- [Hydra API](/#hydra-api) access to other [EVMs](https://docs.blocknet.co/resources/glossary/#evm), like Avalanche, is not restricted for a *tier2* project.
- A *tier2* project has unrestricted access to data from all EVMs hosted
by `<NODE-URL>`via the [XQuery API](/#xquery-api).


### Project Details
- If `<NODE-URL>` hosts both XQuery and Hydra services, an API call to
either [XQuery API](/#xquery-api) or [Hydra API](/#hydra-api) counts
as 1 API call and deducts 1 from the total remaining API calls in
the project.
- The lifespan of an *active* project is constrained by two separate
constraints. Whichever constraint triggers first, terminates the
project. The two constraints are:
 1. Number of api calls. When all purchased API calls have been used,
   the project expires.
 1. Expiry time: 1 month from the date of activation of the project

### Activate Project
To activate the project returned by the call to `request_project`,
send the *exact* required payment amount to the appropriate payment
address. (See [Response Parameters](/#response) for details). It
doesn't matter on which chain the payment is made
(e.g. ETH, aBLOCK or aaBLOCK); an *active* project is an *active* project.


### Payment Notes
- The payment amounts are fixed in USD by the SNode operator, but
denominated in various cryptos such as ETH,
[aBLOCK](https://docs.blocknet.co/blockchain/ablock/) and/or
[aaBLOCK](https://docs.blocknet.co/blockchain/aablock/).
- Payment to activate a project should be made for the exact amount indicated by
  one of the *payment_amount* parameters returned by the `request_project`
  call. Partial payment should *not* be sent.
- The [*expiry_time*](/#response-parameter-notes) for payment to the
  project is 1 hr after `request_project` is called. As soon as
  `request_project` is called, the project status becomes
  *pending*. The project status then changes according to the
  following rules.
- If a project receives a payment which is >= *tier1* amount, but <
  *tier2* amount, and the payment is received before the *expiry_time*
  for payment, the project
  status becomes *active*, the tier is set to *tier1*, and any
  difference between the amount received and the *tier1* amount is
  returned, minus gas fees. (Nothing will be returned if gas fees >=
  amount to be returned.)
- If a project receives a payment which is >= *tier2* amount, and the payment is received before the *expiry_time* for payment, the project status becomes *active*, the tier is set to *tier2*, and any
  difference between the amount received and the *tier2* amount is
  returned, minus gas fees. (Nothing will be returned if gas fees >=
  amount to be returned.)
- If a project receives no payment, or receives a payment which is <
  *tier1* amount, and the *expiry_time* for payment is reached, the
  project status changes to *cancelled* and any amount
  received prior to cancellation is returned, minus gas fees. (Nothing
  will be returned if gas fees >= amount to be returned.)
- If an *active* project was cancelled by the client via the [Project Cancellation
  Protocol.](/#cancel-project), the project status changes to *cancelled*.
- If a project was active, then expired due to the 1 month *expiration* time being
  reached, or due to no API calls remaining, the project status
  changes to *inactive*.
- Only payments made to a project whose status is *pending* will be
  accepted. Any payments made to a project whose status is *active*, *inactive*
  or *cancelled* will be returned, minus gas fees. (Nothing will be
  returned if gas fees are greater than payments made.)
- A project cannot be upgrade from *tier1* to *tier2* once it has been
  activated as a *tier1* project. Instead of upgrading, the user should request a new project for *tier2*.


### Get Project Stats
Once the required payment has been sent, the project becomes
*active*. The client can (soon) check to confirm the project has become
*active*, and gather other statistics about the project, by calling the
`get_project_stats` method as in the example in the right panel ---->

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
  "result":
    {
      "api_key": "uiF_scQgopWWhgDFT7AMbM2Vf2b66xlfnVrJe6e1gUE",
	  "status": "active",
	  "tier":1, 
	  "api_tokens":6000000,
	  "api_tokens_used":0, 
	  "api_tokens_remaining":6000000, 
	  "expiry_time": "N/A", 
	  "expires": "2022-11-19 22:17:53 EST", 
      "project_id": "85f1641d-f8ab-4acb-aa00-5d19601a9dd7"
    }
}
```
Parameter       | Type    | Description
----------------|---------|-------------
error          | integer  | Error code
result          | object   | Object of the result.
api_key      | string    | API Key of the project, referred to in this document as `<API-KEY>`.  
status        | string    | *pending*, *active*, *inactive* or *cancelled*:<br><br>*pending* = "not yet paid, but `<PROJECT-ID>` and `<API-KEY>` have been created."<br><br>*active* = "paid and has API calls available."<br><br>*inactive* = "project was active, then expired due to *expiration* time being reached, or due to no API calls remaining."<br><br>*cancelled* = "*pending* project was cancelled due to insufficient payment received before *expiry_time* for payment, or *active* project was cancelled by the client via the [Project Cancellation Protocol.](/#cancel-project)"
tier            | integer | 0 if *status* is *pending*; 1 for tier1; 2 for tier2
api_tokens | string | Initial number of API calls granted to the project  
api_tokens_used | string | Number of API calls used in the project   
api_tokens_remaining | string | Number of API calls remaining in the project   
expiry_time | string | If *status* is *pending*, this parameter will display the time by which payment is due to prevent the project from being cancelled. if *status* is other than *pending*, this parameter will display, "N/A" 
expiration | string | If *status* is *pending* or *cancelled*, this parameter will display, "N/A."  If *status* is *active* or *inactive*, this parameter will display the time when the project expires (or expired).
project_id      | string | The project ID of the project, referred to in this document as `<PROJECT-ID>`

### Cancel Project

If at any time a client who has an active project wishes to cancel
that project, the client can do so by following the procedure below. When a
client cancels a project, a pro rata refund amount is returned to
the client. The pro rata refund amount is calculated from the initial
amount paid, the inital number of API tokens awarded, and the number
of API tokens remaining at the time of cancellation. Cancelling a
project is a two-step process.

#### First Step to Cancel Project 

The first step to cancel a project is to call the `cancel_project`
   method using the format given in the right panel ---->

> Cancel Project

```shell
curl http://<NODE-URL>/xrs/projects/<PROJECT-ID> \
      -X POST \
      -H "Content-Type: application/json" \
      -H "Api-Key: <API-KEY>" \
      -d '{"id": 1, "method": "cancel_project", "params": []}' | jq
```

<code class="api-call">cancel_project</code>

<br><br><br><br><br><br><br><br>

> Sample Response

```json
{
    "result": {
        "api_key": "7sRZhURnVszL6Lf9B7It4Wr0JVYi_mzVAQ4lrutGnsQ",
        "project_id": "3225c451-09dd-4f98-b538-4828d5b9ab48",
		"message": "some-text-message", 
		"signature": "2wqCG3tXqv6rdomvGEAoS1MSNRWEaVFC8z6NJ6cagRBK6xWDRsSjdywEEXEqYq1FQD59nGB9fhY9WNFhCpnMV6yhyNew8Gg",
		"api_tokens_remaining": 5999000
    }
}
```

The call to `cancel_project` will return the *api_key*, the
*project_id*, a *message*, a *signature* and the *api_tokens_remaining*, all
within a JSON object, as in the Sample Response in the right panel ---->
<aside class="success">
200 OK
</aside>

 Parameter       | Type    | Description
----------------|---------|-------------
result          | object   | Object of the result.
api_key      | string    | API Key of the project, referred to in this document as `<API-KEY>`.
project_id      | string | The project ID of the project, referred to in this document as `<PROJECT-ID>`
message      | string | The text message which will need to be sent to the Payment Smart Contract to cancel the project. 
signature      | string | The alphanumeric string which will need to be sent to the Payment Smart Contract to cancel the project. 
api_tokens_remaining | string | Number of API calls remaining in the project.

#### Second Step to Cancel Project 

The second step to cancel a project is to send the *api_key*, *project_id*, *message*, *signature* and
   *api_tokens_remaining* to the *close()* method of the Payment
   Channel Smart Contract. (Details of how to do this, plus an example, will
   be included here soon.)
   
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
4 | PROJECT_EXPIRED | Project has expired. Please request a new project and api key.
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

> ApiError PROJECT_EXPIRED

```shell
{
  "message": "Project has expired. Please request a new project and api key",
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
