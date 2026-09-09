<template>
  <div class="category-page">
    
    <div class="category-banner" style="background-color: #ad1457;">
      <div class="banner-content">
        <h1 class="banner-title">Pizzas</h1>
        <p class="banner-desc">
          Masa artesanal horneada a la perfección, salsa de tomate casera y quesos seleccionados. Nuestras pizzas brindan una experiencia de sabor inigualable.
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
              
              <img src="" alt="Pizza Cuatro Quesos" class="chef-img"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="img-placeholder chef-placeholder">
                <q-icon name="photo_camera" size="2rem" color="grey-6" />
                
              </div>
            </div>
            <div class="chef-card-body">
              <div>
                <q-badge color="deep-orange" label="Especialidad de la Casa" class="q-mb-sm" />
              </div>
              <div class="product-name" style="font-size: 1.3rem; margin: 6px 0 10px;">Pizza Cuatro Quesos</div>
              <p class="product-desc">
                Masa delgada crocante, salsa de tomate San Marzano, mozzarella fresca, queso parmesano, gorgonzola y un toque aromático de albahaca fresca.
              </p>
              <div style="margin-top: 14px; display: flex; align-items: center; gap: 12px;">
                
                <q-badge color="pink-8" label="Selección del Chef" />
              </div>
            </div>
          </div>
        </q-card>
      </div>

      
      <div class="section-header">
        <h2 class="section-title">Nuestras Pizzas</h2>
        <p class="section-sub">Horneadas a alta temperatura para una base crujiente y bordes dorados</p>
      </div>

      <div class="products-grid">

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5cXrJFwsRJ0pkFhe08K7qi2euZ0XTYYwcfkEW9NJMg&s=10" alt="Pizza Margarita" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="positive" label="Vegetariano" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Pizza Margarita</div>
            <div class="product-desc">Salsa pomodoro artesanal, mozzarella fresca, rodajas de tomate y hojas de albahaca natural.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQeKc2Zcxbq4dZlnU9cVVgNj9iNnN-wBQN-FiSwAQQRQ&s=10" alt="Pizza Pepperoni" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="orange-9" label="Más Pedido" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Pizza Pepperoni</div>
            <div class="product-desc">Salsa de tomate casera, queso mozzarella fundido y abundante pepperoni curado de primera calidad.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://asassyspoon.com/wp-content/uploads/pizza-cubana-recipe-asassyspoon-17.jpg" alt="Pizza BBQ Pollo" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="primary" label="Nuevo" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Pizza BBQ Pollo</div>
            <div class="product-desc">Base de salsa barbacoa dulce, tiras de pechuga a la plancha, cebolla morada y queso gouda.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdLRFw-bHBIAgELoderXJAx0O9VjEHtP5T0AlllKSvALoqNaYb43EktWka&s=10" alt="Pizza Hawaiana" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="blue-grey-7" label="Tradicional" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Pizza Hawaiana</div>
            <div class="product-desc">Salsa pomodoro, mozzarella generosa, jamón ahumado seleccionado y trozos de piña dulce asada.</div>
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