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

This call takes optional parameters [XQuery] [Hydra] and/or [Tier]. If
no parameters are passed, or if boolean param *XQuery* is passed with
value *True*, an [XQuery](/#xquery-api) project is requested. If
XQuery param is passed as *True*, any *Hydra* or *Tier*
param is ignored. Otherwise, if boolean
param *Hydra* is passed with value *True*, a [Hydra](/#hydra-api)
project is requested and the [Tier level](/#tier1) of the Hydra project is set
according to the integer value passed as the *Tier* param. (Tier
defaults to 1 if *Tier* param is not passed.)

### Response

<aside class="success">
200 OK
</aside>

> Sample Response

```json
{
  "result": {
    "api_key": "teCpyyqed45klJtR7LSEMPtGJO3PrIQv0S9H2oNDYeM",
    "expiry_time": "2022-08-19 04:08:11 UTC",
    "api_call_cost_aablock": 1.935193,
    "api_call_cost_ablock": 21.875,
    "api_call_cost_eth": 0.018457,
    "api_call_cost_sysblock": 182.825524,
    "api_call_cost_wsys": 212.072371,
    "payment_avax_address": "0x2568F496962B87240C310978AFe84B75521bb55f",
    "payment_eth_address": "0xfB7F79DBcF9E58699D4744054281e3d223B766f0",
    "payment_nevm_address": "0x6Ea86E18b73d4b88A986f8f465FDEEefd0E762Cb",
    "project_id": "9021a04c-dc04-433f-952a-5b8d5203a1bd"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
result          | object   | Object of the result.
api_key      | string    | API Key of the project, referred to in this document as `<API-KEY>`.
expiry_time     | string    | Expiry time of Project request. Project is cancelled if minimum payment is not made by this time.
api_call_cost_aablock | number | The cost of 1000 api calls in aaBLOCK. If *null*, it means this payment option is not available.
api_call_cost_ablock | number | The cost of 1000 api calls in aBLOCK. If *null*, it means this payment option is not available.  
api_call_cost_sysblock | number | The cost of 1000 api calls in sysBLOCK. If *null*, it means this payment option is not available.   
api_call_cost_eth | number | The cost of 1000 api calls in ETH. If *null*, it means this payment option is not available.  
api_call_cost_wsys | number | The cost of 1000 api calls in wSYS. If *null*, it means this payment option is not available.   
payment_avax_address | string     | The Avalanche address to which payment should be sent if paying in ARC20 aaBLOCK (or in AVAX, if that option is added in the future).
payment_eth_address | string     | The Ethereum address to which payment should be sent if paying in ERC20 aBLOCK or in ETH.  
payment_nevm_address | string     | The Syscoin NEVM address to which payment should be sent if paying in SYS-ERC20 sysBLOCK or in wSYS. 
project_id      | string | The project ID of the project, referred to in this document as `<PROJECT-ID>`

### Response Parameter Notes:
- The *expiry_time* returned by a `request_project` call is the
  expiry time for minimum payment to be made.
- If *null* is returned for the
*api_call_cost_aablock* value (or for the
*api_call_cost_avax* value if/when it's added), it means
Avalanche blockchain data is not available from `<NODE-URL>`.
- If *null* is returned for the
*api_call_cost_ablock* value, or for the
*api_call_cost_eth* value, it means
Ethereum blockchain data is not available from `<NODE-URL>`.
- If *null* is returned for the
*api_call_cost_sysblock* value, or for the
*api_call_cost_wsys* value, it means
Syscoin NEVM blockchain data is not available from `<NODE-URL>`.

### *tier1 
- For [Hydra](/#hydra-api) projects:
- If `<NODE-URL>` hosts the
Ethereum blockchain, a *tier1* project only has access to the most
recent 128 blocks of ETH data (a.k.a. non-archival ETH data) via the
[Hydra API](/#hydra-api).
- [Hydra API](/#hydra-api) access to other [EVMs](https://docs.blocknet.org/resources/glossary/#evm), like Avalanche or SYS NEVM, is not restricted for a *tier1* project.

### *tier2
- For [Hydra](/#hydra-api) projects: 
- If `<NODE-URL>` hosts the
Ethereum blockchain, a *tier2* project has full access to all ETH
archival data (i.e. ETH data from any block since the inception block) via the
[Hydra API](/#hydra-api).
- [Hydra API](/#hydra-api) access to other
  [EVMs](https://docs.blocknet.org/resources/glossary/#evm), like
  Avalanche or SYS NEVM, is not restricted for a *tier2* project.


### Project Details
- An API call to either [XQuery API](/#xquery-api) or [Hydra API](/#hydra-api) counts
as 1 API call and deducts 1 from the total remaining API calls in
the project.
- There is no expiration time for a project. A project remains active
  until all api calls have been used, or until the user or the SNode operator [cancels the project](/#cancel-project).

### Activate Project
- To activate the project returned by the `request_project` call,
send a minimum payment sufficient to purchase 1000 api calls or
more before the [*expiry_time*](/#response-parameter-notes). (See [Response Parameters](/#response) for details.)
- There is no maximum number of api calls which can be purchased.
- The number of api calls awarded is simply 1000 x *payment amount* /
*cost of 1000 api calls*. (See [Response Parameters](/#response)
for details.)
- It doesn't matter on which chain the payment is made, or which currency
is used to make the payment (e.g. ETH, aBLOCK, aaBLOCK, sysBLOCK, wSYS); an *active* project is an *active* project.
- Send payment to the payment address corresponding to the currency in which payment is being made. (See [Response Parameters](/#response) for details.) 
- The cost per 1000 api calls is determined by [which kind of project is requested](/#request-and-activate-a-new-project), and by the
operator of the SNode at `<NODE-URL>`.

### Payment Notes
- The payment amounts are fixed in USD by the SNode operator, but
denominated in various cryptos such as ETH,
[aBLOCK](https://docs.blocknet.org/blockchain/ablock/),
[aaBLOCK](https://docs.blocknet.org/blockchain/aablock/), sysBLOCK
and/or wSYS.
- Payment to activate a project should be made for *at least* the amount indicated by
  one of the *api_call_cost_* parameters returned by the `request_project`
  call. Partial payment should *not* be sent.
- The [*expiry_time*](/#response-parameter-notes)for payment to the
  project is 1 hr after `request_project` is called. As soon as
  `request_project` is called, the project status becomes
  *pending*. The project status then changes according to the
  following rules.
- If a project receives a payment which is >= the
  *api_call_cost_* parameter, and the payment is received before the *expiry_time*
  for payment, the project status becomes *active*.
- If a project receives no payment, or receives a payment which is
  less than the *api_call_cost_* parameter, and the *expiry_time* for payment is reached, the
  project status changes to *cancelled*.
- If an *active* project was cancelled by the client via the [Project Cancellation
  Protocol](/#cancel-project), the project status changes to *user_cancelled*.
- If a project was *active*, then expired due to no API calls remaining, the project status
  changes to *inactive*.
- There are only two conditions under which payments made to a project
  will be accepted. Any payment made to a project
  which does not meet either of these two conditions will be returned, minus gas fees. (Nothing will be
  returned if gas fees are greater than payment made.) The two
  conditions  under which payment can be made to a project are:
	  1. The project status is *pending*
	  1. The project status is *active* and the
         [extend_project](/#extend-project) method has been called for the project within the last 1 hour.
- To change a project's status from *inactive*, *cancelled* or
  *user_cancelled* to *pending*, and thus make it eligible to receive
  a payment to purchase new api calls, call the
  [extend_project](/#extend-project) method.
- A project cannot be upgrade or changed from XQuery to Hydra, or from
  *tier1* to *tier2*. Instead of upgrading, the user should request a new project, passing the
  appropriate parameters to request the [kind of project desired.](/#request-and-activate-a-new-project)

### Extend Project
The `extend_project` method allows the user to do one of two things:

1. Extend a project already in the *active* state by getting a quote for the
   purchase of more api calls and setting a new
   [*expiry_time*](/#response-parameter-notes) for making the payment.
1. Revive a project from an *inactive*, *cancelled* or
  *user_cancelled* state and place it in a *pending* state. Once in
  the *pending* state, the project is eligible to receive
  a payment to purchase new api calls within the new [*expiry_time*](/#response-parameter-notes).

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
    "api_key": "teCpyyqed45klJtR7LSEMPtGJO3PrIQv0S9H2oNDYeM",
    "expiry_time": "2022-08-19 04:08:11 UTC",
    "api_call_cost_aablock": 1.935193,
    "api_call_cost_ablock": 21.875,
    "api_call_cost_eth": 0.018457,
    "api_call_cost_sysblock": 182.825524,
    "api_call_cost_wsys": 212.072371,
    "payment_avax_address": "0x2568F496962B87240C310978AFe84B75521bb55f",
    "payment_eth_address": "0xfB7F79DBcF9E58699D4744054281e3d223B766f0",
    "payment_nevm_address": "0x6Ea86E18b73d4b88A986f8f465FDEEefd0E762Cb",
    "project_id": "9021a04c-dc04-433f-952a-5b8d5203a1bd"
  }
}
```

Parameter       | Type    | Description
----------------|---------|-------------
result          | object   | Object of the result.
api_key      | string    | API Key of the project, referred to in this document as `<API-KEY>`.
expiry_time     | string    | Expiry time of Project request. Project is cancelled if minimum payment is not made by this time.
api_call_cost_aablock | number | The cost of 1000 api calls in aaBLOCK. If *null*, it means this payment option is not available.
api_call_cost_ablock | number | The cost of 1000 api calls in aBLOCK. If *null*, it means this payment option is not available.  
api_call_cost_sysblock | number | The cost of 1000 api calls in sysBLOCK. If *null*, it means this payment option is not available.   
api_call_cost_eth | number | The cost of 1000 api calls in ETH. If *null*, it means this payment option is not available.  
api_call_cost_wsys | number | The cost of 1000 api calls in wSYS. If *null*, it means this payment option is not available.   
payment_avax_address | string     | The Avalanche address to which payment should be sent if paying in ARC20 aaBLOCK (or in AVAX, if that option is added in the future).
payment_eth_address | string     | The Ethereum address to which payment should be sent if paying in ERC20 aBLOCK or in ETH.  
payment_nevm_address | string     | The Syscoin NEVM address to which payment should be sent if paying in SYS-ERC20 sysBLOCK or in wSYS. 
project_id      | string | The project ID of the project, referred to in this document as `<PROJECT-ID>`

### Get Project Stats  
Once the required payment has been sent, the project becomes
*active*. The client can check to confirm the project has become
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
  "result": {
    "api_call_cost_aablock": "1.86627",
    "api_call_cost_ablock": "21.875",
    "api_call_cost_eth": "0.020989",
    "api_call_cost_sysblock": "173.773455",
    "api_call_cost_wsys": "201.573425",
    "amount_aablock": "1.86627",
    "amount_ablock": "0.0",
    "amount_eth": "0.0",
    "amount_sysblock": "0.0",
    "amount_wsys": "0.0",
    "api_key": "ng-qQKiKT2T5FGY5Ba_P9Cb3I-fj_ZC04slMbijnmeQ",
    "api_tokens": "6000000",
    "api_tokens_remaining": "6000000",
    "api_tokens_used": "0",
    "avax_address": "0x6b3757aA176F594B1bB7806Fea9A4Ec6E4fA5808",
    "eth_address": "0x22fea657760Bbae0c0b76e46ff0e7821A01BE8Ef",
    "expiry_time": "2022-08-17 19:27:21 UTC",
    "nevm_address": "0x9118e4076E1878Aaf84CbD7EcA78cE3cfa98b80C",
    "project_id": "244c7f0c-d845-44f5-af9a-c572bdd023d9",
    "project_type": "XQuery", 
    "start_time": "2022-08-17 18:27:21 UTC",
    "status": "active",
    "tier": 0
  }
}
```
Parameter       | Type    | Description
----------------|---------|-------------
error          | integer  | Error code
result          | object   | Object of the result.
api_call_cost_aablock | number | The cost of 1000 api calls in aaBLOCK. If *null*, it means this payment option is not available.
api_call_cost_ablock | number | The cost of 1000 api calls in aBLOCK. If *null*, it means this payment option is not available.  
api_call_cost_sysblock | number | The cost of 1000 api calls in sysBLOCK. If *null*, it means this payment option is not available.   
api_call_cost_eth | number | The cost of 1000 api calls in ETH. If *null*, it means this payment option is not available.  
api_call_cost_wsys | number | The cost of 1000 api calls in wSYS. If *null*, it means this payment option is not available.   
amount_aablock | string | most recent amount of aaBLOCK recieved by `<NODE-URL>`. 
amount_ablock | string | most recent amount of aBLOCK recieved by `<NODE-URL>`. 
amount_eth | string | most recent amount of eth recieved by `<NODE-URL>`. 
amount_sysblock | string | most recent amount of sysBLOCK recieved by `<NODE-URL>`. 
amount_wsys | string | most recent amount of wSYS recieved by `<NODE-URL>`. 
api_key      | string    | API Key of the project, referred to in this document as `<API-KEY>`.  
api_tokens | string | Total number of API calls granted to the project  
api_tokens_remaining | string | Number of API calls remaining in the project   
api_tokens_used | string | Number of API calls used in the project   
avax_address | string | The Avalanche address to which payment should be sent if paying in ARC20 aaBLOCK (or in AVAX, if that option is added in the future).  
eth_address | string | The Ethereum address to which payment should be sent if paying in ERC20 aBLOCK or in ETH.  
expiry_time | string | If *status* is *pending*, or if *status* is *active* and [extend_project](/#extend-project) has been called within the last 1 hour, this parameter will display the time at which quoted api call costs expire. If quoted api call costs have already expired, this parameter will display the time when they expired. 
nevm_address | string     | The Syscoin NEVM address to which payment should be sent if paying in SYS-ERC20 sysBLOCK or in wSYS. 
project_id      | string | The project ID of the project, referred to in this document as `<PROJECT-ID>`
project_type | string | *XQuery* if project is an XQuery project; *Hydra* if project is a Hydra project.
start_time | string | The time when the `request_project` method first created this project.
status        | string    | *pending*, *active*, *inactive*, *cancelled* or *user_cancelled*:<br><br>*pending* = "not yet paid, but `<PROJECT-ID>` and `<API-KEY>` have been created."<br><br>*active* = "paid and has API calls remaining."<br><br>*inactive* = "project was active, then expired due to no API calls remaining."<br><br>*cancelled* = "*pending* project was cancelled due to insufficient payment received before *expiry_time* for payment."<br><br>*user_cancelled* = *active* project was cancelled by the client via the [Project Cancellation Protocol.](/#cancel-project)"
tier            | integer | 0 if *status* is *pending* or if project_type is *Hydra*; 1 for tier1 Hydra project; 2 for tier2 Hydra project

### Cancel Project

*(coming soon, but maybe not for the first release of the Projects API.)*

If at any time a client who has an active project wishes to cancel
that project, the client can do so by following the procedure below. When a
client cancels a project, a pro rata refund amount is returned to
the client. The pro rata refund amount is calculated from the initial
amount paid, the inital number of API tokens awarded, and the number
of API tokens remaining at the time of cancellation. Cancelling a
project is a two-step process.

#### First Step to Cancel Project 

*(coming soon, but maybe not for the first release of the Projects
API.)*

#### Second Step to Cancel Project 

*(coming soon, but maybe not for the first release of the Projects
API.)*

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
