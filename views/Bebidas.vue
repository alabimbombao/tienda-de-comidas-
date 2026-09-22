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
  </div>
  <q-card class="chef-card" flat bordered>
    <div class="chef-card-inner">
      <div class="chef-img-wrapper">
        <!-- Reemplaza la URL en src por la imagen de internet que desees -->
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfEVLMQ0nTW27fom5UUT3tpw20OJCkjvA0JYGx1ARKig&s" 
          alt="Limonada de Coco" 
          class="chef-img"
        />
      </div>
      <div class="chef-card-body">
        <div>
          <q-badge color="primary" label="Bebida Insignia" class="q-mb-sm" />
        </div>
        <div class="product-name chef-title">Limonada de Coco</div>
        <p class="product-desc chef-desc">
          Zumo de limón recién exprimido combinado con crema de coco espesa, hielo frappé y un toque de hierbabuena fresca.
        </p>
        <div class="chef-price-row">
          <div class="product-price chef-price">$ 11.000</div>
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
              
              
            </div>
            <q-badge class="product-badge" color="positive" label="Natural" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Jugos Naturales</div>
            <div class="product-desc">Mora, lulo, maracuyá, mango o naranja en agua o leche con fruta fresca seleccionada.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 7.500</div>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://lirp.cdn-website.com/b4fb73a9/dms3rep/multi/opt/29256887321_51b21baab4_z-640x464-1920w.jpg" alt="Milkshake" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              
              
            </div>
            <q-badge class="product-badge" color="orange-9" label="Más Pedido" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Malteada Cremosa</div>
            <div class="product-desc">Preparada con helado artesanal de vainilla, chocolate, fresa u oreo con crema chantilly.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 12.000</div>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo87tDHAHGCqJ4a_E-IQV494aX_M4mI68oglgzmJa7Bg&s" alt="Gaseosa" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              
              
            </div>
            <q-badge class="product-badge" color="primary" label="Nuevo" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Gaseosas en Lata</div>
            <div class="product-desc">Variedad de marcas en presentación personal de 330ml, servidas frías con hielo y limón.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 5.500</div>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgsB46wlTr5uIExUwSuKkT2-RrB64EhvVzO_W4pWZG75UEe76NO9pRok&s=10" alt="Agua Aromática" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              
              
            </div>
            <q-badge class="product-badge" color="blue-grey-7" label="Caliente" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Infusión de Frutas</div>
            <div class="product-desc">Bebida caliente aromatizada con hierbas naturales, trozos de fruta deshidratada y miel pura.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 6.500</div>
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
  object-fit: cover; /* Ajusta la imagen de internet sin deformarla */
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
  color: #1565c0;
}

/* Responsivo para celulares */
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