// polyfills for IE
import "es6-promise/auto";
import "babel-polyfill";

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./app";
import router from "./router";


import '../static/css/vendor/bootstrap/css/bootstrap.css'
import '../static/css/vendor/font-awesome/css/font-awesome.css'
import '../static/css/agency.css'
import '../static/css/fbenevento.css'




new Vue(
    {
    el: "#app",
    router,
    template: "<App/>",
    components: {
      App
    }
  });
