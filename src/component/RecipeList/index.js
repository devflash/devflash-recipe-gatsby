import React from 'react';
import {Link} from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import slugify from 'slugify';

const RecipeList = ({recipes=[]}) => (
    <div className="recipes-list">
        {
            recipes.map(({id,title,image,prepTime, cookTime}) => <Link key={id} to={`/recipes/${slugify(title,{lower: true})}`} className="recipe">
                <GatsbyImage image={image.gatsbyImageData} alt={title} className="recipe-img" />
                <h5>{title}</h5>
                <p>Prep Time: {prepTime} | Cook: {cookTime}</p>
            </Link>)
        }

    </div>
);

export default RecipeList;