/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCareBOX = /* GraphQL */ `
  query GetCareBOX($deviceId: ID!, $timeStamp: String!) {
    getCareBOX(deviceId: $deviceId, timeStamp: $timeStamp) {
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
export const listCareBOXES = /* GraphQL */ `
  query ListCareBOXES(
    $deviceId: ID
    $timeStamp: ModelStringKeyConditionInput
    $filter: ModelCareBOXFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCareBOXES(
      deviceId: $deviceId
      timeStamp: $timeStamp
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
