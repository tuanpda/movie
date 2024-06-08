<template>
  <!-- fiml category -->
  <section
    class=""
    style="
      background: url('img/section/section.jpg') no-repeat center center;
      background-size: cover;
    "
  >
    <div class="container">
      <!-- Biểu tượng loading -->
      <div v-if="isLoading" class="loading-overlay">
        <!-- Biểu tượng loading -->
        <div class="loading-spinner"></div>
      </div>
      <div class="row">
        <!-- section title -->
        <div class="col-12">
          <h2 class="section__title">Phim Hoạt Hình</h2>
        </div>
        <!-- end section title -->

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
                <nuxt-link :to="`${movie._id}/single-film`">
                  <i class="icon ion-ios-play"></i>
                </nuxt-link>
              </a>
            </div>
            <div class="card__content">
              <h3 class="card__title">
                <a>
                  <nuxt-link :to="`/${movie._id}/single-film`">
                    {{ movie.title }}
                  </nuxt-link>
                </a>
              </h3>
              <span class="card__category">
                <a href="#">Anime</a>
              </span>
            </div>
          </div>
        </div>
        <!-- end card -->

        <!-- section btn -->
        <div class="col-12">
          <nuxt-link :to="`/AnimelFilm/category-film`">
            <a class="section__btn" style="color: white">Xem thêm</a>
          </nuxt-link>
        </div>
        <!-- end section btn -->
      </div>
    </div>
  </section>
  <!-- end film category -->
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      isLoading: false,
    };
  },

  mounted() {
    this.getMovies();
  },

  methods: {
    async getMovies() {
      try {
        this.isLoading = true;
        const res = await this.$axios.get(`/api/movies/get-top-10-movie-anime`);
        if (res.status == 200) {
          this.movies = res.data.data;
          this.isLoading = false;
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
  },
};
</script>
