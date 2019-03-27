import React, { Component } from 'react';
import Layout from '../../layouts';
import StartBuildingSection from '../../components/home/StartBuildingSection';
import frameworkIStockPlatform from '../../../static/images/Squeezer_Assets_platform_page/iStock-910860194-bakcground_platform.svg';
import ProductsTitleSection from "../../components/products/framework/ProductsTitleSection";
import FeaturesSection from '../../components/products/platform/FeaturesSection';
import PlatformSection from '../../components/products/platform/PlatformSection';

const subtitles = ['features', 'pricing'];
const prices = [
  {
    id: 1,
    interval1: '1 - 5',
    price1: `$2.4 <b>(12 SQR)</b> / unit`,
    interval2: '50 - 100',
    price2: `$0.05 <b>(0.25 SQR)</b> / unit`,
  },
  {
    id: 2,
    interval1: '5 - 20',
    price1: `$2 <b>(10 SQR)</b> / unit`,
    interval2: '50 - 250',
    price2: `$0.04 <b>(0.2 SQR)</b> / unit`,
  },
  {
    id: 3,
    interval1: '20 - 50',
    price1: `$1.8 <b>(9 SQR)</b> / unit`,
    interval2: '250 - 500',
    price2: `$0.03 <b>(0.15 SQR)</b> / unit`,
  },
  {
    id: 4,
    interval1: '50+',
    price1: `$1.4 <b>(7 SQR)</b> / unit`,
    interval2: '500+',
    price2: `$0.02 <b>(0.1 SQR)</b> / unit`,
  },
];

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
        <PricingSection prices={prices} title1={'Team members'} title2={'Deployments'} />
        <StartBuildingSection />
      </Layout>
    );
  }
}
