import React, { Component } from 'react';
import Layout from "../../layouts";

import teamImage from "../../../static/images/Squeezer_Assets_team_page/iconfinder_67_team_group_leadership_business_teamwork_creative_skills_process_4172902.svg";
import ProductsTitleSection from "../../components/products/ProductsTitleSection";
import StartBuildingSection from "../../components/home/StartBuildingSection";
import AlexL from '../../../static/images/Squeezer_Assets_team_page/alex-lazar_full_background.svg';
import AlexS from '../../../static/images/Squeezer_Assets_team_page/alex-sabau_full_background.svg';
import Nick from '../../../static/images/Squeezer_Assets_team_page/Nick_Chisiu_Full_background.svg';
import Flavius from '../../../static/images/Squeezer_Assets_team_page/flavius_full_background.svg';
import Tia from '../../../static/images/Squeezer_Assets_team_page/tia_full_background.svg';
import Odi from '../../../static/images/Squeezer_Assets_team_page/odi_full_background.svg';
import presets from "../../utils/presets";
import BlankA from "../../components/hyperlink";
import twitterImage from "../../../static/images/footer/tweeter_logo_transparent.svg";
import facebookImage from "../../../static/images/footer/linkedin_logo_transparent.svg";

const teamMembers = [
  {
    image: Nick,
    name: 'Nick Chisiu',
    position: 'Co-Founder and Chief Developer',
    linkedin: '',
    twitter: '',
    description: 'Nick is a specialist in microservices architecture, framework design, and blockchain development. He worked as a blockchain consultant at Consensys (top blockchain development companies), Marriott & Genentech.'
  },
  {
    image: AlexS,
    name: 'Alex Sabau',
    position: 'Product Owner',
    linkedin: '',
    twitter: '',
    description: 'Alex has a solid background in the tech industry of over 10 years. He was involved in almost all aspects of a product development, starting from server administration to customer service, quality assurance and product delivery, for major clients such as: Tillster, Baskin Robbins, Demco Software, CalAmp, EDR - Collateral360 and Pfizer.'
  },
  {
    image: AlexL,
    name: 'Alex Lazar',
    position: 'VP of Engineering',
    linkedin: '',
    twitter: '',
    description: 'At base Alex Lazar is an experienced software engineer & architect with an extended experience in designing, architecting and developing web-based and native rich interface applications for mobile and desktop devices. Having technical skills and expertise in both front-end and back-end development.'
  },
  {
    image: Flavius,
    name: 'Flavius Fulea',
    position: 'Marketing Chief',
    linkedin: '',
    twitter: '',
    description: 'Flavius is a former art designer with exceptional skills in digital advertising and social media content. He delivers great art work and boosts our social activity on a daily basis.'
  },
  {
    image: Tia,
    name: 'Tia Chisiu',
    position: 'Support Manager',
    linkedin: '',
    twitter: '',
    description: 'Tia is an experienced support staff member with precise proofreading and editing skills.'
  },
  {
    image: Odi,
    name: 'Odi Onyejekwe',
    position: 'Business Developer',
    linkedin: '',
    twitter: '',
    description: 'Odi works closely with the sales team to identify potential clients in the targeted market and complete necessary research on the prospective client’s business requirements. Odi has experience on business development (Food Panda - largest online food delivery platform)'
  }
];

export default class TeamPage extends Component {
  renderSocialIcon = (link, image) => (
    <li>
      <BlankA href={link}>
        <img css={{width: '35px', height: '35px'}} src={image} alt={image} />
      </BlankA>
    </li>
  );
  
  render() {
    return (
      <Layout color="#F8FCFF">
        <ProductsTitleSection
          product=''
          image={teamImage}
          title={`CHECK OUT OUR<br/>AWSOME TEAM`}
          description='This is the core team behind Squeezer. The ones who made everything happen.'
          subtitles={[]}
        />
  
        <div css={{
          margin: '0 auto',
          padding: 0,
          maxWidth: '1200px',
          minHeight: '50vh',
          textAlign: 'center',
          marginTop: '15rem',
          [presets.Hd]:{
            padding: '0',
            marginTop: '5rem',
          }
        }}>
          <h2 css={{width: '100%', height: '45px', color: '#004CA5',	fontFamily: 'DIN Condensed',	fontSize: '45px',	fontWeight: 'bold', letterSpacing: '1px', lineHeight: '54px'
          }}>
            CORE TEAM
          </h2>
          
          <div css={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: 0, [presets.Desktop]: {justifyContent: 'center', marginTop: '100px'}}}>
            {teamMembers.map((member) => (
              <div css={{display: 'flex', flexDirection: 'column', width: '339px', alignItems: 'center', margin: '111px 20px 20px 20px', [presets.Desktop]: {margin: '20px'}}}>
                <img src={member.image} alt={member.image} css={{width: '250px', height: '250px'}}/>
                <h3 css={{color: '#000',	fontFamily: 'Khula',	fontSize: '20px',	fontWeight: '600', lineHeight: '27px', marginBottom: '2px'}}>
                  {member.name}
                </h3>
                <h4 css={{color: '#969696',	fontFamily: 'Khula',	fontSize: '20px',	fontWeight: '500', lineHeight: '27px'}}>
                  {member.position}
                </h4>
  
                <ul css={{listStyle: 'none', display: 'flex', justifyContent: 'space-between', margin: 0, width: '86px'}}>
                  {this.renderSocialIcon(member.linkedin, facebookImage)}
                  {this.renderSocialIcon(member.twitter, twitterImage)}
                </ul>
                
                <p css={{width: '339px', height: '243px', color: '#969696',	fontFamily: 'Khula',	fontSize: '20px',	fontWeight: '600', lineHeight: '27px', [presets.Desktop]: {height: 'auto'}, [presets.Mobile]: {width: '200px'}}}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <StartBuildingSection />
      </Layout>
    );
  }
}
