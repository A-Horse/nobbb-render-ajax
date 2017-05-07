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
    console.log(documentInfo);
    try {
      fs.writeFile(
        path.join(documentInfo.outputDirPath, documentInfo.fileNameWithoutSuffix + '.json'),
        JSON.stringify(R.omit('category', documentInfo)),
        () => {

        }
      )
    } catch(error) {
      throw error;
    }

  }

  after() {
  }


}
