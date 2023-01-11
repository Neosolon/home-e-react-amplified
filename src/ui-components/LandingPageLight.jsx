/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NavBar from "./NavBar";
import { View } from "@aws-amplify/ui-react";
export default function LandingPageLight(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1024px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "LandingPageLight")}
      {...rest}
    >
      <NavBar
        display="flex"
        gap="20px"
        direction="row"
        width="1440px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        property1="Default"
        {...getOverrideProps(overrides, "NavBar")}
      ></NavBar>
    </View>
  );
}
