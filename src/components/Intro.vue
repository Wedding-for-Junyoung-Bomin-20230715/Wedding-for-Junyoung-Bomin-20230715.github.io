<!-- 출력순서: 1 -->
<!-- 사진: 다이아 반지 -->
<!-- 글자: 쿼리스트링 사용해서 url에 따라 다르게 출력 -->
<!-- 글자효과: 한번에 fade로 나오기 -->
<template>
  <div class="intro">
    <img alt="Intro" src="@/assets/mainveiw_0.gif" class="intro-img">
    <div class="intro-container" data-aos="fade" data-aos-delay="300" data-aos-duration="2000">
      <span class="vertical-text">
        <span v-if="!hasQuery">
          <span class="wedding-date">7</span>월<span class="wedding-date">15</span>일 <br>
          결혼합니다
        </span>
        <span v-else>
          {{ guestName }}{{ guestPostfix }} <br>
          초대합니다
        </span>
      </span>
    </div>
  </div>
</template>

<script>
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const name = params.get('name');
const postfix = params.get('postfix');

export default {
  name: 'IntroCard',
  props: {
    name: String,
    postfix: String
  },
  data() {
    return {
      query: false,
    }
  },
  mounted() {
    const searchParams = window.location.search;
    if (searchParams) {
      this.query = true
    }
  },
  computed: {
    hasQuery() {
      return this.query;
    },
    guestName() {
      if (queryString && name) {
        return name;
      } else {
        return '';
      }
    },
    guestPostfix() {
      if (queryString && postfix) {
          return postfix;
        } else {
          return '';
      }
    },
  }
}
</script>

<style scoped>
.intro {
  position: relative;
  display: flex;
  color: #55504f;
  /* justify-content: center; */
}

.intro-img {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.intro-container {
  position: absolute;
  width: max-content;
  z-index: 2;
  text-align: left;
  width: 50%;
  left: 0;
  top: 15%;
}

.intro-container span {
  object-fit: contain;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  color: #55504f;
}

.vertical-text {
  /* writing-mode: vertical-lr; */
  letter-spacing: 4px;
  word-break: keep-all;
}

.wedding-date {
  all: unset;
  display: inline-block;
  writing-mode: horizontal-tb;
  letter-spacing: 0px;
}

/* 최소 heihgt */
@media (max-height : 600px) {
  .intro {
    height: 850px;
  }
}

/* 모바일 버전 */
@media screen and (max-width: 768px) {
  .intro-container {
    left: 14%;
  }
  .intro-container span {
    font-size: 18px;
  }
}

/* 데스크탑 버전 */
@media screen and (min-width: 769px) {
  .intro-container {
    left: 8%;
  }
  .intro-container span {
    font-size: 26px;
  }
}
</style>
