<template>
  <div class="route-agent uk-grid-collapse" uk-grid uk-height-viewport="expand: true">
    <div class="uk-width-1-3 uk-width-1-4@l uk-height-viewport uk-panel-scrollable" id="agent-info-screen">
      <div uk-grid uk-flex-auto>
        <div>
          <router-link to="/end" class="uk-button uk-button-primary uk-b uk-button-small " >Salir</router-link>
        </div>
        <div>
          <h1 class="uk-h2 uk-flex">Vendedor Nº{{ agentid }}</h1>
        </div>
          <p v-show="!callers.length" class="uk-text-lead">No hay llamadas conectadas</p>
      </div>





      <div v-for="caller in callers" :key="caller.callerId"
        class="uk-card uk-card-default uk-card-hover uk-card-small uk-margin-small-bottom"
        :class="{ 'uk-card-primary': caller.agentConnected, 'uk-card-secondary': caller.onHold }">
        <div class="uk-card-header">
          <h3 class="uk-h4">Cliente #{{ caller.callerId }}</h3>
        </div>
        <div class="uk-card-body">
          <ul class="uk-list">
            <li>Nombre: {{ caller.callerName || 'N/A' }}</li>
            <li>Telefono: {{ caller.callerReason || 'N/A' }}</li>
          </ul>
          <span v-if="caller.agentConnected" class="uk-card-badge uk-label uk-label-success">En vivo</span>
          <span v-if="caller.onHold" class="uk-card-badge uk-label uk-label-warning">En espera</span>
          <button
            @click="joinCall(caller.callerId)"
            v-if="!caller.agentConnected && !caller.onHold"
            class="uk-button uk-button-primary">Aceptar</button>
          <button
            @click="unholdCall(caller.callerId)"
            v-else-if="caller.onHold"
            class="uk-button uk-button-default">Retomar llamada</button>
          <button
            @click="holdCall(caller.callerId)"
            v-else-if="caller.agentConnected && !caller.onHold"
            class="uk-button uk-button-primary">Pausar llamada</button>
          <button
            @click="endCall(caller.callerId)"
            v-if="caller.agentConnected && !caller.onHold"
            class="uk-button uk-button-danger">Finalizar llamada</button>
        </div>
      </div>
    </div>
    <div class="uk-width-expand uk-background-muted">
      <ot-subscriber v-if="callerSession && callerStream" @error="errorHandler" :stream="callerStream" :opts="otOpts"
        :session="callerSession" class="uk-width-1-1 uk-height-1-1">
      </ot-subscriber>
      <ot-publisher v-if="callerSession" :session="callerSession" @error="errorHandler" :opts="publisherOpts"
        class="uk-width-small uk-height-small uk-position-medium uk-position-bottom-right">
      </ot-publisher>
    </div>
  </div>
</template>

<style scoped>
  #agent-info-screen {
    overflow-x: hidden;
  }
</style>


<script>
import OT from '@opentok/client'
import axios from 'axios'
import OtPublisher from './ot-publisher'
import OtSubscriber from './ot-subscriber'


let fetchInterval = null

function errorHandler(err) {
  console.log('Error', err)
  if (err && err.message) {
    UIkit.notification(err.message, 'danger')
  } else if (typeof err == 'string') {
    UIkit.notification(err, 'danger')
  }
}

function setupSession(callerId) {
  this.callerSession.on('streamCreated', (event) => {
    this.callerStream = event.stream
  })
  this.callerSession.on('connectionCreated', (event) => {
    this.connections[event.connection.id] = callerId
  })
  this.callerSession.on('connectionDestroyed', (event) => {
    delete this.connections[event.connection.id]
    if (this.currentCaller === callerId) {
      this.callerSession.disconnect()
      this.callerStream = null
      this.callerSession = null
      this.currentCaller = null
    }
    this.deleteCaller(callerId)
    console.log('Connection destroyed', callerId)
  })
  this.callerSession.on('streamDestroyed', (event) => {
    console.log('Stream destroyed', callerId)
    this.callerStream = null
  })
}

function successHandler(msg) {
  UIkit.notification(msg, 'success')
}

function joinCall(callerId) {
  if (this.currentCaller !== null && this.currentCaller !== callerId) {
    this.holdCall(this.currentCaller)
  }
  axios.get(`/call/${callerId}/join`)
    .then(res => {
      this.audioVideo = res.data.caller.audioVideo
      this.callerSession = OT.initSession(res.data.apiKey, res.data.sessionId)
      this.setupSession(callerId)
      this.callerSession.connect(res.data.token, (err) => {
        if (err) {
          console.log(err)
          return
        }
        this.updateCaller(res.data.caller)
        this.currentCaller = callerId
      })
    })
    .catch(errorHandler)
}

function holdCall(callerId) {
  if (this.callerSession && this.callerSession.isConnected()) {
    this.callerSession.disconnect()
  }
  console.log('Hold Call', callerId)
  this.currentCaller = null
  this.callerSession = null
  this.callerStream = null
  axios.get(`/call/${callerId}/hold`)
    .then(res => {
      this.updateCaller(res.data.caller)
    })
}

function unholdCall(callerId) {
  if (this.currentCaller !== null && this.currentCaller !== callerId) {
    this.holdCall(this.currentCaller)
  }
  axios.get(`/call/${callerId}/unhold`)
    .then(res => {
      this.audioVideo = res.data.caller.audioVideo
      this.callerSession = OT.initSession(res.data.apiKey, res.data.sessionId)
      this.setupSession(callerId)
      this.callerSession.connect(res.data.token, (err) => {
        if (err) {
          console.log(err)
          return
        }
        this.updateCaller(res.data.caller)
        this.currentCaller = callerId
      })
    })
    .catch(errorHandler)
}

function updateCaller(caller) {
  for (const c in this.callers) {
    if (this.callers[c].callerId === caller.callerId) {
      this.callers.splice(c, 1, caller)
    }
  }
}

function endCall(callerId) {
  if (this.callerSession && this.callerSession.isConnected()) {
    this.callerSession.disconnect()
  }
  this.deleteCaller(callerId)
}

function deleteCaller(callerId) {
  for (const c in this.callers) {
    if (this.callers[c].callerId === callerId) {
      axios.get(`/call/${callerId}/delete`)
        .then(res => {
          this.callers.splice(c, 1)
        })
        .catch(errorHandler)
    }
  }
}

function connectAgent() {
  axios.post('/agent')
    .then(res => {
      this.agentid = res.data.agentid
      this.fetchCallersList()
      fetchInterval = setInterval(this.fetchCallersList, 2500)
    })
    .catch(e => {
      errorHandler('El vendedor no se puede conectar')
      console.log('El vendedor no se puede conectar', e)
    })
}

function disconnectAgent() {
  if (this.callerSession && this.callerSession.isConnected()) {
    console.log('Desconectarse de la sesion', this.callerSession.sessionId)
    this.callerSession.disconnect()
  }
  if (fetchInterval) {
    clearInterval(fetchInterval)
  }
  axios.post(`/agent/${this.agentid}/disconnect`)
    .then(res => {
      console.log('Vendedor desconectado')
    })
    .catch(e => {
      errorHandler('Error al desconectar vendedor')
      console.log('Error al desconectar vendedor', e)
    })
}

function fetchCallersList() {
  axios(`/agent/${this.agentid}/callers`)
    .then(res => {
      this.callers = res.data.callers
    })
    .catch(e => {
      errorHandler('No se puede recuperar datos del vendedor')
      console.log('No se puede recuperar datos del vendedor', e)
    })
}

export default {
  name: 'agent',
  components: { OtPublisher, OtSubscriber },

  data: () => ({
    callers: [],
    agentid: null,
    connections: new Map(),
    currentCaller: null,
    callerSession: null,
    callerStream: null,
    audioVideo: 'audioVideo',
    otOpts: {
      insertMode: 'append',
      width: '100%',
      height: '100%',
      // Don't show OpenTok's default UI controls
      // See: https://tokbox.com/developer/guides/customize-ui/js/#hiding_ui_controls
      showControls: false
    }
  }),

  computed: {
    publisherOpts: function () {
      const _opts = {
        // Don't show OpenTok's default UI controls
        // See: https://tokbox.com/developer/guides/customize-ui/js/#hiding_ui_controls
        showControls: false
      }
      if (this.audioVideo === 'audioOnly') {
        _opts.videoSource = null
      }
      return _opts
    }
  },

  mounted() {
    this.connectAgent()
    window.onbeforeunload = () => {
      this.disconnectAgent()
      return null
    }
  },

  beforeDestroy () {
    this.disconnectAgent()
    window.onbeforeunload = null
  },

  methods: {
    joinCall,
    holdCall,
    unholdCall,
    updateCaller,
    deleteCaller,
    setupSession,
    errorHandler,
    successHandler,
    fetchCallersList,
    connectAgent,
    disconnectAgent,
    endCall
  }
}

</script>
