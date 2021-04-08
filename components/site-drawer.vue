<template>
  <div class="drawer">
    <transition name="fade" appear>
      <div
        v-if="$store.state.drawerIsOpen"
        class="back-shadow"
        @click="$store.dispatch('setDrawerStatus', false)"
      ></div>
    </transition>
    <transition name="drawer-pop" appear>
      <div v-if="$store.state.drawerIsOpen" class="box-items">
        <div class="row drawer__box-items__logo-header">
          <div
            class="col-12 d-flex justify-content-center align-items-center pt-3"
            @click="$store.dispatch('setDrawerStatus', false)"
          ></div>
          <nav>
            <hr />
            <!--main nav-->
            <ul class="mt-2">
              <li
                class="nav-item active"
                @click="$store.dispatch('setDrawerStatus', false)"
              >
                <nuxt-link
                  class="nav-link"
                  exact
                  to="#"
                  :class="{ active: $route.path == '/' }"
                  >Home</nuxt-link
                >
              </li>
              <li><br /><br /><br /><br /></li>
            </ul>
          </nav>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Drawer',
}
</script>
