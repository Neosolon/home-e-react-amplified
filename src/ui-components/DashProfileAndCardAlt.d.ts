/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, SearchFieldProps, ViewProps } from "@aws-amplify/ui-react";
import { ProfileCardProps } from "./ProfileCard";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DashProfileAndCardAltOverridesProps = {
    DashProfileAndCardAlt?: PrimitiveOverrideProps<ViewProps>;
    DashProfile?: PrimitiveOverrideProps<FlexProps>;
    DashSearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    IconContainer?: PrimitiveOverrideProps<ViewProps>;
    icon?: PrimitiveOverrideProps<IconProps>;
    ProfileIconContainer?: PrimitiveOverrideProps<ViewProps>;
    image_profile?: PrimitiveOverrideProps<ImageProps>;
    ProfileCard?: ProfileCardProps;
} & EscapeHatchProps;
export declare type DashProfileAndCardAltProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DashProfileAndCardAltOverridesProps | undefined | null;
}>;
export default function DashProfileAndCardAlt(props: DashProfileAndCardAltProps): React.ReactElement;
