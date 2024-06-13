<template>
  <!-- header -->
  <header class="header">
    <div class="header__wrap">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header__content">
              <!-- header logo -->
              <a href="/" class="header__logo">
                <img
                  src="img/myLogo/phim-mien-phi-high-resolution-logo-white-transparent.png"
                  alt=""
                />
              </a>
              <!-- end header logo -->

              <!-- header nav -->
              <ul
                :class="[
                  'header__nav',
                  { 'header__nav--active': isNavVisible },
                ]"
              >
                <!-- dropdown -->
                <li class="header__nav-item">
                  <a
                    class="dropdown-toggle header__nav-link"
                    href="/"
                    role="button"
                    id="dropdownMenuHome"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >Home</a
                  >
                </li>
                <!-- end dropdown -->

                <!-- dropdown -->
                <li class="header__nav-item">
                  <nuxt-link to="/categorys/category-film-series"
                    ><a href="" class="header__nav-link">Phim Bộ</a></nuxt-link
                  >
                </li>
                <!-- end dropdown -->

                <li class="header__nav-item">
                  <nuxt-link :to="`/ActionFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Hành động</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item">
                  <nuxt-link :to="`/AnimelFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Hoạt hình</a
                    >
                  </nuxt-link>
                </li>

                <!-- cate phim mobiles -->
                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/18PlusFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Cấp 3</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/WarFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Chiến tranh</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/MartialFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Võ thuật</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/SportFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Thể thao</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/ChinhkichFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Chính kịch</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/StudentFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Học đường</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/FictionlFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Viễn tưởng</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/FamilyFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Gia đình</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/FunnyFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Hài hước</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/SecretFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Bí ẩn</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/ThanthoaiFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Thần thoại</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/LoveFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Tình cảm</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/SoulFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Tâm lý</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/MusicFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Âm nhạc</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/ClassicFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Cổ điển</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/HorrorFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Bí ẩn</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/PolFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Hình sự</a
                    >
                  </nuxt-link>
                </li>

                <li class="header__nav-item d-md-none">
                  <nuxt-link :to="`/CotrangFilm/category-film`">
                    <a href="javascript:void(0)" class="header__nav-link"
                      >Phim Cổ trang</a
                    >
                  </nuxt-link>
                </li>

                <!-- dropdown -->
                <li class="dropdown header__nav-item">
                  <a
                    class="dropdown-toggle header__nav-link header__nav-link--more"
                    href="javascript:void(0)"
                    @click="toggleDropdown('more')"
                    role="button"
                    id="dropdownMenuMore"
                    aria-haspopup="true"
                    aria-expanded="false"
                    ><i class="icon ion-ios-more"></i
                  ></a>
                  <ul
                    class="dropdown-menu header__dropdown-menu"
                    :class="{ show: isDropdownVisible.more }"
                    aria-labelledby="dropdownMenuMore"
                  >
                    <li>
                      <nuxt-link :to="`/SportFilm/category-film`"
                        ><a href="">Thể thao</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/ChinhkichFilm/category-film`"
                        ><a href="">Chính kịch</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/StudentFilm/category-film`"
                        ><a href="">Học đường</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/WarFilm/category-film`"
                        ><a href="">Chiến tranh</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/FictionlFilm/category-film`"
                        ><a href="">Viễn tưởng</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/FamilyFilm/category-film`"
                        ><a href="">Gia đình</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/MartialFilm/category-film`"
                        ><a href="">Võ thuật</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/FunnyFilm/category-film`"
                        ><a href="">Hài hước</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/ActionFilm/category-film`"
                        ><a href="">Hành động</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/18PlusFilm/category-film`"
                        ><a href="">Cấp 3</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/SecretFilm/category-film`"
                        ><a href="">Bí ẩn</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/ThanthoaiFilm/category-film`"
                        ><a href="">Thần thoại</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/AnimelFilm/category-film`"
                        ><a href="">Anime</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/LoveFilm/category-film`"
                        ><a href="">Tình cảm</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/SoulFilm/category-film`"
                        ><a href="">Tâm lý</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/MusicFilm/category-film`"
                        ><a href="">Âm nhạc</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/ClassicFilm/category-film`"
                        ><a href="">Cổ điển</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/HorrorFilm/category-film`"
                        ><a href="">Kinh dị</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/PolFilm/category-film`"
                        ><a href="">Hình sự</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link :to="`/CotrangFilm/category-film`"
                        ><a href="">Cổ trang</a></nuxt-link
                      >
                    </li>
                  </ul>
                </li>
                <!-- end dropdown -->
              </ul>
              <!-- end header nav -->

              <!-- header auth -->
              <div class="header__auth" style="padding-right: 30px;">
                <button
                  class="header__search-btn"
                  type="button"
                  @click="toggleSearch"
                >
                  <i class="icon ion-ios-search"></i>
                </button>
              </div>
              <!-- end header auth -->

              <!-- header menu btn -->
              <button class="header__btn" type="button" @click="toggleNav">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <!-- end header menu btn -->
            </div>
          </div>
        </div>
        <div class="row" v-if="isSearchVisible">
          <div class="col-12">
            <div class="header__search-content">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Tìm kiếm bất kỳ phim nào bạn muốn ..."
              />
              <button @click="search" type="button">search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- end header -->
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      isSearchVisible: false,
      isDropdownVisible: {
        catalog: false,
        more: false,
      },
      isNavVisible: false,
    };
  },

  methods: {
    toggleSearch() {
      this.isSearchVisible = !this.isSearchVisible;
    },

    toggleDropdown(menu) {
      this.$set(this.isDropdownVisible, menu, !this.isDropdownVisible[menu]);
    },

    toggleNav() {
      this.isNavVisible = !this.isNavVisible; // Toggle nav visibility
    },

    search() {
      if (this.searchQuery.trim()) {
        this.$router.push(`/${encodeURIComponent(this.searchQuery)}/search`);
        this.isSearchVisible = false;
      }
    },
  },
};
</script>

<style>
/* Hide the "More" menu in mobile view */
@media (max-width: 1024px) {
  .header__nav-item .header__nav-link--more {
    display: none;
  }

  .header__nav {
    max-height: calc(100vh - 200px); /* Adjust based on your header height */
    overflow-y: auto; /* Enable vertical scrolling */
    overflow-x: hidden; /* Disable horizontal scrolling */
    top: 60px !important;
  }

  .header__wrap {
    margin-left: 0px !important;
  }

  .header__btn {
    position: absolute;
    right: 30px;
  }

}

.header__dropdown {
  position: relative;
  display: block;
  width: 100%;
}

.header__dropdown-menu {
  position: absolute;
  background-color: #2b2b31;
  padding: 15px 20px;
  display: flex; /* Sử dụng flexbox */
  flex-wrap: wrap; /* Cho phép các phần tử wrap xuống dòng */
  width: auto; /* Đặt lại chiều rộng tự động */
  min-width: 500px; /* Đặt chiều rộng tối thiểu */
  text-align: left;
  z-index: -1;
  pointer-events: none;
  opacity: 0;
  -webkit-box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.3);
  -webkit-transition: 0.4s ease;
  -moz-transition: 0.4s ease;
  transition: 0.4s ease;
  margin-top: 0;
  top: 100%;
}

.header__dropdown-menu:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  display: block;
  background-image: -moz-linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
  background-image: -webkit-linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
  background-image: -ms-linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
  background-image: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
  -webkit-box-shadow: 0 0 20px 0 rgba(255, 88, 96, 0.5);
  box-shadow: 0 0 20px 0 rgba(255, 88, 96, 0.5);
}

.header__dropdown-menu li {
  padding: 5px; /* Thêm khoảng cách bên trong giữa các mục */
  flex: 1 0 22%; /* Chiếm 22% chiều rộng của menu để tạo khoảng cách giữa các mục */
  box-sizing: border-box; /* Đảm bảo padding và border được tính vào chiều rộng */
  margin: 5px; /* Thêm khoảng cách bên ngoài giữa các mục */
}

.header__dropdown-menu a {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.75);
  line-height: 40px;
  display: block;
  font-weight: 300;
  text-align: center; /* Canh giữa chữ trong các mục */
}

.header__dropdown-menu a:hover {
  color: #ff55a5;
}

.header__dropdown-menu.show {
  z-index: 1000;
  pointer-events: auto;
  opacity: 1;
  margin-top: 10px;
}
</style>
