<!-- 출력순서: 9 -->
<!-- 사진: TBD -->
<!-- 글자: TBD, 쿼리스트링 이용 -->
<!-- 글자효과: TBD -->
<template>
  <div :class="{'closing':true, 'closing-change-height': show1|show2}">
    <div class="container">
			<span class="title">마음 전하실 곳</span>
      
      <div :class="{'account-box': true, 'groom': true}">
        <div class="wrapper">
          <v-btn elevation="0" class="button" @click="toggleShow(1)">
            신랑 측 마음 전하실 곳
            <span class="icon">
              <font-awesome-icon v-if="!show1" icon="fa-solid fa-angle-down" />
              <font-awesome-icon v-if="show1" icon="fa-solid fa-angle-up" />
            </span>
          </v-btn>
          <vue-slide-up-down v-model="show1" class="family mt-2">
            <v-row v-for="(member, index) in family1" :key="index" class="row" justify="center">
              <v-col cols="9" class="col pa-0">
                <v-row>
                  <v-col cols="4" class="v-col-4 pt-1 pb-1 col1">{{ member.position }}</v-col>
                  <v-col cols="8" class="v-col-4 pt-1 pb-1 col2">{{ member.name }}</v-col>
                </v-row>
                <v-row>
                  <v-col cols="4" class="v-col-4 pt-1 pb-1 col1">{{ member.bank }}</v-col>
                  <v-col cols="8" class="v-col-4 pt-1 pb-1 col2 account">{{ member.account }}</v-col>
                </v-row>
              </v-col>
              <v-col cols="3" class="col pa-0">
                <v-btn class="copy-btn pa-2 ma-0" variant="flat" size="small" color="#f1efea" @click="copySelectedMember(member)">
                  <font-awesome-icon class="copy-icon" icon="fa-regular fa-copy"/>
                  계좌 복사
                </v-btn>
                <v-snackbar v-model="snackbar" :timeout="timeout" variant="flat" color="brown-lighten-4" rounded="pill">
                  <span class="snackbar-content"><strong>{{ selectedMember.name }}</strong>님의 계좌를 복사했습니다.</span>
                </v-snackbar>
              </v-col>
            </v-row>
          </vue-slide-up-down>
        </div>
      </div>

      <div :class="{'account-box': true, 'bride': true, 'slide-up': !show1, 'slide-down': show1}">
        <div class="wrapper">
          <v-btn elevation="0" class="button" @click="toggleShow(2)">
            신부 측 마음 전하실 곳
            <span class="icon">
              <font-awesome-icon v-if="!show2" icon="fa-solid fa-angle-down" />
              <font-awesome-icon v-if="show2" icon="fa-solid fa-angle-up" />
            </span>
          </v-btn>
          <vue-slide-up-down v-model="show2" class="family mt-2">
            <v-row v-for="(member, index) in family2" :key="index" class="row" justify="center">
              <v-col cols="9" class="col pa-0">
                <v-row>
                  <v-col cols="4" class="v-col-4 pt-1 pb-1 col1">{{ member.position }}</v-col>
                  <v-col cols="8" class="v-col-4 pt-1 pb-1 col2">{{ member.name }}</v-col>
                </v-row>
                <v-row>
                  <v-col cols="4" class="v-col-4 pt-1 pb-1 col1">{{ member.bank }}</v-col>
                  <v-col cols="8" class="v-col-4 pt-1 pb-1 col2 account">{{ member.account }}</v-col>
                </v-row>
              </v-col>
              <v-col cols="3" class="col pa-0 ma-0">
                <v-btn class="copy-btn pa-2 ma-0" variant="flat" size="small" color="#f1efea" @click="copySelectedMember(member)">
                  <font-awesome-icon class="copy-icon" icon="fa-regular fa-copy" />
                  계좌 복사
                </v-btn>
                <v-snackbar v-model="snackbar" :timeout="timeout" variant="flat" color="brown-lighten-4" rounded="pill">
                  <span class="snackbar-content"><strong>{{ selectedMember.name }}</strong>님의 계좌를 복사했습니다.</span>
                </v-snackbar>
              </v-col>
            </v-row>
          </vue-slide-up-down>
        </div>
      </div>

      <div :class="{'message': true, 'slide-up': !(show1|show2), 'slide-down-message': show1|show2}">
        <p>
          평생의 짝이 되어<br/>
          믿음의 가정을 이루겠습니다.<br/>
          저희의 길을 축복해주시고<br/>
          오셔서 예쁜 모습 많이 담아주세요.<br/><br/>
          준영ㆍ보민 올림
        </p>
			</div>

      <div :class="{'share': true, 'slide-up': !(show1|show2), 'slide-down-share': show1|show2}">
        <v-btn variant="flat" rounded="pill" color="#f1efea" @click="share">
          <font-awesome-icon icon="fa-regular fa-share-from-square" class="icon" />
          청접장 공유하기
        </v-btn>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ClosingCard',
	data() {
		return {
      show1: false,
      show2: false,
      snackbar: false,
      timeout: 1500,
      selectedMember: {name: '', account: ''},
      family1: [
          { position: '신랑', name: '정준영', bank: '국민은행', account: '94726-4009-57', copy: '94726400957'},
          { position: '아버님', name: '정진열', bank: '국민은행', account: '075-21-0246-411', copy: '075210246411'},
          { position: '어머님', name: '유재희(정진열)', bank: '국민은행', account: '075-21-0246-411', copy: '075210246411'},
      ],
      family2: [
          { position: '신부', name: '전보민', bank: '국민은행', account: '910-9881-8509', copy: '91098818509'},
          { position: '아버님', name: '전이원', bank: '국민은행', account: '444425-93-122097', copy: '44442593122097'},
          { position: '어머님', name: '양영옥', bank: '국민은행', account: '545601-01-091736', copy: '54560101091736'},
      ]
		};
	},
	methods: {
    toggleShow(button) {
      if (button === 1) {
        this.show1 = !this.show1;
        this.show2 = false;
      } else if (button === 2) {
        this.show1 = false;
        this.show2 = !this.show2;
      }
    },
    copySelectedMember(member) {
      const textarea = document.createElement('textarea');
      textarea.value = member.copy;
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, 9999);
      document.execCommand('copy');
      document.body.removeChild(textarea);

      this.selectedMember.name = member.name;
      this.selectedMember.account = member.account;
      this.snackbar = true;
    },
    async share() {
      if (navigator.share) {
        try {
          await navigator.share({
            title: '준영♥보민 결혼합니다',
            text: '',
            url: 'https://wedding-for-junyoung-bomin-20230715.github.io/'
          });
          console.log('Shared successfully!');
        } catch (error) {
          console.error('Error sharing:', error);
        }
      } else {
        console.log('Web Share API not supported.');
      }
    }
	}
}
</script>
  
<style scoped>
.closing {
  position: relative;
  display: flex;
  justify-content: center;
  height: 43em;
}

.closing-change-height {
  transition: transform 0.5s ease;
  height: 70em;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.title {
  display: inline-block;
  height: 2em;
  border-bottom: solid 0.1em #5d493b;
  color: #5d493b;
}

.account-box {
	position: absolute;
	display: flex;
  flex-direction: column;
  align-items: center;
	width: 90%;
  height: 7%;
  left: 5%;
}

.account-box .wrapper {
  flex: 1;
	width: 100%;
}

.account-box .wrapper .button{
  width: 100%;
  height: 3em;
  background-color: #f1efea;
  border-radius: 8px;
}

.account-box .wrapper .icon {
  position: absolute;
  right: 10%;
  color: #5d493b;
}

.account-box .wrapper .family {
  position: absolute;
  width: 90%;
  left: 5%;
  margin-bottom: 10px;
  font-size: 1em;
}

.groom {
	top: 4em;
}

.bride {
	top: 7.5em;
}

.slide-up {
  transition: transform 0.5s ease;
  transform: translateY(0);
}

.slide-down {
  transition: transform 0.5s ease;
  transform: translateY(23em);
}

.slide-down-message {
  transition: transform 0.5s ease;
  transform: translateY(18em);
}

.slide-down-share {
  transition: transform 0.5s ease;
  transform: translateY(30em);
}

.family .row {
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: center; /* Safari 6.1+ */
  display: flex;
  height: 8em;
  justify-content: center;
  border-bottom: solid 0.1em #b9a18f;
}

.family .row .col {
  align-self: center;
}

.family .col .col1 {
  text-align: right;
  font-weight: 500;
  color: #afa097;
  word-break: keep-all;
}

.family .col .col2 {
  text-align: left;
  word-break: keep-all;
}

.family .account {
  font-size: 1em;
}

.family .copy-btn {
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: center; /* Safari 6.1+ */
  display: flex;
  min-height: 2.5em;
  justify-content: center;
  color: #5d493b;
  align-items: center;
  font-size: 0.8em;
  width: max-content;
}

.family .copy-icon {
  margin-right: 0.4em;
}

.snackbar-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.message {
	position: absolute;
  display: flex;
	width: 90%;
	height: 40%;
	left: 5%;
	top: 12em;
  font-size: 1.2em;
}

.message p {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  line-height: 1.88;
  letter-spacing: normal;
}

.share {
  position: absolute;
  display: flex;
  top: 35em;
  width: 100%;
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: center; /* Safari 6.1+ */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5d493b;
}

.share .icon {
  margin-right: 10px;
  color: #5d493b;
}

@media screen and (max-device-width : 359px) {
  .account-box .wrapper .family {
    font-size: 0.9em;
  }
}
</style>