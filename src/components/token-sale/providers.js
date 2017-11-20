import React from "react"
import presets from "../../utils/presets"
import Container from "../container"
import AwsPic from "../../assets/token-sale/providers/aws-logo.png"
import GoogleCloudPic from "../../assets/token-sale/providers/google-cloud.png"
import MicrosoftAzurePic from "../../assets/token-sale/providers/microsoft-azure.png"
import IBMPic from "../../assets/token-sale/providers/ibm-openwhisk.png"

const Provider = ({ pic, title }) => (
  <div css={{
    display: 'inline-block',
    margin: '25px',
    cursor: 'pointer'
  }}>
    <img css={{
      width: 'auto',
      height: '80px'
    }} alt={title} src={pic} />
  </div>
)

const Providers = () => {
  return (
    <div css={{
      textAlign: 'center',
      borderTop: `1px solid ${presets.veryLightBlue}`,
      padding: '150px 0px',
      borderBottom: `1px solid ${presets.veryLightBlue}` 
    }}>
      <h1>Cloud Providers</h1>
      <Provider
        title="Amazon Web Services"
        pic={AwsPic} />             
      <Provider
        title="Google Cloud"
        pic={GoogleCloudPic} />
      <Provider
        title="Microsoft Azure"
        pic={MicrosoftAzurePic} />    
      <Provider
        title="IBM"
        pic={IBMPic} />                             
    </div>
  )
}

export default Providers
