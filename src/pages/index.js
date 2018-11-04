import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

import './post.css';

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark;
  const date = props.data.site.buildTimeZone;
  return (
    <Layout>
      <h4>{props.data.allMarkdownRemark.totalCount} Posts</h4>
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} key={i} className="link">
          <div className="post-list">
            <h1>{node.frontmatter.title}</h1>
            <span>{date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  );
};

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            title
          }
        }
      }
    }
    site {
      buildTimeZone
    }
  }
`;
