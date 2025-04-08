import '../styles/styles.scss';

import { header } from "./components/header.js";
import { map } from "./components/map.js";
import { dropdown } from "./components/dropdown.js";
import { FilterMap } from "./components/FilterMap.js";
import { sliders } from "./components/sliders.js";
import { accordion } from "./components/accordion.js";




document.addEventListener("DOMContentLoaded", function () {
    header();
    map();
    dropdown();
    FilterMap();
    sliders();
    accordion();
})
