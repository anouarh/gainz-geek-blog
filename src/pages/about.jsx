import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page"></Header>
    <Container center={center}>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
