import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

const fun = () => {
  console.log("提交没有格式化的代码");
};
const str = "123456";
console.log(str, "str");
fun();
