<!-- 출력순서: 8 -->
<!-- 사진: 그리드, 팝업창 -->
<!-- 글자: TBD -->
<!-- 글자효과: TBD -->
<!-- 그리드, 클릭 시 팝업 -->
<template>
  <div class="gallery">
    <div class="gallery-container">
      <span class="title">갤러리</span>
        <v-app>
          <v-container grid-list-xs>
            <v-row>
              <v-col v-for="(item, index) in filteredItems" :key="index" color="grey lighten-3" flat cols="6" lg="6" sm="6">
                <v-img
                  class="card"
                  :src="getImage(item)"
                  :lazy-src="getImage(item)"
                  @click="openDialog(getImage(item), index)"
                  height="100%"
                >
                  <template v-slot:placeholder>
                    <v-row class="ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey-lighten-5">
                      </v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
            <!--  Dialog Carousel -->
            <v-dialog v-model="dialog" fullscreen :scrim="false">
              <div class="card-info">
                <span> {{ carouselStartIndex + 1 }} / {{ items.length }} </span>
                <v-btn class="xmark" variant="plain" @click="closeDialog">
                  <font-awesome-icon icon="fa-regular fa-circle-xmark" size="xl" />
                </v-btn>
              </div>
              <v-card class="card-item">
                <v-carousel class="carousel" v-model="carouselStartIndex" :show-arrows="false" hide-delimiters>
                  <v-carousel-item
                    v-for="(item, index) in items"
                    :key="index"
                    :src="getImage(item)"
                    contains
                  ></v-carousel-item>
                </v-carousel>
              </v-card>
            </v-dialog>
            <!--  Dialog Carousel -->

          </v-container>
        </v-app>
    </div>  
  </div>
</template>
  
<script>
export default {
  name: 'GalleryCard',
  props: ['avif'],
  data() {
    return {
      items: [
        {
          id: 1,
          popup: false,
          avif: require("../assets/carousel/2.avif"),
          jpg: require("../assets/carousel/2.jpg"),
          img: require("../assets/carousel/2.avif")
        },
        {
          id: 2,
          popup: false,
          avif: require("../assets/carousel/6.avif"),
          jpg: require("../assets/carousel/6.jpg"),
          img: require("../assets/carousel/6.avif")
        },
        {
          id: 3,
          popup: false,
          avif: require("../assets/carousel/7.avif"),
          jpg: require("../assets/carousel/7.jpg"),
          img: require("../assets/carousel/7.avif")
        },
        {
          id: 4,
          popup: false,
          avif: require("../assets/carousel/8.avif"),
          jpg: require("../assets/carousel/8.jpg"),
          img: require("../assets/carousel/8.avif")
        },
        {
          id: 5,
          popup: false,
          avif: require("../assets/carousel/1.avif"),
          jpg: require("../assets/carousel/1.jpg"),
          img: require("../assets/carousel/1.avif")
        },
        {
          id: 6,
          popup: false,
          avif: require("../assets/carousel/5.avif"),
          jpg: require("../assets/carousel/5.jpg"),
          img: require("../assets/carousel/5.avif")
        },
        {
          id: 7,
          popup: false,
          avif: require("../assets/carousel/3.avif"),
          jpg: require("../assets/carousel/3.jpg"),
          img: require("../assets/carousel/3.avif")
        },
        {
          id: 8,
          popup: false,
          avif: require("../assets/carousel/4.avif"),
          jpg: require("../assets/carousel/4.jpg"),
          img: require("../assets/carousel/4.avif")
        },
        {
          id: 9,
          popup: false,
          avif: require("../assets/carousel/9.avif"),
          jpg: require("../assets/carousel/9.jpg"),
          img: require("../assets/carousel/9.avif")
        },
        {
          id: 10,
          popup: false,
          avif: require("../assets/carousel/10.avif"),
          jpg: require("../assets/carousel/10.jpg"),
          img: require("../assets/carousel/10.avif")
        },
        {
          id: 11,
          popup: false,
          avif: require("../assets/carousel/11.avif"),
          jpg: require("../assets/carousel/11.jpg"),
          img: require("../assets/carousel/11.avif")
        },
        {
          id: 12,
          popup: false,
          avif: require("../assets/carousel/12.avif"),
          jpg: require("../assets/carousel/12.jpg"),
          img: require("../assets/carousel/12.avif")
        },
        {
          id: 13,
          popup: false,
          avif: require("../assets/carousel/13.avif"),
          jpg: require("../assets/carousel/13.jpg"),
          img: require("../assets/carousel/13.avif")
        },
        {
          id: 14,
          popup: false,
          avif: require("../assets/carousel/14.avif"),
          jpg: require("../assets/carousel/14.jpg"),
          img: require("../assets/carousel/14.avif")
        },
        {
          id: 15,
          popup: false,
          avif: require("../assets/carousel/15.avif"),
          jpg: require("../assets/carousel/15.jpg"),
          img: require("../assets/carousel/15.avif")
        },
        {
          id: 16,
          popup: false,
          avif: require("../assets/carousel/16.avif"),
          jpg: require("../assets/carousel/16.jpg"),
          img: require("../assets/carousel/16.avif")
        },
        {
          id: 17,
          popup: false,
          avif: require("../assets/carousel/17.avif"),
          jpg: require("../assets/carousel/17.jpg"),
          img: require("../assets/carousel/17.avif")
        },
        {
          id: 18,
          popup: false,
          avif: require("../assets/carousel/18.avif"),
          jpg: require("../assets/carousel/18.jpg"),
          img: require("../assets/carousel/18.avif")
        },
        {
          id: 19,
          popup: false,
          avif: require("../assets/carousel/19.avif"),
          jpg: require("../assets/carousel/19.jpg"),
          img: require("../assets/carousel/19.avif")
        },
        {
          id: 20,
          popup: false,
          avif: require("../assets/carousel/20.avif"),
          jpg: require("../assets/carousel/20.jpg"),
          img: require("../assets/carousel/20.avif")
        },
        {
          id: 21,
          popup: false,
          avif: require("../assets/carousel/21.avif"),
          jpg: require("../assets/carousel/21.jpg"),
          img: require("../assets/carousel/21.avif")
        },
        {
          id: 22,
          popup: false,
          avif: require("../assets/carousel/22.avif"),
          jpg: require("../assets/carousel/22.jpg"),
          img: require("../assets/carousel/22.avif")
        },

      ],
      dialog: false,
      dialogImg: "",
      carouselStartIndex: 0
    };
  },
  computed: {
    filteredItems() {
      return this.items.slice(0, 6); // 6개 item만 선별
    }
  },
  methods: {
    getImage(item) {
      if (this.avif) {
        return item.avif;
      } else {
        return item.jpg;
      }
    },
    openDialog(img, index) {
      this.dialogImg = img;
      this.dialog = true;
      this.carouselStartIndex = index;
    },
    closeDialog() {
      this.dialog = false;
    }
  },
};
</script>
  
<style scoped>
.gallery {
  position: relative;
  display: flex;
  justify-content: center;
  height: calc(var(--vh) * 110);
}

.title {
  display: inline-block;
  height: 3.4%;
  border-bottom: solid 0.1em #5d493b;
  color: #5d493b;
}

.xmark {
  position: absolute;
  right: 0;
  top: 10%;
  color: #BDBDBD;
  background-color: transparent;
}

.card-info {
  position: relative;
  display: flex;
  color: #BDBDBD;
  background-color: rgb(54, 54, 54);
  z-index: 1;
}

.card-info span {
  position: relative;
  display: flex;
  left: 5%;
  top: 50%;
}

.card-item {
  display: flex;
  background-color: rgb(54, 54, 54);
  z-index: 0;
}

.card-item .carousel {
  top: 50%;
  transform: translate(0%, -50%);
}

/* 데스크탑 버전 */
@media screen and (min-device-width: 769px) and (max-device-width : 1024px) {
  .gallery-container {
    position: absolute;
    /* top: 0; */
    left: 0%;
    width: 100%;
  }
}

/* 아이패드 프로 */
@media only screen and (min-device-width : 1024px) {
  .gallery {
    height: calc(var(--vh) * 150);
  }
  .gallery-container {
    position: absolute;
    /* top: 0; */
    left: 0%;
    width: 100%;
  }
}

/* 아이패드 (가로) */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  .gallery {
    height: calc(var(--vh) * 180);
  }
  .gallery-container {
    position: absolute;
    /* top: 0; */
    left: 0%;
    width: 100%;
  }
}

/* 최소 heihgt */
@media (max-height : 800px) {
  .gallery {
    height: 1250px;
  }
}

/* 갤럭시 폴드 */
@media screen and (max-device-width : 359px) {
  .gallery {
    height: calc(var(--vh) * 130);
  }
  .gallery-container {
    position: absolute;
    /* top: 5%; */
    left: 0%;
    width: 100%;
  }
}

/* 아이폰 SE */
@media screen and (min-device-width : 359px) and (max-device-width : 376px) {
  .gallery {
    height: calc(var(--vh) * 130);
  }
  .gallery-container {
    position: absolute;
    /* top: 2%; */
    left: 0%;
    width: 100%;
  }
}

/* 모바일 버전 */
@media screen and (min-device-width : 376px) and (max-device-width: 767px) {
  .gallery {
    height: calc(var(--vh) * 130);
  }
  .gallery-container {
    position: absolute;
    /* top: 2%; */
    left: 0%;
    width: 100%;
  }
}

/* 아이패드 미니 버전 */
@media screen and (min-device-width : 768px) and (max-device-width: 769px) {
  .gallery {
    height: calc(var(--vh) * 160);
  }
  .gallery-container {
    position: absolute;
    /* top: 2%; */
    left: 0%;
    width: 100%;
  }
}

/* landscape */
@media (orientation: landscape) {
  .gallery {
    height: 1450px;
  }
}
</style>