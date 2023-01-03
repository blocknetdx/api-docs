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

## Introspection: Database Schema Queries

XQuery is powered in part by [Hasrua GraphQL
Engine](https://hasura.io). GraphQL offers a set of special
queries called [Introspection
Queries](https://graphql.org/learn/introspection/). Introspection
queries allow an XQuery client to learn about the schema (database
structure) and available queries within that schema. The following are
examples of Introspection queries XQuery clients can perform:

### All Types And Their Descriptions
On the right is a command line example using `curl` to list *all*
available query types and their descriptions.

> XQuery Sample Request - All Types And Their Descriptions 

<code class="api-call">All Types And Their Descriptions</code>

```shell
# Example to display all types and their descriptions
curl http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/indexer \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
	-d '{"query": "query MyQuery {__schema {types {name description}}}"}'
```


<br><br><br><br><br><br><br><br><br><br>

By default, `curl` does not print the Response Headers. To see the Response Headers printed in the above example, add "`-D -`"
options to the `curl` command, like this ---->

<code class="api-call">All Types And Their Descriptions, print headers</code>

> XQuery Sample Request - All Types And Their Descriptions, print headers 

```shell
# Example to display all types and their descriptions & print Headers
curl -D - http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/indexer \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
	-d '{"query": "query MyQuery {__schema {types {name description}}}"}'
```

<br><br><br><br><br><br><br><br><br><br><br>
Whether the response code is 200 (success) or not, the Response Headers
will always contain useful information about the project status. ---->
>  XQuery Sample Response Headers

```shell
PROJECT-ID: <PROJECT-ID>
API-TOKENS: <API Token Count>
API-TOKENS-USED: <API Tokens Used Count>
API-TOKENS-REMAINING: <API Tokens Remaining Count>
```
<br><br><br><br><br><br><br><br><br><br><br>

> XQuery Sample Response Body - All Types And Their Descriptions

<aside class="success">
200 OK
</aside>

```json
{
  "data": {
    "__schema": {
      "types": [
        {
          "name": "Boolean",
          "description": null
        },
        {
          "name": "Boolean_comparison_exp",
          "description": "Boolean expression to compare columns of type \"Boolean\". All fields are combined with logical 'AND'."
        },
        {
          "name": "Float",
          "description": null
        },
        {
          "name": "Int",
          "description": null
        },
        {
          "name": "Int_comparison_exp",
          "description": "Boolean expression to compare columns of type \"Int\". All fields are combined with logical 'AND'."
        },
        {
          "name": "String",
          "description": null
        },
        {
          "name": "String_comparison_exp",
          "description": "Boolean expression to compare columns of type \"String\". All fields are combined with logical 'AND'."
        },
        {
          "name": "__Directive",
          "description": null
        },
        {
          "name": "__EnumValue",
          "description": null
        },
        {
          "name": "__Field",
          "description": null
        },
        {
          "name": "__InputValue",
          "description": null
        },
        {
          "name": "__Schema",
          "description": null
        },
        {
          "name": "__Type",
          "description": null
        },
        {
          "name": "__TypeKind",
          "description": null
        },
        {
          "name": "alembic_version",
          "description": "columns and relationships of \"alembic_version\""
        },
        {
          "name": "alembic_version_aggregate",
          "description": "aggregated selection of \"alembic_version\""
        },
        {
          "name": "alembic_version_aggregate_fields",
          "description": "aggregate fields of \"alembic_version\""
        },
        {
          "name": "alembic_version_bool_exp",
          "description": "Boolean expression to filter rows from the table \"alembic_version\". All fields are combined with a logical 'AND'."
        },
        {
          "name": "alembic_version_constraint",
          "description": "unique or primary key constraints on table \"alembic_version\""
        },
        {
          "name": "alembic_version_insert_input",
          "description": "input type for inserting data into table \"alembic_version\""
        },
        {
          "name": "alembic_version_max_fields",
          "description": "aggregate max on columns"
        },
        {
          "name": "alembic_version_min_fields",
          "description": "aggregate min on columns"
        },
        {
          "name": "alembic_version_mutation_response",
          "description": "response of any mutation on the table \"alembic_version\""
        },
        {
          "name": "alembic_version_on_conflict",
          "description": "on_conflict condition type for table \"alembic_version\""
        },
        {
          "name": "alembic_version_order_by",
          "description": "Ordering options when selecting data from \"alembic_version\"."
        },
        {
          "name": "alembic_version_pk_columns_input",
          "description": "primary key columns input for table: alembic_version"
        },
        {
          "name": "alembic_version_select_column",
          "description": "select columns of table \"alembic_version\""
        },
        {
          "name": "alembic_version_set_input",
          "description": "input type for updating data in table \"alembic_version\""
        },
        {
          "name": "alembic_version_stream_cursor_input",
          "description": "Streaming cursor of the table \"alembic_version\""
        },
        {
          "name": "alembic_version_stream_cursor_value_input",
          "description": "Initial value of the column from where the streaming should start"
        },
        {
          "name": "alembic_version_update_column",
          "description": "update columns of table \"alembic_version\""
        },
        {
          "name": "alembic_version_updates",
          "description": null
        },
        {
          "name": "cursor_ordering",
          "description": "ordering argument of a cursor"
        },
        {
          "name": "mutation_root",
          "description": "mutation root"
        },
        {
          "name": "numeric",
          "description": null
        },
        {
          "name": "numeric_comparison_exp",
          "description": "Boolean expression to compare columns of type \"numeric\". All fields are combined with logical 'AND'."
        },
        {
          "name": "order_by",
          "description": "column ordering options"
        },
        {
          "name": "query_root",
          "description": null
        },
        {
          "name": "smallint",
          "description": null
        },
        {
          "name": "smallint_comparison_exp",
          "description": "Boolean expression to compare columns of type \"smallint\". All fields are combined with logical 'AND'."
        },
        {
          "name": "subscription_root",
          "description": null
        },
        {
          "name": "xgraph_png_block",
          "description": "columns and relationships of \"xgraph_png.block\""
        },
        {
          "name": "xgraph_png_block_aggregate",
          "description": "aggregated selection of \"xgraph_png.block\""
        },
        {
          "name": "xgraph_png_block_aggregate_fields",
          "description": "aggregate fields of \"xgraph_png.block\""
        },
        {
          "name": "xgraph_png_block_avg_fields",
          "description": "aggregate avg on columns"
        },
        {
          "name": "xgraph_png_block_bool_exp",
          "description": "Boolean expression to filter rows from the table \"xgraph_png.block\". All fields are combined with a logical 'AND'."
        },
        {
          "name": "xgraph_png_block_constraint",
          "description": "unique or primary key constraints on table \"xgraph_png.block\""
        },
        {
          "name": "xgraph_png_block_inc_input",
          "description": "input type for incrementing numeric columns in table \"xgraph_png.block\""
        },
        {
          "name": "xgraph_png_block_insert_input",
          "description": "input type for inserting data into table \"xgraph_png.block\""
        },

... 
... 
... 

        {
          "name": "xgraph_psys_block",
          "description": "columns and relationships of \"xgraph_psys.block\""
        },
        {
          "name": "xgraph_psys_block_aggregate",
          "description": "aggregated selection of \"xgraph_psys.block\""
        },
        {
          "name": "xgraph_psys_block_aggregate_fields",
          "description": "aggregate fields of \"xgraph_psys.block\""
        },
        {
          "name": "xgraph_psys_block_avg_fields",
          "description": "aggregate avg on columns"
        },
... 
... 
... 
```

The Response Body of [the above query for all types and their
descriptions](/#all-types-and-their-descriptions) returns a *JSON* object listing all available database
types and their descriptions. See the XQuery Sample
Response Body at the right for an example. ---->

### All Available Queries And Their Descriptions
On the right is a command line example using `curl` to list *all*
available queries and their descriptions. ---->

> XQuery Sample Request - All Queries And Their Descriptions

<code class="api-call">All Queries And Their Descriptions</code>

```shell
# Example to display all queries and their descriptions
curl http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/indexer \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
	-d '{"query": "query MyQuery {__schema {queryType {fields {name description}}}}"}'
```


<br><br><br><br><br><br><br><br><br><br>

> XQuery Sample Response Body - All Queries And Their Descriptions

<aside class="success">
200 OK
</aside>

```json
{
  "data": {
    "__schema": {
      "queryType": {
        "fields": [
          {
            "name": "alembic_version",
            "description": "fetch data from the table: \"alembic_version\""
          },
          {
            "name": "alembic_version_aggregate",
            "description": "fetch aggregated fields from the table: \"alembic_version\""
          },
          {
            "name": "alembic_version_by_pk",
            "description": "fetch data from the table: \"alembic_version\" using primary key columns"
          },
          {
            "name": "xgraph_png_block",
            "description": "fetch data from the table: \"xgraph_png.block\""
          },
          {
            "name": "xgraph_png_block_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.block\""
          },
          {
            "name": "xgraph_png_block_by_pk",
            "description": "fetch data from the table: \"xgraph_png.block\" using primary key columns"
          },
          {
            "name": "xgraph_png_bundle",
            "description": "fetch data from the table: \"xgraph_png.bundle\""
          },
          {
            "name": "xgraph_png_bundle_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.bundle\""
          },
          {
            "name": "xgraph_png_bundle_by_pk",
            "description": "fetch data from the table: \"xgraph_png.bundle\" using primary key columns"
          },
          {
            "name": "xgraph_png_burn",
            "description": "fetch data from the table: \"xgraph_png.burn\""
          },
          {
            "name": "xgraph_png_burn_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.burn\""
          },
          {
            "name": "xgraph_png_burn_by_pk",
            "description": "fetch data from the table: \"xgraph_png.burn\" using primary key columns"
          },
          {
            "name": "xgraph_png_exchange_day_data",
            "description": "fetch data from the table: \"xgraph_png.exchange_day_data\""
          },
          {
            "name": "xgraph_png_exchange_day_data_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.exchange_day_data\""
          },
          {
            "name": "xgraph_png_exchange_day_data_by_pk",
            "description": "fetch data from the table: \"xgraph_png.exchange_day_data\" using primary key columns"
          },
          {
            "name": "xgraph_png_factory",
            "description": "fetch data from the table: \"xgraph_png.factory\""
          },
          {
            "name": "xgraph_png_factory_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.factory\""
          },
          {
            "name": "xgraph_png_factory_by_pk",
            "description": "fetch data from the table: \"xgraph_png.factory\" using primary key columns"
          },
          {
            "name": "xgraph_png_liquidity_position",
            "description": "fetch data from the table: \"xgraph_png.liquidity_position\""
          },
          {
            "name": "xgraph_png_liquidity_position_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.liquidity_position\""
          },
          {
            "name": "xgraph_png_liquidity_position_by_pk",
            "description": "fetch data from the table: \"xgraph_png.liquidity_position\" using primary key columns"
          },
          {
            "name": "xgraph_png_liquidity_position_snapshot",
            "description": "fetch data from the table: \"xgraph_png.liquidity_position_snapshot\""
          },
          {
            "name": "xgraph_png_liquidity_position_snapshot_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.liquidity_position_snapshot\""
          },
          {
            "name": "xgraph_png_liquidity_position_snapshot_by_pk",
            "description": "fetch data from the table: \"xgraph_png.liquidity_position_snapshot\" using primary key columns"
          },
          {
            "name": "xgraph_png_mint",
            "description": "fetch data from the table: \"xgraph_png.mint\""
          },
          {
            "name": "xgraph_png_mint_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.mint\""
          },
          {
            "name": "xgraph_png_mint_by_pk",
            "description": "fetch data from the table: \"xgraph_png.mint\" using primary key columns"
          },
          {
            "name": "xgraph_png_pair",
            "description": "fetch data from the table: \"xgraph_png.pair\""
          },
          {
            "name": "xgraph_png_pair_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.pair\""
          },
          {
            "name": "xgraph_png_pair_by_pk",
            "description": "fetch data from the table: \"xgraph_png.pair\" using primary key columns"
          },
          {
            "name": "xgraph_png_pair_day_data",
            "description": "fetch data from the table: \"xgraph_png.pair_day_data\""
          },
          {
            "name": "xgraph_png_pair_day_data_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.pair_day_data\""
          },
          {
            "name": "xgraph_png_pair_day_data_by_pk",
            "description": "fetch data from the table: \"xgraph_png.pair_day_data\" using primary key columns"
          },
          {
            "name": "xgraph_png_pair_hour_data",
            "description": "fetch data from the table: \"xgraph_png.pair_hour_data\""
          },
          {
            "name": "xgraph_png_pair_hour_data_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.pair_hour_data\""
          },
          {
            "name": "xgraph_png_pair_hour_data_by_pk",
            "description": "fetch data from the table: \"xgraph_png.pair_hour_data\" using primary key columns"
          },
          {
            "name": "xgraph_png_state",
            "description": "fetch data from the table: \"xgraph_png.state\""
          },
          {
            "name": "xgraph_png_state_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.state\""
          },
          {
            "name": "xgraph_png_state_by_pk",
            "description": "fetch data from the table: \"xgraph_png.state\" using primary key columns"
          },
          {
            "name": "xgraph_png_swap",
            "description": "fetch data from the table: \"xgraph_png.swap\""
          },
          {
            "name": "xgraph_png_swap_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.swap\""
          },
          {
            "name": "xgraph_png_swap_by_pk",
            "description": "fetch data from the table: \"xgraph_png.swap\" using primary key columns"
          },
          {
            "name": "xgraph_png_sync",
            "description": "fetch data from the table: \"xgraph_png.sync\""
          },
          {
            "name": "xgraph_png_sync_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.sync\""
          },
          {
            "name": "xgraph_png_sync_by_pk",
            "description": "fetch data from the table: \"xgraph_png.sync\" using primary key columns"
          },
          {
            "name": "xgraph_png_token",
            "description": "fetch data from the table: \"xgraph_png.token\""
          },
          {
            "name": "xgraph_png_token_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.token\""
          },
          {
            "name": "xgraph_png_token_by_pk",
            "description": "fetch data from the table: \"xgraph_png.token\" using primary key columns"
          },
          {
            "name": "xgraph_png_token_day_data",
            "description": "fetch data from the table: \"xgraph_png.token_day_data\""
          },
          {
            "name": "xgraph_png_token_day_data_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.token_day_data\""
          },
          {
            "name": "xgraph_png_token_day_data_by_pk",
            "description": "fetch data from the table: \"xgraph_png.token_day_data\" using primary key columns"
          },
          {
            "name": "xgraph_png_token_hour_data",
            "description": "fetch data from the table: \"xgraph_png.token_hour_data\""
          },
          {
            "name": "xgraph_png_token_hour_data_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.token_hour_data\""
          },
          {
            "name": "xgraph_png_token_hour_data_by_pk",
            "description": "fetch data from the table: \"xgraph_png.token_hour_data\" using primary key columns"
          },
          {
            "name": "xgraph_png_transaction",
            "description": "fetch data from the table: \"xgraph_png.transaction\""
          },
          {
            "name": "xgraph_png_transaction_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.transaction\""
          },
          {
            "name": "xgraph_png_transaction_by_pk",
            "description": "fetch data from the table: \"xgraph_png.transaction\" using primary key columns"
          },
          {
            "name": "xgraph_png_transfer",
            "description": "fetch data from the table: \"xgraph_png.transfer\""
          },
          {
            "name": "xgraph_png_transfer_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.transfer\""
          },
          {
            "name": "xgraph_png_transfer_by_pk",
            "description": "fetch data from the table: \"xgraph_png.transfer\" using primary key columns"
          },
          {
            "name": "xgraph_png_user",
            "description": "fetch data from the table: \"xgraph_png.user\""
          },
          {
            "name": "xgraph_png_user_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_png.user\""
          },
          {
            "name": "xgraph_png_user_by_pk",
            "description": "fetch data from the table: \"xgraph_png.user\" using primary key columns"
          },
          {
            "name": "xgraph_psys_block",
            "description": "fetch data from the table: \"xgraph_psys.block\""
          },
          {
            "name": "xgraph_psys_block_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.block\""
          },
          {
            "name": "xgraph_psys_block_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.block\" using primary key columns"
          },
          {
            "name": "xgraph_psys_bundle",
            "description": "fetch data from the table: \"xgraph_psys.bundle\""
          },
          {
            "name": "xgraph_psys_bundle_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.bundle\""
          },
          {
            "name": "xgraph_psys_bundle_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.bundle\" using primary key columns"
          },
          {
            "name": "xgraph_psys_burn",
            "description": "fetch data from the table: \"xgraph_psys.burn\""
          },
          {
            "name": "xgraph_psys_burn_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.burn\""
          },
          {
            "name": "xgraph_psys_burn_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.burn\" using primary key columns"
          },
          {
            "name": "xgraph_psys_exchange_day_data",
            "description": "fetch data from the table: \"xgraph_psys.exchange_day_data\""
          },
          {
            "name": "xgraph_psys_exchange_day_data_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.exchange_day_data\""
          },
          {
            "name": "xgraph_psys_exchange_day_data_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.exchange_day_data\" using primary key columns"
          },
          {
            "name": "xgraph_psys_factory",
            "description": "fetch data from the table: \"xgraph_psys.factory\""
          },
          {
            "name": "xgraph_psys_factory_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.factory\""
          },
          {
            "name": "xgraph_psys_factory_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.factory\" using primary key columns"
          },
          {
            "name": "xgraph_psys_liquidity_position",
            "description": "fetch data from the table: \"xgraph_psys.liquidity_position\""
          },
          {
            "name": "xgraph_psys_liquidity_position_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.liquidity_position\""
          },
          {
            "name": "xgraph_psys_liquidity_position_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.liquidity_position\" using primary key columns"
          },
          {
            "name": "xgraph_psys_liquidity_position_snapshot",
            "description": "fetch data from the table: \"xgraph_psys.liquidity_position_snapshot\""
          },
          {
            "name": "xgraph_psys_liquidity_position_snapshot_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.liquidity_position_snapshot\""
          },
          {
            "name": "xgraph_psys_liquidity_position_snapshot_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.liquidity_position_snapshot\" using primary key columns"
          },
          {
            "name": "xgraph_psys_mint",
            "description": "fetch data from the table: \"xgraph_psys.mint\""
          },
          {
            "name": "xgraph_psys_mint_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.mint\""
          },
          {
            "name": "xgraph_psys_mint_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.mint\" using primary key columns"
          },
          {
            "name": "xgraph_psys_pair",
            "description": "fetch data from the table: \"xgraph_psys.pair\""
          },
          {
            "name": "xgraph_psys_pair_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.pair\""
          },
          {
            "name": "xgraph_psys_pair_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.pair\" using primary key columns"
          },
          {
            "name": "xgraph_psys_pair_day_data",
            "description": "fetch data from the table: \"xgraph_psys.pair_day_data\""
          },
          {
            "name": "xgraph_psys_pair_day_data_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.pair_day_data\""
          },
          {
            "name": "xgraph_psys_pair_day_data_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.pair_day_data\" using primary key columns"
          },
          {
            "name": "xgraph_psys_pair_hour_data",
            "description": "fetch data from the table: \"xgraph_psys.pair_hour_data\""
          },
          {
            "name": "xgraph_psys_pair_hour_data_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.pair_hour_data\""
          },
          {
            "name": "xgraph_psys_pair_hour_data_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.pair_hour_data\" using primary key columns"
          },
          {
            "name": "xgraph_psys_state",
            "description": "fetch data from the table: \"xgraph_psys.state\""
          },
          {
            "name": "xgraph_psys_state_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.state\""
          },
          {
            "name": "xgraph_psys_state_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.state\" using primary key columns"
          },
          {
            "name": "xgraph_psys_swap",
            "description": "fetch data from the table: \"xgraph_psys.swap\""
          },
          {
            "name": "xgraph_psys_swap_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.swap\""
          },
          {
            "name": "xgraph_psys_swap_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.swap\" using primary key columns"
          },
          {
            "name": "xgraph_psys_sync",
            "description": "fetch data from the table: \"xgraph_psys.sync\""
          },
          {
            "name": "xgraph_psys_sync_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.sync\""
          },
          {
            "name": "xgraph_psys_sync_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.sync\" using primary key columns"
          },
          {
            "name": "xgraph_psys_token",
            "description": "fetch data from the table: \"xgraph_psys.token\""
          },
          {
            "name": "xgraph_psys_token_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.token\""
          },
          {
            "name": "xgraph_psys_token_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.token\" using primary key columns"
          },
          {
            "name": "xgraph_psys_token_day_data",
            "description": "fetch data from the table: \"xgraph_psys.token_day_data\""
          },
          {
            "name": "xgraph_psys_token_day_data_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.token_day_data\""
          },
          {
            "name": "xgraph_psys_token_day_data_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.token_day_data\" using primary key columns"
          },
          {
            "name": "xgraph_psys_token_hour_data",
            "description": "fetch data from the table: \"xgraph_psys.token_hour_data\""
          },
          {
            "name": "xgraph_psys_token_hour_data_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.token_hour_data\""
          },
          {
            "name": "xgraph_psys_token_hour_data_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.token_hour_data\" using primary key columns"
          },
          {
            "name": "xgraph_psys_transaction",
            "description": "fetch data from the table: \"xgraph_psys.transaction\""
          },
          {
            "name": "xgraph_psys_transaction_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.transaction\""
          },
          {
            "name": "xgraph_psys_transaction_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.transaction\" using primary key columns"
          },
          {
            "name": "xgraph_psys_transfer",
            "description": "fetch data from the table: \"xgraph_psys.transfer\""
          },
          {
            "name": "xgraph_psys_transfer_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.transfer\""
          },
          {
            "name": "xgraph_psys_transfer_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.transfer\" using primary key columns"
          },
          {
            "name": "xgraph_psys_user",
            "description": "fetch data from the table: \"xgraph_psys.user\""
          },
          {
            "name": "xgraph_psys_user_aggregate",
            "description": "fetch aggregated fields from the table: \"xgraph_psys.user\""
          },
          {
            "name": "xgraph_psys_user_by_pk",
            "description": "fetch data from the table: \"xgraph_psys.user\" using primary key columns"
          }
        ]
      }
    }
  }
}
```
The Response Body of the [query for all available queries and their
descriptions](/#all-available-queries-and-their-descriptions) returns a *JSON* object listing all available database queries and their descriptions. See the XQuery Sample
Response Body at the right for an example. ---->

### Digging Deeper Into The Schema

One of the available queries returned by the [above
query](#all-available-queries-and-their-descriptions) is
*xgraph_psys_state*. If, for example, an XQuery client wants to learn
what kind of query *xgraph_psys_state* is, they can issue the query on the
right to find out if *xgraph_psys_state* is an *INTERFACE* or an *OBJECT* ---->

> XQuery Sample Request - Dig Into *xgraph_psys_state*

<code class="api-call">Dig Into *xgraph_psys_state*</code>

```shell
# Example to dig into xgraph_psys_state
curl http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/indexer \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
	-d '{"query": "query MyQuery {__type(name: \"xgraph_psys_state\") {name kind}}"}'
```

<br><br><br><br><br><br><br><br><br><br>

> XQuery Sample Response Body - Dig Into *xgraph_psys_state*

<aside class="success">
200 OK
</aside>

```json
{
  "data": {
    "__type": {
      "name": "xgraph_psys_state",
      "kind": "OBJECT"
    }
  }
}
```
The Response Body of [the above query to dig Into
*xgraph_psys_state*](/#digging-deeper-into-the-schema) returns a
*JSON* object informing us that *xgraph_psys_state* is an *OBJECT*,
not an *INTERFACE*. See the XQuery Sample
Response Body at the right. ---->

### Query For Which Fields Are In xgraph_psys_state Object

From the [above query](/#digging-deeper-into-the-schema), we learned
that *xgraph_psys_state*  is a db *OBJECT*. For a db *OBJECT*,  it's
often useful to know which fields the object contains. To learn the
names and types of the fields conained in the *xgraph_psys_state* object, one can issue the query on the
right. ---->

> XQuery Sample Request - Which Fields Are In *xgraph_psys_state* object

<code class="api-call">Which Fields Are In *xgraph_psys_state* object</code>

```shell
# Example to learn the names and types of the fields conained in the *xgraph_psys_state* object
curl http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/indexer \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
	-d '{"query": "query MyQuery {__type(name: \"xgraph_psys_state\") {name fields {name type {name kind}}}}"}'
```

<br><br><br><br><br><br><br><br><br><br>

> XQuery Sample Response Body - Which Fields Are In *xgraph_psys_state* object

<aside class="success">
200 OK
</aside>

```json
{
  "data": {
    "__type": {
      "name": "xgraph_psys_state",
      "fields": [
        {
          "name": "block_hash",
          "type": {
            "name": "String",
            "kind": "SCALAR"
          }
        },
        {
          "name": "block_number",
          "type": {
            "name": "Int",
            "kind": "SCALAR"
          }
        },
        {
          "name": "finalized",
          "type": {
            "name": "Int",
            "kind": "SCALAR"
          }
        },
        {
          "name": "id",
          "type": {
            "name": null,
            "kind": "NON_NULL"
          }
        },
        {
          "name": "name",
          "type": {
            "name": null,
            "kind": "NON_NULL"
          }
        }
      ]
    }
  }
}
```
The Response Body of [the above query for the fields
contained in the *xgraph_psys_state* object](/#query-for-which-fields-are-in-xgraph_psys_state-object) returns a
*JSON* object listing all fields contained in the *xgraph_psys_state*
object and their types. See the XQuery Sample
Response Body at the right. ---->


## Query For Data

In the [above section on Introspection
queries](/#introspection-database-schema-queries) we showed examples of how to
make queries to the database which return information about the schema/structure of
the database. In this section, we'll show some examples of
queries which return actual data from the database. For full documentation on what kinds of query structures are available, see [Hasura Postgres Queries Documentation](https://hasura.io/docs/latest/queries/postgres/index/). 

### Query All Fields In xgraph_psys_state Object

From the [the above query for the fields
contained in the *xgraph_psys_state*
object](/#query-for-which-fields-are-in-xgraph_psys_state-object), we
learned that the *xgraph_psys_state* object contains the following fields:

- block_hash
- block_number
- finalized
- id
- name

To query for the values of these fields in the *xgraph_psys_state* object, one can issue the query on the
right. ---->

> XQuery Sample Request - Query All Fields In xgraph_psys_state Object

<code class="api-call">Query All Fields In xgraph_psys_state Object</code>

```shell
# Example query all fields in xgraph_psys_state object
curl http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/indexer \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
	-d '{"query": "query MyQuery {xgraph_psys_state {block_hash block_number finalized id name}}"}'
```

<br><br><br><br><br><br><br><br><br><br>

> XQuery Sample Response Body - Query All Fields In xgraph_psys_state Object

<aside class="success">
200 OK
</aside>

```json
{
  "data": {
    "xgraph_psys_state": [
      {
        "block_hash": "0x07ccb7399488e430f9f5ba1ed7a848a2e9306ad08a62a19ab472b4ad00294c78",
        "block_number": 222388,
        "finalized": null,
        "id": 1,
        "name": "indexer"
      },
      {
        "block_hash": null,
        "block_number": 222388,
        "finalized": 222388,
        "id": 2,
        "name": "processor_bundle"
      },
      {
        "block_hash": null,
        "block_number": 222388,
        "finalized": 1672617599,
        "id": 3,
        "name": "processor_stats"
      },
      {
        "block_hash": null,
        "block_number": 222388,
        "finalized": 222388,
        "id": 4,
        "name": "processor_count"
      }
    ]
  }
}
```
The Response Body of [the above query of all fields in
the *xgraph_psys_state* object](/#query-all-fields-in-xgraph_psys_state-object) returns a
*JSON* object listing the data values of all fields in the *xgraph_psys_state*
object. See the XQuery Sample
Response Body at the right. ---->

### Query With Conditions All Fields In xgraph_psys_state Object

In practice, almost all queries to the database will have conditions
attached to them. For example, let's say we want to query the
values of all the fields in the *xgraph_psys_state* object, just as we
did in the [previous
example](/#query-all-fields-in-xgraph_psys_state-object), but this
time we want to impose the
conditions that data should *only* be returned for records with
*block_number* greater than 20000, and the records returned should be
ordered by an ascending *id* field, and no more than 5 records
should be returned. An example of such a query can be found on the
right. ---->

> XQuery Sample Request - Query With Conditions All Fields In xgraph_psys_state Object

<code class="api-call">Query With Conditions All Fields In xgraph_psys_state Object</code>

```shell
# Example query with conditions all fields in xgraph_psys_state object
curl http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/indexer \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
	-d '{"query": "query MyQuery {xgraph_psys_state(where: {block_number: {_gt: 20000}}, order_by: {id: asc}, limit: 5) {block_hash block_number finalized id name}}"}'
```
<br><br><br><br>
The conditions we added to the query from the [previous
example](/#query-all-fields-in-xgraph_psys_state-object) don't change
the results returned in this case, so we won't include those results again
here. The point of this example of a query with conditions is simply
to show how to impose conditions on query results. For full documentation on what kinds of query structures are available, see [Hasura Postgres Queries Documentation](https://hasura.io/docs/latest/queries/postgres/index/).

### Query For 3 Largest WAVAX-USDC Token Swaps On Pangolin Exchange
The last "Query for Data" example we'll give will be for the 3 largest
WAVAX-USDC token swaps on Pangolin exchange. To make this
query, we need the address of the WAVAX-USDC pair. That address can be
found in various ways, including
[here](https://info.pangolin.exchange/#/pair/0x0e0100ab771e9288e0aa97e11557e6654c3a9665). The
address of the WAVAX-USDC pair turns out to be
`0x0e0100ab771e9288e0aa97e11557e6654c3a9665`. With this information,
we can construct the desired query as shown on the right ---->

> XQuery Sample Request - 3 Largest WAVAX-USDC swaps On Pangolin Exchange

<code class="api-call">3 Largest WAVAX-USDC swaps On Pangolin Exchange</code>

```shell
# Query For 3 Largest WAVAX-USDC swaps On Pangolin Exchange
curl http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/indexer \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Api-Key: <API-KEY>" \
    -d '{"query": "query MyQuery {xgraph_png_swap(limit: 3, order_by: {amount0Out: desc}, where: {pair_address: {_eq: \"0x0e0100Ab771E9288e0Aa97e11557E6654C3a9665\"}}) {amount0In amount0Out amount1In amount1Out amountUSD from id logIndex pair_address sender timestamp to transaction_id}}"}' | jq
```

> XQuery Sample Response - 3 Largest WAVAX-USDC swaps On Pangolin Exchange

```json
{
  "data": {
    "xgraph_png_swap": [
      {
        "amount0In": "0.000000000000000000",
        "amount0Out": "9944.474506932517295371",
        "amount1In": "177726.378634000000000000",
        "amount1Out": "0.000000000000000000",
        "amountUSD": "0.000000000000000000",
        "from": "0x7770000004323b56D6231592F753BD48d7E523e5",
        "id": 9325680,
        "logIndex": 31,
        "pair_address": "0x0e0100Ab771E9288e0Aa97e11557E6654C3a9665",
        "sender": "0x777739FFFd50000000D9dc09b4D0fd3410e41Ce6",
        "timestamp": 1667882468,
        "to": "0x777739FFFd50000000D9dc09b4D0fd3410e41Ce6",
        "transaction_id": 8643121
      },
      {
        "amount0In": "0.000000000000000000",
        "amount0Out": "6585.806037327803264065",
        "amount1In": "125205.756988000000000000",
        "amount1Out": "0.000000000000000000",
        "amountUSD": "0.000000000000000000",
        "from": "0xB8E6961C316144266C948A016bB5a07E4D5c561b",
        "id": 8958146,
        "logIndex": 284,
        "pair_address": "0x0e0100Ab771E9288e0Aa97e11557E6654C3a9665",
        "sender": "0x324E2D39f0E2d8ecCDd96bcaa382cd14eD4a0443",
        "timestamp": 1663088884,
        "to": "0x98708236eF98A579f923279Da9531796c646376d",
        "transaction_id": 8319724
      },
      {
        "amount0In": "0.000000000000000000",
        "amount0Out": "5565.206433513149862722",
        "amount1In": "76847.457887000000000000",
        "amount1Out": "0.000000000000000000",
        "amountUSD": "0.000000000000000000",
        "from": "0x4F7D9eBe792cb4F4729dE9328A8889c1E49B37B0",
        "id": 9590362,
        "logIndex": 9,
        "pair_address": "0x0e0100Ab771E9288e0Aa97e11557E6654C3a9665",
        "sender": "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        "timestamp": 1670656399,
        "to": "0xe3bA3d5e3F98eefF5e9EDdD5Bd20E476202770da",
        "transaction_id": 8878384
      }
    ]
  }
}
```
<br><br><br><br><br><br><br>

<aside class="success">
200 OK
</aside>

The Response Body of [the above query for 3 largest WAVAX-USDC token swaps on Pangolin Exchange](/#query-for-3-largest-wavax-usdc-token-swaps-on-pangolin-exchange) returns a
*JSON* object listing the data values of all fields in the
*xgraph_png_swap* object for the top 3 records that match our query criteria. See the XQuery Sample
Response Body at the right. ---->
<br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br>

## XQuery Python Example: xq.py (upgrade to XQuery v2 coming soon)
On the right is a list of commands that can be issued in a
Linux/Unix/OSX Terminal to download  a python script called `xq.py`
and run it. Please ensure `git`, `python3` and `pip3` are installed on
your system before issuing these commands. The last command given on
the right will print the `xq.py` *help* message, which gives full
details about which parameters it accepts.

> XQuery indexer endpoint python example: xq.py

<code class="api-call">indexer python example: xq.py</code>

```shell
# Issue the following commands to download xq.py, install
# necessary python support libs, and print the xq.py "help" message.
git clone https://github.com/blocknetdx/exrproxy-env
cd exrproxy-env
pip3 install -r requirements.txt
cd cli
./xq.py --help 
```

`xq.py` provides a convenient,
user-friendly CLI interface to the same *indexer* endpoint mentioned
in the [Query for Data examples](#query-for-data) above. It constructs a
GraphQL query for the *indexer* endpoint according to parameters passed
to it, then sends the GraphQL query to the *indexer* endpoint (`
http://<NODE-URL>/xrs/xquery/<PROJECT-ID>/indexer`). Snippets from
`xq.py` can be used by any python dApp developer wishing to include
code to access XQuery indexer. Snippets from
`xq.py` can also be easily translated into other languages by 
such developers writing dApps in languages other than python.

> Example queries to the indexer endpoint using xq.py

```shell
# In the following examples, replace <PROJECT-ID> and <API-KEY> with
#  the values obtained when your project was created.

# Get help on xq.py options
./xq.py --help 

# Query the indexer endpoint on host 194.163.144.68 for the 2 most
# recent swap transactions involving USDC and USDT
./xq.py --xqpair USDC/USDT --xqlimit 2 --host 194.163.144.68 --projectid <PROJECT-ID> --apikey <API-KEY>

# Query the indexer endpoint on host 194.163.144.68 for the 2 most
# recent swap transactions involving USDC and SYS,
# restricting results to those found on the Pegasys router 
./xq.py --xqpair USDC/SYS --xqlimit 2 --xqrouter Pegasys --host 194.163.144.68 --projectid <PROJECT-ID> --apikey <API-KEY>

# Query the indexer endpoint on host 194.163.144.68 for the 10 most
# recent transactions of any kind on the Uniswap router
./xq.py --xqlimit 10 --xqrouter Uniswap --host 194.163.144.68 --projectid <PROJECT-ID> --apikey <API-KEY>

# Query the indexer endpoint on host 194.163.144.68 for the 5 most
# recent transactions on any router where the Transaction ID
# equals 0x085fdb85ddb6db6d8508ec1ebead2f4c3f619dac47d3c31c2a0d9b91b9f8f037
./xq.py --xqlimit 5 --xqtx 0x085fdb85ddb6db6d8508ec1ebead2f4c3f619dac47d3c31c2a0d9b91b9f8f037 --host 194.163.144.68 --projectid <PROJECT-ID> --apikey <API-KEY>
```

## XQuery Hasura GUI Console

If the `<NODE-URL>` to which you're making queries has [enabled access
to XQuery Hasura GUI
Console](https://docs.blocknet.org/service-nodes/setup/#warning-only-expose-hasura-gui-xquery-port-to-restricted-hosts-if-ever),
you can access the XQuery Hasura GUI Console simply by navigating in a
browser to __http://`<NODE-URL>`:8080/console__

For full documentation on what kinds of query structures are available, see [Hasura Postgres Queries Documentation](https://hasura.io/docs/latest/queries/postgres/index/).
