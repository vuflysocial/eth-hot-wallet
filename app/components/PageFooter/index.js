/**
*
* PageFooter
*
*/

import React from 'react';
import { github } from 'utils/constants';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { StickyFooter } from './sticky';


const Footer = StickyFooter.extend`
  textAlign: center;
  background: #333;
  color: #333;
  padding: 10px;
  font-size: 14px;
`;

const Span = styled.span`
  color: #b9b9b9;
  margin-top:3px;
`;

function PageFooter() {
  return (
    <Footer>
      <Row>
        <Col sm={12} xs={24}>
          {'Melo Wallet - '}
          <a href={github} target="_blank" rel="noopener">
            Melo Wallet | (MeloInu)
          </a><br />
          
        </Col>

        <Span>
          <Col sm={12} xs={24}>
            <a href="https://meloinu.herokuapp.com" target="_blank" rel="noopener">
           
            </a>
            <br />
          Melo Inu  BSC: 0x5c12C812794B874fe4Fdea9A4960df599C89b8E5
          </Col>
        </Span>

      </Row>
    </Footer>
  );
}

PageFooter.propTypes = {

};

export default PageFooter;
