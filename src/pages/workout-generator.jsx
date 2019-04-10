import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const WorkoutGenerator = center => (
  <Layout>
    <Helmet title={'Workout Generator | Gainz Geek'} />
    <Header title="Workout Generator"></Header>
    <Container center={center}>
      Sorry, a work in progress...
    </Container>
  </Layout>
);

export default WorkoutGenerator;

Container.propTypes = {
  center: PropTypes.object,
};
