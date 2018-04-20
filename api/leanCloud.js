import AV from 'leancloud-storage';
// import { AV_APP_ID as appId, AV_APP_KEY as appKey } from '../constants/leanCloud';
const APP_ID = '97SR6GXJ6L8a8k7DbY679XDI-gzGzoHsz';
const APP_KEY = 'Ei1Yd6bUBQJNT8QzpN6rUDm8';

class LeanCloudAPI {
  constructor() {
    this.AV = null;
    this.username = null;
  }

  async init() {
    AV.init({
      appId: APP_ID,
      appKey: APP_KEY
    });
    // AV.init({ appId, appKey });
    this.AV = AV;
    const TestObject = this.AV.Object.extend('TestObject');
    const testObject = new TestObject();
    await testObject.save({ words: '初始化项目!' });
    console.log('start');
  }

  async login(username, password) {
    const result = await this.AV.User.logIn(username, password);
    this.username = username;
    return result;
  }

  async logout() {
    if (this.AV) {
      return await this.AV.User.logOut();
    }
  }
}

export default new LeanCloudAPI();
