import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

import { onCategoryChangeAction } from './actions';

import './ArticleCategories.scss';

export class ArticleCategories extends React.PureComponent {
  render() {
    const { categories } = this.props;
// debugger;
    return categories ? (
      <div className="article-categories">
        <h2>Categories</h2>
        {
          categories.map((cat, index) =>
            <Checkbox
              label={cat.get('name')}
              key={cat.get('name')}
              checked={cat.get('selected')}
              onChange={(e, selected) => this.props.onCategoryChangeAction(index, selected)}
            />
          )
        }

      </div>
    ) : null;
  }
}

export default connect(
  null, {
    onCategoryChangeAction
  }
)(ArticleCategories);
