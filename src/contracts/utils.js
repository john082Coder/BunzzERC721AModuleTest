import { ethers } from 'ethers';

import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,
} from './lib/constants.js';
import { bnToDec } from './utils';
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});


export const getEscrowContract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.escrow;
}
export const getPaymentSplitterContract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.paymentSplitter;
}
export const getVestingWalletContract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.vestingWallet;
}

export const getErc20Contract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.erc20;
}

export const getErc721AContract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.erc721A;
}


export const setErc20ContractAddress = (bunzz, address) => {
  bunzz.contracts.erc20.options.address = address;
}


export const mint = async (erc721AContract, amount,  account) => {
  return erc721AContract.methods.mint(account, amount).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const setBaseURI = async (erc721AContract, baseURI,  account) => {
  return erc721AContract.methods.setBaseURI(baseURI).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

