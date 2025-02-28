/**
*
* WelcomeText
*
*/

import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 22px;
  color: rgba(0, 0, 0, 0.55);
  font-weight: 400;
`;

const H2 = styled.h2`
font-size: 16px;
margin-top:30px;
color: #b9b9b9;
font-weight: 400;
`;

function WelcomeText() {
  return (
    <div>
      <H1>Welcome to Melo Wallet <br />To begin, create or restore Melo wallet<br /></H1>
      <H2>
        Melo wallet is a zero client. Connection to BSC is made via Quicknode. <br />
        Keystore is encrypted using the password. When the wallet is locked, you can only view balances. <br />
        All keys are saved inside the browser and never sent.
      </H2>
    </div>
  );
}

WelcomeText.propTypes = {

};

export default WelcomeText;
