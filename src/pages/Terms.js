import React from 'react';
import { useScrollTrigger, Zoom, Fab, Container, Box } from '@material-ui/core';
import Header from '../components/common/Header';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Footer from '../components/common/Footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  msoNormal: {
    margin: '0em'
  },
  contentTitle: {}
}));

export default function Terms(props) {
  const classes = useStyles();

  const termContent = () => (
    <div>
      <Box display="flex" justifyContent="center">
        <h1>Terms and Conditions</h1>
      </Box>
      <div>
        <p className={classes.msoNormal}>
          <b>
            <span>TERMS OF USE</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>Last updated&nbsp;January 26, 2020</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>AGREEMENT TO TERMS</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          These Terms of Use constitute a legally binding agreement made between you, whether
          personally or on behalf of an entity (&ldquo;you&rdquo;) and&nbsp;jszsoft.com&nbsp;(&quot;
          <b>Company</b>
          &quot;, &ldquo;
          <b>we</b>
          &rdquo;, &ldquo;
          <b>us</b>
          &rdquo;, or &ldquo;
          <b>our</b>
          &rdquo;), concerning your access to and use of
          the&nbsp;https://jszsoft.ddns.net&nbsp;website as well as any other media form, media
          channel, mobile website or mobile application related, linked, or otherwise connected
          thereto (collectively, the &ldquo;Site&rdquo;). You agree that by accessing the Site, you
          have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT
          AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
          SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          Supplemental terms and conditions or documents that may be posted on the Site from time to
          time are hereby expressly incorporated herein by reference. We reserve the right, in our
          sole discretion, to make changes or modifications to these Terms of Use at any time and
          for any reason. We will alert you about any changes by updating the &ldquo;Last
          updated&rdquo; date of these Terms of Use, and you waive any right to receive specific
          notice of each such change. It is your responsibility to periodically review these Terms
          of Use to stay informed of updates. You will be subject to, and will be deemed to have
          been made aware of and to have accepted, the changes in any revised Terms of Use by your
          continued use of the Site after the date such revised Terms of Use are posted.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          The information provided on the Site is not intended for distribution to or use by any
          person or entity in any jurisdiction or country where such distribution or use would be
          contrary to law or regulation or which would subject us to any registration requirement
          within such jurisdiction or country. Accordingly, those persons who choose to access the
          Site from other locations do so on their own initiative and are solely responsible for
          compliance with local laws, if and to the extent local laws are applicable.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          All users who are minors in the jurisdiction in which they reside (generally under the age
          of 18) must have the permission of, and be directly supervised by, their parent or
          guardian to use the Site. If you are a minor, you must have your parent or guardian read
          and agree to these Terms of Use prior to you using the Site.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>INTELLECTUAL PROPERTY RIGHTS</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          Unless otherwise indicated, the Site is our proprietary property and all source code,
          databases, functionality, software, website designs, audio, video, text, photographs, and
          graphics on the Site (collectively, the &ldquo;Content&rdquo;) and the trademarks, service
          marks, and logos contained therein (the &ldquo;Marks&rdquo;) are owned or controlled by us
          or licensed to us, and are protected by copyright and trademark laws and various other
          intellectual property rights and unfair competition laws of the United States, foreign
          jurisdictions, and international conventions. The Content and the Marks are provided on
          the Site &ldquo;AS IS&rdquo; for your information and personal use only. Except as
          expressly provided in these Terms of Use, no part of the Site and no Content or Marks may
          be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed,
          encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for
          any commercial purpose whatsoever, without our express prior written permission.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          Provided that you are eligible to use the Site, you are granted a limited license to
          access and use the Site and to download or print a copy of any portion of the Content to
          which you have properly gained access solely for your personal, non-commercial use. We
          reserve all rights not expressly granted to you in and to the Site, the Content and the
          Marks.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>USER REPRESENTATIONS</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          By using the Site, you represent and warrant that:&nbsp;(1) all registration information
          you submit will be true, accurate, current, and complete; (2) you will maintain the
          accuracy of such information and promptly update such registration information as
          necessary;
          <span>&nbsp;</span>
          <span />
          (3) you have the legal capacity and you agree to comply with these Terms of Use;
          <span>&nbsp;</span>
          <span />
          (4) you are not a minor in the jurisdiction in which you reside, or if a minor, you have
          received parental permission to use the Site; (5) you will not access the Site through
          automated or non-human means, whether through a bot, script, or otherwise; (6) you will
          not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site
          will not violate any applicable law or regulation.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          If you provide any information that is untrue, inaccurate, not current, or incomplete, we
          have the right to suspend or terminate your account and refuse any and all current or
          future use of the Site (or any portion thereof).
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>USER REGISTRATION</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
        </p>
        <p className={classes.msoNormal}>
          <span />
          You may be required to register with the Site. You agree to keep your password
          confidential and will be responsible for all use of your account and password. We reserve
          the right to remove, reclaim, or change a username you select if we determine, in our sole
          discretion, that such username is inappropriate, obscene, or otherwise objectionable.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>PROHIBITED ACTIVITIES</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          You may not access or use the Site for any purpose other than that for which we make the
          Site available. The Site may not be used in connection with any commercial endeavors
          except those that are specifically endorsed or approved by us.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span>As a user of the Site, you agree not to:</span>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          1.&nbsp;Systematically retrieve data or other content from the Site to create or compile,
          directly or indirectly, a collection, compilation, database, or directory without written
          permission from us.
        </p>
        <p className={classes.msoNormal}>
          <span />
          2. Trick, defraud, or mislead us and other users, especially in any attempt to learn
          sensitive account information such as user passwords.
        </p>
        <p className={classes.msoNormal}>
          <span />
          3. Circumvent, disable, or otherwise interfere with security-related features of the Site,
          including features that prevent or restrict the use or copying of any Content or enforce
          limitations on the use of the Site and/or the Content contained therein.
        </p>
        <p className={classes.msoNormal}>
          <span />
          4. Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.
        </p>
        <p className={classes.msoNormal}>
          <span />
          5. Use any information obtained from the Site in order to harass, abuse, or harm another
          person.
        </p>
        <p className={classes.msoNormal}>
          <span />
          6. Make improper use of our support services or submit false reports of abuse or
          misconduct.
        </p>
        <p className={classes.msoNormal}>
          <span />
          7. Use the Site in a manner inconsistent with any applicable laws or regulations.
        </p>
        <p className={classes.msoNormal}>
          <span />
          8. Use the Site to advertise or offer to sell goods and services.
        </p>
        <p className={classes.msoNormal}>
          <span />
          9. Engage in unauthorized framing of or linking to the Site.
        </p>
        <p className={classes.msoNormal}>
          <span />
          10. Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or
          other material, including excessive use of capital letters and spamming (continuous
          posting of repetitive text), that interferes with any party&rsquo;s uninterrupted use and
          enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use,
          features, functions, operation, or maintenance of the Site.
        </p>
        <p className={classes.msoNormal}>
          <span />
          11. Engage in any automated use of the system, such as using scripts to send comments or
          messages, or using any data mining, robots, or similar data gathering and extraction
          tools.
        </p>
        <p className={classes.msoNormal}>
          <span />
          12. Delete the copyright or other proprietary rights notice from any Content.
        </p>
        <p className={classes.msoNormal}>
          <span />
          13. Attempt to impersonate another user or person or use the username of another user.
        </p>
        <p className={classes.msoNormal}>
          <span>14. Sell or otherwise transfer your profile.</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          15. Upload or transmit (or attempt to upload or to transmit) any material that acts as a
          passive or active information collection or transmission mechanism, including without
          limitation, clear graphics interchange formats (&ldquo;gifs&rdquo;), 1&times;1 pixels, web
          bugs, cookies, or other similar devices (sometimes referred to as &ldquo;spyware&rdquo; or
          &ldquo;passive collection mechanisms&rdquo; or &ldquo;pcms&rdquo;).
        </p>
        <p className={classes.msoNormal}>
          <span />
          16. Interfere with, disrupt, or create an undue burden on the Site or the networks or
          services connected to the Site.
        </p>
        <p className={classes.msoNormal}>
          <span />
          17. Harass, annoy, intimidate, or threaten any of our employees or agents engaged in
          providing any portion of the Site to you.
        </p>
        <p className={classes.msoNormal}>
          <span />
          18. Attempt to bypass any measures of the Site designed to prevent or restrict access to
          the Site, or any portion of the Site.
        </p>
        <p className={classes.msoNormal}>
          <span />
          19. Copy or adapt the Site&rsquo;s software, including but not limited to Flash, PHP,
          HTML, JavaScript, or other code.
        </p>
        <p className={classes.msoNormal}>
          <span />
          20. Decipher, decompile, disassemble, or reverse engineer any of the software comprising
          or in any way making up a part of the Site.
        </p>
        <p className={classes.msoNormal}>
          <span />
          21. Except as may be&nbsp;the result of standard search engine or Internet browser usage,
          use, launch, develop, or distribute any automated system, including without limitation,
          any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or
          using or launching any unauthorized script or other software.
        </p>
        <p className={classes.msoNormal}>
          <span />
          22. Use a buying agent or purchasing agent to make purchases on the Site.
        </p>
        <p className={classes.msoNormal}>
          <span />
          23. Make any unauthorized use of the Site, including collecting usernames and/or email
          addresses of users by electronic or other means for the purpose of sending unsolicited
          email, or creating user accounts by automated means or under false pretenses.
        </p>
        <p className={classes.msoNormal}>
          <span />
          24. Use the Site as part of any effort to compete with us or otherwise use the Site and/or
          the Content for any revenue-generating endeavor or commercial enterprise.
        </p>
        <p className={classes.msoNormal}>
          <span />
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>USER GENERATED CONTRIBUTIONS</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
        </p>
        <p className={classes.msoNormal}>
          <span />
          The Site does not offer users to submit or post content. We may provide you with the
          opportunity to create, submit, post, display, transmit, perform, publish, distribute, or
          broadcast content and materials to us or on the Site, including but not limited to text,
          writings, video, audio, photographs, graphics, comments, suggestions, or personal
          information or other material (collectively, &quot;Contributions&quot;). Contributions may
          be viewable by other users of the Site and through third-party websites. As such, any
          Contributions you transmit may be treated in accordance with the Site Privacy Policy. When
          you create or make available any Contributions, you thereby represent and warrant that:
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          1. &nbsp;The creation, distribution, transmission, public display, or performance, and the
          accessing, downloading, or copying of your Contributions do not and will not infringe the
          proprietary rights, including but not limited to the copyright, patent, trademark, trade
          secret, or moral rights of any third party.
          <br />
          2. &nbsp;You are the creator and owner of or have the necessary licenses, rights,
          consents, releases, and permissions to use and to authorize us, the Site, and other users
          of the Site to use your Contributions in any manner contemplated by the Site and these
          Terms of Use.
          <br />
          3. &nbsp;You have the written consent, release, and/or permission of each and every
          identifiable individual person in your Contributions to use the name or likeness of each
          and every such identifiable individual person to enable inclusion and use of your
          Contributions in any manner contemplated by the Site and these Terms of Use.
          <br />
          4. &nbsp;Your Contributions are not false, inaccurate, or misleading.
          <br />
          5. &nbsp;Your Contributions are not unsolicited or unauthorized advertising, promotional
          materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of
          solicitation.
          <br />
          6. &nbsp;Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing,
          libelous, slanderous, or otherwise objectionable (as determined by us).
          <br />
          7. &nbsp;Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.
          <br />
          8. &nbsp;Your Contributions do not advocate the violent overthrow of any government or
          incite, encourage, or threaten physical harm against another.
          <br />
          9. &nbsp;Your Contributions do not violate any applicable law, regulation, or rule.
          <br />
          10. &nbsp;Your Contributions do not violate the privacy or publicity rights of any third
          party.
          <br />
          11. &nbsp;Your Contributions do not contain any material that solicits personal
          information from anyone under the age of 18 or exploits people under the age of 18 in a
          sexual or violent manner.
          <br />
          12. &nbsp;Your Contributions do not violate any federal or state law concerning child
          pornography, or otherwise intended to protect the health or well-being of minors;
          <br />
          13. &nbsp;Your Contributions do not include any offensive comments that are connected to
          race, national origin, gender, sexual preference, or physical handicap.
          <br />
          14. &nbsp;Your Contributions do not otherwise violate, or link to material that violates,
          any provision of these Terms of Use, or any applicable law or regulation.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          Any use of the Site in violation of the foregoing violates these Terms of Use and may
          result in, among other things, termination or suspension of your rights to use the Site.
        </p>
        <p className={classes.msoNormal}>
          <span />
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>CONTRIBUTION LICENSE</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          You and Site agree that we may access, store, process, and use any information and
          personal data that you provide following the terms of the Privacy Policy and your choices
          (including settings).
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          By submitting suggestions or other feedback regarding the Site, you agree that we can use
          and share such feedback for any purpose without compensation to you.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          We do not assert any ownership over your Contributions. You retain full ownership of all
          of your Contributions and any intellectual property rights or other proprietary rights
          associated with your Contributions. We are not liable for any statements or
          representations in your Contributions provided by you in any area on the Site. You are
          solely responsible for your Contributions to the Site and you expressly agree to exonerate
          us from any and all responsibility and to refrain from any legal action against us
          regarding your Contributions.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>MOBILE APPLICATION LICENSE</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>Use License</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span />
        </p>
        <p className={classes.msoNormal}>
          <span />
          If you access the Site via a mobile application, then we grant you a revocable,
          non-exclusive, non-transferable, limited right to install and use the mobile application
          on wireless electronic devices owned or controlled by you, and to access and use the
          mobile application on such devices strictly in accordance with the terms and conditions of
          this mobile application license contained in these Terms of Use. You shall not: (1)
          decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt
          the application; (2) make any modification, adaptation, improvement, enhancement,
          translation, or derivative work from the application; (3) violate any applicable laws,
          rules, or regulations in connection with your access or use of the application; (4)
          remove, alter, or obscure any proprietary notice (including any notice of copyright or
          trademark) posted by us or the licensors of the application; (5) use the application for
          any revenue generating endeavor, commercial enterprise, or other purpose for which it is
          not designed or intended; (6) make the application available over a network or other
          environment permitting access or use by multiple devices or users at the same time; (7)
          use the application for creating a product, service, or software that is, directly or
          indirectly, competitive with or in any way a substitute for the application; (8) use the
          application to send automated queries to any website or to send any unsolicited commercial
          e-mail; or (9) use any proprietary information or any of our interfaces or our other
          intellectual property in the design, development, manufacture, licensing, or distribution
          of any applications, accessories, or devices for use with the application.
        </p>
        <p className={classes.msoNormal}>
          <span />
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>Apple and Android Devices</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span />
        </p>
        <p className={classes.msoNormal}>
          <span />
          The following terms apply when you use a mobile application obtained from either the Apple
          Store or Google Play (each an &ldquo;App Distributor&rdquo;) to access the Site: (1) the
          license granted to you for our mobile application is limited to a non-transferable license
          to use the application on a device that utilizes the Apple iOS or Android operating
          systems, as applicable, and in accordance with the usage rules set forth in the applicable
          App Distributor&rsquo;s terms of service; (2) we are responsible for providing any
          maintenance and support services with respect to the mobile application as specified in
          the terms and conditions of this mobile application license contained in these Terms of
          Use or as otherwise required under applicable law, and you acknowledge that each App
          Distributor has no obligation whatsoever to furnish any maintenance and support services
          with respect to the mobile application; (3) in the event of any failure of the mobile
          application to conform to any applicable warranty, you may notify the applicable App
          Distributor, and the App Distributor, in accordance with its terms and policies, may
          refund the purchase price, if any, paid for the mobile application, and to the maximum
          extent permitted by applicable law, the App Distributor will have no other warranty
          obligation whatsoever with respect to the mobile application; (4) you represent and
          warrant that (i) you are not located in a country that is subject to a U.S. government
          embargo, or that has been designated by the U.S. government as a &ldquo;terrorist
          supporting&rdquo; country and (ii) you are not listed on any U.S. government list of
          prohibited or restricted parties; (5) you must comply with applicable third-party terms of
          agreement when using the mobile application, e.g., if you have a VoIP application, then
          you must not be in violation of their wireless data service agreement when using the
          mobile application; and (6) you acknowledge and agree that the App Distributors are
          third-party beneficiaries of the terms and conditions in this mobile application license
          contained in these Terms of Use, and that each App Distributor will have the right (and
          will be deemed to have accepted the right) to enforce the terms and conditions in this
          mobile application license contained in these Terms of Use against you as a third-party
          beneficiary thereof.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>SOCIAL MEDIA</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          As part of the functionality of the Site, you may link your account with online accounts
          you have with third-party service providers (each such account, a &ldquo;Third-Party
          Account&rdquo;) by either: (1) providing your Third-Party Account login information
          through the Site; or (2) allowing us to access your Third-Party Account, as is permitted
          under the applicable terms and conditions that govern your use of each Third-Party
          Account. You represent and warrant that you are entitled to disclose your Third-Party
          Account login information to us and/or grant us access to your Third-Party Account,
          without breach by you of any of the terms and conditions that govern your use of the
          applicable Third-Party Account, and without obligating us to pay any fees or making us
          subject to any usage limitations imposed by the third-party service provider of the
          Third-Party Account. By granting us access to any Third-Party Accounts, you understand
          that (1) we may access, make available, and store (if applicable) any content that you
          have provided to and stored in your Third-Party Account (the &ldquo;Social Network
          Content&rdquo;) so that it is available on and through the Site via your account,
          including without limitation any friend lists and (2) we may submit to and receive from
          your Third-Party Account additional information to the extent you are notified when you
          link your account with the Third-Party Account. Depending on the Third-Party Accounts you
          choose and subject to the privacy settings that you have set in such Third-Party Accounts,
          personally identifiable information that you post to your Third-Party Accounts may be
          available on and through your account on the Site. Please note that if a Third-Party
          Account or associated service becomes unavailable or our access to such Third Party
          Account is terminated by the third-party service provider, then Social Network Content may
          no longer be available on and through the Site. You will have the ability to disable the
          connection between your account on the Site and your Third-Party Accounts at any time.
          PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH
          YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY
          SERVICE PROVIDERS. We make no effort to review any Social Network Content for any purpose,
          including but not limited to, for accuracy, legality, or non-infringement, and we are not
          responsible for any Social Network Content. You acknowledge and agree that we may access
          your email address book associated with a Third-Party Account and your contacts list
          stored on your mobile device or tablet computer solely for purposes of identifying and
          informing you of those contacts who have also registered to use the Site. You can
          deactivate the connection between the Site and your Third-Party Account by contacting us
          using the contact information below or through your account settings (if applicable). We
          will attempt to delete any information stored on our servers that was obtained through
          such Third-Party Account, except the username and profile picture that become associated
          with your account.
        </p>
        <p align="center" className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>SITE MANAGEMENT</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          We reserve the right, but not the obligation, to: (1) monitor the Site for violations of
          these Terms of Use; (2) take appropriate legal action against anyone who, in our sole
          discretion, violates the law or these Terms of Use, including without limitation,
          reporting such user to law enforcement authorities; (3) in our sole discretion and without
          limitation, refuse, restrict access to, limit the availability of, or disable (to the
          extent technologically feasible) any of your Contributions or any portion thereof; (4) in
          our sole discretion and without limitation, notice, or liability, to remove from the Site
          or otherwise disable all files and content that are excessive in size or are in any way
          burdensome to our systems; and (5) otherwise manage the Site in a manner designed to
          protect our rights and property and to facilitate the proper functioning of the Site.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>PRIVACY POLICY</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span>We care about data privacy and security.&nbsp;</span>
          <span />
          Please review our Privacy Policy:
          <b>&nbsp;https://jszsoft.ddns.net/privacy</b>
          .&nbsp;By using the Site, you agree to be bound by our Privacy Policy, which is
          incorporated into these Terms of Use. Please be advised the Site is hosted in the United
          States. If you access the Site from the European Union, Asia, or any other region of the
          world with laws or other requirements governing personal data collection, use, or
          disclosure that differ from applicable laws in the United States, then through your
          continued use of the Site, you are transferring your data to the United States, and you
          expressly consent to have your data transferred to and processed in the United States.
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;&nbsp;&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>TERM AND TERMINATION</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT
          LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE
          DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING
          BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING
          WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN
          THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
          PARTICIPATION IN THE SITE OR DELETE&nbsp;YOUR ACCOUNT AND&nbsp;ANY CONTENT OR INFORMATION
          THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          If we terminate or suspend your account for any reason, you are prohibited from
          registering and creating a new account under your name, a fake or borrowed name, or the
          name of any third party, even if you may be acting on behalf of the third party. In
          addition to terminating or suspending your account, we reserve the right to take
          appropriate legal action, including without limitation pursuing civil, criminal, and
          injunctive redress.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>MODIFICATIONS AND INTERRUPTIONS</span>
          </b>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          We reserve the right to change, modify, or remove the contents of the Site at any time or
          for any reason at our sole discretion without notice. However, we have no obligation to
          update any information on our Site. We also reserve the right to modify or discontinue all
          or part of the Site without notice at any time. We will not be liable to you or any third
          party for any modification, price change, suspension, or discontinuance of the Site.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          We cannot guarantee the Site will be available at all times. We may experience hardware,
          software, or other problems or need to perform maintenance related to the Site, resulting
          in interruptions, delays, or errors. We reserve the right to change, revise, update,
          suspend, discontinue, or otherwise modify the Site at any time or for any reason without
          notice to you. You agree that we have no liability whatsoever for any loss, damage, or
          inconvenience caused by your inability to access or use the Site during any downtime or
          discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us
          to maintain and support the Site or to supply any corrections, updates, or releases in
          connection therewith.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>GOVERNING LAW</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          These Terms shall be governed by and defined following the laws of&nbsp;Canada
          <span />
          .&nbsp;jszsoft.com&nbsp;and yourself irrevocably consent that the courts of
          <span>Canada&nbsp;</span>
          <span />
          shall have exclusive jurisdiction to resolve any dispute which may arise in connection
          with these terms.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>DISPUTE RESOLUTION</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          You agree to irrevocably submit all disputes related to Terms or the relationship
          established by this Agreement to the jurisdiction of the&nbsp;Canada
          <span />
          courts.&nbsp;jszsoft.com&nbsp;shall also maintain the right to bring proceedings as to the
          substance of the matter in the courts of the country where you reside or, if these Terms
          are entered into in the course of your trade or profession, the state of your principal
          place of business.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>CORRECTIONS</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          There may be information on the Site that contains typographical errors, inaccuracies, or
          omissions, including descriptions, pricing, availability, and various other information.
          We reserve the right to correct any errors, inaccuracies, or omissions and to change or
          update the information on the Site at any time, without prior notice.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>DISCLAIMER</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE
          SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW,
          WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE
          THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
          FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS
          ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE&rsquo;S CONTENT OR THE CONTENT OF ANY
          WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1)
          ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR
          PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE
          SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL
          PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR
          CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR
          THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6)
          ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND
          INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE
          AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY
          FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY
          HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER
          ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
          TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE
          PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE
          YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>LIMITATIONS OF LIABILITY</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD
          PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
          DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM
          YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
          DAMAGES.&nbsp;NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO
          YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES
          BE LIMITED TO&nbsp;THE AMOUNT PAID, IF ANY, BY YOU TO US&nbsp;
          <span>
            DURING THE&nbsp;ONE (1)&nbsp;MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING
          </span>
          . CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR
          LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE
          DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>INDEMNIFICATION</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          You agree to defend, indemnify, and hold us harmless, including our subsidiaries,
          affiliates, and all of our respective officers, agents, partners, and employees, from and
          against any loss, damage, liability, claim, or demand, including reasonable
          attorneys&rsquo; fees and expenses, made by any third party due to or arising out
          of:&nbsp;(1) use of the Site; (2) breach of these Terms of Use; (3) any breach of your
          representations and warranties set forth in these Terms of Use; (4) your violation of the
          rights of a third party, including but not limited to intellectual property rights; or (5)
          any overt harmful act toward any other user of the Site with whom you connected via the
          Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the
          exclusive defense and control of any matter for which you are required to indemnify us,
          and you agree to cooperate, at your expense, with our defense of such claims. We will use
          reasonable efforts to notify you of any such claim, action, or proceeding which is subject
          to this indemnification upon becoming aware of it.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>USER DATA</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          We will maintain certain data that you transmit to the Site for the purpose of managing
          the performance of the Site, as well as data relating to your use of the Site. Although we
          perform regular routine backups of data, you are solely responsible for all data that you
          transmit or that relates to any activity you have undertaken using the Site. You agree
          that we shall have no liability to you for any loss or corruption of any such data, and
          you hereby waive any right of action against us arising from any such loss or corruption
          of such data.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          Visiting the Site, sending us emails, and completing online forms constitute electronic
          communications. You consent to receive electronic communications, and you agree that all
          agreements, notices, disclosures, and other communications we provide to you
          electronically, via email and on the Site, satisfy any legal requirement that such
          communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
          CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND
          RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any
          rights or requirements under any statutes, regulations, rules, ordinances, or other laws
          in any jurisdiction which require an original signature or delivery or retention of
          non-electronic records, or to payments or the granting of credits by any means other than
          electronic means.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>CALIFORNIA USERS AND RESIDENTS</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          If any complaint with us is not satisfactorily resolved, you can contact the Complaint
          Assistance Unit of the Division of Consumer Services of the California Department of
          Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento,
          California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>MISCELLANEOUS</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          These Terms of Use and any policies or operating rules posted by us on the Site or in
          respect to the Site constitute the entire agreement and understanding between you and us.
          Our failure to exercise or enforce any right or provision of these Terms of Use shall not
          operate as a waiver of such right or provision. These Terms of Use operate to the fullest
          extent permissible by law. We may assign any or all of our rights and obligations to
          others at any time. We shall not be responsible or liable for any loss, damage, delay, or
          failure to act caused by any cause beyond our reasonable control. If any provision or part
          of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable,
          that provision or part of the provision is deemed severable from these Terms of Use and
          does not affect the validity and enforceability of any remaining provisions. There is no
          joint venture, partnership, employment or agency relationship created between you and us
          as a result of these Terms of Use or use of the Site. You agree that these Terms of Use
          will not be construed against us by virtue of having drafted them. You hereby waive any
          and all defenses you may have based on the electronic form of these Terms of Use and the
          lack of signing by the parties hereto to execute these Terms of Use.
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>CONTACT US</span>
          </b>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <span />
          In order to resolve a complaint regarding the Site or to receive further information
          regarding use of the Site, please contact us at:
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>jszsoft.com</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>Toronto,&nbsp;Ontario</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>Canada</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>Phone:&nbsp;</span>
          </b>
          <b>
            <span>(647) 668-2502</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <b>
            <span>jacky.zsn@gmail.com</span>
          </b>
        </p>
        <p className={classes.msoNormal}>
          <span>&nbsp;</span>
        </p>
        <p className={classes.msoNormal}>&nbsp;</p>
        <p className={classes.msoNormal}>&nbsp;</p>
      </div>
    </div>
  );

  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100
    });

    const handleClick = event => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }

  return (
    <div>
      <div id="back-to-top-anchor"></div>
      <Header />
      <Container component="main" maxWidth="lg">
        {termContent()}
      </Container>
      <Footer />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
