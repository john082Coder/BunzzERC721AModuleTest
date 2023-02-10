import { Button, Col, Container, Row, Form, Spinner } from "react-bootstrap";
import React, { useState,  } from "react";

import useBunzz from '../hooks/useBunzz';

import { getErc721AContract, mint  } from '../contracts/utils'
import { useWeb3React } from "@web3-react/core";

import { bnToDec, isAddress } from "../utils";
const Creator = () => {
    const bunzz = useBunzz();
    const { account} = useWeb3React();
    const erc721AContract = getErc721AContract(bunzz);

    const [mintAmount, setMintAmount] = useState(0);
  

    const [pendingMint, setPendingMint] = useState(false);
  
  
   
   
 
   


    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col lg="4" md="4" xs="12">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input Amount</Form.Label>
                            <Form.Control type="email" placeholder="Enter Amount" value={mintAmount} onChange={(val) => setMintAmount(val.target.value)} />
                        </Form.Group>
                            {!pendingMint ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingMint(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await mint(
                                        erc721AContract,
                                        mintAmount,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingMint(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingMint(false);
                                    
                                }
                            }}>
                                Mint
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Mint
                            </Button>
                        }

                       
                       
                        
                     
                    </Form>
                   

                                    

         

                  
                </Col>
            </Row>
        </Container>
    )
}

export default Creator;