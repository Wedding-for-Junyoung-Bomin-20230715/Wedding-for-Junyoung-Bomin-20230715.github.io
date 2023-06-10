<!-- 출력순서: 3 -->
<!-- 사진: 준영, 보민 사진 각각 -->
<!-- 글자: 신랑 준영, 신부 보민 -->
<!-- 글자효과: 스크롤에 따라 사진 위or오른쪽에 글자 나오게 -->
<template>
  <div class="groom">
    <img alt="groom" :src="imageSrc" class="groom-img">
    <div class="groom-container">
      <div class="parent">
        <span>
          <span class="name">정진열ㆍ유재희</span><span>의 장남</span>
        </span>
      </div>
      <div class="child">
        <span>신랑 </span><span class="name">정준영</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GroomCard',
  props: ['avif'],
  computed: {
    imageSrc() {
      if (this.avif) {
        return require('@/assets/groom.avif');
      } else {
        return require('@/assets/groom.jpg');
      }
    }
  }
}
</script>

<style scoped>
.groom {
  position: relative;
  display: flex;
  justify-content: center;
  height: calc(var(--vh) * 120);
  color: #55504f;
}

.groom-img {
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 40% 45%;
  z-index: 1;
}
.groom-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  /* background-color: rgba(0, 0, 0, 0.5); */
}

.parent {
  position: absolute;
  display: flex;
  top: 5%;
  right: 12%;
  width: max-content;
  font-size: 1em;
  line-height: 2;
  letter-spacing : 2px;
  font-weight: 400;
}
.parent .name {
  font-size: 1.2em;
}

.child {
  position: absolute;
  width: max-content;
  top: 10%;
  right: 11%;
  font-size: 1.2em;
  letter-spacing: 4px;
  font-weight: 500;
}

.child .name {
  font-size: 1.4em;
}

/* 최소 heihgt */
@media (max-height : 600px) {
  .groom {
    height: 850px;
  }
}

/* 갤럭시 폴드 */
@media screen and (max-device-width : 359px) {
  .groom-img {
    object-position: 40% 80%;
  }
  .parent {
    font-size: 0.9em;
    top: 11%;
  }
  .parent .name {
    font-size: 1.0em;
  }
  .child {
    font-size: 0.9em;
    top: 15%;
  }
  .child .name {
    font-size: 1.0em;
  }
}

/* 아이폰 SE */
@media screen and (min-device-width : 359px) and (max-device-width : 376px) {
  .groom-img {
    object-position: 40% 80%;
  }
  .parent {
    top: 4%;
  }
  .child {
    top: 8%;
  }
}

/* 모바일 버전 */
@media screen and (min-device-width : 376px) and (max-device-width: 768px) {
  .groom-img {
    object-position: 40% 80%;
  }
  .parent {
    top: 11%;
  }
  .child {
    top: 15%;
  }
}

/* 데스크탑 버전 */
@media screen and (min-device-width: 769px) and (max-device-width : 1024px) {
  .groom-img {
    object-position: 40% 45%;
  }
}

/* 아이패드 프로 */
@media only screen and (min-device-width : 1024px) {
  .groom-img {
    object-position: 40% 45%;
  }
}
</style>