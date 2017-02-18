import { fromJS } from 'immutable';

export const processPages = (pages) => {
  let tags = fromJS({});
  let categories = fromJS({});
  const sortedPages = fromJS(pages).sortBy((page) => {
    page.getIn(['data', 'tags']).forEach((cat) => {
      tags = tags.mergeWith((a, b) => {
        const count = b.get('count');
        return a && a.get('name') === b.get('name') ? b.set('count', a.get('count') + count) : b;
      },
        fromJS({ [cat]: { name: cat, selected: true, count: 1, disable: false } })
      );
    });
    page.getIn(['data', 'categories']).forEach((cat) => {
      categories = categories.mergeWith((a, b) => {
        const count = b.get('count');
        return a && a.get('name') === b.get('name') ? b.set('count', a.get('count') + count) : b;
      },
        fromJS({ [cat]: { name: cat, selected: true, count: 1 } })
      );
    });
    return page.getIn(['data', 'date']);
  }).reverse();
  return {
    sortedPages,
    tags,
    categories
  };
};

export default processPages;
