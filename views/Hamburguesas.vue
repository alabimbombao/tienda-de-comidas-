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
  </div>
  <q-card class="chef-card" flat bordered>
    <div class="chef-card-inner">
      <div class="chef-img-wrapper">
        <!-- Reemplaza la URL en src por la imagen de internet que desees -->
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4T_eG23cbCXaQlTnJmiWZ9HUKh_Z_D7_E_41SfQlP8GNtz7oFMHUINez&s=10" 
          alt="La Clásica Supreme" 
          class="chef-img"
        />
      </div>
      <div class="chef-card-body">
        <div>
          <q-badge color="deep-orange" label="Especialidad de la Casa" class="q-mb-sm" />
        </div>
        <div class="product-name chef-title">La Clásica Supreme</div>
        <p class="product-desc chef-desc">
          Doble carne de res premium, queso cheddar derretido, lechuga crocante, tomate fresco, cebolla caramelizada, pepinillos y salsa de la casa en pan brioche tostado.
        </p>
        <div class="chef-price-row">
          <div class="product-price chef-price">$ 24.900</div>
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
              
              
            </div>
            <q-badge class="product-badge" color="red-8" label="Picante" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Hamburguesa BBQ</div>
            <div class="product-desc">Carne de res a la parrilla, salsa BBQ ahumada, cebolla crujiente, jalapeños y queso pepper jack.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 22.500</div>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FTHRicGmHVjxqSXMtmiEjxdX7JYMRwaSYqSeUsyVDTqZl1Bd8KYKI8Pm&s=10" alt="Burger Verde" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              
              
            </div>
            <q-badge class="product-badge" color="positive" label="Vegetariano" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Burger Verde</div>
            <div class="product-desc">Medallón de lentejas y champiñones, aguacate fresco, lechuga, tomate y mayonesa de cilantro.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 19.900</div>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFYxp2XFpo3AAPfzjxD8qafSusuOTgVJoSEcd1AQbXQ&s" alt="Doble Explosión" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              
              
            </div>
            <q-badge class="product-badge" color="primary" label="Nuevo" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Doble Explosión</div>
            <div class="product-desc">Doble carne de 180g, tocino crocante, queso fundido, pepinillos y salsa de la casa.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 27.900</div>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0lke_TItmxp3nDPn3Io5yX0PhfT-lQfDE1jGyleNIag&s=10" alt="Pollo Crujiente" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              
              
            </div>
            <q-badge class="product-badge" color="orange-9" label="Más Pedido" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Pollo Crujiente</div>
            <div class="product-desc">Pechuga de pollo apanada y frita, ensalada de col casera, pepinillos y aderezo especial.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 21.000</div>
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