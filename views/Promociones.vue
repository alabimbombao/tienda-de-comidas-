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
        <template v-slot:avatar>
          <q-icon name="local_offer" color="orange-9" size="1.6rem" />
        </template>
        <div style="font-weight: 600; color: #d84315;">Ofertas especiales del día</div>
        <div style="font-size: 0.88rem; color: #555555;">Válidas de lunes a viernes en consumo en salón y para llevar. Combos incluyen bebida personal.</div>
      </q-banner>

      
      <div class="section-header">
        <h2 class="section-title">Combos del Día</h2>
        <p class="section-sub">Opciones completas con acompañamiento y bebida a precio preferencial</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 36px;">

        
        <q-card class="promo-card" flat bordered>
          <div class="promo-card-inner">
            <div class="promo-img-wrapper">
              
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEJ1rLsoRT5HisMr_g3m650a9Kl4Gbp7DkqMMxQQIxg&s=10" alt="Combo Hamburguesa Clásica" class="product-img"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="img-placeholder">
                <q-icon name="photo_camera" size="2rem" color="grey-6" />
                
              </div>
            </div>
            <div class="promo-info">
              <div style="display: flex; gap: 8px; margin-bottom: 8px; flex-wrap: wrap;">
                <q-badge color="red-8" label="50% OFF" class="discount-badge" />
                <q-badge color="positive" label="Hoy Solamente" />
              </div>
              <div class="product-name" style="font-size: 1.15rem;">Combo Hamburguesa Clásica</div>
              <p class="product-desc">Hamburguesa clásica con queso + papas a la francesa medianas + gaseosa personal bien fría.</p>
              <div style="margin-top: 10px; display: flex; align-items: center; gap: 12px;">
                
                
              </div>
            </div>
          </div>
        </q-card>

        
        <q-card class="promo-card" flat bordered>
          <div class="promo-card-inner">
            <div class="promo-img-wrapper">
              
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOoUp0L4VXYH0kPNLiNn2HVh7rLhaYPzFDj0wABkacoPnPhmEp1XKgWk&s=10" alt="Combo Pizza Personal" class="product-img"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="img-placeholder">
                <q-icon name="photo_camera" size="2rem" color="grey-6" />
                
              </div>
            </div>
            <div class="promo-info">
              <div style="display: flex; gap: 8px; margin-bottom: 8px; flex-wrap: wrap;">
                <q-badge color="red-8" label="30% OFF" class="discount-badge" />
                <q-badge color="primary" label="Lunes a Miércoles" />
              </div>
              <div class="product-name" style="font-size: 1.15rem;">Combo Pizza Personal</div>
              <p class="product-desc">Pizza personal de 4 porciones (sabor a elección) + bebida natural de 16 oz preparada al instante.</p>
              <div style="margin-top: 10px; display: flex; align-items: center; gap: 12px;">
                
                
              </div>
            </div>
          </div>
        </q-card>

        
        <q-card class="promo-card" flat bordered>
          <div class="promo-card-inner">
            <div class="promo-img-wrapper">
              
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZXxesSBpLMI_ZkOFPOAKTT3vQMvfx9rPtKIk1iZ_1jFw3gKtSpl-o8lj&s=10" alt="2x1 Perros Calientes" class="product-img"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="img-placeholder">
                <q-icon name="photo_camera" size="2rem" color="grey-6" />
                
              </div>
            </div>
            <div class="promo-info">
              <div style="display: flex; gap: 8px; margin-bottom: 8px; flex-wrap: wrap;">
                <q-badge color="red-8" label="2x1" class="discount-badge" />
                <q-badge color="orange-9" label="Viernes Especial" />
              </div>
              <div class="product-name" style="font-size: 1.15rem;">2x1 en Perros Calientes</div>
              <p class="product-desc">Compra un perro clásico o ranchero y recibe el segundo completamente gratis. Aplica de 2:00 PM a 6:00 PM.</p>
              <div style="margin-top: 10px; display: flex; align-items: center; gap: 12px;">
                
                
              </div>
            </div>
          </div>
        </q-card>

      </div>

      
      <div class="section-header">
        <h2 class="section-title">Productos con Descuento</h2>
        <p class="section-sub">Precios especiales en referencias seleccionadas</p>
      </div>

      <div class="products-grid">

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdoxAQxMgx8JtnM6ZUFw7JDdqhLImppdJunHLzAPyRA&s=10" alt="Postre Promo" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="red-8" label="20% OFF" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Brownie con Helado</div>
            <div class="product-desc">Brownie de chocolate tibio con una bola de helado de vainilla y salsa dulce.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYH8sENu8Pg7OAPs7PivuXoS-0DdJu7MclJmvDcDsrMQ&s=10" alt="Malteada Doble" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="primary" label="Promo Tarde" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Malteada Doble</div>
            <div class="product-desc">Malteada grande con sabor a elección. Disponible en la franja horaria de la tarde.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCcs_kyLCDEqQljzMtj7Rd_iwz5MK2yh-NErdOT80dJORP0_JAV6Tu_NBw&s=10" alt="Pizza Familiar" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="orange-9" label="Fin de Semana" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Pizza Familiar 8 Porciones</div>
            <div class="product-desc">Para compartir entre 3 y 4 personas. Posibilidad de combinar dos sabores en una sola masa.</div>
          </q-card-section>
          <q-card-section class="product-price-row">
            
            
          </q-card-section>
        </q-card>

        <q-card class="product-card" flat bordered>
          <div class="product-img-wrapper">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA1r4JLuteIAwJ2TrH6bpX-ayfDEU94ur5S4OzwKBbHG-hcb-mpNRLoKk&s=10" alt="Combo Estudiante" class="product-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="img-placeholder">
              <q-icon name="photo_camera" size="1.8rem" color="grey-6" />
              
            </div>
            <q-badge class="product-badge" color="positive" label="Estudiante" />
          </div>
          <q-card-section class="product-info">
            <div class="product-name">Combo Universitario</div>
            <div class="product-desc">Perro clásico + jugo natural de 12 oz + postre del día presentando carné estudiantil vigente.</div>
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
.promo-alert {
  background: #fff8e1;
  border: 1px solid #ffe082;
}
</style>
