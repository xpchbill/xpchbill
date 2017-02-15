/* eslint-disable */
import prompt from 'prompt';
import mkdirp from 'mkdirp';
import moment from 'moment';
import yaml from 'js-yaml';
/* eslint-enable */
import snakeCase from 'lodash/snakeCase';
import fs from 'fs';

prompt.start();

/*eslint-disable */
prompt.get(['title'], (err, result) => {
  'use strict'
  const dir = `./pages/blog/${ moment().format('YYYY-MM-DD') }-${ snakeCase(result.title) }`
  mkdirp.sync(dir)

  let postFileStr = '---\n'

  const frontmatter = {
    title: result.title,
    date: moment().toJSON(),
    layout: 'post',
    draft: true,
    place: 'blog',
    tags: ['blog', '.md'],
    categories: null,
    coverPhoto: null
  }

  postFileStr += yaml.safeDump(frontmatter)
  postFileStr += '---\n'

  fs.writeFileSync(`${ dir }/index.md`, postFileStr, {
    encoding: 'utf-8',
  })

  return console.log(dir);
})
