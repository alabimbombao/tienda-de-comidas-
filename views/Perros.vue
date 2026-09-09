<template>
  <div class="category-page">
    
    <div class="category-banner" style="background-color: #e65100;">
      <div class="banner-content">
        <h1 class="banner-title">Perros Calientes</h1>
        <p class="banner-desc">
          La tradición en su máxima expresión. Perros calientes preparados con salchichas seleccionadas, salsas caseras y los mejores ingredientes.
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
              
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGCe0yDgxNtCdelSQpcvwA2YIgjg3OiJdwJYKiILu5zPT5qEBSBuQmnT82&s=10" alt="El Paisa Supremo" class="chef-img"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="img-placeholder chef-placeholder">
                <q-icon name="photo_camera" size="2rem" color="grey-6" />
                
              </div>
            </div>
            <div class="chef-card-body">
              <div>
                <q-badge color="deep-orange" label="Especialidad de la Casa" class="q-mb-sm" />
              </div>
              <div class="product-name" style="font-size: 1.3rem; margin: 6px 0 10px;">El Paisa Supremo</div>
              <p class="product-desc">
                Salchicha frankfurter en pan suave, piña caramelizada, papas crocantes, tocino, queso fundido, mostaza dulce y salsa de la casa.
              </p>
              <div style="margin-top: 14px; display: flex; align-items: center; gap: 12px;">
                
                <q-badge color="orange-9" label="El Favorito" />
              </div>
            </div>
          </div>
        </q-card>
      </div>

      
      <div class="section-header">
        <h2 class="section-title">Nuestros Perros Calientes</h2>
        <p class="section-sub">Elaborados con salchichas de alta calidad y complementos frescos</p>
      </div>

      <div class="products-grid">

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGCe0yDgxNtCdelSQpcvwA2YIgjg3OiJdwJYKiILu5zPT5qEBSBuQmnT82&s=10" alt="Perro Clásico" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="orange-9" label="Más Pedido" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Perro Clásico</div>
            <div class="product-desc">Salchicha tradicional, tomate fresco, mostaza, salsa de tomate y papas fósforo crocantes.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxzWXafvuW0Bwbfby500SbYuYUl43nrTgtmGtQHU5Lg&s=10" alt="Perro Ranchero" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="red-8" label="Picante" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Perro Ranchero</div>
            <div class="product-desc">Doble salchicha, jalapeños, queso fundido, cebolla salteada y aderezo ranchero casero.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkKejBysd8H3OOxrAmca8-Jfa1ZIr3P6rh4y5T5gQea_77gTsrl7EVzY&s=10" alt="Perro Hawaiano" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="primary" label="Nuevo" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Perro Hawaiano</div>
            <div class="product-desc">Salchicha, trozos de piña dulce a la plancha, queso mozzarella fundido y tocino crujiente.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pEU9KH_N4_KLVpH07WbmIYNBEJpRuUnJi4ZF4MYFUW7W01VxPXyWWqM&s=10" alt="Perro Especial" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="teal-8" label="Recomendado" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Perro Especial</div>
            <div class="product-desc">Salchicha premium, queso cheddar líquido, guacamole natural, crema y cebollín fresco picado.</div>
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