/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import ProfileCard from "./ProfileCard";
import DashProfile from "./DashProfile";
import { View } from "@aws-amplify/ui-react";
export default function DashProfileAndCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="433px"
      height="45px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "DashProfileAndCard")}
      {...rest}
    >
      <ProfileCard
        display="flex"
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="62px"
        right="0px"
        padding="24px 24px 24px 24px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ProfileCard")}
      ></ProfileCard>
      <DashProfile
        display="flex"
        gap="32px"
        direction="row"
        width="433px"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 15px 0px 0px"
        {...getOverrideProps(overrides, "DashProfile")}
      ></DashProfile>
    </View>
  );
}
