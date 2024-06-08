<template>
  <div>
    <!-- Biểu tượng loading -->
    <div v-if="isLoading" class="loading-overlay">
        <!-- Biểu tượng loading -->
        <div class="loading-spinner"></div>
      </div>
    <!-- page title -->
    <section class="section section--first section--bg section-background">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section__wrap">
              <!-- section title -->
              <h2 class="section__title">Phim bộ</h2>
              <!-- end section title -->

              <!-- breadcrumb -->
              <ul class="breadcrumb">
                <li class="breadcrumb__item"><a href="/">Home</a></li>
                <li class="breadcrumb__item breadcrumb__item--active">
                  Phim bộ
                </li>
              </ul>
              <!-- end breadcrumb -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end page title -->

    <!-- catalog -->
    <div class="catalog">
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
                  <nuxt-link :to="`/${movie._id}/single-film-series`">
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

          <!-- paginator -->
          <div class="col-12">
            <ul class="paginator">
              <li
                class="paginator__item paginator__item--prev"
                :class="{ disabled: !pagination.prev }"
              >
                <a href="#" @click.prevent="changePage(currentPage - 1)"
                  ><i class="icon ion-ios-arrow-back"></i
                ></a>
              </li>
              <li
                class="paginator__item"
                v-for="page in visiblePages"
                :key="page"
                :class="{ 'paginator__item--active': page === currentPage }"
              >
                <a href="#" @click.prevent="changePage(page)">{{ page }}</a>
              </li>
              <li
                class="paginator__item paginator__item--next"
                :class="{ disabled: !pagination.next }"
              >
                <a href="#" @click.prevent="changePage(currentPage + 1)"
                  ><i class="icon ion-ios-arrow-forward"></i
                ></a>
              </li>
            </ul>
          </div>
          <!-- end paginator -->
        </div>
      </div>
    </div>
    <!-- end catalog -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      category_name: "",
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
    this.getMovies();
  },

  methods: {
    async getMovies(page = 1) {
      // console.log(this.$route.query);
      // this.category_name = this.$route.query.category_name;
      // const cat = this.$route.query.category;
      const lim = 12;
      try {
        this.isLoading = true;
        const res = await this.$axios.get(
          `/api/movies/get-all-movie-phimbo?limit=${lim}&page=${page}`
        );
        if (res.status == 200) {
          this.movies = res.data.results;
          this.pagination = {
            count: res.data.info.count,
            next: res.data.info.next ? this.currentPage + 1 : null,
            prev: res.data.info.prev ? this.currentPage - 1 : null,
          };
          this.totalPages = res.data.info.pages;
          this.currentPage = page;
          this.isLoading = false;
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
    changePage(page) {
      if (page && page !== this.currentPage) {
        this.getMovies(page);
      }
    },
  },

  computed: {
    visiblePages() {
      let pages = [];
      if (this.totalPages <= 7) {
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (this.currentPage <= 4) {
          pages = [1, 2, 3, 4, 5, "...", this.totalPages];
        } else if (this.currentPage >= this.totalPages - 3) {
          pages = [
            1,
            "...",
            this.totalPages - 4,
            this.totalPages - 3,
            this.totalPages - 2,
            this.totalPages - 1,
            this.totalPages,
          ];
        } else {
          pages = [
            1,
            "...",
            this.currentPage - 1,
            this.currentPage,
            this.currentPage + 1,
            "...",
            this.totalPages,
          ];
        }
      }
      return pages;
    },
  },
};
</script>

<style scoped>
.section-background {
  background: url("@/assets/img/section/section.jpg") no-repeat center center;
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
