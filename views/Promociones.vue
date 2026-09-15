<template>
  <div class="category-page">
    
    <div class="category-banner" style="background-color: #f57c00;">
      <div class="banner-content">
        <h1 class="banner-title">Promociones</h1>
        <p class="banner-desc">
          Combos especiales y descuentos por tiempo limitado. Precios pensados para disfrutar más pagando menos en cada visita.
        </p>
      </div>
    </div>

    <div class="page-container">

      <q-banner class="promo-alert q-mb-lg" rounded>
        <div style="font-weight: 600; color: #d84315;">Ofertas especiales del día</div>
        <div style="font-size: 0.88rem; color: #555555;">Válidas de lunes a viernes en consumo en salón y para llevar. Combos incluyen bebida personal.</div>
      </q-banner>

      <!-- SECCIÓN DE COMBOS (TARJETAS ANCHAS / HORIZONTALES) -->
      <div class="section-header">
        <h2 class="section-title">Combos del Día</h2>
        <p class="section-sub">Opciones completas con acompañamiento y bebida a precio preferencial</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 36px;">

        <q-card class="promo-card" flat bordered>
          <div class="promo-card-inner">
            <div class="promo-img-wrapper">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEJ1rLsoRT5HisMr_g3m650a9Kl4Gbp7DkqMMxQQIxg&s=10" 
                alt="Combo Hamburguesa Clásica" 
                class="product-img" 
              />
            </div>
            <div class="promo-info">
              <div style="display: flex; gap: 8px; margin-bottom: 8px; flex-wrap: wrap;">
                <q-badge color="red-8" label="50% OFF" class="discount-badge" />
                <q-badge color="positive" label="Hoy Solamente" />
              </div>
              <div class="product-name promo-title">Combo Hamburguesa Clásica</div>
              <p class="product-desc promo-desc">Hamburguesa clásica con queso + papas a la francesa medianas + gaseosa personal bien fría.</p>
              <div class="promo-price-row">
                <div class="product-price promo-price">$ 22.900</div>
                <span class="old-price">$ 45.800</span>
              </div>
            </div>
          </div>
        </q-card>

        <q-card class="promo-card" flat bordered>
          <div class="promo-card-inner">
            <div class="promo-img-wrapper">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOoUp0L4VXYH0kPNLiNn2HVh7rLhaYPzFDj0wABkacoPnPhmEp1XKgWk&s=10" 
                alt="Combo Pizza Personal" 
                class="product-img" 
              />
            </div>
            <div class="promo-info">
              <div style="display: flex; gap: 8px; margin-bottom: 8px; flex-wrap: wrap;">
                <q-badge color="red-8" label="30% OFF" class="discount-badge" />
                <q-badge color="primary" label="Lunes a Miércoles" />
              </div>
              <div class="product-name promo-title">Combo Pizza Personal</div>
              <p class="product-desc promo-desc">Pizza personal de 4 porciones (sabor a elección) + bebida natural de 16 oz preparada al instante.</p>
              <div class="promo-price-row">
                <div class="product-price promo-price">$ 19.900</div>
                <span class="old-price">$ 28.400</span>
              </div>
            </div>
          </div>
        </q-card>

        <q-card class="promo-card" flat bordered>
          <div class="promo-card-inner">
            <div class="promo-img-wrapper">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZXxesSBpLMI_ZkOFPOAKTT3vQMvfx9rPtKIk1iZ_1jFw3gKtSpl-o8lj&s=10" 
                alt="2x1 Perros Calientes" 
                class="product-img" 
              />
            </div>
            <div class="promo-info">
              <div style="display: flex; gap: 8px; margin-bottom: 8px; flex-wrap: wrap;">
                <q-badge color="red-8" label="2x1" class="discount-badge" />
                <q-badge color="orange-9" label="Viernes Especial" />
              </div>
              <div class="product-name promo-title">2x1 en Perros Calientes</div>
              <p class="product-desc promo-desc">Compra un perro clásico o ranchero y recibe el segundo completamente gratis. Aplica de 2:00 PM a 6:00 PM.</p>
              <div class="promo-price-row">
                <div class="product-price promo-price">$ 16.900</div>
                <span class="old-price">$ 33.800</span>
              </div>
            </div>
          </div>
        </q-card>

      </div>

      <!-- SECCIÓN DE PRODUCTOS (GRID 2 COLUMNAS) -->
      <div class="section-header">
        <h2 class="section-title">Productos con Descuento</h2>
        <p class="section-sub">Precios especiales en referencias seleccionadas</p>
      </div>

      <div class="products-grid">

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdoxAQxMgx8JtnM6ZUFw7JDdqhLImppdJunHLzAPyRA&s=10" 
              alt="Brownie con Helado" 
              class="product-img" 
            />
            <q-badge class="product-badge" color="red-8" label="20% OFF" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Brownie con Helado</div>
            <div class="product-desc">Brownie de chocolate tibio con una bola de helado de vainilla y salsa dulce.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 11.500</div>
            <span class="old-price">$ 14.400</span>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYH8sENu8Pg7OAPs7PivuXoS-0DdJu7MclJmvDcDsrMQ&s=10" 
              alt="Malteada Doble" 
              class="product-img" 
            />
            <q-badge class="product-badge" color="primary" label="Promo Tarde" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Malteada Doble</div>
            <div class="product-desc">Malteada grande con sabor a elección. Disponible en la franja horaria de la tarde.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 12.000</div>
            <span class="old-price">$ 15.000</span>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCcs_kyLCDEqQljzMtj7Rd_iwz5MK2yh-NErdOT80dJORP0_JAV6Tu_NBw&s=10" 
              alt="Pizza Familiar" 
              class="product-img" 
            />
            <q-badge class="product-badge" color="orange-9" label="Fin de Semana" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Pizza Familiar 8 Porciones</div>
            <div class="product-desc">Para compartir entre 3 y 4 personas. Posibilidad de combinar dos sabores en una sola masa.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 42.000</div>
            <span class="old-price">$ 50.000</span>
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA1r4JLuteIAwJ2TrH6bpX-ayfDEU94ur5S4OzwKBbHG-hcb-mpNRLoKk&s=10" 
              alt="Combo Universitario" 
              class="product-img" 
            />
            <q-badge class="product-badge" color="positive" label="Estudiante" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Combo Universitario</div>
            <div class="product-desc">Perro clásico + jugo natural de 12 oz + postre del día presentando carné estudiantil vigente.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            <div class="product-price">$ 17.900</div>
            <span class="old-price">$ 23.000</span>
          </q-card-section>
        </q-card>

      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

/* 1. Muestra la imagen 100% COMPLETA sin recortar */
.chef-img,
.promo-img,
.product-img {
  width: 100% !important;
  height: auto !important; /* Permite que el alto se adapte a la imagen original */
  object-fit: contain !important; 
  display: block;
}

/* 2. Quita el aspect-ratio fijo para que el contenedor se encoja/agrande según la foto */
.chef-img-wrapper,
.promo-img-wrapper,
.product-img-wrapper {
  position: relative;
  width: 100%;
  height: auto; /* El contenedor se ajusta automáticamente al alto de la imagen */
  overflow: hidden;
  background-color: transparent;
}
.promo-alert {
  background: #fff8e1;
  border: 1px solid #ffe082;
}

/* Tarjetas horizontales de Promociones */
.promo-card {
  border-radius: 12px;
  overflow: hidden;
}

.promo-card-inner {
  display: flex;
  flex-direction: row;
  height: 230px; /* Misma altura estandarizada */
}

.promo-img-wrapper {
  flex: 0.9;
  height: 100%;
  position: relative;
  background-color: #f0f0f0;
}

.promo-info {
  flex: 1.1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.promo-title {
  font-size: 1.35rem !important;
  font-weight: 700;
  color: #1a1a1a;
  margin: 4px 0 8px 0;
}

.promo-desc {
  font-size: 0.95rem;
  line-height: 1.4;
  color: #555;
  margin: 0;
}

.promo-price-row {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.promo-price {
  font-size: 1.35rem !important;
  font-weight: bold;
  color: #c62828;
}

.old-price {
  font-size: 1rem;
  color: #888;
  text-decoration: line-through;
}

/* Grid de 2 columnas para productos con descuento */
.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 440px;
}

.product-img-wrapper {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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

.product-price-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.product-price {
  font-size: 1.35rem;
  font-weight: bold;
  color: #c62828;
}

/* Adaptación responsive para celulares */
@media (max-width: 650px) {
  .promo-card-inner {
    flex-direction: column;
    height: auto;
  }
  
  .promo-img-wrapper {
    height: 180px;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>