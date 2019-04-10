import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Us | Gainz Geek'} />
    <Header title="About Us">We love fitness, and hope to share our <strong><em>humble</em></strong> knowledge.</Header>
    <Container center={center}>
      We created this website in order to provide everyone with easy to follow guides about everything related to fitness <em>(Comprehensive guides, infographics, tools, reviews etc)</em>. It's a work in progress obviously. We hope to grow bigger.
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
