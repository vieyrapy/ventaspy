<template>
  <div>
    <div class="uk-section-primary tm-section-texture">

      <div class="uk-width-1-">
      <div class="uk-container uk-text-center">
        <h1 class="uk-margin-large-top">Sistema de ventas por videollamadas</h1>
        <p class="uk-text-lead">Hoy mas que nunca estamos cerca tuyo. Nuestros vendedores están listos para atenderte</p>
      </div>
 
      <div class="container">
       
        <div class="route-home uk-flex-center" uk-grid>
         
          <a href="/#/caller" uk-icon="video-camera" class="uk-icon-large" width="168" height="155"></a>

          <div hidden="true">
            <router-link to="/agent" class="uk-button uk-button-primary uk-button-large">Agentes</router-link>
          </div>

          <div>
            <router-link 
            to="/caller" 
            class="uk-button uk-button-primary uk-button-large">
            Llamar
            </router-link>
          </div>
        </div>
      </div>

       <p class="uk-margin-medium uk-width-large uk-align-center">
           Sistema que emula un call center para atender a todos  tus clientes como si fuera que estan en tu local 
            <a href="https://www.paypal.me/MiljanAleksic" target="_blank">donation</a>. It means a lot :)
          </p>
  


<div class="uk-section-small">
  <div class="uk-container uk-container-expand uk-text-center uk-position-relative">
    <ul uk-margin="" class="uk-subnav tm-subnav uk-flex-inline uk-flex-center uk-margin-remove-bottom">
    <li class="uk-first-column">Versión 1.2.0</li> 
    <li>
      <a href="https://twitter.com/vieyrahvo" class="uk-text-lowercase"><span uk-icon="twitter" class="uk-margin-small-right uk-icon"></span>@vieyrapy</a>
    </li>
    </ul>
  </div>
</div>

    </div>
    </div>
  </div>
</template>


