<!-- 출력순서: 2 -->
<!-- 사진: X -->
<!-- 글자: 하나의 화면 내 출력 -->
<!-- 글자효과: 천천히 올라오는 효과, 문단 별로 -->
<template>
  <div class="hello">
    <div class="hello-container">
      <div class="box">
        <p class="msg1">안녕하세요.<br/>신랑 정준영, 신부 전보민입니다.</p>
        <div class="spacer" style="height: 40px"></div>
        <p class="msg2">하나님의 사랑 안에 하나되어<br/>뜨거운 여름의 시작점에서<br/>결혼의 첫 걸음을 내딛습니다.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloCard',
}
</script>

<style scoped>
.hello {
  height: calc(var(--vh) * 100);
  position: relative;
  display: flex;
  justify-content: center;
  color: #55504f;
  background-image: linear-gradient(to bottom, rgba(245, 235, 235, 0.979), rgb(255, 255, 255));
}

.hello.box {
  display: inline-block;
}

.hello-container {
  display: flex;
  align-items: center;
  line-height: 2;
  font-size: 1.2em;
}

/* 최소 heihgt */
@media (max-height : 600px) {
  .hello {
    height: 850px;
  }
}
</style>