<template>
  <div>
    <div class="uk-section-primary tm-section-texture">

      <div class="uk-width-1-1">
      <div class="uk-container uk-text-center">
        <h1 class="uk-margin-large-top">Sistema de ventas por videollamadas</h1>
        <p class="uk-text-lead">Hoy mas que nunca estamos cerca tuyo. Nuestros vendedores están listos para atenderte</p>
      
 
      <div class="container">
       
        <div class="route-home uk-flex-center" uk-grid>

        <div class="uk-first-column">
           <a href="/#/caller" class="uk-button uk-button-primary tm-button-primary uk-button-large tm-button-large uk-visible@s">Llamar Ahora!</a> 
          <a href="/#/caller"><span uk-icon="video-camera" width="113" height="100"></span></a>
        </div>


        <div hidden="true">
          <router-link to="/agent" class="uk-button uk-button-primary uk-button-large">Agentes</router-link>
        </div>
      </div>
     

        <p class="uk-section-small uk-width-large uk-align-center">
           Sistema que emula un call center para atender a todos  tus clientes como si fuera que estan en tu local 
            <a href="https://www.paypal.me/MiljanAleksic" target="_blank">donation</a>. It means a lot :)
        </p>
    </div>


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

  <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: fade">

    <ul class="uk-slideshow-items">
        <li>
            <img src="assets/images/000.jpg" alt="" uk-cover>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">Bottom</h3>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </li>
        <li>
            <img src="assets/images/001.jpg" alt="" uk-cover>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">Bottom</h3>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </li>
        <li>
            <img src="assets/images/002.jpg" alt="" uk-cover>
            <div class="uk-overlay uk-overlay-primary uk-position-right uk-text-center uk-transition-slide-right uk-width-medium">
                <h3 class="uk-margin-remove">Left</h3>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>
  </div>
</template>


