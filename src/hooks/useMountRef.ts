import { useEffect, useRef } from 'react';

const useMountRef = () => {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  });

  return mounted;
};

export default useMountRef;
