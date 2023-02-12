<template>
  <div class="w-screen h-screen">
    <!--Full Screen-->
    <div v-if="!gameStr" class="h-screen bg-gray-400 flex flex-col bg-[url('/bg/gg.gif')]"
      style="background-size: 100%;">
      <!--Screen-->
      <div v-if="startBtn && !gameStr" class="flex justify-end">
        <!--Back btn-->
        <div class="bg-white m-4 w-28 h-16 rounded-2xl">
          <button
            class="btn hover:bg-red-500 border border-transparent hover:border-transparent m-2 bg-black text-slate-50 w-26 text-font "
            @click="reset">
            BACK TO MENU
          </button>
        </div>
      </div>
      <!-- ===================================================================================================================== -->
      <div class="flex flex-col items-center " v-if="!bg">
        <!--Play Screen-->
        <!-- Max sp -->
        <img class=" max-lg:hidden" :class="startBtn == true ? '-mt-48' : ''" src="/bg/logo-3.png" style="width: 70em; height: fit-content;">
        <!-- Min sp -->
        <img v-if="!startBtn" class=" mt-48 lg:hidden" src="/bg/logo-3.png" style="width: 70em; height: fit-content;">
        <img v-if="startBtn" class="  lg:hidden" src="/bg/logo-3.png" style="width: 70em; height: fit-content;">
        <div class="flex flex-col -mt-48">
          <!--Menu-->
          <!-- Max sp -->
          <div v-if="!startBtn" class="flex flex-col space-y-8 max-lg:hidden">
            <!-- Play btn -->
            <button id="black"
              class="btn h-16 hover:border-white hover:bg-emerald-500 border-white rounded-2xl border-8" @click="start">
              <span class="text-white text-font text-3xl px-5">PLAY</span>
            </button>
            <button class="btn h-16 hover:border-white hover:bg-emerald-500 border-white rounded-2xl border-8"
              @click="Cr">
              <span class="text-white text-font text-3xl px-5">CROSSHAIR</span>
            </button>
          </div>
          <!-- Min sp -->
          <div v-if="!startBtn" class="flex flex-col  space-y-8 lg:hidden">
            <!-- Play btn -->
            <div class="flex  justify-center">
              <button id="black"
              class="btn h-16 w-full mt-10  hover:border-white hover:bg-emerald-500 border-white rounded-2xl border-8" @click="start">
              <span class="text-white text-font text-3xl px-5">PLAY</span>
            </button>
            </div>
            
            <button class="btn h-16   hover:border-white hover:bg-emerald-500 border-white rounded-2xl border-8"
              @click="Cr">
              <span class="text-white text-font text-3xl px-5">CROSSHAIR</span>
            </button>
          </div>
          <!-- Level btn -->
          <!-- Max sp -->
          <div class="flex flex-col space-y-10 max-lg:hidden -mt-10 " v-if="startBtn && !gameStr && !cross">
            <div class="rounded-2xl p-4 border-8 bg-black">
              <h1 class="text-slate-50 text-font text-3xl font-bold text-center">
                LEVEL
              </h1>
            </div>
            <div v-if="startBtn && !gameStr" class="rounded-2xl bg-white">
              <button class="btn hover:bg-green-500 border-transparent hover:border-transparent m-2 bg-green-600 w-32"
                @click="[gameStart(), diffical('easy')]">
                <span class="text-slate-50 text-font text-xl ">easy</span>
              </button>
            </div>
            <div v-if="startBtn && !gameStr" class="rounded-2xl bg-white">
              <button class="btn hover:bg-yellow-400 border-transparent hover:border-transparent m-2 bg-yellow-500 w-32"
                @click="[gameStart(), diffical('normal')]">
                <span class="text-slate-50 text-font text-xl">normal</span>
              </button>
            </div>
            <div v-if="startBtn && !gameStr" class="rounded-2xl bg-white">
              <button class="btn hover:bg-red-500 border-transparent hover:border-transparent m-2 bg-red-800 w-32"
                @click="[gameStart(), diffical('hard')]">
                <span class="text-slate-50 text-font text-xl">hard</span>
              </button>
            </div>
          </div>
          <!-- Min sp -->
          <div class="flex flex-col space-y-10 lg:hidden" v-if="startBtn && !gameStr && !cross">
            <div class="rounded-2xl p-4 border-8 bg-black">
              <h1 class="text-slate-50 text-font text-3xl font-bold text-center">
                LEVEL
              </h1>
            </div>
            <div v-if="startBtn && !gameStr" class="rounded-2xl bg-white">
              <button class="btn hover:bg-green-500 border-transparent hover:border-transparent m-2 bg-green-600 w-32"
                @click="[gameStart(), diffical('easy')]">
                <span class="text-slate-50 text-font text-xl ">easy</span>
              </button>
            </div>
            <div v-if="startBtn && !gameStr" class="rounded-2xl bg-white">
              <button class="btn hover:bg-yellow-400 border-transparent hover:border-transparent m-2 bg-yellow-500 w-32"
                @click="[gameStart(), diffical('normal')]">
                <span class="text-slate-50 text-font text-xl">normal</span>
              </button>
            </div>
            <div v-if="startBtn && !gameStr" class="rounded-2xl bg-white">
              <button class="btn hover:bg-red-500 border-transparent hover:border-transparent m-2 bg-red-800 w-32"
                @click="[gameStart(), diffical('hard')]">
                <span class="text-slate-50 text-font text-xl">hard</span>
              </button>
            </div>
          </div>
          <!-- end Level btn -->
        </div>
      </div>
      <!-- ===================================================================================================================== -->
      <div v-if="cross" class="h-full w-full">
        <!--Crosshair Screen-->
         <!-- Max sp -->
         <div class="flex flex-row h-full w-full ">
          <div class="flex w-1/2">
            <div class="m-auto bg-white w-[400px] h-[400px]">
              <div class="absolute m-24 w-[400px] h-[400px] ">
                <img :src=crossData style="width: 200px; height: 200px" />
              </div>
            </div>
          </div>
          <div class="flex flex-col w-1/2   m-auto">
            <div class="flex justify-center">
              <div class="rounded-2xl p-4 border-8 bg-black text-white text-font text-2xl">
                CHANGE CROSSHAIR
              </div>
            </div>
            <div class="grid grid-flow-col justify-center">
              <div class="grid grid-flow-col mt-10">
                <div class="bg-white w-20 h-20 ml-5">
                  <div class="absolute m-6 w-20 h-20">
                    <img src="./assets/pt/p/pblack.png " style="width: 30px; height: 30px" />
                  </div>
                </div>
                <div class="bg-white w-20 h-20 ml-5">
                  <div class="absolute m-6 w-20 h-20">
                    <img src="./assets/pt/x/xblack.png " style="width: 30px; height: 30px" />
                  </div>
                </div>
                <div class="bg-white w-20 h-20 ml-5">
                  <div class="absolute m-6 w-20 h-20">
                    <img src="./assets/pt/o/oblack.png " style="width: 30px; height: 30px" />
                  </div>
                </div>
                <div class="bg-white w-20 h-20 ml-5">
                  <div class="absolute m-6 w-20 h-20">
                    <img src="./assets/pt/t/Tblack.png " style="width: 30px; height: 30px" />
                  </div>
                </div>
              </div>
            </div>
            <div class="grid mt-5 justify-center">
              <div class="grid grid-flow-col mt-5 w-[400px]">
                <div>
                  <input type="radio" value="P" id="P" v-model="type" class="radio radio-success ml-12"  />
                  <input type="radio" value="X" id="X" v-model="type" class="radio radio-success ml-20 mr-2" />
                  <input type="radio" value="O" id="O" v-model="type" class="radio radio-success ml-16 mr-2" />
                  <input type="radio" value="T" id="T" v-model="type" class="radio radio-success ml-16" />
                </div>
              </div>
            </div>
            <!-- cheage color -->
            <div class="grid grid-flow-col justify-center">
              <div class="grid-flow-col rounded-lg mt-32 ">
                <input type="radio" id="black" value="Black" v-model="CrossColor" class="radio radio-success" />
                <label for="black" class="text-white m-auto font-bold bth text-xl text-font">Black</label>
                <input type="radio" id="red" value="Red" v-model="CrossColor" class="radio radio-success ml-5" />
                <label for="red" class="text-white m-auto font-bold text-xl text-font">Red</label>
                <input type="radio" id="green" value="Green" v-model="CrossColor" class="radio radio-success ml-5" />
                <label for="green" class="text-white m-auto font-bold text-xl text-font">Green</label>
                <input type="radio" id="yellow" value="Yellow" v-model="CrossColor" class="radio radio-success ml-5" />
                <label for="yellow" class="text-white m-auto font-bold text-xl text-font">Yellow</label>
                <input type="radio" id="blue" value="Blue" v-model="CrossColor" class="radio radio-success ml-5" />
                <label for="blue" class="text-white m-auto font-bold text-xl text-font">Blue</label>
              </div>
            </div>
            <div class="grid grid-flow-col justify-center">
              <button class="btn bg-black border-8 border-white rounded-2xl w-20 text-lg text-white mt-20 text-font"
                @click="CrossReset">Reset</button>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- game -->
    <div v-if="gameStr">
      <div :class="CROSSHAIR" class="bg-gray-400">
        <div v-if="!gameOver" class="h-screen bg-[url('/bg/zz1.jpg')]" style="background-size: 100% 100%;"
          @click="totalClick">
          <div class="flex flex-col" >
            <div v-if="gameStr && !gameOver" class="flex justify-end">
              <!--Timer-->
              <div class="bg-black m-4 p-3 border-8 rounded-2xl  !important" >
                <h1 class="text-white text-font ">Timer : {{ x }}</h1>
              </div>
            </div>
          </div>
        </div>
       
        <div v-if="gameStr && !gameOver" v-show="enemy" class="bg-cyan-300 rounded-full shadow-lg shadow-black" :style="{
          position: 'absolute',
          top: targetTop + 'px',
          left: targetleft + 'px',
        }" :class="diff" @click="[hit(), totalClick()]"></div>
      </div>
      <!--Game Over max-->
      <div v-if="gameOver" class="flex flex-col max-d:hidden">
        <div class="h-screen bg-[url('/bg/qq.gif')] ">
          <div class="flex justify-center ">
            <h class="text-font rounded-3xl mt-4 p-8 border-8 bg-black text-white text-3xl px-10">Results</h>
          </div>
          <div class="h-full flex flex-row justify-around items-end -mt-36">
            <div class="flex flex-col items-start space-y-8">
              <div
                class="btn rounded-2xl text-font p-4 hover:border-white hover:bg-red-500 text-white bg-black border-white border-8 h-20 w-64 text-center text-2xl pointer-events-auto"
                @click="reset">
                BACK TO MENU
              </div>
            </div>
            <div class="flex flex-col space-y-20">
              <div class="w-60 h-60 flex justify-center bg-white rounded-2xl">
                <div class="w-48 h-20 -mt-7 bg-black rounded-2xl">
                  <h1 class="text-font  text-3xl text-center items-center p-4 text-white">
                    TIME
                  </h1>
                </div>
                <div class="absolute m-32  ">
                  <h1 class="text-font  text-6xl font-bold text-black">10:00</h1>
                </div>
              </div>
              <div class="w-60 h-60 flex justify-center bg-white rounded-2xl">
                <div class="w-48 h-20 -mt-7 bg-black rounded-2xl">
                  <h1 class="text-font text-3xl text-center items-center p-4 text-white">
                    HITS
                  </h1>
                </div>
                <div class="absolute m-32">
                  <h1 class="text-font text-6xl font-bold text-black">{{ scoreHit }}</h1>
                </div>
              </div>
            </div>
            <div class="flex flex-col space-y-20">
              <div class="w-60 h-60 flex justify-center bg-white rounded-2xl">
                <div class="w-48 h-20 -mt-7 bg-black rounded-2xl">
                  <h1 class="text-font text-3xl text-center items-center p-4 text-white">
                    ACCURACY
                  </h1>
                </div>
                <div class="absolute m-32">
                  <h1 class="text-font text-6xl font-bold text-black">{{ acc }}%</h1>
                </div>
              </div>
              <div class="w-60 h-60 flex justify-center bg-white rounded-2xl">
                <div class="w-48 h-20 -mt-7 bg-black rounded-2xl">
                  <h1 class="text-font text-3xl text-center items-center p-4 text-white">
                    MISS
                  </h1>
                </div>
                <div class="absolute m-32">
                  <h1 class="text-font text-6xl font-bold text-black">{{ clickT- scoreHit }}</h1>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-start space-y-10">
              <div class="w-72 h-72 mb-32 flex justify-center bg-white rounded-2xl">
                <div class="w-48 h-20 -mt-7 bg-black rounded-2xl">
                  <h1 class="text-font text-3xl text-center items-center p-4 text-white">
                    SCORE
                  </h1>
                </div>
                <div class="absolute m-32">
                  <h1 class="text-font text-8xl font-bold text-black">{{ scrore }}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- game over laptop -->
      <div v-if="gameOver" class="flex flex-col d:hidden">
        <div class="h-screen bg-[url('/bg/qq.gif')] ">
          <div class="flex justify-center rounded-2xl">
            <h class="text-font rounded-3xl mt-[100px] p-8 border-8 bg-black text-white text-3xl px-10">Results</h>
          </div>
          <div class="h-full flex flex-row justify-around items-end -mt-80">
            <div class="flex flex-col items-start space-y-8">
              <div
                class="text-font btn rounded-2xl p-4 hover:border-white border-white border-8 h-20 w-50 text-center text-l pointer-events-auto"
                @click="reset">
                BACK TO MENU
              </div>
            </div>
            <div class="flex flex-col space-y-20">
              <div class="w-40 h-40 flex justify-center bg-white rounded-2xl">
                <div class="w-26 h-16 -mt-7 bg-black rounded-2xl">
                  <h1 class="text-font text-3l text-center items-center p-4 text-white">
                    TIME
                  </h1>
                </div>
                <div class="absolute m-16">
                  <h1 class="text-font text-3xl font-bold text-black">10:00</h1>
                </div>
              </div>
              <div class="w-40 h-40 flex justify-center bg-white rounded-2xl">
                <div class="w-26 h-16 -mt-7 bg-black rounded-2xl">
                  <h1 class="text-font text-3l text-center items-center p-4 text-white">
                    HITS
                  </h1>
                </div>
                <div class="absolute m-16">
                  <h1 class="text-font text-3xl font-bold text-black">{{ scoreHit }}</h1>
                </div>
              </div>
            </div>
            <div class="flex flex-col space-y-20">
              <div class="w-40 h-40 flex justify-center bg-white rounded-2xl">
                <div class="w-26 h-16 -mt-7 bg-black rounded-2xl">
                  <h1 class="text-font text-3l text-center items-center p-4 text-white">
                    ACCURACY
                  </h1>
                </div>
                <div class="absolute m-16">
                  <h1 class="text-font text-3xl font-bold text-black">{{ acc }}%</h1>
                </div>
              </div>
              <div class="w-40 h-40 flex justify-center bg-white rounded-2xl">
                <div class="w-26 h-16 -mt-7 bg-black rounded-2xl">
                  <h1 class="text-font text-3l text-center items-center p-4 text-white">
                    MISS
                  </h1>
                </div>
                <div class="absolute m-16">
                  <h1 class="text-font text-3xl font-bold text-black">{{ clickT- scoreHit }}</h1>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-start space-y-10">
              <div class="w-48 h-48 mb-32 flex justify-center bg-white rounded-2xl">
                <div class="w-26 h-16 -mt-7 bg-black rounded-2xl">
                  <h1 class="text-font text-3l text-center items-center p-4 text-white">
                    SCORE
                  </h1>
                </div>
                <div class="absolute m-16">
                  <h1 class="text-font text-7xl font-bold text-black">{{ scrore }}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "/src/data/data.json";
import { ref, computed } from "vue";
const startBtn = ref(false);
const diff = ref("");
const gameStr = ref(false);
const targetTop = ref("100");
const targetleft = ref("500");
const gameOver = ref(false);
const scoreHit = ref(0);
const x = ref('');
const enemy = ref(true);
const winWidth = ref(window.innerWidth);
const winHeight = ref(window.innerHeight);
const cross = ref(false);
const bg = ref(false);
const CrossColor = ref("Black");
const clickT = ref(0);
const scrore = ref(0);
const type = ref('P')
const crossData = computed(() => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].type == type.value) {
      for (let j = 0; j < data[i].color?.length; j++) {
        if (data[i].color[j].id === CrossColor.value) {
          return data[i].color[j].image;
        }
      }
    }
  }
})
const CROSSHAIR = computed(() => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].type == type.value) {
      for (let j = 0; j < data[i].color?.length; j++) {
        if (data[i].color[j].id === CrossColor.value) {
          return data[i].color[j].cursor;
        }
      }
    }
  }
})
function CrossReset() {
  type.value = 'P';
  CrossColor.value = "Black";
}
const acc = computed(() => {
  let accuracy = ((scoreHit.value / clickT.value) * 100).toFixed(2)
  if (accuracy === 'NaN') {
    return 0;
  }
  return accuracy;
});

window.addEventListener("resize", () => (winWidth.value = window.innerWidth));
window.addEventListener("resize", () => (winHeight.value = window.innerHeight));

function totalClick() {
  clickT.value++;
}
function start() {
  startBtn.value = true;
}
function Cr() {
  cross.value = true;
  startBtn.value = true;
  bg.value = true;
}
function reset() {
  startBtn.value = false;
  gameOver.value = false;
  gameStr.value = false;
  scoreHit.value = 0;
  cross.value = false;
  bg.value = false;
  clickT.value = 0;
  scrore.value = 0;
}

function gameStart() {
  gameStr.value = true;
  timer();
}
function diffical(diffi) {
  switch (diffi) {
    case "easy":
      diff.value = "w-20 h-20";
      eJump(1200);
      break;
    case "normal":
      diff.value = "w-20 h-20";
      eJump(900);
      break;
    case "hard":
      diff.value = "w-20 h-20";
      eJump(700);
      break;
    default:
      break;
  }
  x.value = 10;
}
function hit() {
  scoreHit.value++;
  enemy.value = false;
  scrore.value = scoreHit.value * 12;
}
function randomPosition() {
  targetTop.value = `${Math.floor(Math.random() * (winHeight.value - 200) )}`;
  targetleft.value = `${Math.floor(Math.random() * (winWidth.value - 100) )}`;
  enemy.value = true;
}
function eJump(time) {
  let textx = setInterval(() => {
    randomPosition();
    while (x.value == 0) {
      return clearInterval(textx);
    }
  }, time);
}
function timer() {
  let test = setInterval(() => {
    --x.value;
    while (x.value == 0) {
      gameOver.value = true;
      return clearInterval(test);
    }
  }, 1000);
}
</script>

<style scoped>
@font-face {
  font-family: 'ka1';
  src: url(/font/1.ttf);
}

.text-font {
  font-family: 'ka1';
}
</style>
