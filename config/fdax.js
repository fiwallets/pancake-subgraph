/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
    network: "fdax",
    wNativeAddress: "0xa27a128dd70479fd2b37662223c6523f10ebc21a",
    v3: {
      // WFDAX-USDT 500
      wNativeStablePoolAddress: "0x15900188ef55317fa1d9f3c9a57fdd01e07dcd72",
      stableIsToken0: true,
      factoryAddress: "0x7d7d380f91142d464819014bc33530d56bbf46c0",
      startBlock: 1658963,
      stableCoins: [
        "0x3f851192d8b2d8dadc7c2b49f7a9fa27cdcea680", // USDT
        "0xe5e8ca35b7bf7045288bf6731f071f9f98c5ce47", // BUSD
      ],
      whitelistAddresses: [
        "0xa27a128dd70479fd2b37662223c6523f10ebc21a", // WDAX
        "0x3f851192d8b2d8dadc7c2b49f7a9fa27cdcea680", // USDT
        "0xe5e8ca35b7bf7045288bf6731f071f9f98c5ce47", // BUSD
        "0x88435653afebe9806cff334f2f04a1fdd5d4eb63", // ETH
        "0x4b96c9c245e3b852bc071f53c81f0412ecdd26ac", // CAKE
        "0x51db507c3afad70b944bd9d3b11822a515bbad82", // WBTC
      ],
      nonfungiblePositionManagerAddress: "0x9b4ec2635ffbf2b31025cf4739b88a5506c66fec",
      nonfungiblePositionManagerStartBlock: 1658966,
      minETHLocked: 10,
    },
    masterChefV3: {
      masterChefAddress: "0x5587d748b78327aec0ef57aee0d3034f32c116ba",
      startBlock: 1658967,
    },
  };
  