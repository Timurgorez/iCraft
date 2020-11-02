import Vue from "vue";
Vue.directive("onMobileShow", {
  bind(el) {
    function modify() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        window.innerWidth < 992
      ) {
        el.style.display = "flex";
      } else {
        el.style.display = "none";
      }
    }
    modify();
    window.addEventListener("resize", modify, { passive: true });
  }
});

Vue.directive("onDesctopShow", {
  bind(el) {
    function modify() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        window.innerWidth < 992
      ) {
        el.style.display = "none";
      } else {
        el.style.display = "flex";
      }
    }
    modify();
    window.addEventListener("resize", modify, { passive: true });
  }
});
