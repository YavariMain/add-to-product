<template>
  <section class="se-product">
    <div class="container-xl">
      <div class="row">
        <div class="w-100 mb-5">
          <h2>products cat title</h2>
        </div>
        <div class="col-xl-4">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
            <div class="d-flex">
              <b-button href="#" variant="primary">add to cart</b-button>
              <b-button
                :href="'/detail'"
                variant="success"
                style="margin-left: 5px"
                >more</b-button
              >
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // get API
      async getIncidents() {
        const res = await this.$store.dispatch('getIncidents')
        this.incidents = res.data.data.incidents
      },
    }
  },

  mounted() {
    this.getIncidents()
  },
}
</script>
