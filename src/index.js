import fs from 'fs';
import path from 'path';
import R from 'ramda';

export default class NobbbRenderSearch {
  constructor(configure) {
    this.name = 'ajax';
    this.type = 'render';

    this.configure = configure;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  afterIndexRender(indexData) {

  }

  afterArticleRender(rawDocument, articleData, cb) {
    try {
      fs.writeFile(
        path.join(articleData.outputDirPath, articleData.fileNameWithoutSuffix + '.json'),
        JSON.stringify(R.omit('category', articleData)),
        R.identity
      )
    } catch(error) {
      throw error;
    }
  }

  afterIndexRender(indexData) {
    fs.writeFile(
      path.join(this.configure.outputRoot, 'index.json'),
      JSON.stringify(indexData)
    )
  }

  afterRender() {
  }


}
