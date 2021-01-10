# Getting Started

The Blocknet Protocol currently requires a synced Blocknet wallet, as well as the synced wallet of any blockchain that will be interacted with. In the future, with the use of [XRouter](#xrouter), this will not be required. In addition, configuration files must also be composed.





## Wallet Setup

> Sample blocknet.conf

```
listen=1
server=1
rpcallowip=127.0.0.1
rpcuser=user
rpcpassword=pass
port=41412
rpcport=41414
```

1. [Download and install](https://docs.blocknet.co/wallet/installation) the [latest Blocknet wallet](https://github.com/blocknetdx/blocknet/releases/latest).
1. Open the wallet, [encrypt it](https://docs.blocknet.co/wallet/encrypting), and [sync the blockchain](https://docs.blocknet.co/wallet/syncing).
	* A [bootstrap](https://github.com/blocknetdx/blocknet-blockchain-bootstrap) is also available for faster syncing.
1. Compose `blocknet.conf` as seen in the sample.
1. Set an RPC username and password in `blocknet.conf`.
1. If using the XBridge API, see [XBridge Setup](#xbridge-setup).
1. If using the XRouter API, see [XRouter Setup](#xrouter-setup).










## XBridge Setup

1. Follow the [XBridge Setup Guide](https://docs.blocknet.co/protocol/xbridge/setup).
1. If you would just like to view orders without having the other wallets installed (view order books only, no trading), add `dxnowallets=1` to your `blocknet.conf` or `ShowAllOrders=true` to the header of your `xbridge.conf`.
1. If any of the wallets are still open, they must be restarted in order to activate the new configurations.
1. Open, sync, and unlock the Blocknet wallet, as well as whichever blockchains will be interacted with.
1. Using the command line(cli), [XBridge API calls](#xbridge-api) can now be made.
1. If also using the XRouter API, see [XRouter Setup](#xrouter-setup).

**Note**: Segwit and Bech32 addresses are not currently compatible. Staked (p2pk) inputs are not currently compatible. Integrations of these addresses and inputs are planned.










## XRouter Setup

If you would like to operate a Service Node and monetize any microservice, blockchain, API, or cloud tech on your own hardware, in many cases without having to write any code, see the [Service Node Setup Guide](https://docs.blocknet.co/service-nodes/setup).

> Sample blocknet.conf

```
xrouterbanscore=-200
listen=1
server=1
rpcallowip=127.0.0.1
rpcuser=user
rpcpassword=pass
port=41412
rpcport=41414
```

> Sample xrouter.conf

```
[Main]
timeout=30
consensus=1
maxfee=0.5
tls=1

[BTC]
maxfee=0.03

[xrGetBlockCount]
maxfee=0.02
consensus=6

[SYS::xrGetBlockCount]
maxfee=0.02
```

**Note**: If you would like to utilize XRouter without syncing the Blocknet chain, see the [C++ library sample project](https://github.com/blocknetdx/libxrouter-sampleproj-cpp) for help getting started. If you would just like to test and play around with XRouter you can also check out the [XRouter Service Explorer](https://service-explorer.core.cloudchainsinc.com/#/).

1. In `blocknet.conf`:
	* Use `xrouterbanscore` to specify the score a Service Node must drop below before it is banned. The default value is `-200`. Service Nodes are banned for a 24hr period, after which they'll start with a score of `-25`.
1. Restart the Blocknet wallet.
1. Compose `xrouter.conf` as seen in the sample. All settings are optional.
	* `timeout` - Defines how long (in seconds) your client waits for a response from a Service Node. The default value is `30`.
	* `consensus` -  The number of Service Nodes that are used to route calls and use the majority response from for consensus. This can be overridden when making calls via the `node_count` parameter. The default value is `1`.
	* `maxfee` - The maximum fee you are willing to pay for calls. Service Nodes with fees higher than your specified max fee will not be queried. The default value is `0` (i.e. free calls only). For now, all fees are paid in BLOCK.
  * `tls` - Enables TLS support for XRouter Enterprise (EXR) nodes.
1. Values set under `[Main]` override the default values and become the new default settings for all subsections that don't have the respective setting specified. Subsection settings override `[Main]` and default settings. Blockchain-specific subsections have the highest priority and override all other settings. The setting hierarchy from highiest priority to lowest priority is as follows: *[BTC::xrGetBlockCount] > [BTC] > [xrGetBlockCount] > [Main] > default*. The higher priority settings override the lower priority settings.
1. Use `xrReloadConfigs` to apply changes to `xrouter.conf` without needing to restart the client.
1. Using the command line(cli), [XRouter API calls](#xrouter-api) can now be made. To begin you can use [xrGetNetworkServices](#xrgetnetworkservices) to view the supported SPV wallets (designated by the `xr::` namespace). To use services (designated by the `xrs::` namespace), see [XCloud Setup](#xcloud-setup).
1. If also using the XBridge API, see [XBridge Setup](#xbridge-setup).










## XCloud Setup

If you would like to operate a Service Node and monetize any microservice, blockchain, API, or cloud tech on your own hardware, in many cases without having to write any code, see the [Service Node Setup Guide](https://docs.blocknet.co/service-nodes/setup).

> Sample xrouter.conf

```
[Main]
timeout=30
consensus=1
maxfee=0.5

[xrs::ServiceName]
maxfee=0.1
timeout=10
consensus=5
```

1. [Setup XRouter](#setup-xrouter). This is required since XCloud is built on top of XRouter.
1. In `xrouter.conf`, add settings for the services you would like to use. The subsection heading used the service name with the namespace as it's shown in the `services` array in the [xrGetNetworkServices](#xrgetnetworkservices) response. All settings are optional.
	* `timeout` - Defines how long (in seconds) your client waits for a response from a Service Node. The default value is `30`.
	* `consensus` -  The number of Service Nodes that are used to route calls and use the majority response from for consensus. This can be overridden when making calls via the `node_count` parameter. The default value is `1`.
	* `maxfee` - The maximum fee you are willing to pay for calls. Service Nodes with fees higher than your specified max fee will not be queried. The default value is `0` (i.e. free calls only). For now, all fees are paid in BLOCK.
1. Values set under `[Main]` override the default values and become the new default settings for all subsections that don't have the respective setting specified. Service settings override `[Main]` and default settings. The setting hierarchy from highiest priority to lowest priority is as follows: *[xrs::ServiceName] > [Main] > default*. The higher priority settings override the lower priority settings.
1. Use `xrReloadConfigs` to apply changes to `xrouter.conf` without needing to restart the client.
1. Using the command line(cli) or console, [XCloud API calls](#xcloud-api) can now be made. To begin, use [xrGetNetworkServices](#xrgetnetworkservices) to view the calls under `services` and use [xrService](#xrservice) or [xrServiceConsensus](#xrserviceconsensus) to make the call.
1. If also using the XBridge API, see [XBridge Setup](#xbridge-setup).



## Hydra Setup

### TL;DR
The easiest way to get started is by using the [docker-compose file](https://github.com/blocknetdx/exrproxy-env) on the `blocknetdx/exrproxy-env` GitHub repository.

### Requirements
The following requirements have to be met in order to install Hydra:

- Servicenode Private key (How to setup a servicenode [here](https://docs.blocknet.co/service-nodes/setup))
- Geth synced
- Port 80 must be opened on the host

Operators should use the [docker-compose file](https://github.com/blocknetdx/exrproxy-env) to setup Hydra. There are three types of setup:

1) `./deploy.sh` (Using geth in the deployment)

2) `./deploy.sh gethexternal` (Using a local geth node outside of the deployment)

3) Manual Usage with setting environment variables.

More advanced operators could edit the existing `docker-compose.yml` file for their own specialized setup.

Running option 1 or 2 will prompt operators to install Docker and Docker-compose, and ask for input to fill out the xbrdige, xrouter and uWSGI configuration files.

> Deployment option 1

```shell
./deploy.sh
```

> Deployment option 2 

```shell
./deploy.sh gethexternal
```

> Deployment input prompt

```shell
Install Docker? [y/n] n
Not installing Docker...
Your Public IP Address: x.x.x.x
Servicenode Name: example
Servicenode Private Key: example
Servicenode Address: example

Please specify an user and password for the new servicenode
RPC Username: example
RPC Password: example
```

### Payment Processor

Hydra is using PostgreSQL as the backend DB to keep track of payments, API counts, expirary dates. The `eth-payment-processor` container connects to the operators geth through the WebSocket. The payment processor has a block ingestor that monitors each new incoming ETH block for any payments coming in. The payment processor also keeps API counts and send this data to the Postgres DB.

When everything is up and running, the operator needs to provide clients with a way to request a new project. The below (seen on github) shows how this is done.


### Scaling up

uWSGI processor/thread count and postgres connection... (WIP)






