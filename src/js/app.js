// Global Import
window.jQuery = window.$ = require("jquery");
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap";

AOS.init({
  once: true
});

// import module
import { Chart, Countdown, Scroll } from "./modules";

jQuery(function() {
  Chart.init();
  Countdown.init();
  Scroll.init();
});
