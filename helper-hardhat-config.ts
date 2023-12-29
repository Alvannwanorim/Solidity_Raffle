import { ethers } from "hardhat";

export interface networkConfigItem {
  ethUsdPriceFeed?: string;
  blockConfirmations?: number;
  chainId?: number;
  vrfCoordinatorV2?: string;
  entranceFee: BigInt;
  gasLane?: string;
}

export interface networkConfigInfo {
  [key: string]: networkConfigItem;
}

export const networkConfig: networkConfigInfo = {
  localhost: {
    entranceFee: ethers.parseEther("0.1"),
    gasLane: '0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c'
  },
  hardhat: {
    entranceFee: ethers.parseEther("0.1"),
    gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c"
  },
  sepolia: {
    ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    chainId: 11155111,
    blockConfirmations: 6,
    vrfCoordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
    entranceFee: ethers.parseEther("0.1"),
    gasLane:
      "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c",
  },
};

export const developmentChains = ["hardhat", "localhost"];

export const DECIMALS = 0;
export const INITIAL_ANSWER = 200000000000;
