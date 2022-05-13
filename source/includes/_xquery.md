# XQuery API
## XQuery Authentication

> XQuery Authentication

```shell
curl http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/indexer/ \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" 
```

Before data from XQuery API can be consumed by a client, a *Project* must be
requested and activated via the [Projects
API](/#projects-api-xquery-hydra). This gives you a `<PROJECT-ID>` and
`<API-KEY>` of an active project. The `<PROJECT-ID>` must be included in
the request URL, and the `<API-KEY>` must be  in the `Api-Key` header
of a request, as in the XQuery Authentication example in the right panel --->
<br>
See [Authentication Error Codes](/#authentication-error-codes) for possible error codes and their meanings. 


## XQuery Endpoints

`curl -X POST http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/help
Powered by
	https://blocknet.co
	https://xquery.io

Current Graph
	http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/help/graph

List available endpoints
	http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/help

GraphQL endpoint
	http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/indexer/

GraphQL data types
	http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/help/schema
`

## Make Requests
Ethereum JSON-RPC requests are made via the `/xrs/evm_passthrough/<PROJECT-ID>` route. A JSON-RPC request should have a request body containing the `method` (string) and optionally `params` (string array).

<code class="api-call">method [params]</code>

Parameter       | Type    | Description
----------------|---------|-------------
method       | string | Ethereum JSON-RPC method.
params        | string array | Parameters of Ethereum JSON-RPC method.
### An example
On the right there is a quick command line example using `curl` where `method` = `eth_blockNumber` and `params` = [].

> Sample Ethereum JSON-RPC Request

```shell
# Be sure to replace YOUR-PROJECT-ID with a Project ID from the generated project
curl http://<NODE-URL>/xrs/evm_passthrough/<PROJECT-ID> \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params": [],"id":1}'
```

<code class="api-call">eth_blockNumber</code>

This call does not take parameters.

<br><br><br><br><br>
Whether the response code is 200 (success) or not, the Response Header
will always contain useful information about the project ---->
>  Response Headers

```shell
PROJECT-ID: <PROJECT-ID>
API-TOKENS: <API Token Count>
API-TOKENS-USED: <API Tokens Used Count>
API-TOKENS-REMAINING: <API Tokens Remaining Count>
```
<br><br>
<aside class="success">
200 OK
</aside>

> Sample Ethereum JSON-RPC Response Body

```json
{
  "jsonrpc": "2.0",
  "result": "0x895cc6",
  "id": 1
}
```
<br><br><br>

Parameter       | Type    | Description
----------------|---------|-------------
jsonrpc           | string  | JSON RPC version.
result           | string  | Integer of the current block number the client is on.
id           | int  | ID number.


### Error codes
 If one of the inputs (`method` and/or `params`) are malformed, then the client may receive one the following error responses:

<aside class="warning">
400 Bad Request
</aside>

> MalformedJSONData Response Body

```json
{
  "message": "malformed json post data"
  "error": 1000
}
```

Parameter       | Type    | Description
----------------|---------|-------------
message      | string | Request contains malformed JSON POST data.
error        | number | Error code.

<aside class="warning">
400 Bad Request
</aside>

> MissingParameters Response Body

```json
{
  "error": "missing parameters"
}
```

Parameter       | Type    | Description
----------------|---------|-------------
error        | string | Request misses parameters.

<aside class="warning">
401 Unauthorized
</aside>

> DisallowedMethod Response Body

```json
{
  "error": "disallowed method <method>"
}
```

Parameter       | Type    | Description
----------------|---------|-------------
error        | string | Disallowed JSON-RPC eth method.
