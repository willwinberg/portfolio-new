import React from "react";
import Project from "./Project";

import CloudManager from "../assets/images/portfolio/cloudmanager.png";
import CloudManagerModal from "../assets/images/portfolio/modals/m-cloudmanager.png";
import Streamvisor from "../assets/images/portfolio/streamvisor.jpg";
import StreamvisorModal from "../assets/images/portfolio/modals/m-streamvisor.jpg";
import Snio from "../assets/images/portfolio/snio.png";
import SnioModal from "../assets/images/portfolio/modals/m-snio.png";
import BlueTube from "../assets/images/portfolio/bluetube.jpg";
import BlueTubeModal from "../assets/images/portfolio/modals/m-bluetube.jpg";
import Gogrello from "../assets/images/portfolio/gogrello.jpg";
import GogrelloModal from "../assets/images/portfolio/modals/m-gogrello.jpg";
import PassiveCrypto from "../assets/images/portfolio/passivecrypto.jpg";
import PassiveCryptoModal from "../assets/images/portfolio/modals/m-passivecrypto.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
              <Project
              route={"#modal-07"}
              pic={Streamvisor}
              title={"Streamvisor"}
              description={"A browser app for managing Pulsar instances."}
              modal={StreamvisorModal}
              id={"modal-07"}
              synopsis={"A Pulsar management solution that helps businesses capture, observe, administer, and secure data. The platform enables administrators to gain insight into event-driven architecture, explore live data, monitor key metrics, and access multiple environments."}
              tech={"Vue 3, Pinia, Vuetify"}
              url={"https://docs.streamvisor.com/installation/"}
              git={"https://github.com/streamvisor/streamvisor"}
            />
            <Project
              route={"#modal-07"}
              pic={CloudManager}
              title={"StreamNative Cloud UI"}
              description={"A web UI for Apache Pulsar as a service."}
              modal={CloudManagerModal}
              id={"modal-07"}
              synopsis={"StreamNative Cloud delivers a resilient and scalable messaging and event streaming service deployable in minutes. We'll manage Pulsar for you so that you don't have to spend time or resources to deploy, upgrade, or maintain your clusters."}
              tech={"Vue 3, Tailwind, Quasar-UI"}
              url={"https://auth.streamnative.cloud/login"}
              git={"https://github.com/streamnative"}
            />
            <Project
              route={"#modal-08"}
              pic={Snio}
              title={"streamnative.io"}
              description={"The front facing marketing site for StreamNative."}
              modal={SnioModal}
              id={"modal-08"}
              synopsis={"The marketing site for StreamNative built with Gridsome (Gatsby for Vue), GraphQL and Netlify CMS. This architexture allows the marketing team as well as outside content creators to modify all site content with zero need for developers' time. The Gridsome generated static site as well as the CMS are also configured to handle multi-language content with i18n."}
              tech={"Gridsome/Vue, Netlify CMS, SSR, Tailwind"}
              url={"https://streamnative.io/"}
              git={"https://github.com/streamnative"}
            />
            <Project
                route={"#modal-01"}
                pic={PassiveCrypto}
                title={"PassiveCrypto"}
                description={"Automated crypto rebalancing strategies as a service"}
                modal={PassiveCryptoModal}
                id={"modal-01"}
                synopsis={"This is the startup I work at as a full-stack developer mainly with Vue and Laravel. The missions is to create an easy to understand service for people who want to see their crypto grow faster without have to be an expert in the field of finances or blockchain. I built most of the Vue front-end stuff but have lately been working more with the Laravel backend. Let me know if you'd like to see some code samples as it's all in a private repo."}
                tech={"Laravel, Vue, SQL, Many crypto exchange APIs, Paypal, tailwind/scss,"}
                url={"http://passivecrypto.io"}
                git={"https://github.com/willwinberg/"}
            />
            <Project
                route={"#modal-02"}
                pic={Gogrello}
                title={"gogrello"}
                description={"A Trello-like app I'm building for Go Green so we can better manage our tasks"}
                modal={GogrelloModal}
                id={"modal-02"}
                synopsis={"This is a work in progress but I'm pretty happy with it so far. I got do play around with vanilla DOM drag and drop events to hand that functionality. So far, this is just the front end, using Vue. I'm still working on the back-end Node part. It's exciting that this will actually be used in a professional setting"}
                tech={"Vue/Nuxt, Node, Express, Mongo, Vuetify, tailwind-css"}
                url={"https://gogrello.netlify.com/"}
                git={"https://github.com/willwinberg/task-app-nuxt"}
            />
            <Project
              route={"#modal-03"}
              pic={BlueTube}
              title={"BlueTube"}
              description={"Like YouTube but only sad videos are allowed"}
              modal={BlueTubeModal}
              id={"modal-03"}
              synopsis={"This is a cool YouTube clone I made to help me learn PHP. It handles video uploads as well as avatar photo uploads. Also has functionality for users to subscribe to channels, like or dislike videos, leave comments, like or dislike comments and search for and sort videos. Unfortunately, since I don't have the super cool job yet that you're looking to fill, you should stick to small file uploads if you want to test it out. It was pretty amazing moving on to Laravel after building this from scratch.. Haha"}
              tech={"Vanilla PHP, PDO, ffmpeg, Ajax, Jquery, Bootstrap"}
              url={"http://www.bluetube.site"}
              git={"https://github.com/willwinberg/bluetube-vanilla"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
