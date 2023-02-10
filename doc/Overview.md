## About
> one line description ← What issue does this module solve?

 Implementation of ERC721 Non-Fungible Token Standard, including the Metadata extension. Built to optimize for lower gas during batch mints.


## Features

- Users can mint multiple nfts in a single transaction.
- Assumes that an owner cannot have more than 2^64 - 1 (max value of uint64) of supply.
- Assumes serials are sequentially minted starting at _startTokenId() (defaults to 0, e.g. 0, 1, 2, 3..)

## Use case

The goal of ERC721A is to provide a fully compliant implementation of IERC721 with significant gas savings for minting multiple NFTs in a single transaction.

## Sample dApp
- github repo URL
    https://github.com/john082Coder/BunzzERC721AModuleTest
- simple dapp URL
    https://bunzz-erc-721-a-module-test.vercel.app/


---
## Review report
- [JCoder's report](https://docs.google.com/document/d/1aNDviq8lCuUFfnFtqy7gyoiBfVYnKKefL0fum9SEKYI/edit?usp=sharing)