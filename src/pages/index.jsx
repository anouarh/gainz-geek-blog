import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout, Container } from 'layouts';
import banner from '../../static/logo/banner-test.png';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 0rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 0rem 1rem 1rem 1rem;
  }
`;

const Section1 = styled.div`
  background-color: ${props => props.theme.colors.primary.red};
  box-shadow: ${props => props.theme.shadow.footer};
  color: white;
  text-align: center;
  padding: 2rem 2rem 2rem 2rem;
  margin: 0rem 0rem 2rem 0rem;
  height: 50vh;
  line-height: 5;
  a {
    color: black;
    box-shadow: 0.3em 0.3em 0 0 black, inset 0.3em 0.3em 0 0 black;
    border: 2px solid;
    padding: 15px 32px;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: #fff;
      box-shadow: 0 0 0 0 #18121E, inset 6em 3.5em 0 0 #18121E;
    }
  }
`;

const Index = ({ data, center }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'Home | Gainz Geek'} />
      <Header>
      <img src={banner} alt="Gainz Geek"/></Header>
      <Section1>
          <h1>Help choosing a workout?</h1>
          <div><p><Link to="/workout-generator"><b>PROGRAM PICKER</b></Link></p></div>
      </Section1>
      {/* add it here <Container center={center}>
      </Container> */}
      <PostWrapper>
        {edges.map(({ node }) => (
          <PostList
            key={node.id}
            cover={node.frontmatter.cover.childImageSharp.fluid}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          />
        ))}
      </PostWrapper>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

Container.propTypes = {
  center: PropTypes.object,
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MMMM Do, YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
