<template>
  <div>
    <div class="uk-position-relative uk-container-expand">
            <div uk-sticky="media: 960" class="uk-navbar-container tm-navbar-container uk-sticky uk-sticky-fixed" style="position: fixed; top: 0px; width: 1047px;">
              <div class="uk-container uk-container-expand">
                <nav class="uk-navbar">
                  <div class="uk-navbar-left">
                      <a href="/" class="uk-navbar-item uk-logo router-link-exact-active uk-active">
                      <img src="assets/images/vieyra.svg"  width="30" height="30" class="uk-margin-small-right uk-svg">
                        VIEYRAPY
                      </a>
                    </div>
                            <div class="uk-navbar-right">
                              <ul class="uk-navbar-nav uk-visible@m">
                                <li class=""><a href="/">Versión Basica</a></li>
                                <li class=""><a href="/#/caller">Llamar</a></li>
                              </ul>
                              <div class="uk-navbar-item uk-visible@m"><a href= "https://web.whatsapp.com/" class="uk-button uk-button-default tm-button-default uk-icon">Solicitá Ya<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="download"><polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"></polyline><rect x="3" y="17" width="13" height="1"></rect><line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"></line></svg></a>
                              </div>
                              <a uk-navbar-toggle-icon="" href="#offcanvas" uk-toggle class="uk-navbar-toggle uk-hidden@m uk-icon uk-navbar-toggle-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="navbar-toggle-icon">
                                  <rect y="9" width="20" height="2"></rect>
                                  <rect y="3" width="20" height="2"></rect>
                                  <rect y="15" width="20" height="2"></rect>
                                </svg>
                              </a>
                            </div>
                          </nav>
                    </div>
              </div>

  </div>
  <div id="offcanvas" uk-offcanvas="mode: push; overlay: true" class="uk-offcanvas">
    <div class="uk-offcanvas-bar">
      <div class="uk-panel">
        <ul class="uk-nav uk-nav-default tm-nav">
          <li class="uk-nav-header">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">VIEYRAPY</font>
            </font>
          </li>
          <li>
            <a href="/"><font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Versión Basica</font>
            </font></a>
          </li>
        <li>
          <a href="/#/caller"><font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Llamar</font>
          </font></a>
        </li>
    </ul>

        <a href= "https://web.whatsapp.com/" class="uk-button uk-button-default tm-button-default uk-icon"><font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">Solicitá Ya</font>
        </font>

          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="download">
            <polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"></polyline>
            <rect x="3" y="17" width="13" height="1"></rect>
            <line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"></line>
          </svg>
        </a>

    </div>
  </div>
</div>

      <div class="uk-width-1-1">
        <div class="uk-container uk-text-center">
          <div class="uk-card-header ">
              <h1 class="uk-margin-large-top uk-text-bold">Características</h1>
              <hr class="uk-divider-icon">
              <p class="uk-text-lead">Es una aplicación simple construida para unir al cliente y vendedor desde una pantalla, simulando tener al cliente comprando en tu negocio. Generando así, un  mayor ambiente de confianza a la hora de comprar/vender online</p>
          </div>
          <div class="uk-flex-middle" uk-grid>

              <div class="uk-card-header uk-background-muted uk-width-1-2@m uk-flex-first">
                <h3 class="uk-margin-large-top uk-text-emphasis uk-text-bold">Clientes</h3>

                  <ul>
                    <li class="uk-first-column uk-text-justify">Las personas que llaman deben ingresar su nombre y número de teléfono para comunicarse con un vendedor. Además podrá seleccionar si desea comunicarse usando videollamadas o solo audio</li>

                    <li class="uk-first-column uk-text-justify">Las personas que llaman pueden decidir salir de la llamada en cualquier momento</li>

                    <li class="uk-first-column uk-text-justify">Una vez que se han unido las personas que llaman, esperan hasta que un vendedor les atienda</li>
                  </ul>
              </div>


              <div class="uk-card-header uk-background-muted uk-width-1-2@m">
                <h3 class="uk-margin-large-top uk-text-emphasis uk-text-bold">Vendedores</h3>

                  <ul>
                    <li class="uk-first-column uk-text-justify">A cada vendedor se le pueden asignar múltiples llamadas. La asignación se realiza utilizando la estrategia de menos conexiones: cuando una nueva persona se une, la persona que llama se asigna al vendedor con el menor número de personas asignadas</li>

                    <li class="uk-first-column uk-text-justify">Cuando se asigna una llamada al vendedor, se actualiza la lista de llamadas del agente</li>

                    <li class="uk-first-column uk-text-justify">El vendedor puede unirse a una persona que llama a la vez</li>

                    <li class="uk-first-column uk-text-justify">El Vendedor puede poner una llamada existente en espera para unirse a otra persona</li>

                    <li class="uk-first-column uk-text-justify">El vendedor puede reanudar una llamada</li>

                    <li class="uk-first-column uk-text-justify">El vendedor puede finalizar la llamada a la que está conectado. Esto hará que la persona que llama también salga</li>

                    <li class="uk-first-column uk-text-justify">Si el vendedor cambia a otra persona que llama, la llamada actual se pone en espera</li>
                </ul>
              </div>
            </div>
          <p class="uk-text-lead">Hoy más que nunca estamos cerca tuyo</p>
          <p class="uk-text-lead"> Nuestros vendedores están listos para atenderte</p>
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
