<!-- 출력순서: 7 -->
<!-- 사진: X -->
<!-- 글자: 더컨벤션 잠실 3층 아모르홀 -->
<!-- 글자효과: 스크롤에 따라 어두웠다가 밝아지게 -->
<!-- Maps API 사용 -->
<template>
  <div class="search" ref="startAnimation">
    <div class="search-box">
      <span class="icon">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="xs"/>
      </span>
    </div>
    <div class="search-txt">
      <h1 :class="{typing: isActive}">더컨벤션 잠실점</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchCard',
  components: {
  },
  data() {
    return {
      isActive: false
    };
  },
  mounted() {
    const options = {
      rootMargin: '10px',
      threshold: 1, // 대상 엘리먼트가 뷰포트에 100% 이상 들어왔을 때 콜백 함수 호출
    };
    const observer = new IntersectionObserver(this.callback, options);
    observer.observe(this.$refs.startAnimation);
  },
  methods: {
    callback(entries, observer) {// eslint-disable-line no-unused-vars
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 대상 엘리먼트가 뷰포트에 진입한 경우
          if (!this.isActive) {
            this.isActive = true;
          }
        } else {
          // 대상 엘리먼트가 뷰포트를 벗어난 경우
          this.isActive = false;
        }
      });
    },
  },
}
</script>
  
<style scoped>
.search {
  height: 10em;
  position: relative;
  display: flex;
  justify-content: center;
}

.search-box {
  position: absolute;
  display: inline-block;
  width: 80%;
  top: 50%;
  min-height: 2.5em;
  background-color: #f1efea;
  border-radius: 1.3em;
  z-index: 0;
}

.search-txt {
  position: absolute;
  top: 52.5%;
  color: #5d493b;
  letter-spacing: .15em;
  z-index: 1;
}

.search-box .icon {
  position: absolute;
  top: 20%;
  left: 8%;
  color: #5d493b;
}

.search-txt h1 {
  font-size: 1.2em;
  font-weight: 300;
}

.typing {
  display: inline-block;
  overflow: hidden;
  font-size: 1.2em;
  white-space: nowrap;
  margin: 0 auto;
  border-right: .13em solid rgb(36, 29, 23);
  letter-spacing: .15em;
  animation:
    typing 2s steps(30),
    blink-caret .75s step-end infinite alternate;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: rgb(36, 29, 23); }
}
  </style>