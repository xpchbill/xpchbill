import frontMatter from 'front-matter';
import markdownIt from 'markdown-it';
import markdownItSub from 'markdown-it-sub';
import markdownItFootnote from 'markdown-it-footnote';
import markdownItDeflist from 'markdown-it-deflist';
import markdownItAbbr from 'markdown-it-abbr';
import markdownItAttrs from 'markdown-it-attrs';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItDecorate from 'markdown-it-decorate';
import hljs from 'highlight.js';
import objectAssign from 'object-assign';
import mdFigCaption from './figcaption';

const highlight = (str, lang) => {
  if ((lang !== null) && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value;
    } catch (_error) {
      console.error(_error);// eslint-disable-line
    }
  }
  try {
    return hljs.highlightAuto(str).value;
  } catch (_error) {
    console.error(_error);// eslint-disable-line
  }
  return '';
};

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight
}).use(mdFigCaption)
  .use(markdownItSub)
  .use(markdownItFootnote)
  .use(markdownItDeflist)
  .use(markdownItAbbr)
  .use(markdownItAttrs)
  .use(markdownItDecorate)
  .use(markdownItAnchor, {
    level: 1,
    permalink: false,
    permalinkClass: 'header-anchor',
    permalinkSymbol: '¶',
    permalinkBefore: false
  });

module.exports = function bootstrap(content) {
  this.cacheable();
  const meta = frontMatter(content);
  const body = md.render(meta.body);
  const result = objectAssign({}, meta.attributes, {
    body
  });
  this.value = result;
  return `module.exports = ${JSON.stringify(result)}`;
};
