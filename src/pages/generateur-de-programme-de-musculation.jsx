import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const WorkoutGenerator = center => (
  <Layout>
    <Helmet title={'Générateur de Programme de Musculation | Gainz Geek'} />
    <Header title="Générateur de Programme de Musculation"></Header>
    <Container center={center}>
      Désolé, un travail en cours ...
    </Container>
  </Layout>
);

export default WorkoutGenerator;

Container.propTypes = {
  center: PropTypes.object,
};
