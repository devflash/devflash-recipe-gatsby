import React from 'react';
import { Link } from 'gatsby';
import getTagList from '../../utils/getTagList';

const TagList = ({recipes=[]}) => {
    const tags = getTagList(recipes);
    return (
        <div className="tags-container">
            <h4>Recipes</h4>
            <div className="tags-list">
                {
                    Object.entries(tags).map(([text, value], index) => (
                        <Link to={`/tags/${text}`} key={index}>
                            {text} ({value})
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default TagList;