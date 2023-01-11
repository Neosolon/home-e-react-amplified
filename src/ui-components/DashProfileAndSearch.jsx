/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, SearchField, View } from "@aws-amplify/ui-react";
export default function DashProfileAndSearch(props) {
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
      {...getOverrideProps(overrides, "DashProfileAndSearch")}
      {...rest}
    >
      <SearchField
        position="absolute"
        top="2.5px"
        left="0px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "DashSearchField")}
      ></SearchField>
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 12px - 0px)"
        right="77px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "IconContainer")}
      >
        <Icon
          width="16px"
          height="19.5px"
          viewBox={{ minX: 0, minY: 0, width: 16, height: 19.5 }}
          paths={[
            {
              d: "M8 19.5C9.1 19.5 10 18.6 10 17.5L6 17.5C6 18.6 6.9 19.5 8 19.5ZM14 13.5L14 8.5C14 5.43 12.37 2.86 9.5 2.18L9.5 1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5L6.5 2.18C3.64 2.86 2 5.42 2 8.5L2 13.5L0 15.5L0 16.5L16 16.5L16 15.5L14 13.5ZM12 14.5L4 14.5L4 8.5C4 6.02 5.51 4 8 4C10.49 4 12 6.02 12 8.5L12 14.5Z",
              fill: "rgba(184,206,249,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="10.42%"
          bottom="8.33%"
          left="16.67%"
          right="16.67%"
          {...getOverrideProps(overrides, "icon")}
        ></Icon>
      </View>
      <Image
        width="45px"
        height="45px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="388px"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image_profile")}
      ></Image>
    </View>
  );
}
