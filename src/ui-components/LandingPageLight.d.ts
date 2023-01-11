/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NavBarProps } from "./NavBar";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LandingPageLightOverridesProps = {
    LandingPageLight?: PrimitiveOverrideProps<ViewProps>;
    NavBar?: NavBarProps;
} & EscapeHatchProps;
export declare type LandingPageLightProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LandingPageLightOverridesProps | undefined | null;
}>;
export default function LandingPageLight(props: LandingPageLightProps): React.ReactElement;
