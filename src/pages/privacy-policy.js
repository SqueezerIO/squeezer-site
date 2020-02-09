import React, { Component } from 'react';
import { Helmet } from "react-helmet"
import Layout from '../layouts';
import StartBuildingSection from '../components/home/StartBuildingSection';


export default class PrivacyPolicy extends Component {
  render() {
    return (
      <Layout color="#F8FCFF">
        <Helmet>
          <title>Privacy Policy</title>
        </Helmet>
        <div css={{
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '75px 0'
        }}>
          <h1 css={{fontFamily: 'DIN Condensed', fontSize: '45px',	fontWeight: 'bold', textAlign: 'center'}}>PRIVACY POLICY</h1>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>1. Identity of Squeezer</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            If there are any questions regarding this Privacy Policy you may contact us at info@squeezer.network<p></p>
            Company address:<p></p>
            Golden Data INC.<br></br>
            New Horizon, Ground Floor, 3 1⁄2<br></br>
            Miles Philip S.W<br></br>
            Goldson Highway, Belize City, Belize<br></br>
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>2. What information do we collect?</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            You may visit our site anonymously.<p></p>
            If you choose to register on our website, four categories of data to and on behalf of you will be processed:<p></p>
          </h3>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>“Account data”</h3>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            When you register for an account on our website, place an order, subscribe to our newsletter or respond to a survey, basic contact details are collected such as the e-mail address and name of your contact person, company name, address, phone number, VAT number, preferred language and currency, any purchase order number, any e-mail address of invoice receivers and masked credit card or bank account details.
          </h3>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>“Configuration data”</h3>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            We collect your direct/indirect input to our cloud service Squeezer (the “Service”) after login, like the domain name(s) , ip address, username, e-mail address and name of your contact person, company name, address, phone number, VAT number, preferred language and currency, any purchase order number, any e-mail address of invoice receivers and masked credit card or bank account details.
          </h3>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>“End User Data”</h3>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Data generated by End Users browsing our website(s) using our services. When an End User submits a consent from our website(s), the following data are automatically logged at Squeezer:<p></p>
          <ul>
            <li>The End User’s IP number in anonymized form (last three digits are set to ‘0’).</li>
            <li>The date and time of the consent.</li>
            <li>User agent of the End User’s browser.</li>
            <li>The URL from which the consent was submitted.</li>
            <li>An anonymous, random and encrypted key value.</li>
            <li>The End User’s consent state, serving as proof of consent.</li>
          </ul>
            The key and consent state are also saved in the End User’s browser in the first party cookie “CookieConsent” so that the website can automatically read and respect the End User’s consent on all subsequent page requests and future End User sessions for up to 12 months. The key is used for proof of consent and an option to verify that the consent state stored in the End User’s browser is unaltered compared to the original consent submitted to Squeezer.
          </h3>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>“System Generated Data”</h3>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            The Service automatically creates and stores meta data on the basis of the other types of data, e.g.:<p></p>
          <ul>
            <li>Subscription data, like start date, latest invoice date and the result of a mandatory VAT number validation. Issued invoices are stored so that you may access any issued invoices from within the Squeezer platform.</li>
            <li>Aggregated statistical data on End User consents.</li>
          </ul>
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>3. What do we use your information for?</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Any of the information we collect from you may be used for one or more of the following purposes:<br></br>
            3.1. To personalize your experience (the information will help Squeezer better respond to your individual needs);<br></br>
            3.2. To improve our website (Squeezer continually strives to improve our website offerings based on the information and feedback we receive from our customers);<br></br>
            3.3. To identify you as a contracting party;<br></br>
            3.4. To enable secure login for you in the Squeezer platform at squeezer.network;<br></br>
            3.5. To establish a primary channel of communication with you;<br></br>
            3.6. To enable Squeezer to issue valid VAT invoices and to process transactions (your information will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the service requested);<br></br>
            3.7. To enable automated handling of the subscriptions;<br></br>
            3.8. To produce and display cookie declarations to End Users and store and display scan report(s) to you;<br></br>
            3.9. To provide you with aggregated information on the choices of the End Users regarding accepted cookie types and generate a graphical representation in the Squeezer platform; and/or<br></br>
            3.10. To send periodic e-mails (The e-mail address you provide for order processing, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news (if accepted), updates, related product or service information, etc.)<br></br>
            If at any time you would like to unsubscribe from receiving future e-mails, you can cancel your account after login by clicking on "Cancel my account"<br></br>
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>4. Legal basis</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>4.1. EU General Data Protection Regulation (GDPR)</h3>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            The processing of your data is either based on your consent or in case the processing is necessary for the performance of a contract to which you are a party, or in order to take steps at your request prior to entering into a contract, cf. GDPR art. 6(1)(a)-(b).<br></br>
            If the processing is based on your consent, you may at any time withdraw your consent by contacting us using the contact information in clause 1.<br></br>
            In order to enter into a contract regarding the purchase of Squeezer’s Service, you must provide us with the required personal data. If you do not provide us with all the required information, it will not be possible to deliver the Service.<br></br>
          </h3>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>4.2. California Online Privacy Protection Act Compliance</h3>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Because Squeezer values your privacy we have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act. We therefore will not distribute any personal information to outside parties without your consent except as stated in clause 7.<br></br>
            As part of the California Online Privacy Protection Act, all users of our website may make any changes to their information at any time by logging into their account and navigating to the “account page”.<br></br>
          </h3>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>4.3. Children’s Online Privacy Protection Act Compliance</h3>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Squeezer is in compliance with the requirements of the Children’s Online Privacy Protection Act. We will not intentionally collect any information from anyone under 13 years of age. Our website, products and services are all directed at people who are at least 13 years old or older.<p></p>
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>5. How do we protect your information?</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Squeezer implements the following technical, physical and organizational measures to maintain the safety of your personal data against accidental or unlawful destruction or accidental loss, alteration, unauthorized use, unauthorized modification, disclosure or access and against all other unlawful forms of processing.<p></p>
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>5.1. Availability</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            The Service utilizes the extensive features of the cloud environment to ensure high availability, like full redundancy, load balancing, automatic capacity scaling, continuous data backup and geo-replication along with a traffic manager for automatic geographical failover on datacenter level disasters. All failover mechanisms are fully automated.<br></br>
            No personal data is stored permanently outside Squeezer’s cloud platforms. The physical security is thereby maintained by Squeezer’s subcontractors, see clause 7.<br></br>
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>5.2. Integrity</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            To ensure integrity, all data transits are encrypted to align with best practices for protecting confidentiality and data integrity. E.g. all supplied credit card information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our payment gateway provider’s database only to be accessible by those who are authorized to access such systems and who are required to keep the information confidential.<br></br>
            For data in transit, the Service uses industry-standard transport protocols between devices and AWS datacenters and within datacenters themselves.<br></br>
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>5.3. Confidentiality</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            All personnel are subject to full confidentiality and any subcontractors and sub-processors are required to sign a confidentiality agreement if not full confidentiality is part of the main agreement between the parties.<br></br>
            Whenever personal data is accessed by authorized personnel the access is only possible over an encrypted connection. When accessing the data in a database, the IP number of the person accessing the data must also be pre-authorized to obtain access.<br></br>
            On premise devices storing personal data temporarily is at all times, except when not being actively used or relocated under uninterrupted supervision, locked in a safe. Personal data are never stored on mobile media like USB sticks and DVD’s.<br></br>
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>5.4. Transparency</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Squeezer will at all times keep you informed about changes to the processes to protect data privacy and security, including practices and policies. You may at any time request information on where and how data is stored, secured and used. Squeezer will also provide summaries of any independent audits of the Service.<p></p>
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>5.5. Isolation</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            All access to personal data is blocked by default, using a zero privileges policy. Access to personal data is restricted to individually authorized personnel. Squeezer’s Security and Privacy Officer issues authorizations and maintains a log of granted authorizations.<p></p>
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>5.6. The ability to intervene</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Squeezer enables your rights of access, rectification, erasure, blocking and objection mainly by providing built-in functions for data handling in the Squeezer Platform, by offering the option to send instructions through Squeezer’s helpdesk and also by informing about and offering the customer the possibility of objection when Squeezer is planning to implement changes to relevant practices and policies.<br></br>
            The overall responsibility for data security lies with Squeezer’s Data Protection Officer who educates and updates all personnel on the data security measures outlined in Squeezer’s security handbook and this Privacy Policy.<br></br>
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>5.7. Monitoring</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Squeezer uses security reports to monitor access patterns and to proactively identify and mitigate potential threats. Administrative operations, including system access, are logged to provide an audit trail if unauthorized or accidental changes are made.<br></br>
            System performance and availability is monitored from both internal and external monitoring services.<br></br>
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>5.8. Personal Data breach notification</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            In the event that your data is compromised, Squeezer will notify you and competent Supervisory Authority(ies) within 72 hours by e-mail with information about the extent of the breach, affected data, any impact on the Service and Squeezer's action plan for measures to secure the data and limit any possible detrimental effect on the data subjects.<br></br>
            "Personal data breach" means a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data transmitted, stored or otherwise processed in connection with the provision of the Service.<br></br>
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>6. Do we disclose any information to outside parties?</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Squeezer does not sell, trade or otherwise transfer to outside parties any personally identifiable information.<p></p>
            This does not include trusted third parties or subcontractors who assist us in operating our website, conducting our business, or servicing you. Such trusted parties may have access to personally identifiable information on a need-to-know basis and will be contractually obliged to keep your information confidential.<br></br>
            We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect our or others’ rights, property, or safety. Furthermore, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>6.1. Subcontractors/trusted third parties</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Squeezer will monitor subcontractors’ and sub-processors’ maintenance of these standards and audits to ensure that data protection requirements are fulfilled.<br></br>
            Any intended changes concerning the addition or replacement of subcontractors or sub-processors handling personal data will be announced to you with at least 3 months’ notice. You retain at all times the possibility to object to such changes or to terminate the contract with Squeezer.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>6.2 Legally required disclosure</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Squeezer will not disclose the customer’s data to law enforcement except when instructed by you or where it is required by law. When governments make a lawful demand for customer data from Squeezer, Squeezer strives to limit the disclosure. Squeezer will only release specific data mandated by the relevant legal demand.<br></br>
            If compelled to disclose your data, Squeezer will promptly notify you and provide a copy of the demand unless legally prohibited from doing so.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>7. Third party links</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked websites. Nonetheless, we seek to protect the integrity of our website and welcome any feedback about these websites.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>8. Where do we store the information?</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            No stored data will be transferred, backed up and/or recovered by Squeezer outside the US or the European Union.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>8.1. Personal data location</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            All data is stored in databases, file repositories and blockchain resources hosted in an AWS data center.<br></br>
            All data is automatically replicated in real time to secondary hot failover databases and file repositories in AWS’s data centers.<br></br>
            Databases are continuously backed up to enable restore to any point in time within a retention period of 35 days. Backups are stored on file storage at the same geographical location as the database.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>8.2. Installation of software on cloud customer’s system</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            No installation of software is required to use the Service. The login-protected Squeezer platform is accessible through a standard web browser, automatically using an encrypted https-connection for all communications between your browser and Squeezer’s server to protect any data from being intercepted during network transfers.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>9. Request for rectification, restriction or erasure of the personal data</h2>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>9.1. Rectification</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            You may at any time obtain without undue delay rectification of inaccurate personal data concerning you, cf. clause 5.6.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>9.2. Restriction of processing personal data</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            You may at any time request Squeezer to restrict the processing of personal data when one of the following applies:<br></br>
            a. if you contest the accuracy of the personal data, for a period enabling Squeezer to verify the accuracy of the personal data;<br></br>
            b. if the processing is unlawful and you oppose the erasure of the personal data and request the restriction of their use instead; or<br></br>
            c. if Squeezer no longer needs the personal data for the purposes of the processing, but they are required by you for the establishment, exercise or defense of legal claims.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>9.3. Erasure</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            You may without undue delay request the erasure of personal data concerning you, and Squeezer shall erase the personal data without undue delay when one of the following applies:<br></br>
            a.if the personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed;<br></br>
            b.if you withdraw your consent on which the processing is based, and where there is no other legal ground for the processing;<br></br>
            c.if you object to the processing in case the processing is for direct marketing purposes;<br></br>
            d.if the personal data have been unlawfully processed; or<br></br>
            e.if the personal data have to be erased for compliance with a legal obligation in EU or national law.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>10. Data retention</h2>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>10.1. Data retention policy</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Account Data will due to tax regulations be retained for up to five full fiscal years from your cancellation of your Service account.<br></br>
            Configuration Data and System Generated Data will be erased immediately when you cancel the Service account.<br></br>
            End User Data will be erased on an ongoing basis after 12 months from registration, and immediately when you cancel the Service account.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>10.2. Data retention for compliance with legal requirements</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            You cannot require Squeezer to change any of the default retention periods, except for the reasons for erasure pursuant to clause 10.3, but may suggest changes for compliance with specific sector laws and regulations.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Bold'}}>10.3. Data restitution and/or deletion</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            No data except Account Data will be retained after the termination of the contract. You may request a data copy before termination. You must not cancel the Service account until the data copy has been delivered, as Squeezer otherwise will not be able to deliver the data copy.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>11. Accountability</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Squeezer uses the extensive range of built-in logging features and audits trails provided by AWS on its cloud platform. Squeezer also logs all system updates, configuration changes and access to provide an audit-trail if unauthorized or accidental changes are made.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>12. Cooperation</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Squeezer will cooperate with you in order to ensure compliance with applicable data protection provisions, e.g. to enable you to effectively guarantee the exercise of data subjects’ rights (right of access, rectification, erasure, blocking, opposition), to manage incidents including forensic analysis in case of security breach.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>13. Terms of Service</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            Please also visit our Terms of Service section establishing the use, disclaimers, and limitations of liability governing the use of our website at squeezer.network/terms-of-service.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>14. Your consent</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            By using our site, you consent to this Privacy Policy.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>15. Changes to our Privacy Policy</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            If we decide to change our Privacy Policy, we will post those changes on this page, and/or update the Privacy Policy modification date below.<p></p>
            This Privacy Policy was last modified on March 31st 2019.
          </h3>
        </div>
        <StartBuildingSection />
      </Layout>
    );
  }
}
