import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

import { onChangeTagAction, onSelectAllTagsAction } from './actions';

import './ArticleTags.scss';

export class ArticleTags extends React.PureComponent {
  render() {
    const { tags } = this.props;

    return tags ? (
      <div className="article-tags">
        <h3>
          <Checkbox
            label={'标签:'}
            checked={tags.every(tg => tg.get('selected'))}
            disabled={tags.every(tg => tg.get('count') < 1)}
            onChange={(e, selected) => this.props.onSelectAllTagsAction(selected)}
          />
        </h3>
        {
          tags.map((tg, index) =>
            <Checkbox
              label={`${tg.get('name')} (${tg.get('count')})`}
              key={tg.get('name')}
              disabled={tg.get('count') < 1}
              checked={tg.get('selected')}
              onChange={(e, selected) => this.props.onChangeTagAction(index, selected)}
            />
          )
        }
      </div>
    ) : null;
  }
}

export default connect(
  null, {
    onChangeTagAction, onSelectAllTagsAction
  }
)(ArticleTags);
