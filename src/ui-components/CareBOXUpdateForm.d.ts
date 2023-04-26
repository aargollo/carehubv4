/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CareBOX } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CareBOXUpdateFormInputValues = {
    deviceId?: string;
    timeStamp?: string;
    alarmeO2?: string;
    alarmeCACO2?: string;
    temperatura?: string;
    umidade?: string;
    concentracaoCO2?: string;
    particulados1um?: string;
    particulados25um?: string;
    particulados10um?: string;
    cargaO2?: string;
};
export declare type CareBOXUpdateFormValidationValues = {
    deviceId?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
    alarmeO2?: ValidationFunction<string>;
    alarmeCACO2?: ValidationFunction<string>;
    temperatura?: ValidationFunction<string>;
    umidade?: ValidationFunction<string>;
    concentracaoCO2?: ValidationFunction<string>;
    particulados1um?: ValidationFunction<string>;
    particulados25um?: ValidationFunction<string>;
    particulados10um?: ValidationFunction<string>;
    cargaO2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CareBOXUpdateFormOverridesProps = {
    CareBOXUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    deviceId?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
    alarmeO2?: PrimitiveOverrideProps<TextFieldProps>;
    alarmeCACO2?: PrimitiveOverrideProps<TextFieldProps>;
    temperatura?: PrimitiveOverrideProps<TextFieldProps>;
    umidade?: PrimitiveOverrideProps<TextFieldProps>;
    concentracaoCO2?: PrimitiveOverrideProps<TextFieldProps>;
    particulados1um?: PrimitiveOverrideProps<TextFieldProps>;
    particulados25um?: PrimitiveOverrideProps<TextFieldProps>;
    particulados10um?: PrimitiveOverrideProps<TextFieldProps>;
    cargaO2?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CareBOXUpdateFormProps = React.PropsWithChildren<{
    overrides?: CareBOXUpdateFormOverridesProps | undefined | null;
} & {
    id?: {
        deviceId: string;
        timeStamp: string;
    };
    careBOX?: CareBOX;
    onSubmit?: (fields: CareBOXUpdateFormInputValues) => CareBOXUpdateFormInputValues;
    onSuccess?: (fields: CareBOXUpdateFormInputValues) => void;
    onError?: (fields: CareBOXUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CareBOXUpdateFormInputValues) => CareBOXUpdateFormInputValues;
    onValidate?: CareBOXUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CareBOXUpdateForm(props: CareBOXUpdateFormProps): React.ReactElement;
