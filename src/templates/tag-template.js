import React from 'react';
import { graphql } from 'gatsby';
import RecipeList from '../component/RecipeList';
import Layout from '../component/Layout';
import SEO from '../component/SEO';

const TagTemplate = ({data, pageContext}) => {
    const { allContentfulRecipe: { nodes: recipes} } = data;
    return (
        <Layout>
          <SEO title={pageContext.tag}/>
            <main className="page">
                <h2>{pageContext.tag}</h2>
                <div className="tag-recipes">
                    <RecipeList recipes={recipes} />
                </div>
            </main>
        </Layout>
    )
};

export const query = graphql`
query getRecipesByTag($tag: String) {
    allContentfulRecipe(
      filter: {content: {tags: {eq: $tag}}}
      sort: {order: ASC, fields: title}
    ) {
      nodes {
        title
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        prepTime
        cookTime
      }
    }
  }
`;

export default TagTemplate;