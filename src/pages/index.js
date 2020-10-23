import React from 'react';
import Layout from '../layouts';

import { withNamespaces } from 'react-i18next';
import MainSection from '../components/home/MainSection';
import ProductsSection from '../components/home/ProductsSection';
import DeveloperSection from '../components/home/DeveloperSection';
import StartBuildingSection from '../components/home/StartBuildingSection';
import MemberEEA from '../components/home/MemberEEA';
import PartnersInvestors from '../components/home/PartnersAndInvestors';
import RoadMap from '../components/home/Roadmap';
import FeaturedIn from '../components/home/FeaturedIn';
import SqueezerInNumbers from '../components/home/SqueezerInNumbers';

class HomePage extends React.Component {
  
  render() {
    return (
      <Layout>
        <MainSection />
        {/* <SqueezerInNumbers/> */}
        <ProductsSection />
        {/* <DeveloperSection /> */}
        <RoadMap/>
        {/* <MemberEEA /> */}
        {/* <PartnersInvestors/> */}
        {/* <FeaturedIn /> */}
        {/* <StartBuildingSection /> */}
      </Layout>
    )
  }
}

export default withNamespaces('Home')(HomePage)
