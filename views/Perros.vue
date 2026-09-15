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

      <!-- TARJETA PRINCIPAL (RECOMENDACIÓN DEL CHEF) -->
      <div class="chef-recommendation">
        <div class="chef-label">
        </div>
        <q-card class="chef-card" flat bordered>
          <div class="chef-card-inner">
            <div class="chef-img-wrapper">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGCe0yDgxNtCdelSQpcvwA2YIgjg3OiJdwJYKiILu5zPT5qEBSBuQmnT82&s=10" 
                alt="El Paisa Supremo" 
                class="chef-img"
              />
            </div>
            <div class="chef-card-body">
              <div>
                <q-badge color="deep-orange" label="Especialidad de la Casa" class="q-mb-sm" />
              </div>
              <div class="product-name chef-title">El Paisa Supremo</div>
              <p class="product-desc chef-desc">
                Salchicha frankfurter en pan suave, piña caramelizada, papas crocantes, tocino, queso fundido, mostaza dulce y salsa de la casa.
              </p>
              <div class="chef-price-row">
                <div class="product-price chef-price">$ 18.900</div>
                <q-badge color="orange-9" label="El Favorito" />
              </div>
            </div>
          </div>
        </q-card>
      </div>

      <!-- SECCIÓN DE PRODUCTOS (GRID 2 COLUMNAS) -->
      <div class="section-header">
        <h2 class="section-title">Nuestros Perros Calientes</h2>
        <p class="section-sub">Elaborados con salchichas de alta calidad y complementos frescos</p>
      </div>

      <div class="products-grid">

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGCe0yDgxNtCdelSQpcvwA2YIgjg3OiJdwJYKiILu5zPT5qEBSBuQmnT82&s=10" 
              alt="Perro Clásico" 
              class="product-img" 
            />
            <q-badge class="product-badge" color="orange-9" label="Más Pedido" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Perro Clásico</div>
            <div class="product-desc">Salchicha tradicional, tomate fresco, mostaza, salsa de tomate y papas fósforo crocantes.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 13.900</div>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxzWXafvuW0Bwbfby500SbYuYUl43nrTgtmGtQHU5Lg&s=10" 
              alt="Perro Ranchero" 
              class="product-img" 
            />
            <q-badge class="product-badge" color="red-8" label="Picante" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Perro Ranchero</div>
            <div class="product-desc">Doble salchicha, jalapeños, queso fundido, cebolla salteada y aderezo ranchero casero.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 16.900</div>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkKejBysd8H3OOxrAmca8-Jfa1ZIr3P6rh4y5T5gQea_77gTsrl7EVzY&s=10" 
              alt="Perro Hawaiano" 
              class="product-img" 
            />
            <q-badge class="product-badge" color="primary" label="Nuevo" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Perro Hawaiano</div>
            <div class="product-desc">Salchicha, trozos de piña dulce a la plancha, queso mozzarella fundido y tocino crujiente.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 15.500</div>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pEU9KH_N4_KLVpH07WbmIYNBEJpRuUnJi4ZF4MYFUW7W01VxPXyWWqM&s=10" 
              alt="Perro Especial" 
              class="product-img" 
            />
            <q-badge class="product-badge" color="teal-8" label="Recomendado" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Perro Especial</div>
            <div class="product-desc">Salchicha premium, queso cheddar líquido, guacamole natural, crema y cebollín fresco picado.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 17.500</div>
          </q-card-section>
        </q-card>

      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

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
</style>