import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Container } from 'layouts';
import { Header, TagsBlock } from 'components';
import Helmet from 'react-helmet';

const Tags = ({ pageContext }) => {
  const { tags } = pageContext;

  return (
    <Layout>
      <Helmet title={'All Tags | Gainz Geek'}></Helmet>
      <Header title="All Tags"></Header>
      <Container>
        <TagsBlock list={tags} />
      </Container>
    </Layout>
  );
};

export default Tags;

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.array,
  }),
};
