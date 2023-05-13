/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
import DashProfile from "./DashProfile";
export default function NavBarAlt(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        image_logo: {},
        label_logo: {},
        LogoDashContainer: {},
        ButtonDash: {},
        ButtonSecond: {},
        ButtonThird: {},
        HamburgerDash: {},
        DashButtonContainer: {},
        DashProfile: {},
        NavBarAlt: {},
      },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="30px"
      direction="row"
      width="1448px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="19px 30px 19px 30px"
      backgroundColor="rgba(4,52,149,1)"
      display="flex"
      {...getOverrideProps(overrides, "NavBarAlt")}
      {...rest}
    >
      <Flex
        gap="2px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "LogoDashContainer")}
      >
        <Image
          width="25px"
          height="25px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image_logo")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          textTransform="capitalize"
          lineHeight="24.204544067382812px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="HomeE"
          {...getOverrideProps(overrides, "label_logo")}
        ></Text>
      </Flex>
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="54px"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "DashButtonContainer")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Dashboard"
          {...getOverrideProps(overrides, "ButtonDash")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Finances"
          {...getOverrideProps(overrides, "ButtonSecond")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Nutrition"
          {...getOverrideProps(overrides, "ButtonThird")}
        ></Button>
        <Icon
          width="4px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 4, height: 16 }}
          paths={[
            {
              d: "M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "HamburgerDash")}
        ></Icon>
      </Flex>
      <DashProfile
        display="flex"
        gap="32px"
        direction="row"
        width="433px"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 15px 0px 0px"
        {...getOverrideProps(overrides, "DashProfile")}
      ></DashProfile>
    </Flex>
  );
}
