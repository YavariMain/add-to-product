<template>
  <div>
    <!--drawer-->
    <SetDrawer />
    <section class="se-menu pt-3">
      <div class="container-xl">
        <div class="row">
          <div class="w-100">
            <b-navbar toggleable="lg">
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item :href="'/'" active>Home</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                  <b-nav-item
                    href="#"
                    @click="
                      $store.dispatch(
                        'setDrawerStatus',
                        !$store.state.drawerIsOpen
                      )
                    "
                    ><img
                      src="https://img.icons8.com/fluent/48/000000/add-basket.png"
                  /></b-nav-item>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </div>
      </div>
    </section>
    <Nuxt />
  </div>
</template>

<script>
import Vue from 'vue'
import SetDrawer from '../components/site-drawer.vue'

export default Vue.extend({
  components: { SetDrawer },
  data() {
    return {
      showNavigation: false,
      visible: false,
    }
  },
})
</script>
