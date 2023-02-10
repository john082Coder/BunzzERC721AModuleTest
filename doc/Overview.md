## About
> one line description ← What issue does this module solve?

 Implementation of ERC721 Non-Fungible Token Standard, including the Metadata extension. Built to optimize for lower gas during batch mints.
The goal of ERC721A is to provide a fully compliant implementation of IERC721 with significant gas savings for minting multiple NFTs in a single transaction. This project and implementation will be updated regularly and will continue to stay up to date with best practices.

## Features

- ContractOwner can set vesting token address.(It can be any ERC20 token)
- ContractOwner can create vesting schedule by setting beneficiary address, starttime and duration time.
- ContractOwner can revoke current vesting schedule which is set on contract.
- ContractOwner can release current releasable amount of vesting tokens to beneficiary address.


## Use case

Using VestingWalletModule, users can create their own vesting schedule. Ofc, it's different way that claim rewards by staking, but it can be helpful for keep token price and something like that. For now, I think it can be used for two purposes. One is keeping token price and other is paying to devs.

## Sample dApp
- github repo URL
    https://github.com/john082Coder/BunzzERC721AModuleTest
- simple dapp URL
    https://bunzz-vesting-wallet-module-test.vercel.app/


---
## Review report
- [JCoder's report](https://docs.google.com/document/d/1VncGORWVVajixnJu7QFyhLk1bra1rESV8MIRj2wwyZY/edit)