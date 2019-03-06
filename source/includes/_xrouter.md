# XRouter API

The following set of calls are used to communicate and interact with blockchains remotely over the Blocknet network.










## xrGetBlockCount

> Sample Data

```cli
{
  "blockchain": "SYS"
}
```
This call is used to retrieve the current block height of the specified blockchain.


### Request Parameters

> Sample Request

```cli
blocknetdx-cli xrGetBlockCount SYS
```
<code>xrGetBlockCount [blockchain] [node_count]\(optional)</code>

Parameter | Type | Description
--------- | ------- | -----------
blockchain | string | The ticker symbol of the blockchain (BTC, LTC, SYS, etc.).
node_count | int | (Optional Parameter) Defaults to <code>1</code> if no `node_count=` setting in *xrouter.conf*.<br>The number of Service Nodes the call is sent to for consensus on the final response.  


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "reply": "91510"
}
```

Parameter | Type | Description
--------- | ------- | -----------
reply | string | The latest block number of the specified blockchain.










## xrGetBlockHash

> Sample Data

```cli
{
  "blockchain": "SYS",
  "block": 91510
}
```
This call is used to retrieve the block hash of the specified block and blockchain.


### Request Parameters

> Sample Request

```cli
blocknetdx-cli xrGetBlockHash SYS 91510
```
<code>xrGetBlockHash [blockchain] [block_number] [node_count]\(optional)</code>

Parameter | Type | Description
--------- | ------- | -----------
blockchain | string | The ticker symbol of the blockchain (BTC, LTC, SYS, etc.).
block_number | int | The block number for the block hash of interest.
node_count | int | (Optional Parameter) Defaults to <code>1</code> if no `node_count=` setting in *xrouter.conf*.<br>The number of Service Nodes the call is sent to for consensus on the final response.  


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "block_hash": "0cf18712db68be85793dc06cd0a4fbc8edb166157e6847bb3c9f55d462b02837"
}
```

Parameter | Type | Description
--------- | ------- | -----------
reply | string | The block hash of the specified block and blockchain.










## xrGetBlock

> Sample Data

```cli
{
  "blockchain": "SYS",
  "block_hash": "0cf18712db68be85793dc06cd0a4fbc8edb166157e6847bb3c9f55d462b02837"
}
```
This call is used to retrieve the block number of the specified block hash and blockchain.


### Request Parameters

> Sample Request

```cli
blocknetdx-cli xrGetBlock SYS 0cf18712db68be85793dc06cd0a4fbc8edb166157e6847bb3c9f55d462b02837
```
<code>xrGetBlock [blockchain] [block_hash] [node_count]\(optional)</code>

Parameter | Type | Description
--------- | ------- | -----------
blockchain | string | The ticker symbol of the blockchain (BTC, LTC, SYS, etc.).
block_hash | string | The block hash for the block of interest.
node_count | int | (Optional Parameter) Defaults to <code>1</code> if no `node_count=` setting in *xrouter.conf*.<br>The number of Service Nodes the call is sent to for consensus on the final response.  


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "reply" : {
    "hash" : "0cf18712db68be85793dc06cd0a4fbc8edb166157e6847bb3c9f55d462b02837",
    "confirmations" : 33611,
    "size" : 734,
    "height" : 91510,
    "version" : 805306624,
    "versionHex" : "30000100",
    "merkleroot" : "55554df0ea7f66552beffe433d2c2f620bada79063a343ffc23c60c67cdf028f",
    "tx" : [
      "55554df0ea7f66552beffe433d2c2f620bada79063a343ffc23c60c67cdf028f"
    ],
    "time" : 1530894673,
    "mediantime" : 1530894336,
    "nonce" : 0,
    "bits" : "180761db",
    "difficulty" : 148937676133.26119995117187500,
    "chainwork" : "00000000000000000000000000000000000000000028ad56864c458781e21970",
    "auxpow" : {
      "tx" : {
        "hex" : "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff5703dd3408142f5669614254432f626d67706f6f6c2e636f6d2f2cfabe6d6d75654ab7a6b163e7a04e56e43f8e7ca0087f11e8bd6c3c72c69732e849532878040000000000000010d51dbb0b9301409ff96ef9f588c50200ffffffff01c051824a000000001976a914f1c075a01882ae0972f95d3a4177c86c852b7d9188ac00000000",
        "txid" : "c8fc123672fffb3c6a45b94bdd30afc114f282742338809380bc84fe8666d489",
        "size" : 172,
        "version" : 1,
        "locktime" : 0,
        "vin" : [
          {
            "coinbase" : "03dd3408142f5669614254432f626d67706f6f6c2e636f6d2f2cfabe6d6d75654ab7a6b163e7a04e56e43f8e7ca0087f11e8bd6c3c72c69732e849532878040000000000000010d51dbb0b9301409ff96ef9f588c50200",
            "sequence" : 4294967295
          }
        ],
        "vout" : [
          {
            "value" : 12.50054592000000042,
            "valueSat" : 1250054592,
            "n" : 0,
            "scriptPubKey" : {
              "asm" : "OP_DUP OP_HASH160 f1c075a01882ae0972f95d3a4177c86c852b7d91 OP_EQUALVERIFY OP_CHECKSIG",
              "hex" : "76a914f1c075a01882ae0972f95d3a4177c86c852b7d9188ac",
              "reqSigs" : 1,
              "type" : "pubkeyhash",
              "addresses" : [
                "SjLGSPfmF3kVPA6A213hShYc4aRtiWZ8Wu"
              ]
            }
          }
        ],
        "blockhash" : "000000000000000004bdb8e3fdf28ffc528f4e6b1871a6177579cbd4dabde955"
      },
      "index" : 0,
      "chainindex" : 2,
      "merklebranch" : [
        "a67d749dfa7006b9d66d2284b20a64ebcb8c2e5aae18e355c790b90a060a30c1",
        "9ab5c057ecf43aa0552c21be4f86b1c9b248fe2dd0821bee38e5a25a22c49c25",
        "ec11fd79e02fe98bf9f4b624e5460a3221dbae27d24f36c9988dcc5beaf3c592",
        "dbc42b7360a7165b277f73094a366e951d3ac6d6a1e9493d838d35372e5e846b",
        "c7260dbfb6b196bd2e4e4dbde1799592627a3e6fa384e6692be8387a9251e5e2"
      ],
      "chainmerklebranch" : [
        "89af0bc973bc0308f14c5c50c3d75f68783eab40a4688064cd56cfaed977d138",
        "5360cbf0991b4b0e09d589631c232d1f229104faad9e65375695230c47bc2493"
      ],
      "parentblock" : "0000002024653d98f3eace4b66b6269fa9205e08b647e23cf7880e0000000000000000003feae4c877b2f8b73f6f92a589ed8870fe98abb3551f1539373597f5b44514ada9993f5bb1830118d5793688"
    },
    "previousblockhash" : "ba53d715abf76ac8adc025120ffb48b2331f3a1b9b7d01167ffd7dcd23934390",
    "nextblockhash" : "cd3a236542491089bffd8ba49cbe1d11a20dd4c4ad188307027e60c710732409"
  }
}
```

Parameter | Type | Description
--------- | ------- | -----------
reply | object | The block data of the specified block hash and blockchain.










## xrGetTransaction

> Sample Data

```cli
{
  "blockchain": "SYS",
  "txid": "9e5db236f75babe4e28c17f0ed1eddbcfdb5bde8a69750e1a4952d110c620e51"
}
```
This call is used to retrieve the transaction data for the specified transaction ID and blockchain.


### Request Parameters

> Sample Request

```cli
blocknetdx-cli xrGetTransaction SYS 9e5db236f75babe4e28c17f0ed1eddbcfdb5bde8a69750e1a4952d110c620e51
```
<code>xrGetTransaction [blockchain] [txid] [node_count]\(optional)</code>

Parameter | Type | Description
--------- | ------- | -----------
blockchain | string | The ticker symbol of the blockchain (BTC, LTC, SYS, etc.).
txid | string | The transaction ID(hash) of interest.
node_count | int | (Optional Parameter) Defaults to <code>1</code> if no `node_count=` setting in *xrouter.conf*.<br>The number of Service Nodes the call is sent to for consensus on the final response.  


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "reply" : {
    "txid" : "9e5db236f75babe4e28c17f0ed1eddbcfdb5bde8a69750e1a4952d110c620e51",
    "size" : 192,
    "version" : 2,
    "locktime" : 0,
    "vin" : [
      {
        "txid" : "10f28315098fff366e2dfba23afacc10ddb5ac30a403d6396cc2d35739f06a79",
        "vout" : 1,
        "scriptSig" : {
          "asm" : "30450221008d807ad2585d4775e57c105d16f12f5eb7925a3f8f66b077f7944ec74e421ed9022067105602af2705d4456ccd68db8b4eb327cdb5e55e7de98d7ba9f1213a75a1ad[ALL] 02e927a2a1d4a613ed3fa73bf1169beaf4e95a6348afac6613e283d80b9bf2abba",
          "hex" : "4830450221008d807ad2585d4775e57c105d16f12f5eb7925a3f8f66b077f7944ec74e421ed9022067105602af2705d4456ccd68db8b4eb327cdb5e55e7de98d7ba9f1213a75a1ad012102e927a2a1d4a613ed3fa73bf1169beaf4e95a6348afac6613e283d80b9bf2abba"
        },
        "sequence" : 4294967295
      }
    ],
    "vout" : [
      {
        "value" : 1.43000000000000105,
        "valueSat" : 143000000,
        "n" : 0,
        "scriptPubKey" : {
          "asm" : "OP_DUP OP_HASH160 7be755600f2fd9f3518be6ededb38e2498f51ff5 OP_EQUALVERIFY OP_CHECKSIG",
          "hex" : "76a9147be755600f2fd9f3518be6ededb38e2498f51ff588ac",
          "reqSigs" : 1,
          "type" : "pubkeyhash",
          "addresses" : [
            "SYb9Gmcwj1aXUV86cKpnCD8SR7hvZgbKTP"
          ]
        }
      }
    ]
  }
}
```

Parameter | Type | Description
--------- | ------- | -----------
reply | object | The transaction data of the specified transaction ID and blockchain.










## xrGetAllBlocks

> Sample Data

```cli
{
  "blockchain": "SYS",
  "start_block": 125121
}
```
This call is used to retrieve block data for the specified blockchain starting from the given start block. Currently no more than 50 blocks are sent.


### Request Parameters

> Sample Request

```cli
blocknetdx-cli xrGetAllBlocks SYS 125121
```
<code>xrGetAllBlocks [blockchain] [start_block] [node_count]\(optional)</code>

Parameter | Type | Description
--------- | ------- | -----------
blockchain | string | The ticker symbol of the blockchain (BTC, LTC, SYS, etc.).
start_block | int | The earliest block height to retrieve.
node_count | int | (Optional Parameter) Defaults to <code>1</code> if no `node_count=` setting in *xrouter.conf*.<br>The number of Service Nodes the call is sent to for consensus on the final response.  


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "reply" : [
    {
      "hash" : "f2533eddc5c0236d5f41e1e09a9159bcb47023d44797a6545e0e3b825cf95e9b",
      "confirmations" : 2,
      "size" : 1007,
      "height" : 125121,
      "version" : 805306624,
      "versionHex" : "30000100",
      "merkleroot" : "5b2b595de4f657584b296fa44bad64b1a3e7dc4d6889fc8c9d6d0c95a854db72",
      "tx" : [
        "5b2b595de4f657584b296fa44bad64b1a3e7dc4d6889fc8c9d6d0c95a854db72"
      ],
      "time" : 1533012820,
      "mediantime" : 1533012478,
      "nonce" : 0,
      "bits" : "18091baf",
      "difficulty" : 120715641906.91769409179687500,
      "chainwork" : "0000000000000000000000000000000000000000003825a61e54ed44058b6034",
      "auxpow" : {
        "tx" : {
          "hex" : "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff5903e02708162f5669614254432f4d696e65642062792079776e672f2cfabe6d6d1279c855d8aa2173e349a9762e19d4e05efe031f932b06ffcf33c19644a75b35040000000000000010124a9601d228401c5335cca9122622a2ffffffff02e9b80e4c000000001976a914536ffa992491508dca0354e52f32a3a7a679a53a88ac0000000000000000266a24aa21a9edadd1294ea7e1b2d405002e7b03980efaa55045ba48c23f1093589d92987fcec900000000",
          "txid" : "560169c9931d54bcf90a1d05e16714849c8477f0f95f8dcca3cf5fbd1efde88c",
          "size" : 221,
          "version" : 1,
          "locktime" : 0,
          "vin" : [
            {
              "coinbase" : "03e02708162f5669614254432f4d696e65642062792079776e672f2cfabe6d6d1279c855d8aa2173e349a9762e19d4e05efe031f932b06ffcf33c19644a75b35040000000000000010124a9601d228401c5335cca9122622a2",
              "sequence" : 4294967295
            }
          ],
          "vout" : [
            {
              "value" : 12.76033257000000098,
              "valueSat" : 1276033257,
              "n" : 0,
              "scriptPubKey" : {
                "asm" : "OP_DUP OP_HASH160 536ffa992491508dca0354e52f32a3a7a679a53a OP_EQUALVERIFY OP_CHECKSIG",
                "hex" : "76a914536ffa992491508dca0354e52f32a3a7a679a53a88ac",
                "reqSigs" : 1,
                "type" : "pubkeyhash",
                "addresses" : [
                  "SUuBGCD7Ff3C2ozR6osYguPeXNho98S5qR"
                ]
              }
            },
            {
              "value" : 0.00000000000000000,
              "valueSat" : 0,
              "n" : 1,
              "scriptPubKey" : {
                "asm" : "OP_RETURN aa21a9edadd1294ea7e1b2d405002e7b03980efaa55045ba48c23f1093589d92987fcec9",
                "hex" : "6a24aa21a9edadd1294ea7e1b2d405002e7b03980efaa55045ba48c23f1093589d92987fcec9",
                "type" : "nulldata"
              }
            }
          ],
          "blockhash" : "000000000000000003f7704e8418f82a706e1adf5a443fe2d1bbafd763d0aa55"
        },
        "index" : 0,
        "chainindex" : 2,
        "merklebranch" : [
          "dc642d030c399e6df1ff2713724ba359d22122d1389e8c7b27cd8b3187ce4059",
          "e600abf23ef6c9035cc5263cf485e6d7307578849874b0872797a69e167b407a",
          "765534aea344ec49447539f29003547e08bdd2f7bac4a89044742138b5c60c01",
          "279b38798bd992e6e2ca2e11d34984f08f3133bbbe35ac9aa893299c849451b1",
          "20b844f21ca134a4a2eb2472f8b44a3c8f7a28e5ed07880fb6b5ce30b86047ca",
          "409c54e20ce4c5a89c98d5bd8f6d1f584e66484e70fb4bcf6ccf01b847d3c2b3",
          "5767d0ee43e176ea6bf0d19c3f4dc7dd87d4b57c3a925a43cb70e89988cca4f8",
          "6ccbdf7f7821cfe77f825d4ea31ae888892908f0d65673a491a86b25652a834c",
          "19b09c19b446def1c7320a3142588ad39103ea8fc0771f6b16b3eed70d0b5987",
          "e965cbe66dffa469be26cf152ba89d6bc42b0bf35b82cfc7ad7a617d42cbaad1",
          "201af6392cbb709712db1e5f8e51345bc7810eb3f52432ad95588fb09688ffdd",
          "0afd4499f211ad1cb90be9978fa80a71466551164ec5b07031b04063526113a7"
        ],
        "chainmerklebranch" : [
          "b32623d9da0481fc5b184473d6238eb6b60c6da14e55343174fe031114c4e688",
          "e3b97176e2c65013066f361a298493a3427668ad6264642022b75b3ae3a0421d"
        ],
        "parentblock" : "00000020088f8db22759d52f1699f1ffe6279d5058c0f8e5dad020000000000000000000e57036cbd7e4f7b019658c0e824f3c36c8a3c6ebcca4fdfaaa4839fa0c48f92592eb5f5b7b4f2f176765fa90"
      },
      "previousblockhash" : "e24ff358a98d1d7b4c66b6e2dcaaead0c8ed7cb148263cb69023b07b93bb6b1f",
      "nextblockhash" : "f15cb4628a5f286a9bb4b3495cdb2736afbea0d28222e3128e619bb9ec6c16c6"
    },
    {
      "hash" : "f15cb4628a5f286a9bb4b3495cdb2736afbea0d28222e3128e619bb9ec6c16c6",
      "confirmations" : 1,
      "size" : 1305,
      "height" : 125122,
      "version" : 805306624,
      "versionHex" : "30000100",
      "merkleroot" : "a43bebca83ab1de2da3c6113b21f875bd5e3decff9412cc95341a080285fa2da",
      "tx" : [
        "66c1a57f5cd7c5880876f9b71aaf54e46668a60e4ca2a9417c97d6c448732025",
        "446fb23f754388be49d6473780abc80e46649d6c6fb48adb01df9e333c92b459"
      ],
      "time" : 1533012894,
      "mediantime" : 1533012624,
      "nonce" : 0,
      "bits" : "1808fc27",
      "difficulty" : 122370451899.92539978027343750,
      "chainwork" : "0000000000000000000000000000000000000000003825c29c4a54f55a22512d",
      "auxpow" : {
        "tx" : {
          "hex" : "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff5c03e02708192f5669614254432f4d696e656420627920687367313131312f2cfabe6d6d79a48c9484e032e1ab8c9a3b682bfc48c2047fea605d42b8b2afc9284bc23b5c040000000000000010134ac90066ce6c782d4dd90076b16100ffffffff02aa12124c000000001976a914536ffa992491508dca0354e52f32a3a7a679a53a88ac0000000000000000266a24aa21a9ed3a8eb94b422b183a93c1956f005e56f11b06bde47a06c201c48f80756ea74a1000000000",
          "txid" : "b1f0a02d6512cf36a208e29aa65c6247f4f86dc7126d27d86ee76dc939422522",
          "size" : 224,
          "version" : 1,
          "locktime" : 0,
          "vin" : [
            {
              "coinbase" : "03e02708192f5669614254432f4d696e656420627920687367313131312f2cfabe6d6d79a48c9484e032e1ab8c9a3b682bfc48c2047fea605d42b8b2afc9284bc23b5c040000000000000010134ac90066ce6c782d4dd90076b16100",
              "sequence" : 4294967295
            }
          ],
          "vout" : [
            {
              "value" : 12.76252842000000065,
              "valueSat" : 1276252842,
              "n" : 0,
              "scriptPubKey" : {
                "asm" : "OP_DUP OP_HASH160 536ffa992491508dca0354e52f32a3a7a679a53a OP_EQUALVERIFY OP_CHECKSIG",
                "hex" : "76a914536ffa992491508dca0354e52f32a3a7a679a53a88ac",
                "reqSigs" : 1,
                "type" : "pubkeyhash",
                "addresses" : [
                  "SUuBGCD7Ff3C2ozR6osYguPeXNho98S5qR"
                ]
              }
            },
            {
              "value" : 0.00000000000000000,
              "valueSat" : 0,
              "n" : 1,
              "scriptPubKey" : {
                "asm" : "OP_RETURN aa21a9ed3a8eb94b422b183a93c1956f005e56f11b06bde47a06c201c48f80756ea74a10",
                "hex" : "6a24aa21a9ed3a8eb94b422b183a93c1956f005e56f11b06bde47a06c201c48f80756ea74a10",
                "type" : "nulldata"
              }
            }
          ],
          "blockhash" : "000000000000000004039a3795a787502ef9eb528ff7efec9e056b0b2b44d9aa"
        },
        "index" : 0,
        "chainindex" : 2,
        "merklebranch" : [
          "dc642d030c399e6df1ff2713724ba359d22122d1389e8c7b27cd8b3187ce4059",
          "e600abf23ef6c9035cc5263cf485e6d7307578849874b0872797a69e167b407a",
          "765534aea344ec49447539f29003547e08bdd2f7bac4a89044742138b5c60c01",
          "279b38798bd992e6e2ca2e11d34984f08f3133bbbe35ac9aa893299c849451b1",
          "20b844f21ca134a4a2eb2472f8b44a3c8f7a28e5ed07880fb6b5ce30b86047ca",
          "39e23fbbf70797fc8f6b33394f9fab7435e13ea37906fb40ef1d3d7ae7b3b721",
          "1dcf170541371bf7b842bf7615278558916ac8b0dfe3af7d89180f377b8401b8",
          "97044ea6be9754aea75ce27cd60e967d7363d64e378d8ab6385365751247340c",
          "dd08a02d449ede20f458e8c2580762701927b9a65a903c9e71bc0130839a6b31",
          "b012c45679777632a16563b8672cb4d58326ef7a2dd7c04b8bdd1e3e2f272fec",
          "a29d3463c403808c7dfdc5cbc42457b13a14771e7c8c5fed24ef12f7e437d00d",
          "d1025b422ef60f5194d182998749f0e489c46fa50b2826c3028b74e50a5e8257"
        ],
        "chainmerklebranch" : [
          "b32623d9da0481fc5b184473d6238eb6b60c6da14e55343174fe031114c4e688",
          "e3b97176e2c65013066f361a298493a3427668ad6264642022b75b3ae3a0421d"
        ],
        "parentblock" : "00000020088f8db22759d52f1699f1ffe6279d5058c0f8e5dad02000000000000000000006e05d148ad92f8ba0b9ceea63b9c2f10e3013e90ab646609b39834c0fbb95009eeb5f5b7b4f2f177580f4e1"
      },
      "previousblockhash" : "f2533eddc5c0236d5f41e1e09a9159bcb47023d44797a6545e0e3b825cf95e9b"
    }
  ]
}
```

Parameter | Type | Description
--------- | ------- | -----------
reply | array | The block data for every block of the specified blockchain from the given block through to the current block height










## xrGetAllTransactions

> Sample Data

```cli
{
  "blockchain": "SYS",
  "address": "SYb9Gmcwj1aXUV86cKpnCD8SR7hvZgbKTP",
  "start_block": 125155
}
```
This call is used to retrieve all transactions of the given address for the specified blockchain from the last 50 blocks, starting at the specified start block.


### Request Parameters

> Sample Request

```cli
blocknetdx-cli xrGetAllTransactions SYS SYb9Gmcwj1aXUV86cKpnCD8SR7hvZgbKTP 125155
```
<code>xrGetAllTransactions [blockchain] [address] [start_block]\(optional) [node_count]\(optional)</code>

Parameter | Type | Description
--------- | ------- | -----------
blockchain | string | The ticker symbol of the blockchain (BTC, LTC, SYS, etc.).
address | string | The address to retrieve the transactions of.
start_block | int | (Optional Parameter) Defaults to <code>0</code>.<br>The first block to retrieve 50 blocks worth of transactions from. 
node_count | int | (Optional Parameter) Defaults to <code>1</code> if no `node_count=` setting in *xrouter.conf*.<br>The number of Service Nodes the call is sent to for consensus on the final response.  


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "reply" : [
    {
      "txid" : "9e5db236f75babe4e28c17f0ed1eddbcfdb5bde8a69750e1a4952d110c620e51",
      "size" : 192,
      "version" : 2,
      "locktime" : 0,
      "vin" : [
        {
          "txid" : "10f28315098fff366e2dfba23afacc10ddb5ac30a403d6396cc2d35739f06a79",
          "vout" : 1,
          "scriptSig" : {
            "asm" : "30450221008d807ad2585d4775e57c105d16f12f5eb7925a3f8f66b077f7944ec74e421ed9022067105602af2705d4456ccd68db8b4eb327cdb5e55e7de98d7ba9f1213a75a1ad[ALL] 02e927a2a1d4a613ed3fa73bf1169beaf4e95a6348afac6613e283d80b9bf2abba",
            "hex" : "4830450221008d807ad2585d4775e57c105d16f12f5eb7925a3f8f66b077f7944ec74e421ed9022067105602af2705d4456ccd68db8b4eb327cdb5e55e7de98d7ba9f1213a75a1ad012102e927a2a1d4a613ed3fa73bf1169beaf4e95a6348afac6613e283d80b9bf2abba"
          },
          "sequence" : 4294967295
        }
      ],
      "vout" : [
        {
          "value" : 1.43000000000000038,
          "valueSat" : 143000000,
          "n" : 0,
          "scriptPubKey" : {
            "asm" : "OP_DUP OP_HASH160 7be755600f2fd9f3518be6ededb38e2498f51ff5 OP_EQUALVERIFY OP_CHECKSIG",
            "hex" : "76a9147be755600f2fd9f3518be6ededb38e2498f51ff588ac",
            "reqSigs" : 1,
            "type" : "pubkeyhash",
            "addresses" : [
              "SYb9Gmcwj1aXUV86cKpnCD8SR7hvZgbKTP"
            ]
          }
        }
      ]
    }
  ]
}
```

Parameter | Type | Description
--------- | ------- | -----------
reply | array | The transactions of the given address for the specified blockchain and block height.










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
blocknetdx-cli xrGetBalance SYS SYb9Gmcwj1aXUV86cKpnCD8SR7hvZgbKTP
```
<code>xrGetBalance [blockchain] [address] [node_count]\(optional)</code>

Parameter | Type | Description
--------- | ------- | -----------
blockchain | string | The ticker symbol of the blockchain (BTC, LTC, SYS, etc.).
address | string | The address to retrieve the balance of.
node_count | int | (Optional Parameter) Defaults to <code>1</code> if no `node_count=` setting in *xrouter.conf*.<br>The number of Service Nodes the call is sent to for consensus on the final response.  


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "reply" : "0.000000"
}
```

Parameter | Type | Description
--------- | ------- | -----------
reply | object | The balance with a precision of X.XXXXXX of the given address for the specified blockchain.










<!-- ## xrGenerateBloomFilter

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
blocknetdx-cli xrGenerateBloomFilter SYb9Gmcwj1aXUV86cKpnCD8SR7hvZgbKTP 
```
<code>xrGenerateBloomFilter [address1] [address2...addressN] [node_count]\(optional)</code>

Parameter | Type | Description
--------- | ------- | -----------
addresses | array | The addresses to retrieve the bloom filter HEX representation of.
node_count | int | (Optional Parameter) Defaults to <code>1</code> if no `node_count=` setting in *xrouter.conf*.<br>The number of Service Nodes the call is sent to for consensus on the final response.  


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "reply" : {
    
  }
}
```

Parameter | Type | Description
--------- | ------- | -----------
hex | string | The HEX representation of the address's bloom filter. -->










<!-- ## xrGetTransactionsBloomFilter

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
blocknetdx-cli xrGetTransactionsBloomFilter SYS 0000100800
```
<code>xrGetTransactionsBloomFilter [blockchain] [bloom_filter] [start_block]\(optional) [node_count]\(optional)</code>

Parameter | Type | Description
--------- | ------- | -----------
blockchain | string | The ticker symbol of the blockchain (BTC, LTC, SYS, etc.).
bloom_filter | string | The HEX representation of a bloom filter.
start_block | int | (Optional Parameter) Defaults to <code>0</code>.<br>The earliest block to retrieve transactions through. 
node_count | int | (Optional Parameter) Defaults to <code>1</code> if no `node_count=` setting in *xrouter.conf*.<br>The number of Service Nodes the call is sent to for consensus on the final response.  


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "reply" : {
    
  }
}
```

Parameter | Type | Description
--------- | ------- | -----------
reply | object |  -->










## xrSendTransaction

> Sample Data

```cli
{
  "blockchain": "SYS",
  "signed_tx": "0200000001796af03957d3c26c39d603a430acb5dd10ccfa3aa2fb2d6e36ff8f091583f210010000006b4830450221008d807ad2585d4775e57c105d16f12f5eb7925a3f8f66b077f7944ec74e421ed9022067105602af2705d4456ccd68db8b4eb327cdb5e55e7de98d7ba9f1213a75a1ad012102e927a2a1d4a613ed3fa73bf1169beaf4e95a6348afac6613e283d80b9bf2abbaffffffff01c0018608000000001976a9147be755600f2fd9f3518be6ededb38e2498f51ff588ac00000000"
}
```
This call is used to submit a locally signed transaction on the specified blockchain.


### Request Parameters

> Sample Request

```cli
blocknetdx-cli xrSendTransaction SYS 0200000001796af03957d3c26c39d603a430acb5dd10ccfa3aa2fb2d6e36ff8f091583f210010000006b4830450221008d807ad2585d4775e57c105d16f12f5eb7925a3f8f66b077f7944ec74e421ed9022067105602af2705d4456ccd68db8b4eb327cdb5e55e7de98d7ba9f1213a75a1ad012102e927a2a1d4a613ed3fa73bf1169beaf4e95a6348afac6613e283d80b9bf2abbaffffffff01c0018608000000001976a9147be755600f2fd9f3518be6ededb38e2498f51ff588ac00000000
```
<code>xrSendTransaction [blockchain] [signed_tx]</code>

Parameter | Type | Description
--------- | ------- | -----------
blockchain | string | The ticker symbol of the blockchain (BTC, LTC, SYS, etc.).
signed_tx | string | The signed transaction HEX.


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
    "reply" : "9e5db236f75babe4e28c17f0ed1eddbcfdb5bde8a69750e1a4952d110c620e51"
}
```

Parameter | Type | Description
--------- | ------- | -----------
reply | object | The transaction hash of the sent transaction.










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
blocknetdx-cli xrGetBalanceUpdate SYS SYb9Gmcwj1aXUV86cKpnCD8SR7hvZgbKTP 125157
```
<code>xrGetBalanceUpdate [blockchain] [address] [start_block]\(optional) [node_count]\(optional)</code>

Parameter | Type | Description
--------- | ------- | -----------
blockchain | string | The ticker symbol of the blockchain (BTC, LTC, SYS, etc.).
address | string | The address to retrieve the balance of.
start_block | int | (Optional Parameter) Defaults to <code>0</code>.<br>The earliest block to retrieve transactions through. 
node_count | int | (Optional Parameter) Defaults to <code>1</code> if no `node_count=` setting in *xrouter.conf*.<br>The number of Service Nodes the call is sent to for consensus on the final response.  


### Response Parameters

<aside class="success">
200 OK
</aside>

> Sample 200 Response

```cli
{
  "reply" : "1.430000"
}
```

Parameter | Type | Description
--------- | ------- | -----------
reply | string | The addresses net change in balance since the given block on the specified blockchain.









