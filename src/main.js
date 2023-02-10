import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')
import data from "/src/data/data.json";

const type = 'X'
const CrossColor = 'Red'
console.log(data.filter((crs)=>{crs.type.toLocaleLowerCase().includes(type.toLocaleLowerCase())
     // if(crs.type.toLocaleLowerCase().includes(type.toLocaleLowerCase())){
     //      console.log(crs.type);
     //      console.log(crs.color[1].id.toLocaleLowerCase().includes(CrossColor.toLocaleLowerCase()))
     //      console.log(crs.color.find((co)=>co.id.toLocaleLowerCase().includes(CrossColor.toLocaleLowerCase())));
     // }
   }));
