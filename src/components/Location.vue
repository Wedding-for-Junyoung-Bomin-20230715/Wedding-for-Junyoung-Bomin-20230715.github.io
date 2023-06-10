<!-- 출력순서: 7 -->
<!-- 사진: X -->
<!-- 글자: 더컨벤션 잠실 3층 아모르홀 -->
<!-- 글자효과: 스크롤에 따라 어두웠다가 밝아지게 -->
<!-- Maps API 사용 -->
<template>
  <div class="location" ref="startAnimation">
    <span class="title">오시는 길</span>
    <div class="map">
      <a class="map-click" :href="'https://map.kakao.com/?urlX=523433&urlY=1115645&urlLevel=3&itemId=17651361&q=%EB%8D%94%EC%BB%A8%EB%B2%A4%EC%85%98%20%EC%9E%A0%EC%8B%A4%EC%A0%90&map_type=TYPE_MAP'">
        <span>약도 클릭시 카카오 지도로 이동</span>
      </a>
      <div id="map"></div>
    </div>
    <div class="container">
      <div class="container-address">
        <p>서울특별시 송파구 올림픽로 319</p>
        <p>더컨벤션 잠실점 <span :class="{mark: isActive}">3층 아모르홀</span></p>
        <p class="tel">T. 02-418-5000</p>
      </div>
      <div class="container-trans">
        <p class="transportation">지하철</p>
        <p>8호선 잠실역 9번출구 / 도보 2분</p>
        <p>2호선 잠실역 8번출구 / 도보 6분</p>
      </div>
      <div class="container-trans">
        <p class="transportation">버스</p>
        <p>잠실광역환승센터(지하) / 도보 14분</p>
        <p>잠실역 9번출구 정류장 / 도보 2분</p>
      </div>
      <div class="container-trans">
        <p class="transportation">주차</p>
        <p>더 컨벤션 건물 내 주차</p>
      </div>
    </div>
  </div>
</template>
  
<script>
// 잠실 더 컨벤션 위경도
const lat = 37.5157108;
const lng = 127.1057463;

export default {
  name: 'LocationCard',
  components: {
  },
  data() {
    return {
      map: null,
      isActive: false
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  methods: {
    loadScript() {
      const script = document.createElement("script");
      script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=1bd31ed62d4ca98a0aaa79dbe3d1dcda&autoload=false"; //
      script.onload = () => window.kakao.maps.load(this.loadMap);
      document.head.appendChild(script);
    },
    loadMap() {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(lat, lng),
        level: 5
      };

      this.map = new window.kakao.maps.Map(container, options);
      this.loadMaker();
    },
    loadMaker() {
      const markerPosition = new window.kakao.maps.LatLng(
        lat,
        lng
      );
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(this.map);
    }
  },
}
</script>
  
<style scoped>
.title {
  display: flex;
  height: 3.4%;
  margin-top: 5%;
  color: #5d493b;
  border-bottom: solid 0.1em #5d493b;
}

.location {
  height: calc(var(--vh) * 120);
  position: relative;
  display: flex;
  justify-content: center;
}

.map-click {
  position: absolute;
  display: flex;
  top: 10%;
  left: 2%;
  width: 96%;
  height: 33%;
  z-index: 10;
}

.map-click span {
  position: absolute;
  display: inline-block;
  left: 0;
  bottom: 1%;
  width: 100%;
  background-color: #f1efea;
}

#map {
  position: absolute;
  display: flex;
  top: 10%;
  left: 2%;
  width: 96%;
  height: 30%;
}

.container {
  position: absolute;
  display: inline-block;
  top: 45%;
  height: 50%;
}

.container-address {
  color: #55504f;
  font-weight: 500;
}

.container-trans .transportation {
  color: #5d493b;
  font-weight: 500;
}

.mark {
  -webkit-animation: 1.0s highlight 1.0s 1 normal forwards;
          animation: 1.0s highlight 1.0s 1 normal forwards;
  background-color: none;
  background: linear-gradient(90deg, #f1efea, 50%, rgba(255, 255, 255, 0) 50%);
  background-size: 200% 100%;
  background-position: 100% 0;
}

@-webkit-keyframes highlight {
  to {
    background-position: 0 0;
  }
}

@keyframes highlight {
  to {
    background-position: 0 0;
  }
}

/* 최소 heihgt */
@media (max-height : 600px) {
  .location {
    height: 850px;
  }
}

/* 갤럭시 폴드 */
@media screen and (max-device-width : 359px) {
  .container-address {
    margin-top: 8%;
    font-size: 1.1em;
  }
  .container-address .tel {
    margin-top: 8%;
    margin-bottom: 17%;
    font-size: 0.7em;
    font-weight: 300;
    letter-spacing: 1px;
  }
  .container-trans {
    margin-top: 10%;
    font-size: 0.9em;
    line-height: 1.5;
  }
}

/* 아이폰 SE */
@media screen and (min-device-width : 359px) and (max-device-width : 376px) {
  .container-address {
    margin-top: 10%;
    font-size: 1.2em;
  }
  .container-address .tel {
    margin-top: 10%;
    margin-bottom: 10%;
    font-size: 0.7em;
    font-weight: 300;
    letter-spacing: 1px;
  }
  .container-trans {
    margin-top: 10%;
    font-size: 0.9em;
    line-height: 1.3;
  }
}

/* 모바일 버전 */
@media screen and (min-device-width : 376px) and (max-device-width: 768px) {
  .container-address {
    margin-top: 10%;
    font-size: 1.2em;
  }
  .container-address .tel {
    margin-top: 8%;
    margin-bottom: 13%;
    font-size: 0.8em;
    font-weight: 300;
    letter-spacing: 1px;
  }
  .container-trans {
    margin-top: 10%;
    font-size: 1em;
    line-height: 1.8;
  }
}

/* 데스크탑 버전 */
@media screen and (min-device-width: 769px) and (max-device-width : 1024px) {
  .container-address {
    margin-top: 10%;
    font-size: 1.2em;
  }
  .container-address .tel {
    margin-top: 8%;
    margin-bottom: 15%;
    font-size: 0.8em;
    font-weight: 300;
    letter-spacing: 1px;
  }
  .container-trans {
    margin-top: 15%;
    font-size: 1em;
    line-height: 2;
  }
}

/* 아이패드 프로 */
@media only screen and (min-device-width : 1024px) {
  .title {
    height: 4%;
    margin-top: 3%;
  }
  .container-address {
    margin-top: 3%;
    font-size: 1.2em;
  }
  .container-address .tel {
    margin-top: 5%;
    margin-bottom: 13%;
    font-size: 0.8em;
    font-weight: 300;
    letter-spacing: 1px;
  }
  .container-trans {
    margin-top: 8%;
    font-size: 0.9em;
    line-height: 1.5;
  }
}

/* 아이패드 (가로) */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  .location {
    height: calc(var(--vh) * 200);
  }
}
</style>