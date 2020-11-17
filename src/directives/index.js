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

Vue.directive("splitTitle", {
  bind(el) {
    
    console.log(el.clientWidth);
    function modify() {
      // if(el.clientWidth > 0){
      //   const countOfSymbols = Math.floor((el.clientWidth - 20) / 20 * 2);
      //   if(el.innerText.length > countOfSymbols){
      //     el.innerText =  el.innerText.substring(0, 53) + '...';
      //   }
      // }
    }
    setTimeout(() => {modify();}, 0)
    
    window.addEventListener("resize", modify, { passive: true });
  }
});
