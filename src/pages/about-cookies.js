import React, { Component } from 'react';
import Layout from '../layouts';
import StartBuildingSection from '../components/home/StartBuildingSection';


export default class AboutCookies extends Component {
  render() {
    return (
      <Layout color="#F8FCFF">
        <div css={{
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '75px 0'
        }}>
          <h1 css={{fontFamily: 'DIN Condensed', fontSize: '45px',	fontWeight: 'bold', textAlign: 'center'}}>About cookies</h1>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>General information about cookies and how they are used</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Cookies are a piece of data sent from a web site and stored in your browsers memory.<p></p>
            Cookies can be required to allow a web to function properly as web sites are stateless (they don't remember user information from one internal page to another) but sometimes they are used to track user actions within one web or across multiple webs in order to collect usage information or identify interests and map behaviour to be able to offer relevant advertisements.<p></p>
            When webs use the CookieHub widget they offer you the choice to allow or deny certain cookie categories which helps protect your privacy. Below is a description on the most common cookie categories.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>Necessary cookies</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Neccessary cookies are used to make a web site function properly, they are generally not used for tracking and are not shared between webs.<p></p>
            The most common necessary action performed using a cookie is user authentication. When you log in to any web site, a cookie is stored in your browser including some piece of data used by the web to remember who is authenticated when you go to another internal page or refresh the site.<p></p>
            Cookies are also used so that a web knows what's in your shopping cart, store user settings and more.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>Analytical cookies</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Analytical cookies are not necessary but are used to collect valuable information on how a web site is being used, identify issues and figure out what needs to be improved on the site and what content is useful. The information collected is in most cases anonymous but some analytics services collect information that can be used to identify the user.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>Marketing cookies</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Marketing cookies are used to track visitors across websites to to profile user behavior and allow publishers to display relevant advertisements.
          </h3>
        </div>
        <StartBuildingSection />
      </Layout>
    );
  }
}
