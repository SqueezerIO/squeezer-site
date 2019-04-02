import React, { Component } from 'react';
import Layout from '../../layouts';
import StartBuildingSection from '../../components/home/StartBuildingSection';
import chainkitImage from '../../../static/images/Squeezer_Assets_chainkit_page/iStock-910860194-background-chainkit.svg';
import ProductsTitleSection from "../../components/products/ProductsTitleSection";
import PricingSection from "../../components/products/platform/PricingSection";
import BlockchainAccess from '../../components/products/chainkit/BlockchainAccess';

const subtitles = ['features', 'pricing'];
const prices = [
  {
    id: 1,
    interval1: '1 - 10000',
    price1: `$0.05 <b>(0.25 SQR)</b> / unit`,
    interval2: '1 - 10000',
    price2: `$0.04 <b>(0.20 SQR)</b> / unit`,
  },
  {
    id: 2,
    interval1: '10000 - 50000',
    price1: `$0.04 <b>(0.20 SQR)</b> / unit`,
    interval2: '10000 - 50000',
    price2: `$0.03 <b>(0.15 SQR)</b> / unit`,
  },
  {
    id: 3,
    interval1: '50000 - 500000',
    price1: `$0.03 <b>(0.15 SQR)</b> / unit`,
    interval2: '50000 - 500000',
    price2: `$0.02 <b>(0.10 SQR)</b> / unit`,
  },
  {
    id: 4,
    interval1: '500000+',
    price1: `$0.02 <b>(0.10 SQR)</b> / unit`,
    interval2: '500000+',
    price2: `$0.01 <b>(0.05 SQR)</b> / unit`,
  },
];

export default class ChainkitPage extends Component {
  render() {
    return (
      <Layout color="#F8FCFF">
        <Helmet>
          <title>ChainKit</title>
        </Helmet>
        <ProductsTitleSection
          product='Chainkit'
          image={chainkitImage}
          title={`WARP FAST SOLUTION<br/>FOR BLOCKCHAIN PAYMENTS<br/>AND SMART CONTRACTS`}
          description='Start building a serverless dApp by using ChainKit and have it deployed in seconds. '
          subtitles={subtitles}
        />

        <BlockchainAccess />
        <PricingSection id={'chainkit-pricing'} prices={prices} title1={'Outbound Transaction'} title2={'Inbound Transaction'} />
        <StartBuildingSection />
      </Layout>
    );
  }
}

