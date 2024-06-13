<template>
  <!-- details -->
  <section class="section details section-background">
    <div class="container">
      <div class="row">
        <!-- title -->
        <div class="col-12">
          <h1 class="details__title">{{ singleFilm.title }}</h1>
        </div>
        <!-- end title -->

        <!-- content -->
        <div class="col-12 col-xl-6">
          <div class="card card--details">
            <div class="row">
              <!-- card cover -->
              <div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-5">
                <div class="card__cover__single__film">
                  <img :src="singleFilm.image" alt="" />
                </div>
              </div>
              <!-- end card cover -->

              <!-- card content -->
              <div class="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
                <div class="card__content">
                  <div class="card__wrap">
                    <span class="card__rate"><i class="icon ion-ios-star"></i>Not rated</span>

                    <ul class="card__list">
                      <li>HD</li>
                      <li>16+</li>
                    </ul>
                  </div>

                  <ul class="card__meta">
                    <li>
                      <span>Thể loại:</span>
                      <a>{{ singleFilm.category_name }}</a>
                    </li>
                    <li><span>Năm sản xuất:</span> {{ singleFilm.year }}</li>
                    <li><span>Thời lượng:</span> {{ singleFilm.thoiluong }}</li>
                    <li>
                      <span>Quốc gia:</span> <a>{{ singleFilm.country }}</a>
                    </li>
                  </ul>

                  <div class="card__description card__description--details">
                    Website nàyđược tổng hợp từ nhiều nguồn trên mạng bởi AI vậy
                    nên toàn bộ phim sẽ được xem ở Tab khác vì vấn đề bản quyền.
                    Mong các bạn thông cảm. Chúc các bạn xem phim hoàn toàn miễn
                    phí vui vẻ ...
                  </div>
                </div>
              </div>
              <!-- end card content -->
            </div>
          </div>
        </div>
        <!-- end content -->

        <!-- player -->
        <div class="col-12 col-xl-6">
          <a target="_blank" :href="singleFilm.streamsUrl" rel="noopener noreferrer">
            <div style="height: 300px">
              <vue-plyr :options="options">
                <video controls crossorigin playsinline>
                  <source size="720" />
                </video>
              </vue-plyr>
            </div>
          </a>
        </div>
        <!-- end player -->

        <div class="col-12">
          <div class="details__wrap">
            <!-- availables -->
            <div class="details__devices">
              <span class="details__devices-title">Available on devices:</span>
              <ul class="details__devices-list">
                <li><i class="icon ion-logo-apple"></i><span>IOS</span></li>
                <li>
                  <i class="icon ion-logo-android"></i><span>Android</span>
                </li>
                <li>
                  <i class="icon ion-logo-windows"></i><span>Windows</span>
                </li>
                <li><i class="icon ion-md-tv"></i><span>Smart TV</span></li>
              </ul>
            </div>
            <!-- end availables -->

            <!-- share -->
            <div class="details__share">
              <span class="details__share-title">Bấm vào nút Play để xem phim</span>

              <ul class="details__share-list">
                <li class="facebook">
                  <a href="#"><i class="icon ion-logo-facebook"></i></a>
                </li>
                <li class="instagram">
                  <a href="#"><i class="icon ion-logo-instagram"></i></a>
                </li>
                <li class="twitter">
                  <a href="#"><i class="icon ion-logo-twitter"></i></a>
                </li>
                <li class="vk">
                  <a href="#"><i class="icon ion-logo-vk"></i></a>
                </li>
              </ul>
            </div>
            <!-- end share -->
          </div>
        </div>
      </div>
    </div>
    <!-- end details content -->

    <!-- phim liên quan -->
    <div class="container" style="margin-top: 50px">
      <section class="section" style="
          background: url('img/section/section.jpg') no-repeat center center;
          background-size: cover;
          margin-top: 70px;
        ">
        <div class="col-12">
          <h2 class="section__title">Xem các phim cùng thể loại</h2>
        </div>
        <div class="container">
          <!-- Biểu tượng loading -->
          <div v-if="isLoading" class="loading-overlay">
            <!-- Biểu tượng loading -->
            <div class="loading-spinner"></div>
          </div>
          <div class="row">
            <!-- card -->
            <div class="col-6 col-sm-4 col-lg-3 col-xl-2" v-for="(movie, index) in moviesRelted" :key="index">
              <div class="card">
                <div class="card__cover">
                  <img :src="movie.image" alt="" />
                  <a class="card__play">
                    <a class="card__play" @click="$router.push(`/${movie._id}/single-film`)">
                      <i class="icon ion-ios-play"></i>
                    </a>
                  </a>
                </div>
                <div class="card__content">
                  <h3 class="card__title">
                    <a>
                      <a @click="$router.push(`/${movie._id}/single-film`)">
                        {{ movie.title }}
                      </a>
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <!-- end card -->
          </div>
        </div>
      </section>
    </div>
  </section>
  <!-- end details -->
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      singleFilm: {},
      moviesRelted: [],
      options: {
        controls: [
          "play-large", // The large play button in the center
          "restart", // Restart playback
          "rewind", // Rewind by the seek time
          "play", // Play/pause playback
          "fast-forward", // Fast forward by the seek time
          "progress", // The progress bar and scrubber for playback and buffering
          "current-time", // The current time of playback
          "duration", // The full duration of the media
          "mute", // Toggle mute
          "volume", // Volume control
          "captions", // Toggle captions
          "settings", // Settings menu
          "pip", // Picture-in-picture (currently Safari only)
          "airplay", // Airplay (currently Safari only)
          "download", // Show a download button with a link to either the current source or a custom URL you specify in your options
          "fullscreen", // Toggle fullscreen
        ],
        settings: ["captions", "quality", "speed"],
        speed: { selected: 1, options: [0.5, 1, 1.5, 2] }, // Playback speeds
        quality: { default: 720, options: [576, 720, 1080] }, // Video quality
      },
    };
  },

  mounted() {
    this.getDataSingleFilm();
  },

  methods: {
    async getDataSingleFilm() {
      try {
        this.isLoading = true;
        const idFilm = this.$route.params.id;
        const res = await this.$axios.get(`/api/movies/get-one-film/${idFilm}`);
        if (res.status == 200) {
          this.singleFilm = res.data.data[0];
          this.isLoading = false;
        }
        const resReled = await this.$axios.get(
          `/api/movies/get-top-12-movie-relative-film?category=${this.singleFilm.category}`
        );
        // console.log(res); //200
        if (resReled.status == 200) {
          this.moviesRelted = resReled.data.data;
          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error fetching single film data:", error);
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.section-background {
  background: url("@/assets/img/section/section.jpg") no-repeat center center;
  background-size: cover;
}

.card__play {
    cursor: pointer;
  }
</style>
