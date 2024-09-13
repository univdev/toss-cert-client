import { FullScreen } from "../../shared/components/FullScreen";
import { css } from "@emotion/css";
import SplashScreenVideo from '../../assets/videos/Splash.mp4';
import { useRedirectToToss } from "../../shared/hooks/useRedirectToToss";

export const SplashScreen = () => {
  const redirectToToss = useRedirectToToss();

  const splashScreenClassName = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  return (
    <FullScreen className={splashScreenClassName}>
      <video
        autoPlay
        src={SplashScreenVideo}
        width={1366}
        height={960}
        style={{
          width: '100%',
        }}
        onEnded={redirectToToss}
      />    
    </FullScreen>
  );
};
