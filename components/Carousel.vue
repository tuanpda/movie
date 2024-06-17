<template>
  <section class="section">
    <div class="container">
      <div v-if="isLoading" class="loading-overlay">
        <div class="loading-spinner"></div>
      </div>
      <div
        class="carousel"
        @mouseenter="stopAutoSlide"
        @mouseleave="startAutoSlide"
      >
        <div class="carousel-inner">
          <div
            v-for="(item, index) in movies"
            :key="index"
            class="carousel-item"
            :class="{ active: index === currentIndex }"
          >
            <div class="carousel-content">
              <div class="left-panel">
                <h3 style="color: yellow">
                  <nuxt-link
                    :to="`/${item._id}/single-film`"
                    style="color: inherit"
                  >
                    {{ item.title }}
                  </nuxt-link>
                </h3>

                <p style="font-weight: bold; color: red">
                  {{ item.year }} - {{ item.country }}
                </p>
                <p>Nội dung: {{ item.content }}</p>
              </div>
              <div class="right-panel">
                <img :src="item.image" alt="Movie Image" />
              </div>
            </div>
            <div
              class="background-blur"
              :style="{ backgroundImage: `url(${item.image})` }"
            ></div>
            <div class="overlay"></div>
          </div>
        </div>
        <div class="carousel-controls">
          <div class="indicators">
            <span
              v-for="(item, index) in movies"
              :key="index"
              class="indicator"
              :class="{ active: index === currentIndex }"
              @click="goToSlide(index)"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      isLoading: false,
      currentIndex: 0,
      interval: null,
    };
  },

  mounted() {
    this.getMovies();
    this.startAutoSlide();
  },

  beforeDestroy() {
    this.stopAutoSlide();
  },

  methods: {
    async getMovies() {
      try {
        this.isLoading = true;
        const res = await this.$axios.get(
          `/api/movies/get-top-10-movie-hanhdong`
        );
        if (res.status === 200) {
          this.movies = res.data.data;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    nextSlide() {
      if (this.currentIndex < this.movies.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    startAutoSlide() {
      this.interval = setInterval(this.nextSlide, 10000);
    },
    stopAutoSlide() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.section {
  padding: 20px;
  position: relative;
  margin-top: 80px;
}
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.loading-spinner {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  border: solid 2px linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
  height: 350px; /* Fixed height */
}
.carousel-inner {
  display: flex;
  position: relative;
  height: 100%;
}
.carousel-item {
  min-width: 100%;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
}
.carousel-item.active {
  opacity: 1;
  position: relative;
  z-index: 2;
}
.carousel-content {
  display: flex;
  width: 100%;
  height: 100%;
}
.left-panel {
  width: 66.66%;
  padding: 20px;
  box-sizing: border-box;
  color: white;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.left-panel h3 {
  margin: 0;
  font-size: 24px;
}
.left-panel p {
  margin: 5px 0;
}
.right-panel {
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: relative;
}
.right-panel img {
  max-width: 100%;
  max-height: 90%;
  height: auto;
  object-fit: cover;
  border: solid 2px white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
}
.background-blur {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(10px);
  z-index: 1;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
}

.overlay {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(34, 34, 34, 0.5);
  background: linear-gradient(
    45deg,
    rgba(34, 34, 34, 0.7),
    rgba(34, 34, 34, 0.3)
  );
  overflow: hidden;
}
.carousel-controls {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  z-index: 3;
}
.indicators {
  display: flex;
  margin: 0 10px;
}
.indicator {
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}
.indicator.active {
  background-color: #3498db;
}
</style>
