import { DeployFunction } from "hardhat-deploy/dist/types";
import { ethers, network } from "hardhat";
import { developmentChains, networkConfig } from "../helper-hardhat-config";
import { ContractTransaction } from "ethers";
const BASE_FEE = ethers.parseEther("0.25");
const GAS_PRICE_LINK = 1e9;
const VRF_SUB_FUND_AMOUNT = ethers.parseEther("2");

const Raffle: DeployFunction = async function () {
  let vrfCoordinatorV2Address, subscriptionId;

  if (developmentChains.includes(network.name)) {
    const VRFCoordinatorV2MockFactory = await ethers.getContractFactory(
      "VRFCoordinatorV2Mock"
    );
    const VRFCoordinatorV2Mock = await VRFCoordinatorV2MockFactory.deploy(
      BASE_FEE,
      GAS_PRICE_LINK
    );
    vrfCoordinatorV2Address = await VRFCoordinatorV2Mock.getAddress();
    console.log(vrfCoordinatorV2Address);

    const TransactionResponse = await VRFCoordinatorV2Mock.createSubscription();
    const transactionReceipt = await TransactionResponse!.wait();
    // console.log(transactionReceipt?.logs[0].args.subId);
    const logs = transactionReceipt?.logs;

    // await VRFCoordinatorV2Mock.fundSubscription(subscriptionId, VRF_SUB_FUND_AMOUNT)
  } else {
    vrfCoordinatorV2Address = networkConfig[network.name].vrfCoordinatorV2;
  }

  const entranceFee = networkConfig[network.name].entranceFee;
  const gasLane = networkConfig[network.name].gasLane;

  // const RaffleFactory = await ethers.getContractFactory("Raffle");
  // const Raffle = await RaffleFactory.deploy();
};

export default Raffle;

Raffle.tags = ["all", "raffle"];
