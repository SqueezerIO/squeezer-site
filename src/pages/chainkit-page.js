import React, { Component } from 'react';
import Layout from '../layouts';
import StartBuildingSection from '../components/home/StartBuildingSection';
import chainkitImage from '../../static/images/Squeezer_Assets_chainkit_page/iStock-910860194-background-chainkit.svg';
import ProductsTitleSection from "../components/products/framework/ProductsTitleSection";

const subtitles = ['features', 'pricing'];

export default class ChainkitPage extends Component {
  render() {
    return (
      <Layout>
        <ProductsTitleSection
          product='Chainkit'
          image={chainkitImage}
          title={`WARP FAST SOLUTION<br/>FOR BLOCKCHAIN PAYMENTS<br/>AND SMART CONTRACTS`}
          description='Start building a serverless dApp by using ChainKit and have it deployed in seconds. '
          subtitles={subtitles}
        />
        
        <StartBuildingSection />
      </Layout>
    );
  }
}

