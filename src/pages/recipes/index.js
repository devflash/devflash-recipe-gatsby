import React from 'react';
import Layout from '../../component/Layout';
import AllRecipes from '../../component/Recipes';
import SEO from '../../component/SEO';

const Recipes = () => (
    <main className="page">
        <SEO title="Recipes"/>
        <Layout>
            <AllRecipes/>
        </Layout>
    </main>
);


export default Recipes;