/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NavBarAltProps } from "./NavBarAlt";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarAltWithProfileMenuOverridesProps = {
    NavBarAltWithProfileMenu?: PrimitiveOverrideProps<FlexProps>;
    NavBarAlt?: NavBarAltProps;
} & EscapeHatchProps;
export declare type NavBarAltWithProfileMenuProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarAltWithProfileMenuOverridesProps | undefined | null;
}>;
export default function NavBarAltWithProfileMenu(props: NavBarAltWithProfileMenuProps): React.ReactElement;
