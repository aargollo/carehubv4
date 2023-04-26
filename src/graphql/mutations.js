/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCareBOX = /* GraphQL */ `
  mutation CreateCareBOX(
    $input: CreateCareBOXInput!
    $condition: ModelCareBOXConditionInput
  ) {
    createCareBOX(input: $input, condition: $condition) {
      deviceId
      timeStamp
      alarmeO2
      alarmeCACO2
      temperatura
      umidade
      concentracaoCO2
      particulados1um
      particulados25um
      particulados10um
      cargaO2
      createdAt
      updatedAt
    }
  }
`;
export const updateCareBOX = /* GraphQL */ `
  mutation UpdateCareBOX(
    $input: UpdateCareBOXInput!
    $condition: ModelCareBOXConditionInput
  ) {
    updateCareBOX(input: $input, condition: $condition) {
      deviceId
      timeStamp
      alarmeO2
      alarmeCACO2
      temperatura
      umidade
      concentracaoCO2
      particulados1um
      particulados25um
      particulados10um
      cargaO2
      createdAt
      updatedAt
    }
  }
`;
export const deleteCareBOX = /* GraphQL */ `
  mutation DeleteCareBOX(
    $input: DeleteCareBOXInput!
    $condition: ModelCareBOXConditionInput
  ) {
    deleteCareBOX(input: $input, condition: $condition) {
      deviceId
      timeStamp
      alarmeO2
      alarmeCACO2
      temperatura
      umidade
      concentracaoCO2
      particulados1um
      particulados25um
      particulados10um
      cargaO2
      createdAt
      updatedAt
    }
  }
`;
