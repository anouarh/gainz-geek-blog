import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Layout, Container } from 'layouts';
import { Header } from 'components';

const Contact = center => (
  <Layout>
    <Helmet title={'Contactez-nous| Gainz Geek'} />
    <Header title="Contactez-nous"></Header>
    <Container center={center}>
      <p>Si vous avez des questions ou vous souhaitez contribuer à ce site, veuillez nous contacter sur l'adresse suivante <a href="mailto:contact@gainzgeek.com">contact@gainzgeek.com</a></p>
    </Container>
  </Layout>
);

export default Contact;
