# Getting Started

The Blocknet Protocol currently requires a synced Blocknet wallet, as well as the synced wallet of any blockchain that will be interacted with. In the future, with the use of [XRouter](#xrouter), this will not be required. In addition, configuration files must also be composed.





## Wallet Setup

> Sample blocknetdx.conf

```cli
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
1. Compose `blocknetdx.conf` as seen in the sample.
1. Set an RPC username and password in `blocknetdx.conf`.
1. If using the XBridge API, see [XBridge Setup](#xbridge-setup).
1. If using the XRouter API, see [XRouter Setup](#xrouter-setup).










## XBridge Setup

1. Follow the [XBridge Setup Guide](https://docs.blocknet.co/protocol/xbridge/setup).
1. If any of the wallets are still open, they must be restarted in order to activate the new configurations.
1. Open, sync, and unlock the Blocknet wallet, as well as whichever blockchains will be interacted with.
1. Using the command line(cli), [XBridge API calls](#xbridge-api) can now be made.
1. If also using the XRouter API, see [XRouter Setup](#xrouter-setup).










## XRouter Setup

If you would like to operate a Service Node and monetize any microservice, blockchain, API, or cloud tech on your own hardware, in many cases without having to write any code, see the [Service Node Setup Guide](https://docs.blocknet.co/service-nodes/setup).

> Sample blocknetdx.conf

```cli
xrouter=1
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

```cli
[Main]
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
```

1. In `blocknetdx.conf`:
	* Add `xrouter=1` to enables XRouter. A value of `0` means XRouter is disabled (*default*).
	* Use `xrouterbanscore` to specify the score a Service Node must drop below before it is banned. The default value is `-200`. Service Nodes are banned for a 24hr period, after which they'll start with a score of `-25`.
1. Restart the Blocknet wallet.
1. Compose `xrouter.conf` as seen in the sample. All settings are optional.
	* `timeout` - Defines how long (in seconds) your client waits for a response from a Service Node. The default value is `30`.
	* `consensus` -  The number of Service Nodes that are used to route calls and use the majority response from for consensus. This can be overridden when making calls via the `node_count` parameter. The default value is `1`.
	* `maxfee` - The maximum fee you are willing to pay for calls. Service Nodes with fees higher than your specified max fee will not be queried. The default value is `0` (i.e. free calls only). For now, all fees are paid in BLOCK.
1. Values set under `[Main]` override the default values and become the new default settings for all subsections that don't have the respective setting specified. Subsection settings override `[Main]` and default settings. Blockchain-specific subsections have the highest priority and override all other settings. The setting hierarchy from highiest priority to lowest priority is as follows: *[BTC::xrGetBlockCount] > [BTC] > [xrGetBlockCount] > [Main] > default*. The higher priority settings override the lower priority settings.
1. Use `xrReloadConfigs` to apply changes to `xrouter.conf` without needing to restart the client.
1. Using the command line(cli), [XRouter API calls](#xrouter-api) can now be made. To begin you can use [xrGetNetworkServices](#xrgetnetworkservices) to view the supported SPV wallets (designated by the `xr::` namespace). To use services (designated by the `xrs::` namespace), see [XCloud Setup](#xcloud-setup).
1. If also using the XBridge API, see [XBridge Setup](#xbridge-setup).










## XCloud Setup

If you would like to operate a Service Node and monetize any microservice, blockchain, API, or cloud tech on your own hardware, in many cases without having to write any code, see the [Service Node Setup Guide](https://docs.blocknet.co/service-nodes/setup).

> Sample xrouter.conf

```cli
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









