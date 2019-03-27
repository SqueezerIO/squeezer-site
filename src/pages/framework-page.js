import React, { Component } from 'react';
import Layout from '../layouts';

import StartBuildingSection from '../components/home/StartBuildingSection';
import frameworkIStockFramework from '../../static/images/Squeezer_Assets_framework_page/iStock-910860194-background.svg';
import ProductsTitleSection from "../components/products/framework/ProductsTitleSection";

import ProductsFlexibleUsage from '../components/products/framework/ProductsFlexibleUsage';
import ProductsMultipleApproaches from '../components/products/framework/ProductsMultipleApproaches';
const subtitles = ['use cases'];

export default class FrameworkPage extends Component {
  render() {
    return (
      <Layout>
        <ProductsTitleSection
          product='Framework'
          image={frameworkIStockFramework}
          title={`one tool to<br/>build & deploy`}
          description='The Squeezer Framework is an open source CLI for building and deploying decentralized applications.'
          subtitles={subtitles}
        />
        <ProductsFlexibleUsage />
        <ProductsMultipleApproaches />
        <StartBuildingSection />
      </Layout>
    );
  }
}
