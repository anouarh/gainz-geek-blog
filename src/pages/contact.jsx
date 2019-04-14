import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Layout, Container } from 'layouts';
import { Header } from 'components';

const Contact = center => (
  <Layout>
    <Helmet title={'Contact Us | Gainz Geek'} />
    <Header title="Contact Us"></Header>
    <Container center={center}>
      <p>If you have any questions or would like to contribute to this website, please contact us at <a href="mailto:contact@gainzgeek.com">contact@gainzgeek.com</a></p>
    </Container>
  </Layout>
);

export default Contact;
