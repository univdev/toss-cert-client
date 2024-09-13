import { useCallback } from "react";

export const useRedirectToToss = () => {
  const redirectToToss = useCallback(() => {
    const tossEndPoint = 'https://tossinvest.com/';

    window.location.href = tossEndPoint;
  }, []);

  return redirectToToss;
};
