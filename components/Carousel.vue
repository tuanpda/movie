<template>
    <!-- fiml category -->
    <section
      class="section"
      style="
        background: url('img/section/section.jpg') no-repeat center center;
        background-size: cover;
        margin-top: 70px;
      "
    >
      <div class="container">
        <!-- Biểu tượng loading -->
        <div v-if="isLoading" class="loading-overlay">
          <!-- Biểu tượng loading -->
          <div class="loading-spinner"></div>
        </div>
        <div class="row">
          <!-- card -->
          <div class="owl-carousel owl-theme">
      <div v-for="(item, index) in movies" :key="index" class="item">
        <img :src="item.image" alt="Slide Image">
        <div class="content">
          <h3>{{ item.title }}</h3>
        </div>
      </div>
    </div>
          <!-- end card -->
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
          const res = await this.$axios.get(
            `/api/movies/get-top-10-movie-hanhdong`
          );
          // console.log(res.status); //200
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
  