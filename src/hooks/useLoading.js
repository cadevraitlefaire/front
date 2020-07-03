import { useEffect, useState } from 'react';

export const useLoading = promises => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Promise.all(promises.map(p => p())).then(() => setIsLoading(false))
  }, [promises]);

  return isLoading;
};
