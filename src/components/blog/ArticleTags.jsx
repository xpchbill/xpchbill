import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

import { onTagChangeAction } from './actions';

import './ArticleTags.scss';

export class ArticleTags extends React.PureComponent {
  render() {
    const { tags } = this.props;

    return tags ? (
      <div className="article-tags">
        <h3>Tags:</h3>
        {
          tags.map((tg, index) =>
            <Checkbox
              label={`${tg.get('name')} (${tg.get('count')})`}
              key={tg.get('name')}
              disabled={tg.get('count') < 1}
              checked={tg.get('selected')}
              onChange={(e, selected) => this.props.onTagChangeAction(index, selected)}
            />
          )
        }
      </div>
    ) : null;
  }
}

export default connect(
  null, {
    onTagChangeAction
  }
)(ArticleTags);
