/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, SearchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    image_logo?: PrimitiveOverrideProps<ImageProps>;
    HomeE?: PrimitiveOverrideProps<TextProps>;
    LogoDashContainer?: PrimitiveOverrideProps<FlexProps>;
    Dashboard?: PrimitiveOverrideProps<TextProps>;
    Finances?: PrimitiveOverrideProps<TextProps>;
    Nutrition?: PrimitiveOverrideProps<TextProps>;
    Schedule?: PrimitiveOverrideProps<TextProps>;
    HamburgerDash?: PrimitiveOverrideProps<IconProps>;
    DashProfileAndSearch?: PrimitiveOverrideProps<FlexProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    image_profile?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default";
} & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
