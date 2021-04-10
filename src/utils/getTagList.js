const getTagList = (recipes) => {
    const tags = {};

    recipes.forEach((recipe) => {
        recipe.content.tags.forEach((tag) => {
            if(tags[tag]){
                tags[tag] = tags[tag] + 1;
            }
            else
            {
                tags[tag] = 1;
            }
        });
    });
    return tags;
};

export default getTagList;