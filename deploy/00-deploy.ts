import { ethers, network } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { developmentChains } from "../helper-hardhat-config";
const BASE_FEE = ethers.parseEther("0.25");
const GAS_PRICE_LINK = 1e9;

const VRFCoordinatorV2Mock: DeployFunction = async function () {
  if (developmentChains.includes(network.name)) {
    const VRFCoordinatorV2MockFactory = await ethers.getContractFactory(
      "VRFCoordinatorV2Mock"
    );
    const VRFCoordinatorV2Mock = await VRFCoordinatorV2MockFactory.deploy(
      BASE_FEE,
      GAS_PRICE_LINK
    );
    console.log("------------------Mock deployed-------------------------");

    console.log("deployed to:", await VRFCoordinatorV2Mock.getAddress());
  } else {
    console.log("----------------Skipping Mock deployment-------------");
  }

  //   await VRFCoordinatorV2Mock.deploymentTransaction()?.wait(1);
};

export default VRFCoordinatorV2Mock;
VRFCoordinatorV2Mock.tags = ["all", "mock"];
