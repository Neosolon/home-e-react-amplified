/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NavBarAlt from "./NavBarAlt";
import { Flex } from "@aws-amplify/ui-react";
export default function NavBarAltWithProfileMenu(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NavBarAltWithProfileMenu")}
      {...rest}
    >
      <NavBarAlt
        display="flex"
        gap="20px"
        direction="row"
        width="1440px"
        height="95px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(4,52,149,1)"
        property1="Default"
        {...getOverrideProps(overrides, "NavBarAlt")}
      ></NavBarAlt>
    </Flex>
  );
}
