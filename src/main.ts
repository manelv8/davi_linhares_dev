// import './style.scss'

// const app = document.querySelector<HTMLDivElement>('#app')!

// app.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
// import { tns } from "tiny-slider"
import { tns } from 'tiny-slider/src/tiny-slider.js';

tns({
  container: '.my-slider',
  items: 1,
  nav:false,
  controls: false,
  mouseDrag: true,
  responsive: {
    640: {
      edgePadding: 20,
      gutter: 20,
      items: 2
    },
    700: {
      gutter: 30
    },
    900: {
      items: 3
    }
  }
});