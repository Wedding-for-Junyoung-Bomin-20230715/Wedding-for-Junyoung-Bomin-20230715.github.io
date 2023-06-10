<!-- 출력순서: 9 -->
<template>
  <div class="footer">
    <div class="container">
      <p>Develop by Junyoung, Design by Bomin</p>
      <!-- <p class="opensource">이 페이지에는 네이버에서 제공한 나눔글꼴이 적용되어 있습니다.</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterCard',
  props: {

  }
}
</script>
  
<style scoped>
.footer {
  position: relative;
  display: flex;
  justify-content: center;
  height: calc(var(--vh) * 13);
  background-color: #f1efea;
}

.container {
	display: inline-block;
	font-size: 0.8em;
  font-weight: 500;
  color: #221815;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
}

/* .opensource {
	margin-top: 3%;
	font-size: 0.5em;
  font-weight: 300;
} */
</style>