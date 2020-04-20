
<!doctype html>
<html>
  <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-109213957-3"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-109213957-3');
    </script>

    <meta charset="utf-8">
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>Blocknet | API Documentation</title>
    <link rel="apple-touch-icon" sizes="180x180" href="https://www.blocknet.co/wp-content/themes/blocknet/includes/img/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="https://www.blocknet.co/wp-content/themes/blocknet/includes/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="https://www.blocknet.co/wp-content/themes/blocknet/includes/img/favicon/favicon-16x16.png">
    <link rel="mask-icon" href="https://www.blocknet.co/wp-content/themes/blocknet/includes/img/favicon/safari-pinned-tab.svg" color="#162e48">
    <link rel="shortcut icon" href="https://www.blocknet.co/wp-content/themes/blocknet/includes/img/favicon/favicon.ico">
    <meta name="msapplication-TileColor" content="#dddfeb">
    <meta name="msapplication-config" content="https://www.blocknet.co/wp-content/themes/blocknet/includes/img/favicon/browserconfig.xml">
    <meta name="theme-color" content="#dddfeb">
    <meta name="author" content="Blocknet.co">
    <meta name="subject" content="Crypto">
    <meta name="description" content="Start building multi-blockchain applications with Blocknet, a decentralized interoperability protocol enabling the transfer of data and value across different blockchains, all while remaining trustless.">
    <meta name="keywords" content="blocknet, api, documentation, docs, crypto, protocol, blockchain, interoperability, dex, exchange, internet">
    <meta name="image" content="https://www.blocknet.co/wp-content/themes/blocknet/includes/img/blocknet.png">
    <meta name="language" content="english">
    <meta name="copyright" content="Blocknet">
    <meta name="contact" content="contact@blocknet.co">
    <meta name="distribution" content="global">
    <meta name="country" content="USA">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Blocknet">
    <meta name="og:locale" content="en_US">
    <meta property="og:description" content="Start building multi-blockchain applications with Blocknet, a decentralized interoperability protocol enabling the transfer of data and value across different blockchains, all while remaining trustless.">
    <meta property="og:image" content="https://www.blocknet.co/wp-content/themes/blocknet/includes/img/blocknet.png">
    <meta property="og:url" content="https://blocknet.co">
    <meta property="og:site_name" content="Blocknet">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Blocknet">
    <meta name="twitter:description" content="Start building multi-blockchain applications with Blocknet, a decentralized interoperability protocol enabling the transfer of data and value across different blockchains, all while remaining trustless.">
    <meta name="twitter:site" content="@The_Blocknet">
    <meta name="twitter:creator" content="@The_Blocknet">
    <meta name="twitter:image:src" content="https://www.blocknet.co/wp-content/themes/blocknet/includes/img/blocknet.png">
    <meta name="twitter:image:alt" content="Blocknet">
    <meta property="fb:app_id" content="1870616833254995">


    <style>
      .highlight table td { padding: 5px; }
.highlight table pre { margin: 0; }
.highlight .gh {
  color: #999999;
}
.highlight .sr {
  color: #f6aa11;
}
.highlight .go {
  color: #888888;
}
.highlight .gp {
  color: #555555;
}
.highlight .gs {
}
.highlight .gu {
  color: #aaaaaa;
}
.highlight .nb {
  color: #f6aa11;
}
.highlight .cm {
  color: #75715e;
}
.highlight .cp {
  color: #75715e;
}
.highlight .c1 {
  color: #75715e;
}
.highlight .cs {
  color: #75715e;
}
.highlight .c, .highlight .cd {
  color: #75715e;
}
.highlight .err {
  color: #960050;
}
.highlight .gr {
  color: #960050;
}
.highlight .gt {
  color: #960050;
}
.highlight .gd {
  color: #49483e;
}
.highlight .gi {
  color: #49483e;
}
.highlight .ge {
  color: #49483e;
}
.highlight .kc {
  color: #66d9ef;
}
.highlight .kd {
  color: #66d9ef;
}
.highlight .kr {
  color: #66d9ef;
}
.highlight .no {
  color: #66d9ef;
}
.highlight .kt {
  color: #66d9ef;
}
.highlight .mf {
  color: #ae81ff;
}
.highlight .mh {
  color: #ae81ff;
}
.highlight .il {
  color: #ae81ff;
}
.highlight .mi {
  color: #ae81ff;
}
.highlight .mo {
  color: #ae81ff;
}
.highlight .m, .highlight .mb, .highlight .mx {
  color: #ae81ff;
}
.highlight .sc {
  color: #ae81ff;
}
.highlight .se {
  color: #ae81ff;
}
.highlight .ss {
  color: #ae81ff;
}
.highlight .sd {
  color: #e6db74;
}
.highlight .s2 {
  color: #e6db74;
}
.highlight .sb {
  color: #e6db74;
}
.highlight .sh {
  color: #e6db74;
}
.highlight .si {
  color: #e6db74;
}
.highlight .sx {
  color: #e6db74;
}
.highlight .s1 {
  color: #e6db74;
}
.highlight .s {
  color: #e6db74;
}
.highlight .na {
  color: #a6e22e;
}
.highlight .nc {
  color: #a6e22e;
}
.highlight .nd {
  color: #a6e22e;
}
.highlight .ne {
  color: #a6e22e;
}
.highlight .nf {
  color: #a6e22e;
}
.highlight .vc {
  color: #ffffff;
}
.highlight .nn {
  color: #ffffff;
}
.highlight .nl {
  color: #ffffff;
}
.highlight .ni {
  color: #ffffff;
}
.highlight .bp {
  color: #ffffff;
}
.highlight .vg {
  color: #ffffff;
}
.highlight .vi {
  color: #ffffff;
}
.highlight .nv {
  color: #ffffff;
}
.highlight .w {
  color: #ffffff;
}
.highlight {
  color: #ffffff;
}
.highlight .n, .highlight .py, .highlight .nx {
  color: #ffffff;
}
.highlight .ow {
  color: #f92672;
}
.highlight .nt {
  color: #f92672;
}
.highlight .k, .highlight .kv {
  color: #f92672;
}
.highlight .kn {
  color: #f92672;
}
.highlight .kp {
  color: #f92672;
}
.highlight .o {
  color: #f92672;
}
    </style>
    <link href="stylesheets/screen.css" rel="stylesheet" media="screen" />
    <link href="stylesheets/print.css" rel="stylesheet" media="print" />
      <script src="javascripts/all.js"></script>
  </head>

  <body class="index" data-languages="[&quot;cli&quot;]">
    <a href="#" id="nav-button">
      <span>
        NAV
        <img src="images/navbar.png" alt="Navbar" />
      </span>
    </a>
    <div class="toc-wrapper">
      <a href="#">
        <img src="images/brand.png" class="logo" alt="Brand" />
      </a>
        <div class="lang-selector">
              <a href="#" data-language-name="cli">cli</a>
        </div>
        <div class="search">
          <input type="text" class="search" id="input-search" placeholder="Search">
        </div>
        <ul class="search-results"></ul>
      <div id="toc" class="toc-list-h1">
          <li>
              <a href="#introduction" class="toc-h1 toc-link" data-title="introduction">Introduction</a>
              <ul class="toc-list-h2">
                  <li>
                    <a href="#blocknet-protocol" class="toc-h2 toc-link" data-title="blocknet-protocol">Blocknet Protocol</a>
                  </li>
                  <li>
                    <a href="#service-nodes" class="toc-h2 toc-link" data-title="service-nodes">Service Nodes</a>
                  </li>
                  <li>
                    <a href="#xbridge" class="toc-h2 toc-link" data-title="xbridge">XBridge</a>
                  </li>
                  <li>
                    <a href="#xrouter" class="toc-h2 toc-link" data-title="xrouter">XRouter</a>
                  </li>
                  <li>
                    <a href="#xcloud" class="toc-h2 toc-link" data-title="xcloud">XCloud</a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="#getting-started" class="toc-h1 toc-link" data-title="getting-started">Getting Started</a>
              <ul class="toc-list-h2">
                  <li>
                    <a href="#wallet-setup" class="toc-h2 toc-link" data-title="wallet-setup">Wallet Setup</a>
                  </li>
                  <li>
                    <a href="#xbridge-setup" class="toc-h2 toc-link" data-title="xbridge-setup">XBridge Setup</a>
                  </li>
                  <li>
                    <a href="#xrouter-setup" class="toc-h2 toc-link" data-title="xrouter-setup">XRouter Setup</a>
                  </li>
                  <li>
                    <a href="#xcloud-setup" class="toc-h2 toc-link" data-title="xcloud-setup">XCloud Setup</a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="#xbridge-api" class="toc-h1 toc-link" data-title="xbridge-api">XBridge API<span class="tag">BETA</span></a>
              <ul class="toc-list-h2">
                  <li>
                    <a href="#dxmakeorder" class="toc-h2 toc-link" data-title="dxmakeorder">dxMakeOrder</a>
                  </li>
                  <li>
                    <a href="#dxtakeorder" class="toc-h2 toc-link" data-title="dxtakeorder">dxTakeOrder</a>
                  </li>
                  <li>
                    <a href="#dxcancelorder" class="toc-h2 toc-link" data-title="dxcancelorder">dxCancelOrder</a>
                  </li>
                  <li>
                    <a href="#dxgetorder" class="toc-h2 toc-link" data-title="dxgetorder">dxGetOrder</a>
                  </li>
                  <li>
                    <a href="#dxgetorders" class="toc-h2 toc-link" data-title="dxgetorders">dxGetOrders</a>
                  </li>
                  <li>
                    <a href="#dxgetmyorders" class="toc-h2 toc-link" data-title="dxgetmyorders">dxGetMyOrders</a>
                  </li>
                  <li>
                    <a href="#dxflushcancelledorders" class="toc-h2 toc-link" data-title="dxflushcancelledorders">dxFlushCancelledOrders</a>
                  </li>
                  <li>
                    <a href="#dxgetorderfills" class="toc-h2 toc-link" data-title="dxgetorderfills">dxGetOrderFills</a>
                  </li>
                  <li>
                    <a href="#dxgetorderhistory" class="toc-h2 toc-link" data-title="dxgetorderhistory">dxGetOrderHistory</a>
                  </li>
                  <li>
                    <a href="#dxgetlocaltokens" class="toc-h2 toc-link" data-title="dxgetlocaltokens">dxGetLocalTokens</a>
                  </li>
                  <li>
                    <a href="#dxgetnetworktokens" class="toc-h2 toc-link" data-title="dxgetnetworktokens">dxGetNetworkTokens</a>
                  </li>
                  <li>
                    <a href="#dxgettokenbalances" class="toc-h2 toc-link" data-title="dxgettokenbalances">dxGetTokenBalances</a>
                  </li>
                  <li>
                    <a href="#dxgetnewtokenaddress" class="toc-h2 toc-link" data-title="dxgetnewtokenaddress">dxGetNewTokenAddress</a>
                  </li>
                  <li>
                    <a href="#dxgetorderbook" class="toc-h2 toc-link" data-title="dxgetorderbook">dxGetOrderBook</a>
                  </li>
                  <li>
                    <a href="#dxloadxbridgeconf" class="toc-h2 toc-link" data-title="dxloadxbridgeconf">dxLoadXBridgeConf</a>
                  </li>
                  <li>
                    <a href="#dxgettradingdata" class="toc-h2 toc-link" data-title="dxgettradingdata">dxGetTradingData</a>
                  </li>
                  <li>
                    <a href="#status-codes" class="toc-h2 toc-link" data-title="status-codes">Status Codes</a>
                  </li>
                  <li>
                    <a href="#error-codes" class="toc-h2 toc-link" data-title="error-codes">Error Codes</a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="#xrouter-api" class="toc-h1 toc-link" data-title="xrouter-api">XRouter API<span class="tag">BETA</span></a>
              <ul class="toc-list-h2">
                  <li>
                    <a href="#xrgetnetworkservices" class="toc-h2 toc-link" data-title="xrgetnetworkservices">xrGetNetworkServices</a>
                  </li>
                  <li>
                    <a href="#xrconnect" class="toc-h2 toc-link" data-title="xrconnect">xrConnect</a>
                  </li>
                  <li>
                    <a href="#xrconnectednodes" class="toc-h2 toc-link" data-title="xrconnectednodes">xrConnectedNodes</a>
                  </li>
                  <li>
                    <a href="#xrgetblockcount" class="toc-h2 toc-link" data-title="xrgetblockcount">xrGetBlockCount</a>
                  </li>
                  <li>
                    <a href="#xrgetblockhash" class="toc-h2 toc-link" data-title="xrgetblockhash">xrGetBlockHash</a>
                  </li>
                  <li>
                    <a href="#xrgetblock" class="toc-h2 toc-link" data-title="xrgetblock">xrGetBlock</a>
                  </li>
                  <li>
                    <a href="#xrgetblocks" class="toc-h2 toc-link" data-title="xrgetblocks">xrGetBlocks</a>
                  </li>
                  <li>
                    <a href="#xrdecoderawtransaction" class="toc-h2 toc-link" data-title="xrdecoderawtransaction">xrDecodeRawTransaction</a>
                  </li>
                  <li>
                    <a href="#xrgettransaction" class="toc-h2 toc-link" data-title="xrgettransaction">xrGetTransaction</a>
                  </li>
                  <li>
                    <a href="#xrgettransactions" class="toc-h2 toc-link" data-title="xrgettransactions">xrGetTransactions</a>
                  </li>
                  <li>
                    <a href="#xrsendtransaction" class="toc-h2 toc-link" data-title="xrsendtransaction">xrSendTransaction</a>
                  </li>
                  <li>
                    <a href="#xrgetreply" class="toc-h2 toc-link" data-title="xrgetreply">xrGetReply</a>
                  </li>
                  <li>
                    <a href="#xrshowconfigs" class="toc-h2 toc-link" data-title="xrshowconfigs">xrShowConfigs</a>
                  </li>
                  <li>
                    <a href="#xrreloadconfigs" class="toc-h2 toc-link" data-title="xrreloadconfigs">xrReloadConfigs</a>
                  </li>
                  <li>
                    <a href="#xrstatus" class="toc-h2 toc-link" data-title="xrstatus">xrStatus</a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="#xcloud-api" class="toc-h1 toc-link" data-title="xcloud-api">XCloud API<span class="tag">BETA</span></a>
              <ul class="toc-list-h2">
                  <li>
                    <a href="#xrservice" class="toc-h2 toc-link" data-title="xrservice">xrService</a>
                  </li>
                  <li>
                    <a href="#xrserviceconsensus" class="toc-h2 toc-link" data-title="xrserviceconsensus">xrServiceConsensus</a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="#core-api" class="toc-h1 toc-link" data-title="core-api">Core API</a>
              <ul class="toc-list-h2">
                  <li>
                    <a href="#getnetworkinfo" class="toc-h2 toc-link" data-title="getnetworkinfo">getnetworkinfo</a>
                  </li>
                  <li>
                    <a href="#servicenodelist" class="toc-h2 toc-link" data-title="servicenodelist">servicenodelist</a>
                  </li>
                  <li>
                    <a href="#listproposals" class="toc-h2 toc-link" data-title="listproposals">listproposals</a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="#web-endpoints" class="toc-h1 toc-link" data-title="web-endpoints">Web Endpoints</a>
              <ul class="toc-list-h2">
                  <li>
                    <a href="#ticker-1-0" class="toc-h2 toc-link" data-title="ticker-1-0">ticker (1.0)</a>
                  </li>
                  <li>
                    <a href="#ticker-2-0" class="toc-h2 toc-link" data-title="ticker-2-0">ticker (2.0)</a>
                  </li>
                  <li>
                    <a href="#history" class="toc-h2 toc-link" data-title="history">history</a>
                  </li>
                  <li>
                    <a href="#status" class="toc-h2 toc-link" data-title="status">status</a>
                  </li>
                  <li>
                    <a href="#dxgetnetworktokens-web" class="toc-h2 toc-link" data-title="dxgetnetworktokens-web">dxgetnetworktokens (web)</a>
                  </li>
                  <li>
                    <a href="#xrgetnetworkservices-web" class="toc-h2 toc-link" data-title="xrgetnetworkservices-web">xrgetnetworkservices (web)</a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="#changelog" class="toc-h1 toc-link" data-title="changelog">Changelog</a>
          </li>
      </div>
        <ul class="toc-footer">
            <li><a href="https://discord.gg/T7AG8TK" target="_blank">Blocknet Discord</a></li>
            <li><a href="https://github.com/blocknetdx/blocknet/blob/master/CONTRIBUTING.md" target="_blank">Blocknet Core - Contributing</a></li>
            <li><a href="https://github.com/blocknetdx/blocknet" target="_blank">Blocknet Core - Github</a></li>
            <li><a href="https://docs.blocknet.co/" target="_blank">Documentation Portal</a></li>
            <li><a href="http://eepurl.com/c5OJMj" target="_blank">Developer Notifications</a></li>
            <li><a href="https://docs.blocknet.co/protocol/xbridge/compatibility/#supported-digital-assets" target="_blank">XBridge Compatible Blockchains</a></li>
        </ul>
      <a class="support-button" href="https://discord.gg/T7AG8TK" target="_blank">Need Support?</a>
    </div>
    <div class="page-wrapper">
      <div class="dark-box"></div>
      <div class="content">
        <h1 id='introduction'>Introduction</h1>
<p><a href="https://blocknet.co">Blocknet</a> provides a simple and powerful API to build previously impossible multi-chain applications that consume services on different blockchains, all while remaining 100% trustless and decentralized. </p>

<p>The API is accessible through command line (cli) with additional endpoints on the way. Code examples can be viewed in the dark panels next to each respective API call.</p>

<p>Please see <a href="#getting-started">Getting Started</a> to begin using the APIs or continue reading below to learn more about the Blocknet Protocol, the different components, and how they all work.</p>
<h2 id='blocknet-protocol'>Blocknet Protocol</h2>
<p>Blocknet is an interoperability protocol that can be used as a 2nd layer on any compatible blockchain to enable decentralized communication and exchange between different blockchains in a permissionless and trustless manner. Blockchain interoperability comes in 2 parts: exchange (<a href="#xbridge">XBridge</a>) and communication (<a href="#xrouter">XRouter</a>).</p>

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

<p>BLOCK is the utility token of the Blocknet blockchain and powers the Blocknet Protocol. BLOCK is used to pay fees for the network&#39;s services, such as those provided by <a href="#xbridge">XBridge</a> and <a href="#xrouter">XRouter</a>. Through these fees, BLOCK is also used for compensation to participating Service Nodes to incentivize support. </p>
<h2 id='service-nodes'>Service Nodes</h2>
<p>The protocol is supported by a network of Service Nodes, which are similar to masternodes with an increased level of participation. Service Nodes host full nodes of the supported blockchains, host microservices, verify UTXOs, route communication between blockchains, participate in governance by voting, and perform anti-spam and anti-DOS measures for the network. Read more about Service Nodes <a href="https://docs.blocknet.co/service-nodes/introduction">here</a>.</p>

<p>Service Nodes earn 100% of fees from XBridge, XRouter, and XCloud services. If you&#39;d like to operate your own Service Node, see the <a href="https://docs.blocknet.co/service-nodes/setup">Service Node Setup Guide</a>.</p>
<h2 id='xbridge'>XBridge</h2>
<p>XBridge provides the ability to perform <em>true</em> trustless and decentralized exchanges between any digital asset that is supported by the Blocknet Protocol via APIs (<a href="https://docs.blocknet.co/protocol/xbridge/compatibility/#supported-digital-assets">view list</a>). When paired with XRouter, any application can perform exchanges between any compatible blockchains using a decentralized SPV implementation. Unlike every other &quot;decentralized&quot; exchange protocols, XBridge doesn&#39;t use derivatives (proxy tokens or colored coins), the entire process is done in a trustless manner, and it decentralizes the four components of an exchange: </p>

<ul>
<li><strong>Storage of Funds</strong> - Trading is non-custodial and occurs directly out of the client&#39;s wallet. Funds remain within the client&#39;s control throughout the entire process. </li>
<li><strong>Order Books</strong> - Orders are broadcasted directly peer-to-peer over the network. Each client compiles the order book themselves instead of relying on a central order book service. All integrators and services on the protocol share the orderbook and liquidity. Currently there is just support for a public order book, but there are plans for private order books and direct trading as well.</li>
<li><strong>Order Matching</strong> - This is performed peer-to-peer by the clients.</li>
<li><strong>Settlement</strong> - This is performed using BIP65 CLTV atomic swap contracts<sup>[1]</sup>. For blockchains that do not inherently support BIP65, such as Ethereum, similar methods are being emulated to extend the protocol to those blockchains and subsequent assets.</li>
</ul>

<p><small>[1] <a href="http://www.kkurokawa.com/2015/10/atomic-cross-chain-transfer-overview.html">ACCT using Check Lock Time Verify (#4)</a></small></p>

<p>The exchange takes place on each respective blockchain with the process overlooked by a network of 400+ Service Nodes running full nodes of the compatible blockchains to ensure no malicious behavior is ocurring. </p>

<p>Note that once an exchange is completed, when the funds are received will be dependent on the blockchain&#39;s accepted confirmation time. By default, the required amount of confirmations for most assets is 0 and the funds aren&#39;t spent until each blockchain achieves their respective required amount of confirmations. For instance, let&#39;s look at an example of an exchange between BTC requiring 1 confirmation and BLOCK requiring 2 confirmations. BLOCK has a faster confirmation time so it will receive 2 confirmations while BTC has 0, but the funds will not be spent until BLOCK has at least 2 confirmation and BTC has at least 1 confirmation. Both conditions must be met. This setting applies to the asset that you are receiving. The setting for the asset that is being sold is set by the opposite party.</p>

<p>There is currently a fixed fee of 0.015 BLOCK to take (fill) an order and no fee to make(create) an order. </p>
<h3 id='xbridge-design'>XBridge Design</h3>
<p>The following diagrams depict the events of an exchange with various outcomes. As seen in the diagrams, a &quot;client&quot; refers to software utilizing the Blocknet Protocol, which can be a blockchain, microservice, dApp, mobile app, website, etc.</p>

<div class="center diagram-group">
    <strong>Successful Exchange</strong>
    <img class="diagram" src="images/swap-success.png">
    <a href="images/swap-success.png" target="_blank">(view full size image)</a>
</div>

<p>The flow of the diagram above is top-to-bottom, left-to-right:</p>

<ol>
<li>The maker client creates an order locally.

<ul>
<li>The order is put in <code>new</code> state.</li>
</ul></li>
<li>The order is broadcasted to the network.

<ul>
<li>A network transaction fee for the maker asset&#39;s blockchain is charged to the maker.</li>
</ul></li>
<li>The Service Node network verifies the order is good.</li>
<li>The order is added to the order books, which the Service Nodes relay.

<ul>
<li>The order is put in <code>open</code> state.</li>
</ul></li>
<li>The taker client responds to take the order.

<ul>
<li>A network transaction fee for the taker asset&#39;s blockchain is charged.</li>
<li>A fixed 0.015 BLOCK fee is charged to the taker.</li>
<li>The order is put in <code>accepting</code> state.</li>
</ul></li>
<li>The Service Node network verifies the response to take the order is good.</li>
<li>The maker acknowledges the taker.

<ul>
<li>The order is put in <code>hold</code> state.</li>
</ul></li>
<li>The maker and trader assets are deposited into the atomic swap P2SH address.

<ul>
<li>The order is put in <code>created</code> state.</li>
</ul></li>
<li>The Service Nodes verify the terms of the atomic swap contract are good.</li>
<li>The transactions to the P2SH meet the required amount of confirmations.</li>
<li>The P2SH secrets are spent to the opposite party.

<ul>
<li>The order is put in <code>signed</code> state.</li>
<li>The order is put in <code>commited</code> state.</li>
</ul></li>
<li>The maker and taker successfully receive the exchanged assets.

<ul>
<li>The order is put in <code>finished</code> state.</li>
</ul></li>
</ol>

<div class="center diagram-group">
    <strong>Failed Exchange - Bad Maker Order</strong>
    <img class="diagram" src="images/swap-fail-1.png">
    <a href="images/swap-fail-1.png" target="_blank">(view full size image)</a>
</div>

<p>The flow of the diagram above is top-to-bottom, left-to-right:</p>

<ol>
<li>The maker client creates an order locally.

<ul>
<li>The order is put in <code>new</code> state.</li>
</ul></li>
<li>The order is broadcasted to the network.

<ul>
<li>A network transaction fee for the maker asset&#39;s blockchain is charged to the maker.</li>
</ul></li>
<li>The Service Node network verifies the order is bad.</li>
<li>The order is rejected by the network.

<ul>
<li>The order is put in <code>canceled</code> state.</li>
</ul></li>
</ol>

<div class="center diagram-group">
    <strong>Failed Exchange - Bad Taker Response</strong>
    <img class="diagram" src="images/swap-fail-2.png">
    <a href="images/swap-fail-2.png" target="_blank">(view full size image)</a>
</div>

<p>The flow of the diagram above is top-to-bottom, left-to-right:</p>

<ol>
<li>The maker client creates an order locally.

<ul>
<li>The order is put in <code>new</code> state.</li>
</ul></li>
<li>The order is broadcasted to the network.

<ul>
<li>A network transaction fee for the maker asset&#39;s blockchain is charged to the maker.</li>
</ul></li>
<li>The Service Node network verifies the order is good.</li>
<li>The order is added to the order books, which the Service Nodes relay.

<ul>
<li>The order is put in <code>open</code> state.</li>
</ul></li>
<li>The taker client responds to take the order.

<ul>
<li>A network transaction fee for the taker asset&#39;s blockchain is charged.</li>
<li>A fixed 0.015 BLOCK fee is charged to the taker.</li>
<li>The order is put in <code>accepting</code> state.</li>
</ul></li>
<li>The Service Node network verifies the response to take the order is bad.

<ul>
<li>The order is put in <code>canceled</code> state.</li>
</ul></li>
</ol>

<div class="center diagram-group">
    <strong>Failed Exchange - Bad Atomic Swap Terms</strong>
    <img class="diagram" src="images/swap-fail-3.png">
    <a href="images/swap-fail-3.png" target="_blank">(view full size image)</a>
</div>

<p>The flow of the diagram above is top-to-bottom, left-to-right:</p>

<ol>
<li>The maker client creates an order locally.

<ul>
<li>The order is put in <code>new</code> state.</li>
</ul></li>
<li>The order is broadcasted to the network.

<ul>
<li>A network transaction fee for the maker asset&#39;s blockchain is charged to the maker.</li>
</ul></li>
<li>The Service Node network verifies the order is good.</li>
<li>The order is added to the order books, which the Service Nodes relay.

<ul>
<li>The order is put in <code>open</code> state.</li>
</ul></li>
<li>The taker client responds to take the order.

<ul>
<li>A network transaction fee for the taker asset&#39;s blockchain is charged.</li>
<li>A fixed 0.015 BLOCK fee is charged to the taker.</li>
<li>The order is put in <code>accepting</code> state.</li>
</ul></li>
<li>The Service Node network verifies the response to take the order is good.</li>
<li>The maker acknowledges the taker.

<ul>
<li>The order is put in <code>hold</code> state.</li>
</ul></li>
<li>The maker and trader assets are deposited into the atomic swap P2SH address.

<ul>
<li>The order is put in <code>created</code> state.</li>
</ul></li>
<li>The Service Nodes verify the terms of the atomic swap contract are bad.</li>
<li>The funds in the P2SH addresses are redeemed back to the original party.

<ul>
<li>The order is put in <code>canceled</code> state.</li>
</ul></li>
</ol>
<h3 id='xbridge-fees'>XBridge Fees</h3>
<ul>
<li><p><strong>Maker Fee</strong> - When creating an order with XBridge, there is no fee other than the transaction fee for the network of the asset being sold. This is the same type of fee you would incur if sending this asset to another party. Having no fee to place an order encourages market makers to add liquidity. This also makes it possible to acquire the BLOCK needed to take orders.</p></li>
<li><p><strong>Taker Fee</strong> - When accepting an order with XBridge, a static fee of 0.015 BLOCK is charged at the time the order is taken. This fee is charged even if a trade is canceled or fails and is meant to discourage malicious behavior on the network. In addition to the 0.015 BLOCK fee, there is also the transaction fee for the network of the asset being sold. This is the same type of fee you would incur if sending this asset to another party. If the taker asset is BLOCK, there needs to be <em>at least</em> two UXTOs - one or more to cover the 0.015 BLOCK fee and one or more to cover the traded amount. In a future update, there will be a percent-based fee that’s charged when accepting an order, but the details of this are not yet finalized.</p></li>
</ul>
<h3 id='xbridge-use-cases'>XBridge Use Cases</h3>
<p>Below is a non-exhaustive list of possible use cases that XBridge enables.</p>

<ul>
<li><p><strong>Decentralized Exchange</strong> - A truly decentralized exchange can fairly easily be created utilizing XBridge since the protocol handles the order placement, order books, order matching, and settlement. A DEX dApp has already been developed call <a href="https://github.com/blocknetdx/block-dx">Block DX</a>. The codebase is entirely open source under MIT license and can be used to create a white label DEX.</p></li>
<li><p><strong>Decentralized ShapeShift</strong> - The idea of a decentralized exchange can be abstracted to offer a simpler interface similar to ShapeShift where a user enter the amount they want to exchange and the best price is provided.</p></li>
<li><p><strong>OTC Trading</strong> - Due to the nature of XBridge, it can be used to exchange large amounts securely with the funds always remaining the user&#39;s control.</p></li>
</ul>

<!-- 
### Scaling
 -->
<h2 id='xrouter'>XRouter</h2>
<p>XRouter provides the Blocknet Protocol with a communication layer consisting of an inter-blockchain SPV client backend, enabling the verification of blockchain records without requiring users to download the full blockchain. This empowers development of lightweight microservice architectures that harness contracts, protocols, and services from other blockchains, laying a foundation for a decentralized API ecosystem.</p>

<p>Since XRouter functions on the TCP/IP level, it is compatible with any network. This includes public and private DLT&#39;s from Bitcoin, to IOTA, to Hyperledger.</p>

<p>Service Nodes earn 100% of fees from XBridge, XRouter, and XCloud services. If you&#39;d like to operate your own Service Node, see the <a href="https://docs.blocknet.co/service-nodes/setup">Service Node Setup Guide</a>.</p>
<h3 id='xrouter-design'>XRouter Design</h3>
<p>The XRouter system utilizes the Service Node network to route calls from the client directly to the respective blockchain. There are 2 types of XRouter calls: submissions and queries. </p>

<p>XRouter submissions are calls that involve interactions with a blockchain, such as <code>xrSendTransaction</code>. With submissions, the packets are routed from the client to the respective blockchain and a response, if any, is routed back to the client. </p>

<p>XRouter queries are calls requesting information from a blockchain, such as <code>xrGetBlockCount</code>. With queries, the packets are also routed from the client to the respective blockchain and the response of the information queried is routed back to the client. XRouter queries can require a specific amount of Service Nodes to receive a response from in order to achieve consensus on the final answer. </p>

<div class="center diagram-group">
    <strong>XRouter Overview</strong>
    <img class="diagram" src="images/xrouter-overview-2.png">
    <a href="images/xrouter-overview-2.png" target="_blank">(view full size image)</a>
</div>

<p>The following diagrams depict the events of an XRouter query and submission. As seen in the diagrams, a &quot;client&quot; refers to software utilizing the Blocknet Protocol, which can be a blockchain, microservice, dApp, mobile app, website, etc.</p>

<div class="center diagram-group">
    <strong>XRouter Query</strong>
    <img class="diagram" src="images/xrouter-query.png">
    <a href="images/xrouter-query.png" target="_blank">(view full size image)</a>
</div>

<p>The flow of the diagram is top-to-bottom:</p>

<ol>
<li>The client dispatches a packet for a query via API call to the Service Node network.</li>
<li>The Service Nodes supporting the queried blockchain receive the packet.</li>
<li>The Service Nodes route the packet of the query to the blockchain.</li>
<li>The Service Nodes route the response from the blockchain back to the client.</li>
<li>The client receives all responses, as well as a response for a majority consensus on the answer.</li>
</ol>

<div class="center diagram-group">
    <strong>XRouter Submission</strong>
    <img class="diagram" src="images/xrouter-submission.png">
    <a href="images/xrouter-submission.png" target="_blank">(view full size image)</a>
</div>

<ol>
<li>The client dispatches a packet for a submission via API call to the Service Node network.</li>
<li>The Service Nodes supporting the desired blockchain receive the packet.</li>
<li>The Service Nodes route the packet of the query to the blockchain.</li>
<li>If there is a response from the blockchain, the Service Nodes route the response back to the client.</li>
</ol>
<h3 id='namespace'>Namespace</h3>
<p>XRouter SPV wallets utlize the <code>xrs::</code> namespace while <a href="#xcloud">XCloud</a> services utilize the <code>xrs::</code> namespace. A list of the SPV wallets and services can be viewed using <a href="#xrgetnetworkservices">xrGetNetworkServices</a> and you can pre-connect to the nodes with <a href="#xrconnect">xrConnect</a>.</p>
<h3 id='fees'>Fees</h3>
<p>With XRouter, and subsequently <a href="#xcloud">XCloud</a>, fees are determined by a free market. Service Nodes can specify the fee that they wish to charge for a call and client can specify the max fee they are willing to pay for calls.</p>
<h3 id='xrouter-node-scoring'>XRouter Node Scoring</h3>
<p>Clients keep a score of each Service Node. When a Service Node reaches a score of <code>-200</code>, the Service Node will be banned by the client for a 24hr period. After this 24hr period, the Service Node will start with a score of <code>-25</code>. The ban score threshold can be adjusted using the <code>xrouterbanscore</code> setting in <code>blocknet.conf</code> (see <a href="#xrouter-setup">setup</a>).</p>

<table><thead>
<tr>
<th>Action</th>
<th>Change in Score</th>
</tr>
</thead><tbody>
<tr>
<td>Failure to respond to call within 30s</td>
<td>-25</td>
</tr>
<tr>
<td>Failure to meet majority consensus</td>
<td>-5</td>
</tr>
<tr>
<td>Matching consensus</td>
<td>correct_nodes * 2</td>
</tr>
<tr>
<td>Sending bad XRouter config</td>
<td>-10</td>
</tr>
<tr>
<td>Sending bad XCloud config</td>
<td>-2</td>
</tr>
</tbody></table>

<p>This mechanism and values are subject to change in future releases. Join the <a href="http://eepurl.com/dDjhYH">Developer mailing list</a> to stay updated.</p>
<h3 id='xrouter-use-cases'>XRouter Use Cases</h3>
<p>The applications for XRouter are as vast and imaginative as the internet. Below are a few examples of use cases:</p>

<ul>
<li><p><strong>Supply Chain</strong> - In supply chain there will be multiple blockchains being used at various steps of the process much like there is today with traditional software stacks. The Blocknet Protocol and XRouter would allow information to be accessible between these different blockchains. For Example, pharmaceutical manufacturers have strict regulations to follow and need to provide certain information and assurances. Being able to access batch information from the raw materials being consumed, temperature and humidity information during transportation, and final destinations are all important. A smart contract utilizing XRouter to gather this information from each respective chain and write it to the pharmaceutical’s blockchain along with the batch code. XRouter would enable this communication to occur in a trustless way, which is important to ensure validity of the information.</p></li>
<li><p><strong>Storage and Hosting</strong> - If creating a dApp on Ethereum, you may require storage functionality. Ethereum doesn’t intrinsically handle file storage very efficiently. In this scenario, XRouter can be used to interact with other blockchains such as Storj, Filecoin, Sia, or Swarm to utilize their storage services.</p></li>
<li><p><strong>Media and Content</strong> - For content creation, a creator has the option of publishing to the LBRY Credits or Alexandria blockchains. Similar to HootSuite, which is a tool that allows posting to multiple social media platforms simultaneously, a dApp can be created using XRouter that offers the same benefit. The user can post their content once, whether it’s audio, video, literature, or art, and have it published to Alexandria’s and LBRY Credit’s blockchain platform simultaneously. </p></li>
<li><p><strong>Markets</strong> - There are many blockchains creating decentralized marketplaces including Origami, District0x, OpenBazaar, and Syscoin’s marketplace, but the offering of products are relatively low on each independent platform. A dApp that utilizes XRouter to aggregate all the products into a single hub would offer a lot more options to users and a fuller marketplace. It can also make publishing products easier by publishing to all platforms simultaneously through a single form, offering more exposure than posting to a single marketplace while saving time.</p></li>
<li><p><strong>Business and Industry</strong> - There are many dApps and blockchains that will end up using health data. Rather than submitting health data to each application, a universal EHR (Electronic Health Record) blockchain can be created to manage personal medical data and accessibility of data by each application. The health data on this EHR ledger can be shared amongst healthcare providers, hospitals, and insurance blockchains, dApps, and applications via XRouter. </p></li>
<li><p><strong>Certifications</strong> - Certifications and licensing records can be stored on a dedicated blockchain where they could be verified by a dApp built on the Blocknet Protocol. These records can be used to confirm qualifications and grant access or permissions.</p></li>
</ul>
<h2 id='xcloud'>XCloud</h2>
<p>XCloud can be used to monetize any service with crypto payments without having to re-code or change anything about those existing applications. A good way to think of XCloud is like a decentralized AWS. CoinMarketCap could be connected in a matter of minutes and allow users to access their API for a fee paid in BLOCK, without requiring any signups or KYC.</p>

<p>XCloud sits on top of, and is powered by, XRouter. Services are hosted by Service Nodes and operate in a similar manner as the full node SPV wallets. For further explanation, refer to <a href="#xrouter-design">XRouter Design</a>, <a href="#namespace">Namespacing</a>, <a href="#xrouter-fees">Fees</a>, and <a href="#xrouter-node-scoring">XRouter Node Scoring</a>. </p>

<p>Service Nodes earn 100% of fees from XBridge, XRouter, and XCloud services. If you&#39;d like to operate your own Service Node, see the <a href="https://docs.blocknet.co/service-nodes/setup">Service Node Setup Guide</a>.</p>
<h1 id='getting-started'>Getting Started</h1>
<p>The Blocknet Protocol currently requires a synced Blocknet wallet, as well as the synced wallet of any blockchain that will be interacted with. In the future, with the use of <a href="#xrouter">XRouter</a>, this will not be required. In addition, configuration files must also be composed.</p>
<h2 id='wallet-setup'>Wallet Setup</h2>
<blockquote>
<p>Sample blocknet.conf</p>
</blockquote>
<pre class="highlight plaintext"><code>listen=1
server=1
rpcallowip=127.0.0.1
rpcuser=user
rpcpassword=pass
port=41412
rpcport=41414
</code></pre>
<ol>
<li><a href="https://docs.blocknet.co/wallet/installation">Download and install</a> the <a href="https://github.com/blocknetdx/blocknet/releases/latest">latest Blocknet wallet</a>.</li>
<li>Open the wallet, <a href="https://docs.blocknet.co/wallet/encrypting">encrypt it</a>, and <a href="https://docs.blocknet.co/wallet/syncing">sync the blockchain</a>.

<ul>
<li>A <a href="https://github.com/blocknetdx/blocknet-blockchain-bootstrap">bootstrap</a> is also available for faster syncing.</li>
</ul></li>
<li>Compose <code>blocknet.conf</code> as seen in the sample.</li>
<li>Set an RPC username and password in <code>blocknet.conf</code>.</li>
<li>If using the XBridge API, see <a href="#xbridge-setup">XBridge Setup</a>.</li>
<li>If using the XRouter API, see <a href="#xrouter-setup">XRouter Setup</a>.</li>
</ol>
<h2 id='xbridge-setup'>XBridge Setup</h2>
<ol>
<li>Follow the <a href="https://docs.blocknet.co/protocol/xbridge/setup">XBridge Setup Guide</a>.</li>
<li>If any of the wallets are still open, they must be restarted in order to activate the new configurations.</li>
<li>Open, sync, and unlock the Blocknet wallet, as well as whichever blockchains will be interacted with.</li>
<li>Using the command line(cli), <a href="#xbridge-api">XBridge API calls</a> can now be made.</li>
<li>If also using the XRouter API, see <a href="#xrouter-setup">XRouter Setup</a>.</li>
</ol>

<p><strong>Note</strong>: Segwit and Bech32 addresses are not currently compatible. Staked (p2pk) inputs are not currently compatible. Integrations of these addresses and inputs are planned.</p>
<h2 id='xrouter-setup'>XRouter Setup</h2>
<p>If you would like to operate a Service Node and monetize any microservice, blockchain, API, or cloud tech on your own hardware, in many cases without having to write any code, see the <a href="https://docs.blocknet.co/service-nodes/setup">Service Node Setup Guide</a>.</p>

<blockquote>
<p>Sample blocknet.conf</p>
</blockquote>
<pre class="highlight plaintext"><code>xrouterbanscore=-200
listen=1
server=1
rpcallowip=127.0.0.1
rpcuser=user
rpcpassword=pass
port=41412
rpcport=41414
</code></pre>
<blockquote>
<p>Sample xrouter.conf</p>
</blockquote>
<pre class="highlight plaintext"><code>[Main]
timeout=30
consensus=1
maxfee=0.5

[BTC]
maxfee=0.03

[xrGetBlockCount]
maxfee=0.02
consensus=6

[SYS::xrGetBlockCount]
maxfee=0.02
</code></pre>
<ol>
<li>In <code>blocknet.conf</code>:

<ul>
<li>Use <code>xrouterbanscore</code> to specify the score a Service Node must drop below before it is banned. The default value is <code>-200</code>. Service Nodes are banned for a 24hr period, after which they&#39;ll start with a score of <code>-25</code>.</li>
</ul></li>
<li>Restart the Blocknet wallet.</li>
<li>Compose <code>xrouter.conf</code> as seen in the sample. All settings are optional.

<ul>
<li><code>timeout</code> - Defines how long (in seconds) your client waits for a response from a Service Node. The default value is <code>30</code>.</li>
<li><code>consensus</code> -  The number of Service Nodes that are used to route calls and use the majority response from for consensus. This can be overridden when making calls via the <code>node_count</code> parameter. The default value is <code>1</code>.</li>
<li><code>maxfee</code> - The maximum fee you are willing to pay for calls. Service Nodes with fees higher than your specified max fee will not be queried. The default value is <code>0</code> (i.e. free calls only). For now, all fees are paid in BLOCK.</li>
</ul></li>
<li>Values set under <code>[Main]</code> override the default values and become the new default settings for all subsections that don&#39;t have the respective setting specified. Subsection settings override <code>[Main]</code> and default settings. Blockchain-specific subsections have the highest priority and override all other settings. The setting hierarchy from highiest priority to lowest priority is as follows: <em>[BTC::xrGetBlockCount] &gt; [BTC] &gt; [xrGetBlockCount] &gt; [Main] &gt; default</em>. The higher priority settings override the lower priority settings.</li>
<li>Use <code>xrReloadConfigs</code> to apply changes to <code>xrouter.conf</code> without needing to restart the client.</li>
<li>Using the command line(cli), <a href="#xrouter-api">XRouter API calls</a> can now be made. To begin you can use <a href="#xrgetnetworkservices">xrGetNetworkServices</a> to view the supported SPV wallets (designated by the <code>xr::</code> namespace). To use services (designated by the <code>xrs::</code> namespace), see <a href="#xcloud-setup">XCloud Setup</a>.</li>
<li>If also using the XBridge API, see <a href="#xbridge-setup">XBridge Setup</a>.</li>
</ol>
<h2 id='xcloud-setup'>XCloud Setup</h2>
<p>If you would like to operate a Service Node and monetize any microservice, blockchain, API, or cloud tech on your own hardware, in many cases without having to write any code, see the <a href="https://docs.blocknet.co/service-nodes/setup">Service Node Setup Guide</a>.</p>

<blockquote>
<p>Sample xrouter.conf</p>
</blockquote>
<pre class="highlight plaintext"><code>[Main]
timeout=30
consensus=1
maxfee=0.5

[xrs::ServiceName]
maxfee=0.1
timeout=10
consensus=5
</code></pre>
<ol>
<li><a href="#setup-xrouter">Setup XRouter</a>. This is required since XCloud is built on top of XRouter.</li>
<li>In <code>xrouter.conf</code>, add settings for the services you would like to use. The subsection heading used the service name with the namespace as it&#39;s shown in the <code>services</code> array in the <a href="#xrgetnetworkservices">xrGetNetworkServices</a> response. All settings are optional.

<ul>
<li><code>timeout</code> - Defines how long (in seconds) your client waits for a response from a Service Node. The default value is <code>30</code>.</li>
<li><code>consensus</code> -  The number of Service Nodes that are used to route calls and use the majority response from for consensus. This can be overridden when making calls via the <code>node_count</code> parameter. The default value is <code>1</code>.</li>
<li><code>maxfee</code> - The maximum fee you are willing to pay for calls. Service Nodes with fees higher than your specified max fee will not be queried. The default value is <code>0</code> (i.e. free calls only). For now, all fees are paid in BLOCK.</li>
</ul></li>
<li>Values set under <code>[Main]</code> override the default values and become the new default settings for all subsections that don&#39;t have the respective setting specified. Service settings override <code>[Main]</code> and default settings. The setting hierarchy from highiest priority to lowest priority is as follows: <em>[xrs::ServiceName] &gt; [Main] &gt; default</em>. The higher priority settings override the lower priority settings.</li>
<li>Use <code>xrReloadConfigs</code> to apply changes to <code>xrouter.conf</code> without needing to restart the client.</li>
<li>Using the command line(cli) or console, <a href="#xcloud-api">XCloud API calls</a> can now be made. To begin, use <a href="#xrgetnetworkservices">xrGetNetworkServices</a> to view the calls under <code>services</code> and use <a href="#xrservice">xrService</a> or <a href="#xrserviceconsensus">xrServiceConsensus</a> to make the call.</li>
<li>If also using the XBridge API, see <a href="#xbridge-setup">XBridge Setup</a>.</li>
</ol>
<h1 id='xbridge-api'>XBridge API</h1>
<p>The following set of calls are used to conduct decentralized and trustless exchanges over the Blocknet network.</p>

<p>See <a href="#xbridge-setup">XBridge Setup</a> for instructions on setting up your environment for use with XBridge.</p>

<table><thead>
<tr>
<th>Call</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td><a href="#dxmakeorder">dxMakeOrder</a></td>
<td>Create an order</td>
</tr>
<tr>
<td><a href="#dxtakeorder">dxTakeOrder</a></td>
<td>Take an existing order</td>
</tr>
<tr>
<td><a href="#dxcancelorder">dxCancelOrder</a></td>
<td>Cancel your own order</td>
</tr>
<tr>
<td><a href="#dxgetorder">dxGetOrder</a></td>
<td>Returns order details by ID</td>
</tr>
<tr>
<td><a href="#dxgetorders">dxGetOrders</a></td>
<td>Returns all orders with details</td>
</tr>
<tr>
<td><a href="#dxgetmyorders">dxGetMyOrders</a></td>
<td>Returns all your own orders with details</td>
</tr>
<tr>
<td><a href="#dxflushcancelledorders">dxFlushCancelledOrders</a></td>
<td>Removes your cancelled orders</td>
</tr>
<tr>
<td><a href="#dxgetorderfills">dxGetOrderFills</a></td>
<td>Returns all recent filled orders</td>
</tr>
<tr>
<td><a href="#dxgetorderhistory">dxGetOrderHistory</a></td>
<td>Returns the OHLCV data my market</td>
</tr>
<tr>
<td><a href="#dxgetlocaltokens">dxGetLocalTokens</a></td>
<td>Returns all assets connected locally</td>
</tr>
<tr>
<td><a href="#dxgetnetworktokens">dxGetNetworkTokens</a></td>
<td>Returns all assets connected on the network</td>
</tr>
<tr>
<td><a href="#dxgettokenbalances">dxGetTokenBalances</a></td>
<td>Returns available balances for your assets</td>
</tr>
<tr>
<td><a href="#dxgetnewtokenaddress">dxGetNewTokenAddress</a></td>
<td>Returns a newly generated address</td>
</tr>
<tr>
<td><a href="#dxgetorderbook">dxGetOrderBook</a></td>
<td>Returns open orders</td>
</tr>
<tr>
<td><a href="#dxloadxbridgeConf">dxLoadXBridgeConf</a></td>
<td>Reloads the <code>xbridge.conf</code></td>
</tr>
<tr>
<td><a href="#dxgettradingdata">dxGetTradingData</a></td>
<td>Returns on-chain trading records</td>
</tr>
<tr>
<td><a href="#status-codes">Status Codes</a></td>
<td>XBridge order status codes</td>
</tr>
<tr>
<td><a href="#error-codes">Error Codes</a></td>
<td>Error codes</td>
</tr>
</tbody></table>
<h2 id='dxmakeorder'>dxMakeOrder</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "maker": "SYS",
  "maker_size": "0.100",
  "maker_address": "SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK",
  "taker": "LTC",
  "taker_size": "0.01",
  "taker_address": "LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z",
  "type": "exact"
}
</code></pre>
<p>This call is used to create a new order. Only assets returned in <a href="#dxgetlocaltokens">dxGetLocalTokens</a> can be used for the maker and taker asset. If an asset is not showing, it has not been properly configured (refer back to #2 in <a href="#xbridge-setup">XBridge Setup</a>. Use <a href="#dxgetnetworktokens">dxGetNetworkTokens</a> to view all the assets currently supported on the network.</p>

<p>There are no fees to make orders, but there are transaction fees for the maker asset&#39;s native network.</p>

<p><strong>Note</strong>: XBridge will first attempt use funds from the specified maker address. If this address does not have sufficient funds to cover the order, then it will pull funds from other addresses in the wallet. Change is deposited to the address with the largest input used. There are plans to add the capability of strictly only using funds from the specified address.</p>
<h3 id='request-parameters'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli dxMakeOrder SYS 0.100 SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK LTC 0.01 LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z exact
</code></pre>
<p><code class="api-call">dxMakeOrder [maker] [maker_size] [maker_address] [taker] [taker_size] [taker_address] [type] [dryrun](optional)</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>maker</td>
<td>string</td>
<td>Maker trading asset; the ticker of the asset being sold by the maker.</td>
</tr>
<tr>
<td>maker_size</td>
<td>string(float)</td>
<td>Maker trading size. String is used to preserve precision.</td>
</tr>
<tr>
<td>maker_address</td>
<td>string</td>
<td>Maker address for sending the outgoing asset.</td>
</tr>
<tr>
<td>taker</td>
<td>string</td>
<td>Taker trading asset; the ticker of the asset being sold by the taker.</td>
</tr>
<tr>
<td>taker_size</td>
<td>string(float)</td>
<td>Taker trading size. String is used to preserve precision.</td>
</tr>
<tr>
<td>taker_address</td>
<td>string</td>
<td>Maker address for receiving the incoming asset.</td>
</tr>
<tr>
<td>type</td>
<td>string</td>
<td>This is the order type.<br><code>exact</code>: Matches a specific order. <br><code>limit</code>: (not yet supported) <br><code>market</code>: (not yet supported)</td>
</tr>
<tr>
<td>dryrun</td>
<td>string</td>
<td>(Optional Parameter)<br><code>dryrun</code>: Validate the order without actually submitting the order to the network.</td>
</tr>
</tbody></table>
<h3 id='response-parameters'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "id": "4306aa07113c4562ffa6278ecd9a3990ead53a0227f74ddd9122272e453ae07d",
  "maker": "SYS",
  "maker_size": "0.100",
  "maker_address": "SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK",
  "taker": "LTC",
  "taker_size": "0.01",
  "taker_address": "LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z",
  "updated_at": "2018-01-16T00:00:00.00000Z",
  "created_at": "2018-01-15T18:15:30.12345Z",
  "block_id": "38729344720578447445023782734923740427863289632489723984723",
  "status": "created"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>id</td>
<td>string</td>
<td>The order ID.</td>
</tr>
<tr>
<td>maker</td>
<td>string</td>
<td>Maker trading asset; the ticker of the asset being sold by the maker.</td>
</tr>
<tr>
<td>maker_size</td>
<td>string(float)</td>
<td>Maker trading size. String is used to preserve precision.</td>
</tr>
<tr>
<td>maker_address</td>
<td>string</td>
<td>Maker address for sending the outgoing asset.</td>
</tr>
<tr>
<td>taker</td>
<td>string</td>
<td>Taker trading asset; the ticker of the asset being sold by the taker.</td>
</tr>
<tr>
<td>taker_size</td>
<td>string(float)</td>
<td>Taker trading size. String is used to preserve precision.</td>
</tr>
<tr>
<td>taker_address</td>
<td>string</td>
<td>Maker address for receiving the incoming asset.</td>
</tr>
<tr>
<td>updated_at</td>
<td>string</td>
<td>ISO 8601 datetime, with microseconds, of the last time the order was updated.</td>
</tr>
<tr>
<td>created_at</td>
<td>string</td>
<td>ISO 8601 datetime, with microseconds, of when the order was created.</td>
</tr>
<tr>
<td>block_id</td>
<td>string</td>
<td>The block hash of the current block on the Blocknet blockchain at the time the order was created.</td>
</tr>
<tr>
<td>status</td>
<td>string</td>
<td><a href="#status-codes">View order status codes</a></td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 400 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Invalid parameters: Minimum supported size is 0.000001",
  "code": 1025,
  "name": "dxMakeOrder"
}
</code></pre>
<aside class="warning">
400 Bad Request
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 500 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxMakeOrder"
}
</code></pre>
<aside class="warning">
500 Internal Server Error
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<aside class="warning">
Error Codes
</aside>

<table><thead>
<tr>
<th>Code</th>
<th>Type</th>
<th>Error</th>
</tr>
</thead><tbody>
<tr>
<td>1001</td>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>1011</td>
<td>400</td>
<td>Invalid maker symbol</td>
</tr>
<tr>
<td>1012</td>
<td>400</td>
<td>Invalid taker symbol</td>
</tr>
<tr>
<td>1018</td>
<td>400</td>
<td>Unable to connect to wallet</td>
</tr>
<tr>
<td>1024</td>
<td>400</td>
<td>Size must be greater than 0</td>
</tr>
<tr>
<td>1025</td>
<td>400</td>
<td>Invalid parameters</td>
</tr>
<tr>
<td>1026</td>
<td>400</td>
<td>Bad address</td>
</tr>
<tr>
<td>1002</td>
<td>500</td>
<td>Internal server error</td>
</tr>
</tbody></table>
<h2 id='dxtakeorder'>dxTakeOrder</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "id": "4306aa07113c4562ffa6278ecd9a3990ead53a0227f74ddd9122272e453ae07d",
  "send_address": "LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z",
  "receive_address": "SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK",
  "dryrun": "dryrun"
}
</code></pre>
<p>This call is used to take an order. Taking your own order is currently not supported. Only assets returned in <a href="#dxgetlocaltokens">dxGetLocalTokens</a> can be used for the maker and taker asset. If an asset is not showing, it has not been properly configured (refer back to #2 in <a href="#xbridge-setup">XBridge Setup</a>. Use <a href="#dxgetnetworktokens">dxGetNetworkTokens</a> to view all the assets currently supported on the network.</p>

<p>Taking an order has a 0.015 BLOCK fee. There are also transaction fees for the taker asset&#39;s native network. If the taker asset is BLOCK, there needs to be <em>at least</em> two UXTOs - one or more to cover the 0.015 BLOCK fee and one or more to cover the traded amount.</p>

<p><strong>Note</strong>: XBridge will first attempt use funds from the specified send address. If this address does not have sufficient funds to cover the order, then it will pull funds from other addresses in the wallet. Change is deposited to the address with the largest input used. There are plans to add the capability of strictly only using funds from the specified address.</p>
<h3 id='request-parameters-2'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli dxTakeOrder 4306aa07113c4562ffa6278ecd9a3990ead53a0227f74ddd9122272e453ae07d LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK
</code></pre>
<p><code class="api-call">dxTakeOrder [order_id] [send_address] [receive_address] [dryrun](optional)</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>id</td>
<td>string</td>
<td>ID of order being filled.</td>
</tr>
<tr>
<td>send_address</td>
<td>string</td>
<td>Taker address for sending the outgoing asset.</td>
</tr>
<tr>
<td>receive_address</td>
<td>string</td>
<td>Taker address for receiving the incoming asset.</td>
</tr>
<tr>
<td>dryrun</td>
<td>string</td>
<td>(Optional Parameter) <br><code>dryrun</code>: Validate the order without actually submitting the order to the network.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-2'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "id": "4306aa07113c4562ffa6278ecd9a3990ead53a0227f74ddd9122272e453ae07d",
  "maker": "SYS",
  "maker_size": "0.100",
  "taker": "LTC",
  "taker_size": "0.01",
  "updated_at": "1970-01-01T00:00:00.00000Z",
  "created_at": "2018-01-15T18:15:30.12345Z",
  "status": "finished"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>id</td>
<td>string</td>
<td>The order ID.</td>
</tr>
<tr>
<td>maker</td>
<td>string</td>
<td>Maker trading asset; the ticker of the asset being sold by the maker.</td>
</tr>
<tr>
<td>maker_size</td>
<td>string(float)</td>
<td>Maker trading size. String is used to preserve precision.</td>
</tr>
<tr>
<td>taker</td>
<td>string</td>
<td>Taker trading asset; the ticker of the asset being sold by the taker.</td>
</tr>
<tr>
<td>taker_size</td>
<td>string(float)</td>
<td>Taker trading size. String is used to preserve precision.</td>
</tr>
<tr>
<td>updated_at</td>
<td>string</td>
<td>ISO 8601 datetime, with microseconds, of the last time the order was updated.</td>
</tr>
<tr>
<td>created_at</td>
<td>string</td>
<td>ISO 8601 datetime, with microseconds, of when the order was created.</td>
</tr>
<tr>
<td>status</td>
<td>string</td>
<td>Order status: <code>finished</code></td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 400 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Transaction 4306aa07113c4562ffa6278ecd9a3990ead53a0227f74ddd9122272e453ae07d not found",
  "code": 1021,
  "name": "dxTakeOrder"
}
</code></pre>
<aside class="warning">
400 Bad Request
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 500 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxTakeOrder"
}
</code></pre>
<aside class="warning">
500 Internal Server Error
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<aside class="warning">
Error Codes
</aside>

<table><thead>
<tr>
<th>Code</th>
<th>Type</th>
<th>Error</th>
</tr>
</thead><tbody>
<tr>
<td>1001</td>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>1011</td>
<td>400</td>
<td>Invalid maker symbol</td>
</tr>
<tr>
<td>1012</td>
<td>400</td>
<td>Invalid taker symbol</td>
</tr>
<tr>
<td>1020</td>
<td>400</td>
<td>Invalid order</td>
</tr>
<tr>
<td>1021</td>
<td>400</td>
<td>Invalid order id</td>
</tr>
<tr>
<td>1025</td>
<td>400</td>
<td>Invalid parameters</td>
</tr>
<tr>
<td>1026</td>
<td>400</td>
<td>Bad address</td>
</tr>
<tr>
<td>1002</td>
<td>500</td>
<td>Internal server error</td>
</tr>
</tbody></table>
<h2 id='dxcancelorder'>dxCancelOrder</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "id": "91d0ea83edc79b9a2041c51d08037cff87c181efb311a095dfdd4edbcc7993a9"
}
</code></pre>
<p>This call is used to cancel one of your own orders, which automatically rolls back the order if a trade is in process.</p>
<h3 id='request-parameters-3'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli dxCancelOrder 91d0ea83edc79b9a2041c51d08037cff87c181efb311a095dfdd4edbcc7993a9
</code></pre>
<p><code class="api-call">dxCancelOrder [order_id]</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>id</td>
<td>string</td>
<td>ID of order being cancelled.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-3'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "id": "91d0ea83edc79b9a2041c51d08037cff87c181efb311a095dfdd4edbcc7993a9",
  "maker": "SYS",
  "maker_size": "0.100",
  "maker_address": "SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK",
  "taker": "LTC",
  "taker_size": "0.01",
  "taker_address": "LVvFhzRoMRGTtGihHp7jVew3YoZRX8y35Z",
  "updated_at": "1970-01-01T00:00:00.00000Z",
  "created_at": "2018-01-15T18:15:30.12345Z",
  "status": "canceled"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>id</td>
<td>string</td>
<td>The order ID.</td>
</tr>
<tr>
<td>maker</td>
<td>string</td>
<td>Sending asset of party cancelling the order.</td>
</tr>
<tr>
<td>maker_size</td>
<td>string(float)</td>
<td>Sending trading size. String is used to preserve precision.</td>
</tr>
<tr>
<td>maker_address</td>
<td>string</td>
<td>Address for sending the outgoing asset.</td>
</tr>
<tr>
<td>taker</td>
<td>string</td>
<td>Receiving asset of party cancelling the order.</td>
</tr>
<tr>
<td>taker_size</td>
<td>string(float)</td>
<td>Receiving trading size. String is used to preserve precision.</td>
</tr>
<tr>
<td>taker_address</td>
<td>string</td>
<td>Address for receiving the incoming asset.</td>
</tr>
<tr>
<td>updated_at</td>
<td>string</td>
<td>ISO 8601 datetime, with microseconds, of the last time the order was updated.</td>
</tr>
<tr>
<td>created_at</td>
<td>string</td>
<td>ISO 8601 datetime, with microseconds, of when the order was created.</td>
</tr>
<tr>
<td>status</td>
<td>string</td>
<td><a href="#status-codes">View order status codes</a></td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 400 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Invalid order id",
  "code": 1021,
  "name": "dxCancelOrder"
}
</code></pre>
<aside class="warning">
400 Bad Request
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 500 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxCancelOrder"
}
</code></pre>
<aside class="warning">
500 Internal Server Error
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<aside class="warning">
Error Codes
</aside>

<table><thead>
<tr>
<th>Code</th>
<th>Type</th>
<th>Error</th>
</tr>
</thead><tbody>
<tr>
<td>1001</td>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>1021</td>
<td>400</td>
<td>Invalid order id</td>
</tr>
<tr>
<td>1025</td>
<td>400</td>
<td>Invalid parameters</td>
</tr>
<tr>
<td>1002</td>
<td>500</td>
<td>Internal server error</td>
</tr>
</tbody></table>
<h2 id='dxgetorder'>dxGetOrder</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "id": "6be548bc46a3dcc69b6d56529948f7e679dd96657f85f5870a017e005caa050a"
}
</code></pre>
<p>This call is used to retrieve order info.</p>
<h3 id='request-parameters-4'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli dxGetOrder 6be548bc46a3dcc69b6d56529948f7e679dd96657f85f5870a017e005caa050a
</code></pre>
<p><code class="api-call">dxGetOrder [order_id]</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>id</td>
<td>string</td>
<td>ID of order of interest.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-4'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "id": "6be548bc46a3dcc69b6d56529948f7e679dd96657f85f5870a017e005caa050a",
  "maker": "SYS",
  "maker_size": "0.100",
  "taker": "LTC",
  "taker_size": "0.01",
  "updated_at": "1970-01-01T00:00:00.00000Z",
  "created_at": "2018-01-15T18:15:30.12345Z",
  "status": "open"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>id</td>
<td>string</td>
<td>The order ID.</td>
</tr>
<tr>
<td>maker</td>
<td>string</td>
<td>Maker trading asset; the ticker of the asset being sold by the maker.</td>
</tr>
<tr>
<td>maker_size</td>
<td>string(float)</td>
<td>Maker trading size. String is used to preserve precision.</td>
</tr>
<tr>
<td>taker</td>
<td>string</td>
<td>Taker trading asset; the ticker of the asset being sold by the taker.</td>
</tr>
<tr>
<td>taker_size</td>
<td>string(float)</td>
<td>Taker trading size. String is used to preserve precision.</td>
</tr>
<tr>
<td>updated_at</td>
<td>string</td>
<td>ISO 8601 datetime, with microseconds, of the last time the order was updated.</td>
</tr>
<tr>
<td>created_at</td>
<td>string</td>
<td>ISO 8601 datetime, with microseconds, of when the order was created.</td>
</tr>
<tr>
<td>status</td>
<td>string</td>
<td><a href="#status-codes">View order status codes</a></td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 400 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Invalid order id",
  "code": 1021,
  "name": "dxGetOrder"
}
</code></pre>
<aside class="warning">
400 Bad Request
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 500 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetOrder"
}
</code></pre>
<aside class="warning">
500 Internal Server Error
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<aside class="warning">
Error Codes
</aside>

<table><thead>
<tr>
<th>Code</th>
<th>Type</th>
<th>Error</th>
</tr>
</thead><tbody>
<tr>
<td>1001</td>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>1021</td>
<td>400</td>
<td>Invalid order id</td>
</tr>
<tr>
<td>1025</td>
<td>400</td>
<td>Invalid parameters</td>
</tr>
<tr>
<td>1002</td>
<td>500</td>
<td>Internal server error</td>
</tr>
</tbody></table>
<h2 id='dxgetorders'>dxGetOrders</h2>
<p>This call is used to retrieve all orders of every market pair. It will only return orders for assets returned in dxGetLocalTokens.</p>

<p><strong>Note</strong>: This call will only return orders for markets with both assets returned in dxGetLocalTokens.</p>
<h3 id='request-parameters-5'>Request Parameters</h3>
<blockquote>
<p>Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli dxGetOrders
</code></pre>
<p><code class="api-call">dxGetOrders</code></p>

<p>This call does not take parameters.</p>
<h3 id='response-parameters-5'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>[
  {
    "id": "91d0ea83edc79b9a2041c51d08037cff87c181efb311a095dfdd4edbcc7993a9", 
    "maker": "SYS",
    "maker_size": "0.100",
    "taker": "LTC",
    "taker_size": "0.01",
    "updated_at": "2018-01-15T18:25:05.12345Z", 
    "created_at": "2018-01-15T18:15:30.12345Z", 
    "status": "finished"
  },
  {
    "id": "a1f40d53f75357eb914554359b207b7b745cf096dbcb028eb77b7b7e4043c6b4", 
    "maker": "SYS",
    "maker_size": "0.100",
    "taker": "LTC",
    "taker_size": "0.01",
    "updated_at": "2018-01-15T18:25:05.12345Z", 
    "created_at": "2018-01-15T18:15:30.12345Z", 
    "status": "finished"
  },
  {
    "id": "6be548bc46a3dcc69b6d56529948f7e679dd96657f85f5870a017e005caa050a", 
    "maker": "SYS",
    "maker_size": "0.100",
    "taker": "LTC",
    "taker_size": "0.01",
    "updated_at": "2018-01-15T18:25:05.12345Z", 
    "created_at": "2018-01-15T18:15:30.12345Z", 
    "status": "finished"
  }
]
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>Array</td>
<td>array</td>
<td>An array of all orders with each order having the following parameters.</td>
</tr>
<tr>
<td>id</td>
<td>string</td>
<td>The order ID.</td>
</tr>
<tr>
<td>maker</td>
<td>string</td>
<td>Maker trading asset; the ticker of the asset being sold by the maker.</td>
</tr>
<tr>
<td>maker_size</td>
<td>string(float)</td>
<td>Maker trading size. String is used to preserve precision.</td>
</tr>
<tr>
<td>taker</td>
<td>string</td>
<td>Taker trading asset; the ticker of the asset being sold by the taker.</td>
</tr>
<tr>
<td>taker_size</td>
<td>string(float)</td>
<td>Taker trading size. String is used to preserve precision.</td>
</tr>
<tr>
<td>updated_at</td>
<td>string</td>
<td>ISO 8601 datetime, with microseconds, of the last time the order was updated.</td>
</tr>
<tr>
<td>created_at</td>
<td>string</td>
<td>ISO 8601 datetime, with microseconds, of when the order was created.</td>
</tr>
<tr>
<td>status</td>
<td>string</td>
<td><a href="#status-codes">View order status codes</a></td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 400 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Invalid parameters: This function does not accept any parameters",
  "code": 1025,
  "name": "dxGetOrders"
}
</code></pre>
<aside class="warning">
400 Bad Request
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 500 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetOrders"
}
</code></pre>
<aside class="warning">
500 Internal Server Error
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<aside class="warning">
Error Codes
</aside>

<table><thead>
<tr>
<th>Code</th>
<th>Type</th>
<th>Error</th>
</tr>
</thead><tbody>
<tr>
<td>1001</td>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>1025</td>
<td>400</td>
<td>Invalid parameters</td>
</tr>
<tr>
<td>1002</td>
<td>500</td>
<td>Internal server error</td>
</tr>
</tbody></table>
<h2 id='dxgetmyorders'>dxGetMyOrders</h2>
<p>This call is used to retrieve all of your orders (of all states) from the local client. It will only return orders from your current session.</p>
<h3 id='request-parameters-6'>Request Parameters</h3>
<blockquote>
<p>Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli dxGetMyOrders
</code></pre>
<p><code class="api-call">dxGetMyOrders</code></p>

<p>This call does not take parameters.</p>
<h3 id='response-parameters-6'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>[
  {
    "id": "91b7da4eda3e5d4a7de8a67d8e7a8d768ea567da5e467d4ea7a6d7a6d7a6d75a", 
    "maker": "SYS",
    "maker_size": "0.100",
    "taker": "LTC",
    "taker_size": "0.01",
    "updated_at": "2018-01-15T18:25:35.12345Z", 
    "created_at": "2018-01-15T18:15:37.12345Z", 
    "status": "finished"
  },
  {
    "id": "c3d0ea83edc79b9a2041c51d08037cff87c181efb311a095dfdd4edbcc7993a9", 
    "maker": "SYS",
    "maker_size": "0.100",
    "taker": "LTC",
    "taker_size": "0.01",
    "updated_at": "2018-01-15T18:25:25.12345Z", 
    "created_at": "2018-01-15T18:15:32.12345Z", 
    "status": "finished"
  },
  {
    "id": "3ef40d53f75357eb914554359b207b7b745cf096dbcb028eb77b7b7e4043c6b4", 
    "maker": "SYS",
    "maker_size": "0.100",
    "taker": "LTC",
    "taker_size": "0.01",
    "updated_at": "2018-01-15T18:25:52.12345Z", 
    "created_at": "2018-01-15T18:15:26.12345Z", 
    "status": "finished"
  }
]
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>Array</td>
<td>array</td>
<td>An array of all orders with each order having the following parameters.</td>
</tr>
<tr>
<td>id</td>
<td>string</td>
<td>The order ID.</td>
</tr>
<tr>
<td>maker</td>
<td>string</td>
<td>Maker trading asset; the ticker of the asset being sold by the maker.</td>
</tr>
<tr>
<td>maker_size</td>
<td>string(float)</td>
<td>Maker trading size. String is used to preserve precision.</td>
</tr>
<tr>
<td>maker_address</td>
<td>string</td>
<td>Address for sending the outgoing asset.</td>
</tr>
<tr>
<td>taker</td>
<td>string</td>
<td>Taker trading asset; the ticker of the asset being sold by the taker.</td>
</tr>
<tr>
<td>taker_size</td>
<td>string(float)</td>
<td>Taker trading size. String is used to preserve precision.</td>
</tr>
<tr>
<td>taker_address</td>
<td>string</td>
<td>Address for receiving the incoming asset.</td>
</tr>
<tr>
<td>updated_at</td>
<td>string</td>
<td>ISO 8601 datetime, with microseconds, of the last time the order was updated.</td>
</tr>
<tr>
<td>created_at</td>
<td>string</td>
<td>ISO 8601 datetime, with microseconds, of when the order was created.</td>
</tr>
<tr>
<td>status</td>
<td>string</td>
<td><a href="#status-codes">View order status codes</a></td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 400 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Invalid parameters: This function does not accept any parameters",
  "code": 1025,
  "name": "dxGetMyOrders"
}
</code></pre>
<aside class="warning">
400 Bad Request
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 500 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetMyOrders"
}
</code></pre>
<aside class="warning">
500 Internal Server Error
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<aside class="warning">
Error Codes
</aside>

<table><thead>
<tr>
<th>Code</th>
<th>Type</th>
<th>Error</th>
</tr>
</thead><tbody>
<tr>
<td>1001</td>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>1025</td>
<td>400</td>
<td>Invalid parameters</td>
</tr>
<tr>
<td>1002</td>
<td>500</td>
<td>Internal server error</td>
</tr>
</tbody></table>
<h2 id='dxflushcancelledorders'>dxFlushCancelledOrders</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "ageMillis": 600000
}
</code></pre>
<p>This call is used to remove your cancelled orders that are older than the specified amount of time.</p>
<h3 id='request-parameters-7'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli dxFlushCancelledOrders 600000
</code></pre>
<p><code class="api-call">dxFlushCancelledOrders [ageMillis](optional)</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>ageMillis</td>
<td>int</td>
<td>(Optional Parameter) Defaults to <code>0</code>.<br>Remove cancelled orders older than this amount of milliseconds. If <code>0</code>, all cancelled orders will be removed.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-7'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "ageMillis": 0,
  "now": "20191126T024005.352285",
  "durationMicrosec": 0,
  "flushedOrders": [
    {
      "id": "582a02ada05c8a4bb39b34de0eb54767bcb95a7792e5865d3a0babece4715f47",
      "txtime": "20191126T023945.855058",
      "use_count": 1
    },
    {
      "id": "a508cd8d110bdc0b1fd819a89d94cdbf702e3aa40edbe654af5d556ff3c43a0a",
      "txtime": "20191126T023956.270409",
      "use_count": 1
    }
  ]
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>ageMillis</td>
<td>int</td>
<td>The millisecond value specified when making the call.</td>
</tr>
<tr>
<td>now*</td>
<td>string</td>
<td>ISO 8601 datetime, with microseconds, of when the call was executed.</td>
</tr>
<tr>
<td>durationMicrosec*</td>
<td>int</td>
<td>The amount of time in milliseconds it took to process the call.</td>
</tr>
<tr>
<td>flushedOrders</td>
<td>array</td>
<td>Array of cancelled orders that were removed.</td>
</tr>
<tr>
<td>id</td>
<td>string</td>
<td>The order ID.</td>
</tr>
<tr>
<td>txtime</td>
<td>string</td>
<td>ISO 8601 datetime, with microseconds, of when the order was created.</td>
</tr>
<tr>
<td>use_count*</td>
<td>int</td>
<td>This value is strictly for debugging purposes.</td>
</tr>
</tbody></table>

<p>* For debugging pruposes</p>

<blockquote>
<p>Sample 400 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Invalid parameters: ageMillis must be an integer &gt;= 0",
  "code": 1025,
  "name": "dxFlushCancelledOrders"
}
</code></pre>
<aside class="warning">
400 Bad Request
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 500 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxFlushCancelledOrders"
}
</code></pre>
<aside class="warning">
500 Internal Server Error
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<aside class="warning">
Error Codes
</aside>

<table><thead>
<tr>
<th>Code</th>
<th>Type</th>
<th>Error</th>
</tr>
</thead><tbody>
<tr>
<td>1001</td>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>1011</td>
<td>400</td>
<td>Invalid maker symbol</td>
</tr>
<tr>
<td>1012</td>
<td>400</td>
<td>Invalid taker symbol</td>
</tr>
<tr>
<td>1025</td>
<td>400</td>
<td>Invalid parameters</td>
</tr>
<tr>
<td>1002</td>
<td>500</td>
<td>Internal server error</td>
</tr>
</tbody></table>
<h2 id='dxgetorderfills'>dxGetOrderFills</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "maker": "SYS",
  "taker": "LTC",
  "combined": false
}
</code></pre>
<p>This call is used to retrieve all recent filled orders by a given trade pair. It will only return orders that have been filled in your current session.</p>
<h3 id='request-parameters-8'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli dxGetOrderFills SYS LTC false
</code></pre>
<p><code class="api-call">dxGetOrderFills [maker] [taker] [combined](optional)</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>maker</td>
<td>string</td>
<td>Maker trading asset; the ticker of the asset being sold by the maker.</td>
</tr>
<tr>
<td>taker</td>
<td>string</td>
<td>Taker trading asset; the ticker of the asset being sold by the taker.</td>
</tr>
<tr>
<td>combines</td>
<td>boolean</td>
<td>(Optional Parameter) Defaults to <code>true</code>.<br><code>true</code>: Receive filled orders for both the maker and taker assets as specified, as well as the inverse with the maker asset as the taker and the taker asset as the maker.<br><code>false</code>: Receive filled orders only with the maker and taker assets as specified.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-8'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>[
  {
    "id": "a1f40d53f75357eb914554359b207b7b745cf096dbcb028eb77b7b7e4043c6b4",
    "time": "2018-01-16T13:15:05.12345Z",
    "maker": "SYS",
    "maker_size": "101.00000000",
    "taker": "LTC",
    "taker_size": "0.01000000"
  },
  {
    "id": "91d0ea83edc79b9a2041c51d08037cff87c181efb311a095dfdd4edbcc7993a9",
    "time": "2018-01-16T13:15:05.12345Z",
    "maker": "LTC",
    "maker_size": "0.01000000",
    "taker": "SYS",
    "taker_size": "101.00000000"
  }
]
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>Array</td>
<td>array</td>
<td>Array of orders sorted by date descending (most recent filled trade first).</td>
</tr>
<tr>
<td>id</td>
<td>string</td>
<td>The order ID.</td>
</tr>
<tr>
<td>time</td>
<td>string</td>
<td>Time the order was filled.</td>
</tr>
<tr>
<td>maker</td>
<td>string</td>
<td>Maker trading asset; the ticker of the asset being sold by the maker.</td>
</tr>
<tr>
<td>maker_size</td>
<td>string(float)</td>
<td>Maker trading size. String is used to preserve precision.</td>
</tr>
<tr>
<td>taker</td>
<td>string</td>
<td>Taker trading asset; the ticker of the asset being sold by the taker.</td>
</tr>
<tr>
<td>taker_size</td>
<td>string(float)</td>
<td>Taker trading size. String is used to preserve precision.</td>
</tr>
</tbody></table>

<!-- 
maker_txid    | string        | The transaction ID(hash) of maker asset on the asset's network.
  "maker_txid": "f2b1ebf45b81da67171bfc55f34c20c9bbc55d8234b8f5c61d0965f61e3c3156",
taker_txid    | string        | The transaction ID(hash) of taker asset on the asset's network.
  "taker_txid": "bcb7543c2f66777927899e701c8309be77904b9c0ef286791fb1a1813bb9099d",
block_id      | string        | Blocknet block hash ID at the time the order was filled.
  "block_id": "69a1f3bc5031e55800a37062d3c74c017cf233730e7c00813f5cbe7d9d7d0230"
 -->

<blockquote>
<p>Sample 400 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Invalid parameters: (maker) (taker) (combined, default=true)[optional]",
  "code": 1025,
  "name": "dxGetOrderFills"
}
</code></pre>
<aside class="warning">
400 Bad Request
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 500 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetOrderFills"
}
</code></pre>
<aside class="warning">
500 Internal Server Error
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<aside class="warning">
Error Codes
</aside>

<table><thead>
<tr>
<th>Code</th>
<th>Type</th>
<th>Error</th>
</tr>
</thead><tbody>
<tr>
<td>1001</td>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>1011</td>
<td>400</td>
<td>Invalid maker symbol</td>
</tr>
<tr>
<td>1012</td>
<td>400</td>
<td>Invalid taker symbol</td>
</tr>
<tr>
<td>1025</td>
<td>400</td>
<td>Invalid parameters</td>
</tr>
<tr>
<td>1002</td>
<td>500</td>
<td>Internal server error</td>
</tr>
</tbody></table>
<h2 id='dxgetorderhistory'>dxGetOrderHistory</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "maker": "SYS",
  "taker": "LTC",
  "start_time": 1540660180,
  "end_time": 1540660420,
  "granularity": 60
}
</code></pre>
<p>This call is used to retrieve the OHLCV data by a trade pair within a specified time range. It can return the order history for any <a href="https://docs.blocknet.co/protocol/xbridge/compatibility/#supported-digital-assets">compatible asset</a> since all trade history is stored on-chain.</p>
<h3 id='request-parameters-9'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli dxGetOrderHistory SYS LTC 1540660180 1540660420 60 true
</code></pre>
<p><code class="api-call">dxGetOrderHistory [maker] [taker] [start_time] [end_time] [granularity] [order_ids](optional) [with_inverse](optional) [limit](optional)</code></p>

<!-- 
<code class="api-call">dxGetOrderHistory [maker] [taker] [start_time] [end_time] [granularity] [order_ids]\(optional) [with_inverse]\(optional) [limit]\(optional) [interval_timestamp]\(optional)</code>
 -->

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>maker</td>
<td>string</td>
<td>Maker trading asset; the ticker of the asset being sold by the maker.</td>
</tr>
<tr>
<td>taker</td>
<td>string</td>
<td>Taker trading asset; the ticker of the asset being sold by the taker.</td>
</tr>
<tr>
<td>start_time</td>
<td>int</td>
<td>Start time(Unix time) representing the lower boundary to search.</td>
</tr>
<tr>
<td>end_time</td>
<td>int</td>
<td>End time(Unix time) representing the upper boundary to search.</td>
</tr>
<tr>
<td>granularity</td>
<td>int</td>
<td>Time interval slice in seconds: <br><code>60</code>, <code>300</code>, <code>900</code>, <code>3600</code>, <code>21600</code>, <code>86400</code></td>
</tr>
<tr>
<td>order_ids</td>
<td>bool</td>
<td>(Optional Parameter) Defaults to <code>false</code>.<br><code>true</code>: Receive the GUIDs of all filled orders in each slice.<br><code>false</code>: Do not receive the order GUIDs.</td>
</tr>
<tr>
<td>with_inverse</td>
<td>bool</td>
<td>(Optional Parameter) Defaults to <code>false</code>.<br><code>false</code>: Returns the orders in the specified market pair.<br><code>true</code>: Returns the orders in the inverse pair too, e.g. LTC SYS -&gt; SYS LTC would be returned as well.</td>
</tr>
<tr>
<td>limit</td>
<td>int</td>
<td>(Optional Parameter) Defaults to <code>2147483647</code>.<br>The max number of interval slices returned.</td>
</tr>
</tbody></table>

<!-- 
add parameter as option in call parameters above (currently uncommented)

interval_timestamp | string | (Optional Parameter) Defaults to `at_start`.<br>`at_start`: Description.<br>`at_end`: Description.

at_start means all orders that fall in the specified number up to the next time interval. at_end means all the orders that happened in the time interval immediately prior to the specified number
 -->
<h3 id='response-parameters-9'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>[
  //[ time, low, high, open, close, volume, id(s) ],
  [ "2018-01-16T13:15:05.12345Z", 1.10, 2.0, 1.10, 1.4, 1000, [ "0cc2e8a7222f1416cda996031ca21f67b53431614e89651887bc300499a6f83e" ] ],
  [ "2018-01-16T14:15:05.12345Z", 0, 0, 0, 0, 0, [] ],
  [ "2018-01-16T15:15:05.12345Z", 1.12, 2.2, 1.10, 1.4, 1000, [ "91d0ea83edc79b9a2041c51d08037cff87c181efb311a095dfdd4edbcc7993a9", "0cc2e8a7222f1416cda996031ca21f67b53431614e89651887bc300499a6f83e", "a1f40d53f75357eb914554359b207b7b745cf096dbcb028eb77b7b7e4043c6b4" ] ],
  [ "2018-01-16T16:15:05.12345Z", 1.14, 2.0, 1.10, 1.4, 1000, [ "a1f40d53f75357eb914554359b207b7b745cf096dbcb028eb77b7b7e4043c6b4" ] ],
  [ "2018-01-16T17:15:05.12345Z", 1.15, 2.0, 1.10, 1.4, 1000, [ "6be548bc46a3dcc69b6d56529948f7e679dd96657f85f5870a017e005caa050a" ] ]
]
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>time</td>
<td>string</td>
<td>ISO 8601 datetime, with microseconds, of the time at the beginning of the time slice.</td>
</tr>
<tr>
<td>low</td>
<td>float64</td>
<td>Exchange rate lower bound within the time slice.</td>
</tr>
<tr>
<td>high</td>
<td>float64</td>
<td>Exchange rate upper bound within the time slice.</td>
</tr>
<tr>
<td>open</td>
<td>float64</td>
<td>Exchange rate of first filled order at the beginning of the time slice.</td>
</tr>
<tr>
<td>close</td>
<td>float64</td>
<td>Exchange rate of last filled order at the end of the time slice.</td>
</tr>
<tr>
<td>volume</td>
<td>int64</td>
<td>Total volume of the taker asset within the time slice.</td>
</tr>
<tr>
<td>order_ids</td>
<td>array</td>
<td>Array of GUIDs of all filled orders within the time slice.</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 400 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Invalid parameters: granularity=6 must be one of: 60,300,900,3600,21600,86400",
  "code": 1025,
  "name": "dxGetOrderHistory"
}
</code></pre>
<aside class="warning">
400 Bad Request
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 500 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetOrderHistory"
}
</code></pre>
<aside class="warning">
500 Internal Server Error
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<aside class="warning">
Error Codes
</aside>

<table><thead>
<tr>
<th>Code</th>
<th>Type</th>
<th>Error</th>
</tr>
</thead><tbody>
<tr>
<td>1001</td>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>1004</td>
<td>400</td>
<td>Bad request</td>
</tr>
<tr>
<td>1011</td>
<td>400</td>
<td>Invalid maker symbol</td>
</tr>
<tr>
<td>1012</td>
<td>400</td>
<td>Invalid taker symbol</td>
</tr>
<tr>
<td>1025</td>
<td>400</td>
<td>Invalid parameters</td>
</tr>
<tr>
<td>1002</td>
<td>500</td>
<td>Internal server error</td>
</tr>
</tbody></table>

<!-- 
1016  | 400   | Invalid time
 -->
<h2 id='dxgetlocaltokens'>dxGetLocalTokens</h2>
<p>This call is used to retrieve all the assets supported by the local client. You can only trade on markets with these assets. If an asset is not showing, it has not been properly configured (refer back to #2 in <a href="#xbridge-setup">XBridge Setup</a>.</p>
<h3 id='request-parameters-10'>Request Parameters</h3>
<blockquote>
<p>Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli dxGetLocalTokens
</code></pre>
<p><code class="api-call">dxGetLocalTokens</code></p>

<p>This call does not take parameters.</p>
<h3 id='response-parameters-10'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>[
  "LTC",
  "SYS",
  "MONA",
  "BLOCK"
]
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>Array</td>
<td>array</td>
<td>An array of all the assets supported by the local client.</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 400 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Bad request",
  "code": 1004,
  "name": "dxGetLocalTokens"
}
</code></pre>
<aside class="warning">
400 Bad Request
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 500 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetLocalTokens"
}
</code></pre>
<aside class="warning">
500 Internal Server Error
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<aside class="warning">
Error Codes
</aside>

<table><thead>
<tr>
<th>Code</th>
<th>Type</th>
<th>Error</th>
</tr>
</thead><tbody>
<tr>
<td>1001</td>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>1004</td>
<td>400</td>
<td>Bad request</td>
</tr>
<tr>
<td>1025</td>
<td>400</td>
<td>Invalid parameters</td>
</tr>
<tr>
<td>1002</td>
<td>500</td>
<td>Internal server error</td>
</tr>
</tbody></table>
<h2 id='dxgetnetworktokens'>dxGetNetworkTokens</h2>
<p>This call is used to retrieve all the assets currently supported by the network. This list may differ from the <a href="https://docs.blocknet.co/protocol/xbridge/compatibility/#supported-digital-assets">compatibility list</a> due to assets being unofficially supported or assets not being supported by any nodes on the network.</p>
<h3 id='request-parameters-11'>Request Parameters</h3>
<blockquote>
<p>Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli dxGetNetworkTokens
</code></pre>
<p><code class="api-call">dxGetNetworkTokens</code></p>

<p>This call does not take parameters.</p>
<h3 id='response-parameters-11'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>[
  "LTC",
  "SYS",
  "MONA",
  "BLOCK"
]
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>Array</td>
<td>array</td>
<td>An array of all the assets supported by the network.</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 400 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Bad request",
  "code": 1004,
  "name": "dxGetNetworkTokens"
}
</code></pre>
<aside class="warning">
400 Bad Request
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 500 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetNetworkTokens"
}
</code></pre>
<aside class="warning">
500 Internal Server Error
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<aside class="warning">
Error Codes
</aside>

<table><thead>
<tr>
<th>Code</th>
<th>Type</th>
<th>Error</th>
</tr>
</thead><tbody>
<tr>
<td>1001</td>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>1004</td>
<td>400</td>
<td>Bad request</td>
</tr>
<tr>
<td>1025</td>
<td>400</td>
<td>Invalid parameters</td>
</tr>
<tr>
<td>1002</td>
<td>500</td>
<td>Internal server error</td>
</tr>
</tbody></table>
<h2 id='dxgettokenbalances'>dxGetTokenBalances</h2>
<p>This call is used to retrieve the asset <strong><em>available</em></strong> balances for all connected wallets on the local client. This will only return balances for the assets returned in <a href="#dxgetlocaltokens">dxGetLocalTokens</a>. If an asset is not showing and is not returned in or the value is showing 0, it has not been properly configured (refer back to #2 in <a href="#xbridge-setup">XBridge Setup</a>.</p>

<p><strong>Note</strong>: These balances do not include orders that are using locked UTXOs to support a pending or open order. XBridge works best with pre-sliced UTXOs so that your entire wallet balance is capable of multiple simultaneous trades.</p>
<h3 id='request-parameters-12'>Request Parameters</h3>
<blockquote>
<p>Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli dxGetTokenBalances
</code></pre>
<p><code class="api-call">dxGetTokenBalances</code></p>

<p>This call does not take parameters.</p>
<h3 id='response-parameters-12'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "LTC": "0.568942",
  "SYS": "1050.128493",
  "MONA": "3.452",
  "BLOCK": "250.83492174"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>Object</td>
<td>object</td>
<td>Key-value object of the assets and respective balances.</td>
</tr>
<tr>
<td>-- key</td>
<td>string</td>
<td>The asset symbol.</td>
</tr>
<tr>
<td>-- value</td>
<td>string(float)</td>
<td>The available wallet balance amount. String is used to preserve precision.</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 400 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Bad request",
  "code": 1004,
  "name": "dxGetTokenBalances"
}
</code></pre>
<aside class="warning">
400 Bad Request
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 500 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetTokenBalances"
}
</code></pre>
<aside class="warning">
500 Internal Server Error
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<aside class="warning">
Error Codes
</aside>

<table><thead>
<tr>
<th>Code</th>
<th>Type</th>
<th>Error</th>
</tr>
</thead><tbody>
<tr>
<td>1001</td>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>1004</td>
<td>400</td>
<td>Bad request</td>
</tr>
<tr>
<td>1025</td>
<td>400</td>
<td>Invalid parameters</td>
</tr>
<tr>
<td>1002</td>
<td>500</td>
<td>Internal server error</td>
</tr>
</tbody></table>
<h2 id='dxgetnewtokenaddress'>dxGetNewTokenAddress</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "asset": "SYS"
}
</code></pre>
<p>This call is used to generate a new address for the specified asset. This call will only work for the assets returned in <a href="#dxgetlocaltokens">dxGetLocalTokens</a>.</p>
<h3 id='request-parameters-13'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli dxGetNewTokenAddress SYS
</code></pre>
<p><code class="api-call">dxGetNewTokenAddress [asset]</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>asset</td>
<td>string</td>
<td>The ticker of the asset you want to generate an address for.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-13'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>[
  "SVTbaYZ8oApVn3uNyimst3GKyvvfzXQgdK"
]
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>Array</td>
<td>array</td>
<td>An array containing the newly generated address for the given asset.</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 400 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Bad request",
  "code": 1004,
  "name": "dxGetNewTokenAddress"
}
</code></pre>
<aside class="warning">
400 Bad Request
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 500 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetNewTokenAddress"
}
</code></pre>
<aside class="warning">
500 Internal Server Error
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<aside class="warning">
Error Codes
</aside>

<table><thead>
<tr>
<th>Code</th>
<th>Type</th>
<th>Error</th>
</tr>
</thead><tbody>
<tr>
<td>1001</td>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>1004</td>
<td>400</td>
<td>Bad request</td>
</tr>
<tr>
<td>1025</td>
<td>400</td>
<td>Invalid parameters</td>
</tr>
<tr>
<td>1002</td>
<td>500</td>
<td>Internal server error</td>
</tr>
</tbody></table>

<!-- ## dxGetLockedUtxos

> Sample Data

```cli
{
  "id": "f2b1ebf45b81da67171bfc55f34c20c9bbc55d8234b8f5c61d0965f61e3c3156"
}
```
This call is used to retrieve the locked UTXOs for a specified order ID.


### Request Parameters

> Sample Request

```cli
blocknet-cli dxGetLockedUtxos f2b1ebf45b81da67171bfc55f34c20c9bbc55d8234b8f5c61d0965f61e3c3156
```
<code class="api-call">dxGetLockedUtxos [order_id]</code>

Parameter     | Type          | Description
--------------|---------------|-------------
id            | string        | The order ID to recieve the UTXOs for.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
[
  {
    "id" : "91d0ea83edc79b9a2041c51d08037cff87c181efb311a095dfdd4edbcc7993a9",
    "LTC" : [
      6be548bc46a3dcc69b6d56529948f7e679dd96657f85f5870a017e005caa050a,
      6be548bc46a3dcc69b6d56529948f7e679dd96657f85f5870a017e005caa050a,
      6be548bc46a3dcc69b6d56529948f7e679dd96657f85f5870a017e005caa050a
    ]
  }
]
```

Parameter     | Type          | Description
--------------|---------------|-------------
id            | string        | The order ID.
Object        | object        | Key-value object of the asset and UTXOs for the specified order.
-- key        | string        | The asset symbol.
-- value      | array         | The UTXOs locked for the given order ID.

> Sample 400 Response

```cli
{
  "error": "Not an exchange node",
  "code": 1029,
  "name": "dxGetLockedUtxos"
}
```

<aside class="warning">
400 Bad Request
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


> Sample 500 Response

```cli
{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetLockedUtxos"
}
```

<aside class="warning">
500 Internal Server Error
</aside>

Parameter     | Type          | Description
--------------|---------------|-------------
error         | string        | Error message
code          | int           | Error code
name          | string        | Name of the RPC function


<aside class="warning">
Error Codes
</aside>

Code  | Type  | Error
------|-------|------------
1001  | 401   | Unauthorized
1004  | 400   | Bad request
1029  | 400   | Not an exchange node
1002  | 500   | Internal server error -->
<h2 id='dxgetorderbook'>dxGetOrderBook</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "detail": 1,
  "maker": "LTC",
  "taker": "SYS",
  "max_orders": 100
}
</code></pre>
<p>This call is used to retrieve open orders at various detail levels:
<br><b>Detail 1</b> - Retrieves the best bid and ask.
<br><b>Detail 2</b> - Retrieves a list of aggregated orders. This is useful for charting.
<br><b>Detail 3</b> - Retrieves a list of non-aggregated orders. This is useful for bot trading.
<br><b>Detail 4</b> - Retrieves the best bid and ask with the order GUIDs.
<br></p>

<p><strong>Note</strong>: This call will only return orders for markets with both assets returned in dxGetLocalTokens.</p>
<h3 id='request-parameters-14'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli dxGetOrderBook 1 LTC SYS 100
</code></pre>
<p><code class="api-call">dxGetOrderBook [detail] [maker] [taker] [max_orders](optional)</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>detail</td>
<td>int</td>
<td>Detail level: <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code></td>
</tr>
<tr>
<td>maker</td>
<td>string</td>
<td>Maker trading asset; the ticker of the asset being sold by the maker.</td>
</tr>
<tr>
<td>taker</td>
<td>string</td>
<td>Taker trading asset; the ticker of the asset being sold by the taker.</td>
</tr>
<tr>
<td>max_orders</td>
<td>int</td>
<td>(Optional Parameter) Defaults to <code>50</code>.<br>The maximum total orders to display for bids and asks combined. Odd values are rounded up 1. Quantity is split evenly between bids and asks.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-14'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response (Detail 1)</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "detail": 1,
  "maker": "LTC",
  "taker": "SYS",
  "bids": [
    //[ price, size, quantity ],
    [ "253", "15", 1 ],
  ],
  "asks": [
    //[ price, size, quantity ],
    [ "253.01", "15", 3 ],
  ]
}
</code></pre>
<p><br><b>Detail 1</b><br>
Retrieves the best bid and ask.</p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>detail</td>
<td>int</td>
<td>Detail level: <code>1</code></td>
</tr>
<tr>
<td>maker</td>
<td>string</td>
<td>Maker trading asset; the ticker of the asset being sold by the maker.</td>
</tr>
<tr>
<td>taker</td>
<td>string</td>
<td>Taker trading asset; the ticker of the asset being sold by the taker.</td>
</tr>
<tr>
<td>bids</td>
<td>array</td>
<td>An array of the best bids.</td>
</tr>
<tr>
<td>- price</td>
<td>string(float)</td>
<td>The highest bid price for the asset. String is used to preserve precision.</td>
</tr>
<tr>
<td>- size</td>
<td>string(float)</td>
<td>The size of bid orders at this price. String is used to preserve precision.</td>
</tr>
<tr>
<td>- quantity</td>
<td>int</td>
<td>The total bid orders at this price.</td>
</tr>
<tr>
<td>asks</td>
<td>array</td>
<td>An array of the best asks.</td>
</tr>
<tr>
<td>- price</td>
<td>string(float)</td>
<td>The lowest ask price for the asset. String is used to preserve precision.</td>
</tr>
<tr>
<td>- size</td>
<td>string(float)</td>
<td>The size of ask orders at this price. String is used to preserve precision.</td>
</tr>
<tr>
<td>- quantity</td>
<td>int</td>
<td>The total ask orders at this price.</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 200 Response (Detail 2)</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "detail": 2,
  "maker": "LTC",
  "taker": "SYS",
  "bids": [
    //[ price, size, quantity ],
    [ "253.00", "15.00", 1 ]
  ],
  "asks": [
    //[ price, size, quantity ],
    [ "254.15", "15.01", 3 ]
  ]
}
</code></pre>
<p><br><b>Detail 2</b><br>
Retrieves a list of aggregated orders. This is useful for charting.</p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>detail</td>
<td>int</td>
<td>Detail level: <code>2</code></td>
</tr>
<tr>
<td>maker</td>
<td>string</td>
<td>Maker trading asset; the ticker of the asset being sold by the maker.</td>
</tr>
<tr>
<td>taker</td>
<td>string</td>
<td>Taker trading asset; the ticker of the asset being sold by the taker.</td>
</tr>
<tr>
<td>bids</td>
<td>array</td>
<td>An array of bids.</td>
</tr>
<tr>
<td>- price</td>
<td>string(float)</td>
<td>The bid price for the asset. String is used to preserve precision.</td>
</tr>
<tr>
<td>- size</td>
<td>string(float)</td>
<td>The size of bid orders at this price. String is used to preserve precision.</td>
</tr>
<tr>
<td>- quantity</td>
<td>int</td>
<td>The total bid orders at this price.</td>
</tr>
<tr>
<td>asks</td>
<td>array</td>
<td>An array of asks.</td>
</tr>
<tr>
<td>- price</td>
<td>string(float)</td>
<td>The ask price for the asset. String is used to preserve precision.</td>
</tr>
<tr>
<td>- size</td>
<td>string(float)</td>
<td>The size of ask orders at this price. String is used to preserve precision.</td>
</tr>
<tr>
<td>- quantity</td>
<td>int</td>
<td>The total ask orders at this price.</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 200 Response (Detail 3)</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "detail": 3,
  "maker": "LTC",
  "taker": "SYS",
  "bids": [
    //[ price, size, order_id ],
    [ "253.00", "15.00", "0cc2e8a7222f1416cda996031ca21f67b53431614e89651887bc300499a6f83e" ]
  ],
  "asks": [
    //[ price, size, order_id ],
    [ "254.15", "15.01", "b20f0028eb77b7b745c1953f7521cbef31f40d5543595196d7eb911db43c6434" ],
    [ "254.15", "15.01", "920f53f7521cbef3c64343b0020d554196d7eb98eb7735911db45b7b745c11f4" ],
    [ "254.15", "15.01", "1dbbf31f7b745c12120f0028eb7795196dbcbe4043c6434d554953f75357eb91" ]
  ]
}
</code></pre>
<p><br><b>Detail 3</b><br>
Retrieves a list of non-aggregated orders. This is useful for bot trading.</p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>detail</td>
<td>int</td>
<td>Detail level: <code>3</code></td>
</tr>
<tr>
<td>maker</td>
<td>string</td>
<td>Maker trading asset; the ticker of the asset being sold by the maker.</td>
</tr>
<tr>
<td>taker</td>
<td>string</td>
<td>Taker trading asset; the ticker of the asset being sold by the taker.</td>
</tr>
<tr>
<td>bids</td>
<td>array</td>
<td>An array of bids.</td>
</tr>
<tr>
<td>- price</td>
<td>string(float)</td>
<td>The highest bid price for the asset. String is used to preserve precision.</td>
</tr>
<tr>
<td>- size</td>
<td>string(float)</td>
<td>The size of the bid order. String is used to preserve precision.</td>
</tr>
<tr>
<td>- order_id</td>
<td>string</td>
<td>The ID of the bid order.</td>
</tr>
<tr>
<td>asks</td>
<td>array</td>
<td>An array of asks.</td>
</tr>
<tr>
<td>- price</td>
<td>string(float)</td>
<td>The lowest ask price for the asset. String is used to preserve precision.</td>
</tr>
<tr>
<td>- size</td>
<td>string(float)</td>
<td>The size of the ask order. String is used to preserve precision.</td>
</tr>
<tr>
<td>- order_id</td>
<td>string</td>
<td>The ID of the ask order.</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 200 Response (Detail 4)</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "detail": 4,
  "maker": "LTC",
  "taker": "SYS",
  "bids": [
    //[ price, size, [order_ids] ],
    [ "253.00", "15", [ "920f53f7521cbef3c64343b0020d554196d7eb98eb7735911db45b7b745c11f4" ] ],
  ],
  "asks": [
    //[ price, size, [order_ids] ],
    [ "254.00", "15", [ "32f5a551-3da6-4ff0-8ae6-0b60535c5237", "b20f0028eb77b7b745c1953f7521cbef31f40d5543595196d7eb911db43c6434", "a1f40d53f75357eb914554359b207b7b745cf096dbcb028eb77b7b7e4043c6b4", "1dbbf31f7b745c12120f0028eb7795196dbcbe4043c6434d554953f75357eb91" ] ],
  ]
}
</code></pre>
<p><br><b>Detail 4</b><br>
Retrieves the best bid and ask with the order GUIDs.</p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>detail</td>
<td>int</td>
<td>Detail level: <code>4</code></td>
</tr>
<tr>
<td>maker</td>
<td>string</td>
<td>Maker trading asset; the ticker of the asset being sold by the maker.</td>
</tr>
<tr>
<td>taker</td>
<td>string</td>
<td>Taker trading asset; the ticker of the asset being sold by the taker.</td>
</tr>
<tr>
<td>bids</td>
<td>array</td>
<td>An array of the best bids.</td>
</tr>
<tr>
<td>- price</td>
<td>string(float)</td>
<td>The highest bid price for the asset. String is used to preserve precision.</td>
</tr>
<tr>
<td>- size</td>
<td>string(float)</td>
<td>The size of bid orders at this price. String is used to preserve precision.</td>
</tr>
<tr>
<td>- order_ids</td>
<td>array</td>
<td>An array of ID for bid orders at this price.</td>
</tr>
<tr>
<td>asks</td>
<td>array</td>
<td>An array of the best asks.</td>
</tr>
<tr>
<td>- price</td>
<td>string(float)</td>
<td>The lowest ask price for the asset. String is used to preserve precision.</td>
</tr>
<tr>
<td>- size</td>
<td>string(float)</td>
<td>The size of ask orders at this price. String is used to preserve precision.</td>
</tr>
<tr>
<td>- order_ids</td>
<td>array</td>
<td>An array of ID for ask orders at this price.</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 400 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Invalid detail level",
  "code": 1015,
  "name": "dxGetOrderBook"
}
</code></pre>
<aside class="warning">
400 Bad Request
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 500 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxGetOrderBook"
}
</code></pre>
<aside class="warning">
500 Internal Server Error
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<aside class="warning">
Error Codes
</aside>

<table><thead>
<tr>
<th>Code</th>
<th>Type</th>
<th>Error</th>
</tr>
</thead><tbody>
<tr>
<td>1001</td>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>1004</td>
<td>400</td>
<td>Bad request</td>
</tr>
<tr>
<td>1011</td>
<td>400</td>
<td>Invalid maker symbol</td>
</tr>
<tr>
<td>1012</td>
<td>400</td>
<td>Invalid taker symbol</td>
</tr>
<tr>
<td>1015</td>
<td>400</td>
<td>Invalid detail level</td>
</tr>
<tr>
<td>1025</td>
<td>400</td>
<td>Invalid parameters</td>
</tr>
<tr>
<td>1002</td>
<td>500</td>
<td>Internal server error</td>
</tr>
</tbody></table>
<h2 id='dxloadxbridgeconf'>dxLoadXBridgeConf</h2>
<p>This call is used to reload <code>xbridge.conf</code> to run newly configured settings without needing to restart the Blocknet client.</p>

<p><strong>Note</strong>: This may disrupt trades in progress.</p>
<h3 id='request-parameters-15'>Request Parameters</h3>
<blockquote>
<p>Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli dxLoadXBridgeConf
</code></pre>
<p><code class="api-call">dxLoadXBridgeConf</code></p>

<p>This call does not take parameters.</p>
<h3 id='response-parameters-15'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>true
</code></pre>
<table><thead>
<tr>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>bool</td>
<td><code>true</code>: Successfully reloaded file.</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 400 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Bad request",
  "code": 1004,
  "name": "dxLoadXBridgeConf"
}
</code></pre>
<aside class="warning">
400 Bad Request
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 500 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "error": "Internal error occurred",
  "code": 1002,
  "name": "dxLoadXBridgeConf"
}
</code></pre>
<aside class="warning">
500 Internal Server Error
</aside>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>error</td>
<td>string</td>
<td>Error message</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>Error code</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>Name of the RPC function</td>
</tr>
</tbody></table>

<aside class="warning">
Error Codes
</aside>

<table><thead>
<tr>
<th>Code</th>
<th>Type</th>
<th>Error</th>
</tr>
</thead><tbody>
<tr>
<td>1001</td>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>1004</td>
<td>400</td>
<td>Bad request</td>
</tr>
<tr>
<td>1025</td>
<td>400</td>
<td>Invalid parameters</td>
</tr>
<tr>
<td>1002</td>
<td>500</td>
<td>Internal server error</td>
</tr>
</tbody></table>
<h2 id='dxgettradingdata'>dxGetTradingData</h2>
<p>This call returns the XBridge trading records. This information is pulled from on-chain history so pulling a large amount of blocks will result in longer response times.</p>

<p><strong>This call replaces the <code>gettradingdata</code> call, which will be deprecated. Please update to use <code>dxGetTradingData</code> as soon as possible</strong></p>
<h3 id='request-parameters-16'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli dxGetTradingData 1440
</code></pre>
<p><code class="api-call">dxGetTradingData [blocks](optional) [errors](optional)</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>blocks</td>
<td>int</td>
<td>(Optional Parameter) Defaults to <code>43200</code>.<br>Number of blocks to return trade records for (60s block time).</td>
</tr>
<tr>
<td>errors</td>
<td>bool</td>
<td>(Optional Parameter) Defaults to <code>false</code>.<br>Shows and error if there&#39;s an error detected. This may be useful if you&#39;re building a custom client and change the on-chain order history data format.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-16'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>[
  {
    "timestamp" : 1559970139,
    "txid" : "4b409e5c5fb1986930cf7c19afec2c89ac2ad4fddc13c1d5479b66ddf4a8fefb",
    "to" : "Bqtms8j1zrE65kcpsEorE5JDzDaHidMtLG",
    "xid" : "9eb57bac331eab34f3daefd8364cdb2bb05259c407d805d0bd0c",
    "from" : "BLOCK",
    "fromAmount" : 0.001111,
    "to" : "SYS",
    "toAmount" : 0.001000
  },
  {
    "timestamp" : 1559970139,
    "txid" : "3de7479e8a88ebed986d3b7e7e135291d3fd10e4e6d4c6238663db42c5019286",
    "to" : "Bqtms8j1zrE65kcpsEorE5JDzDaHidMtLG",
    "xid" : "fd0fed3ee9fe557d5735768c9bdcd4ab2908165353e0f0cef0d5",
    "from" : "BLOCK",
    "fromAmount" : 0.001577,
    "to" : "SYS",
    "toAmount" : 0.001420
  },
  {
    "timestamp" : 1559970139,
    "txid" : "9cc4a0dae46f2f1849b3ab6f93ea1c59aeaf0e95662d90398814113f12127eae",
    "to" : "BbrQKtutGBLuWHvq26EmHKuNaztnfBFWVB",
    "xid" : "f74c614489bd77efe545c239d1f9a57363c5428e7401b2018d350",
    "from" : "BLOCK",
    "fromAmount" : 0.000231,
    "to" : "SYS",
    "toAmount" : 0.001100
  }
]
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>timestamp</td>
<td>int</td>
<td>Unix epoch timestamp of when the trade took place.</td>
</tr>
<tr>
<td>txid</td>
<td>string</td>
<td>The Blocknet trade fee transaction ID.</td>
</tr>
<tr>
<td>to</td>
<td>string</td>
<td>Service Node that received the trade fee.</td>
</tr>
<tr>
<td>xid</td>
<td>string</td>
<td>XBridge transaction ID.</td>
</tr>
<tr>
<td>from</td>
<td>string</td>
<td>Taker trading asset; the ticker of the asset being sold by the taker.</td>
</tr>
<tr>
<td>fromAmount</td>
<td>int</td>
<td>Taker trading size.</td>
</tr>
<tr>
<td>to</td>
<td>string</td>
<td>Maker trading asset; the ticker of the asset being sold by the maker.</td>
</tr>
<tr>
<td>toAmount</td>
<td>int</td>
<td>Maker trading size.</td>
</tr>
</tbody></table>
<h2 id='status-codes'>Status Codes</h2>
<p>The XBridge API uses the following order status codes:</p>

<table><thead>
<tr>
<th>Status</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>new</td>
<td>New order, not yet broadcasted</td>
</tr>
<tr>
<td>open</td>
<td>Open order, waiting for taker</td>
</tr>
<tr>
<td>accepting</td>
<td>Taker accepting order</td>
</tr>
<tr>
<td>hold</td>
<td>Counterparties acknowledge each other</td>
</tr>
<tr>
<td>initialized</td>
<td>Counterparties agree on order</td>
</tr>
<tr>
<td>created</td>
<td>Swap process starting</td>
</tr>
<tr>
<td>commited</td>
<td>Swap finalized</td>
</tr>
<tr>
<td>finished</td>
<td>Order complete</td>
</tr>
<tr>
<td>expired</td>
<td>Order expired</td>
</tr>
<tr>
<td>offline</td>
<td>Maker or taker went offline</td>
</tr>
<tr>
<td>canceled</td>
<td>Order was canceled</td>
</tr>
<tr>
<td>invalid</td>
<td>Problem detected with the order</td>
</tr>
<tr>
<td>rolled back</td>
<td>Trade failed, funds being rolled back</td>
</tr>
<tr>
<td>rollback failed</td>
<td>Funds unsuccessfully redeemed in failed trade</td>
</tr>
</tbody></table>
<h2 id='error-codes'>Error Codes</h2>
<p>The XBridge API uses the following error codes:</p>

<table><thead>
<tr>
<th>Code</th>
<th>Type</th>
<th>Error</th>
</tr>
</thead><tbody>
<tr>
<td>1004</td>
<td>400</td>
<td>Bad request</td>
</tr>
<tr>
<td>1011</td>
<td>400</td>
<td>Invalid maker symbol</td>
</tr>
<tr>
<td>1012</td>
<td>400</td>
<td>Invalid taker symbol</td>
</tr>
<tr>
<td>1015</td>
<td>400</td>
<td>Invalid detail level</td>
</tr>
<tr>
<td>1016</td>
<td>400</td>
<td>Invalid time</td>
</tr>
<tr>
<td>1017</td>
<td>400</td>
<td>Invalid asset</td>
</tr>
<tr>
<td>1018</td>
<td>400</td>
<td>Unable to connect to wallet</td>
</tr>
<tr>
<td>1019</td>
<td>400</td>
<td>Insufficient funds</td>
</tr>
<tr>
<td>1020</td>
<td>400</td>
<td>Funds not signed for</td>
</tr>
<tr>
<td>1021</td>
<td>400</td>
<td>Invalid order ID</td>
</tr>
<tr>
<td>1022</td>
<td>400</td>
<td>Unknown session</td>
</tr>
<tr>
<td>1023</td>
<td>400</td>
<td>Revert transaction failed</td>
</tr>
<tr>
<td>1024</td>
<td>400</td>
<td>Invalid amount</td>
</tr>
<tr>
<td>1025</td>
<td>400</td>
<td>Invalid parameters</td>
</tr>
<tr>
<td>1026</td>
<td>400</td>
<td>Invalid address</td>
</tr>
<tr>
<td>1027</td>
<td>400</td>
<td>Invalid signature</td>
</tr>
<tr>
<td>1028</td>
<td>400</td>
<td>Invalid state</td>
</tr>
<tr>
<td>1029</td>
<td>400</td>
<td>Not an exchange node</td>
</tr>
<tr>
<td>1030</td>
<td>400</td>
<td>Dust amount</td>
</tr>
<tr>
<td>1031</td>
<td>400</td>
<td>Insufficient funds</td>
</tr>
<tr>
<td>1032</td>
<td>400</td>
<td>Unsupported asset</td>
</tr>
<tr>
<td>1024</td>
<td>400</td>
<td>Size must be greater than 0</td>
</tr>
<tr>
<td>1001</td>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>1002</td>
<td>500</td>
<td>Internal server error</td>
</tr>
</tbody></table>
<h1 id='xrouter-api'>XRouter API</h1>
<p>The following set of calls are used to communicate and interact with blockchains remotely over the Blocknet network via XRouter. </p>

<p>See <a href="#xrouter-setup">XRouter Setup</a> for instructions on setting up your environment for use with XRouter.</p>

<table><thead>
<tr>
<th>Call</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td><a href="#xrgetnetworkservices">xrGetNetworkServices</a></td>
<td>Returns supported XRouter services</td>
</tr>
<tr>
<td><a href="#xrconnect">xrConnect</a></td>
<td>Pre-connect to XRouter nodes</td>
</tr>
<tr>
<td><a href="#xrconnectednodes">xrConnectedNodes</a></td>
<td>Returns connected node services and fees</td>
</tr>
<tr>
<td><a href="#xrgetblockcount">xrGetBlockCount</a></td>
<td>Returns a blockchain&#39;s block height</td>
</tr>
<tr>
<td><a href="#xrgetblockHash">xrGetBlockHash</a></td>
<td>Returns a block number&#39;s hash</td>
</tr>
<tr>
<td><a href="#xrgetblock">xrGetBlock</a></td>
<td>Returns a block hash&#39;s block number</td>
</tr>
<tr>
<td><a href="#xrgetblocks">xrGetBlocks</a></td>
<td>Returns block hashes for multiple block numbers</td>
</tr>
<tr>
<td><a href="#xrdecoderawtransaction">xrDecodeRawTransaction</a></td>
<td>Returns decoded transaction HEX</td>
</tr>
<tr>
<td><a href="#xrgettransaction">xrGetTransaction</a></td>
<td>Returns transaction data for transaction ID</td>
</tr>
<tr>
<td><a href="#xrgettransactions">xrGetTransactions</a></td>
<td>Returns transaction data for multiple transaction IDs</td>
</tr>
<tr>
<td><a href="#xrsendtransaction">xrSendTransaction</a></td>
<td>Submit a signed transaction to the network</td>
</tr>
<tr>
<td><a href="#xrservice">xrService</a></td>
<td>Use to interact with XCloud services</td>
</tr>
<tr>
<td><a href="#xrServiceconsensus">xrServiceConsensus</a></td>
<td>Use to interact with XCloud services with consensus</td>
</tr>
<tr>
<td><a href="#xrgetreply">xrGetReply</a></td>
<td>Returns prior response associated with UUID</td>
</tr>
<tr>
<td><a href="#xrshowconfigs">xrShowConfigs</a></td>
<td>Returns all node configs received as raw text</td>
</tr>
<tr>
<td><a href="#xrreloadconfigs">xrReloadConfigs</a></td>
<td>Applies changes made to your configs</td>
</tr>
<tr>
<td><a href="#xrstatus">xrStatus</a></td>
<td>Returns your XRouter configurations</td>
</tr>
</tbody></table>
<h2 id='xrgetnetworkservices'>xrGetNetworkServices</h2>
<p>This call is used to view the XRouter services currently supported on the network, along with the number of nodes supporting each service. XRouter SPV calls use the <code>xr::</code> namespace. XCloud services use the <code>xrs::</code> namespace and can be called using <a href="#xrservice">xrService</a> and <a href="#xrserviceconsensus">xrServiceConsensus</a>.</p>
<h3 id='request-parameters'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli xrGetNetworkServices
</code></pre>
<p><code class="api-call">xrGetNetworkServices</code></p>

<p>This call does not take parameters.</p>
<h3 id='response-parameters'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "reply": {
    "spvwallets": [ "xr::BLOCK", "xr::BTC", "xr::LTC", "xr::MNP", "xr::SYS", "xr::TBLOCK" ],
    "services": [ "xrs::BTCgetbestblockhash", "xrs::BTCgetblockhash", "xrs::BTCgettransaction", "xrs::SYSgetbestblockhash", "xrs::SYSgetblock", "xrs::SYSgetgovernanceinfo", "xrs::SYSgetmempool", "xrs::SYSlistoffers", "xrs::SYSofferinfo", "xrs::twilio" ],
    "nodecounts": {
      "xr::BLOCK": 27,
      "xr::BTC": 13,
      "xr::LTC": 21,
      "xr::MNP": 1,
      "xr::SYS": 9,
      "xrs::BTCgetbestblockhash": 12,
      "xrs::BTCgetblockhash": 12,
      "xrs::BTCgettransaction": 5,
      "xrs::SYSgetbestblockhash": 7,
      "xrs::SYSgetblock": 6,
      "xrs::SYSgetgovernanceinfo": 4,
      "xrs::SYSgetmempool": 4,
      "xrs::SYSlistoffers": 4,
      "xrs::SYSofferinfo": 4,
      "xrs::twilio": 1
    }
  },
  "uuid": "cd408df7-0ff8-4e29-b5cf-0148af83f93a"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>reply</td>
<td>object</td>
<td>An object containing information on supported services.</td>
</tr>
<tr>
<td>spvwallets</td>
<td>array</td>
<td>An array of supported SPV wallets, represented by the asset&#39;s ticker.</td>
</tr>
<tr>
<td>services</td>
<td>array</td>
<td>An array of supported XCloud services.</td>
</tr>
<tr>
<td>nodecounts</td>
<td>object</td>
<td>An object of supported SPV wallets and XCloud services with how many nodes support each.</td>
</tr>
<tr>
<td>-- key</td>
<td>string</td>
<td>The SPV wallet or XCloud service with it&#39;s namespace.</td>
</tr>
<tr>
<td>-- value</td>
<td>int</td>
<td>The amount of nodes supporting each respective service.</td>
</tr>
<tr>
<td>uuid</td>
<td>string</td>
<td>The response ID, which can be used to view this response again with <a href="#xrgetreply">xrGetReply</a>.</td>
</tr>
</tbody></table>
<h2 id='xrconnect'>xrConnect</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "service": "SYS"
}
</code></pre>
<p>This call is used to connect to XRouter nodes with the specified service and download their configs. This command is useful to determine how much nodes are charging for services. It&#39;s also useful to &quot;warm up&quot; connections. By connecting to nodes immediately before making a large request it can speed up the reponse time (since those connections will be open). However, XRouter nodes close inactive connections after 15 seconds, so keep that in mind. After connecting, call <a href="#xrconnectednodes">xrConnectedNodes</a> to display information about these XRouter nodes.</p>
<h3 id='request-parameters-2'>Request Parameters</h3>
<blockquote>
<p>Sample Requests</p>
</blockquote>
<pre class="highlight plaintext"><code>// Connect to one XRouter node supporting SYS
blocknet-cli xrConnect xr::SYS

// Connect to two XRouter nodes supporting SYS
blocknet-cli xrConnect xr::SYS 2

// Connect to one XRouter node supporting XCloud service twilio
blocknet-cli xrConnect xrs::twilio
</code></pre>
<p><code class="api-call">xrConnect [service] [node_count](optional)</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>service</td>
<td>string</td>
<td>Service name including the namespace (<em>xr::[spv_call]</em> or <em>xrs::[xcloud_service]</em>).</td>
</tr>
<tr>
<td>node_count</td>
<td>int</td>
<td>(Optional Parameter)<br>Defaults to <code>1</code> if no <code>consensus=</code> setting in <code>xrouter.conf</code>.<br>The number of nodes to pre-connect to that will be used to route calls. The most common response (i.e. the response with the most consensus) will be returned as <code>reply</code>.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-2'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>// Sample response for xrConnect SYS 2
{
  "reply": [
    {
      "nodepubkey": "02c6c79a75846fd9bb064788b03145e347fa5464558fa9030ebb009df2833369f0",
      "score": 0,
      "banned": false,
      "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
      "spvwallets": [ "MNP", "SYS" ],
      "spvconfigs": [
        {
          "spvwallet": "MNP",
          "commands": [
            {
              "command": "xrGetConfig",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetBlockCount",
              "fee": 0.000000,
              "requestlimit": 10,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetBlockHash",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetBlock",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrSendTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetBlocks",
              "fee": 0.100000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetTransactions",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrDecodeRawTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            }
          ]
        },
        {
          "spvwallet": "SYS",
          "commands": [
            {
              "command": "xrGetConfig",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetBlockCount",
              "fee": 0.100000,
              "requestlimit": 10,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetBlockHash",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetBlock",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrSendTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetBlocks",
              "fee": 0.100000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetTransactions",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrDecodeRawTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            }
          ]
        }
      ],
      "feedefault": 0.000000,
      "fees": {
        "xrGetBlockCount": 0.000000,
        "xrGetBlocks": 0.100000
      },
      "services": {
        "SYSgetbestblockhash": {
          "parameters": "",
          "fee": 0.100000,
          "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
          "requestlimit": -1,
          "fetchlimit": 50,
          "timeout": 30,
          "disabled": false
        },
        "SYSgetgovernanceinfo": {
          "parameters": "",
          "fee": 0.100000,
          "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
          "requestlimit": -1,
          "fetchlimit": 50,
          "timeout": 30,
          "disabled": false
        }
      }
    },
    {
      "nodepubkey": "0370874cad6252bb94afa9a253c90122760ce2862e623b515e57bfe0697f3fc515",
      "score": 0,
      "banned": false,
      "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
      "spvwallets": [ "BLOCK", "BTC", "LTC", "SYS" ],
      "spvconfigs": [
        {
          "spvwallet": "BLOCK",
          "commands": [
            {
              "command": "xrGetConfig",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlockCount",
              "fee": 0.000000,
              "requestlimit": -1,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlockHash",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlock",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrSendTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlocks",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetTransactions",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrDecodeRawTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            }
          ]
        },
        {
          "spvwallet": "BTC",
          "commands": [
            {
              "command": "xrGetConfig",
              "fee": 0.200000,
              "requestlimit": 100,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlockCount",
              "fee": 0.200000,
              "requestlimit": 100,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlockHash",
              "fee": 0.200000,
              "requestlimit": 100,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlock",
              "fee": 0.200000,
              "requestlimit": 100,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetTransaction",
              "fee": 0.200000,
              "requestlimit": 100,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrSendTransaction",
              "fee": 0.200000,
              "requestlimit": 100,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlocks",
              "fee": 0.200000,
              "requestlimit": 100,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetTransactions",
              "fee": 0.200000,
              "requestlimit": 100,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrDecodeRawTransaction",
              "fee": 0.200000,
              "requestlimit": 100,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            }
          ]
        },
        {
          "spvwallet": "LTC",
          "commands": [
            {
              "command": "xrGetConfig",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlockCount",
              "fee": 0.000000,
              "requestlimit": -1,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlockHash",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlock",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrSendTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlocks",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetTransactions",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrDecodeRawTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            }
          ]
        },
        {
          "spvwallet": "SYS",
          "commands": [
            {
              "command": "xrGetConfig",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlockCount",
              "fee": 0.000000,
              "requestlimit": -1,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlockHash",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlock",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrSendTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlocks",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetTransactions",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrDecodeRawTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "fetchlimit" : 50,
              "timeout" : 30,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            }
          ]
        }
      ],
      "feedefault": 0.000000,
      "fees": {
        "BTC": 0.200000,
        "xrGetBlockCount": 0.000000
      },
      "services": {
        "BTCgetbestblockhash": {
          "parameters": "",
          "fee": 0.000000,
          "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
          "requestlimit": 50,
          "fetchlimit": 50,
          "timeout": 30,
          "disabled": false
        },
        "BTCgetblockhash": {
          "parameters": "int",
          "fee": 0.000000,
          "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
          "requestlimit": 50,
          "fetchlimit": 50,
          "timeout": 30,
          "disabled": false
        },
        "BTCgettransaction": {
          "parameters": "string",
          "fee": 0.000000,
          "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
          "requestlimit": 50,
          "fetchlimit": 50,
          "timeout": 30,
          "disabled": false
        },
        "SYSgetbestblockhash": {
          "parameters": "",
          "fee": 0.000000,
          "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
          "requestlimit": 10,
          "fetchlimit": 50,
          "timeout": 30,
          "disabled": false
        }
      }
    }
  ],
  "uuid": "88A16FDB-464D-470B-94CD-D827E63285CC"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>reply</td>
<td>array</td>
<td>An array of nodes providing the specified service, along with their configs.</td>
</tr>
<tr>
<td>nodepubkey</td>
<td>string</td>
<td>The node ID.</td>
</tr>
<tr>
<td>score</td>
<td>int</td>
<td>The node&#39;s score based on quality of service. A score of <code>-200</code> will ban the node for a 24hr period. You can change the ban threshold with the <code>xrouterbanscore</code> setting in <code>blocknet.conf</code>. See <a href="#xrouter-node-scoring">node scoring</a> for more details.</td>
</tr>
<tr>
<td>banned</td>
<td>bool</td>
<td>Signifies if the node is currently banned.<br><code>true</code>: Node is banned.<br><code>false</code>: Node is not banned. See <a href="#xrouter-node-scoring">node scoring</a> for more details.</td>
</tr>
<tr>
<td>paymentaddress</td>
<td>string</td>
<td>The node&#39;s payment address.</td>
</tr>
<tr>
<td>spvwallets</td>
<td>array</td>
<td>An array of supported SPV wallets, represented by the asset&#39;s ticker.</td>
</tr>
<tr>
<td>spvconfigs</td>
<td>array</td>
<td>An array of each SPV wallets and command configurations.</td>
</tr>
<tr>
<td>spvwallet</td>
<td>string</td>
<td>The SPV wallet that the configurations under <code>commands</code> pertains to.</td>
</tr>
<tr>
<td>commands</td>
<td>array</td>
<td>An array of each SPV wallet command and respective configurations.</td>
</tr>
<tr>
<td>command</td>
<td>string</td>
<td>The SPV command.</td>
</tr>
<tr>
<td>fee</td>
<td>float</td>
<td>The command fee, overrides the <code>feedefault</code> and <code>fees</code> values. This priority has already been accounted for in this value.</td>
</tr>
<tr>
<td>requestlimit</td>
<td>int</td>
<td>The minimum time allowed between calls in milliseconds. A value of <code>-1</code> means there is no limit. If you exceed this value you will be penalized and eventually banned by this specific node.</td>
</tr>
<tr>
<td>paymentaddress</td>
<td>string</td>
<td>The node&#39;s payment address for this specific command.</td>
</tr>
<tr>
<td>disabled</td>
<td>bool</td>
<td>Signifies if the node has disabled this command.<br><code>true</code>: Call is disabled and not supported.<br><code>false</code>: Call is enabled and supported.</td>
</tr>
<tr>
<td>feedefault</td>
<td>float</td>
<td>The node&#39;s default service fee. This fee is overridden by the values specified in <code>fees</code>, SPV command configuration <code>fee</code>, and XCloud service command configuration <code>fee</code>.</td>
</tr>
<tr>
<td>fees</td>
<td>object</td>
<td>Object of SPV commands and respective fees. These values are overridden by the SPV wallet-specific configuration <code>fee</code>.</td>
</tr>
<tr>
<td>services</td>
<td>object</td>
<td>Object of the node&#39;s XCloud service calls with respective properties.</td>
</tr>
<tr>
<td>parameters</td>
<td>string</td>
<td>Information on the parameters the command takes.</td>
</tr>
<tr>
<td>fee</td>
<td>float</td>
<td>The service command fee. This overrides the <code>feedefault</code> value.</td>
</tr>
<tr>
<td>paymentaddress</td>
<td>string</td>
<td>The node&#39;s payment address for this specific command.</td>
</tr>
<tr>
<td>requestlimit</td>
<td>int</td>
<td>The minimum time allowed between calls in milliseconds. A value of <code>-1</code> means there is no limit. If you exceed this value you will be penalized and eventually banned by this specific node.</td>
</tr>
<tr>
<td>fetchlimit</td>
<td>int</td>
<td>The maximum number of records returned. This pertains to calls such as <a href="#xrgetblocks">xrGetBlocks</a> and <a href="#xrgettransactions">xrGetTransactions</a> where multiple records are returned. A value of <code>-1</code> means there is no limit. A value of <code>0</code> means no blocks will be processed.</td>
</tr>
<tr>
<td>timeout</td>
<td>int</td>
<td>The value for <code>timeout</code> you set in <code>xrouter.conf</code> for this call. Defines how long (in seconds) your client waits for a response from a Service Node. The default value is <code>30</code>.</td>
</tr>
<tr>
<td>uuid</td>
<td>string</td>
<td>The response ID, which can be used to view this response again with <a href="#xrgetreply">xrGetReply</a>.</td>
</tr>
</tbody></table>
<h2 id='xrconnectednodes'>xrConnectedNodes</h2>
<p>This call is used to lists all the data about current and previously connected nodes. This information includes supported SPV wallets, SPV calls, services, fees, and other service settings.</p>
<h3 id='request-parameters-3'>Request Parameters</h3>
<blockquote>
<p>Sample Requests</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli xrConnectedNodes
</code></pre>
<p><code class="api-call">xrConnectedNodes</code></p>

<p>This call does not take parameters.</p>
<h3 id='response-parameters-3'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "reply": [
    {
      "nodepubkey": "02c6c79a75846fd9bb064788b03145e347fa5464558fa9030ebb009df2833369f0",
      "score": 0,
      "banned": false,
      "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
      "spvwallets": [ "MNP", "SYS" ],
      "spvconfigs": [
        {
          "spvwallet": "MNP",
          "commands": [
            {
              "command": "xrGetConfig",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetBlockCount",
              "fee": 0.000000,
              "requestlimit": 10,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetBlockHash",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetBlock",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrSendTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetBlocks",
              "fee": 0.100000,
              "requestlimit": 50,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetTransactions",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrDecodeRawTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            }
          ]
        },
        {
          "spvwallet": "SYS",
          "commands": [
            {
              "command": "xrGetConfig",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetBlockCount",
              "fee": 0.100000,
              "requestlimit": 10,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetBlockHash",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetBlock",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrSendTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetBlocks",
              "fee": 0.100000,
              "requestlimit": 50,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrGetTransactions",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            },
            {
              "command": "xrDecodeRawTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
              "disabled": false
            }
          ]
        }
      ],
      "feedefault": 0.000000,
      "fees": {
        "xrGetBlockCount": 0.000000,
        "xrGetBlocks": 0.100000
      },
      "services": {
        "SYSgetbestblockhash": {
          "parameters": "",
          "fee": 0.100000,
          "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
          "requestlimit": -1,
          "fetchlimit": 50,
          "timeout": 30,
          "disabled": false
        },
        "SYSgetgovernanceinfo": {
          "parameters": "",
          "fee": 0.100000,
          "paymentaddress": "B8zc9PuDJC3XaF7UkQ2CnRDCmXiCs9bDuS",
          "requestlimit": -1,
          "fetchlimit": 50,
          "timeout": 30,
          "disabled": false
        }
      }
    },
    {
      "nodepubkey": "0370874cad6252bb94afa9a253c90122760ce2862e623b515e57bfe0697f3fc515",
      "score": 0,
      "banned": false,
      "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
      "spvwallets": [ "BLOCK", "BTC", "LTC", "SYS" ],
      "spvconfigs": [
        {
          "spvwallet": "BLOCK",
          "commands": [
            {
              "command": "xrGetConfig",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlockCount",
              "fee": 0.000000,
              "requestlimit": -1,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlockHash",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlock",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrSendTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlocks",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetTransactions",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrDecodeRawTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            }
          ]
        },
        {
          "spvwallet": "BTC",
            "commands": [
              {
                "command": "xrGetConfig",
                "fee": 0.200000,
                "requestlimit": 100,
                "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
                "disabled": false
              },
              {
                "command": "xrGetBlockCount",
                "fee": 0.200000,
                "requestlimit": 100,
                "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
                "disabled": false
              },
              {
                "command": "xrGetBlockHash",
                "fee": 0.200000,
                "requestlimit": 100,
                "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
                "disabled": false
              },
              {
                "command": "xrGetBlock",
                "fee": 0.200000,
                "requestlimit": 100,
                "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
                "disabled": false
              },
              {
                "command": "xrGetTransaction",
                "fee": 0.200000,
                "requestlimit": 100,
                "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
                "disabled": false
              },
              {
                "command": "xrSendTransaction",
                "fee": 0.200000,
                "requestlimit": 100,
                "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
                "disabled": false
              },
              {
                "command": "xrGetBlocks",
                "fee": 0.200000,
                "requestlimit": 100,
                "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
                "disabled": false
              },
              {
                "command": "xrGetTransactions",
                "fee": 0.200000,
                "requestlimit": 100,
                "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
                "disabled": false
              },
              {
                "command": "xrDecodeRawTransaction",
                "fee": 0.200000,
                "requestlimit": 100,
                "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
                "disabled": false
              }
            ]
        },
        {
          "spvwallet": "LTC",
          "commands": [
            {
              "command": "xrGetConfig",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlockCount",
              "fee": 0.000000,
              "requestlimit": -1,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlockHash",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlock",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrSendTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlocks",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetTransactions",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrDecodeRawTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            }
          ]
        },
        {
          "spvwallet": "SYS",
          "commands": [
            {
              "command": "xrGetConfig",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlockCount",
              "fee": 0.000000,
              "requestlimit": -1,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlockHash",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlock",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrSendTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetBlocks",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrGetTransactions",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            },
            {
              "command": "xrDecodeRawTransaction",
              "fee": 0.000000,
              "requestlimit": 50,
              "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
              "disabled": false
            }
          ]
        }
      ],
      "feedefault": 0.000000,
      "fees": {
        "BTC": 0.200000,
        "xrGetBlockCount": 0.000000
      },
      "services": {
        "BTCgetbestblockhash": {
          "parameters": "",
          "fee": 0.000000,
          "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
          "requestlimit": 50,
          "fetchlimit": 50,
          "timeout": 30,
          "disabled": false
        },
        "BTCgetblockhash": {
          "parameters": "int",
          "fee": 0.000000,
          "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
          "requestlimit": 50,
          "fetchlimit": 50,
          "timeout": 30,
          "disabled": false
        },
        "BTCgettransaction": {
          "parameters": "string",
          "fee": 0.000000,
          "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
          "requestlimit": 50,
          "fetchlimit": 50,
          "timeout": 30,
          "disabled": false
        },
        "SYSgetbestblockhash": {
          "parameters": "",
          "fee": 0.000000,
          "paymentaddress": "BGyvu6uHJ9WLftPgwHeAU5HwmgGmpB3Juh",
          "requestlimit": 10,
          "fetchlimit": 50,
          "timeout": 30,
          "disabled": false
        }
      }
    }
  ],
  "uuid": "88A16FDB-464D-470B-94CD-D827E63285CC"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>reply</td>
<td>array</td>
<td>An array of nodes providing the specified service.</td>
</tr>
<tr>
<td>nodepubkey</td>
<td>string</td>
<td>The node ID.</td>
</tr>
<tr>
<td>score</td>
<td>int</td>
<td>The node&#39;s score based on quality of service. A score of <code>-200</code> will ban the node for a 24hr period. You can change the ban threshold with the <code>xrouterbanscore</code> setting in <code>blocknet.conf</code>. See <a href="#xrouter-node-scoring">node scoring</a> for more details.</td>
</tr>
<tr>
<td>banned</td>
<td>bool</td>
<td>Signifies if the node is currently banned.<br><code>true</code>: Node is banned.<br><code>false</code>: Node is not banned. See <a href="#xrouter-node-scoring">node scoring</a> for more details.</td>
</tr>
<tr>
<td>paymentaddress</td>
<td>string</td>
<td>The node&#39;s payment address.</td>
</tr>
<tr>
<td>spvwallets</td>
<td>array</td>
<td>An array of supported SPV wallets, represented by the asset&#39;s ticker.</td>
</tr>
<tr>
<td>spvconfigs</td>
<td>array</td>
<td>An array of each SPV wallets and command configurations.</td>
</tr>
<tr>
<td>spvwallet</td>
<td>string</td>
<td>The SPV wallet that the configurations under <code>commands</code> pertains to.</td>
</tr>
<tr>
<td>commands</td>
<td>array</td>
<td>An array of each SPV wallet command and respective configurations.</td>
</tr>
<tr>
<td>command</td>
<td>string</td>
<td>The SPV command.</td>
</tr>
<tr>
<td>fee</td>
<td>float</td>
<td>The SPV command fee. This overrides the <code>feedefault</code> and <code>fees</code> values.</td>
</tr>
<tr>
<td>requestlimit</td>
<td>int</td>
<td>The minimum time allowed between calls in milliseconds. A value of <code>-1</code> means there is no limit. If you exceed this value you will be penalized and eventually banned by this specific node.</td>
</tr>
<tr>
<td>paymentaddress</td>
<td>string</td>
<td>The node&#39;s payment address for this specific command.</td>
</tr>
<tr>
<td>disabled</td>
<td>bool</td>
<td>Signifies if the node has disabled this command.<br><code>true</code>: Call is disabled and not supported.<br><code>false</code>: Call is enabled and supported.</td>
</tr>
<tr>
<td>feedefault</td>
<td>float</td>
<td>The node&#39;s default service fee. This fee is overridden by the values specified in <code>fees</code>, SPV command configuration <code>fee</code>, and XCloud service command configuration <code>fee</code>.</td>
</tr>
<tr>
<td>fees</td>
<td>object</td>
<td>Object of SPV commands and respective fees. These values are overridden by the SPV wallet-specific configuration <code>fee</code>.</td>
</tr>
<tr>
<td>services</td>
<td>object</td>
<td>Object of the node&#39;s XCloud service calls with respective properties.</td>
</tr>
<tr>
<td>parameters</td>
<td>string</td>
<td>Information on the parameters the command takes.</td>
</tr>
<tr>
<td>fee</td>
<td>float</td>
<td>The service command fee. This overrides the <code>feedefault</code> value.</td>
</tr>
<tr>
<td>paymentaddress</td>
<td>string</td>
<td>The node&#39;s payment address for this specific command.</td>
</tr>
<tr>
<td>requestlimit</td>
<td>int</td>
<td>The minimum time allowed between calls in milliseconds. A value of <code>-1</code> means there is no limit. If you exceed this value you will be penalized and eventually banned by this specific node.</td>
</tr>
<tr>
<td>fetchlimit</td>
<td>int</td>
<td>The maximum number of records returned. This pertains to calls such as <a href="#xrgetblocks">xrGetBlocks</a> and <a href="#xrgettransactions">xrGetTransactions</a> where multiple records are returned. A value of <code>-1</code> means there is no limit. A value of <code>0</code> means no blocks will be processed.</td>
</tr>
<tr>
<td>timeout</td>
<td>int</td>
<td>The value for <code>timeout</code> you set in <code>xrouter.conf</code> for this call. Defines how long (in seconds) your client waits for a response from a Service Node. The default value is <code>30</code>.</td>
</tr>
<tr>
<td>uuid</td>
<td>string</td>
<td>The response ID, which can be used to view this response again with <a href="#xrgetreply">xrGetReply</a>.</td>
</tr>
</tbody></table>
<h2 id='xrgetblockcount'>xrGetBlockCount</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "blockchain": "SYS"
}
</code></pre>
<p>This call is used to retrieve the current block height of the longest chain for the specified blockchain. It requires the blockchain to be SPV wallet supported.</p>
<h3 id='request-parameters-4'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli xrGetBlockCount SYS 2
</code></pre>
<p><code class="api-call">xrGetBlockCount [blockchain] [node_count](optional)</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>blockchain</td>
<td>string</td>
<td>The blockchain, represented by the asset&#39;s ticker (BTC, LTC, SYS, etc.).</td>
</tr>
<tr>
<td>node_count</td>
<td>int</td>
<td>(Optional Parameter)<br>Defaults to <code>1</code> if no <code>consensus=</code> setting in <code>xrouter.conf</code>.<br>The number of nodes that will be used to route calls. The most common response (i.e. the response with the most consensus) will be returned as <code>reply</code>.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-4'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "reply": 482107,
  "allreplies": [
    {
      "nodepubkey": "02c6c79a75846fd9bb064788b03145e347fa5464558fa9030ebb009df2833369f0",
      "score": 48,
      "reply": 482107
    },
    {
      "nodepubkey": "0370874cad6252bb94afa9a253c90122760ce2862e623b515e57bfe0697f3fc515",
      "score": 52,
      "reply": 482107
    }
  ],
  "uuid": "34d0998e-a950-4fd8-b1d6-7571c83abb50"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>reply</td>
<td>int</td>
<td>The latest block number of the specified blockchain. If using a <code>node_count</code> greater than <code>1</code>, this returns the most common reply within <code>allreplies</code>. If there is a tie then one is chosen, or if one is an error then the non-error is chosen.</td>
</tr>
<tr>
<td>allreplies*</td>
<td>array</td>
<td>An array of objects with responses from each node. This can be useful if you wanted to do your own analysis/filtering of the responses.</td>
</tr>
<tr>
<td>nodepubkey*</td>
<td>string</td>
<td>The node ID.</td>
</tr>
<tr>
<td>score*</td>
<td>int</td>
<td>The respective node&#39;s score based on quality of service. A score of <code>-200</code> will ban the node for a 24hr period. You can change the ban threshold with the <code>xrouterbanscore</code> setting in <code>blocknet.conf</code>. See <a href="#xrouter-node-scoring">node scoring</a> for more details.</td>
</tr>
<tr>
<td>reply*</td>
<td>int</td>
<td>The latest block number of the specified blockchain from the respective node.</td>
</tr>
<tr>
<td>uuid</td>
<td>string</td>
<td>The response ID, which can be used to view this response again with <a href="#xrgetreply">xrGetReply</a>.</td>
</tr>
</tbody></table>

<p>* This is only returned if using a <code>node_count</code> greater than <code>1</code>.</p>
<h2 id='xrgetblockhash'>xrGetBlockHash</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "blockchain": "SYS",
  "block_number": 91510
}
</code></pre>
<p>This call is used to retrieve the block hash of the specified block and blockchain.</p>
<h3 id='request-parameters-5'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli xrGetBlockHash SYS 482107 2
</code></pre>
<p><code class="api-call">xrGetBlockHash [blockchain] [block_number] [node_count](optional)</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>blockchain</td>
<td>string</td>
<td>The blockchain, represented by the asset&#39;s ticker (BTC, LTC, SYS, etc.).</td>
</tr>
<tr>
<td>block_number</td>
<td>string</td>
<td>The block number or hex for the block hash of interest.</td>
</tr>
<tr>
<td>node_count</td>
<td>int</td>
<td>(Optional Parameter)<br>Defaults to <code>1</code> if no <code>consensus=</code> setting in <code>xrouter.conf</code>.<br>The number of nodes that will be used to route calls. The most common response (i.e. the response with the most consensus) will be returned as <code>reply</code>.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-5'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "reply": "52583afcd857e45234e7c8981804b36d13a7b3025c17f3535c3e724542590a79",
  "allreplies": [
    {
      "nodepubkey": "02c6c79a75846fd9bb064788b03145e347fa5464558fa9030ebb009df2833369f0",
      "score": 238,
      "reply": "52583afcd857e45234e7c8981804b36d13a7b3025c17f3535c3e724542590a79"
    },
    {
      "nodepubkey": "0370874cad6252bb94afa9a253c90122760ce2862e623b515e57bfe0697f3fc515",
      "score": 288,
      "reply": "52583afcd857e45234e7c8981804b36d13a7b3025c17f3535c3e724542590a79"
    }
  ],
  "uuid": "3c84d025-8a03-4b64-848f-99892fe481ff"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>reply</td>
<td>string</td>
<td>The block hash of the specified block and blockchain. If using a <code>node_count</code> greater than <code>1</code>, this returns the most common reply within <code>allreplies</code>. If there is a tie then one is chosen, or if one is an error then the non-error is chosen.</td>
</tr>
<tr>
<td>allreplies*</td>
<td>array</td>
<td>An array of objects with responses from each node. This can be useful if you wanted to do your own analysis/filtering of the responses.</td>
</tr>
<tr>
<td>nodepubkey*</td>
<td>string</td>
<td>The node ID.</td>
</tr>
<tr>
<td>score*</td>
<td>int</td>
<td>The respective node&#39;s score based on quality of service. A score of <code>-200</code> will ban the node for a 24hr period. You can change the ban threshold with the <code>xrouterbanscore</code> setting in <code>blocknet.conf</code>. See <a href="#xrouter-node-scoring">node scoring</a> for more details.</td>
</tr>
<tr>
<td>reply*</td>
<td>string</td>
<td>The block hash of the specified block and blockchain from the respective node.</td>
</tr>
<tr>
<td>uuid</td>
<td>string</td>
<td>The response ID, which can be used to view this response again with <a href="#xrgetreply">xrGetReply</a>.</td>
</tr>
</tbody></table>

<p>* This is only returned if using a <code>node_count</code> greater than <code>1</code>.</p>
<h2 id='xrgetblock'>xrGetBlock</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "blockchain": "SYS",
  "block_hash": "0cf18712db68be85793dc06cd0a4fbc8edb166157e6847bb3c9f55d462b02837"
}
</code></pre>
<p>This call is used to retrieve the block data for the specified block hash and blockchain.</p>
<h3 id='request-parameters-6'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli xrGetBlock SYS 0cf18712db68be85793dc06cd0a4fbc8edb166157e6847bb3c9f55d462b02837 2
</code></pre>
<p><code class="api-call">xrGetBlock [blockchain] [block_hash] [node_count](optional)</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>blockchain</td>
<td>string</td>
<td>The blockchain, represented by the asset&#39;s ticker (BTC, LTC, SYS, etc.).</td>
</tr>
<tr>
<td>block_hash</td>
<td>string</td>
<td>The block hash for the block of interest.</td>
</tr>
<tr>
<td>node_count</td>
<td>int</td>
<td>(Optional Parameter)<br>Defaults to <code>1</code> if no <code>consensus=</code> setting in <code>xrouter.conf</code>.<br>The number of nodes that will be used to route calls. The most common response (i.e. the response with the most consensus) will be returned as <code>reply</code>.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-6'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "reply": [
    {
      "hash": "0cf18712db68be85793dc06cd0a4fbc8edb166157e6847bb3c9f55d462b02837",
      "confirmations": 390700,
      "size": 734,
      "height": 91510,
      "version": 805306624,
      "versionHex": "30000100",
      "merkleroot": "55554df0ea7f66552beffe433d2c2f620bada79063a343ffc23c60c67cdf028f",
      "tx": [ "55554df0ea7f66552beffe433d2c2f620bada79063a343ffc23c60c67cdf028f" ],
      "time": 1530894673,
      "mediantime": 1530894336,
      "nonce": 0,
      "bits": "180761db",
      "difficulty": 148937676133.261200,
      "chainwork": "00000000000000000000000000000000000000000028ad56864c458781e21970",
      "auxpow": {
        "tx": {
          "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff5703dd3408142f5669614254432f626d67706f6f6c2e636f6d2f2cfabe6d6d75654ab7a6b163e7a04e56e43f8e7ca0087f11e8bd6c3c72c69732e849532878040000000000000010d51dbb0b9301409ff96ef9f588c50200ffffffff01c051824a000000001976a914f1c075a01882ae0972f95d3a4177c86c852b7d9188ac00000000",
          "txid": "c8fc123672fffb3c6a45b94bdd30afc114f282742338809380bc84fe8666d489",
          "size": 172,
          "version": 1,
          "locktime": 0,
          "vin": [
            {
              "coinbase": "03dd3408142f5669614254432f626d67706f6f6c2e636f6d2f2cfabe6d6d75654ab7a6b163e7a04e56e43f8e7ca0087f11e8bd6c3c72c69732e849532878040000000000000010d51dbb0b9301409ff96ef9f588c50200",
              "sequence": 4294967295
            }
          ],
          "vout": [
            {
              "value": 12.500546,
              "valueSat": 1250054592,
              "n": 0,
              "scriptPubKey": {
                "asm": "OP_DUP OP_HASH160 f1c075a01882ae0972f95d3a4177c86c852b7d91 OP_EQUALVERIFY OP_CHECKSIG",
                "hex": "76a914f1c075a01882ae0972f95d3a4177c86c852b7d9188ac",
                "reqSigs": 1,
                "type": "pubkeyhash",
                "addresses": [ "SjLGSPfmF3kVPA6A213hShYc4aRtiWZ8Wu" ]
              }
            }
          ],
          "blockhash": "000000000000000004bdb8e3fdf28ffc528f4e6b1871a6177579cbd4dabde955"
        },
        "index": 0,
        "chainindex": 2,
        "merklebranch": [ "a67d749dfa7006b9d66d2284b20a64ebcb8c2e5aae18e355c790b90a060a30c1", "9ab5c057ecf43aa0552c21be4f86b1c9b248fe2dd0821bee38e5a25a22c49c25", "ec11fd79e02fe98bf9f4b624e5460a3221dbae27d24f36c9988dcc5beaf3c592", "dbc42b7360a7165b277f73094a366e951d3ac6d6a1e9493d838d35372e5e846b", "c7260dbfb6b196bd2e4e4dbde1799592627a3e6fa384e6692be8387a9251e5e2" ],
        "chainmerklebranch": [ "89af0bc973bc0308f14c5c50c3d75f68783eab40a4688064cd56cfaed977d138", "5360cbf0991b4b0e09d589631c232d1f229104faad9e65375695230c47bc2493" ],
        "parentblock": "0000002024653d98f3eace4b66b6269fa9205e08b647e23cf7880e0000000000000000003feae4c877b2f8b73f6f92a589ed8870fe98abb3551f1539373597f5b44514ada9993f5bb1830118d5793688"
      },
      "previousblockhash": "ba53d715abf76ac8adc025120ffb48b2331f3a1b9b7d01167ffd7dcd23934390",
      "nextblockhash": "cd3a236542491089bffd8ba49cbe1d11a20dd4c4ad188307027e60c710732409"
    }
  ],
  "allreplies": [
    {
      "nodepubkey": "02c6c79a75846fd9bb064788b03145e347fa5464558fa9030ebb009df2833369f0",
      "score": 242,
      "reply": [
        {
          "hash": "0cf18712db68be85793dc06cd0a4fbc8edb166157e6847bb3c9f55d462b02837",
          "confirmations": 390700,
          "size": 734,
          "height": 91510,
          "version": 805306624,
          "versionHex": "30000100",
          "merkleroot": "55554df0ea7f66552beffe433d2c2f620bada79063a343ffc23c60c67cdf028f",
          "tx": [ "55554df0ea7f66552beffe433d2c2f620bada79063a343ffc23c60c67cdf028f" ],
          "time": 1530894673,
          "mediantime": 1530894336,
          "nonce": 0,
          "bits": "180761db",
          "difficulty": 148937676133.261200,
          "chainwork": "00000000000000000000000000000000000000000028ad56864c458781e21970",
          "auxpow": {
            "tx": {
              "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff5703dd3408142f5669614254432f626d67706f6f6c2e636f6d2f2cfabe6d6d75654ab7a6b163e7a04e56e43f8e7ca0087f11e8bd6c3c72c69732e849532878040000000000000010d51dbb0b9301409ff96ef9f588c50200ffffffff01c051824a000000001976a914f1c075a01882ae0972f95d3a4177c86c852b7d9188ac00000000",
              "txid": "c8fc123672fffb3c6a45b94bdd30afc114f282742338809380bc84fe8666d489",
              "size": 172,
              "version": 1,
              "locktime": 0,
              "vin": [
                {
                  "coinbase": "03dd3408142f5669614254432f626d67706f6f6c2e636f6d2f2cfabe6d6d75654ab7a6b163e7a04e56e43f8e7ca0087f11e8bd6c3c72c69732e849532878040000000000000010d51dbb0b9301409ff96ef9f588c50200",
                  "sequence": 4294967295
                }
              ],
              "vout": [
                {
                  "value": 12.500546,
                  "valueSat": 1250054592,
                  "n": 0,
                  "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 f1c075a01882ae0972f95d3a4177c86c852b7d91 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914f1c075a01882ae0972f95d3a4177c86c852b7d9188ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": [ "SjLGSPfmF3kVPA6A213hShYc4aRtiWZ8Wu" ]
                  }
                }
              ],
                "blockhash": "000000000000000004bdb8e3fdf28ffc528f4e6b1871a6177579cbd4dabde955"
            },
            "index": 0,
            "chainindex": 2,
            "merklebranch": [ "a67d749dfa7006b9d66d2284b20a64ebcb8c2e5aae18e355c790b90a060a30c1", "9ab5c057ecf43aa0552c21be4f86b1c9b248fe2dd0821bee38e5a25a22c49c25", "ec11fd79e02fe98bf9f4b624e5460a3221dbae27d24f36c9988dcc5beaf3c592", "dbc42b7360a7165b277f73094a366e951d3ac6d6a1e9493d838d35372e5e846b", "c7260dbfb6b196bd2e4e4dbde1799592627a3e6fa384e6692be8387a9251e5e2" ],
            "chainmerklebranch": [ "89af0bc973bc0308f14c5c50c3d75f68783eab40a4688064cd56cfaed977d138", "5360cbf0991b4b0e09d589631c232d1f229104faad9e65375695230c47bc2493" ],
            "parentblock": "0000002024653d98f3eace4b66b6269fa9205e08b647e23cf7880e0000000000000000003feae4c877b2f8b73f6f92a589ed8870fe98abb3551f1539373597f5b44514ada9993f5bb1830118d5793688"
          },
          "previousblockhash": "ba53d715abf76ac8adc025120ffb48b2331f3a1b9b7d01167ffd7dcd23934390",
          "nextblockhash": "cd3a236542491089bffd8ba49cbe1d11a20dd4c4ad188307027e60c710732409"
        }
      ]
    },
    {
      "nodepubkey": "0370874cad6252bb94afa9a253c90122760ce2862e623b515e57bfe0697f3fc515",
      "score": 292,
      "reply": [
        {
          "hash": "0cf18712db68be85793dc06cd0a4fbc8edb166157e6847bb3c9f55d462b02837",
          "confirmations": 390700,
          "size": 734,
          "height": 91510,
          "version": 805306624,
          "versionHex": "30000100",
          "merkleroot": "55554df0ea7f66552beffe433d2c2f620bada79063a343ffc23c60c67cdf028f",
          "tx": [ "55554df0ea7f66552beffe433d2c2f620bada79063a343ffc23c60c67cdf028f" ],
          "time": 1530894673,
          "mediantime": 1530894336,
          "nonce": 0,
          "bits": "180761db",
          "difficulty": 148937676133.261200,
          "chainwork": "00000000000000000000000000000000000000000028ad56864c458781e21970",
          "auxpow": {
            "tx": {
              "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff5703dd3408142f5669614254432f626d67706f6f6c2e636f6d2f2cfabe6d6d75654ab7a6b163e7a04e56e43f8e7ca0087f11e8bd6c3c72c69732e849532878040000000000000010d51dbb0b9301409ff96ef9f588c50200ffffffff01c051824a000000001976a914f1c075a01882ae0972f95d3a4177c86c852b7d9188ac00000000",
              "txid": "c8fc123672fffb3c6a45b94bdd30afc114f282742338809380bc84fe8666d489",
              "size": 172,
              "version": 1,
              "locktime": 0,
              "vin": [
                {
                  "coinbase": "03dd3408142f5669614254432f626d67706f6f6c2e636f6d2f2cfabe6d6d75654ab7a6b163e7a04e56e43f8e7ca0087f11e8bd6c3c72c69732e849532878040000000000000010d51dbb0b9301409ff96ef9f588c50200",
                  "sequence": 4294967295
                }
              ],
              "vout": [
                {
                  "value": 12.500546,
                  "valueSat": 1250054592,
                  "n": 0,
                  "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 f1c075a01882ae0972f95d3a4177c86c852b7d91 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914f1c075a01882ae0972f95d3a4177c86c852b7d9188ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": [ "SjLGSPfmF3kVPA6A213hShYc4aRtiWZ8Wu" ]
                  }
                }
              ],
              "blockhash": "000000000000000004bdb8e3fdf28ffc528f4e6b1871a6177579cbd4dabde955"
            },
            "index": 0,
            "chainindex": 2,
            "merklebranch": [ "a67d749dfa7006b9d66d2284b20a64ebcb8c2e5aae18e355c790b90a060a30c1", "9ab5c057ecf43aa0552c21be4f86b1c9b248fe2dd0821bee38e5a25a22c49c25", "ec11fd79e02fe98bf9f4b624e5460a3221dbae27d24f36c9988dcc5beaf3c592", "dbc42b7360a7165b277f73094a366e951d3ac6d6a1e9493d838d35372e5e846b", "c7260dbfb6b196bd2e4e4dbde1799592627a3e6fa384e6692be8387a9251e5e2" ],
            "chainmerklebranch": [ "89af0bc973bc0308f14c5c50c3d75f68783eab40a4688064cd56cfaed977d138", "5360cbf0991b4b0e09d589631c232d1f229104faad9e65375695230c47bc2493" ],
            "parentblock": "0000002024653d98f3eace4b66b6269fa9205e08b647e23cf7880e0000000000000000003feae4c877b2f8b73f6f92a589ed8870fe98abb3551f1539373597f5b44514ada9993f5bb1830118d5793688"
          },
          "previousblockhash": "ba53d715abf76ac8adc025120ffb48b2331f3a1b9b7d01167ffd7dcd23934390",
          "nextblockhash": "cd3a236542491089bffd8ba49cbe1d11a20dd4c4ad188307027e60c710732409"
        }
      ]
    }
  ],
  "uuid": "5404cc31-2b01-48eb-8599-e6adcd8f9216"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>reply</td>
<td>object</td>
<td>An object containing the block data for the specified block hash and blockchain. If using a <code>node_count</code> greater than <code>1</code>, this returns the most common reply within <code>allreplies</code>. If there is a tie then one is chosen, or if one is an error then the non-error is chosen.</td>
</tr>
<tr>
<td>allreplies*</td>
<td>array</td>
<td>An array of objects with responses from each node. This can be useful if you wanted to do your own analysis/filtering of the responses.</td>
</tr>
<tr>
<td>nodepubkey*</td>
<td>string</td>
<td>The node ID.</td>
</tr>
<tr>
<td>score*</td>
<td>int</td>
<td>The respective node&#39;s score based on quality of service. A score of <code>-200</code> will ban the node for a 24hr period. You can change the ban threshold with the <code>xrouterbanscore</code> setting in <code>blocknet.conf</code>. See <a href="#xrouter-node-scoring">node scoring</a> for more details.</td>
</tr>
<tr>
<td>reply*</td>
<td>object</td>
<td>An object containing the block data for the specified block hash and blockchain from the respective node.</td>
</tr>
<tr>
<td>uuid</td>
<td>string</td>
<td>The response ID, which can be used to view this response again with <a href="#xrgetreply">xrGetReply</a>.</td>
</tr>
</tbody></table>

<p>* This is only returned if using a <code>node_count</code> greater than <code>1</code>.</p>
<h2 id='xrgetblocks'>xrGetBlocks</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "blockchain": "SYS",
  "block_hash1": "0cf18712db68be85793dc06cd0a4fbc8edb166157e6847bb3c9f55d462b02837",
  "block_hash2": "52583afcd857e45234e7c8981804b36d13a7b3025c17f3535c3e724542590a79"
}
</code></pre>
<p>This call is used to retrieve block data for multiple block hashes on the specified blockchain. Currently the maximum request is 50 blocks, although a node may set this limit to less.</p>
<h3 id='request-parameters-7'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli xrGetBlocks SYS "0cf18712db68be85793dc06cd0a4fbc8edb166157e6847bb3c9f55d462b02837,52583afcd857e45234e7c8981804b36d13a7b3025c17f3535c3e724542590a79" 2
</code></pre>
<p><code class="api-call">xrGetBlocks [blockchain] [block_hashes] [node_count](optional)</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>blockchain</td>
<td>string</td>
<td>The blockchain, represented by the asset&#39;s ticker (BTC, LTC, SYS, etc.).</td>
</tr>
<tr>
<td>block_hashes</td>
<td>string</td>
<td>A comma-demilited string of block hashes for the blocks of interest. The hashes must be separated by a comma with no spaces.</td>
</tr>
<tr>
<td>node_count</td>
<td>int</td>
<td>(Optional Parameter)<br>Defaults to <code>1</code> if no <code>consensus=</code> setting in <code>xrouter.conf</code>.<br>The number of nodes that will be used to route calls. The most common response (i.e. the response with the most consensus) will be returned as <code>reply</code>.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-7'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "reply": [
    {
      "hash": "0cf18712db68be85793dc06cd0a4fbc8edb166157e6847bb3c9f55d462b02837",
      "confirmations": 390700,
      "size": 734,
      "height": 91510,
      "version": 805306624,
      "versionHex": "30000100",
      "merkleroot": "55554df0ea7f66552beffe433d2c2f620bada79063a343ffc23c60c67cdf028f",
      "tx": [ "55554df0ea7f66552beffe433d2c2f620bada79063a343ffc23c60c67cdf028f" ],
      "time": 1530894673,
      "mediantime": 1530894336,
      "nonce": 0,
      "bits": "180761db",
      "difficulty": 148937676133.261200,
      "chainwork": "00000000000000000000000000000000000000000028ad56864c458781e21970",
      "auxpow": {
        "tx": {
          "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff5703dd3408142f5669614254432f626d67706f6f6c2e636f6d2f2cfabe6d6d75654ab7a6b163e7a04e56e43f8e7ca0087f11e8bd6c3c72c69732e849532878040000000000000010d51dbb0b9301409ff96ef9f588c50200ffffffff01c051824a000000001976a914f1c075a01882ae0972f95d3a4177c86c852b7d9188ac00000000",
          "txid": "c8fc123672fffb3c6a45b94bdd30afc114f282742338809380bc84fe8666d489",
          "size": 172,
          "version": 1,
          "locktime": 0,
          "vin": [
            {
              "coinbase": "03dd3408142f5669614254432f626d67706f6f6c2e636f6d2f2cfabe6d6d75654ab7a6b163e7a04e56e43f8e7ca0087f11e8bd6c3c72c69732e849532878040000000000000010d51dbb0b9301409ff96ef9f588c50200",
              "sequence": 4294967295
            }
          ],
          "vout": [
            {
              "value": 12.500546,
              "valueSat": 1250054592,
              "n": 0,
              "scriptPubKey": {
                "asm": "OP_DUP OP_HASH160 f1c075a01882ae0972f95d3a4177c86c852b7d91 OP_EQUALVERIFY OP_CHECKSIG",
                "hex": "76a914f1c075a01882ae0972f95d3a4177c86c852b7d9188ac",
                "reqSigs": 1,
                "type": "pubkeyhash",
                "addresses": [ "SjLGSPfmF3kVPA6A213hShYc4aRtiWZ8Wu" ]
              }
            }
          ],
          "blockhash": "000000000000000004bdb8e3fdf28ffc528f4e6b1871a6177579cbd4dabde955"
        },
        "index": 0,
        "chainindex": 2,
        "merklebranch": [ "a67d749dfa7006b9d66d2284b20a64ebcb8c2e5aae18e355c790b90a060a30c1", "9ab5c057ecf43aa0552c21be4f86b1c9b248fe2dd0821bee38e5a25a22c49c25", "ec11fd79e02fe98bf9f4b624e5460a3221dbae27d24f36c9988dcc5beaf3c592", "dbc42b7360a7165b277f73094a366e951d3ac6d6a1e9493d838d35372e5e846b", "c7260dbfb6b196bd2e4e4dbde1799592627a3e6fa384e6692be8387a9251e5e2" ],
        "chainmerklebranch": [ "89af0bc973bc0308f14c5c50c3d75f68783eab40a4688064cd56cfaed977d138", "5360cbf0991b4b0e09d589631c232d1f229104faad9e65375695230c47bc2493" ],
        "parentblock": "0000002024653d98f3eace4b66b6269fa9205e08b647e23cf7880e0000000000000000003feae4c877b2f8b73f6f92a589ed8870fe98abb3551f1539373597f5b44514ada9993f5bb1830118d5793688"
      },
      "previousblockhash": "ba53d715abf76ac8adc025120ffb48b2331f3a1b9b7d01167ffd7dcd23934390",
      "nextblockhash": "cd3a236542491089bffd8ba49cbe1d11a20dd4c4ad188307027e60c710732409"
    },
    {
      "hash": "52583afcd857e45234e7c8981804b36d13a7b3025c17f3535c3e724542590a79",
      "confirmations": 115,
      "size": 1073,
      "height": 482107,
      "version": 805306624,
      "versionHex": "30000100",
      "merkleroot": "d1de796d10826dcc97af3d9683711da0f8e8aad996277034bd9b11631ce0d1f2",
      "tx": [ "d1de796d10826dcc97af3d9683711da0f8e8aad996277034bd9b11631ce0d1f2" ],
      "time": 1555482589,
      "mediantime": 1555482282,
      "nonce": 0,
      "bits": "1805ec8b",
      "difficulty": 185600202264.865814,
      "chainwork": "000000000000000000000000000000000000000000f8bf3057c91ffc80efc4fc",
      "auxpow": {
        "tx": {
          "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff5b0355ba08182f5669614254432f4d696e65642062792067656e6469722f2cfabe6d6daa2651dfd7b34e3cf5b87fd5ab3b70a78d23194d2269c502280de7193d73790f10000000000000001056691e0c261e0b871f9d92be0000259bffffffff0206baf84b000000001976a914536ffa992491508dca0354e52f32a3a7a679a53a88ac0000000000000000266a24aa21a9ed6e46f58e0097a34b65b4d332ebde4a0cedb300fab27549b3ee1c09fd2d7875d300000000",
          "txid": "94ce9c796176df4cbe67695c0bfcd63587b1b664e23b716233980dc07d2874d7",
          "size": 223,
          "version": 1,
          "locktime": 0,
          "vin": [
            {
              "coinbase": "0355ba08182f5669614254432f4d696e65642062792067656e6469722f2cfabe6d6daa2651dfd7b34e3cf5b87fd5ab3b70a78d23194d2269c502280de7193d73790f10000000000000001056691e0c261e0b871f9d92be0000259b",
              "sequence": 4294967295
            }
          ],
          "vout": [
            {
              "value": 12.745918,
              "valueSat": 1274591750,
              "n": 0,
              "scriptPubKey": {
                "asm": "OP_DUP OP_HASH160 536ffa992491508dca0354e52f32a3a7a679a53a OP_EQUALVERIFY OP_CHECKSIG",
                "hex": "76a914536ffa992491508dca0354e52f32a3a7a679a53a88ac",
                "reqSigs": 1,
                "type": "pubkeyhash",
                "addresses": [ "SUuBGCD7Ff3C2ozR6osYguPeXNho98S5qR" ]
              }
            },
            {
              "value": 0.000000,
              "valueSat": 0,
              "n": 1,
              "scriptPubKey": {
                "asm": "OP_RETURN aa21a9ed6e46f58e0097a34b65b4d332ebde4a0cedb300fab27549b3ee1c09fd2d7875d3",
                "hex": "6a24aa21a9ed6e46f58e0097a34b65b4d332ebde4a0cedb300fab27549b3ee1c09fd2d7875d3",
                "type": "nulldata"
              }
            }
          ],
          "blockhash": "000000000000000000bcf15d287a324f073b1e0239452a6d4d513c27dc73150a"
        },
        "index": 0,
        "chainindex": 14,
        "merklebranch": [ "b468e6225dbecfbbf9f86cc8414afb70ae1fade27008e5f8080f74341dbc103c", "c5ec7ac7fb9405564c2afffcd0279c8237a883f0e414011cfe4439572fd8f476", "72731cb13f6ef60cc4647c5c98a48a67ae83a8b2db8e6fcc3ffc2e5cb33e45e3", "3975f42ce7c1be1dfd2118fd7bce4bc2b67993a5f03f6389089e86446e391533", "1fa4527c16a1fd05735914c568d0265ec92e9608890d22ece6f1edcb989fad1a", "018223df5ec9acd3a1ce30e445477d8ca368a6a1dcba8616f5178c9e41287f42", "86dff2db9b12c6afd1cdcd60415e5d19356eaffe5d938fbc2b6147c2430363f5", "77d0cb1a7e0d3cebc57380bd3546a45923107aff5b8bb969d0272d2fd6709280", "04a2a80fdd3a2ccf24642fec547bbb7415922ee6348a0c5b8efbe25611120258", "822ee423a7c096e070117f7573824922c2d612027278d8f330977abf75657ddc", "b7bb4ddf8d79219e9e0e8bb599c23e943317e3c4d8f0e31bd712a08edaace138", "47828c64e2141a2417f271a22dc80fa716604ce044fc0db1827a9a3818c0ca22" ],
        "chainmerklebranch": [ "0000000000000000000000000000000000000000000000000000000000000000", "f98c4e9736d8eb8bb46299798906695c755369a3df99a93ffdded1713f1cf6e2", "36e70e1ae90b14efb14d594dff72647f862e97c4f704ad0d609041bb7d73aaa5", "63e9f83bff026dcfa4d967e727ceb35dbdf7e02225d88f2ce2f3842f10c16481" ],
        "parentblock": "000000208100da1ca9afee2f159a537c64aa7fcfce77dbdce07009000000000000000000d63acfaac8ae4bc195f8ba076f306c45ec06a8a740a182263e96732d842984cee6c7b65c1d072c174919714b"
      },
      "previousblockhash": "abe70792116fd7806b211b6d67cc6bfa1490aa0dea71587d0bbbe9ee435c9c2a",
      "nextblockhash": "2d7adca3fe7a51018b909aa1c63a7669a75a6729a2da66a08de19d4f13e66032"
    }
  ],
  "allreplies": [
    {
      "nodepubkey": "02c6c79a75846fd9bb064788b03145e347fa5464558fa9030ebb009df2833369f0",
      "score": 242,
      "reply": [
        {
          "hash": "0cf18712db68be85793dc06cd0a4fbc8edb166157e6847bb3c9f55d462b02837",
          "confirmations": 390700,
          "size": 734,
          "height": 91510,
          "version": 805306624,
          "versionHex": "30000100",
          "merkleroot": "55554df0ea7f66552beffe433d2c2f620bada79063a343ffc23c60c67cdf028f",
          "tx": [ "55554df0ea7f66552beffe433d2c2f620bada79063a343ffc23c60c67cdf028f" ],
          "time": 1530894673,
          "mediantime": 1530894336,
          "nonce": 0,
          "bits": "180761db",
          "difficulty": 148937676133.261200,
          "chainwork": "00000000000000000000000000000000000000000028ad56864c458781e21970",
          "auxpow": {
            "tx": {
              "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff5703dd3408142f5669614254432f626d67706f6f6c2e636f6d2f2cfabe6d6d75654ab7a6b163e7a04e56e43f8e7ca0087f11e8bd6c3c72c69732e849532878040000000000000010d51dbb0b9301409ff96ef9f588c50200ffffffff01c051824a000000001976a914f1c075a01882ae0972f95d3a4177c86c852b7d9188ac00000000",
              "txid": "c8fc123672fffb3c6a45b94bdd30afc114f282742338809380bc84fe8666d489",
              "size": 172,
              "version": 1,
              "locktime": 0,
              "vin": [
                {
                  "coinbase": "03dd3408142f5669614254432f626d67706f6f6c2e636f6d2f2cfabe6d6d75654ab7a6b163e7a04e56e43f8e7ca0087f11e8bd6c3c72c69732e849532878040000000000000010d51dbb0b9301409ff96ef9f588c50200",
                  "sequence": 4294967295
                }
              ],
              "vout": [
                {
                  "value": 12.500546,
                  "valueSat": 1250054592,
                  "n": 0,
                  "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 f1c075a01882ae0972f95d3a4177c86c852b7d91 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914f1c075a01882ae0972f95d3a4177c86c852b7d9188ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": [ "SjLGSPfmF3kVPA6A213hShYc4aRtiWZ8Wu" ]
                  }
                }
              ],
                "blockhash": "000000000000000004bdb8e3fdf28ffc528f4e6b1871a6177579cbd4dabde955"
            },
            "index": 0,
            "chainindex": 2,
            "merklebranch": [ "a67d749dfa7006b9d66d2284b20a64ebcb8c2e5aae18e355c790b90a060a30c1", "9ab5c057ecf43aa0552c21be4f86b1c9b248fe2dd0821bee38e5a25a22c49c25", "ec11fd79e02fe98bf9f4b624e5460a3221dbae27d24f36c9988dcc5beaf3c592", "dbc42b7360a7165b277f73094a366e951d3ac6d6a1e9493d838d35372e5e846b", "c7260dbfb6b196bd2e4e4dbde1799592627a3e6fa384e6692be8387a9251e5e2" ],
            "chainmerklebranch": [ "89af0bc973bc0308f14c5c50c3d75f68783eab40a4688064cd56cfaed977d138", "5360cbf0991b4b0e09d589631c232d1f229104faad9e65375695230c47bc2493" ],
            "parentblock": "0000002024653d98f3eace4b66b6269fa9205e08b647e23cf7880e0000000000000000003feae4c877b2f8b73f6f92a589ed8870fe98abb3551f1539373597f5b44514ada9993f5bb1830118d5793688"
          },
          "previousblockhash": "ba53d715abf76ac8adc025120ffb48b2331f3a1b9b7d01167ffd7dcd23934390",
          "nextblockhash": "cd3a236542491089bffd8ba49cbe1d11a20dd4c4ad188307027e60c710732409"
        },
        {
          "hash": "52583afcd857e45234e7c8981804b36d13a7b3025c17f3535c3e724542590a79",
          "confirmations": 115,
          "size": 1073,
          "height": 482107,
          "version": 805306624,
          "versionHex": "30000100",
          "merkleroot": "d1de796d10826dcc97af3d9683711da0f8e8aad996277034bd9b11631ce0d1f2",
          "tx": [ "d1de796d10826dcc97af3d9683711da0f8e8aad996277034bd9b11631ce0d1f2" ],
          "time": 1555482589,
          "mediantime": 1555482282,
          "nonce": 0,
          "bits": "1805ec8b",
          "difficulty": 185600202264.865814,
          "chainwork": "000000000000000000000000000000000000000000f8bf3057c91ffc80efc4fc",
          "auxpow": {
            "tx": {
              "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff5b0355ba08182f5669614254432f4d696e65642062792067656e6469722f2cfabe6d6daa2651dfd7b34e3cf5b87fd5ab3b70a78d23194d2269c502280de7193d73790f10000000000000001056691e0c261e0b871f9d92be0000259bffffffff0206baf84b000000001976a914536ffa992491508dca0354e52f32a3a7a679a53a88ac0000000000000000266a24aa21a9ed6e46f58e0097a34b65b4d332ebde4a0cedb300fab27549b3ee1c09fd2d7875d300000000",
              "txid": "94ce9c796176df4cbe67695c0bfcd63587b1b664e23b716233980dc07d2874d7",
              "size": 223,
              "version": 1,
              "locktime": 0,
              "vin": [
                {
                  "coinbase": "0355ba08182f5669614254432f4d696e65642062792067656e6469722f2cfabe6d6daa2651dfd7b34e3cf5b87fd5ab3b70a78d23194d2269c502280de7193d73790f10000000000000001056691e0c261e0b871f9d92be0000259b",
                  "sequence": 4294967295
                }
              ],
              "vout": [
                {
                  "value": 12.745918,
                  "valueSat": 1274591750,
                  "n": 0,
                  "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 536ffa992491508dca0354e52f32a3a7a679a53a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914536ffa992491508dca0354e52f32a3a7a679a53a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": [ "SUuBGCD7Ff3C2ozR6osYguPeXNho98S5qR" ]
                  }
                },
                {
                  "value": 0.000000,
                  "valueSat": 0,
                  "n": 1,
                  "scriptPubKey": {
                    "asm": "OP_RETURN aa21a9ed6e46f58e0097a34b65b4d332ebde4a0cedb300fab27549b3ee1c09fd2d7875d3",
                    "hex": "6a24aa21a9ed6e46f58e0097a34b65b4d332ebde4a0cedb300fab27549b3ee1c09fd2d7875d3",
                    "type": "nulldata"
                  }
                }
              ],
              "blockhash": "000000000000000000bcf15d287a324f073b1e0239452a6d4d513c27dc73150a"
            },
            "index": 0,
            "chainindex": 14,
            "merklebranch": [ "b468e6225dbecfbbf9f86cc8414afb70ae1fade27008e5f8080f74341dbc103c", "c5ec7ac7fb9405564c2afffcd0279c8237a883f0e414011cfe4439572fd8f476", "72731cb13f6ef60cc4647c5c98a48a67ae83a8b2db8e6fcc3ffc2e5cb33e45e3", "3975f42ce7c1be1dfd2118fd7bce4bc2b67993a5f03f6389089e86446e391533", "1fa4527c16a1fd05735914c568d0265ec92e9608890d22ece6f1edcb989fad1a", "018223df5ec9acd3a1ce30e445477d8ca368a6a1dcba8616f5178c9e41287f42", "86dff2db9b12c6afd1cdcd60415e5d19356eaffe5d938fbc2b6147c2430363f5", "77d0cb1a7e0d3cebc57380bd3546a45923107aff5b8bb969d0272d2fd6709280", "04a2a80fdd3a2ccf24642fec547bbb7415922ee6348a0c5b8efbe25611120258", "822ee423a7c096e070117f7573824922c2d612027278d8f330977abf75657ddc", "b7bb4ddf8d79219e9e0e8bb599c23e943317e3c4d8f0e31bd712a08edaace138", "47828c64e2141a2417f271a22dc80fa716604ce044fc0db1827a9a3818c0ca22" ],
            "chainmerklebranch": [ "0000000000000000000000000000000000000000000000000000000000000000", "f98c4e9736d8eb8bb46299798906695c755369a3df99a93ffdded1713f1cf6e2", "36e70e1ae90b14efb14d594dff72647f862e97c4f704ad0d609041bb7d73aaa5", "63e9f83bff026dcfa4d967e727ceb35dbdf7e02225d88f2ce2f3842f10c16481" ],
            "parentblock": "000000208100da1ca9afee2f159a537c64aa7fcfce77dbdce07009000000000000000000d63acfaac8ae4bc195f8ba076f306c45ec06a8a740a182263e96732d842984cee6c7b65c1d072c174919714b"
          },
          "previousblockhash": "abe70792116fd7806b211b6d67cc6bfa1490aa0dea71587d0bbbe9ee435c9c2a",
          "nextblockhash": "2d7adca3fe7a51018b909aa1c63a7669a75a6729a2da66a08de19d4f13e66032"
        }
      ]
    },
    {
      "nodepubkey": "0370874cad6252bb94afa9a253c90122760ce2862e623b515e57bfe0697f3fc515",
      "score": 292,
      "reply": [
        {
          "hash": "0cf18712db68be85793dc06cd0a4fbc8edb166157e6847bb3c9f55d462b02837",
          "confirmations": 390700,
          "size": 734,
          "height": 91510,
          "version": 805306624,
          "versionHex": "30000100",
          "merkleroot": "55554df0ea7f66552beffe433d2c2f620bada79063a343ffc23c60c67cdf028f",
          "tx": [ "55554df0ea7f66552beffe433d2c2f620bada79063a343ffc23c60c67cdf028f" ],
          "time": 1530894673,
          "mediantime": 1530894336,
          "nonce": 0,
          "bits": "180761db",
          "difficulty": 148937676133.261200,
          "chainwork": "00000000000000000000000000000000000000000028ad56864c458781e21970",
          "auxpow": {
            "tx": {
              "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff5703dd3408142f5669614254432f626d67706f6f6c2e636f6d2f2cfabe6d6d75654ab7a6b163e7a04e56e43f8e7ca0087f11e8bd6c3c72c69732e849532878040000000000000010d51dbb0b9301409ff96ef9f588c50200ffffffff01c051824a000000001976a914f1c075a01882ae0972f95d3a4177c86c852b7d9188ac00000000",
              "txid": "c8fc123672fffb3c6a45b94bdd30afc114f282742338809380bc84fe8666d489",
              "size": 172,
              "version": 1,
              "locktime": 0,
              "vin": [
                {
                  "coinbase": "03dd3408142f5669614254432f626d67706f6f6c2e636f6d2f2cfabe6d6d75654ab7a6b163e7a04e56e43f8e7ca0087f11e8bd6c3c72c69732e849532878040000000000000010d51dbb0b9301409ff96ef9f588c50200",
                  "sequence": 4294967295
                }
              ],
              "vout": [
                {
                  "value": 12.500546,
                  "valueSat": 1250054592,
                  "n": 0,
                  "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 f1c075a01882ae0972f95d3a4177c86c852b7d91 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914f1c075a01882ae0972f95d3a4177c86c852b7d9188ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": [ "SjLGSPfmF3kVPA6A213hShYc4aRtiWZ8Wu" ]
                  }
                }
              ],
              "blockhash": "000000000000000004bdb8e3fdf28ffc528f4e6b1871a6177579cbd4dabde955"
            },
            "index": 0,
            "chainindex": 2,
            "merklebranch": [ "a67d749dfa7006b9d66d2284b20a64ebcb8c2e5aae18e355c790b90a060a30c1", "9ab5c057ecf43aa0552c21be4f86b1c9b248fe2dd0821bee38e5a25a22c49c25", "ec11fd79e02fe98bf9f4b624e5460a3221dbae27d24f36c9988dcc5beaf3c592", "dbc42b7360a7165b277f73094a366e951d3ac6d6a1e9493d838d35372e5e846b", "c7260dbfb6b196bd2e4e4dbde1799592627a3e6fa384e6692be8387a9251e5e2" ],
            "chainmerklebranch": [ "89af0bc973bc0308f14c5c50c3d75f68783eab40a4688064cd56cfaed977d138", "5360cbf0991b4b0e09d589631c232d1f229104faad9e65375695230c47bc2493" ],
            "parentblock": "0000002024653d98f3eace4b66b6269fa9205e08b647e23cf7880e0000000000000000003feae4c877b2f8b73f6f92a589ed8870fe98abb3551f1539373597f5b44514ada9993f5bb1830118d5793688"
          },
          "previousblockhash": "ba53d715abf76ac8adc025120ffb48b2331f3a1b9b7d01167ffd7dcd23934390",
          "nextblockhash": "cd3a236542491089bffd8ba49cbe1d11a20dd4c4ad188307027e60c710732409"
        },
        {
          "hash": "52583afcd857e45234e7c8981804b36d13a7b3025c17f3535c3e724542590a79",
          "confirmations": 115,
          "size": 1073,
          "height": 482107,
          "version": 805306624,
          "versionHex": "30000100",
          "merkleroot": "d1de796d10826dcc97af3d9683711da0f8e8aad996277034bd9b11631ce0d1f2",
          "tx": [ "d1de796d10826dcc97af3d9683711da0f8e8aad996277034bd9b11631ce0d1f2" ],
          "time": 1555482589,
          "mediantime": 1555482282,
          "nonce": 0,
          "bits": "1805ec8b",
          "difficulty": 185600202264.865814,
          "chainwork": "000000000000000000000000000000000000000000f8bf3057c91ffc80efc4fc",
          "auxpow": {
            "tx": {
              "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff5b0355ba08182f5669614254432f4d696e65642062792067656e6469722f2cfabe6d6daa2651dfd7b34e3cf5b87fd5ab3b70a78d23194d2269c502280de7193d73790f10000000000000001056691e0c261e0b871f9d92be0000259bffffffff0206baf84b000000001976a914536ffa992491508dca0354e52f32a3a7a679a53a88ac0000000000000000266a24aa21a9ed6e46f58e0097a34b65b4d332ebde4a0cedb300fab27549b3ee1c09fd2d7875d300000000",
              "txid": "94ce9c796176df4cbe67695c0bfcd63587b1b664e23b716233980dc07d2874d7",
              "size": 223,
              "version": 1,
              "locktime": 0,
              "vin": [
                {
                  "coinbase": "0355ba08182f5669614254432f4d696e65642062792067656e6469722f2cfabe6d6daa2651dfd7b34e3cf5b87fd5ab3b70a78d23194d2269c502280de7193d73790f10000000000000001056691e0c261e0b871f9d92be0000259b",
                  "sequence": 4294967295
                }
              ],
              "vout": [
                {
                  "value": 12.745918,
                  "valueSat": 1274591750,
                  "n": 0,
                  "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 536ffa992491508dca0354e52f32a3a7a679a53a OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914536ffa992491508dca0354e52f32a3a7a679a53a88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": [ "SUuBGCD7Ff3C2ozR6osYguPeXNho98S5qR" ]
                  }
                },
                {
                  "value": 0.000000,
                  "valueSat": 0,
                  "n": 1,
                  "scriptPubKey": {
                    "asm": "OP_RETURN aa21a9ed6e46f58e0097a34b65b4d332ebde4a0cedb300fab27549b3ee1c09fd2d7875d3",
                    "hex": "6a24aa21a9ed6e46f58e0097a34b65b4d332ebde4a0cedb300fab27549b3ee1c09fd2d7875d3",
                    "type": "nulldata"
                  }
                }
              ],
              "blockhash": "000000000000000000bcf15d287a324f073b1e0239452a6d4d513c27dc73150a"
            },
            "index": 0,
            "chainindex": 14,
            "merklebranch": [ "b468e6225dbecfbbf9f86cc8414afb70ae1fade27008e5f8080f74341dbc103c", "c5ec7ac7fb9405564c2afffcd0279c8237a883f0e414011cfe4439572fd8f476", "72731cb13f6ef60cc4647c5c98a48a67ae83a8b2db8e6fcc3ffc2e5cb33e45e3", "3975f42ce7c1be1dfd2118fd7bce4bc2b67993a5f03f6389089e86446e391533", "1fa4527c16a1fd05735914c568d0265ec92e9608890d22ece6f1edcb989fad1a", "018223df5ec9acd3a1ce30e445477d8ca368a6a1dcba8616f5178c9e41287f42", "86dff2db9b12c6afd1cdcd60415e5d19356eaffe5d938fbc2b6147c2430363f5", "77d0cb1a7e0d3cebc57380bd3546a45923107aff5b8bb969d0272d2fd6709280", "04a2a80fdd3a2ccf24642fec547bbb7415922ee6348a0c5b8efbe25611120258", "822ee423a7c096e070117f7573824922c2d612027278d8f330977abf75657ddc", "b7bb4ddf8d79219e9e0e8bb599c23e943317e3c4d8f0e31bd712a08edaace138", "47828c64e2141a2417f271a22dc80fa716604ce044fc0db1827a9a3818c0ca22" ],
            "chainmerklebranch": [ "0000000000000000000000000000000000000000000000000000000000000000", "f98c4e9736d8eb8bb46299798906695c755369a3df99a93ffdded1713f1cf6e2", "36e70e1ae90b14efb14d594dff72647f862e97c4f704ad0d609041bb7d73aaa5", "63e9f83bff026dcfa4d967e727ceb35dbdf7e02225d88f2ce2f3842f10c16481" ],
            "parentblock": "000000208100da1ca9afee2f159a537c64aa7fcfce77dbdce07009000000000000000000d63acfaac8ae4bc195f8ba076f306c45ec06a8a740a182263e96732d842984cee6c7b65c1d072c174919714b"
          },
          "previousblockhash": "abe70792116fd7806b211b6d67cc6bfa1490aa0dea71587d0bbbe9ee435c9c2a",
          "nextblockhash": "2d7adca3fe7a51018b909aa1c63a7669a75a6729a2da66a08de19d4f13e66032"
        }
      ]
    }
  ],
  "uuid": "5404cc31-2b01-48eb-8599-e6adcd8f9216"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>reply</td>
<td>array</td>
<td>An array containing objects of the block data for each requested block on the specified blockchain. If using a <code>node_count</code> greater than <code>1</code>, this returns the most common reply within <code>allreplies</code>. If there is a tie then one is chosen, or if one is an error then the non-error is chosen.</td>
</tr>
<tr>
<td>allreplies*</td>
<td>array</td>
<td>An array of objects with responses from each node. This can be useful if you wanted to do your own analysis/filtering of the responses.</td>
</tr>
<tr>
<td>nodepubkey*</td>
<td>string</td>
<td>The node ID.</td>
</tr>
<tr>
<td>score*</td>
<td>int</td>
<td>The respective node&#39;s score based on quality of service. A score of <code>-200</code> will ban the node for a 24hr period. You can change the ban threshold with the <code>xrouterbanscore</code> setting in <code>blocknet.conf</code>. See <a href="#xrouter-node-scoring">node scoring</a> for more details.</td>
</tr>
<tr>
<td>reply*</td>
<td>array</td>
<td>An array containing objects of the block data for each requested block on the specified blockchain from the respective node.</td>
</tr>
<tr>
<td>uuid</td>
<td>string</td>
<td>The response ID, which can be used to view this response again with <a href="#xrgetreply">xrGetReply</a>.</td>
</tr>
</tbody></table>

<p>* This is only returned if using a <code>node_count</code> greater than <code>1</code>.</p>
<h2 id='xrdecoderawtransaction'>xrDecodeRawTransaction</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "spvwallet": "SYS",
  "tx_hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff640363b1082cfabe6d6df75a401bb4e29d77b2162d476557c4bc879380dad926e44c1b2a7c49893a3cc108000000f09f909f000f4d696e6564206279206c616e636163000000000000000000000000000000000000000000000000000000000500c5a00000000000000330952d4b000000001976a914c825a1ecf2a6830c4401620c3a16f1995057c2ab88ac00000000000000002f6a24aa21a9ed2ac560369b71e58f0618a79d2f03bcf7283945e20eef7813de376a6f503448c108000000000000000000000000000000002c6a4c2952534b424c4f434b3a81c66dc456024e97e518ac2ab3ec51bf85b294b9a140c6e9376a040607edc39ddc962c3b"
}
</code></pre>
<p>This call is used to decode a specified bockchain transaction HEX. It requires the blockchain to be SPV wallet supported.</p>
<h3 id='request-parameters-8'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli xrDecodeRawTransaction SYS 01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff640363b1082cfabe6d6df75a401bb4e29d77b2162d476557c4bc879380dad926e44c1b2a7c49893a3cc108000000f09f909f000f4d696e6564206279206c616e636163000000000000000000000000000000000000000000000000000000000500c5a00000000000000330952d4b000000001976a914c825a1ecf2a6830c4401620c3a16f1995057c2ab88ac00000000000000002f6a24aa21a9ed2ac560369b71e58f0618a79d2f03bcf7283945e20eef7813de376a6f503448c108000000000000000000000000000000002c6a4c2952534b424c4f434b3a81c66dc456024e97e518ac2ab3ec51bf85b294b9a140c6e9376a040607edc39ddc962c3b 2
</code></pre>
<p><code class="api-call">xrDecodeRawTransaction [blockchain] [tx_hex] [node_count](optional)</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>blockchain</td>
<td>string</td>
<td>The blockchain, represented by the asset&#39;s ticker (BTC, LTC, SYS, etc.).</td>
</tr>
<tr>
<td>tx_hex</td>
<td>string</td>
<td>The raw transaction HEX to decode.</td>
</tr>
<tr>
<td>node_count</td>
<td>int</td>
<td>(Optional Parameter)<br>Defaults to <code>1</code> if no <code>consensus=</code> setting in <code>xrouter.conf</code>.<br>The number of nodes that will be used to route calls. The most common response (i.e. the response with the most consensus) will be returned as <code>reply</code>.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-8'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "reply": {
    "txid": "aa1838dee180e5c4ad5041ded25aa5d88c41bedb1c339b42f54dbad0e7563c5e",
    "size": 294,
    "version": 1,
    "locktime": 992777948,
    "vin": [
      {
        "coinbase": "0363b1082cfabe6d6df75a401bb4e29d77b2162d476557c4bc879380dad926e44c1b2a7c49893a3cc108000000f09f909f000f4d696e6564206279206c616e636163000000000000000000000000000000000000000000000000000000000500c5a00000",
        "sequence": 0
      }
    ],
    "vout": [
      {
        "value": 12.612785,
        "valueSat": 1261278512,
        "n": 0,
        "scriptPubKey": {
          "asm": "OP_DUP OP_HASH160 c825a1ecf2a6830c4401620c3a16f1995057c2ab OP_EQUALVERIFY OP_CHECKSIG",
          "hex": "76a914c825a1ecf2a6830c4401620c3a16f1995057c2ab88ac",
          "reqSigs": 1,
            "type": "pubkeyhash",
              "addresses": [ "SfYHFxiGv4mRtUfQVHxfMWknEt53Bjj286" ]
            }
        },
      {
        "value": 0.000000,
        "valueSat": 0,
        "n": 1,
        "scriptPubKey": {
          "asm": "OP_RETURN aa21a9ed2ac560369b71e58f0618a79d2f03bcf7283945e20eef7813de376a6f503448c1 0000000000000000",
          "hex": "6a24aa21a9ed2ac560369b71e58f0618a79d2f03bcf7283945e20eef7813de376a6f503448c1080000000000000000",
          "type": "nulldata"
        }
      },
      {
        "value": 0.000000,
        "valueSat": 0,
        "n": 2,
        "scriptPubKey": {
          "asm": "OP_RETURN 52534b424c4f434b3a81c66dc456024e97e518ac2ab3ec51bf85b294b9a140c6e9376a040607edc39d",
          "hex": "6a4c2952534b424c4f434b3a81c66dc456024e97e518ac2ab3ec51bf85b294b9a140c6e9376a040607edc39d",
          "type": "nulldata"
        }
      }
    ]
  },
  "allreplies": [
    {
      "nodepubkey": "02c6c79a75846fd9bb064788b03145e347fa5464558fa9030ebb009df2833369f0",
      "score": 250,
      "reply": {
        "txid": "aa1838dee180e5c4ad5041ded25aa5d88c41bedb1c339b42f54dbad0e7563c5e",
        "size": 294,
        "version": 1,
        "locktime": 992777948,
        "vin": [
          {
            "coinbase": "0363b1082cfabe6d6df75a401bb4e29d77b2162d476557c4bc879380dad926e44c1b2a7c49893a3cc108000000f09f909f000f4d696e6564206279206c616e636163000000000000000000000000000000000000000000000000000000000500c5a00000",
            "sequence": 0
          }
        ],
        "vout": [
          {
            "value": 12.612785,
            "valueSat": 1261278512,
            "n": 0,
            "scriptPubKey": {
              "asm": "OP_DUP OP_HASH160 c825a1ecf2a6830c4401620c3a16f1995057c2ab OP_EQUALVERIFY OP_CHECKSIG",
              "hex": "76a914c825a1ecf2a6830c4401620c3a16f1995057c2ab88ac",
              "reqSigs": 1,
                "type": "pubkeyhash",
                  "addresses": [ "SfYHFxiGv4mRtUfQVHxfMWknEt53Bjj286" ]
                }
            },
          {
            "value": 0.000000,
            "valueSat": 0,
            "n": 1,
            "scriptPubKey": {
              "asm": "OP_RETURN aa21a9ed2ac560369b71e58f0618a79d2f03bcf7283945e20eef7813de376a6f503448c1 0000000000000000",
              "hex": "6a24aa21a9ed2ac560369b71e58f0618a79d2f03bcf7283945e20eef7813de376a6f503448c1080000000000000000",
              "type": "nulldata"
            }
          },
          {
            "value": 0.000000,
            "valueSat": 0,
            "n": 2,
            "scriptPubKey": {
              "asm": "OP_RETURN 52534b424c4f434b3a81c66dc456024e97e518ac2ab3ec51bf85b294b9a140c6e9376a040607edc39d",
              "hex": "6a4c2952534b424c4f434b3a81c66dc456024e97e518ac2ab3ec51bf85b294b9a140c6e9376a040607edc39d",
              "type": "nulldata"
            }
          }
        ]
      }
    },
    {
      "nodepubkey": "0370874cad6252bb94afa9a253c90122760ce2862e623b515e57bfe0697f3fc515",
      "score": 300,
      "reply": {
        "txid": "aa1838dee180e5c4ad5041ded25aa5d88c41bedb1c339b42f54dbad0e7563c5e",
        "size": 294,
        "version": 1,
        "locktime": 992777948,
        "vin": [
          {
            "coinbase": "0363b1082cfabe6d6df75a401bb4e29d77b2162d476557c4bc879380dad926e44c1b2a7c49893a3cc108000000f09f909f000f4d696e6564206279206c616e636163000000000000000000000000000000000000000000000000000000000500c5a00000",
            "sequence": 0
          }
        ],
        "vout": [
          {
            "value": 12.612785,
            "valueSat": 1261278512,
            "n": 0,
            "scriptPubKey": {
              "asm": "OP_DUP OP_HASH160 c825a1ecf2a6830c4401620c3a16f1995057c2ab OP_EQUALVERIFY OP_CHECKSIG",
              "hex": "76a914c825a1ecf2a6830c4401620c3a16f1995057c2ab88ac",
              "reqSigs": 1,
                "type": "pubkeyhash",
                  "addresses": [ "SfYHFxiGv4mRtUfQVHxfMWknEt53Bjj286" ]
                }
            },
          {
            "value": 0.000000,
            "valueSat": 0,
            "n": 1,
            "scriptPubKey": {
              "asm": "OP_RETURN aa21a9ed2ac560369b71e58f0618a79d2f03bcf7283945e20eef7813de376a6f503448c1 0000000000000000",
              "hex": "6a24aa21a9ed2ac560369b71e58f0618a79d2f03bcf7283945e20eef7813de376a6f503448c1080000000000000000",
              "type": "nulldata"
            }
          },
          {
            "value": 0.000000,
            "valueSat": 0,
            "n": 2,
            "scriptPubKey": {
              "asm": "OP_RETURN 52534b424c4f434b3a81c66dc456024e97e518ac2ab3ec51bf85b294b9a140c6e9376a040607edc39d",
              "hex": "6a4c2952534b424c4f434b3a81c66dc456024e97e518ac2ab3ec51bf85b294b9a140c6e9376a040607edc39d",
              "type": "nulldata"
            }
          }
        ]
      }
    }
  ],
  "uuid": "95e612f1-3505-493d-8097-452052223417"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>reply</td>
<td>object</td>
<td>An object containing the decoded transaction data. If using a <code>node_count</code> greater than <code>1</code>, this returns the most common reply within <code>allreplies</code>. If there is a tie then one is chosen, or if one is an error then the non-error is chosen.</td>
</tr>
<tr>
<td>allreplies*</td>
<td>array</td>
<td>An array of objects with responses from each node. This can be useful if you wanted to do your own analysis/filtering of the responses.</td>
</tr>
<tr>
<td>nodepubkey*</td>
<td>string</td>
<td>The node ID.</td>
</tr>
<tr>
<td>score*</td>
<td>int</td>
<td>The respective node&#39;s score based on quality of service. A score of <code>-200</code> will ban the node for a 24hr period. You can change the ban threshold with the <code>xrouterbanscore</code> setting in <code>blocknet.conf</code>. See <a href="#xrouter-node-scoring">node scoring</a> for more details.</td>
</tr>
<tr>
<td>reply*</td>
<td>object</td>
<td>An object containing the decoded transaction data from the respective node.</td>
</tr>
<tr>
<td>uuid</td>
<td>string</td>
<td>The response ID, which can be used to view this response again with <a href="#xrgetreply">xrGetReply</a>.</td>
</tr>
</tbody></table>

<p>* This is only returned if using a <code>node_count</code> greater than <code>1</code>.</p>
<h2 id='xrgettransaction'>xrGetTransaction</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "blockchain": "SYS",
  "tx_id": "9e5db236f75babe4e28c17f0ed1eddbcfdb5bde8a69750e1a4952d110c620e51"
}
</code></pre>
<p>This call is used to retrieve the transaction data for the specified transaction ID (hash) and blockchain.</p>
<h3 id='request-parameters-9'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli xrGetTransaction SYS 9e5db236f75babe4e28c17f0ed1eddbcfdb5bde8a69750e1a4952d110c620e51 2
</code></pre>
<p><code class="api-call">xrGetTransaction [blockchain] [tx_id] [node_count](optional)</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>blockchain</td>
<td>string</td>
<td>The blockchain, represented by the asset&#39;s ticker (BTC, LTC, SYS, etc.).</td>
</tr>
<tr>
<td>tx_id</td>
<td>string</td>
<td>The transaction ID (hash) for the transaction of interest.</td>
</tr>
<tr>
<td>node_count</td>
<td>int</td>
<td>(Optional Parameter)<br>Defaults to <code>1</code> if no <code>consensus=</code> setting in <code>xrouter.conf</code>.<br>The number of nodes that will be used to route calls. The most common response (i.e. the response with the most consensus) will be returned as <code>reply</code>.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-9'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "reply": {
    "txid": "9e5db236f75babe4e28c17f0ed1eddbcfdb5bde8a69750e1a4952d110c620e51",
    "size": 192,
    "version": 2,
    "locktime": 0,
    "vin": [
      {
        "txid": "10f28315098fff366e2dfba23afacc10ddb5ac30a403d6396cc2d35739f06a79",
        "vout": 1,
        "scriptSig": {
          "asm": "30450221008d807ad2585d4775e57c105d16f12f5eb7925a3f8f66b077f7944ec74e421ed9022067105602af2705d4456ccd68db8b4eb327cdb5e55e7de98d7ba9f1213a75a1ad[ALL] 02e927a2a1d4a613ed3fa73bf1169beaf4e95a6348afac6613e283d80b9bf2abba",
          "hex": "4830450221008d807ad2585d4775e57c105d16f12f5eb7925a3f8f66b077f7944ec74e421ed9022067105602af2705d4456ccd68db8b4eb327cdb5e55e7de98d7ba9f1213a75a1ad012102e927a2a1d4a613ed3fa73bf1169beaf4e95a6348afac6613e283d80b9bf2abba"
        },
        "sequence": 4294967295
      }
    ],
    "vout": [
      {
        "value": 1.430000,
        "valueSat": 143000000,
        "n": 0,
        "scriptPubKey": {
          "asm": "OP_DUP OP_HASH160 7be755600f2fd9f3518be6ededb38e2498f51ff5 OP_EQUALVERIFY OP_CHECKSIG",
          "hex": "76a9147be755600f2fd9f3518be6ededb38e2498f51ff588ac",
          "reqSigs": 1,
          "type": "pubkeyhash",
          "addresses": [ "SYb9Gmcwj1aXUV86cKpnCD8SR7hvZgbKTP" ]
        }
      }
    ]
  },
  "allreplies": [
    {
      "nodepubkey": "02c6c79a75846fd9bb064788b03145e347fa5464558fa9030ebb009df2833369f0",
      "score": 250,
      "reply": {
        "txid": "9e5db236f75babe4e28c17f0ed1eddbcfdb5bde8a69750e1a4952d110c620e51",
        "size": 192,
        "version": 2,
        "locktime": 0,
        "vin": [
          {
            "txid": "10f28315098fff366e2dfba23afacc10ddb5ac30a403d6396cc2d35739f06a79",
            "vout": 1,
            "scriptSig": {
              "asm": "30450221008d807ad2585d4775e57c105d16f12f5eb7925a3f8f66b077f7944ec74e421ed9022067105602af2705d4456ccd68db8b4eb327cdb5e55e7de98d7ba9f1213a75a1ad[ALL] 02e927a2a1d4a613ed3fa73bf1169beaf4e95a6348afac6613e283d80b9bf2abba",
              "hex": "4830450221008d807ad2585d4775e57c105d16f12f5eb7925a3f8f66b077f7944ec74e421ed9022067105602af2705d4456ccd68db8b4eb327cdb5e55e7de98d7ba9f1213a75a1ad012102e927a2a1d4a613ed3fa73bf1169beaf4e95a6348afac6613e283d80b9bf2abba"
            },
            "sequence": 4294967295
          }
        ],
        "vout": [
          {
            "value": 1.430000,
            "valueSat": 143000000,
            "n": 0,
            "scriptPubKey": {
              "asm": "OP_DUP OP_HASH160 7be755600f2fd9f3518be6ededb38e2498f51ff5 OP_EQUALVERIFY OP_CHECKSIG",
              "hex": "76a9147be755600f2fd9f3518be6ededb38e2498f51ff588ac",
              "reqSigs": 1,
              "type": "pubkeyhash",
              "addresses": [ "SYb9Gmcwj1aXUV86cKpnCD8SR7hvZgbKTP" ]
            }
          }
        ]
      }
    },
    {
      "nodepubkey": "0370874cad6252bb94afa9a253c90122760ce2862e623b515e57bfe0697f3fc515",
      "score": 300,
      "reply": {
        "txid": "9e5db236f75babe4e28c17f0ed1eddbcfdb5bde8a69750e1a4952d110c620e51",
        "size": 192,
        "version": 2,
        "locktime": 0,
        "vin": [
          {
            "txid": "10f28315098fff366e2dfba23afacc10ddb5ac30a403d6396cc2d35739f06a79",
            "vout": 1,
            "scriptSig": {
              "asm": "30450221008d807ad2585d4775e57c105d16f12f5eb7925a3f8f66b077f7944ec74e421ed9022067105602af2705d4456ccd68db8b4eb327cdb5e55e7de98d7ba9f1213a75a1ad[ALL] 02e927a2a1d4a613ed3fa73bf1169beaf4e95a6348afac6613e283d80b9bf2abba",
              "hex": "4830450221008d807ad2585d4775e57c105d16f12f5eb7925a3f8f66b077f7944ec74e421ed9022067105602af2705d4456ccd68db8b4eb327cdb5e55e7de98d7ba9f1213a75a1ad012102e927a2a1d4a613ed3fa73bf1169beaf4e95a6348afac6613e283d80b9bf2abba"
            },
            "sequence": 4294967295
          }
        ],
        "vout": [
          {
            "value": 1.430000,
            "valueSat": 143000000,
            "n": 0,
            "scriptPubKey": {
              "asm": "OP_DUP OP_HASH160 7be755600f2fd9f3518be6ededb38e2498f51ff5 OP_EQUALVERIFY OP_CHECKSIG",
              "hex": "76a9147be755600f2fd9f3518be6ededb38e2498f51ff588ac",
              "reqSigs": 1,
              "type": "pubkeyhash",
              "addresses": [ "SYb9Gmcwj1aXUV86cKpnCD8SR7hvZgbKTP" ]
            }
          }
        ]
      }
    }
  ],
  "uuid": "cd7c9b1a-8fd5-46a7-84af-98c0f8850148"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>reply</td>
<td>object</td>
<td>An object containing the transaction data for the specified transaction ID and blockchain. If using a <code>node_count</code> greater than <code>1</code>, this returns the most common reply within <code>allreplies</code>. If there is a tie then one is chosen, or if one is an error then the non-error is chosen.</td>
</tr>
<tr>
<td>allreplies*</td>
<td>array</td>
<td>An array of objects with responses from each node. This can be useful if you wanted to do your own analysis/filtering of the responses.</td>
</tr>
<tr>
<td>nodepubkey*</td>
<td>string</td>
<td>The node ID.</td>
</tr>
<tr>
<td>score*</td>
<td>int</td>
<td>The respective node&#39;s score based on quality of service. A score of <code>-200</code> will ban the node for a 24hr period. You can change the ban threshold with the <code>xrouterbanscore</code> setting in <code>blocknet.conf</code>. See <a href="#xrouter-node-scoring">node scoring</a> for more details.</td>
</tr>
<tr>
<td>reply*</td>
<td>object</td>
<td>An object containing the transaction data for the specified transaction ID and blockchain from the respective node.</td>
</tr>
<tr>
<td>uuid</td>
<td>string</td>
<td>The response ID, which can be used to view this response again with <a href="#xrgetreply">xrGetReply</a>.</td>
</tr>
</tbody></table>

<p>* This is only returned if using a <code>node_count</code> greater than <code>1</code>.</p>
<h2 id='xrgettransactions'>xrGetTransactions</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "blockchain": "SYS",
  "tx_id1": "f7efcb33c817153dbea86b827380ffce108c6c8e4707356e874d98d0426339bd",
  "tx_id2": "f63543bb90800a601065d6f6d8380d8a98ac1a9f208921febde4eb0168e6fd8e",
}
</code></pre>
<p>This call is used to retrieve transaction data for multiple transaction IDs (hashes) on the specified blockchain. Currently the maximum request is 50 transactions, although a node may set this limit to less.</p>
<h3 id='request-parameters-10'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli xrGetTransactions SYS "f7efcb33c817153dbea86b827380ffce108c6c8e4707356e874d98d0426339bd,f63543bb90800a601065d6f6d8380d8a98ac1a9f208921febde4eb0168e6fd8e" 2
</code></pre>
<p><code class="api-call">xrGetTransactions [blockchain] [tx_ids] [node_count](optional)</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>blockchain</td>
<td>string</td>
<td>The blockchain, represented by the asset&#39;s ticker (BTC, LTC, SYS, etc.).</td>
</tr>
<tr>
<td>tx_ids</td>
<td>string</td>
<td>A comma-delimited list of transaction IDs (hashes) for the transactions of interest. The hashes must be separated by a comma with no spaces.</td>
</tr>
<tr>
<td>node_count</td>
<td>int</td>
<td>(Optional Parameter)<br>Defaults to <code>1</code> if no <code>consensus=</code> setting in <code>xrouter.conf</code>.<br>The number of nodes that will be used to route calls. The most common response (i.e. the response with the most consensus) will be returned as <code>reply</code>.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-10'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "reply": [
    {
      "txid": "f7efcb33c817153dbea86b827380ffce108c6c8e4707356e874d98d0426339bd",
      "size": 135,
      "version": 2,
      "locktime": 0,
      "vin": [
        {
          "coinbase": "03dc1a070101",
          "sequence": 4294967295
        }
      ],
      "vout": [
        {
          "value": 8.662500,
          "valueSat": 866250000,
          "n": 0,
          "scriptPubKey": {
            "asm": "02bcff8305d8bb9e536c5bc31c4ad74cbd15ac9d138d5d756f12099c96d541f14c OP_CHECKSIG",
            "hex": "2102bcff8305d8bb9e536c5bc31c4ad74cbd15ac9d138d5d756f12099c96d541f14cac",
            "reqSigs": 1,
            "type": "pubkey",
            "addresses": [ "SiibszzNJSGAFTAKqWZKyEkkf4Wq4pYH7c" ]
          }
        },
        {
          "value": 25.987500,
          "valueSat": 2598750000,
          "n": 1,
          "scriptPubKey": {
            "asm": "OP_DUP OP_HASH160 a47209c6649cf99e6db2e1bde99b44ce10c76e52 OP_EQUALVERIFY OP_CHECKSIG",
            "hex": "76a914a47209c6649cf99e6db2e1bde99b44ce10c76e5288ac",
            "reqSigs": 1,
            "type": "pubkeyhash",
            "addresses": [ "ScHWTpAFNo93Jv1RAfMBFp9VZCjpLq82Rf" ]
          }
        }
      ]
    },
    {
      "txid": "f63543bb90800a601065d6f6d8380d8a98ac1a9f208921febde4eb0168e6fd8e",
      "size": 135,
      "version": 2,
      "locktime": 0,
      "vin": [
        {
          "coinbase": "03dd1a070101",
          "sequence": 4294967295
        }
      ],
      "vout": [
        {
          "value": 8.662500,
          "valueSat": 866250000,
          "n": 0,
          "scriptPubKey": {
            "asm": "0248d791d1b048e8fc79da7ba9f6c0a44fe14641d13a772ff25dc60103580d1a3e OP_CHECKSIG",
            "hex": "210248d791d1b048e8fc79da7ba9f6c0a44fe14641d13a772ff25dc60103580d1a3eac",
            "reqSigs": 1,
            "type": "pubkey",
            "addresses": [ "ScdSb9g4b77DsA9vLipDYP8V1zEP1ru4d8" ]
          }
        },
        {
          "value": 27.546750,
          "valueSat": 2754675000,
          "n": 1,
          "scriptPubKey": {
            "asm": "OP_DUP OP_HASH160 3ed09824728101512565c187fdd061df0cc1cac5 OP_EQUALVERIFY OP_CHECKSIG",
            "hex": "76a9143ed09824728101512565c187fdd061df0cc1cac588ac",
            "reqSigs": 1,
            "type": "pubkeyhash",
            "addresses": [ "ST28p81wqsSL6of7Em9mZGvVonVBfM36wX" ]
          }
        }
      ]
    }
  ],
  "allreplies": [
    {
      "nodepubkey": "02c6c79a75846fd9bb064788b03145e347fa5464558fa9030ebb009df2833369f0",
      "score": 250,
      "reply": [
        {
          "txid": "f7efcb33c817153dbea86b827380ffce108c6c8e4707356e874d98d0426339bd",
          "size": 135,
          "version": 2,
          "locktime": 0,
          "vin": [
            {
              "coinbase": "03dc1a070101",
              "sequence": 4294967295
            }
          ],
          "vout": [
            {
              "value": 8.662500,
              "valueSat": 866250000,
              "n": 0,
              "scriptPubKey": {
                "asm": "02bcff8305d8bb9e536c5bc31c4ad74cbd15ac9d138d5d756f12099c96d541f14c OP_CHECKSIG",
                "hex": "2102bcff8305d8bb9e536c5bc31c4ad74cbd15ac9d138d5d756f12099c96d541f14cac",
                "reqSigs": 1,
                "type": "pubkey",
                "addresses": [ "SiibszzNJSGAFTAKqWZKyEkkf4Wq4pYH7c" ]
              }
            },
            {
              "value": 25.987500,
              "valueSat": 2598750000,
              "n": 1,
              "scriptPubKey": {
                "asm": "OP_DUP OP_HASH160 a47209c6649cf99e6db2e1bde99b44ce10c76e52 OP_EQUALVERIFY OP_CHECKSIG",
                "hex": "76a914a47209c6649cf99e6db2e1bde99b44ce10c76e5288ac",
                "reqSigs": 1,
                "type": "pubkeyhash",
                "addresses": [ "ScHWTpAFNo93Jv1RAfMBFp9VZCjpLq82Rf" ]
              }
            }
          ]
        },
        {
          "txid": "f63543bb90800a601065d6f6d8380d8a98ac1a9f208921febde4eb0168e6fd8e",
          "size": 135,
          "version": 2,
          "locktime": 0,
          "vin": [
            {
              "coinbase": "03dd1a070101",
              "sequence": 4294967295
            }
          ],
          "vout": [
            {
              "value": 8.662500,
              "valueSat": 866250000,
              "n": 0,
              "scriptPubKey": {
                "asm": "0248d791d1b048e8fc79da7ba9f6c0a44fe14641d13a772ff25dc60103580d1a3e OP_CHECKSIG",
                "hex": "210248d791d1b048e8fc79da7ba9f6c0a44fe14641d13a772ff25dc60103580d1a3eac",
                "reqSigs": 1,
                "type": "pubkey",
                "addresses": [ "ScdSb9g4b77DsA9vLipDYP8V1zEP1ru4d8" ]
              }
            },
            {
              "value": 27.546750,
              "valueSat": 2754675000,
              "n": 1,
              "scriptPubKey": {
                "asm": "OP_DUP OP_HASH160 3ed09824728101512565c187fdd061df0cc1cac5 OP_EQUALVERIFY OP_CHECKSIG",
                "hex": "76a9143ed09824728101512565c187fdd061df0cc1cac588ac",
                "reqSigs": 1,
                "type": "pubkeyhash",
                "addresses": [ "ST28p81wqsSL6of7Em9mZGvVonVBfM36wX" ]
              }
            }
          ]
        }
      ]
    },
    {
      "nodepubkey": "0370874cad6252bb94afa9a253c90122760ce2862e623b515e57bfe0697f3fc515",
      "score": 300,
      "reply": [
        {
          "txid": "f7efcb33c817153dbea86b827380ffce108c6c8e4707356e874d98d0426339bd",
          "size": 135,
          "version": 2,
          "locktime": 0,
          "vin": [
            {
              "coinbase": "03dc1a070101",
              "sequence": 4294967295
            }
          ],
          "vout": [
            {
              "value": 8.662500,
              "valueSat": 866250000,
              "n": 0,
              "scriptPubKey": {
                "asm": "02bcff8305d8bb9e536c5bc31c4ad74cbd15ac9d138d5d756f12099c96d541f14c OP_CHECKSIG",
                "hex": "2102bcff8305d8bb9e536c5bc31c4ad74cbd15ac9d138d5d756f12099c96d541f14cac",
                "reqSigs": 1,
                "type": "pubkey",
                "addresses": [ "SiibszzNJSGAFTAKqWZKyEkkf4Wq4pYH7c" ]
              }
            },
            {
              "value": 25.987500,
              "valueSat": 2598750000,
              "n": 1,
              "scriptPubKey": {
                "asm": "OP_DUP OP_HASH160 a47209c6649cf99e6db2e1bde99b44ce10c76e52 OP_EQUALVERIFY OP_CHECKSIG",
                "hex": "76a914a47209c6649cf99e6db2e1bde99b44ce10c76e5288ac",
                "reqSigs": 1,
                "type": "pubkeyhash",
                "addresses": [ "ScHWTpAFNo93Jv1RAfMBFp9VZCjpLq82Rf" ]
              }
            }
          ]
        },
        {
          "txid": "f63543bb90800a601065d6f6d8380d8a98ac1a9f208921febde4eb0168e6fd8e",
          "size": 135,
          "version": 2,
          "locktime": 0,
          "vin": [
            {
              "coinbase": "03dd1a070101",
              "sequence": 4294967295
            }
          ],
          "vout": [
            {
              "value": 8.662500,
              "valueSat": 866250000,
              "n": 0,
              "scriptPubKey": {
                "asm": "0248d791d1b048e8fc79da7ba9f6c0a44fe14641d13a772ff25dc60103580d1a3e OP_CHECKSIG",
                "hex": "210248d791d1b048e8fc79da7ba9f6c0a44fe14641d13a772ff25dc60103580d1a3eac",
                "reqSigs": 1,
                "type": "pubkey",
                "addresses": [ "ScdSb9g4b77DsA9vLipDYP8V1zEP1ru4d8" ]
              }
            },
            {
              "value": 27.546750,
              "valueSat": 2754675000,
              "n": 1,
              "scriptPubKey": {
                "asm": "OP_DUP OP_HASH160 3ed09824728101512565c187fdd061df0cc1cac5 OP_EQUALVERIFY OP_CHECKSIG",
                "hex": "76a9143ed09824728101512565c187fdd061df0cc1cac588ac",
                "reqSigs": 1,
                "type": "pubkeyhash",
                "addresses": [ "ST28p81wqsSL6of7Em9mZGvVonVBfM36wX" ]
              }
            }
          ]
        }
      ]
    }
  ],
  "uuid": "c778c124-af28-48b6-b3c4-22f2c5518b8b"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>reply</td>
<td>array</td>
<td>An array containing objects with the transaction data for each requested transaction on the specified blockchain. If using a <code>node_count</code> greater than <code>1</code>, this returns the most common reply within <code>allreplies</code>. If there is a tie then one is chosen, or if one is an error then the non-error is chosen.</td>
</tr>
<tr>
<td>allreplies*</td>
<td>array</td>
<td>An array of objects with responses from each node. This can be useful if you wanted to do your own analysis/filtering of the responses.</td>
</tr>
<tr>
<td>nodepubkey*</td>
<td>string</td>
<td>The node ID.</td>
</tr>
<tr>
<td>score*</td>
<td>int</td>
<td>The respective node&#39;s score based on quality of service. A score of <code>-200</code> will ban the node for a 24hr period. You can change the ban threshold with the <code>xrouterbanscore</code> setting in <code>blocknet.conf</code>. See <a href="#xrouter-node-scoring">node scoring</a> for more details.</td>
</tr>
<tr>
<td>reply*</td>
<td>array</td>
<td>An array containing objects with the transaction data for each requested transaction on the specified blockchain from the respective node.</td>
</tr>
<tr>
<td>uuid</td>
<td>string</td>
<td>The response ID, which can be used to view this response again with <a href="#xrgetreply">xrGetReply</a>.</td>
</tr>
</tbody></table>

<p>* This is only returned if using a <code>node_count</code> greater than <code>1</code>.</p>
<h2 id='xrsendtransaction'>xrSendTransaction</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "blockchain": "SYS",
  "signed_tx_hex": "0200000001ce2faed018f4776b41245f78695fdabcc68567b64d13851a7f8277693a23f3e0000000006b483045022100d6e0f7c193e0ae5168e0e8c87a29837f4b8be5c5cdcfa2826a8ddc7cf6cbf43802207ddaa377bc042f9df63eb6f755d23170b9109cb05c18c7ce2fe9993e65434c8b01210323f7e071df863cf20ce13613c68579cdedb6d7c6cf3912f26dac53ec4309c777ffffffff0120a10700000000001976a914eff8cb97723237fe3059774d2a66d02f936e1f1188ac00000000"
}
</code></pre>
<p>This call is used to submit a locally signed transaction on the specified blockchain.</p>
<h3 id='request-parameters-11'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli xrSendTransaction SYS 0200000001ce2faed018f4776b41245f78695fdabcc68567b64d13851a7f8277693a23f3e0000000006b483045022100d6e0f7c193e0ae5168e0e8c87a29837f4b8be5c5cdcfa2826a8ddc7cf6cbf43802207ddaa377bc042f9df63eb6f755d23170b9109cb05c18c7ce2fe9993e65434c8b01210323f7e071df863cf20ce13613c68579cdedb6d7c6cf3912f26dac53ec4309c777ffffffff0120a10700000000001976a914eff8cb97723237fe3059774d2a66d02f936e1f1188ac00000000
</code></pre>
<p><code class="api-call">xrSendTransaction [blockchain] [signed_tx_hex] [node_count](optional)</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>blockchain</td>
<td>string</td>
<td>The blockchain, represented by the asset&#39;s ticker (BTC, LTC, SYS, etc.).</td>
</tr>
<tr>
<td>signed_tx_hex</td>
<td>string</td>
<td>The signed transaction HEX.</td>
</tr>
<tr>
<td>node_count</td>
<td>int</td>
<td>(Optional Parameter)<br>Defaults to <code>1</code> if no <code>consensus=</code> setting in <code>xrouter.conf</code>.<br>The number of nodes that will be used to route calls. The most common response (i.e. the response with the most consensus) will be returned as <code>reply</code>.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-11'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "reply": "9f978c91840adbc4e074395f8f793cb7369c48e2ce831a10c32090bf71ae29ae",
  "uuid": "ACA0874C-C45F-4F40-94AD-794A7E18085A"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>reply</td>
<td>object</td>
<td>The transaction hash of the sent transaction.</td>
</tr>
</tbody></table>

<!-- 
## xrService

> Sample Data

```cli
{
  "service": "BTCgetbestblockhash"
}
```
This call is used to send a request to an XCloud service. XCloud is a decentralized microservice cloud network powered by XRouter that allows for interaction with microservices, blockchains, APIs, and cloud tech that's hosted by Service Nodes. If you'd like to operate your own Service Node, see the [Service Node Setup Guide](https://docs.blocknet.co/service-nodes/setup).


### Request Parameters

> Sample Request

```cli
blocknet-cli xrService SYSgetbestblockhash
```
<code class="api-call">xrService [service] [param1 param2 paramN]</code>

Parameter       | Type    | Description
----------------|---------|-------------
service         | string  | The service name without the namespace (*xcloud_service*, not *xrs::[xcloud_service]*).
paramN          | unknown | (Optional Parameter)<br>Refer to service documentation for parameter requirements. Information about an XCloud service can be viewed in the service configuration. Use [xrConnect](#xrconnect) to find a node with the service, then use [xrConnectedNodes](#xrconnectednodes) to review the service information.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "reply": "6a29264f48a40cc88f7c56cdc5fd4c62d1daa7f83b204fdcd4a022d8676438c2",
  "error": null,
  "id": 1,
  "uuid": "54b6ec00-8b06-4c2c-9e56-acdff4da69fe"
}
```

Parameter       | Type    | Description
----------------|---------|-------------
reply           | unknown | The service's response data.
error           | object  | The native error response if an error occurred, otherwise a successful response will contain a `null` error.
uuid            | string  | The response ID, which can be used to view this response again with [xrGetReply](#xrgetreply).










## xrServiceConsensus

> Sample Data

```cli
{
  "service": "SYSgetbestblockhash"
}
```
This call is used to send a request to an XCloud service, along with a specified amount of nodes for consensus. XCloud is a decentralized microservice cloud network powered by XRouter that allows for interaction with microservices, blockchains, APIs, and cloud tech that's hosted by Service Nodes. If you'd like to operate your own Service Node, see the [Service Node Setup Guide](https://docs.blocknet.co/service-nodes/setup).


### Request Parameters

> Sample Request

```cli
blocknet-cli xrServiceConsensus 1 SYSgetbestblockhash
```
<code class="api-call">xrServiceConsensus [node_count] [service] [param1 param2 paramN]</code>

Parameter       | Type    | Description
----------------|---------|-------------
node_count      | int     | The number of nodes that will be used to route calls. The most common response (i.e. the response with the most consensus) will be returned as `reply`.
service         | string  | The service name without the namespace (*xcloud_service*, not *xrs::[xcloud_service]*).
paramN          | unknown | (Optional Parameter)<br>Refer to service documentation for parameter requirements. Information about an XCloud service can be viewed in the service configuration. Use [xrConnect](#xrconnect) to find a node with the service, then use [xrConnectedNodes](#xrconnectednodes) to review the service information.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "reply": "6a29264f48a40cc88f7c56cdc5fd4c62d1daa7f83b204fdcd4a022d8676438c2",
  "allreplies": [
    {
      "nodepubkey": "02c6c79a75846fd9bb064788b03145e347fa5464558fa9030ebb009df2833369f0",
      "score": 250,
      "reply": "6a29264f48a40cc88f7c56cdc5fd4c62d1daa7f83b204fdcd4a022d8676438c2"
    },
    {
      "nodepubkey": "0370874cad6252bb94afa9a253c90122760ce2862e623b515e57bfe0697f3fc515",
      "score": 300,
      "reply": "6a29264f48a40cc88f7c56cdc5fd4c62d1daa7f83b204fdcd4a022d8676438c2"
    }
  ],
  "error": null,
  "id": 1,
  "uuid": "54b6ec00-8b06-4c2c-9e56-acdff4da69fe"
}
```

Parameter       | Type    | Description
----------------|---------|-------------
reply           | unknown | The service's response data. If using a `node_count` greater than `1`, this returns the most common reply within `allreplies`. If there is a tie then one is chosen, or if one is an error then the non-error is chosen.
allreplies*     | array   | An array of objects with responses from each node. This can be useful if you wanted to do your own analysis/filtering of the responses.
nodepubkey*     | string  | The node ID.
score*          | int     | The respective node's score based on quality of service. A score of `-200` will ban the node for a 24hr period. You can change the ban threshold with the `xrouterbanscore` setting in `blocknet.conf`. See [node scoring](#xrouter-node-scoring) for more details.
reply*          | array   | The service's response data from the respective node.
error           | object  | The native error response if an error occurred, otherwise a successful response will contain a `null` error.
uuid            | string  | The response ID, which can be used to view this response again with [xrGetReply](#xrgetreply).

\* This is only returned if using a `node_count` greater than `1`. 
-->
<h2 id='xrgetreply'>xrGetReply</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "uuid": "3243a24b-3e9d-40d1-8c33-37a57878ce85"
}
</code></pre>
<p>This call is used to look up responses from previous XRouter calls without having to request them from the network. There are no fees for this call.</p>
<h3 id='request-parameters-12'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli xrGetReply 3243a24b-3e9d-40d1-8c33-37a57878ce85
</code></pre>
<p><code class="api-call">xrGetReply [uuid]</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>uuid</td>
<td>string</td>
<td>The UUID of the response you want to look up.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-12'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "reply": "464931",
  "uuid": "3243a24b-3e9d-40d1-8c33-37a57878ce85"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>reply</td>
<td>array</td>
<td>The response for the previous call associated with the UUID.</td>
</tr>
<tr>
<td>uuid</td>
<td>string</td>
<td>The response ID, which can be used to view this response again with <a href="#xrgetreply">xrGetReply</a>.</td>
</tr>
</tbody></table>
<h2 id='xrshowconfigs'>xrShowConfigs</h2>
<p>This call is used to show the configurations received from all nodes as raw text.</p>
<h3 id='request-parameters-13'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli xrShowConfigs
</code></pre>
<p><code class="api-call">xrShowConfigs</code></p>

<p>This call does not take parameters.</p>
<h3 id='response-parameters-13'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>[
  {
    "nodepubkey" : "03ca15d619cf36fdc043892b12a3881dd08f2d3905e2ff399ac39cf34b28a995c7",
    "paymentaddress" : "BiBbLf8wDyYcSAzsX1SNzZKrc2zZQjS2pa",
    "config" : "[Main]\nwallets=BTC,ETH,LTC,BLOCK,CRW,MERGE,TRC\nmaxfee=0\n[BTC::xrGetBlocks]\n#fee=0.1\n#clientrequestlimit=-1\ndisabled=0\nfetchlimit=50\n\n\n",
    "plugins" : {
    }
  },
  {
    "nodepubkey" : "0252d7959e25a8f1a15b4e3e487d310211534dd71ca3316abe463d40a5cf0d67ca",
    "paymentaddress" : "BXhndtvEEM5Yh9UEPzrzpBLksjZReGV6Kv",
    "config" : "[Main]\nwallets=BLOCK,LTC,BTC,PIVX,MON\nmaxfee=0\nconsensus=1\ntimeout=30\npaymentaddress=BXhndtvEEM5Yh9UEPzrzpBLksjZReGV6Kv\n\n\n",
    "plugins" : {
    }
  }
]
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>Array</td>
<td>array</td>
<td>An array of objects containing the configurations for each node you are connected to.</td>
</tr>
<tr>
<td>nodepubkey</td>
<td>string</td>
<td>The node ID.</td>
</tr>
<tr>
<td>paymentaddress</td>
<td>string</td>
<td>The node&#39;s payment address, may also be specific per command.</td>
</tr>
<tr>
<td>config</td>
<td>string</td>
<td>The raw text contents of <code>xrouter.conf</code>.</td>
</tr>
<tr>
<td>plugins</td>
<td>obj</td>
<td>An object containing the raw configuration text contents for each of this node&#39;s plugins.</td>
</tr>
</tbody></table>
<h2 id='xrreloadconfigs'>xrReloadConfigs</h2>
<p>This call is used to reload <code>xrouter.conf</code> and all associated plugin configs after changes have been made to apply newly configured settings without needing to restart the Blocknet client.</p>
<h3 id='request-parameters-14'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli xrReloadConfigs
</code></pre>
<p><code class="api-call">xrReloadConfigs</code></p>

<p>This call does not take parameters.</p>
<h3 id='response-parameters-14'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>true
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>true</td>
<td>bool</td>
<td>A confirmation that <code>xrouter.conf</code> has been reloaded.</td>
</tr>
</tbody></table>
<h2 id='xrstatus'>xrStatus</h2>
<p>This call is used to print your XRouter configuration and has two different outputs depending on if this call is made from a user client or a Service Node.</p>
<h3 id='request-parameters-15'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli xrStatus
</code></pre>
<p><code class="api-call">xrStatus</code></p>

<p>This call does not take parameters.</p>
<h3 id='response-parameters-15'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response (User Client)</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "xrouter": true,
  "servicenode": false,
  "config": "[Main]\ntimeout=30\nconsensus=1\nmaxfee=0.5"
}
</code></pre><h3 id='user-client'>User Client</h3>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>xrouter</td>
<td>bool</td>
<td>Signifies XRouter activation.<br><code>true</code>: XRouter is enabled.<br><code>false</code>: XRouter is disabled.</td>
</tr>
<tr>
<td>servicenode</td>
<td>bool</td>
<td>Signifies if your client is a Service Node.<br><code>true</code>: Client is a Service Node.<br><code>false</code>: Client is not a Service Node.</td>
</tr>
<tr>
<td>config</td>
<td>string</td>
<td>The raw text contents of your <code>xrouter.conf</code>.</td>
</tr>
</tbody></table>

<blockquote>
<p>Sample 200 Response (Service Node)</p>
</blockquote>
<pre class="highlight plaintext"><code>{
    "nodepubkey": "03f1bf0087e5a0036176560493fb05fedb0eb841993536c6a86c78687c4e73a527",
    "score": 0,
    "banned": false,
    "paymentaddress": "B2B8HVr7BuxBXx7JTqmPgUZJ11CGcL9vtS",
    "spvwallets": [
      "SYS"
    ],
    "spvconfigs": [
      {
        "spvwallet": "SYS",
        "commands": [
          {
            "command": "xrGetConfig",
            "fee": 0.00000000,
            "requestlimit": -1,
            "paymentaddress": "B2B8HVr7BuxBXx7JTqmPgUZJ11CGcL9vtS",
            "disabled": false
          },
          {
            "command": "xrGetBlockCount",
            "fee": 0.00000000,
            "requestlimit": -1,
            "paymentaddress": "B2B8HVr7BuxBXx7JTqmPgUZJ11CGcL9vtS",
            "disabled": false
          },
          {
            "command": "xrGetBlockHash",
            "fee": 0.00000000,
            "requestlimit": -1,
            "paymentaddress": "B2B8HVr7BuxBXx7JTqmPgUZJ11CGcL9vtS",
            "disabled": false
          },
          {
            "command": "xrGetBlock",
            "fee": 0.00000000,
            "requestlimit": -1,
            "paymentaddress": "B2B8HVr7BuxBXx7JTqmPgUZJ11CGcL9vtS",
            "disabled": false
          },
          {
            "command": "xrGetTransaction",
            "fee": 0.00000000,
            "requestlimit": -1,
            "paymentaddress": "B2B8HVr7BuxBXx7JTqmPgUZJ11CGcL9vtS",
            "disabled": false
          },
          {
            "command": "xrSendTransaction",
            "fee": 0.00000000,
            "requestlimit": -1,
            "paymentaddress": "B2B8HVr7BuxBXx7JTqmPgUZJ11CGcL9vtS",
            "disabled": false
          },
          {
            "command": "xrGetBlocks",
            "fee": 0.00000000,
            "requestlimit": -1,
            "paymentaddress": "B2B8HVr7BuxBXx7JTqmPgUZJ11CGcL9vtS",
            "disabled": false
          },
          {
            "command": "xrGetTransactions",
            "fee": 0.00000000,
            "requestlimit": -1,
            "paymentaddress": "B2B8HVr7BuxBXx7JTqmPgUZJ11CGcL9vtS",
            "disabled": false
          },
          {
            "command": "xrDecodeRawTransaction",
            "fee": 0.00000000,
            "requestlimit": -1,
            "paymentaddress": "B2B8HVr7BuxBXx7JTqmPgUZJ11CGcL9vtS",
            "disabled": false
          }
        ]
      }
    ],
    "feedefault": 0.00000000,
    "fees": {
    },
    "services": {
      "SYSlistoffers": {
        "parameters": "",
        "fee": 0.00000000,
        "paymentaddress": "B2B8HVr7BuxBXx7JTqmPgUZJ11CGcL9vtS",
        "requestlimit": -1,
        "fetchlimit": 50,
        "timeout": 30,
        "disabled": false
      }
    },
    "xrouter": true,
    "servicenode": true,
    "config": "[Main]\nwallets=SYS\nplugins=hanniabu\nmaxfee=0.5\npaymentaddress=B2B8HVr7BuxBXx7JTqmPgUZJ11CGcL9vtS\n",
    "plugins": {
      "SYSlistoffers": "parameters=\nprivate::type=rpc\nprivate::rpcip=127.0.0.1\nprivate::rpcport=8370\nprivate::rpcuser=username\nprivate::rpcpassword=password\nprivate::rpccommand=listoffers"
    }
}
</code></pre><h3 id='service-node'>Service Node</h3>
<p>This is the output presented from a Service Node client.</p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>nodepubkey</td>
<td>string</td>
<td>Your node ID.</td>
</tr>
<tr>
<td>score</td>
<td>int</td>
<td>Not applicable when viewing your own score.</td>
</tr>
<tr>
<td>paymentaddress</td>
<td>string</td>
<td>Your node&#39;s general payment address.</td>
</tr>
<tr>
<td>spvwallets</td>
<td>array</td>
<td>An array of SPV wallets you&#39;re supporting, represented by the asset&#39;s ticker.</td>
</tr>
<tr>
<td>spvconfigs</td>
<td>array</td>
<td>An array of each SPV wallets and command configurations.</td>
</tr>
<tr>
<td>spvwallet</td>
<td>string</td>
<td>The SPV wallet that the configurations under <code>commands</code> pertains to.</td>
</tr>
<tr>
<td>commands</td>
<td>array</td>
<td>An array of each SPV wallet command and respective configurations.</td>
</tr>
<tr>
<td>command</td>
<td>string</td>
<td>The SPV command.</td>
</tr>
<tr>
<td>fee</td>
<td>float</td>
<td>The command fee, overrides the <code>feedefault</code> and <code>fees</code> values. This priority has already been accounted for in this value.</td>
</tr>
<tr>
<td>requestlimit</td>
<td>int</td>
<td>The minimum time allowed between calls in milliseconds. A value of <code>-1</code> means there is no limit. If a client exceeds this value they will be penalized and eventually banned by your node.</td>
</tr>
<tr>
<td>paymentaddress</td>
<td>string</td>
<td>Your node&#39;s payment address for this specific command.</td>
</tr>
<tr>
<td>disabled</td>
<td>bool</td>
<td>Signifies if your node has disabled this command.<br><code>true</code>: Call is disabled and not supported.<br><code>false</code>: Call is enabled and supported.</td>
</tr>
<tr>
<td>feedefault</td>
<td>float</td>
<td>Your node&#39;s default service fee. This fee is overridden by the values specified in <code>fees</code>, SPV command configuration <code>fee</code>, and XCloud service command configuration <code>fee</code>.</td>
</tr>
<tr>
<td>fees</td>
<td>object</td>
<td>Object of SPV commands and respective fees. These values are overridden by the SPV wallet-specific configuration <code>fee</code>.</td>
</tr>
<tr>
<td>services</td>
<td>object</td>
<td>Object of your node&#39;s XCloud service calls with respective properties.</td>
</tr>
<tr>
<td>parameters</td>
<td>string</td>
<td>Information on the parameters the command takes.</td>
</tr>
<tr>
<td>fee</td>
<td>float</td>
<td>The service command fee. This overrides the <code>feedefault</code> value.</td>
</tr>
<tr>
<td>paymentaddress</td>
<td>string</td>
<td>Your node&#39;s payment address for this specific command.</td>
</tr>
<tr>
<td>requestlimit</td>
<td>int</td>
<td>The minimum time allowed between calls in milliseconds. A value of <code>-1</code> means there is no limit. If a client exceeds this value they will be penalized and eventually banned by your node.</td>
</tr>
<tr>
<td>fetchlimit</td>
<td>int</td>
<td>The maximum number of blocks processed. A value of <code>-1</code> means there is no limit. A value of <code>0</code> means no blocks will be processed.</td>
</tr>
<tr>
<td>timeout</td>
<td>int</td>
<td>The value for <code>timeout</code> you set in <code>xrouter.conf</code> for this call. Defines how long (in seconds) your client waits for a response from another Service Node. The default value is <code>30</code>.</td>
</tr>
<tr>
<td>disabled</td>
<td>bool</td>
<td>Signifies if your node has disabled this service.<br><code>true</code>: Call is disabled and not supported.<br><code>false</code>: Call is enabled and supported.</td>
</tr>
<tr>
<td>xrouter</td>
<td>bool</td>
<td>Signifies XRouter activation.<br><code>true</code>: XRouter is enabled.<br><code>false</code>: XRouter is disabled.</td>
</tr>
<tr>
<td>servicenode</td>
<td>bool</td>
<td>Signifies if your client is a Service Node.<br><code>true</code>: Client is a Service Node.<br><code>false</code>: Client is not a Service Node.</td>
</tr>
<tr>
<td>config</td>
<td>string</td>
<td>The raw text contents of your <code>xrouter.conf</code>.</td>
</tr>
<tr>
<td>plugins</td>
<td>object</td>
<td>An object of each service you have setup and the raw text contents of the respective config file in the <code>plugins</code> folder within the Blocknet data directory.</td>
</tr>
</tbody></table>

<!-- 
  ## xrGetBalance

  > Sample Data

  ```cli
  {
    "blockchain": "SYS",
    "address": "SYb9Gmcwj1aXUV86cKpnCD8SR7hvZgbKTP"
  }
  ```
  This call is used to retrieve the balance with a precision of X.XXXXXX of the given address with for the specified blockchain.

  __Note:__ This call is not currently supported for querying the balance of addresses with UTXO's older than a few thousand blocks.


  ### Request Parameters

  > Sample Request

  ```cli
  blocknet-cli xrGetBalance SYS SYb9Gmcwj1aXUV86cKpnCD8SR7hvZgbKTP
  ```
  <code class="api-call">xrGetBalance [blockchain] [address] [node_count]\(optional)</code>

  Parameter       | Type    | Description
  ----------------|---------|-------------
  blockchain      | string  | The blockchain, represented by the asset's ticker (BTC, LTC, SYS, etc.).
  address         | string  | The address to retrieve the balance of.
  node_count      | int     | (Optional Parameter)<br>Defaults to `1` if no `consensus=` setting in `xrouter.conf`.<br>The number of nodes that will be used to route calls. The most common response (i.e. the response with the most consensus) will be returned as `reply`. 


  ### Response Parameters

  <aside class="success">
  200 OK
  </aside>

  > Sample 200 Response

  ```cli
  {
    "reply": "0.000000"
  }
  ```

  Parameter       | Type    | Description
  ----------------|---------|-------------
  reply           | object  | The balance with a precision of X.XXXXXX of the given address for the specified blockchain.
  uuid            | string  | The response ID, which can be used to view this response again with [xrGetReply](#xrgetreply).
-->

<!--  
  ## xrGetBalanceUpdate

  > Sample Data

  ```cli
  {
    "blockchain": "SYS",
    "address": "SYb9Gmcwj1aXUV86cKpnCD8SR7hvZgbKTP"
  }
  ```
  This call is used to retrieve the net change in balance of the given address since a certain block on the specified blockchain.


  ### Request Parameters

  > Sample Request

  ```cli
  blocknet-cli xrGetBalanceUpdate SYS SYb9Gmcwj1aXUV86cKpnCD8SR7hvZgbKTP 125157
  ```
  <code class="api-call">xrGetBalanceUpdate [blockchain] [address] [start_block]\(optional) [node_count]\(optional)</code>

  Parameter       | Type    | Description
  ----------------|---------|-------------
  blockchain      | string  | The blockchain, represented by the asset's ticker (BTC, LTC, SYS, etc.).
  address         | string  | The address to retrieve the balance of.
  start_block     | int     | (Optional Parameter) Defaults to `0`.<br>The earliest block to retrieve transactions through. 
  node_count      | int     | (Optional Parameter)<br>Defaults to `1` if no `consensus=` setting in `xrouter.conf`.<br>The number of nodes that will be used to route calls. The most common response (i.e. the response with the most consensus) will be returned as `reply`. 


  ### Response Parameters

  <aside class="success">
  200 OK
  </aside>

  > Sample 200 Response

  ```cli
  {
    "reply": "1.430000"
  }
  ```

  Parameter       | Type    | Description
  ----------------|---------|-------------
  reply           | string  | The addresses net change in balance since the given block on the specified blockchain.
  uuid            | string  | The response ID, which can be used to view this response again with [xrGetReply](#xrgetreply).
-->

<!-- 
  ## xrGenerateBloomFilter

  > Sample Data

  ```cli
  {
    "addresses": ["SYb9Gmcwj1aXUV86cKpnCD8SR7hvZgbKTP"]
  }
  ```
  This call is used to retrieves a HEX representation of a bloom filter for the given addresses.


  ### Request Parameters

  > Sample Request

  ```cli
  blocknet-cli xrGenerateBloomFilter SYb9Gmcwj1aXUV86cKpnCD8SR7hvZgbKTP 
  ```
  <code class="api-call">xrGenerateBloomFilter [address1] [address2...addressN] [node_count]\(optional)</code>

  Parameter       | Type    | Description
  ----------------|---------|-------------
  addresses       | array   | The addresses to retrieve the bloom filter HEX representation of.
  node_count      | int     | (Optional Parameter)<br>Defaults to `1` if no `consensus=` setting in `xrouter.conf`.<br>The number of nodes that will be used to route calls. The most common response (i.e. the response with the most consensus) will be returned as `reply`. 


  ### Response Parameters

  <aside class="success">
  200 OK
  </aside>

  > Sample 200 Response

  ```cli
  {
    "reply": {
      
    }
  }
  ```

  Parameter       | Type    | Description
  ----------------|---------|-------------
  hex             | string  | The HEX representation of the address's bloom filter. 
  uuid            | string  | The response ID, which can be used to view this response again with [xrGetReply](#xrgetreply).
-->

<!-- 
  ## xrGetTransactionsBloomFilter

  > Sample Data

  ```cli
  {
    "blockchain": "SYS",
    "bloom_filter": "0000100800"
  }
  ```
  This call is used to retrieve the transactions on a specified blockchain that fit the given bloom filter.


  ### Request Parameters

  > Sample Request

  ```cli
  blocknet-cli xrGetTransactionsBloomFilter SYS 0000100800
  ```
  <code class="api-call">xrGetTransactionsBloomFilter [blockchain] [bloom_filter] [start_block]\(optional) [node_count]\(optional)</code>

  Parameter       | Type    | Description
  ----------------|---------|-------------
  blockchain      | string  | The blockchain, represented by the asset's ticker (BTC, LTC, SYS, etc.).
  bloom_filter    | string  | The HEX representation of a bloom filter.
  start_block     | int     | (Optional Parameter) Defaults to `0`.<br>The earliest block to retrieve transactions through. 
  node_count      | int     | (Optional Parameter)<br>Defaults to `1` if no `consensus=` setting in `xrouter.conf`.<br>The number of nodes that will be used to route calls. The most common response (i.e. the response with the most consensus) will be returned as `reply`. 


  ### Response Parameters

  <aside class="success">
  200 OK
  </aside>

  > Sample 200 Response

  ```cli
  {
    "reply": {
      
    }
  }
  ```

  Parameter       | Type    | Description
  ----------------|---------|-------------
  reply           | object  |  
  uuid            | string  | The response ID, which can be used to view this response again with [xrGetReply](#xrgetreply).
-->
<h1 id='xcloud-api'>XCloud API</h1>
<p>The following set of calls are used to communicate and interact with XCloud services remotely over the Blocknet network via XRouter. XCloud consists of services that are powered by XRouter and are therefore interacted with using a subset of commands from the <a href="#xrouter-api">XRouter API</a>. </p>

<p>You can use the <a href="https://forum.blocknet.co/c/xcloud-services">XCloud Services forum category</a> as an alternative medium for discovering services, learning more about each service, and finding instructions on how to interact with the service. A simple list of services can also be found on <a href="https://blockdx.co/xcloud-services">blockdx.co</a>.</p>

<p>See <a href="#xcloud-setup">XCloud Setup</a> for instructions on setting up your environment for use with XCloud.</p>

<table><thead>
<tr>
<th>Call</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td><a href="#xrgetnetworkservices">xrGetNetworkServices</a></td>
<td>Returns supported services</td>
</tr>
<tr>
<td><a href="#xrconnect">xrConnect</a></td>
<td>Pre-connect to XRouter nodes</td>
</tr>
<tr>
<td><a href="#xrconnectednodes">xrConnectedNodes</a></td>
<td>Returns connected node services and fees</td>
</tr>
<tr>
<td><a href="#xrservice">xrService</a>*</td>
<td>Use to interact with XCloud services</td>
</tr>
<tr>
<td><a href="#xrServiceconsensus">xrServiceConsensus</a>*</td>
<td>Use to interact with XCloud services with consensus</td>
</tr>
<tr>
<td><a href="#xrgetreply">xrGetReply</a></td>
<td>Returns prior response associated with UUID</td>
</tr>
<tr>
<td><a href="#xrshowconfigs">xrShowConfigs</a></td>
<td>Returns all node configs received as raw text</td>
</tr>
<tr>
<td><a href="#xrupdateconfigs">xrUpdateConfigs</a></td>
<td>Requests latest configs from nodes</td>
</tr>
<tr>
<td><a href="#xrreloadconfigs">xrReloadConfigs</a></td>
<td>Applies changes made to your configs</td>
</tr>
<tr>
<td><a href="#xrstatus">xrStatus</a></td>
<td>Returns your XRouter configurations</td>
</tr>
</tbody></table>
<h2 id='xrservice'>xrService</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "service": "BTCgetbestblockhash"
}
</code></pre>
<p>This call is used to send a request to an XCloud service. XCloud is a decentralized oracle and microservice cloud network powered by XRouter that allows for interaction with microservices, blockchains, off-chain APIs, and cloud tech that&#39;s hosted by Service Nodes. If you&#39;d like to operate your own Service Node, see the <a href="https://docs.blocknet.co/service-nodes/setup">Service Node Setup Guide</a>.</p>
<h3 id='request-parameters'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli xrService SYSgetbestblockhash
</code></pre>
<p><code class="api-call">xrService [service] [param1 param2 paramN]</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>service</td>
<td>string</td>
<td>The service name without the namespace (<em>xcloud_service</em>, not <em>xrs::[xcloud_service]</em>).</td>
</tr>
<tr>
<td>paramN</td>
<td>unknown</td>
<td>(Optional Parameter)<br>Refer to service documentation for parameter requirements. Information about an XCloud service can be viewed in the service configuration. Use <a href="#xrconnect">xrConnect</a> to find a node with the service, then use <a href="#xrconnectednodes">xrConnectedNodes</a> to review the service information.</td>
</tr>
</tbody></table>
<h3 id='response-parameters'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "reply" : "6a29264f48a40cc88f7c56cdc5fd4c62d1daa7f83b204fdcd4a022d8676438c2",
  "error" : null,
  "id" : 1,
  "uuid" : "54b6ec00-8b06-4c2c-9e56-acdff4da69fe"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>reply</td>
<td>unknown</td>
<td>The service&#39;s response data.</td>
</tr>
<tr>
<td>error</td>
<td>object</td>
<td>The native error response if an error occurred, otherwise a successful response will contain a <code>null</code> error.</td>
</tr>
<tr>
<td>uuid</td>
<td>string</td>
<td>The response ID, which can be used to view this response again with <a href="#xrgetreply">xrGetReply</a>.</td>
</tr>
</tbody></table>
<h2 id='xrserviceconsensus'>xrServiceConsensus</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "service": "SYSgetbestblockhash"
}
</code></pre>
<p>This call is used to send a request to an XCloud service, along with a specified amount of nodes for consensus. XCloud is a decentralized oracle and microservice cloud network powered by XRouter that allows for interaction with microservices, blockchains, off-chain APIs, and cloud tech that&#39;s hosted by Service Nodes. If you&#39;d like to operate your own Service Node, see the <a href="https://docs.blocknet.co/service-nodes/setup">Service Node Setup Guide</a>.</p>
<h3 id='request-parameters-2'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli xrServiceConsensus 1 SYSgetbestblockhash
</code></pre>
<p><code class="api-call">xrServiceConsensus [node_count] [service] [param1 param2 paramN]</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>node_count</td>
<td>int</td>
<td>The number of nodes that will be used to route calls. The most common response (i.e. the response with the most consensus) will be returned as <code>reply</code>.</td>
</tr>
<tr>
<td>service</td>
<td>string</td>
<td>The service name without the namespace (<em>xcloud_service</em>, not <em>xrs::[xcloud_service]</em>).</td>
</tr>
<tr>
<td>paramN</td>
<td>unknown</td>
<td>(Optional Parameter)<br>Refer to service documentation for parameter requirements. Information about an XCloud service can be viewed in the service configuration. Use <a href="#xrconnect">xrConnect</a> to find a node with the service, then use <a href="#xrconnectednodes">xrConnectedNodes</a> to review the service information.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-2'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "reply" : "6a29264f48a40cc88f7c56cdc5fd4c62d1daa7f83b204fdcd4a022d8676438c2",
  "allreplies" : [
    {
      "nodepubkey" : "02c6c79a75846fd9bb064788b03145e347fa5464558fa9030ebb009df2833369f0",
      "score" : 250,
      "reply" : "6a29264f48a40cc88f7c56cdc5fd4c62d1daa7f83b204fdcd4a022d8676438c2"
    },
    {
      "nodepubkey" : "0370874cad6252bb94afa9a253c90122760ce2862e623b515e57bfe0697f3fc515",
      "score" : 300,
      "reply" : "6a29264f48a40cc88f7c56cdc5fd4c62d1daa7f83b204fdcd4a022d8676438c2"
    }
  ],
  "error" : null,
  "id" : 1,
  "uuid" : "54b6ec00-8b06-4c2c-9e56-acdff4da69fe"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>reply</td>
<td>unknown</td>
<td>The service&#39;s response data. If using a <code>node_count</code> greater than <code>1</code>, this returns the most common reply within <code>allreplies</code>. If there is a tie then one is chosen, or if one is an error then the non-error is chosen.</td>
</tr>
<tr>
<td>allreplies*</td>
<td>array</td>
<td>An array of objects with responses from each node. This can be useful if you wanted to do your own analysis/filtering of the responses.</td>
</tr>
<tr>
<td>nodepubkey*</td>
<td>string</td>
<td>The node ID.</td>
</tr>
<tr>
<td>score*</td>
<td>int</td>
<td>The respective node&#39;s score based on quality of service. A score of <code>-200</code> will ban the node for a 24hr period. You can change the ban threshold with the <code>xrouterbanscore</code> setting in <code>blocknet.conf</code>. See node scoring for more details.</td>
</tr>
<tr>
<td>reply*</td>
<td>unknown</td>
<td>The service&#39;s response data from the respective node.</td>
</tr>
<tr>
<td>error</td>
<td>object</td>
<td>The native error response if an error occurred, otherwise a successful response will contain a <code>null</code> error.</td>
</tr>
<tr>
<td>uuid</td>
<td>string</td>
<td>The response ID, which can be used to view this response again with <a href="#xrgetreply">xrGetReply</a>.</td>
</tr>
</tbody></table>

<p>* This is only returned if using a <code>node_count</code> greater than <code>1</code>.</p>
<h1 id='core-api'>Core API</h1>
<p>The following set of calls are select, useful core API calls used to interact with the Blocknet blockchain.</p>

<table><thead>
<tr>
<th>Call</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td><a href="#getnetworkinfo">getnetworkinfo</a></td>
<td>Returns network info</td>
</tr>
<tr>
<td><a href="#servicenodelist">servicenodelist</a></td>
<td>Returns a list of registered Service Nodes</td>
</tr>
<tr>
<td><a href="#listproposals">listproposals</a></td>
<td>Returns a list governance proposals</td>
</tr>
</tbody></table>
<h2 id='getnetworkinfo'>getnetworkinfo</h2>
<p>This call is used to retrieve an object containing various state info regarding P2P networking.</p>
<h3 id='request-parameters'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli getnetworkinfo
</code></pre>
<p><code class="api-call">getnetworkinfo</code></p>

<p>This call does not take parameters.</p>
<h3 id='response-parameters'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "version": 4000100,
  "subversion": "/Blocknet:4.0.1/",
  "protocolversion": 70713,
  "xbridgeprotocolversion": 51,
  "xrouterprotocolversion": 50,
  "localservices": "000000000000040d",
  "localrelay": true,
  "timeoffset": -3,
  "networkactive": true,
  "connections": 12,
  "networks": [
    {
      "name": "ipv4",
      "limited": false,
      "reachable": true,
      "proxy": "",
      "proxy_randomize_credentials": false
    },
    {
      "name": "ipv6",
      "limited": false,
      "reachable": true,
      "proxy": "",
      "proxy_randomize_credentials": false
    },
    {
      "name": "onion",
      "limited": true,
      "reachable": false,
      "proxy": "",
      "proxy_randomize_credentials": false
    }
  ],
  "relayfee": 0.00010000,
  "incrementalfee": 0.00001000,
  "localaddresses": [
  ],
  "warnings": ""
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>version</td>
<td>int</td>
<td>The wallet version (i.e. <code>4000100</code> = v4.0.1.)</td>
</tr>
<tr>
<td>subversion</td>
<td>string</td>
<td>The wallet version string.</td>
</tr>
<tr>
<td>protocolversion</td>
<td>int</td>
<td>The consensus protocol version.</td>
</tr>
<tr>
<td>xbridgeprotocolversion</td>
<td>int</td>
<td>The XBridge protocol version.</td>
</tr>
<tr>
<td>xrouterprotocolversion</td>
<td>int</td>
<td>The XRouter protocol version.</td>
</tr>
<tr>
<td>connections</td>
<td>int</td>
<td>The number of peers your client has.</td>
</tr>
<tr>
<td>warnings</td>
<td>string</td>
<td>Any network of blockchain workings.</td>
</tr>
</tbody></table>

<p>* Only a limited portion of the response is described</p>
<h2 id='servicenodelist'>servicenodelist</h2>
<p>This call is used to retrieve a list of all Service Nodes registered on the Blocknet network.</p>
<h3 id='request-parameters-2'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli servicenodelist
</code></pre>
<p><code class="api-call">servicenodelist</code></p>

<p>This call does not take parameters.</p>
<h3 id='response-parameters-2'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>[
  {
    "snodekey": "0b38bfac90cc5c683b6a27f952b2346a1009fc0f9c1a0790809f185ab27b14ecc6",
    "tier": "SPV",
    "address": "BUVqkvqD7GCtHRHmchhXVuHqzm77cLuXs1",
    "timelastseen": 1581082882,
    "timelastseenstr": "2020-02-07T13:41:22.000Z",
    "status": "offline",
    "score": 0,
    "services": [
      "xr",
      "xr::BLOCK",
      "xr::BTC",
      "xr::LTC"
    ]
  },
  {
    "snodekey": "0d9f04d506df6a870b3d823ab209a281c95112c0c53afa1a222e051857822a9c95",
    "tier": "SPV",
    "address": "B1KELxido2Sqshd2pDvqr56VexPDRzSCi4",
    "timelastseen": 1581087561,
    "timelastseenstr": "2020-02-07T14:59:21.000Z",
    "status": "running",
    "score": 0,
    "services": [
      "xr",
      "xr::BLOCK",
      "xr::BTC",,
      "xr::ETH",
      "xr::LTC",
      "xr::XST",
      "xr::ZEN",,
      "xrs::eth_accounts",
      "xrs::eth_blockNumber",
      "xrs::eth_call",
      "xrs::eth_chainId",
      "xrs::eth_estimateGas",
      "xrs::eth_gasPrice",
      "xrs::eth_getBalance",
      "xrs::eth_getBlockByHash",
      "xrs::eth_getBlockByNumber",
      "xrs::eth_getBlockTransactionCountByHash",
      "xrs::eth_getBlockTransactionCountByNumber",
      "xrs::ltc_getbestblockhash",
      "xrs::sc_consensus",
      "xrs::sc_consensusblock",
      "xrs::xmr_get_block_count",
      "xrs::xmr_on_get_block_hash",
      "xrs::xst_getbestblockhash",
      "xrs::zen_getbestblockhash"
    ]
  }
]
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>Array</td>
<td>array</td>
<td>A list of information on all registered Service Nodes.</td>
</tr>
<tr>
<td>Object</td>
<td>object</td>
<td>An object containing information on each respective Service Node.</td>
</tr>
<tr>
<td>snodekey</td>
<td>string</td>
<td>The Service Node&#39;s pubkey.</td>
</tr>
<tr>
<td>tier</td>
<td>string</td>
<td>The tier of this Service Node (currently only <code>SPV</code> is supported).</td>
</tr>
<tr>
<td>address</td>
<td>string</td>
<td>The Service Node&#39;s BLOCK address.</td>
</tr>
<tr>
<td>timelastseen</td>
<td>int</td>
<td>The Unix time the Service Node was last seen.</td>
</tr>
<tr>
<td>timelastseenstr</td>
<td>string</td>
<td>The ISO 8601 datetime the Service Node was last seen.</td>
</tr>
<tr>
<td>status</td>
<td>string</td>
<td>The status of the Service Node (<code>running</code>, <code>offline</code>).</td>
</tr>
<tr>
<td>score</td>
<td>array</td>
<td>The Service Node&#39;s local reputation score.</td>
</tr>
<tr>
<td>services</td>
<td>string</td>
<td>An array of services the Service Node is supporting.</td>
</tr>
</tbody></table>
<h2 id='listproposals'>listproposals</h2>
<blockquote>
<p>Sample Data</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "sinceblock": 45000
}
</code></pre>
<p>This call is used to retrieves a list of proposals since the specified block. By default this returns proposals for the current and upcoming proposals.</p>
<h3 id='request-parameters-3'>Request Parameters</h3>
<blockquote>
<p>Sample Request</p>
</blockquote>
<pre class="highlight plaintext"><code>blocknet-cli listproposals 45000
</code></pre>
<p><code class="api-call">listproposals [sinceblock](optional)</code></p>

<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>sinceblock</td>
<td>int</td>
<td>(Optional Parameter)<br>Defaults to <code>0</code><br>Specifies the block number of how far back to pull proposals from. A value of <code>0</code> will return the proposals for the current and upcoming Superblock.</td>
</tr>
</tbody></table>
<h3 id='response-parameters-3'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>[  
  {
    "hash": "06dfa870ac90cc5c683b6a2752b2346a10012c0c3afa1a9fc0f9c1b3d823a209",
    "name": "sample-proposal-name",
    "superblock": 1339200,
    "amount": 1200,
    "address": "Bc6Vqzdo2hdexPDRELxVuH2pDvqhiCtHRz",
    "url": "https://google.com",
    "description": "This is a sample proposal for an example.",
    "votes_yes": 87,
    "votes_no": 3,
    "votes_abstain": 0
  }
]
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>Array</td>
<td>array</td>
<td>A list of details on all returned proposals.</td>
</tr>
<tr>
<td>Object</td>
<td>object</td>
<td>An object containing the details of each respective proposal.</td>
</tr>
<tr>
<td>hash</td>
<td>string</td>
<td>The HEX string of the proposal hash.</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>The name of the proposal.</td>
</tr>
<tr>
<td>superblock</td>
<td>int</td>
<td>The Superblock the proposal has been submitted for.</td>
</tr>
<tr>
<td>amount</td>
<td>int</td>
<td>The amount of BLOCK funding being requested by the proposal.</td>
</tr>
<tr>
<td>address</td>
<td>string</td>
<td>The address that your propsal will be paid out to if it passes.</td>
</tr>
<tr>
<td>url</td>
<td>string</td>
<td>The URL of your proposal description.</td>
</tr>
<tr>
<td>description</td>
<td>string</td>
<td>A short description of the proposal.</td>
</tr>
<tr>
<td>votes_yes</td>
<td>int</td>
<td>The number of yes votes.</td>
</tr>
<tr>
<td>votes_no</td>
<td>int</td>
<td>The number of no votes.</td>
</tr>
<tr>
<td>votes_abstain</td>
<td>int</td>
<td>The number of abstained votes.</td>
</tr>
</tbody></table>
<h1 id='web-endpoints'>Web Endpoints</h1>
<p>The following set of calls can be used to access data via web endpoints. </p>

<table><thead>
<tr>
<th>Call</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td><a href="#ticker-1-0">ticker (1.0)</a></td>
<td>XBridge 24hr trade summary (static list)</td>
</tr>
<tr>
<td><a href="#ticker-2-0">ticker (2.0)</a></td>
<td>XBridge 24hr trade summary (dynamic list)</td>
</tr>
<tr>
<td><a href="#history">history</a></td>
<td>XBridge 24hr trade history</td>
</tr>
<tr>
<td><a href="#status">status</a></td>
<td>XBridge asset availability</td>
</tr>
<tr>
<td><a href="#dxgetnetworktokens-web">dxgetnetworktokens</a></td>
<td>Returns online XBridge assets</td>
</tr>
<tr>
<td><a href="#xrgetnetworkservices-web">xrgetnetworkservices</a></td>
<td>Returns supported XRouter services</td>
</tr>
</tbody></table>
<h2 id='ticker-1-0'>ticker (1.0)</h2>
<p>This call is used to view the XBridge trade summary for the past 24 hours and includes values of the inverse market. It is hard-coded to only include the following markets: BLOCK-LTC, LTC-BLOCK, LTC-SYS, SYS-LTC. </p>

<p>Use <a href="#ticker-2-0">ticker (2.0)</a> for a dynamic list that updates with whichever markets have had trades in the past 24 hours.</p>
<h3 id='endpoint'>Endpoint</h3>
<p><code class="api-call"><a href="https://data.blocknet.co/api/v1.0/ticker">https://data.blocknet.co/api/v1.0/ticker</a></code></p>
<h3 id='response-parameters'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>[
  {
    "symbol": "BLOCK-LTC",
    "open": 0.022216,
    "high": 0.022240,
    "low": 0.019437,
    "close": 0.019437,
    "volume": 27.945614,
    "lastprice": 0.019437,
    "timestamp": 1564444800
  },
  {
    "symbol": "LTC-BLOCK",
    "open": 45.012306,
    "high": 51.447171,
    "low": 44.96224,
    "close": 51.447171,
    "volume": 0.586885,
    "lastprice": 51.447171,
    "timestamp": 1564444800
  },
  {
    "symbol": "SYS-LTC",
    "open": 0.022216,
    "high": 0.022240,
    "low": 0.019437,
    "close": 0.019437,
    "volume": 27.945614,
    "lastprice": 0.019437,
    "timestamp": 1564444800
  },
  {
    "symbol": "LTC-SYS",
    "open": 45.012306,
    "high": 51.447171,
    "low": 44.96224,
    "close": 51.447171,
    "volume": 0.586885,
    "lastprice": 51.447171,
    "timestamp": 1564444800
  }
]
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>symbol</td>
<td>string</td>
<td>The market in maker-taker format. Use the <a href="#status">status</a> call to view the associated blockchain name for each ticker and the availabiity status.</td>
</tr>
<tr>
<td>open</td>
<td>int</td>
<td>Rolling 24hr opning trade price.</td>
</tr>
<tr>
<td>high</td>
<td>int</td>
<td>Highest trade price in the past 24hrs.</td>
</tr>
<tr>
<td>low</td>
<td>int</td>
<td>Lowest trade price in the past 24hrs.</td>
</tr>
<tr>
<td>close</td>
<td>int</td>
<td>Rolling 24hr closing trade price.</td>
</tr>
<tr>
<td>volume</td>
<td>int</td>
<td>Rolling 24hr trade volume denominated in the maker (first asset in the market pair).</td>
</tr>
</tbody></table>
<h2 id='ticker-2-0'>ticker (2.0)</h2>
<p>This call is used to view a dynamic list of the XBridge trade summary for the past 24 hours and does <em>not</em> include values of the inverse market. Only markets that have had trades in the past 24 hours it will be included.</p>
<h3 id='endpoint-2'>Endpoint</h3>
<p><code class="api-call"><a href="https://data.blocknet.co/api/v2.0/ticker">https://data.blocknet.co/api/v2.0/ticker</a></code></p>
<h3 id='response-parameters-2'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "BLOCK-LTC": {
    "volume": "548.12435100",
    "price": "44.72284723252284837351528359",
    "open": "44.72284723252284837351528359",
    "high": "55.86592178770949720670391061",
    "low": "44.63642193485968680902170911",
    "close": "44.93061261235648931280709984",
    "timestamp": 1563219207
  },
  "LTC-BLOCK": {
    "volume": "29.70000000",
    "price": "0.022",
    "open": "0.022",
    "high": "0.022",
    "low": "0.022",
    "close": "0.022",
    "timestamp": 1563176655
  },
  "BTC-BLOCK": {
    "volume": "0.68000000",
    "price": "0.00021",
    "open": "0.00021",
    "high": "0.00021",
    "low": "0.0002",
    "close": "0.0002",
    "timestamp": 1563175709
  }
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>Object</td>
<td>object</td>
<td>The market in maker-taker format and associated data. Use the <a href="#status">status</a> call to view the associated blockchain name for each ticker and the availabiity status.</td>
</tr>
<tr>
<td>volume</td>
<td>string</td>
<td>Rolling 24hr trade volume denominated in the maker (first asset in the market pair).</td>
</tr>
<tr>
<td>price</td>
<td>string</td>
<td>The last trade price.</td>
</tr>
<tr>
<td>open</td>
<td>string</td>
<td>Rolling 24hr opning trade price.</td>
</tr>
<tr>
<td>high</td>
<td>string</td>
<td>Highest trade price in the past 24hrs.</td>
</tr>
<tr>
<td>low</td>
<td>string</td>
<td>Lowest trade price in the past 24hrs.</td>
</tr>
<tr>
<td>close</td>
<td>string</td>
<td>Rolling 24hr closing trade price.</td>
</tr>
<tr>
<td>timestamp</td>
<td>int</td>
<td>The Unix epoch timestamp of when the last trade took place.</td>
</tr>
</tbody></table>
<h2 id='history'>history</h2>
<p>This call is used to view the XBridge trade history for the past 24 hours.</p>
<h3 id='endpoint-3'>Endpoint</h3>
<p><code class="api-call"><a href="https://data.blocknet.co/api/v2.0/history">https://data.blocknet.co/api/v2.0/history</a></code></p>
<h3 id='response-parameters-3'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>[
  {
    "timestamp": 1559970139,
    "txid": "4b409e5c5fb1986930cf7c19afec2c89ac2ad4fddc13c1d5479b66ddf4a8fefb",
    "to": "Bqtms8j1zrE65kcpsEorE5JDzDaHidMtLG",
    "xid": "9eb57bac331eab34f3daefd8364cdb2bb05259c407d805d0bd0c",
    "from": "BLOCK",
    "fromAmount": 0.001111,
    "to": "SYS",
    "toAmount": 0.001000
  },
  {
    "timestamp": 1559970139,
    "txid": "3de7479e8a88ebed986d3b7e7e135291d3fd10e4e6d4c6238663db42c5019286",
    "to": "Bqtms8j1zrE65kcpsEorE5JDzDaHidMtLG",
    "xid": "fd0fed3ee9fe557d5735768c9bdcd4ab2908165353e0f0cef0d5",
    "from": "BLOCK",
    "fromAmount": 0.001577,
    "to": "SYS",
    "toAmount": 0.001420
  },
  {
    "timestamp": 1559970139,
    "txid": "9cc4a0dae46f2f1849b3ab6f93ea1c59aeaf0e95662d90398814113f12127eae",
    "to": "BbrQKtutGBLuWHvq26EmHKuNaztnfBFWVB",
    "xid": "f74c614489bd77efe545c239d1f9a57363c5428e7401b2018d350",
    "from": "BLOCK",
    "fromAmount": 0.000231,
    "to": "SYS",
    "toAmount": 0.001100
  }
]
[{
  "timestamp":1564516002,
  "txid":"9f9592e4e5954645e8093c51e63cee73832b000e47dac45d8580deea3ebff8ef",
  "to":"BLOCK",
  "xid":"ca2c928552682d762d54b3cb124f9b663a7752faae11d13a",
  "from":"LTC",
  "fromAmount":"0.07393600",
  "toAmount":"3.80379800"

  },{"timestamp":1564515003,"txid":"fe7dac3f28ea7873aebc210ebb2fe77e60c8cd75204e2b37fb3ef0dac4a6213b","to":"BLOCK","xid":"6b169c7d40459411709a04405d3cd00d039ca78961536d57","from":"LTC","fromAmount":"0.07506700","toAmount":"3.85911500"},{"timestamp":1564513052,"txid":"edeffa602035e0f812f949206a2a9002fe1ebec9fb07148196db8b2fc082e6f1","to":"BLOCK","xid":"42e9a34f6334d58ca7aec96634ec80c902286a2088bfaf08","from":"LTC","fromAmount":"0.09047400","toAmount":"4.65205600"},{"timestamp":1564464003,"txid":"e4fd6f48dcf5fdc9af90f5237b496186a37af063a1fb07bab4a67db8e9763a0d","to":"BLOCK","xid":"27b3d828bae0c1cb9ee5cef8c6ff6609ada121d0f3676b0","from":"LTC","fromAmount":"0.13961800","toAmount":"6.27753800"},{"timestamp":1564463888,"txid":"317b70d0e54b25ed635cdc76fd85a3fc21b088bc0b4764246aefd68d7c812c29","to":"BLOCK","xid":"c822bca709ee64572a4888eda1419ac06cb5e9a016753f7","from":"LTC","fromAmount":"0.20779000","toAmount":"9.35310700"}]
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>timestamp</td>
<td>int</td>
<td>Unix epoch timestamp of when the trade took place.</td>
</tr>
<tr>
<td>txid</td>
<td>string</td>
<td>Blocknet trade fee transaction ID.</td>
</tr>
<tr>
<td>to</td>
<td>string</td>
<td>Service Node that received the trade fee.</td>
</tr>
<tr>
<td>xid</td>
<td>string</td>
<td>XBridge transaction ID.</td>
</tr>
<tr>
<td>from</td>
<td>string</td>
<td>Taker trading asset; the ticker of the asset being sold by the taker.</td>
</tr>
<tr>
<td>fromAmount</td>
<td>int</td>
<td>Taker trading size.</td>
</tr>
<tr>
<td>to</td>
<td>string</td>
<td>Maker trading asset; the ticker of the asset being sold by the maker.</td>
</tr>
<tr>
<td>toAmount</td>
<td>int</td>
<td>Maker trading size.</td>
</tr>
</tbody></table>
<h2 id='status'>status</h2>
<p>This call is used to view XBridge asset availability for trading and associated blockchain name for each ticker. It is hard-coded to only include assets for the markets returned in <a href="#ticker-1-0">ticker (1.0)</a>.</p>

<p>To view a full list of supported assets for trading, use <a href="#dxgetnetworktokens-web">dxgetnetworktokens</a>.</p>
<h3 id='endpoint-4'>Endpoint</h3>
<p><code class="api-call"><a href="https://data.blocknet.co/api/v2.0/status">https://data.blocknet.co/api/v2.0/status</a></code></p>
<h3 id='response-parameters-4'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
    "BLOCK": {
        "id":1,
        "name": "Blocknet",
        "frozen":0
    },
    "LTC": {
        "id":2,
        "name": "Litecoin",
        "frozen":0
    },
    "SYS": {
        "id":3,
        "name": "Syscoin",
        "frozen":0
    }
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>Object</td>
<td>object</td>
<td>An object with the ticker&#39;s blockchain name, ID, and availability status.</td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>The asset&#39;s ID number.</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>The asset&#39;s blockchain name.</td>
</tr>
<tr>
<td>frozen</td>
<td>bool</td>
<td>Online status. If <code>0</code>, the asset is online. If <code>1</code>, the asset is offline. Both assets of a market pair must show <code>0</code> for the market to be available for trading.</td>
</tr>
</tbody></table>
<h2 id='dxgetnetworktokens-web'>dxgetnetworktokens (web)</h2>
<p>This call is used to retrieve all the assets currently supported by the network for XBridge. This list may differ from the <a href="https://docs.blocknet.co/protocol/xbridge/compatibility/#supported-digital-assets">compatibility list</a> due to assets being unofficially supported or assets not being supported by any nodes on the network.</p>
<h3 id='endpoint-5'>Endpoint</h3>
<p><code class="api-call"><a href="https://data.blocknet.co/api/v2.0/dxgetnetworktokens">https://data.blocknet.co/api/v2.0/dxgetnetworktokens</a></code></p>
<h3 id='response-parameters-5'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>[
  "LTC",
  "SYS",
  "MONA",
  "BLOCK"
]
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>Array</td>
<td>array</td>
<td>An array of all the assets supported by the network for trading.</td>
</tr>
</tbody></table>
<h2 id='xrgetnetworkservices-web'>xrgetnetworkservices (web)</h2>
<p>This call is used to view the XRouter services currently supported on the network, along with the number of nodes supporting each service. XRouter SPV calls use the <code>xr::</code> namespace and XCloud services use the <code>xrs::</code> namespace.</p>
<h3 id='endpoint-6'>Endpoint</h3>
<p><code class="api-call"><a href="https://data.blocknet.co/api/v2.0/xrgetnetworkservices">https://data.blocknet.co/api/v2.0/xrgetnetworkservices</a></code></p>
<h3 id='response-parameters-6'>Response Parameters</h3>
<aside class="success">
200 OK
</aside>

<blockquote>
<p>Sample 200 Response</p>
</blockquote>
<pre class="highlight plaintext"><code>{
  "reply": {
    "spvwallets": [ "xr::BLOCK", "xr::BTC", "xr::LTC", "xr::MNP", "xr::SYS", "xr::TBLOCK" ],
    "services": [ "xrs::BTCgetbestblockhash", "xrs::BTCgetblockhash", "xrs::BTCgettransaction", "xrs::SYSgetbestblockhash", "xrs::SYSgetblock", "xrs::SYSgetgovernanceinfo", "xrs::SYSgetmempool", "xrs::SYSlistoffers", "xrs::SYSofferinfo", "xrs::twilio" ],
    "nodecounts": {
      "xr::BLOCK": 27,
      "xr::BTC": 13,
      "xr::LTC": 21,
      "xr::MNP": 1,
      "xr::SYS": 9,
      "xrs::BTCgetbestblockhash": 12,
      "xrs::BTCgetblockhash": 12,
      "xrs::BTCgettransaction": 5,
      "xrs::SYSgetbestblockhash": 7,
      "xrs::SYSgetblock": 6,
      "xrs::SYSgetgovernanceinfo": 4,
      "xrs::SYSgetmempool": 4,
      "xrs::SYSlistoffers": 4,
      "xrs::SYSofferinfo": 4,
      "xrs::twilio": 1
    }
  },
  "uuid": "cd408df7-0ff8-4e29-b5cf-0148af83f93a"
}
</code></pre>
<table><thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>reply</td>
<td>object</td>
<td>An object containing information on supported services.</td>
</tr>
<tr>
<td>spvwallets</td>
<td>array</td>
<td>An array of supported SPV wallets, represented by the asset&#39;s ticker.</td>
</tr>
<tr>
<td>services</td>
<td>array</td>
<td>An array of supported XCloud services.</td>
</tr>
<tr>
<td>nodecounts</td>
<td>object</td>
<td>An object of supported SPV wallets and XCloud services with how many nodes support each.</td>
</tr>
<tr>
<td>-- key</td>
<td>string</td>
<td>The SPV wallet or XCloud service with it&#39;s namespace.</td>
</tr>
<tr>
<td>-- value</td>
<td>int</td>
<td>The amount of nodes supporting each respective service.</td>
</tr>
<tr>
<td>uuid</td>
<td>string</td>
<td>The response ID, which can be used to view this response again with <a href="#xrgetreply">xrGetReply</a> (not supported via web API).</td>
</tr>
</tbody></table>
<h1 id='changelog'>Changelog</h1>
<p>This API documentation will be continuously updated to improve descriptions, instructions, and overall clarity on how to use the API and begin building on the Blocknet Protocol. An overview of changes can be viewed below. For a more detailed view of changes, <a href="https://github.com/blocknetdx/api-docs">see the site&#39;s Github repository</a>.</p>

<p>To receive notifications and stay informed on important developer updates and changes relating to the Blocknet Protocol, subscribe to the <a href="http://eepurl.com/dDjhYH">developer notification emailing list</a>.</p>

<p><br></p>

<p><strong>Updates</strong></p>

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

<table><thead>
<tr>
<th>2/7/2020</th>
</tr>
</thead><tbody>
<tr>
<td>• Wallet v4.0.x release</td>
</tr>
<tr>
<td>• Added <a href="#dxflushcancelledorders">dxFlushCancelledOrders</a> call</td>
</tr>
<tr>
<td>• Added <a href="#dxgettradingdata">dxGetTradingData</a> call</td>
</tr>
<tr>
<td>• Removed <code>gettradingdata</code> call, in progress towards being deprecated</td>
</tr>
<tr>
<td>• Update <code>blocknetdx.conf</code> references to <code>blocknet.conf</code></td>
</tr>
<tr>
<td>• Update <code>blocknetdx-cli</code> references to <code>blocknet-cli</code></td>
</tr>
<tr>
<td>• Remove <code>xrUpdateConfigs</code> command, replaced by <code>servicenodesendping</code></td>
</tr>
<tr>
<td>• Remove <code>xrouter=1</code> from XRouter setup</td>
</tr>
<tr>
<td>• Added selective <a href="#core-api">Core API</a> calls</td>
</tr>
</tbody></table>

<table><thead>
<tr>
<th>11/26/2019</th>
</tr>
</thead><tbody>
<tr>
<td>• Wallet v3.14.1 release</td>
</tr>
<tr>
<td>• Added <a href="#dxgetnewtokenaddress">dxGetNewTokenAddress</a> call</td>
</tr>
<tr>
<td>• Updated <a href="#xbridge-setup">XBridge Setup</a> to note that Segwit/Bech32 address and p2pk inputs are not yet compatible</td>
</tr>
<tr>
<td>• Updated <a href="#dxmakeorder">dxMakeOrder</a> and <a href="#dxtakeorder">dxTakeOrder</a> to note usage of funds are not restricted to the speficied address</td>
</tr>
<tr>
<td>• Corrected <a href="#xrgetblocks">xrGetBlocks</a> and <a href="#xrgettransactions">xrGetTransactions</a> to include quotes in the string array</td>
</tr>
<tr>
<td>• Updated XBridge order IDs in examples to be representative of real IDs</td>
</tr>
</tbody></table>

<table><thead>
<tr>
<th>8/2/2019</th>
</tr>
</thead><tbody>
<tr>
<td>• Updated the <a href="#xrconnect">xrConnect</a> output to include the added <code>fetchlimit</code> and timeout settings with the returned configs</td>
</tr>
<tr>
<td>• Updated the <a href="#ticker-2-0">ticker (1.0)</a> call output to include <code>lastprice</code> and <code>timestamp</code></td>
</tr>
<tr>
<td>• Added clarification <a href="#ticker-2-0">ticker (1.0)</a> description on inverse market data inclusion</td>
</tr>
</tbody></table>

<table><thead>
<tr>
<th>7/12/2019</th>
</tr>
</thead><tbody>
<tr>
<td>• Updated <a href="#xbridge-setup">XBridge Setup</a> to reference the guide in the <a href="https://docs.blocknet.co/protocol/xbridge/setup">documentation portal</a></td>
</tr>
<tr>
<td>• Added <a href="#ticker-2-0">ticker (2.0)</a> call</td>
</tr>
</tbody></table>

<table><thead>
<tr>
<th>7/5/2019</th>
</tr>
</thead><tbody>
<tr>
<td>• Added <a href="#gettradingdata">gettradingdata</a> call</td>
</tr>
<tr>
<td>• Added <a href="#web-api">Web API</a> section and calls</td>
</tr>
</tbody></table>

<table><thead>
<tr>
<th>5/9/2019</th>
</tr>
</thead><tbody>
<tr>
<td>• Updated Github links from <code>/BlocknetDX</code> to <code>/blocknetdx</code></td>
</tr>
<tr>
<td>• Updated Blocknet repo links from <code>/BlockDX</code> to <code>/blocknet</code></td>
</tr>
</tbody></table>

<table><thead>
<tr>
<th>4/18/2019</th>
</tr>
</thead><tbody>
<tr>
<td>• Updated <a href="#xrouter-setup">XRouter setup</a> instructions</td>
</tr>
<tr>
<td>• Updated <a href="#xbridge-setup">XBridge setup</a> instructions</td>
</tr>
<tr>
<td>• Added <a href="#xcloud-setup">XCloud setup</a> instructions</td>
</tr>
<tr>
<td>• Updated <a href="#xbridge-api">XBridge API</a> descriptions</td>
</tr>
<tr>
<td>• Updated <a href="#xrouter-api">XRouter API</a> for beta release</td>
</tr>
<tr>
<td>• Added <a href="#xcloud-api">XCloud API</a> for beta release</td>
</tr>
<tr>
<td>• Updated XBridge confirmations info for clarifications</td>
</tr>
<tr>
<td>• Updated XRouter intro to include node scoring information</td>
</tr>
<tr>
<td>• Added XCloud introduction</td>
</tr>
</tbody></table>

<table><thead>
<tr>
<th>3/5/2019</th>
</tr>
</thead><tbody>
<tr>
<td>• Update links to Github to reflect change in repository names</td>
</tr>
<tr>
<td>• Updated link to <a href="https://docs.blocknet.co/protocol/xbridge/compatibility/#supported-digital-assets">compatible blockchains</a></td>
</tr>
<tr>
<td>• Updated XRouter [confirmations] to [node_count]</td>
</tr>
<tr>
<td>• Updated XRouter [block] to [block_number]</td>
</tr>
<tr>
<td>• Updated language from <code>token</code> to <code>asset</code></td>
</tr>
</tbody></table>

<table><thead>
<tr>
<th>12/7/2018</th>
</tr>
</thead><tbody>
<tr>
<td>• Updated Introduction Service Node description</td>
</tr>
<tr>
<td>• Updated &#39;coin&#39; verbiage to &#39;token&#39;</td>
</tr>
<tr>
<td>• Updated description of how XBridge orderbooks are decentralized</td>
</tr>
<tr>
<td>• Updated order statuses for <a href="#dxmakeorder">dxMakeOrder</a>, <a href="#dxcancelorder">dxCancelOrder</a>, <a href="#dxgetorder">dxGetOrder</a>, <a href="#dxgetorders">dxGetOrders</a>, <a href="#dxgetmyorders">dxGetMyOrders</a> to remove <code>signed</code>, include <code>initiated</code>, and improve <code>hold</code> description</td>
</tr>
<tr>
<td>• Updated XBridge <a href="#error-codes">Error Codes</a></td>
</tr>
<tr>
<td>• Updated sample 400 response for <a href="#dxgetorders">dxGetOrders</a>, <a href="#dxgetmyorders">dxGetMyOrders</a>, <a href="#dxgetorderfills">dxGetOrderFills</a>, <a href="#dxgetorderhistory">dxGetOrderHistory</a></td>
</tr>
<tr>
<td>• Updated <a href="#dxtakeorder">dxTakeOrder</a>, <a href="#dxgetorders">dxGetOrders</a>, <a href="#dxgetmyorders">dxGetMyOrders</a>, and <a href="#dxgetorderbook">dxGetOrderBook</a> description for improved clarity</td>
</tr>
<tr>
<td>• Updated <a href="#dxgetordefills">dxGetOrderFills</a> sample response to not include <code>maker_txid</code>, <code>taker_txid</code>, and <code>block_id</code></td>
</tr>
<tr>
<td>• Updated <a href="#dxgetorderhistory">dxGetOrderHistory</a> parameters and removed &#39;not yet supported&#39; comment</td>
</tr>
<tr>
<td>• Updated <a href="#dxgetnetworktokens">dxGetNetworkTokens</a> to remove &#39;not yet supported&#39; comment</td>
</tr>
<tr>
<td>• Updated <a href="#dxgettokenbalances">dxGetTokenBalances</a> description to clarify it returns <em>available</em> balances</td>
</tr>
<tr>
<td>• Updated <a href="#dxgetorderbook">dxGetOrderBook</a> <code>max_orders</code> description and sample responses with better examples</td>
</tr>
<tr>
<td>• Consolidated <a href="#status-codes">order status codes</a> to a single location</td>
</tr>
<tr>
<td>• Updated <a href="#status-codes">Status Codes</a> to include <code>rolled back</code> and <code>rollback failed</code></td>
</tr>
<tr>
<td>• Added <a href="#dxloadxbridgeconf">dxLoadXBridgeConf</a> call</td>
</tr>
<tr>
<td>• Added historic versioning, which can be viewed next to each changelog date</td>
</tr>
<tr>
<td>• Corrected XRouter <code>confirmations</code> data type from &#39;string&#39; to &#39;int&#39;</td>
</tr>
</tbody></table>

<table><thead>
<tr>
<th>8/31/2018</th>
</tr>
</thead><tbody>
<tr>
<td>• Updated XBridge design details and diagrams to reflect fee switch from maker to taker</td>
</tr>
<tr>
<td>• Updated mentions of XBridge from 0.005 BLOCK to 0.015 BLOCK</td>
</tr>
<tr>
<td>• Added reference for atomic swap type in XBridge introduction</td>
</tr>
</tbody></table>

<table><thead>
<tr>
<th>8/21/2018</th>
</tr>
</thead><tbody>
<tr>
<td>• Added information on the design of XBridge and XRouter</td>
</tr>
<tr>
<td>• Added hyperlink to site branding leading to the site root</td>
</tr>
</tbody></table>

<table><thead>
<tr>
<th>8/10/2018</th>
</tr>
</thead><tbody>
<tr>
<td>• Added additonal information on the Blocknet Protocol, XBridge, and XRouter</td>
</tr>
<tr>
<td>• Added information on configuration and setup needed to use the API</td>
</tr>
<tr>
<td>• Moved Error Codes to under the XBridge API category</td>
</tr>
<tr>
<td>• Updated the <a href="#xrgetbalanceupdate">xrGetBalanceUpdate</a> description for better clarity</td>
</tr>
<tr>
<td>• Updated <a href="#xrgetbalance">xrGetBalance</a>, <a href="#getorderhistory">dxGetOrderHistory</a>, and <a href="#getnetworktokens">dxGetNetworkTokens</a> descriptions to reflect the level of support</td>
</tr>
<tr>
<td>• Updated XBridge order statuses and added explanations</td>
</tr>
<tr>
<td>• Added a changelog</td>
</tr>
<tr>
<td>• Added developer newsletter link in changelog and sidebar</td>
</tr>
<tr>
<td>• Updated sidebar links</td>
</tr>
<tr>
<td>• Updated design</td>
</tr>
</tbody></table>

<table><thead>
<tr>
<th>8/3/2018</th>
</tr>
</thead><tbody>
<tr>
<td>• Added documentation for XRouter CLI API calls</td>
</tr>
</tbody></table>

<table><thead>
<tr>
<th>6/4/2018</th>
</tr>
</thead><tbody>
<tr>
<td>• API documentation went live</td>
</tr>
<tr>
<td>• Includes documentation for XBridge CLI API calls</td>
</tr>
</tbody></table>

<p><br>
<br>
<br>
<br>
<br>
<br>
<br></p>

      </div>
      <div class="dark-box">
          <div class="lang-selector">
                <a href="#" data-language-name="cli">cli</a>
          </div>
      </div>
    </div>

      <div id="wallet-version" class="versions-dropdown">
        <span>Wallet v4.0.x &#x25BE;</span>
        <div class="versions-dropdown-content">
          <ul>
            <li><a href="v/3-14/">4.0.x</a></li>
            <li><a href="">4.0.x.x</a></li>
            <li><a href="">3.13.x</a></li>
            <li><a href="">3.12.x</a></li>
            <li><a href="">4.0.x</a></li>
            <li><a href="">4.0.x.x</a></li>
            <li><a href="">3.13.x</a></li>
            <li><a href="">3.12.x</a></li>
            <li><a href="">4.0.x</a></li>
            <li><a href="">4.0.x.x</a></li>
            <li><a href="">3.13.x</a></li>
            <li><a href="">3.12.x</a></li>
          </ul>
        </div>
      </div>

    <div id="notification-bar">
      <!-- <div class="notification" data-expire="">
        <span class="message"><strong>Need support? <a href="https://discord.gg/2e6s7H8" target="_blank">Join our Discord!</a></strong></span>
        <span class="notification-close" onclick="this.parentElement.style.display = 'none'">✕</span>
      </div> -->
      <!-- <div class="notification" data-id="xrouter-beta-release" data-expire="1557294893">
        <span class="message"><strong>XRouter Beta Released! <a href="https://blocknet.co/xrouter-missing-link-between-all-blockchains/" target="_blank">Read more...</a></strong></span>
        <span class="notification-close" onclick="this.parentElement.style.display = 'none'">✕</span>
      </div>
      <div class="notification" data-id="3130-update" data-expire="1557294893">
        <span class="message"><strong>Required Wallet v3.13.0 Update! <a href="https://blocknet.co/#downloads" target="_blank">View downloads...</a></strong></span>
        <span class="notification-close" onclick="this.parentElement.style.display = 'none'">✕</span>
      </div> -->
    </div>
  </body>
</html>
