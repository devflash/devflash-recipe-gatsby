import React from 'react';
import Layout from '../../component/Layout';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import RecipeList from '../../component/RecipeList';
import SEO from '../../component/SEO';

const About = ({data}) => {
    const {allContentfulRecipe: {nodes: recipes}} = data;
    return (
    <Layout>
      <SEO title="About" description="This is about page"/>
        <main className="page">
            <section className="about-page">
                <article>
                    <h2>I'm baby coloring book poke taxidermy</h2>
                    <p>
                        Taxidermy forage glossier letterpress heirloom before they sold
                        out you probably haven't heard of them banh mi biodiesel chia.
                    </p>
                    <p>
                         Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
                        retro.
                    </p>
                    <Link to="/contact" className="btn">Contact</Link>
                </article>
                <StaticImage
                    src="../../assets/images/about.jpeg" 
                    alt="Person Pouring Salt in Bowl"
                    className="about-img"
                    placeholder="blurred"
                />
            </section>
            <section className="featured-recipes">
                <h5>Featured Recipes</h5>
                <RecipeList recipes={recipes} />
            </section>
        </main>
    </Layout>
)};

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {feature: {eq: true}}
    ) {
      nodes {
        id
        title
        description {
          description
        }
        cookTime
        prepTime
        content {
          id
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`;

export default About;