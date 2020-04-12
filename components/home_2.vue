<template>
  <div>
    <div class="uk-section-primary tm-section-texture uk-height-viewport">
      <div class="uk-width-1-1">
        <div class="uk-container uk-text-center">

          <button class="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-nav-primary">Primary Nav</button>

          <button class="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-nav">Default Nav</button>

          <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
              <div class="uk-offcanvas-bar uk-flex uk-flex-column">

                  <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                      <li class="uk-active"><a href="#">Active</a></li>
                      <li class="uk-parent">
                          <a href="#">Parent</a>
                          <ul class="uk-nav-sub">
                              <li><a href="#">Sub item</a></li>
                              <li><a href="#">Sub item</a></li>
                          </ul>
                      </li>
                      <li class="uk-nav-header">Header</li>
                      <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
                      <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
                      <li class="uk-nav-divider"></li>
                      <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>
                  </ul>

              </div>
          </div>

          <div id="offcanvas-nav" uk-offcanvas="overlay: true">
              <div class="uk-offcanvas-bar">

                  <ul class="uk-nav uk-nav-default">
                      <li class="uk-active"><a href="#">Active</a></li>
                      <li class="uk-parent">
                          <a href="#">Parent</a>
                          <ul class="uk-nav-sub">
                              <li><a href="#">Sub item</a></li>
                              <li><a href="#">Sub item</a></li>
                          </ul>
                      </li>
                      <li class="uk-nav-header">Header</li>
                      <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
                      <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
                      <li class="uk-nav-divider"></li>
                      <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>
                  </ul>

              </div>
          </div>
     
        <h1 class="uk-margin-large-top">Ventas online</h1>
        <p class="uk-text-lead">Hoy mas que nunca estamos cerca tuyo. Nuestros vendedores están listos para atenderte</p>
      </div>
 
      <div class="container">
        <div class="route-home uk-flex-center" uk-grid>
          <div hidden="true">
            <router-link 
            to="/agent" 
            class="uk-icon-button uk-icon-video-camera">
            Vendedor
            </router-link>
          </div>
<a href="/#/agent" class="uk-icon-large uk-icon-video-camera"></a>
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
            If you are enjoying Vuikit and want to support the project consider making a small
            <a href="https://www.paypal.me/MiljanAleksic" target="_blank">donation</a>. It means a lot :)
       </p>

        <div class="uk-section-small">
          <div class="uk-container uk-container-expand uk-text-center uk-position-relative">

            <ul class="uk-subnav tm-subnav uk-flex-inline uk-flex-center uk-margin-remove-bottom" uk-margin>
              <li>
                <span>Version 0.8.2</span>
              </li>
              <li>
                <a class="uk-text-lowercase uk-text-middle" href="https://twitter.com/vuikit">
                  <vk-icon icon="twitter" /> @vuikit
                </a>
              </li>
              <li>
                <a class="uk-text-lowercase uk-text-middle" href="https://github.com/vuikit/vuikit">
                  <vk-icon icon="github" /> GitHub
                </a>
              </li>
            </ul>

          </div>
        </div>
    </div>

    </div>
  </div>
</template>


