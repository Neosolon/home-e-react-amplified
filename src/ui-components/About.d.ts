/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HeroLayout2Props } from "./HeroLayout2";
import { FeaturesText2x2Props } from "./FeaturesText2x2";
import { HeroLayout1Props } from "./HeroLayout1";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AboutOverridesProps = {
    About?: PrimitiveOverrideProps<FlexProps>;
    HeroLayout2?: HeroLayout2Props;
    FeaturesText2x2?: FeaturesText2x2Props;
    HeroLayout1?: HeroLayout1Props;
} & EscapeHatchProps;
export declare type AboutProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AboutOverridesProps | undefined | null;
}>;
export default function About(props: AboutProps): React.ReactElement;
