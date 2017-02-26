import { fromJS } from 'immutable';

export const parsePCT = (pages) => {
  let tags = fromJS({});
  let categories = fromJS({});
  const sortedPages = fromJS(pages).map((page) => {
    const tagsInData = page.getIn(['data', 'tags']);
    const categoriesInData = page.getIn(['data', 'categories']);
    let returnPage = page;
    if (!tagsInData || !tagsInData.size) {
      returnPage = returnPage.setIn(['data', 'tags'], fromJS(['others']));
    }
    if (!categoriesInData || !categoriesInData.size) {
      returnPage = returnPage.setIn(['data', 'categories'], fromJS(['others']));
    }
    return returnPage;
  }).sortBy((page) => {
    page.getIn(['data', 'tags']).forEach((cat) => {
      tags = tags.mergeWith((a, b) => {
        const count = b.get('count');
        return a && a.get('name') === b.get('name') ? b.set('count', a.get('count') + count) : b;
      },
        fromJS({ [cat]: { name: cat, selected: true, count: 1 } })
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

export const filterPCT = (allPages, allCategories, allTags) => {
  const selectedCategoriesNames = allCategories.filter(cat => cat.get('selected')).map(cat => cat.get('name'));
  const { sortedPages, tags } = parsePCT(allPages.filter((page) => {
    const dataCats = page.getIn(['data', 'categories']);
    return dataCats.find(cat => selectedCategoriesNames.find(c => c === cat));
  }));
  const selectedTagsNames = allTags.filter(tg => tg.get('selected')).map(tg => tg.get('name'));
  return {
    pages: sortedPages.filter((page) => {
      const dataTags = page.getIn(['data', 'tags']);
      return dataTags.find(tg => selectedTagsNames.find(t => t === tg));
    }),
    tags: allTags.map((tg) => {
      let tage = tg;
      if (tags.get(tg.get('name'))) {
        tage = tage.set('count', tags.getIn([tg.get('name'), 'count']));
      } else {
        tage = tage.set('count', 0);
      }
      return tage;
    })
  };
};

export default parsePCT;
