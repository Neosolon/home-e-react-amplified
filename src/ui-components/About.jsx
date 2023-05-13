/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import HeroLayout2 from "./HeroLayout2";
import FeaturesText2x2 from "./FeaturesText2x2";
import HeroLayout1 from "./HeroLayout1";
import { Flex } from "@aws-amplify/ui-react";
export default function About(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1274px"
      height="1940px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "About")}
      {...rest}
    >
      <HeroLayout2
        width="unset"
        height="858px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "HeroLayout2")}
      ></HeroLayout2>
      <FeaturesText2x2
        display="flex"
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="40px 140px 40px 140px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "FeaturesText2x2")}
      ></FeaturesText2x2>
      <HeroLayout1
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="500px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        mode="Light"
        {...getOverrideProps(overrides, "HeroLayout1")}
      ></HeroLayout1>
    </Flex>
  );
}
