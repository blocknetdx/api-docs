# Changelog

This API documentation will be continuously updated to improve descriptions, instructions, and overall clarity on how to use the API and begin building on the Blocknet Protocol. An overview of changes can be viewed below. For a more detailed view of changes, [see the site's Github repository](https://github.com/blocknetdx/api-docs).

To receive notifications and stay informed on important developer updates and changes relating to the Blocknet Protocol, subscribe to the [developer notification emailing list](http://eepurl.com/dDjhYH).

<br>

__Updates__


<!-- 

To do:
- CLI commands
- Wallet `help` commands
- Add description of how peers and snodes interact on the network
- Added updated config setup instructions
- Link to trading bots
- Make sure error codes are correct

reference: https://docs.pro.coinbase.com

-->

5/9/2019	|
------------|
* Updated Gihub links from `/BlocknetDX` to `/blocknetdx`
* Updated Blocknet repo links from `/BlockDX` to `/blocknet`


4/18/2019	|
------------|
* Updated [XRouter setup](#xrouter-setup) instructions
* Updated [XBridge setup](#xbridge-setup) instructions
* Added [XCloud setup](#xcloud-setup) instructions
* Updated [XBridge API](#xbridge-api) descriptions
* Updated [XRouter API](#xrouter-api) for beta release
* Added [XCloud API](#xcloud-api) for beta release
* Updated XBridge confirmations info for clarifications
* Updated XRouter intro to include node scoring information
* Added XCloud introduction


3/5/2019	|
------------|
* Update links to Github to reflect change in repository names
* Updated link to [compatible blockchains](https://docs.blocknet.co/protocol/xbridge/compatibility/#supported-digital-assets)
* Updated XRouter [confirmations] to [node_count]
* Updated XRouter [block] to [block_number]
* Updated language from `token` to `asset` 



12/7/2018	|
------------|
* Updated Introduction Service Node description
* Updated 'coin' verbiage to 'token'
* Updated description of how XBridge orderbooks are decentralized
* Updated order statuses for [dxMakeOrder](#dxmakeorder), [dxCancelOrder](#dxcancelorder), [dxGetOrder](#dxgetorder), [dxGetOrders](#dxgetorders), [dxGetMyOrders](#dxgetmyorders) to remove `signed`, include `initiated`, and improve `hold` description
* Updated XBridge [Error Codes](#error-codes)
* Updated sample 400 response for [dxGetOrders](#dxgetorders), [dxGetMyOrders](#dxgetmyorders), [dxGetOrderFills](#dxgetorderfills), [dxGetOrderHistory](#dxgetorderhistory)
* Updated [dxTakeOrder](#dxtakeorder), [dxGetOrders](#dxgetorders), [dxGetMyOrders](#dxgetmyorders), and [dxGetOrderBook](#dxgetorderbook) description for improved clarity
* Updated [dxGetOrderFills](#dxgetordefills) sample response to not include `maker_txid`, `taker_txid`, and `block_id`
* Updated [dxGetOrderHistory](#dxgetorderhistory) parameters and removed 'not yet supported' comment
* Updated [dxGetNetworkTokens](#dxgetnetworktokens) to remove 'not yet supported' comment
* Updated [dxGetTokenBalances](#dxgettokenbalances) description to clarify it returns *available* balances
* Updated [dxGetOrderBook](#dxgetorderbook) `max_orders` description and sample responses with better examples
* Consolidated [order status codes](#status-codes) to a single location
* Updated [Status Codes](#status-codes) to include `rolled back` and `rollback failed`
* Added [dxLoadXBridgeConf](#dxloadxbridgeconf) call
* Added historic versioning, which can be viewed next to each changelog date
* Corrected XRouter `confirmations` data type from 'string' to 'int'

8/31/2018	|
------------|
* Updated XBridge design details and diagrams to reflect fee switch from maker to taker
* Updated mentions of XBridge from 0.005 BLOCK to 0.015 BLOCK
* Added reference for atomic swap type in XBridge introduction

8/21/2018	|
------------|
* Added information on the design of XBridge and XRouter
* Added hyperlink to site branding leading to the site root

8/10/2018	|
------------|
* Added additonal information on the Blocknet Protocol, XBridge, and XRouter
* Added information on configuration and setup needed to use the API
* Moved Error Codes to under the XBridge API category
* Updated the [xrGetBalanceUpdate](#xrgetbalanceupdate) description for better clarity 
* Updated [xrGetBalance](#xrgetbalance), [dxGetOrderHistory](#getorderhistory), and [dxGetNetworkTokens](#getnetworktokens) descriptions to reflect the level of support
* Updated XBridge order statuses and added explanations
* Added a changelog
* Added developer newsletter link in changelog and sidebar 
* Updated sidebar links
* Updated design

8/3/2018	|
------------|
* Added documentation for XRouter CLI API calls

6/4/2018	|
------------|
* API documentation went live
* Includes documentation for XBridge CLI API calls







<br>
<br>
<br>
<br>
<br>
<br>
<br>