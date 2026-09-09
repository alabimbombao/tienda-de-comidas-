<template>
  <div class="category-page">
    
    <div class="category-banner" style="background-color: #6a1b9a;">
      <div class="banner-content">
        <h1 class="banner-title">Postres</h1>
        <p class="banner-desc">
          El toque dulce para culminar tu experiencia. Postres artesanales preparados a diario con ingredientes selectos y recetas tradicionales.
        </p>
      </div>
    </div>

    <div class="page-container">

      
      <div class="chef-recommendation">
        <div class="chef-label" style="color: #6a1b9a;">
          <q-icon name="cake" size="1.2rem" color="purple-9" />
          
        </div>
        <q-card class="chef-card" flat bordered>
          <div class="chef-card-inner">
            <div class="chef-img-wrapper">
              
              <img src="" alt="Brownie Volcánico" class="chef-img"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="img-placeholder chef-placeholder">
                <q-icon name="photo_camera" size="2rem" color="grey-6" />
                
              </div>
            </div>
            <div class="chef-card-body">
              <div>
                <q-badge color="purple-9" label="Especialidad Dulce" class="q-mb-sm" />
              </div>
              <div class="product-name" style="font-size: 1.3rem; margin: 6px 0 10px;">Brownie Volcánico</div>
              <p class="product-desc">
                Bizcocho tibio de chocolate semiamargo con centro cremoso fundente, acompañado de bola de helado de vainilla y lluvia de nueces.
              </p>
              <div style="margin-top: 14px; display: flex; align-items: center; gap: 12px;">
                
                <q-badge color="purple-7" label="Favorito" />
              </div>
            </div>
          </div>
        </q-card>
      </div>

      
      <div class="section-header">
        <h2 class="section-title">Nuestra Repostería</h2>
        <p class="section-sub">Elaborados diariamente por nuestros maestros reposteros</p>
      </div>

      <div class="products-grid">

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJs0GjSEdTm74xGb8ye2LSK-pSDGOVCkyC6TKkt0kzGw&s" alt="Cheesecake de Frutos Rojos" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="orange-9" label="Más Pedido" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Cheesecake Frutos Rojos</div>
            <div class="product-desc">Base crujiente de galleta dorada, crema de queso sedosa y coulis casero de mora, frambuesa y fresa.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ilsBBY0uCDJQwzHZo8Pvw41U4r3tGCo8_1NBJLD2OQ&s=10" alt="Tiramisú Clásico" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="primary" label="Nuevo" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Tiramisú Clásico</div>
            <div class="product-desc">Capas de soletillas humedecidas en café expreso, crema mascarpone aireada y fina capa de cacao amargo.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIrZZQ_rkSrcuTbuyMBmBgYmUSs0SCNGkBPHBjc9eDUVsnCyix6icqamI&s=10" alt="Helado Artesanal" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="teal-8" label="Artesanal" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Copa de Helado Artesanal</div>
            <div class="product-desc">Tres bolas de helado a elección (vainilla, chocolate o fresa) con barquillo y salsa de caramelo.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLt0C3oAbsszahCJASFNAOfMQHDs5kFifuP0vH7IM3vg&s=10" alt="Waffles con Fruta" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="blue-grey-7" label="Recomendado" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Waffles con Frutas</div>
            <div class="product-desc">Waffle belga recién horneado con rodajas de banano, fresas frescas, miel de maple y crema batida.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
          </q-card-section>
        </q-card>

      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
