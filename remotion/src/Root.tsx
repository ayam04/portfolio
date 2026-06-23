import "./index.css";
import { Composition } from "remotion";
import { Reel } from "./Reel";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AyamReel"
        component={Reel}
        durationInFrames={390}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
