# Introduction

[Blocknet](https://blocknet.co) provides a simple and powerful API to build previously impossible multi-chain applications that consume services on different blockchains, all while remaining 100% trustless and decentralized. 

The API is accessible through command line (cli) with additional endpoints on the way. Code examples can be viewed in the dark panels next to each respective API call.

Please see [Getting Started](#getting-started) to begin using the APIs or continue reading below to learn more about the Blocknet Protocol, the different components, and how they all work.










## Blocknet Protocol

Blocknet is an interoperability protocol that can be used as a 2nd layer on any compatible blockchain to enable decentralized communication and exchange between different blockchains in a permissionless and trustless manner. Blockchain interoperability comes in 2 parts: exchange ([XBridge](#xbridge)) and communication ([XRouter](#xrouter)).

<!-- 
	There are currently many projects that try to provide as many features as possible in a single blockchain, resulting in the finished product being inefficient and bloated. The future Blocknet sees for blockchain is a highly collaborative microservice ecosystem.

	A shift from monolithic architecture to microservice architecture is important for scalability and development of blockchains. If developing a dApp, in the current state of the ecosystem a developer must choose between either developing on an existing platform(such as Ethereum), forking a project with similar traits, or building a blockchain from scratch. However, with the use of the Blocknet Protocol, development becomes blockchain-agnostic. This means development can occur on any chain and the features needed can be pulled in from other blockchains. For instance, if building a dApp on Ethereum that needed a storage solution, the dApp will be able to use the protocol to communicate with Siacoin, Storj, or any other storage blockchain to consume those services. If the dApp needed to perform heavy computations, Golem or Sonm could be used. If the dapp had a payment aspect, payments can be made in Bitcoin or Litecoin, which are more widely supported by vendors.

	The protocol enables the use of services from other chains similar to the way libraries are used in traditional software development, allowing developers to focus on the business logic of the application. This also helps monetize blockchain services as these blockchains are consumed.

	Another benefit to microservice architecture is that it will allow concentration of resources on core microservice blockchains, rather than development mind-share being divided among different projects trying to reinvent the wheel. Again, this is similar to the core libraries used in traditional programming. Research and advancements can be made for these microservice blockchains to perform one task really well and be secure, reliable, and efficient. 
-->
 
<!-- 
	Below is a diagram of how a connection between clients and Service Nodes are made. As seen in the diagrams, a "client" refers to software utilizing the Blocknet Protocol, which can be a blockchain, microservice, dApp, mobile app, website, etc.

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

BLOCK is the utility token of the Blocknet blockchain and powers the Blocknet Protocol. BLOCK is used to pay fees for the network's services, such as those provided by [XBridge](#xbridge) and [XRouter](#xrouter). Through these fees, BLOCK is also used for compensation to participating Service Nodes to incentivize support. 










## Service Nodes

The protocol is supported by a network of Service Nodes, which are similar to masternodes with an increased level of participation. Service Nodes host full nodes of the supported blockchains, host microservices, verify UTXOs, route communication between blockchains, participate in governance by voting, and perform anti-spam and anti-DOS measures for the network. Read more about Service Nodes [here](https://docs.blocknet.co/service-nodes/introduction).

Service Nodes earn 100% of fees from XBridge, XRouter, and XCloud services. If you'd like to operate your own Service Node, see the [Service Node Setup Guide](https://docs.blocknet.co/service-nodes/setup).










## XBridge

XBridge provides the ability to perform *true* trustless and decentralized exchanges between any digital asset that is supported by the Blocknet Protocol via APIs ([view list](https://docs.blocknet.co/protocol/xbridge/compatibility/#supported-digital-assets)). When paired with XRouter, any application can perform exchanges between any compatible blockchains using a decentralized SPV implementation. Unlike every other "decentralized" exchange protocols, XBridge doesn't use derivatives (proxy tokens or colored coins), the entire process is done in a trustless manner, and it decentralizes the four components of an exchange: 

* __Storage of Funds__ - Trading is non-custodial and occurs directly out of the client's wallet. Funds remain within the client's control throughout the entire process. 
* __Order Books__ - Orders are broadcasted directly peer-to-peer over the network. Each client compiles the order book themselves instead of relying on a central order book service. All integrators and services on the protocol share the orderbook and liquidity. Currently there is just support for a public order book, but there are plans for private order books and direct trading as well.
* __Order Matching__ - This is performed peer-to-peer by the clients.
* __Settlement__ - This is performed using BIP65 CLTV atomic swap contracts<sup>[1]</sup>. For blockchains that do not inherently support BIP65, such as Ethereum, similar methods are being emulated to extend the protocol to those blockchains and subsequent assets.

<small>[1] [ACCT using Check Lock Time Verify (#4)](http://www.kkurokawa.com/2015/10/atomic-cross-chain-transfer-overview.html)</small>

The exchange takes place on each respective blockchain with the process overlooked by a network of 400+ Service Nodes running full nodes of the compatible blockchains to ensure no malicious behavior is ocurring. 

Note that once an exchange is completed, when the funds are received will be dependent on the blockchain's accepted confirmation time. By default, the required amount of confirmations for most assets is 0 and the funds aren't spent until each blockchain achieves their respective required amount of confirmations. For instance, let's look at an example of an exchange between BTC requiring 1 confirmation and BLOCK requiring 2 confirmations. BLOCK has a faster confirmation time so it will receive 2 confirmations while BTC has 0, but the funds will not be spent until BLOCK has at least 2 confirmation and BTC has at least 1 confirmation. Both conditions must be met. This setting applies to the asset that you are receiving. The setting for the asset that is being sold is set by the opposite party.

There is currently a fixed fee of 0.015 BLOCK to take (fill) an order and no fee to make(create) an order. 


### XBridge Design

The following diagrams depict the events of an exchange with various outcomes. As seen in the diagrams, a "client" refers to software utilizing the Blocknet Protocol, which can be a blockchain, microservice, dApp, mobile app, website, etc.

<div class="center diagram-group">
	<strong>Successful Exchange</strong>
	<img class="diagram" src="/images/swap-success.png">
	<a href="/images/swap-success.png" target="_blank">(view full size image)</a>
</div>

The flow of the diagram above is top-to-bottom, left-to-right:

1. The maker client creates an order locally.
	* The order is put in `new` state.
1. The order is broadcasted to the network.
	* A network transaction fee for the maker asset's blockchain is charged to the maker.
1. The Service Node network verifies the order is good.
1. The order is added to the order books, which the Service Nodes relay.
	* The order is put in `open` state.
1. The taker client responds to take the order.
	* A network transaction fee for the taker asset's blockchain is charged.
	* A fixed 0.015 BLOCK fee is charged to the taker.
	* The order is put in `accepting` state.
1. The Service Node network verifies the response to take the order is good.
1. The maker acknowledges the taker.
    * The order is put in `hold` state.
1. The maker and trader assets are deposited into the atomic swap P2SH address.
    * The order is put in `created` state.
1. The Service Nodes verify the terms of the atomic swap contract are good.
1. The transactions to the P2SH meet the required amount of confirmations.
1. The P2SH secrets are spent to the opposite party.
	* The order is put in `signed` state.
	* The order is put in `commited` state.
1. The maker and taker successfully receive the exchanged assets.
    * The order is put in `finished` state.


<div class="center diagram-group">
	<strong>Failed Exchange - Bad Maker Order</strong>
	<img class="diagram" src="/images/swap-fail-1.png">
	<a href="/images/swap-fail-1.png" target="_blank">(view full size image)</a>
</div>

The flow of the diagram above is top-to-bottom, left-to-right:

1. The maker client creates an order locally.
	* The order is put in `new` state.
1. The order is broadcasted to the network.
	* A network transaction fee for the maker asset's blockchain is charged to the maker.
1. The Service Node network verifies the order is bad.
1. The order is rejected by the network.
	* The order is put in `canceled` state.


<div class="center diagram-group">
	<strong>Failed Exchange - Bad Taker Response</strong>
	<img class="diagram" src="/images/swap-fail-2.png">
	<a href="/images/swap-fail-2.png" target="_blank">(view full size image)</a>
</div>

The flow of the diagram above is top-to-bottom, left-to-right:

1. The maker client creates an order locally.
	* The order is put in `new` state.
1. The order is broadcasted to the network.
	* A network transaction fee for the maker asset's blockchain is charged to the maker.
1. The Service Node network verifies the order is good.
1. The order is added to the order books, which the Service Nodes relay.
	* The order is put in `open` state.
1. The taker client responds to take the order.
	* A network transaction fee for the taker asset's blockchain is charged.
	* A fixed 0.015 BLOCK fee is charged to the taker.
	* The order is put in `accepting` state.
1. The Service Node network verifies the response to take the order is bad.
	* The order is put in `canceled` state.


<div class="center diagram-group">
	<strong>Failed Exchange - Bad Atomic Swap Terms</strong>
	<img class="diagram" src="/images/swap-fail-3.png">
	<a href="/images/swap-fail-3.png" target="_blank">(view full size image)</a>
</div>

The flow of the diagram above is top-to-bottom, left-to-right:

1. The maker client creates an order locally.
	* The order is put in `new` state.
1. The order is broadcasted to the network.
	* A network transaction fee for the maker asset's blockchain is charged to the maker.
1. The Service Node network verifies the order is good.
1. The order is added to the order books, which the Service Nodes relay.
	* The order is put in `open` state.
1. The taker client responds to take the order.
	* A network transaction fee for the taker asset's blockchain is charged.
	* A fixed 0.015 BLOCK fee is charged to the taker.
	* The order is put in `accepting` state.
1. The Service Node network verifies the response to take the order is good.
1. The maker acknowledges the taker.
    * The order is put in `hold` state.
1. The maker and trader assets are deposited into the atomic swap P2SH address.
    * The order is put in `created` state.
1. The Service Nodes verify the terms of the atomic swap contract are bad.
1. The funds in the P2SH addresses are redeemed back to the original party.
	* The order is put in `canceled` state.


### XBridge Fees

* __Maker Fee__ - When creating an order with XBridge, there is no fee other than the transaction fee for the network of the asset being sold. This is the same type of fee you would incur if sending this asset to another party. Having no fee to place an order encourages market makers to add liquidity. This also makes it possible to acquire the BLOCK needed to take orders.

* __Taker Fee__ - When accepting an order with XBridge, a static fee of 0.015 BLOCK is charged at the time the order is taken. This fee is charged even if a trade is canceled or fails and is meant to discourage malicious behavior on the network. In addition to the 0.015 BLOCK fee, there is also the transaction fee for the network of the asset being sold. This is the same type of fee you would incur if sending this asset to another party. If the taker asset is BLOCK, there needs to be *at least* two UXTOs - one or more to cover the 0.015 BLOCK fee and one or more to cover the traded amount. In a future update, there will be a percent-based fee that’s charged when accepting an order, but the details of this are not yet finalized.


### XBridge Use Cases

Below is a non-exhaustive list of possible use cases that XBridge enables.

* __Decentralized Exchange__ - A truly decentralized exchange can fairly easily be created utilizing XBridge since the protocol handles the order placement, order books, order matching, and settlement. A DEX dApp has already been developed call [Block DX](https://github.com/blocknetdx/block-dx). The codebase is entirely open source under MIT license and can be used to create a white label DEX.

* __Decentralized ShapeShift__ - The idea of a decentralized exchange can be abstracted to offer a simpler interface similar to ShapeShift where a user enter the amount they want to exchange and the best price is provided.

* __OTC Trading__ - Due to the nature of XBridge, it can be used to exchange large amounts securely with the funds always remaining the user's control.



<!-- 
### Scaling
 -->










## XRouter

XRouter provides the Blocknet Protocol with a communication layer consisting of an inter-blockchain SPV client backend, enabling the verification of blockchain records without requiring users to download the full blockchain. This empowers development of lightweight microservice architectures that harness contracts, protocols, and services from other blockchains, laying a foundation for a decentralized API ecosystem.

Since XRouter functions on the TCP/IP level, it is compatible with any network. This includes public and private DLT's from Bitcoin, to IOTA, to Hyperledger.

Service Nodes earn 100% of fees from XBridge, XRouter, and XCloud services. If you'd like to operate your own Service Node, see the [Service Node Setup Guide](https://docs.blocknet.co/service-nodes/setup).


### XRouter Design

The XRouter system utilizes the Service Node network to route calls from the client directly to the respective blockchain. There are 2 types of XRouter calls: submissions and queries. 

XRouter submissions are calls that involve interactions with a blockchain, such as `xrSendTransaction`. With submissions, the packets are routed from the client to the respective blockchain and a response, if any, is routed back to the client. 

XRouter queries are calls requesting information from a blockchain, such as `xrGetBlockCount`. With queries, the packets are also routed from the client to the respective blockchain and the response of the information queried is routed back to the client. XRouter queries can require a specific amount of Service Nodes to receive a response from in order to achieve consensus on the final answer. 

<div class="center diagram-group">
	<strong>XRouter Overview</strong>
	<img class="diagram" src="/images/xrouter-overview-2.png">
	<a href="/images/xrouter-overview-2.png" target="_blank">(view full size image)</a>
</div>

The following diagrams depict the events of an XRouter query and submission. As seen in the diagrams, a "client" refers to software utilizing the Blocknet Protocol, which can be a blockchain, microservice, dApp, mobile app, website, etc.


<div class="center diagram-group">
	<strong>XRouter Query</strong>
	<img class="diagram" src="/images/xrouter-query.png">
	<a href="/images/xrouter-query.png" target="_blank">(view full size image)</a>
</div>

The flow of the diagram is top-to-bottom:

1. The client dispatches a packet for a query via API call to the Service Node network.
1. The Service Nodes supporting the queried blockchain receive the packet.
1. The Service Nodes route the packet of the query to the blockchain.
1. The Service Nodes route the response from the blockchain back to the client.
1. The client receives all responses, as well as a response for a majority consensus on the answer.


<div class="center diagram-group">
	<strong>XRouter Submission</strong>
	<img class="diagram" src="/images/xrouter-submission.png">
	<a href="/images/xrouter-submission.png" target="_blank">(view full size image)</a>
</div>

1. The client dispatches a packet for a submission via API call to the Service Node network.
1. The Service Nodes supporting the desired blockchain receive the packet.
1. The Service Nodes route the packet of the query to the blockchain.
1. If there is a response from the blockchain, the Service Nodes route the response back to the client.


### Namespace

XRouter SPV wallets utlize the `xrs::` namespace while [XCloud](#xcloud) services utilize the `xrs::` namespace. A list of the SPV wallets and services can be viewed using [xrGetNetworkServices](#xrgetnetworkservices) and you can pre-connect to the nodes with [xrConnect](#xrconnect).


### Fees

With XRouter, and subsequently [XCloud](#xcloud), fees are determined by a free market. Service Nodes can specify the fee that they wish to charge for a call and client can specify the max fee they are willing to pay for calls.


### XRouter Node Scoring

Clients keep a score of each Service Node. When a Service Node reaches a score of `-200`, the Service Node will be banned by the client for a 24hr period. After this 24hr period, the Service Node will start with a score of `-25`. The ban score threshold can be adjusted using the `xrouterbanscore` setting in `blocknet.conf` (see [setup](#xrouter-setup)).

Action                                  | Change in Score
----------------------------------------|-----------------
Failure to respond to call within 30s   | -25
Failure to meet majority consensus      | -5
Matching consensus                      | correct_nodes * 2
Sending bad XRouter config              | -10
Sending bad XCloud config               | -2

This mechanism and values are subject to change in future releases. Join the [Developer mailing list](http://eepurl.com/dDjhYH) to stay updated.


### XRouter Use Cases

The applications for XRouter are as vast and imaginative as the internet. Below are a few examples of use cases:

* __Supply Chain__ - In supply chain there will be multiple blockchains being used at various steps of the process much like there is today with traditional software stacks. The Blocknet Protocol and XRouter would allow information to be accessible between these different blockchains. For Example, pharmaceutical manufacturers have strict regulations to follow and need to provide certain information and assurances. Being able to access batch information from the raw materials being consumed, temperature and humidity information during transportation, and final destinations are all important. A smart contract utilizing XRouter to gather this information from each respective chain and write it to the pharmaceutical’s blockchain along with the batch code. XRouter would enable this communication to occur in a trustless way, which is important to ensure validity of the information.

* __Storage and Hosting__ - If creating a dApp on Ethereum, you may require storage functionality. Ethereum doesn’t intrinsically handle file storage very efficiently. In this scenario, XRouter can be used to interact with other blockchains such as Storj, Filecoin, Sia, or Swarm to utilize their storage services.

* __Media and Content__ - For content creation, a creator has the option of publishing to the LBRY Credits or Alexandria blockchains. Similar to HootSuite, which is a tool that allows posting to multiple social media platforms simultaneously, a dApp can be created using XRouter that offers the same benefit. The user can post their content once, whether it’s audio, video, literature, or art, and have it published to Alexandria’s and LBRY Credit’s blockchain platform simultaneously. 

* __Markets__ - There are many blockchains creating decentralized marketplaces including Origami, District0x, OpenBazaar, and Syscoin’s marketplace, but the offering of products are relatively low on each independent platform. A dApp that utilizes XRouter to aggregate all the products into a single hub would offer a lot more options to users and a fuller marketplace. It can also make publishing products easier by publishing to all platforms simultaneously through a single form, offering more exposure than posting to a single marketplace while saving time.

* __Business and Industry__ - There are many dApps and blockchains that will end up using health data. Rather than submitting health data to each application, a universal EHR (Electronic Health Record) blockchain can be created to manage personal medical data and accessibility of data by each application. The health data on this EHR ledger can be shared amongst healthcare providers, hospitals, and insurance blockchains, dApps, and applications via XRouter. 

* __Certifications__ - Certifications and licensing records can be stored on a dedicated blockchain where they could be verified by a dApp built on the Blocknet Protocol. These records can be used to confirm qualifications and grant access or permissions.





 
## XCloud

XCloud can be used to monetize any service with crypto payments without having to re-code or change anything about those existing applications. A good way to think of XCloud is like a decentralized AWS. CoinMarketCap could be connected in a matter of minutes and allow users to access their API for a fee paid in BLOCK, without requiring any signups or KYC.

XCloud sits on top of, and is powered by, XRouter. Services are hosted by Service Nodes and operate in a similar manner as the full node SPV wallets. For further explanation, refer to [XRouter Design](#xrouter-design), [Namespacing](#namespace), [Fees](#xrouter-fees), and [XRouter Node Scoring](#xrouter-node-scoring). 

Service Nodes earn 100% of fees from XBridge, XRouter, and XCloud services. If you'd like to operate your own Service Node, see the [Service Node Setup Guide](https://docs.blocknet.co/service-nodes/setup).


## Hydra

Hydra is a decentralized drop-in replacement for Infura. Its decentralized architecture is highly scalable and provides a foundation for a truly decentralized dApp ecosystem.

### Blockchain Connector

Hydra enables easy connection for developers to access accurate and reliable blockchain information. Powered by Blocknet's [XRouter](#xrouter) protocol, Hydra provides users with an all-in-one solution for blockchain data, including Ethereum.

### Fast Access

Access to some blockchains such as Ethereum require incredibly large amounts of data, storage, long sync times and ongoing maintenance, which carry high costs.

Hydra provides instant access to blockchain data with a simple drop-in URL. Developers can begin accessing blockchain data without any of the drawbacks of hosting their own nodes.

### Archival Data

Running an Ethereum archival node is an extremely costly exercise and requires terabytes of storage space on fast drives. Multiple archival nodes run on Hydra, removing the barrier to entry for all developers.

### Service Providers

Hydra is designed to allow anyone to potentially deploy and run a Hydra endpoint service. This can be a profitable activity for those that want to support the Hydra infrastructure.

### FAQ

**Q**: How do I get started as a service provider?

**A**: Have a look at the [Hydra Getting Started](#hydra-setup) section.

**Q**: What kind of hardware is recommended as a service provider?

**A**: All blockchains require different levels of hardware but for GETH support it is recommended minimum 8vCPU, 16GB RAM, SSD for archival node.

**Q**: How are fees paid or collected?

**A**: Hydra users will be able to send a request with a payment in ETH or aBLOCK to service nodes in return for a project ID and API-key. This allows developers to make requests to the Blocknet network based on how much they paid.

**Q**: How do I get started as a developer?

**A**: Have a look at the [Hydra API](#hydra-api) section