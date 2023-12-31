import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import PageSetup from "../../components/page/pageSetup";
import background from "./assets/background.jpg";
import Quote from "../../components/quote/quote";

import alcohol from "./assets/feature_showcase/alcohol.jpg";
import shore from "./assets/feature_showcase/shore.jpg";
import cheese_platter from "./assets/feature_showcase/cheese_platter.jpg";
import hotel_room from "./assets/feature_showcase/hotel_room.jpg";
import bike_riding from "./assets/feature_showcase/bike_riding.jpg";

import gorge from "./assets/days_overview/day1+2/gorge.jpg";
import launceston_silo_hotel from "./assets/days_overview/day1+2/launceston_silo_hotel.png";

import artifakt_cafe from "./assets/days_overview/day3/artifakt_cafe.jpeg";
import piermount_retreat from "./assets/days_overview/day3/piermount_retreat.jpeg";

import henry_jones_art_hotel from "./assets/days_overview/day4/henry_jones_art_hotel.jpg";
import mount_wellington from "./assets/days_overview/day4/mount_wellington.png";

import mona_museum from "./assets/days_overview/day5/mona_museum.webp";
import salamanca_market from "./assets/days_overview/day5/salamanca_market.webp";

import PageBackground from "../../components/page/pageBackground";

interface PlanProps {
  title: string;
  features: string[];
  images: string[];
}

function Plan({ title, features, images }: PlanProps) {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box
        letterSpacing="wide"
        fontSize="3xl"
        fontWeight="bold"
        color="gray.50"
      >
        <Text>{title}</Text>
        <UnorderedList fontSize="lg" fontWeight="400" marginTop="4" spacing="1">
          {features.map((feature) => (
            <ListItem>{feature}</ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Box display="flex" gap="8">
        {images.map((image) => (
          <Image
            src={image}
            key={image}
            height="48"
            shadow="md"
            borderRadius="md"
          />
        ))}
      </Box>
    </Box>
  );
}

function SectionBackground() {
  return (
    <Box display="flex" justifyContent="center">
      <Box
        position="absolute"
        width="100vw"
        height="100%"
        bg="gray.50"
        borderRadius="sm"
        zIndex={-1}
      />
    </Box>
  );
}

function HomePage() {
  return (
    <PageSetup>
      <Heading fontSize="6xl" marginTop="16">
        Velour
      </Heading>
      <PageBackground image={background} />
      <Text marginTop="4" fontSize="xl" maxWidth="70%">
        Take a trip down Tasmania's east coast taking in the views and produce
        without the hassle of transport and picking places to travel.
      </Text>
      <Box
        bg="whiteAlpha.400"
        marginTop="16"
        padding="12"
        backdropFilter="blur(1px) brightness(90%)"
        borderRadius="sm"
      >
        <Quote>An experience like nothing you've ever seen before</Quote>
      </Box>
      <Box position="relative" marginTop="16">
        <SectionBackground />
        <Box padding="16">
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            gap="2"
          >
            <Text fontSize="xl" textAlign="center" color="gray.900">
              All inclusive trips with luxurious accomodation and local gourment
              food and wine, that showcase the beautiful east side of tasmania,
              without the hassle of planning destinations and navigation, all
              you have to do is escape to nature
            </Text>
            <Divider
              width="8%"
              borderBottomWidth="1px"
              borderColor="blackAlpha.500"
            />
            <Text fontSize="lg" textAlign="center" color="black" maxWidth="70%">
              Join us on a trip lasting 1 to 5 days, we cater for those who want
              a splendid fine dining experience and we also cater for those who
              are up for a physical challenge
            </Text>
          </Box>
          <Grid
            templateColumns="1fr 1fr 1fr"
            templateRows="1fr 1fr 1fr"
            height="1000px"
            gap="8"
            marginTop="16"
          >
            <GridItem
              rowSpan={2}
              colSpan={1}
              bgImage={alcohol}
              backgroundSize="cover"
              shadow="xl"
            />
            <GridItem
              rowSpan={1}
              colSpan={2}
              bgImage={shore}
              backgroundPosition="0% 50%"
              backgroundSize="cover"
              shadow="xl"
            />
            <GridItem
              rowSpan={2}
              colSpan={1}
              bgImage={cheese_platter}
              backgroundSize="cover"
              shadow="xl"
            />
            <GridItem
              rowSpan={2}
              colSpan={1}
              bgImage={hotel_room}
              backgroundSize="cover"
              shadow="xl"
            />
            <GridItem
              rowSpan={1}
              colSpan={1}
              bgImage={bike_riding}
              backgroundPosition="0% 70%"
              backgroundSize="cover"
              shadow="xl"
            />
          </Grid>
        </Box>
      </Box>
      <Box marginTop="16">
        <Heading fontSize="4xl">What's included</Heading>
        <Box display="flex" flexDirection="column" gap="8" marginTop="12">
          <Plan
            title="Day 1 & 2"
            features={[
              "Duck reach walk",
              "Lunch at Stillwater",
              "Trip to East Tamar Winery",
              "Dinner at Launceston Silo Cafe",
              "Accomodation at the Launceston Silo",
            ]}
            images={[gorge, launceston_silo_hotel]}
          />
          <Plan
            title="Day 3"
            features={[
              "Breakfast at Launceston Silo",
              "Trip to Swansea",
              "Swansea foreshore cycling experience",
              "Lunch at Artifakt Cafe",
              "Accomodation at Piermount Retreat",
            ]}
            images={[artifakt_cafe, piermount_retreat]}
          />
          <Plan
            title="Day 4"
            features={[
              "Travel to hobart",
              "Visit to Mona Art Gallery",
              "Lunch at The Rockwall Bar and Grill",
              "Travel to Mount Kunanyi",
              "Dinner at The Black Footed Pig",
              "Accomodation at The Henry Jones Art Hotel",
            ]}
            images={[mount_wellington, henry_jones_art_hotel]}
          />
          <Plan
            title="Day 5"
            features={[
              "Breakfast at The Henry Jones Art Hotel",
              "Visit the Salamanca Market",
            ]}
            images={[mona_museum, salamanca_market]}
          />
        </Box>
      </Box>
      <Box paddingY="16" position="relative" color="gray.900">
        <SectionBackground />
        <Heading
          fontSize="4xl"
          fontFamily="Inter"
          color="gray.800"
          marginY="8"
          letterSpacing="wide"
          display="flex"
          gap="4"
        >
          <Box height="1lh" bg="blackAlpha.200" aspectRatio={1 / 6} />
          Our passion
        </Heading>
        <Text fontSize="xl">
          Tasmania is a beautiful state with pristine lakes and untouched
          national parks throughout. Exploring the best parts of the state is
          not easy with almost no public transport and unforgiving roads, and
          finding the best spots to travel to can be difficult, which often only
          the locals know of. Our program will show the best part of Tasmania,
          no hassle with planning out a route, and no hassle having to rent
          dodgy cars that break down.
        </Text>
      </Box>
    </PageSetup>
  );
}

export default HomePage;
