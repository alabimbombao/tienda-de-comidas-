<template>
  <div class="category-page">
    
    <div class="category-banner" style="background-color: #1565c0;">
      <div class="banner-content">
        <h1 class="banner-title">Bebidas</h1>
        <p class="banner-desc">
          Refrescantes, naturales y preparadas al instante. La mejor selección de jugos, malteadas y bebidas frías para acompañar cada plato.
        </p>
      </div>
    </div>

    <div class="page-container">

      
      <div class="chef-recommendation">
        <div class="chef-label" style="color: #1565c0;">
          <q-icon name="local_bar" size="1.2rem" color="primary" />
          
        </div>
        <q-card class="chef-card" flat bordered>
          <div class="chef-card-inner">
            <div class="chef-img-wrapper">
              
              <img src="" alt="Limonada de Coco" class="chef-img"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="img-placeholder chef-placeholder">
                <q-icon name="photo_camera" size="2rem" color="grey-6" />
                
              </div>
            </div>
            <div class="chef-card-body">
              <div>
                <q-badge color="primary" label="Bebida Insignia" class="q-mb-sm" />
              </div>
              <div class="product-name" style="font-size: 1.3rem; margin: 6px 0 10px;">Limonada de Coco</div>
              <p class="product-desc">
                Zumo de limón recién exprimido combinado con crema de coco espesa, hielo frappé y un toque de hierbabuena fresca.
              </p>
              <div style="margin-top: 14px; display: flex; align-items: center; gap: 12px;">
                
                <q-badge color="blue-8" label="Top Ventas" />
              </div>
            </div>
          </div>
        </q-card>
      </div>

      
      <div class="section-header">
        <h2 class="section-title">Nuestras Bebidas</h2>
        <p class="section-sub">Opciones frías y calientes preparadas al momento</p>
      </div>

      <div class="products-grid">

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOeLZrm9zxr0xiWt3UZZMOGMfQGpitAvjADN1KazkMaH856WO4DGmGWE&s=10" alt="Jugo Natural" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="positive" label="Natural" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Jugos Naturales</div>
            <div class="product-desc">Mora, lulo, maracuyá, mango o naranja en agua o leche con fruta fresca seleccionada.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://lirp.cdn-website.com/b4fb73a9/dms3rep/multi/opt/29256887321_51b21baab4_z-640x464-1920w.jpg" alt="Milkshake" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="orange-9" label="Más Pedido" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Malteada Cremosa</div>
            <div class="product-desc">Preparada con helado artesanal de vainilla, chocolate, fresa u oreo con crema chantilly.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrkYToNw081UV6t_OSd5TRX_A-zrGUskGv2UZ6-QAAAg&s=10" alt="Gaseosa" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="primary" label="Nuevo" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Gaseosas en Lata</div>
            <div class="product-desc">Variedad de marcas en presentación personal de 330ml, servidas frías con hielo y limón.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgsB46wlTr5uIExUwSuKkT2-RrB64EhvVzO_W4pWZG75UEe76NO9pRok&s=10" alt="Agua Aromática" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="blue-grey-7" label="Caliente" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Infusión de Frutas</div>
            <div class="product-desc">Bebida caliente aromatizada con hierbas naturales, trozos de fruta deshidratada y miel pura.</div>
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
