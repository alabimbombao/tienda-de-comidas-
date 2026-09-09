<template>
  <div class="category-page">
    
    <div class="category-banner" style="background-color: #c62828;">
      <div class="banner-content">
        <h1 class="banner-title">Hamburguesas</h1>
        <p class="banner-desc">
          Jugosas, artesanales y llenas de sabor. Cada hamburguesa es preparada con carne 100% de res, ingredientes frescos y salsas de la casa.
        </p>
      </div>
    </div>

    <div class="page-container">

      
      <div class="chef-recommendation">
        <div class="chef-label">
          <q-icon name="restaurant_menu" size="1.2rem" color="deep-orange" />
          
        </div>
        <q-card class="chef-card" flat bordered>
          <div class="chef-card-inner">
            <div class="chef-img-wrapper">
              
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4T_eG23cbCXaQlTnJmiWZ9HUKh_Z_D7_E_41SfQlP8GNtz7oFMHUINez&s=10" alt="La Clásica Supreme" class="chef-img"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="img-placeholder chef-placeholder">
                <q-icon name="photo_camera" size="2rem" color="grey-6" />
                
              </div>
            </div>
            <div class="chef-card-body">
              <div>
                <q-badge color="deep-orange" label="Especialidad de la Casa" class="q-mb-sm" />
              </div>
              <div class="product-name" style="font-size: 1.3rem; margin: 6px 0 10px;">La Clásica Supreme</div>
              <p class="product-desc">
                Doble carne de res premium, queso cheddar derretido, lechuga crocante, tomate fresco, cebolla caramelizada, pepinillos y salsa de la casa en pan brioche tostado.
              </p>
              <div style="margin-top: 14px; display: flex; align-items: center; gap: 12px;">
                
                <q-badge color="red-7" label="Más Pedido" />
              </div>
            </div>
          </div>
        </q-card>
      </div>

      
      <div class="section-header">
        <h2 class="section-title">Nuestras Hamburguesas</h2>
        <p class="section-sub">Preparadas al momento con ingredientes frescos y de calidad</p>
      </div>

      <div class="products-grid">

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJRR423bpfbzVDdGoh1JabUsXDQtk9OYNicscmHx_0tG7pUdFD6rYaM0g&s=10" alt="Hamburguesa BBQ" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="red-8" label="Picante" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Hamburguesa BBQ</div>
            <div class="product-desc">Carne de res a la parrilla, salsa BBQ ahumada, cebolla crujiente, jalapeños y queso pepper jack.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FTHRicGmHVjxqSXMtmiEjxdX7JYMRwaSYqSeUsyVDTqZl1Bd8KYKI8Pm&s=10" alt="Burger Verde" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="positive" label="Vegetariano" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Burger Verde</div>
            <div class="product-desc">Medallón de lentejas y champiñones, aguacate fresco, lechuga, tomate y mayonesa de cilantro.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFYxp2XFpo3AAPfzjxD8qafSusuOTgVJoSEcd1AQbXQ&s" alt="Doble Explosión" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="primary" label="Nuevo" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Doble Explosión</div>
            <div class="product-desc">Doble carne de 180g, tocino crocante, queso fundido, pepinillos y salsa de la casa.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0lke_TItmxp3nDPn3Io5yX0PhfT-lQfDE1jGyleNIag&s=10" alt="Pollo Crujiente" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="orange-9" label="Más Pedido" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Pollo Crujiente</div>
            <div class="product-desc">Pechuga de pollo apanada y frita, ensalada de col casera, pepinillos y aderezo especial.</div>
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