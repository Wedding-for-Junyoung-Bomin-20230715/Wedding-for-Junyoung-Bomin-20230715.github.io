<!-- 출력순서: 4 -->
<!-- 사진: X -->
<!-- 글자: 7월15일 오전 11시 + XXX분 -->
<!-- 글자효과: 스크롤에 따라 오른쪽에서 왼쪽으로 색상 변화 -->
<!-- 디데이 기능 -->
<template>
  <div class="calendar">
      <p>Calendar Card</p>
      <div class="my-calendar">
        <VCalendar transparent :initial-page="initPage" :attributes="attributes" />
      </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarCard',
  data() {
      return {
        initPage: { month: 7, year: 2023 },
        attributes: [
          {
            key: 'today',
            content: 'white',
            dot: {
              color: 'blue',
              fillMode: 'light'
            },
            popover: {
              label: 'Today',
              visibility: 'focus'
            },
            dates: new Date()
          },
          {
            content: 'white',
            highlight: {
              color: 'pink',
              fillMode: 'light'
            },
            popover: {
              label: 'Wedding Day',
              visibility: 'focus'
            },
            dates: new Date(2023, 6, 15)  // 2023-07-15
          },
        ]
      };
    }
}
</script>

<style scoped>
p {
  background-color:yellow;
}
.my-calendar :deep(.vc-weekday-1, .vc-weekday-7) {
  color: #f163d9;
}
</style>