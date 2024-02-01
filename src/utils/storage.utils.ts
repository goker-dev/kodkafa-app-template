const PREFIX = import.meta.env.VITE_PROJECT;
const specifyKey = (key: string) => `${PREFIX}-${key}`;
export const storageLocal = {
  setItem: (key: string, value: string) => localStorage.setItem(specifyKey(key), value),
  getItem: (key: string) => localStorage.getItem(specifyKey(key)),
  removeItem: (key: string) => localStorage.removeItem(specifyKey(key)),
};
export const storageSession = {
  setItem: (key: string, value: string) => sessionStorage.setItem(specifyKey(key), value),
  getItem: (key: string) => sessionStorage.getItem(specifyKey(key)),
  removeItem: (key: string) => sessionStorage.removeItem(specifyKey(key)),
};
