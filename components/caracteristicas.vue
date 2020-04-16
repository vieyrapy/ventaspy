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
                                <li><a href="/#/agentesventaspy">Vendedores</a></li>
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
  <div id="offcanvas" uk-offcanvas="mode: push; overlay: true" class="uk-offcanvas"><div class="uk-offcanvas-bar"><div class="uk-panel"><ul class="uk-nav uk-nav-default tm-nav"><li class="uk-nav-header"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">General</font></font></li> <li><a href="../index"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hogar</font></font></a></li> <li><a href="../pro"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pro</font></font></a></li> <li><a href="../changelog"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Registro de cambios</font></font></a></li> <li><a href="../download"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Descargar</font></font></a></li></ul> <ul class="uk-nav uk-nav-default tm-nav uk-margin-top"><li class="uk-nav-header"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Empezando</font></font></li> <li class="router-link-exact-active uk-active"><a href="/docs/introduction"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Introducción</font></font></a></li><li class=""><a href="/docs/installation"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Instalación</font></font></a></li><li class=""><a href="/docs/less"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Menos</font></font></a></li><li class=""><a href="/docs/sass"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hablar con descaro a</font></font></a></li><li class=""><a href="/docs/javascript"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript</font></font></a></li><li class=""><a href="/docs/webpack"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Paquete web</font></font></a></li><li class=""><a href="/docs/custom-icons"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Iconos personalizados</font></font></a></li><li class=""><a href="/docs/avoiding-conflicts"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Evitar conflictos</font></font></a></li><li class=""><a href="/docs/rtl"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Soporte RTL</font></font></a></li><li class=""><a href="/docs/migration"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Migración</font></font></a></li></ul><ul class="uk-nav uk-nav-default tm-nav uk-margin-top"><li class="uk-nav-header"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Componentes</font></font></li> <li class=""><a href="/docs/accordion"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Acordeón</font></font></a></li><li class=""><a href="/docs/alert"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Alerta</font></font></a></li><li class=""><a href="/docs/align"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Alinear</font></font></a></li><li class=""><a href="/docs/animation"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Animación</font></font></a></li><li class=""><a href="/docs/article"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Artículo</font></font></a></li><li class=""><a href="/docs/background"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Antecedentes</font></font></a></li><li class=""><a href="/docs/badge"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Insignia</font></font></a></li><li class=""><a href="/docs/base"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Base</font></font></a></li><li class=""><a href="/docs/breadcrumb"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Migaja de pan</font></font></a></li><li class=""><a href="/docs/button"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Botón</font></font></a></li><li class=""><a href="/docs/card"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tarjeta</font></font></a></li><li class=""><a href="/docs/close"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cerrar</font></font></a></li><li class=""><a href="/docs/column"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Columna</font></font></a></li><li class=""><a href="/docs/comment"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Comentario</font></font></a></li><li class=""><a href="/docs/container"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Envase</font></font></a></li><li class=""><a href="/docs/countdown"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cuenta regresiva</font></font></a></li><li class=""><a href="/docs/cover"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cubrir</font></font></a></li><li class=""><a href="/docs/description-list"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lista de descripciones</font></font></a></li><li class=""><a href="/docs/divider"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Divisor</font></font></a></li><li class=""><a href="/docs/dotnav"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dotnav</font></font></a></li><li class=""><a href="/docs/drop"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">soltar</font></font></a></li><li class=""><a href="/docs/dropdown">Dropdown</a></li><li class=""><a href="/docs/filter">Filter</a></li><li class=""><a href="/docs/flex">Flex</a></li><li class=""><a href="/docs/form">Form</a></li><li class=""><a href="/docs/grid">Grid</a></li><li class=""><a href="/docs/heading">Heading</a></li><li class=""><a href="/docs/height">Height</a></li><li class=""><a href="/docs/icon">Icon</a></li><li class=""><a href="/docs/iconnav">Iconnav</a></li><li class=""><a href="/docs/image">Image</a></li><li class=""><a href="/docs/inverse">Inverse</a></li><li class=""><a href="/docs/label">Label</a></li><li class=""><a href="/docs/leader">Leader</a></li><li class=""><a href="/docs/lightbox">Lightbox</a></li><li class=""><a href="/docs/link">Link</a></li><li class=""><a href="/docs/list">List</a></li><li class=""><a href="/docs/margin">Margin</a></li><li class=""><a href="/docs/marker">Marker</a></li><li class=""><a href="/docs/modal">Modal</a></li><li class=""><a href="/docs/nav">Nav</a></li><li class=""><a href="/docs/navbar">Navbar</a></li><li class=""><a href="/docs/notification">Notification</a></li><li class=""><a href="/docs/offcanvas">Off-canvas</a></li><li class=""><a href="/docs/overlay">Overlay</a></li><li class=""><a href="/docs/padding">Padding</a></li><li class=""><a href="/docs/pagination">Pagination</a></li><li class=""><a href="/docs/parallax">Parallax</a></li><li class=""><a href="/docs/placeholder">Placeholder</a></li><li class=""><a href="/docs/position">Position</a></li><li class=""><a href="/docs/print">Print</a></li><li class=""><a href="/docs/progress">Progress</a></li><li class=""><a href="/docs/scroll">Scroll</a></li><li class=""><a href="/docs/scrollspy">Scrollspy</a></li><li class=""><a href="/docs/search">Search</a></li><li class=""><a href="/docs/section">Section</a></li><li class=""><a href="/docs/slidenav">Slidenav</a></li><li class=""><a href="/docs/slider">Slider</a></li><li class=""><a href="/docs/slideshow">Slideshow</a></li><li class=""><a href="/docs/sortable">Sortable</a></li><li class=""><a href="/docs/spinner">Spinner</a></li><li class=""><a href="/docs/sticky">Sticky</a></li><li class=""><a href="/docs/subnav">Subnav</a></li><li class=""><a href="/docs/svg">SVG</a></li><li class=""><a href="/docs/switcher">Switcher</a></li><li class=""><a href="/docs/tab">Tab</a></li><li class=""><a href="/docs/table">Table</a></li><li class=""><a href="/docs/text">Text</a></li><li class=""><a href="/docs/thumbnav">Thumbnav</a></li><li class=""><a href="/docs/tile">Tile</a></li><li class=""><a href="/docs/toggle">Toggle</a></li><li class=""><a href="/docs/tooltip">Tooltip</a></li><li class=""><a href="/docs/totop">Totop</a></li><li class=""><a href="/docs/transition">Transition</a></li><li class=""><a href="/docs/upload">Upload</a></li><li class=""><a href="/docs/utility">Utility</a></li><li class=""><a href="/docs/video">Video</a></li><li class=""><a href="/docs/visibility">Visibility</a></li><li class=""><a href="/docs/width">Width</a></li></ul></div></div></div>

      <div class="uk-width-1-1">
        <div class="uk-container uk-text-center">
          <div class="uk-card-header ">
              <h1 class="uk-margin-large-top uk-text-bold">Características</h1>
              <hr class="uk-divider-icon">
              <p class="uk-text-lead">Es una aplicación simple construida para unir al cliente y vendedor desde una pantalla, simulando tener al cliente comprando en tu negocio. Generando así, un  mayor ambiente de confianza a la hora de comprar/vender online</p>
          </div>
          <div class="uk-child-width-1-2 uk-child-width-1-2@s uk-grid-small" uk-grid>
            <div>
              <div class="uk-card-header uk-background-muted">
                <h3 class="uk-margin-large-top uk-text-emphasis uk-text-bold">Clientes</h3>

                  <ul>
                    <li class="uk-first-column uk-text-justify">Las personas que llaman deben ingresar su nombre y número de teléfono para comunicarse con un vendedor. Además podrá seleccionar si desea comunicarse usando videollamadas o solo audio</li>

                    <li class="uk-first-column uk-text-justify">Las personas que llaman pueden decidir salir de la llamada en cualquier momento</li>

                    <li class="uk-first-column uk-text-justify">Una vez que se han unido las personas que llaman, esperan hasta que un vendedor les atienda</li>
                  </ul>

              </div>
            </div>
            <div>
              <div class="uk-card-header uk-background-muted">
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
