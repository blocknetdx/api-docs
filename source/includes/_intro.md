# Introduction

[Blocknet](https://blocknet.co) provides a simple and powerful API to build previously impossible multi-chain applications that consume services on different blockchains, all while remaining 100% trustless and decentralized. 

The API is accessible through command line (cli) with additional endpoints on the way. Code examples can be viewed in the dark panels next to each respective API call.

Please see [Getting Started](#getting-started) to begin using the APIs or continue reading below to learn more about the Blocknet Protocol, the different components, and how they all work.










## Blocknet Protocol

Blocknet is an interoperability protocol that can be used as a 2nd layer on any compatible blockchain to enable decentralized communication and exchange between different blockchains in a permissionless and trustless manner. Blockchain interoperability comes in 2 parts: exchange([XBridge](#xbridge)) and communication([XRouter](#xrouter)).

<!-- 
	There are currently many projects that try to provide as many features as possible in a single blockchain, resulting in the finished product being inefficient and bloated. The future Blocknet sees for blockchain is a highly collaborative microservice ecosystem.

	A shift from monolithic architecture to microservice architecture is important for scalability and development of blockchains. If developing a dApp, in the current state of the ecosystem a developer must choose between either developing on an existing platform(such as Ethereum), forking a project with similar traits, or building a blockchain from scratch. However, with the use of the Blocknet Protocol, development becomes blockchain-agnostic. This means development can occur on any chain and the features needed can be pulled in from other blockchains. For instance, if building a dApp on Ethereum that needed a storage solution, the dApp will be able to use the protocol to communicate with Siacoin, Storj, or any other storage blockchain to consume those services. If the dApp needed to perform heavy computations, Golem or Sonm could be used. If the dapp had a payment aspect, payments can be made in Bitcoin or Litecoin, which are more widely supported by vendors.

	The protocol enables the use of services from other chains similar to the way libraries are used in traditional software development, allowing developers to focus on the business logic of the application. This also helps monetize blockchain services as these blockchains are consumed.

	Another benefit to microservice architecture is that it will allow concentration of resources on core microservice blockchains, rather than development mind-share being divided among different projects trying to reinvent the wheel. Again, this is similar to the core libraries used in traditional programming. Research and advancements can be made for these microservice blockchains to perform one task really well and be secure, reliable, and efficient. 
-->

The protocol is supported by a network of Service Nodes, which are similar to masternodes with an increased level of participation. Service Nodes host full nodes of the blockchains the protocol is compatible with, host microservices, verify interactions between peers, route communication between blockchains, participate in governance by voting, and perform anti-spam and anti-DOS measures for the network.
 
<!-- 
	Below is a diagram of how a connection between clients and Service Nodes are made. As seen in the diagrams, a "client" refers to software utlizing the Blocknet Protocol, which can be a blockchain, microservice, dApp, mobile app, website, etc.

	<div class="center diagram-group">
		<strong>Communication Process</strong>
		<img class="diagram" src="">
		<a href="" target="_blank">*(view full size image)*</a>
	</div>


	1. The client connects to peers on the Blocknet network;
	1. The client broadcasts packets to the peers;
	1. The peers relay the packets;
	1. The packets are received by Service Nodes; 

	XBridge
	1. The client connects to peers on the Blocknet network;
	1. The client broadcasts packets to the peers;
	1. The peers relay the packets;
	1. The packets are received by Service Nodes;

	XRouter
	1. The client connects to peers on the Blocknet network;
	1. The peers signal if they are a Service Node;
	1. The client broadcasts packets directly to Service Nodes;
	1. The packets are received by Service Nodes;
-->

BLOCK is the utility token of the Blocknet blockchain and powers the Blocknet Protocol. BLOCK is used to pay fees for the network's services, such as those provided by XBridge](#xbridge) and [XRouter](#xrouter). Through these fees, BLOCK is also used for compensation to participating Service Nodes to incentivize support. 










## XBridge

XBridge provides the ability to perform atomic swap exchanges between any digital asset that is supported by the Blocknet Protocol via APIs ([view list](https://docs.blocknet.co/protocol/xbridge/compatibility/#supported-digital-assets)). When paired with XRouter, any application can perform exchanges between any compatible blockchains using SPV. The entire process is done in a trustless manner by decentralizing the storage of funds, order books, order matching, and asset exchange:

* __Storage of Funds__ - Trading occurs directly out of the client's wallet and funds are within the client's control throughout the entire process. 
* __Order Books__ - Orders are broadcasted directly from party to party over the 400+ Service Node network. Each client compiles the order book themselves instead of relying on a central order book service. All integrators and services on the protocol share the orderbook and liquidity. Currently there is just support for a public orderbook, but there are plans for a private orderbook and direct trading as well.
* __Order Matching__ - This is performed peer-to-peer by the clients.
* __Settlement__ - This is performed using BIP65 CLTV atomic swap contracts<sup>[1]</sup>. For blockchains that do not inherently support BIP65, such as Ethereum, similar methods are being emulated to extend the protocol to those blockchains and subsequent assets.

<small>[1] [ACCT using Check Lock Time Verify (#4)](http://www.kkurokawa.com/2015/10/atomic-cross-chain-transfer-overview.html)</small>

The exchange takes place on each respective blockchain. Note that once an exchange is completed, when the funds are received will be dependent on the blockchain's accepted confirmation time. By default, the required amount of confirmations is set 0 and the funds aren't spent until each blockchain achieves their respective required amount of confirmations. For instance, lets look at an example of an exchange between BTC requireing 1 confirmation and BLOCK requiring 2 confirmations. BLOCK has a faster confirmation time so it will receive 2 confirmations while BTC has 0, but the funds will not be spent until BLOCK has at least 2 confirmation and BTC has at least 1 confirmation.

There is currently a fixed fee of 0.015 BLOCK to take(fill) an order and no fee to make(create) an order. 


### Design

The following diagrams depict the events of an exchange with various outcomes. As seen in the diagrams, a "client" refers to software utlizing the Blocknet Protocol, which can be a blockchain, microservice, dApp, mobile app, website, etc.

<div class="center diagram-group">
	<strong>Successful Exchange</strong>
	<img class="diagram" src="/images/swap-success.png">
	<a href="/images/swap-success.png" target="_blank">(view full size image)</a>
</div>

The flow of the diagram above is top-to-bottom, left-to-right:

1. The maker client creates an order locally;
	* Order put in `new` state;
1. The order is broadcasted to the network;
	* A network transaction fee for the maker asset's blockchain is charged to the maker;
1. The Service Node network verifies the order is good;
1. The order is added to the order books, which the Service Nodes sync;
	* Order put in `open` state;
1. The taker client responds to take the order;
	* A network transaction fee for the taker asset's blockchain is charged;
	* A fixed 0.015 BLOCK fee is charged to the taker;
	* Order put in `accepting` state;
1. The Service Node network verifies the response to take the order is good;
1. The maker acknowledges the taker;
    * Order put in `hold` state;
1. The maker and trader assets are deposited into the atomic swap P2SH address;
    * Order put in `created` state;
1. The Service Nodes verify the terms of the atomic swap contract are good;
1. The transactions to the P2SH meet the required amount of confirmations;
1. The P2SH secrets are spent to the opposite party;
	* Order put in `signed` state;
	* Order put in `commited` state;
1. The maker and taker successfully receive the exchanged assets;
    * Order put in `finished` state;


<div class="center diagram-group">
	<strong>Failed Exchange - Bad Maker Order</strong>
	<img class="diagram" src="/images/swap-fail-1.png">
	<a href="/images/swap-fail-1.png" target="_blank">(view full size image)</a>
</div>

The flow of the diagram above is top-to-bottom, left-to-right:

1. The maker client creates an order locally;
	* Order put in `new` state;
1. The order is broadcasted to the network;
	* A network transaction fee for the maker asset's blockchain is charged to the maker;
1. The Service Node network verifies the order is bad;
1. The order is rejected by the network;
	* Order put in `canceled` state;


<div class="center diagram-group">
	<strong>Failed Exchange - Bad Taker Response</strong>
	<img class="diagram" src="/images/swap-fail-2.png">
	<a href="/images/swap-fail-2.png" target="_blank">(view full size image)</a>
</div>

The flow of the diagram above is top-to-bottom, left-to-right:

1. The maker client creates an order locally;
	* Order put in `new` state;
1. The order is broadcasted to the network;
	* A network transaction fee for the maker asset's blockchain is charged to the maker;
1. The Service Node network verifies the order is good;
1. The order is added to the order books, which the Service Nodes sync;
	* Order put in `open` state;
1. The taker client responds to take the order;
	* A network transaction fee for the taker asset's blockchain is charged;
	* A fixed 0.015 BLOCK fee is charged to the taker;
	* Order put in `accepting` state;
1. The Service Node network verifies the response to take the order is bad;
	* Order put in `canceled` state;


<div class="center diagram-group">
	<strong>Failed Exchange - Bad Atomic Swap Terms</strong>
	<img class="diagram" src="/images/swap-fail-3.png">
	<a href="/images/swap-fail-3.png" target="_blank">(view full size image)</a>
</div>

The flow of the diagram above is top-to-bottom, left-to-right:

1. The maker client creates an order locally;
	* Order put in `new` state;
1. The order is broadcasted to the network;
	* A network transaction fee for the maker asset's blockchain is charged to the maker;
1. The Service Node network verifies the order is good;
1. The order is added to the order books, which the Service Nodes sync;
	* Order put in `open` state;
1. The taker client responds to take the order;
	* A network transaction fee for the taker asset's blockchain is charged;
	* A fixed 0.015 BLOCK fee is charged to the taker;
	* Order put in `accepting` state;
1. The Service Node network verifies the response to take the order is good;
1. The maker acknowledges the taker;
    * Order put in `hold` state;
1. The maker and trader assets are deposited into the atomic swap P2SH address;
    * Order put in `created` state;
1. The Service Nodes verify the terms of the atomic swap contract are bad;
1. The funds in the P2SH addresses are redeemed back to the original party;
	* Order put in `canceled` state;


### Fees

* __Maker Fee__ - When creating an order with XBridge, there is no fee other than the transaction fee for the network of the asset being sold. This is the same type of fee you would incur if sending this asset to another party. Having no fee to place an order encourages market makers to add liquidity. This also makes it possible to acquire the BLOCK needed to take orders.

* __Taker Fee__ - When accepting an order with XBridge, a static fee of 0.015 BLOCK is charged at the time the order is taken. This fee is charged even if a trade is canceled or fails and is meant to discourage malicious behavior on the network. In addition to the 0.015 BLOCK fee, there is also the transaction fee for the network of the asset being sold. This is the same type of fee you would incur if sending this asset to another party. If the taker asset is BLOCK, there needs to be *at least* two UXTOs - one or more to cover the 0.015 BLOCK fee and one or more to cover the traded amount. In a future update, there will be a percent-based fee that’s charged when accepting an order, but the details of this are not yet finalized.




<!-- 
### Scaling
### Use Cases
 -->










## XRouter

XRouter provides the Blocknet Protocol with a communication layer consisting of an inter-blockchain SPV client backend, enabling the verification of blockchain records without requiring users to download the full blockchain. This empowers development of lightweight microservice architectures that harness contracts, protocols, and services from other blockchains, laying a foundation for a decentralized API ecosystem.

There is currently no fee to use XRouter, but the client needs to have at least 200 BLOCK on any account. This is used as a spam deterrent until the fee structure is implemented.


### Design

The XRouter system utilizes the Service Node network to route calls from the client directly to the respective blockchain. There are 2 types of XRouter calls: submissions and queries. 

XRouter submissions are calls that involve interactions with a blockchain, such as `xrSendTransaction`. With submissions, the packets are routed from the client to the respective blockchain and a response, if any, is routed back to the client. 

XRouter queries are calls requesting information from a blockchain, such as `xrGetBlockCount`. With queries, the packets are also routed from the client to the respective blockchain and the response of the information queried is routed back to the client. XRouter queries can require a specific amount of Service Nodes to receive a response from in order to achieve consensus on the final answer. 

The following diagrams depict the events of an XRouter query and submission. As seen in the diagrams, a "client" refers to software utlizing the Blocknet Protocol, which can be a blockchain, microservice, dApp, mobile app, website, etc.


<div class="center diagram-group">
	<strong>XRouter Query</strong>
	<img class="diagram" src="/images/xrouter-query.png">
	<a href="/images/xrouter-query.png" target="_blank">(view full size image)</a>
</div>

The flow of the diagram is top-to-bottom:

1. The client dispatches a packet for a query via API call to the Service Node network;
1. The Service Nodes supporting the queried blockchain receive the packet;
1. The Service Nodes route the packet of the query to the blockchain;
1. The Service Nodes route the response from the blockchain back to the client;
1. The client evaluates the responses for a majority consensus on the final answer;


<div class="center diagram-group">
	<strong>XRouter Submission</strong>
	<img class="diagram" src="/images/xrouter-submission.png">
	<a href="/images/xrouter-submission.png" target="_blank">(view full size image)</a>
</div>

1. The client dispatches a packet for a submission via API call to the Service Node network;
1. The Service Nodes supporting the desired blockchain receive the packet;
1. The Service Nodes route the packet of the query to the blockchain;
1. IF there is a response from the blockchain, the Service Nodes route the response back to the client;


<!-- 
### Use Cases
 -->








