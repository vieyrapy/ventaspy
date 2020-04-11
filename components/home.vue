<template>
  <div>
    <div class="uk-section uk-section-primary">
      <div class="uk-container uk-text-center">
        <h1 class="uk-margin-large-top">Bienvenidos</h1>
        <p class="uk-text-lead">Hoy mas que nunca estamos cerca tuyo. Nuestros vendedores están listos para atenderte</p>
      </div>
    </div>
    <div class="uk-section uk-section-default">
      <div class="container">
        <div class="route-home uk-flex-center" uk-grid>
          <div hidden="true">
            <router-link to="/agent" class="uk-button uk-button-primary uk-button-large">Vendedor</router-link>
          </div>
          <div>
            <router-link to="/caller" class="uk-button uk-button-primary uk-button-large">Llamar</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
