export const KEYS = {
  USER: "USER",
  ROLE: "ROLE",
};

class Cache {
  cache: Storage | null = null;
  constructor() {
    this.cache = localStorage;
  }

  get = (key: any) => {
    let data = this.cache?.getItem(key);
    if (data === null || data === undefined) return null;
    else return JSON.parse(data);
  };

  set = (key: any, value: any) => {
    if (value === null) {
      this.cache?.removeItem(key);
    } else {
      try {
        this.cache?.setItem(key, JSON.stringify(value));
      } catch (e) {
        // May throw exception if not enough memory allocated or in Safari's private mode
      }
    }
  };
}

export const localCache = new Cache();
