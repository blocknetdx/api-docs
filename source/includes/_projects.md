# Projects API - XQuery/Hydra

Before data from [XQuery API](/#xquery-api) or [Hydra API](/#hydra-api) can be
consumed by a client, a *Project* must be requested and activated
through the Projects API. A project is assigned a `project_id` and an
`api_key`, referred to in this document as
`<PROJECT-ID>` and `<API-KEY>`. Both the `<PROJECT-ID>` and `<API-KEY>` must be provided in API calls to [XQuery API](/#xquery-api) and [Hydra API](/#hydra-api) as proof that the calls are being made from an active project.

## XQuery/Hydra Nodes

There will soon be a website which provides a list of
Service Nodes (SNodes) supporting XQuery and/or
Hydra services. This website will also provides details about which specific
[EVM](https://docs.blocknet.co/resources/glossary/#evm) data services are supported by each
SNode. <br>
In the meantime, you can get a list of SNodes providing XQuery
services here:<br>
[https://service-explorer.core.cloudchainsinc.com/#/xcloud-services/nodes/xrs::xquery](https://service-explorer.core.cloudchainsinc.com/#/xcloud-services/nodes/xrs::xquery).<br>
You can also get a list of SNodes supporting Hydra services here:<br>
[https://service-explorer.core.cloudchainsinc.com/#/xcloud-services/nodes/xrs::evm_passthrough](https://service-explorer.core.cloudchainsinc.com/#/xcloud-services/nodes/xrs::evm_passthrough)

After choosing one of the SNodes from one of the above sites, make a
note of the Service Node's IP address or URL (found in the *Host*
column of the above sites). This Node URL will henceforth be referred
to as `<NODE-URL>` in this document.

## Request and Activate A New Project

The next step after selecting an SNode as your EVM data provider is to
create a new project on that SNode via the `request_project` call.

### request_project
The format of the `request_project` call is
illustrated in the Sample Request in the panel on the right --->
> Sample Request

```shell
curl http://<NODE-URL>/xrs/projects \
      -X POST \
      -H "Content-Type: application/json" \
      -d '{"id": 1, "method": "request_project", "params": []}' |
	  python3 -m json.tool
```
<code class="api-call">request_project</code>

This call does not take parameters.

### Response

<aside class="success">
200 OK
</aside>

> Sample Response

```shell
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
payment_amount_tier1_aablock | number | The amount of aaBLOCK to pay for tier1* access privileges. If *null*, this payment option is not available.  
payment_amount_tier1_ablock | number | The amount of aBLOCK to pay for tier1* access privileges. If *null*, this payment option is not available.   
payment_amount_tier1_eth | number | The amount of ETH to pay for tier1* access privileges. If *null*, this payment option is not available.   
payment_amount_tier2_aablock | number | The amount of aaBLOCK to pay for tier2* access privileges. If *null*, this payment option is not available.  
payment_amount_tier2_ablock | number | The amount of aBLOCK to pay for tier2* access privileges. If *null*, this payment option is not available.   
payment_amount_tier2_eth | number | The amount of ETH to pay for tier2* access privileges. If *null*, this payment option is not available.   
payment_avax_address | string     | The Avalanche address to which payment should be sent if paying in ARC20 aaBLOCK (or in AVAX, if that option is added in the future).
payment_eth_address | string     | The Ethereum address to which payment should be sent if paying in ERC20 aBLOCK or in ETH.
project_id      | string | The project ID of the project, referred to in this document as `<PROJECT-ID>`

!!! warning "The active life of a project is constrained by two separate constraints: Expiry time (1 month from the date of payment), and number of api calls.

##### Note: 

 - The expiry_time returned by a request_project call to a Hydra/XQuery snode is the expiration of the offer at the quoted rate, not the expiry time of the project that will be initiated once payment is made. The latter will always be one month in the future from the time payment is made.
 - Tier2 payments give clients access to all archival ETH data, whereas tier1 payments only give access to the most recent 128 blocks of ETH data. (tier1 payments still have access to all data on the AVAX blockchain; only ETH blockchain data is restricted with tier1 payments.)
 
#### Payment Notes: 
- The payment amounts are fixed in USD, but denominated in ETH,
[aBLOCK](https://docs.blocknet.co/blockchain/ablock/) and/or
[aaBLOCK](https://docs.blocknet.co/blockchain/aablock/), depending
which payment methods are accepted at the chosen `<NODE-URL>`.
- Projects can be underpaid and the snode waits unlimited time for them to be paid fully
- If a project is paid in over 12h, the user only gets access to the most recent 128 blocks of ETH (nonarchival access) and half of default api count
- If a project is paid in time in under 12h the api call count is relative to the amount paid and activate archival (i.e. access to all ETH blocks) if greater than tier2
- A project cannot be upgrade from tier1 to tier2 if already paid tier1. Instead of upgrading, the user should request a new project for tier2 (archival).
- An active project gives Hydra and XQuery access to all chains supported on the snode where the project is active. So if an snode supports ETH, AVAX, BSC, FTM, SOL, DOT, ADA, Etc., then Hydra and XQuery access to all of those chains is available through an active project.
It doesn't matter on which chain the payment for the project was paid (e.g. aBLOCK or aaBLOCK).

##### Number of api calls alloted 
- Tier1 payment is 6 million.
- Tier2 payment is tier2_amount/tier1_amount * 6 million."


The returned `project_id` should be passed as a path parameter to the Hydra Node you have paid for. Henceforth from now `project-id` is referred as `<PROJECT-ID>` in the rest of the documentation.

The returned `api_key` should be passed in the request body of the POST request. Henceforth from now `api_key` is referred as `<API-KEY>` in the rest of the documentation.

### Check A Project
Once payment has been sent to an snode, the project ID/Api-key become active. The client can check to confirm the project has become active like this:

> Sample Request

```shell
curl http://<NODE-URL>/xrs/projects \
      -X POST \
      -H "Content-Type: application/json" \
      -d '{"id": 1, "method": "list_projects", "params": []}'
```
<code class="api-call">check_a_project</code>

This call does not take parameters.

### Response

<aside class="success">
200 OK
</aside>

> Sample Response

```shell
{
  "error": 0,
  "result":
    {
      "api_key": "uiF_scQgopWWhgDFT7AMbM2Vf2b66xlfnVrJe6e1gUE",
      "expiry_time": "2022-11-19 22:17:53 EST",
      "payment_address": "0x0x0xxx",
      "payment_amount_tier1": 0.073597,
      "payment_amount_tier2": 0.420557,
      "project_id": "85f1641d-f8ab-4acb-aa00-5d19601a9dd7"
    }
}
```

##### Note
Once a Hydra/XQuery project has been created and activated, API calls to that project will return details about the project in the HEADER portion of the HTTP response. For example, this kind of info will be returned in the HTTP header when making Hydra/XQuery calls:

```shell
{
  "PROJECT-ID" : "832ecaee-a26c-484f-a6f6-51e4cfd1a367",
  "API-TOKENS" : "6000000",
  "API-TOKENS-USED" : 1079,
  "API-TOKENS-REMAINING" : 5998921
}
```
