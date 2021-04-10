import React from 'react';
import RecipeList from '../RecipeList';
import TagList from '../TagList';
import {graphql, useStaticQuery} from 'gatsby';
const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        description {
          description
        }
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
const  Recipes  = () => {
    const {allContentfulRecipe: {nodes: allRecipes }} = useStaticQuery(query);
    return (
    <section className="recipes-container">
        <TagList recipes={allRecipes}/>
        <RecipeList recipes={allRecipes}/>
    </section>
)}

export default Recipes;