import { Box, Divider, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import PageBackground from "../../components/page/pageBackground";
import PageSetup from "../../components/page/pageSetup";
import StarRatings from "react-star-ratings";

import background from "./assets/background.jpg";

interface AccomodationOverviewProps {
  title: string;
  children: React.ReactNode; // description
  video: React.ReactNode;
  rating: number;
}

interface ControllessYoutubeVideoProps {
  videoId: string;
}

function ControllessYoutubeVideo({ videoId }: ControllessYoutubeVideoProps) {
  return (
    <iframe
      width="100%"
      style={{
        aspectRatio: 16 / 9,
      }}
      src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0&loop=1&playlist=${videoId}&autoplay=true&mute=1`}
      allow="autoplay"
    />
  );
}

interface ControllessVideoProps {
  source: string;
}

function ControllessVideo({ source }: ControllessVideoProps) {
  return (
    <video
      src={source}
      width="100%"
      style={{
        aspectRatio: 16 / 9,
      }}
      autoPlay={true}
      controls={false}
      loop={true}
      disablePictureInPicture
      disableRemotePlayback
      muted
    />
  );
}

interface ControllessVimeoVideoProps {
  videoId: string;
}

function ControllessVimeoVideo({ videoId }: ControllessVimeoVideoProps) {
  return (
    <iframe
      src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&loop=1&byline=0&portrait=0&background=1`}
      width="100%"
      style={{
        aspectRatio: 16 / 9,
      }}
      allow="autoplay"
    />
  );
}

function AccomodationOverview({
  title,
  children,
  rating,
  video,
}: AccomodationOverviewProps) {
  return (
    <GridItem
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="8"
      bg="gray.50"
      padding="16"
      color="gray.600"
    >
      <Box fontSize="xl" display="flex" alignItems="center" gap="4">
        <Text lineHeight="initial" fontWeight="500" letterSpacing="wide">
          {title}
        </Text>
        <StarRatings rating={rating} starDimension="26px" starSpacing="2px" />
      </Box>
      <Box borderRadius="md" overflow="clip" width="100%">
        {video}
      </Box>
      <Text textAlign="center" fontSize="md">
        {children}
      </Text>
    </GridItem>
  );
}

function AccomodationPage() {
  return (
    <PageSetup>
      <PageBackground image={background} />
      <Box display="flex" justifyContent="center" paddingY="16">
        <Heading
          display="flex"
          flexDirection="column"
          gap="2"
          justifyContent="center"
          alignItems="center"
          fontSize="6xl"
          bg="whiteAlpha.400"
          minWidth="60%"
          padding="16"
          whiteSpace="nowrap"
        >
          <Divider
            width="40%"
            borderBottomWidth="1px"
            borderColor="whiteAlpha.500"
          />
          Accomodation
          <Divider
            width="40%"
            borderBottomWidth="1px"
            borderColor="whiteAlpha.500"
          />
        </Heading>
      </Box>
      <Grid templateColumns="1fr 1fr" gap="16" marginBottom="16">
        <AccomodationOverview
          title="Peppers Silo Hotel"
          video={<ControllessYoutubeVideo videoId="ArScn9fs2tg" />}
          rating={4.5}
        >
          Experience luxury and history intertwined at the iconic Peppers Silo
          Hotel in Tasmania. Housed within towering heritage grain silos, this
          breathtaking accommodation offers unrivaled panoramic views of the
          Tamar River and Launceston cityscape. Indulge in exquisite dining,
          relax in stylishly curated rooms, and immerse yourself in the rich
          cultural tapestry of this unique architectural masterpiece.
        </AccomodationOverview>
        <AccomodationOverview
          title="Piermont Retreat"
          video={
            <ControllessVideo source="https://piermont.com.au/dist/video/piermont-video-new.webm" />
          }
          rating={4.4}
        >
          Escape to serenity and seclusion at Piermont Retreat, a hidden gem
          nestled amidst the stunning landscapes of Tasmania. Surrounded by lush
          forests and overlooking the picturesque Great Oyster Bay, this idyllic
          retreat is a haven of tranquility. Unwind in beautifully appointed
          cottages, savor gourmet cuisine inspired by local flavors, and
          rejuvenate your senses with nature walks and beachfront bliss.
        </AccomodationOverview>
        <AccomodationOverview
          title="Henry Jones Art Hotel"
          video={<ControllessVimeoVideo videoId="496701258" />}
          rating={4.7}
        >
          Escape to serenity and seclusion at Piermont Retreat, a hidden gem
          nestled amidst the stunning landscapes of Tasmania. Surrounded by lush
          forests and overlooking the picturesque Great Oyster Bay, this idyllic
          retreat is a haven of tranquility. Unwind in beautifully appointed
          cottages, savor gourmet cuisine inspired by local flavors, and
          rejuvenate your senses with nature walks and beachfront bliss.
        </AccomodationOverview>
      </Grid>
    </PageSetup>
  );
}

export default AccomodationPage;
