/* src/App.js */
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import {createCareBOX} from './graphql/mutations'
import {listCareBOXES} from './graphql/queries'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);



const initialState = { deviceId: '', timeStamp: '' }

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [devices, setCareData] = useState([])

  useEffect(() => {
    fetchCareThings()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchCareThings() {
    try {
      const CareData = await API.graphql(graphqlOperation(listCareBOXES))
      const devices = CareData.data.listCareBOXES.items
      setCareData(devices)
    } catch (err) { console.log('error fetching careBox') }
  }

  async function addCareThings() {
    try {
      if (!formState.deviceId || !formState.timeStamp || !formState.alarmeO2 || !formState.alarmeCACO2 || !formState.temperatura || !formState.umidade || !formState.particulados1um || !formState.particulados25um || !formState.particulados10um || !formState.cargaO2) return
      //
      const device = { ...formState }
      setCareData([...devices, device])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createCareBOX, {input: device}))
    } catch (err) {
      console.log('error creating device:', err)
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify CareBox</h2>
      <input
        onChange={event => setInput('deviceId', event.target.value)}
        style={styles.input}
        value={formState.id}
        placeholder="deviceId"
      />
      <input
        onChange={event => setInput('timeStamp', event.target.value)}
        style={styles.input}
        value={formState.timeStamp}
        placeholder="TimeStamp"
      />
      <input
        onChange={event => setInput('alarmeO2', event.target.value)}
        style={styles.input}
        value={formState.alarmeO2}
        placeholder="alarmeO2"
      />
      <input
        onChange={event => setInput('alarmeCACO2', event.target.value)}
        style={styles.input}
        value={formState.alarmeCACO2}
        placeholder="alarmeCACO2"
      />
      <input
        onChange={event => setInput('temperatura', event.target.value)}
        style={styles.input}
        value={formState.temperatura}
        placeholder="temperatura"
      />
      <input
        onChange={event => setInput('umidade', event.target.value)}
        style={styles.input}
        value={formState.umidade}
        placeholder="umidade"
      />
      <input
        onChange={event => setInput('concentracaoCO2', event.target.value)}
        style={styles.input}
        value={formState.concentracaoCO2}
        placeholder="concentracaoCO2"
      />
      <input
        onChange={event => setInput('particulados1um', event.target.value)}
        style={styles.input}
        value={formState.particulados1um}
        placeholder="particulados1um"
      />
      <input
        onChange={event => setInput('particulados25um', event.target.value)}
        style={styles.input}
        value={formState.particulados25um}
        placeholder="particulados2,5um"
      />
      <input
        onChange={event => setInput('particulados10um', event.target.value)}
        style={styles.input}
        value={formState.particulados10um}
        placeholder="particulados10um"
      />
      <input
        onChange={event => setInput('cargaO2', event.target.value)}
        style={styles.input}
        value={formState.cargaO2}
        placeholder="cargaO2"
      />
      <button style={styles.button} onClick={addCareThings}>Create Measurement item</button>
      {
        devices.map((device, index) => (
          <div key={device.deviceId ? device.deviceId : index} style={styles.device}>
            <p style={styles.deviceName}>{device.deviceId}</p>
            <p style={styles.deviceTimeStamp}>{device.timeStamp}</p>
            <p style={styles.devicealarmeO2}>{device.alarmeO2}</p>
            <p style={styles.devicealarmeCACO2}>{device.alarmeCACO2}</p>
            <p style={styles.devicetemperatura}>{device.temperatura}</p>
            <p style={styles.deviceumidade}>{device.umidade}</p>
            <p style={styles.deviceconcentracaoCO2}>{device.concentracaoCO2}</p>
            <p style={styles.deviceparticulados1um}>{device.particulados1um}</p>
            <p style={styles.deviceparticulados25um}>{device.particulados25um}</p>
            <p style={styles.deviceparticulados10um}>{device.particulados10um}</p>
            <p style={styles.devicecargaO2}>{device.cargaO2}</p>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  device: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  deviceName: { fontSize: 20, fontWeight: 'bold' },
  deviceTimeStamp: { marginBottom: 0 },
  devicealarmeO2: { fontSize: 20, fontWeight: 'bold' },
  devicealarmeCACO2: { fontSize: 20, fontWeight: 'bold' },
  devicetemperatura: { fontSize: 20, fontWeight: 'bold' },
  deviceumidade: { fontSize: 20, fontWeight: 'bold' },
  deviceconcentracaoCO2: { fontSize: 20, fontWeight: 'bold' },
  deviceparticulados1um: { fontSize: 20, fontWeight: 'bold' },
  deviceparticulados25um: { fontSize: 20, fontWeight: 'bold' },
  deviceparticulados10um: { fontSize: 20, fontWeight: 'bold' },
  devicecargaO2: { fontSize: 20, fontWeight: 'bold' },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App