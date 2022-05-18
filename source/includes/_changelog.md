# Changelog

This API documentation will be continuously updated to improve descriptions, instructions, and overall clarity on how to use the API and begin building on the Blocknet Protocol. An overview of changes can be viewed below. For a more detailed view of changes, [see the site's Github repository](https://github.com/blocknetdx/api-docs).

To receive notifications and stay informed on important developer updates and changes relating to the Blocknet Protocol, subscribe to the [developer notification emailing list](http://eepurl.com/c5OJMj).

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

18/05/2022 |
-----------|
• Major updates to Hydra API |
• Added Projects API section |
• Added XQuery API section |
• Misc aesthetic improvements |

16/04/2022 |
-----------|
• Major updates to hydra section |

14/01/2021 |
-----------|
• Minor typos and editing in intro and hydra section |


13/01/2021 |
-----------|
• Added Error Responses to Hydra API section |
• Fixed favicon |
• Removed hydra eth subscription |

10/01/2021 |
------------|
• Added [Hydra Introduction](#hydra) |
• Added [Hydra Getting Started](#hydra-setup) |
• Added [Hydra API Docs](#hydra-api) |

7/25/2020   |
------------|
• Wallet v4.3.1 release |
• Updated [dxCancelOrder](#dxcancelorder) description to note when you can't cancel orders |


7/20/2020   |
------------|
• Wallet v4.3.x release |
• Added [dxMakePartialOrder](#dxmakepartialorder) call |
• Added [dxGetUtxos](#dxgetutxos) call |
• Added [dxSplitAddress](#dxsplitaddress) call |
• Added [dxSplitInputs](#dxsplitinputs) call |
• Added [xrUpdateNetworkServices](#xrupdatenetworkservices) call |
• Added [servicenodelist](#servicenodelist-web) web endpoint |
• Updated [xrConnect](#xrconnect) description to note it's no longer required |
• Updated [dxMakeOrder](#dxmakeorder) response details |
• Updated [dxTakeOrder](#dxtakeorder) response details |
• Updated [servicenodelist](#servicenodelist) core response details |
• Updated [dxGetOrders](#dxgetorders) response details |
• Updated [dxGetOrder](#dxgetorder) response details |
• Updated [dxGetMyOrders](#dxgetmyorders) response details |
• Updated [xrGetReply](#xrgetreply) response to include `all_replies` |
• Updated all XRouter call responses to remove `all_replies` (added to [xrGetReply](#xrgetreply)) |


5/11/2020   |
------------|
• Wallet v4.2.x release |
• Added [dxgetorders](#dxgetorders-web) web endpoint |
• Added [XRouter Service Explorer](https://service-explorer.core.cloudchainsinc.com/#/) link |
• Added [C++ library guide](https://github.com/blocknetdx/libxrouter-sampleproj-cpp) link |
• Added `tls` setting to `xrouter.conf` setup |
• Added `dxnowallets` and `ShowAllOrders` setting to the [XBridge Setup](#xbridge-setup) |
• Updated [dxGetTradingData](#dxgettradingdata) response details |


4/20/2020   |
------------|
• Wallet v4.1.x release |
• Added `status` to [listproposals](#listproposals) response details |


2/7/2020    |
------------|
• Wallet v4.0.x release |
• Added [dxFlushCancelledOrders](#dxflushcancelledorders) call |
• Added [dxGetTradingData](#dxgettradingdata) call |
• Removed `gettradingdata` call, in progress towards being deprecated |
• Updated `blocknetdx.conf` references to `blocknet.conf` |
• Updated `blocknetdx-cli` references to `blocknet-cli` |
• Remove `xrUpdateConfigs` call, replaced by `servicenodesendping` |
• Remove `xrouter=1` from XRouter setup |
• Added selective [Core API](#core-api) calls |


11/26/2019  |
------------|
• Wallet v3.14.1 release |
• Added [dxGetNewTokenAddress](#dxgetnewtokenaddress) call |
• Updated [XBridge Setup](#xbridge-setup) to note that Segwit/Bech32 address and p2pk inputs are not yet compatible |
• Updated [dxMakeOrder](#dxmakeorder) and [dxTakeOrder](#dxtakeorder) to note usage of funds are not restricted to the speficied address |
• Corrected [xrGetBlocks](#xrgetblocks) and [xrGetTransactions](#xrgettransactions) to include quotes in the string array |
• Updated XBridge order IDs in examples to be representative of real IDs |


8/2/2019    |
------------|
• Updated the [xrConnect](#xrconnect) output to include the added `fetchlimit` and timeout settings with the returned configs |
• Updated the [ticker (1.0)](#ticker-2-0) call output to include `lastprice` and `timestamp` |
• Added clarification [ticker (1.0)](#ticker-2-0) description on inverse market data inclusion |


7/12/2019   |
------------|
• Updated [XBridge Setup](#xbridge-setup) to reference the guide in the [documentation portal](https://docs.blocknet.co/protocol/xbridge/setup) |
• Added [ticker (2.0)](#ticker-2-0) call |


7/5/2019    |
------------|
• Added [gettradingdata](#gettradingdata) call |
• Added [Web API](#web-api) section and calls |


5/9/2019    |
------------|
• Updated Github links from `/BlocknetDX` to `/blocknetdx` |
• Updated Blocknet repo links from `/BlockDX` to `/blocknet` |


4/18/2019   |
------------|
• Updated [XRouter setup](#xrouter-setup) instructions |
• Updated [XBridge setup](#xbridge-setup) instructions |
• Added [XCloud setup](#xcloud-setup) instructions |
• Updated [XBridge API](#xbridge-api) descriptions |
• Updated [XRouter API](#xrouter-api) for beta release |
• Added [XCloud API](#xcloud-api) for beta release |
• Updated XBridge confirmations info for clarifications |
• Updated XRouter intro to include node scoring information |
• Added XCloud introduction |


3/5/2019    |
------------|
• Updated links to Github to reflect change in repository names |
• Updated link to [compatible blockchains](https://docs.blocknet.co/protocol/xbridge/compatibility/#supported-digital-assets) |
• Updated XRouter [confirmations] to [node_count] |
• Updated XRouter [block] to [block_number] |
• Updated language from `token` to `asset`  |


12/7/2018   |
------------|
• Updated Introduction Service Node description |
• Updated 'coin' verbiage to 'token' |
• Updated description of how XBridge orderbooks are decentralized |
• Updated order statuses for [dxMakeOrder](#dxmakeorder), [dxCancelOrder](#dxcancelorder), [dxGetOrder](#dxgetorder), [dxGetOrders](#dxgetorders), [dxGetMyOrders](#dxgetmyorders) to remove `signed`, include `initiated`, and improve `hold` description |
• Updated XBridge [Error Codes](#error-codes) |
• Updated sample 400 response for [dxGetOrders](#dxgetorders), [dxGetMyOrders](#dxgetmyorders), [dxGetOrderFills](#dxgetorderfills), [dxGetOrderHistory](#dxgetorderhistory) |
• Updated [dxTakeOrder](#dxtakeorder), [dxGetOrders](#dxgetorders), [dxGetMyOrders](#dxgetmyorders), and [dxGetOrderBook](#dxgetorderbook) description for improved clarity |
• Updated [dxGetOrderFills](#dxgetordefills) sample response to not include `maker_txid`, `taker_txid`, and `block_id` |
• Updated [dxGetOrderHistory](#dxgetorderhistory) parameters and removed 'not yet supported' comment |
• Updated [dxGetNetworkTokens](#dxgetnetworktokens) to remove 'not yet supported' comment |
• Updated [dxGetTokenBalances](#dxgettokenbalances) description to clarify it returns *available* balances |
• Updated [dxGetOrderBook](#dxgetorderbook) `max_orders` description and sample responses with better examples |
• Consolidated [order status codes](#status-codes) to a single location |
• Updated [Status Codes](#status-codes) to include `rolled back` and `rollback failed` |
• Added [dxLoadXBridgeConf](#dxloadxbridgeconf) call |
• Added historic versioning, which can be viewed next to each changelog date |
• Corrected XRouter `confirmations` data type from 'string' to 'int' |

8/31/2018   |
------------|
• Updated XBridge design details and diagrams to reflect fee switch from maker to taker |
• Updated mentions of XBridge from 0.005 BLOCK to 0.015 BLOCK |
• Added reference for atomic swap type in XBridge introduction |

8/21/2018   |
------------|
• Added information on the design of XBridge and XRouter |
• Added hyperlink to site branding leading to the site root |

8/10/2018   |
------------|
• Added additonal information on the Blocknet Protocol, XBridge, and XRouter |
• Added information on configuration and setup needed to use the API |
• Moved Error Codes to under the XBridge API category |
• Updated the [xrGetBalanceUpdate](#xrgetbalanceupdate) description for better clarity  |
• Updated [xrGetBalance](#xrgetbalance), [dxGetOrderHistory](#getorderhistory), and [dxGetNetworkTokens](#getnetworktokens) descriptions to reflect the level of support |
• Updated XBridge order statuses and added explanations |
• Added a changelog |
• Added developer newsletter link in changelog and sidebar  |
• Updated sidebar links |
• Updated design |

8/3/2018    |
------------|
• Added documentation for XRouter CLI API calls |

6/4/2018    |
------------|
• API documentation went live |
• Includes documentation for XBridge CLI API calls |







<br>
<br>
<br>
<br>
<br>
<br>
<br>
