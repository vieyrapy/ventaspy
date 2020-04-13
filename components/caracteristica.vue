<template>
  <div>

      <div class="uk-width-1-1">
        <div class="uk-container uk-text-center">
          <div class="uk-card-header ">
              <h1 class="uk-margin-large-top uk-text-bold">Características</h1>
          </div>
          <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-small" uk-grid>
            <div>
              <div class="uk-card-header uk-background-muted">
                <h3 class="uk-margin-large-top uk-text-emphasis uk-text-bold">Cliente</h3>

                  <ul>
                    <li class="uk-first-column uk-text-justify">Las personas que llaman deben ingresar su nombre y número de telefono para comunicarse con un vendedor. Además podrá seleccionar si desea comunicarse usando videollamadas o solo audio</li>

                    <li class="uk-first-column uk-text-justify">Las personas que llaman pueden decidir salir de la llamada en cualquier momento</li>

                    <li class="uk-first-column uk-text-justify">Una vez que se han unido las personas que llaman, esperan hasta que un agente/vendedor les atienda</li>
                  </ul>

              </div>
            </div>
            <div>
              <div class="uk-card-header uk-background-muted">
                <h3 class="uk-margin-large-top uk-text-emphasis uk-text-bold">Agente/Vendedor</h3>

                  <ul>
                    <li class="uk-first-column uk-text-justify">A cada agente se le pueden asignar múltiples llamadas. La asignación se realiza utilizando la estrategia de menos conexiones: cuando una nueva persona se une, la persona que llama se asigna al agente con el menor número de personas asignadas</li>

                    <li class="uk-first-column uk-text-justify">Cuando se asigna una llamada al agente, se actualiza la lista de llamadas del agente</li>

                    <li class="uk-first-column uk-text-justify">El agente puede unirse a una persona que llama a la vez</li>

                    <li class="uk-first-column uk-text-justify">El agente puede poner una llamada existente en espera para unirse a otra persona</li>

                    <li class="uk-first-column uk-text-justify">El agente puede reanudar una llamada</li>

                    <li class="uk-first-column uk-text-justify">El agente puede finalizar la llamada a la que está conectado. Esto hará que la persona que llama también salga</li>

                    <li class="uk-first-column uk-text-justify">Si el agente cambia a otra persona que llama, la llamada actual se pone en espera</li>
                </ul>

              </div>
            </div>
            <div>
              <div class="uk-card-header uk-background-muted">
                <h3 class="uk-margin-large-top uk-text-emphasis uk-text-bold">Interfaz</h3>

                <ul>
                  <li class="uk-first-column uk-text-justify">
                    Es una aplicación simple construida para unir las pantallas del agente/vendedor y el cliente que llama, generando así un  mayor ambiente de confianza a la hora de comprar/vender....
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p class="uk-text-lead">Hoy mas que nunca estamos cerca tuyo. Nuestros vendedores están listos para atenderte</p>
      </div>

      <div class="container">
        <div class="route-home uk-flex-center" uk-grid>
          <div>
            <router-link
            to="/caller"
            class="uk-button uk-button-primary uk-button-large">
            Llamar Ahora
            </router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
