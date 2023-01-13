/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { DashProfileProps } from "./DashProfile";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarAltOverridesProps = {
    NavBarAlt?: PrimitiveOverrideProps<FlexProps>;
    LogoDashContainer?: PrimitiveOverrideProps<FlexProps>;
    image_logo?: PrimitiveOverrideProps<ImageProps>;
    label_logo?: PrimitiveOverrideProps<TextProps>;
    DashButtonContainer?: PrimitiveOverrideProps<FlexProps>;
    ButtonDash?: PrimitiveOverrideProps<ButtonProps>;
    ButtonSecond?: PrimitiveOverrideProps<ButtonProps>;
    ButtonThird?: PrimitiveOverrideProps<ButtonProps>;
    HamburgerDash?: PrimitiveOverrideProps<IconProps>;
    DashProfile?: DashProfileProps;
} & EscapeHatchProps;
export declare type NavBarAltProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default";
} & {
    overrides?: NavBarAltOverridesProps | undefined | null;
}>;
export default function NavBarAlt(props: NavBarAltProps): React.ReactElement;
