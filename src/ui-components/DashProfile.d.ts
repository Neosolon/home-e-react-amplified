/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, SearchFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DashProfileOverridesProps = {
    DashProfile?: PrimitiveOverrideProps<FlexProps>;
    DashSearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    IconContainer?: PrimitiveOverrideProps<ViewProps>;
    icon?: PrimitiveOverrideProps<IconProps>;
    ProfileIconContainer?: PrimitiveOverrideProps<ViewProps>;
    image_profile?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type DashProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DashProfileOverridesProps | undefined | null;
}>;
export default function DashProfile(props: DashProfileProps): React.ReactElement;
