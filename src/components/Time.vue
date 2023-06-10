<!-- 출력순서: 6 -->
<!-- 사진: X -->
<template>
  <div class="time">
    <div class="container">
      <span class="am">오전</span>
      <span class="count" ref="startCount"> {{ currentTime }} </span>
    </div>
  </div>
</template>
    
<script>
export default {
  name: 'TimeCard',
  data() {
    return {
      targetTime: '11:00',
      currentTime: '09:00',
      timer: null
    }
  },
  mounted() {
    const options = {
      rootMargin: '100px',
      threshold: 1, // 대상 엘리먼트가 뷰포트에 100% 이상 들어왔을 때 콜백 함수 호출
    };
    const observer = new IntersectionObserver(this.callback, options);
    observer.observe(this.$refs.startCount);
  },
  methods: {
    callback(entries, observer) {// eslint-disable-line no-unused-vars
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 대상 엘리먼트가 뷰포트에 진입한 경우
          setInterval(() => {
            const [currentHour, currentMinute] = this.currentTime.split(':').map(Number);
            const [targetHour, targetMinute] = this.targetTime.split(':').map(Number);
            
            let nextHour = currentHour;
            let nextMinute = currentMinute + 2;
            if (nextMinute >= 60) {
              nextHour += 1;
              nextMinute = 0;
            }
            
            if (nextHour <= targetHour && (nextHour !== targetHour || nextMinute <= targetMinute)) {
              this.currentTime = `${nextHour.toString().padStart(2, '0')}:${nextMinute.toString().padStart(2, '0')}`;
            } else {
              clearInterval(this.timer);
            }
          }, 20);
        } else {
          // 대상 엘리먼트가 뷰포트를 벗어난 경우
          clearInterval(this.timer);
          this.currentTime = '10:00';
        }
      });
    }
  }
}
</script>

<style scoped>
.time {
  position: relative;
  display: flex;
  justify-content: center;
  color: #55504f;
  background-image: linear-gradient(to bottom, rgba(241, 239, 234, 1), rgb(255, 255, 255));
  margin-top: -6%;
}

.container {
  position: absolute;
  display: flex;
  top: 45%;
  left: 50%;
  align-items: flex-end;
  transform: translate(-50%, -50%);
  color: #55504f;
}

.am {
  margin-right: 5px;
  margin-bottom: 25px;
}

.count {
  display: inline-block;
}

/* 최소 heihgt */
@media (max-height : 600px) {
  .time {
    height: 850px;
    margin-top: -20px;
  }
}

/* 모바일 버전 */
@media screen and (max-width: 768px) {
  .am {
    margin-bottom: 15px;
    font-size: 0.9em;
  }
  .count {
    font-size: 3em;
  }
}

/* 데스크탑 버전 */
@media screen and (min-width: 769px) {
  .am {
    font-size: 1em;
  }
  .count {
    font-size: 4em;
  }
}
</style>