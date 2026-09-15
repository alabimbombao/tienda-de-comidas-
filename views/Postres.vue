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

      <!-- TARJETA PRINCIPAL (RECOMENDACIÓN DEL CHEF) -->
      <div class="chef-recommendation">
        <div class="chef-label" style="color: #6a1b9a;">
        </div>
        <q-card class="chef-card" flat bordered>
          <div class="chef-card-inner">
            <div class="chef-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80" 
                alt="Brownie Volcánico" 
                class="chef-img"
              />
            </div>
            <div class="chef-card-body">
              <div>
                <q-badge color="purple-9" label="Especialidad Dulce" class="q-mb-sm" />
              </div>
              <div class="product-name chef-title">Brownie Volcánico</div>
              <p class="product-desc chef-desc">
                Bizcocho tibio de chocolate semiamargo con centro cremoso fundente, acompañado de bola de helado de vainilla y lluvia de nueces.
              </p>
              <div class="chef-price-row">
                <div class="product-price chef-price">$ 14.500</div>
                <q-badge color="purple-7" label="Favorito" />
              </div>
            </div>
          </div>
        </q-card>
      </div>

      <!-- SECCIÓN DE PRODUCTOS (GRID 2 COLUMNAS) -->
      <div class="section-header">
        <h2 class="section-title">Nuestra Repostería</h2>
        <p class="section-sub">Elaborados diariamente por nuestros maestros reposteros</p>
      </div>

      <div class="products-grid">

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJs0GjSEdTm74xGb8ye2LSK-pSDGOVCkyC6TKkt0kzGw&s" 
              alt="Cheesecake Frutos Rojos" 
              class="product-img" 
            />
            <q-badge class="product-badge" color="orange-9" label="Más Pedido" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Cheesecake Frutos Rojos</div>
            <div class="product-desc">Base crujiente de galleta dorada, crema de queso sedosa y coulis casero de mora, frambuesa y fresa.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 12.900</div>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ilsBBY0uCDJQwzHZo8Pvw41U4r3tGCo8_1NBJLD2OQ&s=10" 
              alt="Tiramisú Clásico" 
              class="product-img" 
            />
            <q-badge class="product-badge" color="primary" label="Nuevo" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Tiramisú Clásico</div>
            <div class="product-desc">Capas de soletillas humedecidas en café expreso, crema mascarpone aireada y fina capa de cacao amargo.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 13.500</div>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIrZZQ_rkSrcuTbuyMBmBgYmUSs0SCNGkBPHBjc9eDUVsnCyix6icqamI&s=10" 
              alt="Copa de Helado Artesanal" 
              class="product-img" 
            />
            <q-badge class="product-badge" color="teal-8" label="Artesanal" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Copa de Helado Artesanal</div>
            <div class="product-desc">Tres bolas de helado a elección (vainilla, chocolate o fresa) con barquillo y salsa de caramelo.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 10.000</div>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLt0C3oAbsszahCJASFNAOfMQHDs5kFifuP0vH7IM3vg&s=10" 
              alt="Waffles con Frutas" 
              class="product-img" 
            />
            <q-badge class="product-badge" color="blue-grey-7" label="Recomendado" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Waffles con Frutas</div>
            <div class="product-desc">Waffle belga recién horneado con rodajas de banano, fresas frescas, miel de maple y crema batida.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 15.000</div>
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