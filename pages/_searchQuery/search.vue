<template>
  <div>
    <!-- Biểu tượng loading -->
    <div v-if="isLoading" class="loading-overlay">
      <!-- Biểu tượng loading -->
      <div class="loading-spinner"></div>
    </div>
    <div style="margin-top: 150px">
      <!-- catalog movies -->
      <div class="catalog" v-if="movies.length > 0">
        <div class="container">
          <div class="row">
            <!-- card -->
            <div
              class="col-6 col-sm-4 col-lg-3 col-xl-2"
              v-for="(movie, index) in movies"
              :key="index"
            >
              <div class="card">
                <div class="card__cover">
                  <img :src="movie.image" alt="" />

                  <a class="card__play">
                    <nuxt-link :to="`/${movie._id}/single-film`">
                      <i class="icon ion-ios-play"></i>
                    </nuxt-link>
                  </a>
                </div>
                <div class="card__content">
                  <h3 class="card__title">
                    <a href="#">{{ movie.title }}</a>
                  </h3>
                </div>
              </div>
            </div>
            <!-- end card -->
          </div>
        </div>
      </div>
      <!-- end catalog -->

      <!-- catalog movies series -->
      <div class="catalog" v-if="moviesSeries.length > 0">
        <div class="container">
          <div class="row">
            <!-- card -->
            <div
              class="col-6 col-sm-4 col-lg-3 col-xl-2"
              v-for="(movie, index) in moviesSeries"
              :key="index"
            >
              <div class="card">
                <div class="card__cover">
                  <img :src="movie.image" alt="" />

                  <a class="card__play">
                    <nuxt-link :to="`/${movie._id}/single-film`">
                      <i class="icon ion-ios-play"></i>
                    </nuxt-link>
                  </a>
                </div>
                <div class="card__content">
                  <h3 class="card__title">
                    <a href="#">{{ movie.title }}</a>
                  </h3>
                </div>
              </div>
            </div>
            <!-- end card -->
          </div>
        </div>
      </div>
      <!-- end catalog -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      moviesSeries: [],
      searchQuery: this.$route.params.searchQuery,
      isLoading: false,
      currentPage: 1,
      totalPages: 1,
      pagination: {
        count: 0,
        next: null,
        prev: null,
      },
    };
  },

  mounted() {
    this.searchResult();
  },

  methods: {
    async searchResult() {
      this.isLoading = true;
      try {
        const res = await this.$axios.get(
          `/api/movies/search-movie?query=${this.searchQuery}`
        );
        this.movies = res.data.data;

        const resSeriMove = await this.$axios.get(
          `/api/movies/search-movie-series?query=${this.searchQuery}`
        );
        this.moviesSeries = resSeriMove.data.data;
        // console.log(this.moviesSeries);
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.section-background {
  background: url('@/assets/img/section/section.jpg') no-repeat center center;
  background-size: cover;
  margin-bottom: 50px;
}
.paginator__item.disabled {
  pointer-events: none;
  opacity: 0.5;
}
.paginator__item--ellipsis {
  pointer-events: none;
}
</style>
