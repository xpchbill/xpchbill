import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

import { onChangeCategoryAction, onSelectAllCategoriesAction } from './actions';

import './ArticleCategories.scss';

export class ArticleCategories extends React.PureComponent {
  render() {
    const { categories } = this.props;

    return categories ? (
      <div className="article-categories">
        <h3>
          <Checkbox
            label={'分类:'}
            checked={categories.every(cat => cat.get('selected'))}
            onChange={(e, selected) => this.props.onSelectAllCategoriesAction(selected)}
          />
        </h3>
        {
          categories.map((cat, index) =>
            <Checkbox
              label={`${cat.get('name')} (${cat.get('count')})`}
              key={cat.get('name')}
              checked={cat.get('selected')}
              onChange={(e, selected) => this.props.onChangeCategoryAction(index, selected)}
            />
          )
        }

      </div>
    ) : null;
  }
}

export default connect(
  null, {
    onChangeCategoryAction, onSelectAllCategoriesAction
  }
)(ArticleCategories);
