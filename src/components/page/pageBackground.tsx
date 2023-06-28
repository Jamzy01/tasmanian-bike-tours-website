import { Image } from "@chakra-ui/react";
import React from "react";

interface PageBackgroundProps {
  image: string;
}

function PageBackground({ image }: PageBackgroundProps) {
  const backgroundRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    function scrollEvent() {
      if (backgroundRef.current == null) {
        return;
      }

      let scrollCompletion =
        document.documentElement.scrollTop /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      backgroundRef.current.style.transform = `translate(${0}px, ${
        scrollCompletion * -50
      }px) scale(${1 + scrollCompletion * 0.05})`;
    }

    scrollEvent();

    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  });

  return (
    <Image
      ref={backgroundRef}
      position="fixed"
      left={0}
      top={0}
      zIndex={-1}
      src={image}
      filter="contrast(110%) saturate(70%) opacity(50%)"
      height="150vh"
      width="100vw"
      objectFit="cover"
      userSelect="none"
      transition="transform 2.5s ease-out"
    />
  );
}

export default PageBackground;
