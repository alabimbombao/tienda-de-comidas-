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

      <!-- TARJETA PRINCIPAL (RECOMENDACIÓN DEL CHEF) -->
      <div class="chef-recommendation">
        <div class="chef-label">
        </div>
        <q-card class="chef-card" flat bordered>
          <div class="chef-card-inner">
            <div class="chef-img-wrapper">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAII46gv_kYsg43F2YJnK-xl06Tko9VrFu54rqSw-NQ&s" 
                alt="Pizza Cuatro Quesos" 
                class="chef-img"
              />
            </div>
            <div class="chef-card-body">
              <div>
                <q-badge color="deep-orange" label="Especialidad de la Casa" class="q-mb-sm" />
              </div>
              <div class="product-name chef-title">Pizza Cuatro Quesos</div>
              <p class="product-desc chef-desc">
                Masa delgada crocante, salsa de tomate San Marzano, mozzarella fresca, queso parmesano, gorgonzola y un toque aromático de albahaca fresca.
              </p>
              <div class="chef-price-row">
                <div class="product-price chef-price">$ 32.000</div>
                <q-badge color="pink-8" label="Selección del Chef" />
              </div>
            </div>
          </div>
        </q-card>
      </div>

      <!-- SECCIÓN DE PRODUCTOS (GRID 2 COLUMNAS) -->
      <div class="section-header">
        <h2 class="section-title">Nuestras Pizzas</h2>
        <p class="section-sub">Horneadas a alta temperatura para una base crujiente y bordes dorados</p>
      </div>

      <div class="products-grid">

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5cXrJFwsRJ0pkFhe08K7qi2euZ0XTYYwcfkEW9NJMg&s=10" 
              alt="Pizza Margarita" 
              class="product-img" 
            />
            <q-badge class="product-badge" color="positive" label="Vegetariano" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Pizza Margarita</div>
            <div class="product-desc">Salsa pomodoro artesanal, mozzarella fresca, rodajas de tomate y hojas de albahaca natural.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 26.000</div>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQeKc2Zcxbq4dZlnU9cVVgNj9iNnN-wBQN-FiSwAQQRQ&s=10" 
              alt="Pizza Pepperoni" 
              class="product-img" 
            />
            <q-badge class="product-badge" color="orange-9" label="Más Pedido" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Pizza Pepperoni</div>
            <div class="product-desc">Salsa de tomate casera, queso mozzarella fundido y abundante pepperoni curado de primera calidad.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 29.500</div>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            <img 
              src="https://asassyspoon.com/wp-content/uploads/pizza-cubana-recipe-asassyspoon-17.jpg" 
              alt="Pizza BBQ Pollo" 
              class="product-img" 
            />
            <q-badge class="product-badge" color="primary" label="Nuevo" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Pizza BBQ Pollo</div>
            <div class="product-desc">Base de salsa barbacoa dulce, tiras de pechuga a la plancha, cebolla morada y queso gouda.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 31.000</div>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdLRFw-bHBIAgELoderXJAx0O9VjEHtP5T0AlllKSvALoqNaYb43EktWka&s=10" 
              alt="Pizza Hawaiana" 
              class="product-img" 
            />
            <q-badge class="product-badge" color="blue-grey-7" label="Tradicional" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Pizza Hawaiana</div>
            <div class="product-desc">Salsa pomodoro, mozzarella generosa, jamón ahumado seleccionado y trozos de piña dulce asada.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 28.000</div>
          </q-card-section>
        </q-card>

      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Contenedor Grid ajustado a 2 columnas */
.products-grid {
  display: grid;
  /* Fuerza exactamente 2 columnas iguales */
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

/* Ajustes para hacer la tarjeta más amplia */
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 440px; /* Incrementa la altura total */
}

/* Mayor altura para las imágenes */
.product-img-wrapper {
  position: relative;
  height: 250px; /* Aumenta la altura de la imagen */
  overflow: hidden;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-name {
  font-size: 1.35rem;
  font-weight: bold;
}

.product-desc {
  font-size: 1rem;
  color: #555;
  margin-top: 8px;
}

/* Adaptación para pantallas pequeñas (celulares) */
@media (max-width: 650px) {
  .products-grid {
    grid-template-columns: 1fr; /* Pasa a 1 tarjeta por fila en móviles */
  }
}
.chef-recommendation {
  margin-bottom: 28px;
}

.chef-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
}

.chef-card-inner {
  display: flex;
  flex-direction: row;
  height: 230px; /* Tamaño reducido de la tarjeta */
}

.chef-img-wrapper {
  flex: 0.9; /* Proporción más pequeña para la imagen */
  height: 100%;
  position: relative;
  background-color: #f0f0f0;
}

.chef-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Permite cargar cualquier URL externa sin deformar */
  display: block;
}

.chef-card-body {
  flex: 1.1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.chef-title {
  font-size: 1.35rem !important;
  font-weight: 700;
  color: #1a1a1a;
  margin: 4px 0 8px 0;
}

.chef-desc {
  font-size: 0.95rem;
  line-height: 1.4;
  color: #555;
  margin: 0;
}

.chef-price-row {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.chef-price {
  font-size: 1.35rem !important;
  font-weight: bold;
  color: #c62828;
}

/* Adaptación para celulares */
@media (max-width: 650px) {
  .chef-card-inner {
    flex-direction: column;
    height: auto;
  }
  
  .chef-img-wrapper {
    height: 180px;
  }
}
</style>