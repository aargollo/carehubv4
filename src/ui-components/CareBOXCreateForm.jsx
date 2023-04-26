/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CareBOX } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CareBOXCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    deviceId: "",
    timeStamp: "",
    alarmeO2: "",
    alarmeCACO2: "",
    temperatura: "",
    umidade: "",
    concentracaoCO2: "",
    particulados1um: "",
    particulados25um: "",
    particulados10um: "",
    cargaO2: "",
  };
  const [deviceId, setDeviceId] = React.useState(initialValues.deviceId);
  const [timeStamp, setTimeStamp] = React.useState(initialValues.timeStamp);
  const [alarmeO2, setAlarmeO2] = React.useState(initialValues.alarmeO2);
  const [alarmeCACO2, setAlarmeCACO2] = React.useState(
    initialValues.alarmeCACO2
  );
  const [temperatura, setTemperatura] = React.useState(
    initialValues.temperatura
  );
  const [umidade, setUmidade] = React.useState(initialValues.umidade);
  const [concentracaoCO2, setConcentracaoCO2] = React.useState(
    initialValues.concentracaoCO2
  );
  const [particulados1um, setParticulados1um] = React.useState(
    initialValues.particulados1um
  );
  const [particulados25um, setParticulados25um] = React.useState(
    initialValues.particulados25um
  );
  const [particulados10um, setParticulados10um] = React.useState(
    initialValues.particulados10um
  );
  const [cargaO2, setCargaO2] = React.useState(initialValues.cargaO2);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDeviceId(initialValues.deviceId);
    setTimeStamp(initialValues.timeStamp);
    setAlarmeO2(initialValues.alarmeO2);
    setAlarmeCACO2(initialValues.alarmeCACO2);
    setTemperatura(initialValues.temperatura);
    setUmidade(initialValues.umidade);
    setConcentracaoCO2(initialValues.concentracaoCO2);
    setParticulados1um(initialValues.particulados1um);
    setParticulados25um(initialValues.particulados25um);
    setParticulados10um(initialValues.particulados10um);
    setCargaO2(initialValues.cargaO2);
    setErrors({});
  };
  const validations = {
    deviceId: [{ type: "Required" }],
    timeStamp: [{ type: "Required" }],
    alarmeO2: [{ type: "Required" }],
    alarmeCACO2: [{ type: "Required" }],
    temperatura: [{ type: "Required" }],
    umidade: [{ type: "Required" }],
    concentracaoCO2: [{ type: "Required" }],
    particulados1um: [{ type: "Required" }],
    particulados25um: [{ type: "Required" }],
    particulados10um: [{ type: "Required" }],
    cargaO2: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          deviceId,
          timeStamp,
          alarmeO2,
          alarmeCACO2,
          temperatura,
          umidade,
          concentracaoCO2,
          particulados1um,
          particulados25um,
          particulados10um,
          cargaO2,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new CareBOX(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CareBOXCreateForm")}
      {...rest}
    >
      <TextField
        label="Device id"
        isRequired={true}
        isReadOnly={false}
        value={deviceId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              deviceId: value,
              timeStamp,
              alarmeO2,
              alarmeCACO2,
              temperatura,
              umidade,
              concentracaoCO2,
              particulados1um,
              particulados25um,
              particulados10um,
              cargaO2,
            };
            const result = onChange(modelFields);
            value = result?.deviceId ?? value;
          }
          if (errors.deviceId?.hasError) {
            runValidationTasks("deviceId", value);
          }
          setDeviceId(value);
        }}
        onBlur={() => runValidationTasks("deviceId", deviceId)}
        errorMessage={errors.deviceId?.errorMessage}
        hasError={errors.deviceId?.hasError}
        {...getOverrideProps(overrides, "deviceId")}
      ></TextField>
      <TextField
        label="Time stamp"
        isRequired={true}
        isReadOnly={false}
        value={timeStamp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              deviceId,
              timeStamp: value,
              alarmeO2,
              alarmeCACO2,
              temperatura,
              umidade,
              concentracaoCO2,
              particulados1um,
              particulados25um,
              particulados10um,
              cargaO2,
            };
            const result = onChange(modelFields);
            value = result?.timeStamp ?? value;
          }
          if (errors.timeStamp?.hasError) {
            runValidationTasks("timeStamp", value);
          }
          setTimeStamp(value);
        }}
        onBlur={() => runValidationTasks("timeStamp", timeStamp)}
        errorMessage={errors.timeStamp?.errorMessage}
        hasError={errors.timeStamp?.hasError}
        {...getOverrideProps(overrides, "timeStamp")}
      ></TextField>
      <TextField
        label="Alarme o2"
        isRequired={true}
        isReadOnly={false}
        value={alarmeO2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              deviceId,
              timeStamp,
              alarmeO2: value,
              alarmeCACO2,
              temperatura,
              umidade,
              concentracaoCO2,
              particulados1um,
              particulados25um,
              particulados10um,
              cargaO2,
            };
            const result = onChange(modelFields);
            value = result?.alarmeO2 ?? value;
          }
          if (errors.alarmeO2?.hasError) {
            runValidationTasks("alarmeO2", value);
          }
          setAlarmeO2(value);
        }}
        onBlur={() => runValidationTasks("alarmeO2", alarmeO2)}
        errorMessage={errors.alarmeO2?.errorMessage}
        hasError={errors.alarmeO2?.hasError}
        {...getOverrideProps(overrides, "alarmeO2")}
      ></TextField>
      <TextField
        label="Alarme caco2"
        isRequired={true}
        isReadOnly={false}
        value={alarmeCACO2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              deviceId,
              timeStamp,
              alarmeO2,
              alarmeCACO2: value,
              temperatura,
              umidade,
              concentracaoCO2,
              particulados1um,
              particulados25um,
              particulados10um,
              cargaO2,
            };
            const result = onChange(modelFields);
            value = result?.alarmeCACO2 ?? value;
          }
          if (errors.alarmeCACO2?.hasError) {
            runValidationTasks("alarmeCACO2", value);
          }
          setAlarmeCACO2(value);
        }}
        onBlur={() => runValidationTasks("alarmeCACO2", alarmeCACO2)}
        errorMessage={errors.alarmeCACO2?.errorMessage}
        hasError={errors.alarmeCACO2?.hasError}
        {...getOverrideProps(overrides, "alarmeCACO2")}
      ></TextField>
      <TextField
        label="Temperatura"
        isRequired={true}
        isReadOnly={false}
        value={temperatura}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              deviceId,
              timeStamp,
              alarmeO2,
              alarmeCACO2,
              temperatura: value,
              umidade,
              concentracaoCO2,
              particulados1um,
              particulados25um,
              particulados10um,
              cargaO2,
            };
            const result = onChange(modelFields);
            value = result?.temperatura ?? value;
          }
          if (errors.temperatura?.hasError) {
            runValidationTasks("temperatura", value);
          }
          setTemperatura(value);
        }}
        onBlur={() => runValidationTasks("temperatura", temperatura)}
        errorMessage={errors.temperatura?.errorMessage}
        hasError={errors.temperatura?.hasError}
        {...getOverrideProps(overrides, "temperatura")}
      ></TextField>
      <TextField
        label="Umidade"
        isRequired={true}
        isReadOnly={false}
        value={umidade}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              deviceId,
              timeStamp,
              alarmeO2,
              alarmeCACO2,
              temperatura,
              umidade: value,
              concentracaoCO2,
              particulados1um,
              particulados25um,
              particulados10um,
              cargaO2,
            };
            const result = onChange(modelFields);
            value = result?.umidade ?? value;
          }
          if (errors.umidade?.hasError) {
            runValidationTasks("umidade", value);
          }
          setUmidade(value);
        }}
        onBlur={() => runValidationTasks("umidade", umidade)}
        errorMessage={errors.umidade?.errorMessage}
        hasError={errors.umidade?.hasError}
        {...getOverrideProps(overrides, "umidade")}
      ></TextField>
      <TextField
        label="Concentracao co2"
        isRequired={true}
        isReadOnly={false}
        value={concentracaoCO2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              deviceId,
              timeStamp,
              alarmeO2,
              alarmeCACO2,
              temperatura,
              umidade,
              concentracaoCO2: value,
              particulados1um,
              particulados25um,
              particulados10um,
              cargaO2,
            };
            const result = onChange(modelFields);
            value = result?.concentracaoCO2 ?? value;
          }
          if (errors.concentracaoCO2?.hasError) {
            runValidationTasks("concentracaoCO2", value);
          }
          setConcentracaoCO2(value);
        }}
        onBlur={() => runValidationTasks("concentracaoCO2", concentracaoCO2)}
        errorMessage={errors.concentracaoCO2?.errorMessage}
        hasError={errors.concentracaoCO2?.hasError}
        {...getOverrideProps(overrides, "concentracaoCO2")}
      ></TextField>
      <TextField
        label="Particulados1um"
        isRequired={true}
        isReadOnly={false}
        value={particulados1um}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              deviceId,
              timeStamp,
              alarmeO2,
              alarmeCACO2,
              temperatura,
              umidade,
              concentracaoCO2,
              particulados1um: value,
              particulados25um,
              particulados10um,
              cargaO2,
            };
            const result = onChange(modelFields);
            value = result?.particulados1um ?? value;
          }
          if (errors.particulados1um?.hasError) {
            runValidationTasks("particulados1um", value);
          }
          setParticulados1um(value);
        }}
        onBlur={() => runValidationTasks("particulados1um", particulados1um)}
        errorMessage={errors.particulados1um?.errorMessage}
        hasError={errors.particulados1um?.hasError}
        {...getOverrideProps(overrides, "particulados1um")}
      ></TextField>
      <TextField
        label="Particulados25um"
        isRequired={true}
        isReadOnly={false}
        value={particulados25um}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              deviceId,
              timeStamp,
              alarmeO2,
              alarmeCACO2,
              temperatura,
              umidade,
              concentracaoCO2,
              particulados1um,
              particulados25um: value,
              particulados10um,
              cargaO2,
            };
            const result = onChange(modelFields);
            value = result?.particulados25um ?? value;
          }
          if (errors.particulados25um?.hasError) {
            runValidationTasks("particulados25um", value);
          }
          setParticulados25um(value);
        }}
        onBlur={() => runValidationTasks("particulados25um", particulados25um)}
        errorMessage={errors.particulados25um?.errorMessage}
        hasError={errors.particulados25um?.hasError}
        {...getOverrideProps(overrides, "particulados25um")}
      ></TextField>
      <TextField
        label="Particulados10um"
        isRequired={true}
        isReadOnly={false}
        value={particulados10um}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              deviceId,
              timeStamp,
              alarmeO2,
              alarmeCACO2,
              temperatura,
              umidade,
              concentracaoCO2,
              particulados1um,
              particulados25um,
              particulados10um: value,
              cargaO2,
            };
            const result = onChange(modelFields);
            value = result?.particulados10um ?? value;
          }
          if (errors.particulados10um?.hasError) {
            runValidationTasks("particulados10um", value);
          }
          setParticulados10um(value);
        }}
        onBlur={() => runValidationTasks("particulados10um", particulados10um)}
        errorMessage={errors.particulados10um?.errorMessage}
        hasError={errors.particulados10um?.hasError}
        {...getOverrideProps(overrides, "particulados10um")}
      ></TextField>
      <TextField
        label="Carga o2"
        isRequired={true}
        isReadOnly={false}
        value={cargaO2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              deviceId,
              timeStamp,
              alarmeO2,
              alarmeCACO2,
              temperatura,
              umidade,
              concentracaoCO2,
              particulados1um,
              particulados25um,
              particulados10um,
              cargaO2: value,
            };
            const result = onChange(modelFields);
            value = result?.cargaO2 ?? value;
          }
          if (errors.cargaO2?.hasError) {
            runValidationTasks("cargaO2", value);
          }
          setCargaO2(value);
        }}
        onBlur={() => runValidationTasks("cargaO2", cargaO2)}
        errorMessage={errors.cargaO2?.errorMessage}
        hasError={errors.cargaO2?.hasError}
        {...getOverrideProps(overrides, "cargaO2")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
