import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../component/Layout';
import getTagList from '../../utils/getTagList';
import SEO from '../../component/SEO';

const Tags = ({data}) => {
    console.log(data);
    const tags = getTagList(data.allContentfulRecipe.nodes);
    return(
        <Layout>
          <SEO title="tags"/>
            <main className="page">
                <div className="tags-page">
                {
                    Object.entries(tags).map(([text, value], index) => (
                        <Link to={`${text}`} key={index} className='tag'>
                            <h5>{text}</h5>
                            <p>{value} recipe</p> 
                        </Link>
                    ))
                }
                </div>
            </main>
        </Layout>
    );
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags;