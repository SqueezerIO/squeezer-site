import React from 'react';
import Layout from '../layouts';
import Footer from '../footer';

import { withNamespaces } from 'react-i18next';
import MainSection from '../components/home/MainSection';
import ProductsSection from '../components/home/ProductsSection';
import DeveloperSection from '../components/home/DeveloperSection';
import StartBuildingSection from '../components/home/StartBuildingSection';

class HomePage extends React.Component {
  
  render() {
    return (
      <Layout>
        <MainSection />
        <ProductsSection />
        <DeveloperSection />
        <StartBuildingSection />
        
        <Footer />
      </Layout>
    )
  }
}

export default withNamespaces('Home')(HomePage)
