/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, SearchFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DashProfileAndSearchOverridesProps = {
    DashProfileAndSearch?: PrimitiveOverrideProps<ViewProps>;
    DashSearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    IconContainer?: PrimitiveOverrideProps<ViewProps>;
    icon?: PrimitiveOverrideProps<IconProps>;
    image_profile?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type DashProfileAndSearchProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DashProfileAndSearchOverridesProps | undefined | null;
}>;
export default function DashProfileAndSearch(props: DashProfileAndSearchProps): React.ReactElement;
