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
	* A [bootstrap is also available](https://github.com/blocknetdx/blocknet-blockchain-bootstrap) for faster syncing.
1. Compose `blocknetdx.conf` as seen in the sample.
1. Set an RPC username and password in `blocknetdx.conf`.
1. If using the XBridge API, see [XBridge Setup](#xbridge-setup).
1. If using the XRouter API, see [XRouter Setup](#xrouter-setup).










## XBridge Setup

> Sample xbridge.conf

```cli
[Main]
ExchangeWallets=BLOCK,SYS
FullLog=true
LogPath=
ExchangeTax=300

[BLOCK]
Title=Blocknet
Address=
Ip=127.0.0.1
Port=41414
Username=
Password=
AddressPrefix=26
ScriptPrefix=28
SecretPrefix=154
COIN=100000000
MinimumAmount=0
TxVersion=1
DustAmount=0
CreateTxMethod=BTC
GetNewKeySupported=true
ImportWithNoScanSupported=true
MinTxFee=0
BlockTime=60
FeePerByte=20
Confirmations=0

[SYS]
Title=Syscoin
Address=
Ip=127.0.0.1
Port=8370
Username=
Password=
AddressPrefix=63
ScriptPrefix=5
SecretPrefix=128
COIN=100000000
MinimumAmount=0
TxVersion=1
DustAmount=0
CreateTxMethod=BTC
MinTxFee=0
BlockTime=60
GetNewKeySupported=false
ImportWithNoScanSupported=false
FeePerByte=210
Confirmations=0
```

1. Compose `xbridge.conf` as seen in the sample ([video tutorial](https://www.youtube.com/watch?v=HXzac9WnsS8)).
	* For automated setup, you can use the [GUI configuration setup](https://docs.blocknet.co/blockdx/configuration/) for Block DX (a DEX built on XBridge).
	* This configuration file should be customized for whichever blockchains you will be interacting with.
	* [Here are configurations for other blockchains](https://github.com/blocknetdx/blockchain-configuration-files/tree/master/xbridge-confs). Use [the manifest](https://github.com/blocknetdx/blockchain-configuration-files/blob/master/manifest-latest.json) to determine which files to use for with each blockchain and wallet version. See the [full list of compatible blockchains](https://docs.blocknet.co/protocol/xbridge/compatibility/#supported-digital-assets) and wallet versions.
	* The BLOCK configurations will always be required since the Blocknet wallet is used to facilitate interactions.
	* `ExchangeWallets=` under `[Main]` must also include each blockchain's symbol.
	* `Confirmations=` is the number of confirmations required before funds are redeemable from the atomic swap contract. For blockchains like Bitcoin, it is recommended to use at least 1 confirmation.
1. Compose the wallet configuration file for whichever blockchains will be interacted with ([video tutorial](https://www.youtube.com/watch?v=w7UTbk6EWJQ)).
	* [Here are configurations for other blockchains](https://github.com/blocknetdx/blockchain-configuration-files/tree/master/wallet-confs). Use [the manifest](https://github.com/blocknetdx/blockchain-configuration-files/blob/master/manifest-latest.json) to determine which files to use for with each blockchain and wallet version.
	* This process is the same as for `blocknetdx.conf`.
	* Only the blockchains that will be interacted with will require this configuration setup.
	* __IMPORTANT:__
		* Make sure funds are split into multiple UTXOs. If you have an order for 1 LTC and you only have a single 10 LTC input, all 10 LTC will be locked in this order. Having multiple, preferably smaller, UTXOs will allow a better distribution of funds across orders.
		* Make sure funds are in legacy addresses (Eg. LTC funds should be in a "L" address).
1. If any of the wallets are still open, they must be restarted in order to activate the new configurations.
1. Open, sync, and unlock the Blocknet wallet, as well as whichever blockchains will be interacted with.
1. Using the command line(cli), [XBridge API calls](#xbridge-api) can now be made.
1. If also using the XRouter API, see [XRouter Setup](#xrouter-setup).

<!-- * `Confirmations=` is the number of confirmations required before funds are redeemable from the atomic swap contract; -->










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









