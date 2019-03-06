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

1. Download and install the [latest Blocknet wallet](https://github.com/BlocknetDX/BlockDX/releases/latest);
1. Open the wallet, encrypt it, and sync the blockchain;
1. Compose *blocknetdx.conf* as seen in the sample;
1. Set an RPC username and password in *blocknetdx.conf*;
1. If using the XBridge API, see [XBridge Setup](#xbridge-setup)
1. If using the XRouter API, see [XRouter Setup](#xrouter-setup)










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

1. Compose *xbridge.conf* as seen in the sample;
	* [Video tutorial](https://www.youtube.com/watch?v=HXzac9WnsS8);
	* This configuration file can be customized for whichever blockchains will be interacted with;
	* [Here are configurations for other blockchains](https://github.com/BlocknetDX/blockchain-configuration-files/tree/master/xbridge-confs). Use the manifest to determine which files to use for which blockchain and wallet versions;
	* The entire code area in the link above can be added to *xbridge.conf* as having configurations for blockchains not used is okay;
	* The BLOCK configurations will always be required;
	* `ExchangeWallets=` under `[Main]` must also include each blockchain's symbol;
	* `Confirmations=` is the number of confirmations required before funds are redeemable from the atomic swap contract;
1. Compose the wallet configuration file for whichever blockchains will be interacted with;
	* [Video tutorial](https://www.youtube.com/watch?v=w7UTbk6EWJQ);
	* [Here are configurations for other coins](https://github.com/BlocknetDX/blockchain-configuration-files/tree/master/wallet-confs). Use [the manifest](https://github.com/BlocknetDX/blockchain-configuration-files/blob/master/manifest-latest.json) to determine which files to use for which blockchain and wallet versions;
	* This process is the same as for *blocknetdx.conf*;
	* Only the blockchains that will be interacted with will require this configuration setup;
1. If any of the wallets are still open, they must be restarted in order to activate the new configurations;
1. Open, sync, and unlock the Blocknet wallet, as well as whichever blockchains will be interacted with;
1. Using the command line(cli), [XBridge API calls](#xbridge-api) can now be made;
1. If also using the XRouter API, see [XRouter Setup](#xrouter-setup);










## XRouter Setup

> Sample xrouter.conf

```cli
[Main]
xrouter=1
```

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

*__Please contact @hanniabu or @86b [on Discord](https://discord.gg/T7AG8TK) for a test build__*

1. Compose *xrouter.conf* as seen in the sample;
	1. `xrouter=1` enables XRouter and `xrouter=0` disables XRouter;
1. Peers that have XRouter enabled must be added to *blocknetdx.conf*;
	1. This is temporary and for development purposes only until auto peer finding is released;
1. If any of the wallets are still open, they must be restarted in order to activate the new configurations;
1. Open (or restart if already open), sync, and unlock the Blocknet wallet;
1. At this time, the client needs to have at least 200 BLOCK on any account;
1. Using the command line(cli), [XRouter API calls](#xrouter-api) can now be made;
1. If also using the XBridge API, see [XBridge Setup](#xbridge-setup);

<!-- 
The `wait` parameter defines how long the client waits for a reply from the server. Default value is 20000 milliseconds
'node_count' parameter is the number of Service Nodes that are used to route calls and use the majority response from.
-->









