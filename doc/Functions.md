# WRITE(main)

## transferFrom
Transfer a particular tokenId from the token owner to an certai address if the caller have the permision to transfer it

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|from|address|The token sender||N/A|
|to|address|The token receiver||N/A|
|tokenId|uint256|The id of the token that will be transfered||N/A|


## safeTransferFrom
Safely transfers the ownership of a given token ID

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|from|address|The token sender||N/A|
|to|address|The token receiver||N/A|
|tokenId|uint256|The id of the token that will be sent||N/A|
|_data|bytes|Optional data field||N/A|

## safeTransferFrom
Safely transfers the ownership of a given token ID

|Name|Type|Description|
|--- |---|---|
|from|address|The address of the token sender|
|to|address|The id of the token that will be receiver|
|tokenId|uint256|The id of the token that will be sents|

## approve
Gives an certain address permision to move tokens for the token owner

|Name|Type|Description|
|--- |---|---|
|to|address|Account to approve to spend caller balance|
|tokenId|uint256|Token id that will be approved to be user by other account|

## _setAux

## setApprovalForAll

Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.

|Name|Type|Description|
|--- |---|---|
|operator|address|The account that will be the balance operator|
|approved|bool|Approval status|

## _safeMint

## _mint

## _transfer

## _burn

## _approve

## _checkContractOnERC721Received

## _beforeTokenTransfers

## _afterTokenTransfers


# READ(main)

## _startTokenId


## totalSupply
Returns the amount of tokens in existence

No arguments

## _totalMinted

## supportsInterface
Returns a boolean that tells us if the contract supports royalties

|Name|Type|Description|
|--- |---|---|
|interfaceId|bytes4|Id of the interface|

## balanceOf
Returns the token amount owned by an address

|Name|Type|Description|
|--- |---|---|
|owner|address|The account which you want to check the balance|

## _numberMinted

## _numberBurned

## _getAux

## _ownershipOf

## ownerOf
Retrieves the owner of a token id

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token you want to check its owner of|

## name
Retrieves collection name

No arguments

## symbol
Retrieves collection name

No arguments

## tokenURI
Returns the uri of the metadata

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token|

## _baseURI

## getApproved
Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The token id you will retrieves the approvals|

## isApprovedForAll
Tells whether an operator is approved by a given owner.

|Name|Type|Description|
|--- |---|---|
|owner|address|The address of the tokens owner|
|operator|uint256|The account that will get the rights to operate over owner balance|

## _exists