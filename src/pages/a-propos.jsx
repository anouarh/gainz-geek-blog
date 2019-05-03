import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'À propos de nous | Gainz Geek'} />
    <Header title="À propos de nous">Nous aimons tout ce qui est musculation et fitness et nous espérons pouvoir partager notre <strong><em>humble</em></strong> savoir.</Header>
    <Container center={center}>
      Nous avons créé ce site Web pour fournir des guides faciles à suivre sur tout ce qui concerne la musculation <em>(guides complets, infographies, outils, revues, etc.).</em> C'est un travail en cours évidemment. Nous espérons grandir.
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
