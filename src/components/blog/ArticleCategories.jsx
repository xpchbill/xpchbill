import React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

import './ArticleCategories.scss';

export default class ArticleCategories extends React.Component {
  render() {
    const { categories } = this.props;

    return (
      <div className="article-categories">
        <h2>Categories</h2>
        {
          categories.map(cat =>
            <Checkbox
              label={cat}
              key={cat}
              defaultChecked={true}
            />
          )
        }

      </div>
    );
  }
}
