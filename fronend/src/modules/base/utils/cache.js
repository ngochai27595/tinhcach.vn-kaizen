export const KEYS = {
  USER: 'USER',
  ROLE: 'ROLE',
  CHAT: 'CHAT',
};

class Cache {
  cache = null;
  constructor() {
    this.cache = localStorage;
  }

  get = (key) => {
    let data = this.cache.getItem(key);
    if (data === null) return null;
    return JSON.parse(data);
  };

  set = (key, value) => {
    if (value === null) {
      this.cache.removeItem(key);
    } else {
      try {
        this.cache.setItem(key, JSON.stringify(value));
      } catch (e) {
        // May throw exception if not enough memory allocated or in Safari's private mode
      }
    }
  };
}

export const localCache = new Cache();
