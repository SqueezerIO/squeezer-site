import React from 'react';
import Layout from '../layouts';
import api from '../utils/api';

import { withNamespaces } from 'react-i18next';
import MainSection from '../components/home/MainSection';
import ProductsSection from '../components/home/ProductsSection';
import DeveloperSection from '../components/home/DeveloperSection';
import StartBuildingSection from '../components/home/StartBuildingSection';

class HomePage extends React.Component {
  // constructor(props, ...args) {
  //   super(props, ...args)
  //
  //   this.state = {
  //     message: null
  //   }
  // }
  
  render() {
    // api.get('/rest/v1/hello/test?name=james').then((res) => {
    //   this.setState({
    //     message: res.data.message
    //   })
    // }).catch((error) => {
    //   console.log(error)
    // });

    return (
      <Layout>
        <MainSection />
        <ProductsSection />
        <DeveloperSection />
        <StartBuildingSection />
      </Layout>
    )
  }
}

export default withNamespaces('Home')(HomePage)
