<template>
  <nav class="nav-bottom">
    <ul class="nav-list">
      <li>
        <router-link to="/" class="nav-item">
          <span class="nav-icon">🏠</span>
          <span>Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link to="/products" class="nav-item">
          <span class="nav-icon">📦</span>
          <span>Produits</span>
        </router-link>
      </li>
      <li>
        <router-link to="/clients" class="nav-item">
          <span class="nav-icon">👥</span>
          <span>Clients</span>
        </router-link>
      </li>
      <li>
        <router-link to="/mouvement" class="nav-item">
          <span class="nav-icon">🔄</span>
          <span>Mouvements</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
a {
  list-style: none;
  text-decoration: none;
}
a.router-link-active {
  background: #67cf96;
}
</style>
