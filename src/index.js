import fs from 'fs';
import path from 'path';
import R from 'ramda';

export default class NobbbRenderSearch {
  constructor() {
    this.name = 'ajax';
    this.type = 'render';
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  eachArticle(rawDocument, documentInfo, cb) {
    try {
      fs.writeFile(
        path.join(documentInfo.outputDirPath, documentInfo.fileNameWithoutSuffix + '.json'),
        JSON.stringify(R.omit('category', documentInfo)),
        R.identity
      )
    } catch(error) {
      throw error;
    }

  }

  after() {
  }


}
