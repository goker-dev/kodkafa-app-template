import { useCallback, useState } from 'react';
import { storageLocal } from '@/utils/storage.utils';

interface Options<T> {
  defaultValue?: T | null;
}

export const useLocalStorage = <T = any>(key: string, opts: Options<T>) => {
  const { defaultValue } = opts;

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = storageLocal.getItem(key);

      if (value) {
        return JSON.parse(value);
      } else if (defaultValue) {
        storageLocal.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      try {
        storageLocal.setItem(key, JSON.stringify(value));
        setStoredValue(value);
      } catch (err) {
        // SKIP
      }
    },
    [storedValue, setStoredValue],
  );

  return [storedValue, setValue];
};

export default useLocalStorage;
