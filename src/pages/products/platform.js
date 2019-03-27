import React, { Component } from 'react';
import Layout from '../../layouts';
import StartBuildingSection from '../../components/home/StartBuildingSection';
import frameworkIStockPlatform from '../../../static/images/Squeezer_Assets_platform_page/iStock-910860194-bakcground_platform.svg';
import ProductsTitleSection from "../../components/products/framework/ProductsTitleSection";
import FeaturesSection from '../../components/products/platform/FeaturesSection';
import PlatformSection from '../../components/products/platform/PlatformSection';

const subtitles = ['features', 'pricing'];

export default class PlatformPage extends Component {
  render() {
    return (
      <Layout color="#F8FCFF">
        <ProductsTitleSection
          product='Platform'
          image={frameworkIStockPlatform}
          title={`TEAM COLLABORATION<br/>AND CONTINUOUS<br/>INTEGRATION`}
          description='Import a project from Github, share it with your team and start the development in seconds.'
          subtitles={subtitles}
        />
        <FeaturesSection />
        <PlatformSection />
        <StartBuildingSection />
      </Layout>
    );
  }
}
