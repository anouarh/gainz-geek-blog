import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const ErrorPage = center => (
  <Layout>
    <Helmet title={'404'} />
    <Header title="404" />
    <Container center={center}>
      <h1>Oups, quelque chose s'est mal passé.</h1>
      <h3>Cette page n'existe pas ou n'est plus accessible.</h3>
      <h3>
      Vous pouvez retourner à la <Link to="/">Page d'Accueil</Link>.
      </h3>
    </Container>
  </Layout>
);

export default ErrorPage;

Container.propTypes = {
  center: PropTypes.object,
};
