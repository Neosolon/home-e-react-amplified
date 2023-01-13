/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ProfileCardProps } from "./ProfileCard";
import { DashProfileProps } from "./DashProfile";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DashProfileAndCardOverridesProps = {
    DashProfileAndCard?: PrimitiveOverrideProps<ViewProps>;
    ProfileCard?: ProfileCardProps;
    DashProfile?: DashProfileProps;
} & EscapeHatchProps;
export declare type DashProfileAndCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DashProfileAndCardOverridesProps | undefined | null;
}>;
export default function DashProfileAndCard(props: DashProfileAndCardProps): React.ReactElement;
