<template>
  <div class="app-container">
    
    <header class="header">
      <div class="header-content">
        
        <div class="logo">
          <img 
            src="https://i.pinimg.com/736x/f7/0f/67/f70f6714f653630dc1b802bcd71f1597.jpg" 
            alt="Logo" 
            class="logo-img"
          />
          
        </div>

        
        <nav class="nav-menu">
          <router-link to="/" class="menu-btn">
            Nosotros
          </router-link>
          <router-link to="/hamburguesa" class="menu-btn">
            Hamburguesas
          </router-link>
          <router-link to="/perros" class="menu-btn">
            Perros
          </router-link>
          <router-link to="/pizzas" class="menu-btn">
            Pizzas
          </router-link>
          <router-link to="/bebidas" class="menu-btn">
            Bebidas
          </router-link>
          <router-link to="/postres" class="menu-btn">
            Postres
          </router-link>
          <router-link to="/Promociones" class="menu-btn promo-btn">
            Promociones
          </router-link>
        </nav>
      </div>
    </header>

    
    <main class="main-body">
      <router-view></router-view>
    </main>

    
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo">
            <img 
              src="https://i.pinimg.com/736x/f7/0f/67/f70f6714f653630dc1b802bcd71f1597.jpg" 
              alt="Logo" 
              class="footer-logo-img"
            />
            
          </div>
          <p class="footer-text">Comida rápida con el mejor sabor y calidad.</p>
        </div>

        <div class="footer-nav">
          <router-link to="/" class="footer-link">Nosotros</router-link>
          <router-link to="/hamburguesa" class="footer-link">Hamburguesas</router-link>
          <router-link to="/perros" class="footer-link">Perros</router-link>
          <router-link to="/pizzas" class="footer-link">Pizzas</router-link>
          <router-link to="/bebidas" class="footer-link">Bebidas</router-link>
          <router-link to="/postres" class="footer-link">Postres</router-link>
          <router-link to="/Promociones" class="footer-link">Promociones</router-link>
        </div>
      </div>
      <div class="footer-copy">
        <p>© 2026 Ruta Del Sabor. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* CONTENEDOR GENERAL */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f7f9fc;
}

/* HEADER */
.header {
  background-color: #ff5722;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
}

/* LOGO */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: bold;
}

.logo-img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* MENÚ DE BOTONES */
.nav-menu {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

/* BOTONES CON to="" */
.menu-btn {
  background-color: #ffffff;
  color: #d84315;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  border: 1px solid transparent;
}

.menu-btn:hover {
  background-color: #ffebe6;
}

/* ESTADO ACTIVO */
.menu-btn.router-link-active {
  background-color: #bf360c;
  color: #ffffff;
}

/* BOTÓN DE PROMOCIONES */
.promo-btn {
  background-color: #ffd54f;
  color: #e65100;
}

.promo-btn:hover {
  background-color: #ffca28;
}

.promo-btn.router-link-active {
  background-color: #ff8f00;
  color: #ffffff;
}

/* CONTENIDO PRINCIPAL */
.main-body {
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 20px;
}

/* FOOTER */
.footer {
  background-color: #263238;
  color: #eceff1;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.15rem;
  font-weight: bold;
  color: #ffffff;
}

.footer-logo-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 1.5px solid #ffffff;
}

.footer-text {
  font-size: 0.9rem;
  color: #b0bec5;
}

/* ENLACES DEL FOOTER */
.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.footer-link {
  color: #cfd8dc;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover,
.footer-link.router-link-active {
  color: #ffab91;
}

/* DERECHOS RESERVADOS */
.footer-copy {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  padding: 14px 20px;
  font-size: 0.85rem;
  color: #90a4ae;
}

</style>
