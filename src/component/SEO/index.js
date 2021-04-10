import React from 'react';
import {Helmet} from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const query =  graphql`
{
  site {
    siteMetadata {
      title
      description
    }
  }
}
`;

const SEO = ({title, description}) => {
    const data = useStaticQuery(query);
    const {site: {siteMetadata: { title: siteTitle, description: siteDescription} }} = data;
    return (
        <Helmet 
            htmlAttributes={{lang: 'en'}}
            title={`${title} | ${siteTitle}`}
            meta={[{
                name: 'description',
                content: description || siteDescription
            }]}
        />
)};

export default SEO;