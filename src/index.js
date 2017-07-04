import fs from 'fs';
import path from 'path';
import R from 'ramda';

export default class NobbbRenderAjax {
  constructor(meta) {
    this.name = 'ajax';
    this.type = 'render';

    this.meta = meta;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  afterArticleRender(rawDocument, articleData, cb) {
    try {
      fs.writeFileSync(
        path.join(
          articleData.categoryOutputPath,
          articleData.articleFileNameWithoutSuffix + '.json'
        ),
        JSON.stringify(articleData)
      );
    } catch (error) {
      throw error;
    }
  }

  afterwCategoryListRender(data) {
    fs.writeFileSync(
      path.join(this.meta.outputRootPath, 'categorys.json'),
      JSON.stringify(data)
    );
  }

  afterwCategoryRender(rendered, data) {
    fs.writeFileSync(
      path.join(data.categoryPath, 'index.json'),
      JSON.stringify(data)
    );
  }

  afterIndexRender(indexData) {
    fs.writeFileSync(
      path.join(this.meta.outputRootPath, 'index.json'),
      JSON.stringify(JSON.stringify(indexData))
    );
  }

  afterRender() {}
}
