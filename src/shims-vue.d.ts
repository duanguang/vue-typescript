/* import * as lodash from 'lodash' */
import Vue from 'vue'
// 全局变量设置
/* declare global {
  const _: typeof lodash
} */

declare module 'vue/types/vue' {  
  interface Vue {  
    $api: any;
    // $router: VueRouter; // 这表示this下有这个东西
    // $route: Route;
    $https: any;
    $urls: any;
    $Message: any;
    $Modal: any;
  }
}