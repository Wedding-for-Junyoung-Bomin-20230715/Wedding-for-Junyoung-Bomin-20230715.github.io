<!-- 출력순서: 5 -->
<!-- 사진: X -->
<template>
  <div class="date-section">
    <div class="date-container" ref="startAnimation">
      <div class="date-month half">
        <span data-aos="fade" class="font-month animate-month"> {{ month }} <span class="date">월</span> </span>
      </div>
      <div class="slash"></div>
      <div class="date-day half">
        <span data-aos="fade" class="font-day animate-day"> {{ day }} <span class="date">일(토)</span></span>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: 'DateCard',
  data() {
    return {
      month: '07',
      day: '15',
      isAnimate: true
    }
  },
  mounted() {
    const options = {
      rootMargin: '10px',
      threshold: 0.5, // 대상 엘리먼트가 뷰포트에 50% 이상 들어왔을 때 콜백 함수 호출
    };
    const observer = new IntersectionObserver(this.callback, options);
    observer.observe(this.$refs.startAnimation);
  },
  methods: {
    callback(entries, observer) {// eslint-disable-line no-unused-vars
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 대상 엘리먼트가 뷰포트에 진입한 경우
          if (this.isAnimate) {
            this.animateText();
            this.isAnimate = false;
          }
        } else {
          // 대상 엘리먼트가 뷰포트를 벗어난 경우
          this.isAnimate = true;
        }
      });
    },
    animateText() {
      const month = document.querySelector(".animate-month");
      const day = document.querySelector(".animate-day");

      // Animate month
      month.animate(
        [
          { transform: "translate(-50vw, 20vh)", opacity: 0 },
          { transform: "translate(0, 0)", opacity: 1 },
        ],
        { duration: 1000, easing: "ease-out", fill: "forwards" }
      );

      // Animate day
      day.animate(
        [
          { transform: "translate(50vw, -20vh)", opacity: 0 },
          { transform: "translate(0, 0)", opacity: 1 },
          
        ],
        { duration: 1000, easing: "ease-out", fill: "forwards" }
      );
    },
  }
}
</script>

<style scoped>
.date-section {
  position: relative;
  display: flex;
}

.date {
  position: relative;
  display: flex;
}

.date-container {
  position: relative;
  display: flex;
  width: 100%;
  height: calc(var(--vh) * 100);
  position: absolute;
  left: 0%;
}

.half {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slash {
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 20%;
  background-color: #55504f;
  clip-path: polygon(99% 0, 100% 1%, 1% 100%, 0 99%);
  z-index: 3;
}

.date-month {
  background-color: rgb(255, 255, 255);
  clip-path: polygon(0 0, 100% 0, 0 100%);
  z-index: 1;
}

.date-day {
  background-color: #f1efea;
  z-index: 0;
}

.font-month {
  position: absolute;
  display: flex;
  top: 42%;
  left: 30%;
  align-items: flex-end;
  color: #55504f;
}

.font-day {
  position: absolute;
  display: flex;
  bottom: 42%;
  right: 25%;
  align-items: flex-end;
  color: #55504f;
}

/* 모바일 버전 */
@media screen and (max-width: 768px) {
  .date-container {
    font-size: 3em;
  }
  .date {
    font-size: 15px;
    margin-bottom: 15px;
  }
}

/* 갤럭시 폴드 */
@media screen and (max-device-width : 359px) {
  .date-container {
    font-size: 3em;
  }
  .date {
    font-size: 15px;
    margin-bottom: 15px;
  }
  .font-month {
    top: 40%;
    left: 25%;
  }
  .font-day {
    bottom: 40%;
    right: 20%;
  }
}

/* 아이폰 SE */
@media screen and (min-device-width : 359px) and (max-device-width : 376px) {
  .date-container {
    font-size: 3em;
  }
  .date {
    font-size: 15px;
    margin-bottom: 15px;
  }
}

/* 모바일 버전 */
@media screen and (min-device-width : 376px) and (max-device-width: 768px) {
  .date-container {
    font-size: 3em;
  }
  .date {
    font-size: 15px;
    margin-bottom: 15px;
  }
}

/* 데스크탑 버전 */
@media screen and (min-device-width: 769px) and (max-device-width : 1024px) {
  .date-container {
    font-size: 4em;
  }
  .date {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .font-month {
    top: 36%;
    left: 30%;
  }
  .font-day {
    bottom: 36%;
    right: 28%;
  }
}

/* 아이패드 프로 */
@media only screen and (min-device-width : 1024px) {
  .date-container {
    font-size: 4em;
  }
  .date {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .font-month {
    top: 36%;
    left: 30%;
  }
  .font-day {
    bottom: 36%;
    right: 28%;
  }
}

/* 최소 heihgt */
@media (max-height : 600px) {
  .date-section {
    height: 850px;
  }
  .date-container {
    height: 850px;
  }
}
</style>