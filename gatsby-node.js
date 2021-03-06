const path = require('path');
exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;

    const result = await graphql(`
        query Getrecipes {
            allContentfulRecipe {
              nodes {
                content {
                  tags
                }
              }
            }
        }
    `);

    result.data.allContentfulRecipe.nodes.forEach((recipe) => {
        recipe.content.tags.forEach((tag) => {
            createPage({
                path: `/tags/${tag}`,
                component: path.resolve('src/templates/tag-template.js'),
                context: {
                    tag
                }
            })
        })
    })
};