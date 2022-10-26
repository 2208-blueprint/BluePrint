// "use strict";

const db = require("../server/db/database");
const User = require("../server/db/User");
const Component = require("../server/db/Component");
const Comment = require("../server/db/Comment");
const UserComments = require("../server/db/UserComments");
const UserComponent = require("../server/db/UserComponent");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true });

  const arr = [];

  arr.push(
    await Component.create({
      name: "Green Simple Button",
      type: "button",
      framework: "html",
      stylingFramework: "css",
      markup: `<!-- HTML !-->
    <button class="button-3" role="button">Green Button</button>`,
      stylesheet: `/* CSS */
      body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
      .button-3 {
      appearance: none;
      background-color: #2ea44f;
      border: 1px solid rgba(27, 31, 35, .15);
      border-radius: 6px;
      box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      padding: 6px 16px;
      position: relative;
      text-align: center;
      text-decoration: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: middle;
      white-space: nowrap;
    }

    .button-3:focus:not(:focus-visible):not(.focus-visible) {
      box-shadow: none;
      outline: none;
    }

    .button-3:hover {
      background-color: #2c974b;
    }

    .button-3:focus {
      box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
      outline: none;
    }

    .button-3:disabled {
      background-color: #94d3a2;
      border-color: rgba(27, 31, 35, .1);
      color: rgba(255, 255, 255, .8);
      cursor: default;
    }

    .button-3:active {
      background-color: #298e46;
      box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
    }`,
    })
  );

  arr.push(
    await Component.create({
      name: "Blue Simple Button",
      type: "button",
      framework: "html",
      stylingFramework: "css",
      markup: `<!-- HTML !-->
    <button class="button-19" role="button">Blue Button</button>`,
      stylesheet: `/* CSS */
      body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .button-19 {
      appearance: button;
      background-color: #1899D6;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      display: inline-block;
      font-family: din-round,sans-serif;
      font-size: 15px;
      font-weight: 700;
      letter-spacing: .8px;
      line-height: 20px;
      margin: 0;
      outline: none;
      overflow: visible;
      padding: 13px 16px;
      text-align: center;
      text-transform: uppercase;
      touch-action: manipulation;
      transform: translateZ(0);
      transition: filter .2s;
      user-select: none;
      -webkit-user-select: none;
      vertical-align: middle;
      white-space: nowrap;
      width: 150px;
    }

    .button-19:after {
      background-clip: padding-box;
      background-color: #1CB0F6;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      bottom: -4px;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }

    .button-19:main,
    .button-19:focus {
      user-select: auto;
    }

    .button-19:hover:not(:disabled) {
      filter: brightness(1.1);
      -webkit-filter: brightness(1.1);
    }

    .button-19:disabled {
      cursor: auto;
    }`,
    })
  );

  arr.push(
    await Component.create({
      name: "Button Animated",
      type: "button",
      framework: "html",
      stylingFramework: "css",
      markup: `<!-- HTML !-->
    <button class="button-56" role="button">Button</button>`,
      stylesheet: `/* CSS */
      body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
      .button-56 {
      align-items: center;
      background-color: #fee6e3;
      border: 2px solid #111;
      border-radius: 8px;
      box-sizing: border-box;
      color: #111;
      cursor: pointer;
      display: flex;
      font-family: Inter,sans-serif;
      font-size: 16px;
      height: 48px;
      justify-content: center;
      line-height: 24px;
      max-width: 100%;
      padding: 0 25px;
      position: relative;
      text-align: center;
      text-decoration: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }

    .button-56:after {
      background-color: #111;
      border-radius: 8px;
      content: "";
      display: block;
      height: 48px;
      left: 0;
      width: 100%;
      position: absolute;
      top: -2px;
      transform: translate(8px, 8px);
      transition: transform .2s ease-out;
      z-index: -1;
    }

    .button-56:hover:after {
      transform: translate(0, 0);
    }

    .button-56:active {
      background-color: #ffdeda;
      outline: 0;
    }

    .button-56:hover {
      outline: 0;
    }

    @media (min-width: 768px) {
      .button-56 {
        padding: 0 40px;
      }
    }`,
    })
  );

  arr.push(
    await Component.create({
      name: "Doddle Button",
      type: "button",
      tags: ["blue", "simple"],
      framework: "html",
      stylingFramework: "css",
      markup: `<!-- HTML !-->
    <button class="button-53" role="button">Doodle Button</button>`,
      stylesheet: `/* CSS */
      body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
      .button-53 {
      background-color: #3DD1E7;
      border: 0 solid #E5E7EB;
      box-sizing: border-box;
      color: #000000;
      display: flex;
      font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
      font-size: 1rem;
      font-weight: 700;
      justify-content: center;
      line-height: 1.75rem;
      padding: .75rem 1.65rem;
      position: relative;
      text-align: center;
      text-decoration: none #000000 solid;
      text-decoration-thickness: auto;
      width: 100%;
      max-width: 460px;
      position: relative;
      cursor: pointer;
      transform: rotate(-2deg);
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }

    .button-53:focus {
      outline: 0;
    }

    .button-53:after {
      content: '';
      position: absolute;
      border: 1px solid #000000;
      bottom: 4px;
      left: 4px;
      width: calc(100% - 1px);
      height: calc(100% - 1px);
    }

    .button-53:hover:after {
      bottom: 2px;
      left: 2px;
    }

    @media (min-width: 768px) {
      .button-53 {
        padding: .75rem 3rem;
        font-size: 1.25rem;
      }
    }`,
    })
  );

  arr.push(
    await Component.create({
      name: "Simple Navbar",
      type: "navbar",
      tags: ["animated", "slick"],
      framework: "html",
      stylingFramework: "css",
      markup: `<body>
    <nav class="navMenu">
      <a href="#">Home</a>
      <a href="#">Blog</a>
      <a href="#">Work</a>
      <a href="#">About</a>
      <div class="dot"></div>
    </nav>
  </body>`,
      stylesheet: `@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
    * {
      margin: 0;
      padding: 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    body {
      background: #272727;
      font-family: "Montserrat", sans-serif;
    }

    .navMenu {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }

    .navMenu a {
      color: #f6f4e6;
      text-decoration: none;
      font-size: 1.2em;
      text-transform: uppercase;
      font-weight: 500;
      display: inline-block;
      width: 80px;
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
    }

    .navMenu a:hover {
      color: #fddb3a;
    }

    .navMenu .dot {
      width: 6px;
      height: 6px;
      background: #fddb3a;
      border-radius: 50%;
      opacity: 0;
      -webkit-transform: translateX(30px);
      transform: translateX(30px);
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
    }

    .navMenu a:nth-child(1):hover ~ .dot {
      -webkit-transform: translateX(30px);
      transform: translateX(30px);
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      opacity: 1;
    }

    .navMenu a:nth-child(2):hover ~ .dot {
      -webkit-transform: translateX(110px);
      transform: translateX(110px);
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      opacity: 1;
    }

    .navMenu a:nth-child(3):hover ~ .dot {
      -webkit-transform: translateX(200px);
      transform: translateX(200px);
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      opacity: 1;
    }

    .navMenu a:nth-child(4):hover ~ .dot {
      -webkit-transform: translateX(285px);
      transform: translateX(285px);
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      opacity: 1;
    }`,
    })
  );

  arr.push(
    await Component.create({
      name: "Mobile Nav Clickable",
      type: "navbar",
      framework: "html",
      stylingFramework: "css",
      markup: `
  	<input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label for="menu-icon"></label>
  	<nav class="nav">
  		<ul class="pt-5">
  			<li><a href="#">Work</a></li>
  			<li><a href="#">Studio</a></li>
  			<li><a href="#">News</a></li>
  			<li><a href="#">Contact</a></li>
  		</ul>
  	</nav>`,
      stylesheet: `@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');

    body{
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      font-size: 15px;
      line-height: 1.7;
      color: #ececee;
      background-color: #1f2029;
      overflow: hidden;
      background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg');
      background-position: center;
      background-repeat: repeat;
      background-size: 4%;
      height: 100vh;
      width: 100%;
    }
    .section-center{
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      width: 100%;
      padding: 0;
      margin: 0;
      z-index: 6;
      text-align: center;
      transform: translateY(-50%);
    }
    h1{
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 7vw;
      line-height: 1;
      color: #ffeba7;
      text-align: center;
      -webkit-text-stroke: 2px #ffeba7;
      text-stroke: 2px #ffeba7;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
      color: transparent;
    }

    [type="checkbox"]:checked,
    [type="checkbox"]:not(:checked){
      position: absolute;
      left: -9999px;
    }
    .menu-icon:checked + label,
    .menu-icon:not(:checked) + label{
      position: fixed;
      top: 63px;
      right: 75px;
      display: block;
      width: 30px;
      height: 30px;
      padding: 0;
      margin: 0;
      cursor: pointer;
      z-index: 10;
    }
    .menu-icon:checked + label:before,
    .menu-icon:not(:checked) + label:before{
      position: absolute;
      content: '';
      display: block;
      width: 30px;
      height: 20px;
      z-index: 20;
      top: 0;
      left: 0;
      border-top: 2px solid #ececee;
      border-bottom: 2px solid #ececee;
      transition: border-width 100ms 1500ms ease,
                  top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
                  height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
                  background-color 200ms ease,
                  transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    .menu-icon:checked + label:after,
    .menu-icon:not(:checked) + label:after{
      position: absolute;
      content: '';
      display: block;
      width: 22px;
      height: 2px;
      z-index: 20;
      top: 10px;
      right: 4px;
      background-color: #ececee;
      margin-top: -1px;
      transition: width 100ms 1750ms ease,
                  right 100ms 1750ms ease,
                  margin-top 100ms ease,
                  transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    .menu-icon:checked + label:before{
      top: 10px;
      transform: rotate(45deg);
      height: 2px;
      background-color: #ececee;
      border-width: 0;
      transition: border-width 100ms 340ms ease,
                  top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
                  height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
                  background-color 200ms 500ms ease,
                  transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    .menu-icon:checked + label:after{
      width: 30px;
      margin-top: 0;
      right: 0;
      transform: rotate(-45deg);
      transition: width 100ms ease,
                  right 100ms ease,
                  margin-top 100ms 500ms ease,
                  transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .nav{
      position: fixed;
      top: 33px;
      right: 50px;
      display: block;
      width: 80px;
      height: 80px;
      padding: 0;
      margin: 0;
      z-index: 9;
      overflow: hidden;
      box-shadow: 0 8px 30px 0 rgba(0,0,0,0.3);
      background-color: #353746;
      animation: border-transform 7s linear infinite;
      transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
                  right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
                  transform 250ms 1100ms ease,
                  width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1),
                  height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    @keyframes border-transform{
        0%,100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
      14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; }
      28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; }
      42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; }
      56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; }
      70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; }
      84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; }
    }

    .menu-icon:checked ~ .nav {
      animation-play-state: paused;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      width: 200%;
      height: 200%;
      transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
                  right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
                  transform 250ms 700ms ease,
                  width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1),
                  height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .nav ul{
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      width: 100%;
      padding: 0;
      margin: 0;
      z-index: 6;
      text-align: center;
      transform: translateY(-50%);
      list-style: none;
    }
    .nav ul li{
      position: relative;
      display: block;
      width: 100%;
      padding: 0;
      margin: 10px 0;
      text-align: center;
      list-style: none;
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
      transform: translateY(30px);
      transition: all 250ms linear;
    }
    .nav ul li:nth-child(1){
      transition-delay: 200ms;
    }
    .nav ul li:nth-child(2){
      transition-delay: 150ms;
    }
    .nav ul li:nth-child(3){
      transition-delay: 100ms;
    }
    .nav ul li:nth-child(4){
      transition-delay: 50ms;
    }
    .nav ul li a{
      font-family: 'Montserrat', sans-serif;
      font-size: 9vh;
      text-transform: uppercase;
      line-height: 1.2;
      font-weight: 800;
      display: inline-block;
      position: relative;
      color: #ececee;
      transition: all 250ms linear;
    }
    .nav ul li a:hover{
      text-decoration: none;
      color: #ffeba7;
    }
    .nav ul li a:after{
      display: block;
      position: absolute;
      top: 50%;
      content: '';
      height: 2vh;
      margin-top: -1vh;
      width: 0;
      left: 0;
      background-color: #353746;
      opacity: 0.8;
      transition: width 250ms linear;
    }
    .nav ul li a:hover:after{
      width: 100%;
    }


    .menu-icon:checked ~ .nav  ul li {
      pointer-events: auto;
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
      transition: opacity 350ms ease,
                  transform 250ms ease;
    }
    .menu-icon:checked ~ .nav ul li:nth-child(1){
      transition-delay: 1400ms;
    }
    .menu-icon:checked ~ .nav ul li:nth-child(2){
      transition-delay: 1480ms;
    }
    .menu-icon:checked ~ .nav ul li:nth-child(3){
      transition-delay: 1560ms;
    }
    .menu-icon:checked ~ .nav ul li:nth-child(4){
      transition-delay: 1640ms;
    }



    .logo {
      position: absolute;
      top: 60px;
      left: 50px;
      display: block;
      z-index: 11;
      transition: all 250ms linear;
    }
    .logo img {
      height: 26px;
      width: auto;
      display: block;
    }



    @media screen and (max-width: 991px) {
      .menu-icon:checked + label,
      .menu-icon:not(:checked) + label{
        right: 55px;
      }
      .logo {
        left: 30px;
      }
      .nav{
        right: 30px;
      }
      h1{
        font-size: 9vw;
        -webkit-text-stroke: 2px transparent;
        text-stroke: 2px transparent;
        -webkit-text-fill-color: #ffeba7;
        text-fill-color: #ffeba7;
        color: #ffeba7;
      }
      .nav ul li a{
        font-size: 8vh;
      }
    }`,
    })
  );

  arr.push(
    await Component.create({
      name: "Social Media Footer",
      type: "footer",
      framework: "html",
      stylingFramework: "less",
      markup: `<div class="browser">
    <div class="chrome">
      <a href="#" class="red"></a>
      <a href="#" class="amber"></a>
      <a href="#" class="green"></a>
      <div class="url"></div>
    </div>
    <h1>Social media footer</h1>
    <h2>Hover over the icons at the bottom of the page.</h2>
    <footer>
      <div class="social-media-links">
        <ul>
          <li>
            <!-- twitter -->
            <a href="#">
              <svg class="glow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path class="st0" d="M9.5 27.1c11.2 0 17.4-9.3 17.4-17.4 0-0.3 0-0.5 0-0.8 1.2-0.9 2.2-1.9 3-3.2 -1.1 0.5-2.3 0.8-3.5 1 1.3-0.8 2.2-2 2.7-3.4 -1.2 0.7-2.5 1.2-3.9 1.5 -1.1-1.2-2.7-1.9-4.5-1.9 -3.4 0-6.1 2.7-6.1 6.1 0 0.5 0.1 0.9 0.2 1.4C9.7 10.1 5.2 7.7 2.2 4 1.7 4.9 1.4 6 1.4 7.1c0 2.1 1.1 4 2.7 5.1 -1 0-1.9-0.3-2.8-0.8 0 0 0 0.1 0 0.1 0 3 2.1 5.4 4.9 6 -0.5 0.1-1.1 0.2-1.6 0.2 -0.4 0-0.8 0-1.1-0.1 0.8 2.4 3 4.2 5.7 4.2 -2.1 1.6-4.7 2.6-7.6 2.6 -0.5 0-1 0-1.5-0.1C2.8 26.1 6 27.1 9.5 27.1"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path class="st0" d="M9.5 27.1c11.2 0 17.4-9.3 17.4-17.4 0-0.3 0-0.5 0-0.8 1.2-0.9 2.2-1.9 3-3.2 -1.1 0.5-2.3 0.8-3.5 1 1.3-0.8 2.2-2 2.7-3.4 -1.2 0.7-2.5 1.2-3.9 1.5 -1.1-1.2-2.7-1.9-4.5-1.9 -3.4 0-6.1 2.7-6.1 6.1 0 0.5 0.1 0.9 0.2 1.4C9.7 10.1 5.2 7.7 2.2 4 1.7 4.9 1.4 6 1.4 7.1c0 2.1 1.1 4 2.7 5.1 -1 0-1.9-0.3-2.8-0.8 0 0 0 0.1 0 0.1 0 3 2.1 5.4 4.9 6 -0.5 0.1-1.1 0.2-1.6 0.2 -0.4 0-0.8 0-1.1-0.1 0.8 2.4 3 4.2 5.7 4.2 -2.1 1.6-4.7 2.6-7.6 2.6 -0.5 0-1 0-1.5-0.1C2.8 26.1 6 27.1 9.5 27.1"/>
              </svg>
            </a>
          </li>
          <li>
            <!-- facebook -->
            <a href="#">
              <svg class="glow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path class="st0" d="M28.3 0.1H1.7c-0.9 0-1.6 0.7-1.6 1.6v26.5c0 0.9 0.7 1.6 1.6 1.6H16V18.4h-3.9v-4.5H16v-3.3c0-3.9 2.4-5.9 5.8-5.9 1.6 0 3.1 0.1 3.5 0.2v4l-2.4 0c-1.9 0-2.2 0.9-2.2 2.2v2.9h4.5l-0.6 4.5h-3.9v11.5h7.6c0.9 0 1.6-0.7 1.6-1.6V1.7C29.9 0.8 29.2 0.1 28.3 0.1z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path class="st0" d="M28.3 0.1H1.7c-0.9 0-1.6 0.7-1.6 1.6v26.5c0 0.9 0.7 1.6 1.6 1.6H16V18.4h-3.9v-4.5H16v-3.3c0-3.9 2.4-5.9 5.8-5.9 1.6 0 3.1 0.1 3.5 0.2v4l-2.4 0c-1.9 0-2.2 0.9-2.2 2.2v2.9h4.5l-0.6 4.5h-3.9v11.5h7.6c0.9 0 1.6-0.7 1.6-1.6V1.7C29.9 0.8 29.2 0.1 28.3 0.1z"/>
              </svg>
            </a>
          </li>
          <li>
            <!-- youtube -->
            <a href="#">
              <svg class="glow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path class="st0" d="M29.7 9c0 0-0.3-2.1-1.2-3 -1.1-1.2-2.4-1.2-3-1.3C21.3 4.5 15 4.5 15 4.5h0c0 0-6.3 0-10.5 0.3C3.9 4.8 2.6 4.8 1.5 6 0.6 6.9 0.3 9 0.3 9S0 11.4 0 13.9v2.3C0 18.6 0.3 21 0.3 21s0.3 2.1 1.2 3c1.1 1.2 2.6 1.2 3.3 1.3C7.2 25.5 15 25.6 15 25.6s6.3 0 10.5-0.3c0.6-0.1 1.9-0.1 3-1.3 0.9-0.9 1.2-3 1.2-3s0.3-2.4 0.3-4.9v-2.3C30 11.4 29.7 9 29.7 9zM11.9 18.9l0-8.4 8.1 4.2L11.9 18.9z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path class="st0" d="M29.7 9c0 0-0.3-2.1-1.2-3 -1.1-1.2-2.4-1.2-3-1.3C21.3 4.5 15 4.5 15 4.5h0c0 0-6.3 0-10.5 0.3C3.9 4.8 2.6 4.8 1.5 6 0.6 6.9 0.3 9 0.3 9S0 11.4 0 13.9v2.3C0 18.6 0.3 21 0.3 21s0.3 2.1 1.2 3c1.1 1.2 2.6 1.2 3.3 1.3C7.2 25.5 15 25.6 15 25.6s6.3 0 10.5-0.3c0.6-0.1 1.9-0.1 3-1.3 0.9-0.9 1.2-3 1.2-3s0.3-2.4 0.3-4.9v-2.3C30 11.4 29.7 9 29.7 9zM11.9 18.9l0-8.4 8.1 4.2L11.9 18.9z"/>
              </svg>
            </a>
          </li>
          <li>
            <!-- instagram -->
            <a href="#">
              <svg class="glow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path class="st0" d="M15 2.8c4 0 4.4 0 6 0.1 1.4 0.1 2.2 0.3 2.8 0.5 0.7 0.3 1.2 0.6 1.7 1.1 0.5 0.5 0.8 1 1.1 1.7C26.8 6.8 27 7.6 27.1 9c0.1 1.6 0.1 2 0.1 6s0 4.4-0.1 6c-0.1 1.4-0.3 2.2-0.5 2.8 -0.3 0.7-0.6 1.2-1.1 1.7 -0.5 0.5-1 0.8-1.7 1.1 -0.5 0.2-1.3 0.4-2.8 0.5 -1.6 0.1-2 0.1-6 0.1s-4.4 0-6-0.1c-1.4-0.1-2.2-0.3-2.8-0.5 -0.7-0.3-1.2-0.6-1.7-1.1 -0.5-0.5-0.8-1-1.1-1.7C3.2 23.2 3 22.4 2.9 21c-0.1-1.6-0.1-2-0.1-6s0-4.4 0.1-6C3 7.6 3.2 6.8 3.4 6.2 3.7 5.5 4 5.1 4.5 4.5c0.5-0.5 1-0.8 1.7-1.1C6.8 3.2 7.6 3 9 2.9 10.6 2.8 11 2.8 15 2.8M15 0.2c-4 0-4.5 0-6.1 0.1C7.3 0.3 6.2 0.6 5.3 0.9c-1 0.4-1.8 0.9-2.6 1.7C1.8 3.5 1.3 4.3 0.9 5.3c-0.4 0.9-0.6 2-0.7 3.6C0.2 10.5 0.1 11 0.1 15c0 4 0 4.5 0.1 6.1 0.1 1.6 0.3 2.7 0.7 3.6 0.4 1 0.9 1.8 1.7 2.6 0.8 0.8 1.7 1.3 2.6 1.7 0.9 0.4 2 0.6 3.6 0.7 1.6 0.1 2.1 0.1 6.1 0.1s4.5 0 6.1-0.1c1.6-0.1 2.7-0.3 3.6-0.7 1-0.4 1.8-0.9 2.6-1.7 0.8-0.8 1.3-1.7 1.7-2.6 0.4-0.9 0.6-2 0.7-3.6 0.1-1.6 0.1-2.1 0.1-6.1s0-4.5-0.1-6.1c-0.1-1.6-0.3-2.7-0.7-3.6 -0.4-1-0.9-1.8-1.7-2.6 -0.8-0.8-1.7-1.3-2.6-1.7 -0.9-0.4-2-0.6-3.6-0.7C19.5 0.2 19 0.2 15 0.2L15 0.2z"/>
                <path class="st0" d="M15 7.4c-4.2 0-7.6 3.4-7.6 7.6s3.4 7.6 7.6 7.6 7.6-3.4 7.6-7.6S19.2 7.4 15 7.4zM15 20c-2.7 0-5-2.2-5-5s2.2-5 5-5c2.7 0 5 2.2 5 5S17.7 20 15 20z"/>
                <circle class="st0" cx="22.9" cy="7.1" r="1.8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path class="st0" d="M15 2.8c4 0 4.4 0 6 0.1 1.4 0.1 2.2 0.3 2.8 0.5 0.7 0.3 1.2 0.6 1.7 1.1 0.5 0.5 0.8 1 1.1 1.7C26.8 6.8 27 7.6 27.1 9c0.1 1.6 0.1 2 0.1 6s0 4.4-0.1 6c-0.1 1.4-0.3 2.2-0.5 2.8 -0.3 0.7-0.6 1.2-1.1 1.7 -0.5 0.5-1 0.8-1.7 1.1 -0.5 0.2-1.3 0.4-2.8 0.5 -1.6 0.1-2 0.1-6 0.1s-4.4 0-6-0.1c-1.4-0.1-2.2-0.3-2.8-0.5 -0.7-0.3-1.2-0.6-1.7-1.1 -0.5-0.5-0.8-1-1.1-1.7C3.2 23.2 3 22.4 2.9 21c-0.1-1.6-0.1-2-0.1-6s0-4.4 0.1-6C3 7.6 3.2 6.8 3.4 6.2 3.7 5.5 4 5.1 4.5 4.5c0.5-0.5 1-0.8 1.7-1.1C6.8 3.2 7.6 3 9 2.9 10.6 2.8 11 2.8 15 2.8M15 0.2c-4 0-4.5 0-6.1 0.1C7.3 0.3 6.2 0.6 5.3 0.9c-1 0.4-1.8 0.9-2.6 1.7C1.8 3.5 1.3 4.3 0.9 5.3c-0.4 0.9-0.6 2-0.7 3.6C0.2 10.5 0.1 11 0.1 15c0 4 0 4.5 0.1 6.1 0.1 1.6 0.3 2.7 0.7 3.6 0.4 1 0.9 1.8 1.7 2.6 0.8 0.8 1.7 1.3 2.6 1.7 0.9 0.4 2 0.6 3.6 0.7 1.6 0.1 2.1 0.1 6.1 0.1s4.5 0 6.1-0.1c1.6-0.1 2.7-0.3 3.6-0.7 1-0.4 1.8-0.9 2.6-1.7 0.8-0.8 1.3-1.7 1.7-2.6 0.4-0.9 0.6-2 0.7-3.6 0.1-1.6 0.1-2.1 0.1-6.1s0-4.5-0.1-6.1c-0.1-1.6-0.3-2.7-0.7-3.6 -0.4-1-0.9-1.8-1.7-2.6 -0.8-0.8-1.7-1.3-2.6-1.7 -0.9-0.4-2-0.6-3.6-0.7C19.5 0.2 19 0.2 15 0.2L15 0.2z"/>
                <path class="st0" d="M15 7.4c-4.2 0-7.6 3.4-7.6 7.6s3.4 7.6 7.6 7.6 7.6-3.4 7.6-7.6S19.2 7.4 15 7.4zM15 20c-2.7 0-5-2.2-5-5s2.2-5 5-5c2.7 0 5 2.2 5 5S17.7 20 15 20z"/>
                <circle class="st0" cx="22.9" cy="7.1" r="1.8"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>`,
      stylesheet: `@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,300,600,700,900);

    @rhino: #323b40;
    @rhinoMid: #4f585e;
    @teal: #0096a1;
    @tealMid: #0ebac7;
    @red: #fc625c;
    @amber: #fdbc40;
    @green: #34c748;
    @offWhite: #e9eaea;

    html {
      background: @rhinoMid;
    }

    div.browser {
      background: #fff url(http://www.s4c.cymru/temp/unsplash-kitsune-4.jpg) no-repeat;
      background-size: cover;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
      box-shadow: 0 4px 8px -4px rgba(0,0,0,0.4), 0 12px 24px -6px rgba(0,0,0,0.4), 0 24px 64px 12px rgba(0,0,0,0.25);
      color: @rhino;
      font-family: 'Source Sans Pro', helvetica;
      overflow: hidden;
      letter-spacing: -0.05em;
      margin: 5% auto;
      max-width: 1200px;
      min-width: 320px;
      min-height: 600px;
      padding-bottom: 10%;
      position: relative;
      width: 90%;
      div.chrome {
        background: @rhinoMid;
        height: 40px;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        > a {
          border-radius: 12px;
          display: block;
          float: left;
          height: 12px;
          margin: 13px 4px;
          width: 12px;
          &:first-child {
            margin-left: 13px;
          }
          &.red {
            background: @red;
          }
          &.amber {
            background: @amber;
          }
          &.green {
            background: @green;
          }
        }
        div.url {
          background: #5f676d;
          border-radius: 4px;
          height: 24px;
          left: 50%;
          position: absolute;
          transform: translateX(-50%);
          top: 8px;
          width: 70%;
        }
      }
      h1 {
        font-size: 24px;
        font-weight: 200;
        margin: 0;
        padding: 80px 40px 10px;
      }
      h2 {
        font-size: 48px;
        line-height: 1em;
        max-width: 16em;
        margin: 0;
        padding: 0 40px;
      }
    }

    footer {
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      div.social-media-links {
        background: @rhino;
        overflow: hidden;
        padding-bottom: 4px;
        text-align: center;
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          display: inline;
          margin: 0;
          padding: 0;
        }
        a {
          border-bottom: 0px solid rgba(0,0,0,0.95);
          border-radius: 4px;
          box-shadow: inset 0 -3px 0 0 rgba(0,0,0,0), 0 6px 8px rgba(0,0,0,0), 0 24px 24px rgba(0,0,0,0), 0 36px 36px rgba(0,0,0,0), 0 64px 64px rgba(0,0,0,0), 0 64px 128px rgba(0,0,0,0), 0 120px 0 rgba(0,0,0,0), 0 86px 8px 6px rgba(0,0,0,0),;
          display: inline-block;
          height: 30px;
          padding: 20px;
          position: relative;
          transition: .2s ease-in;
          width: 30px;
          svg {
            left: 20px;
            position: absolute;
            top: 20px;
            height: 30px;
            width: 30px;
            &.glow {
              path, circle {
                fill: rgba(0,0,0,0);
              }
            }
            path, circle {
              fill: @teal;
              transition: .2s ease-in;
            }
          }
        }
        a:hover {
          transform: translateY(-4px);
          box-shadow: inset 0 -3px 0 0 rgba(0,0,0,0.1), 0 6px 8px rgba(0,0,0,0.05), 0 24px 24px rgba(0,0,0,0.05), 0 36px 36px rgba(0,0,0,0.05), 0 64px 64px rgba(0,0,0,0.15), 0 64px 128px rgba(0,0,0,0.15), 0 86px 8px 6px fadeout(@tealMid, 75), 0 83px 4px 0px fadeout(@tealMid, 5);
          svg {
            &.glow {
              filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><f…ter id="filter"><feGaussianBlur stdDeviation="10" /></filter></svg>#filter');
              filter: blur(2px);
              path, circle {
                fill: fadeout(@tealMid, 40);
              }
            }
            path, circle {
              fill: @tealMid;
            }
          }
        }
      }
    }`,
    })
  );

  arr.push(
    await Component.create({
      name: "Dark Mode Form",
      type: "form",
      framework: "html",
      stylingFramework: "css",
      markup: `    <div class="form">
    <div class="title">Welcome</div>
    <div class="subtitle">Let's create your account!</div>
    <div class="input-container ic1">
      <input id="firstname" class="input" type="text" placeholder=" " />
      <div class="cut"></div>
      <label for="firstname" class="placeholder">First name</label>
    </div>
    <div class="input-container ic2">
      <input id="lastname" class="input" type="text" placeholder=" " />
      <div class="cut"></div>
      <label for="lastname" class="placeholder">Last name</label>
    </div>
    <div class="input-container ic2">
      <input id="email" class="input" type="text" placeholder=" " />
      <div class="cut cut-short"></div>
      <label for="email" class="placeholder">Email</>
    </div>
    <button type="text" class="submit">submit</button>
  </div>`,
      stylesheet: `body {
      align-items: center;
      background-color: #000;
      display: flex;
      justify-content: center;
      height: 100vh;
    }

    .form {
      background-color: #15172b;
      border-radius: 20px;
      box-sizing: border-box;
      height: 500px;
      padding: 20px;
      width: 320px;
    }

    .title {
      color: #eee;
      font-family: sans-serif;
      font-size: 36px;
      font-weight: 600;
      margin-top: 30px;
    }

    .subtitle {
      color: #eee;
      font-family: sans-serif;
      font-size: 16px;
      font-weight: 600;
      margin-top: 10px;
    }

    .input-container {
      height: 50px;
      position: relative;
      width: 100%;
    }

    .ic1 {
      margin-top: 40px;
    }

    .ic2 {
      margin-top: 30px;
    }

    .input {
      background-color: #303245;
      border-radius: 12px;
      border: 0;
      box-sizing: border-box;
      color: #eee;
      font-size: 18px;
      height: 100%;
      outline: 0;
      padding: 4px 20px 0;
      width: 100%;
    }

    .cut {
      background-color: #15172b;
      border-radius: 10px;
      height: 20px;
      left: 20px;
      position: absolute;
      top: -20px;
      transform: translateY(0);
      transition: transform 200ms;
      width: 76px;
    }

    .cut-short {
      width: 50px;
    }

    .input:focus ~ .cut,
    .input:not(:placeholder-shown) ~ .cut {
      transform: translateY(8px);
    }

    .placeholder {
      color: #65657b;
      font-family: sans-serif;
      left: 20px;
      line-height: 14px;
      pointer-events: none;
      position: absolute;
      transform-origin: 0 50%;
      transition: transform 200ms, color 200ms;
      top: 20px;
    }

    .input:focus ~ .placeholder,
    .input:not(:placeholder-shown) ~ .placeholder {
      transform: translateY(-30px) translateX(10px) scale(0.75);
    }

    .input:not(:placeholder-shown) ~ .placeholder {
      color: #808097;
    }

    .input:focus ~ .placeholder {
      color: #dc2f55;
    }

    .submit {
      background-color: #08d;
      border-radius: 12px;
      border: 0;
      box-sizing: border-box;
      color: #eee;
      cursor: pointer;
      font-size: 18px;
      height: 50px;
      margin-top: 38px;
      // outline: 0;
      text-align: center;
      width: 100%;
    }

    .submit:active {
      background-color: #06b;
    }`,
    })
  );

  arr.push(
    await Component.create({
      name: "Login Form",
      type: "form",
      framework: "html",
      stylingFramework: "css",
      markup: `<div class="login-box">
    <h2>Login</h2>
    <form>
      <div class="user-box">
        <input type="text" name="" required="">
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="password" name="" required="">
        <label>Password</label>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </a>
    </form>
  </div>`,
      stylesheet: `html {
      height: 100%;
    }
    body {
      margin:0;
      padding:0;
      font-family: sans-serif;
      background: linear-gradient(#141e30, #243b55);
    }

    .login-box {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 400px;
      padding: 40px;
      transform: translate(-50%, -50%);
      background: rgba(0,0,0,.5);
      box-sizing: border-box;
      box-shadow: 0 15px 25px rgba(0,0,0,.6);
      border-radius: 10px;
    }

    .login-box h2 {
      margin: 0 0 30px;
      padding: 0;
      color: #fff;
      text-align: center;
    }

    .login-box .user-box {
      position: relative;
    }

    .login-box .user-box input {
      width: 100%;
      padding: 10px 0;
      font-size: 16px;
      color: #fff;
      margin-bottom: 30px;
      border: none;
      border-bottom: 1px solid #fff;
      outline: none;
      background: transparent;
    }
    .login-box .user-box label {
      position: absolute;
      top:0;
      left: 0;
      padding: 10px 0;
      font-size: 16px;
      color: #fff;
      pointer-events: none;
      transition: .5s;
    }

    .login-box .user-box input:focus ~ label,
    .login-box .user-box input:valid ~ label {
      top: -20px;
      left: 0;
      color: #03e9f4;
      font-size: 12px;
    }

    .login-box form a {
      position: relative;
      display: inline-block;
      padding: 10px 20px;
      color: #03e9f4;
      font-size: 16px;
      text-decoration: none;
      text-transform: uppercase;
      overflow: hidden;
      transition: .5s;
      margin-top: 40px;
      letter-spacing: 4px
    }

    .login-box a:hover {
      background: #03e9f4;
      color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 5px #03e9f4,
                  0 0 25px #03e9f4,
                  0 0 50px #03e9f4,
                  0 0 100px #03e9f4;
    }

    .login-box a span {
      position: absolute;
      display: block;
    }

    .login-box a span:nth-child(1) {
      top: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #03e9f4);
      animation: btn-anim1 1s linear infinite;
    }

    @keyframes btn-anim1 {
      0% {
        left: -100%;
      }
      50%,100% {
        left: 100%;
      }
    }

    .login-box a span:nth-child(2) {
      top: -100%;
      right: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(180deg, transparent, #03e9f4);
      animation: btn-anim2 1s linear infinite;
      animation-delay: .25s
    }

    @keyframes btn-anim2 {
      0% {
        top: -100%;
      }
      50%,100% {
        top: 100%;
      }
    }

    .login-box a span:nth-child(3) {
      bottom: 0;
      right: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(270deg, transparent, #03e9f4);
      animation: btn-anim3 1s linear infinite;
      animation-delay: .5s
    }

    @keyframes btn-anim3 {
      0% {
        right: -100%;
      }
      50%,100% {
        right: 100%;
      }
    }

    .login-box a span:nth-child(4) {
      bottom: -100%;
      left: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(360deg, transparent, #03e9f4);
      animation: btn-anim4 1s linear infinite;
      animation-delay: .75s
    }

    @keyframes btn-anim4 {
      0% {
        bottom: -100%;
      }
      50%,100% {
        bottom: 100%;
      }
    }
    `,
    })
  );

  await Component.create({
    name: "Wallet Button",
    type: "button",
    tags: ["cute"],
    framework: "html",
    stylingFramework: "css",
    src: `https://codepen.io/peruvianidol/pen/MWboOEQ`,
    markup: `<button class="button">
    <span class="button__text">
      <span>b</span><span>u</span>y</span><span> </span><span>s</span><span>t</span><span>u</span><span>f</span><span>f</span>
    </span>
    <svg class="button__svg" role="presentational" viewBox="0 0 600 600">
      <defs>
        <clipPath id="myClip">
          <rect x="0" y="0" width="100%" height="50%" />
        </clipPath>
      </defs>
      <g clip-path="url(#myClip)">
        <g id="money">
          <path d="M441.9,116.54h-162c-4.66,0-8.49,4.34-8.62,9.83l.85,278.17,178.37,2V126.37C450.38,120.89,446.56,116.52,441.9,116.54Z" fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
          <path d="M424.73,165.49c-10-2.53-17.38-12-17.68-24H316.44c-.09,11.58-7,21.53-16.62,23.94-3.24.92-5.54,4.29-5.62,8.21V376.54H430.1V173.71C430.15,169.83,427.93,166.43,424.73,165.49Z" fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
        </g>
        <g id="creditcard">
          <path d="M372.12,181.59H210.9c-4.64,0-8.45,4.34-8.58,9.83l.85,278.17,177.49,2V191.42C380.55,185.94,376.75,181.57,372.12,181.59Z" fill="#a76fe2" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
          <path d="M347.55,261.85H332.22c-3.73,0-6.76-3.58-6.76-8v-35.2c0-4.42,3-8,6.76-8h15.33c3.73,0,6.76,3.58,6.76,8v35.2C354.31,258.27,351.28,261.85,347.55,261.85Z" fill="#ffdc67" />
          <path d="M249.73,183.76h28.85v274.8H249.73Z" fill="#323c44" />
        </g>
      </g>
      <g id="wallet">
        <path d="M478,288.23h-337A28.93,28.93,0,0,0,112,317.14V546.2a29,29,0,0,0,28.94,28.95H478a29,29,0,0,0,28.95-28.94h0v-229A29,29,0,0,0,478,288.23Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
        <path d="M512.83,382.71H416.71a28.93,28.93,0,0,0-28.95,28.94h0V467.8a29,29,0,0,0,28.95,28.95h96.12a19.31,19.31,0,0,0,19.3-19.3V402a19.3,19.3,0,0,0-19.3-19.3Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
        <path d="M451.46,435.79v7.88a14.48,14.48,0,1,1-29,0v-7.9a14.48,14.48,0,0,1,29,0Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
        <path d="M147.87,541.93V320.84c-.05-13.2,8.25-21.51,21.62-24.27a42.71,42.71,0,0,1,7.14-1.32l-29.36-.63a67.77,67.77,0,0,0-9.13.45c-13.37,2.75-20.32,12.57-20.27,25.77l.38,221.24c-1.57,15.44,8.15,27.08,25.34,26.1l33-.19c-15.9,0-28.78-10.58-28.76-25.93Z" fill="#7b8f91" />
        <path d="M148.16,343.22a6,6,0,0,0-6,6v92a6,6,0,0,0,12,0v-92A6,6,0,0,0,148.16,343.22Z" fill="#323c44" />
      </g>

    </svg>
  </button>`,
    stylesheet: `@media (hover: hover) {
        #creditcard {
          /*  set start position */
          transform: translateY(110px);
          transition: transform 0.1s ease-in-out;
          /*  set transition for mouse enter & exit */
        }

        #money {
          /*  set start position */
          transform: translateY(180px);
          transition: transform 0.1s ease-in-out;
          /*  set transition for mouse enter & exit */
        }

        button:hover #creditcard {
          transform: translateY(0px);
          transition: transform 0.2s ease-in-out;
          /*  overide transition for mouse enter */
        }

        button:hover #money {
          transform: translateY(0px);
          transition: transform 0.3s ease-in-out;
          /*  overide transition for mouse enter */
        }
      }

      @keyframes bounce {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-0.25rem);
        }
        100% {
          transform: translateY(0);
        }
      }

      .button:hover .button__text span {
        transform: translateY(-0.25rem);
        transition: transform .2s ease-in-out;
      }

      /* styling */

      @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap");

      body {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .button {
        border: none;
        outline: none;
        background-color: purple;
        padding: 1rem 90px 1rem 2rem;
        position: relative;
        border-radius: 8px;
        letter-spacing: 0.7px;
        background-color: #5086bd;
        color: #fff;
        font-size: 21px;
        font-family: "Lato", sans-serif;
        cursor: pointer;
        box-shadow: rgba(0, 9, 61, 0.2) 0px 4px 8px 0px;
      }

      .button:active {
        transform: translateY(1px);
      }

      .button__svg {
        position: absolute;
        overflow: visible;
        bottom: 6px;
        right: 0.2rem;
        height: 140%;
      }
      `,
  });
  await Component.create({
    name: `Cyberpunk 2077 Glitch Button`,
    type: `button`,
    tags: ["videogames"],
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/stevenlei/pen/ZEpyBod`,
    markup: `<link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

    <button>AVAILABLE NOW</button>`,
    stylesheet: `body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #F8F005;
      }

      button, button::after {
        width: 380px;
        height: 86px;
        font-size: 36px;
        font-family: 'Bebas Neue', cursive;
        background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
        border: 0;
        color: #fff;
        letter-spacing: 3px;
        line-height: 88px;
        box-shadow: 6px 0px 0px #00E6F6;
        outline: transparent;
        position: relative;
      }

      button::after {
        --slice-0: inset(50% 50% 50% 50%);
        --slice-1: inset(80% -6px 0 0);
        --slice-2: inset(50% -6px 30% 0);
        --slice-3: inset(10% -6px 85% 0);
        --slice-4: inset(40% -6px 43% 0);
        --slice-5: inset(80% -6px 5% 0);

        content: 'AVAILABLE NOW';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%);
        text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
        clip-path: var(--slice-0);
      }

      button:hover::after {
        animation: 1s glitch;
        animation-timing-function: steps(2, end);
      }

      @keyframes glitch {
        0% {
          clip-path: var(--slice-1);
          transform: translate(-20px, -10px);
        }
        10% {
          clip-path: var(--slice-3);
          transform: translate(10px, 10px);
        }
        20% {
          clip-path: var(--slice-1);
          transform: translate(-10px, 10px);
        }
        30% {
          clip-path: var(--slice-3);
          transform: translate(0px, 5px);
        }
        40% {
          clip-path: var(--slice-2);
          transform: translate(-5px, 0px);
        }
        50% {
          clip-path: var(--slice-3);
          transform: translate(5px, 0px);
        }
        60% {
          clip-path: var(--slice-4);
          transform: translate(5px, 10px);
        }
        70% {
          clip-path: var(--slice-2);
          transform: translate(-10px, 10px);
        }
        80% {
          clip-path: var(--slice-5);
          transform: translate(20px, -10px);
        }
        90% {
          clip-path: var(--slice-1);
          transform: translate(-10px, 0px);
        }
        100% {
          clip-path: var(--slice-1);
          transform: translate(0);
        }
      }`,
  });
  await Component.create({
    name: `Cyber Buttons`,
    type: `button`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/jh3y/pen/PoGbxLp`,
    markup: `<button class="cybr-btn">
    Cyber<span aria-hidden>_</span>
    <span aria-hidden class="cybr-btn__glitch">Cyber_</span>
    <span aria-hidden class="cybr-btn__tag">R25</span>
  </button>
  <button class="cybr-btn">
    Buttons<span aria-hidden>_</span>
    <span aria-hidden class="cybr-btn__glitch">Buttons_</span>
    <span aria-hidden class="cybr-btn__tag">R25</span>
  </button>`,
    stylesheet: `@font-face {
        font-family: Cyber;
        src: url("https://assets.codepen.io/605876/Blender-Pro-Bold.otf");
        font-display: swap;
      }

      * {
        box-sizing: border-box;
      }

      body {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        font-family: 'Cyber', sans-serif;
        background-color: #F5ED00;
      }

      body .cybr-btn + .cybr-btn {
        margin-top: 2rem;
      }

      .cybr-btn {
        --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 1%));
        --shadow-primary: hsl(var(--shadow-primary-hue), 90%, 50%);
        --primary-hue: 0;
        --primary-lightness: 50;
        --color: hsl(0, 0%, 100%);
        --font-size: 26px;
        --shadow-primary-hue: 180;
        --label-size: 9px;
        --shadow-secondary-hue: 60;
        --shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%);
        --clip: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 70%);
        --border: 4px;
        --shimmy-distance: 5;
        --clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);
        --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);
        --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);
        --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
        --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
        --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);
        --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);
        font-family: 'Cyber', sans-serif;
        color: var(--color);
        cursor: pointer;
        background: transparent;
        text-transform: uppercase;
        font-size: var(--font-size);
        outline: transparent;
        letter-spacing: 2px;
        position: relative;
        font-weight: 700;
        border: 0;
        min-width: 300px;
        height: 75px;
        line-height: 75px;
        transition: background 0.2s;
      }

      .cybr-btn:hover {
        --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.8%));
      }
      .cybr-btn:active {
        --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.6%));
      }

      .cybr-btn:after,
      .cybr-btn:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        clip-path: var(--clip);
        z-index: -1;
      }

      .cybr-btn:before {
        background: var(--shadow-primary);
        transform: translate(var(--border), 0);
      }

      .cybr-btn:after {
        background: var(--primary);
      }

      .cybr-btn__tag {
        position: absolute;
        padding: 1px 4px;
        letter-spacing: 1px;
        line-height: 1;
        bottom: -5%;
        right: 5%;
        font-weight: normal;
        color: hsl(0, 0%, 0%);
        font-size: var(--label-size);
      }

      .cybr-btn__glitch {
        position: absolute;
        top: calc(var(--border) * -1);
        left: calc(var(--border) * -1);
        right: calc(var(--border) * -1);
        bottom: calc(var(--border) * -1);
        background: var(--shadow-primary);
        text-shadow: 2px 2px var(--shadow-primary), -2px -2px var(--shadow-secondary);
        clip-path: var(--clip);
        animation: glitch 2s infinite;
        display: none;
      }

      .cybr-btn:hover .cybr-btn__glitch {
        display: block;
      }

      .cybr-btn__glitch:before {
        content: '';
        position: absolute;
        top: calc(var(--border) * 1);
        right: calc(var(--border) * 1);
        bottom: calc(var(--border) * 1);
        left: calc(var(--border) * 1);
        clip-path: var(--clip);
        background: var(--primary);
        z-index: -1;
      }

      @keyframes glitch {
        0% {
          clip-path: var(--clip-one);
        }
        2%, 8% {
          clip-path: var(--clip-two);
          transform: translate(calc(var(--shimmy-distance) * -1%), 0);
        }
        6% {
          clip-path: var(--clip-two);
          transform: translate(calc(var(--shimmy-distance) * 1%), 0);
        }
        9% {
          clip-path: var(--clip-two);
          transform: translate(0, 0);
        }
        10% {
          clip-path: var(--clip-three);
          transform: translate(calc(var(--shimmy-distance) * 1%), 0);
        }
        13% {
          clip-path: var(--clip-three);
          transform: translate(0, 0);
        }
        14%, 21% {
          clip-path: var(--clip-four);
          transform: translate(calc(var(--shimmy-distance) * 1%), 0);
        }
        25% {
          clip-path: var(--clip-five);
          transform: translate(calc(var(--shimmy-distance) * 1%), 0);
        }
        30% {
          clip-path: var(--clip-five);
          transform: translate(calc(var(--shimmy-distance) * -1%), 0);
        }
        35%, 45% {
          clip-path: var(--clip-six);
          transform: translate(calc(var(--shimmy-distance) * -1%));
        }
        40% {
          clip-path: var(--clip-six);
          transform: translate(calc(var(--shimmy-distance) * 1%));
        }
        50% {
          clip-path: var(--clip-six);
          transform: translate(0, 0);
        }
        55% {
          clip-path: var(--clip-seven);
          transform: translate(calc(var(--shimmy-distance) * 1%), 0);
        }
        60% {
          clip-path: var(--clip-seven);
          transform: translate(0, 0);
        }
        31%, 61%, 100% {
          clip-path: var(--clip-four);
        }
      }

      .cybr-btn:nth-of-type(2) {
        --primary-hue: 260;
      }`,
  });
  await Component.create({
    name: `Social Media Icons w/ Popup`,
    type: `icon`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/abdelrhmansaid/pen/OJRNOpQ`,
    markup: `<ul class="wrapper">
    <li class="icon facebook">
      <span class="tooltip">Facebook</span>
      <span><i class="fab fa-facebook-f"></i></span>
    </li>
    <li class="icon twitter">
      <span class="tooltip">Twitter</span>
      <span><i class="fab fa-twitter"></i></span>
    </li>
    <li class="icon instagram">
      <span class="tooltip">Instagram</span>
      <span><i class="fab fa-instagram"></i></span>
    </li>
    <li class="icon github">
      <span class="tooltip">Github</span>
      <span><i class="fab fa-github"></i></span>
    </li>
    <li class="icon youtube">
      <span class="tooltip">Youtube</span>
      <span><i class="fab fa-youtube"></i></span>
    </li>
  </ul>`,
    stylesheet: `@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    *:focus,
    *:active {
      outline: none !important;
      -webkit-tap-highlight-color: transparent;
    }

    html,
    body {
      display: grid;
      height: 100%;
      width: 100%;
      font-family: "Poppins", sans-serif;
      place-items: center;
      background: linear-gradient(315deg, #ffffff, #d7e1ec);
    }

    .wrapper {
      display: inline-flex;
      list-style: none;
    }

    .wrapper .icon {
      position: relative;
      background: #ffffff;
      border-radius: 50%;
      padding: 15px;
      margin: 10px;
      width: 50px;
      height: 50px;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .wrapper .tooltip {
      position: absolute;
      top: 0;
      font-size: 14px;
      background: #ffffff;
      color: #ffffff;
      padding: 5px 8px;
      border-radius: 5px;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .wrapper .tooltip::before {
      position: absolute;
      content: "";
      height: 8px;
      width: 8px;
      background: #ffffff;
      bottom: -3px;
      left: 50%;
      transform: translate(-50%) rotate(45deg);
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .wrapper .icon:hover .tooltip {
      top: -45px;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    .wrapper .icon:hover span,
    .wrapper .icon:hover .tooltip {
      text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
    }

    .wrapper .facebook:hover,
    .wrapper .facebook:hover .tooltip,
    .wrapper .facebook:hover .tooltip::before {
      background: #1877F2;
      color: #ffffff;
    }

    .wrapper .twitter:hover,
    .wrapper .twitter:hover .tooltip,
    .wrapper .twitter:hover .tooltip::before {
      background: #1DA1F2;
      color: #ffffff;
    }

    .wrapper .instagram:hover,
    .wrapper .instagram:hover .tooltip,
    .wrapper .instagram:hover .tooltip::before {
      background: #E4405F;
      color: #ffffff;
    }

    .wrapper .github:hover,
    .wrapper .github:hover .tooltip,
    .wrapper .github:hover .tooltip::before {
      background: #333333;
      color: #ffffff;
    }

    .wrapper .youtube:hover,
    .wrapper .youtube:hover .tooltip,
    .wrapper .youtube:hover .tooltip::before {
      background: #CD201F;
      color: #ffffff;
    }`,
  });
  await Component.create({
    name: `Animated Cartoon Button`,
    type: `button`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/balazs-d/pen/OJRPZKz`,
    markup: `<div class='bg'>
    Custom animated cartoon style button
    <div class='cont'>
    <button class='button'>
       <div class='blob'>
          <svg
          xmlns:xlink='http://www.w3.org/1999/xlink'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 310 350'
        >
          <path d='M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z' />

          </svg>
        </div>
        <div class='line'></div>
        <div class='text'>
          <p>A</p>
          <p>C</p>
          <p>T</p>
          <p>I</p>
          <p>O</p>
          <p>N</p>
          <p>!</p>
        </div>
      </button>



  </div>

     Created by Balazs Danyadi
       <a href='https://www.linkedin.com/in/balazs-danyadi/'><i class="fab fa-linkedin fa-2x"></i></>
         </div>`,
    stylesheet: `@import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;


    }

    .bg {
      width: 100vw;
      height: 100vh;
      background-image: radial-gradient(#3EC9F8,#5E6A91);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: 'Montserrat', sans-serif;


    }

    .cont {
      position: relative;
      width: 16vw;
      height: 8vw;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0px 0px 15px black;
      margin: 3vw 0;

    }
    .button {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      background-color: #F75780;
      position: realtive;
      border: 1px dashed yellow;
      border-radius: 10px;
      outline: none;
      transition: box-shadow 0.3s linear;
      box-shadow: inset 0px 0px 5px black, inset 0px 0px 0px #F7EA25;

    }

    .button:active {
        box-shadow: inset 0px 0px 0px black, inset 0px 0px 105px #F7EA25;
    }
    .button:active .blob {
      animation: none;
    }

    .blob {
      position: relative;
      top: 10%;
      left: 0%;
      width: 10vw;
      height: 10vw;
      fill: #1A87AB;
      transform-origin: 50% 50%;
      filter: drop-shadow(4px 4px 0 black);
      animation: bump 5.5s ease infinite;



    }

    @keyframes bump {
        0% {
          transform: scale(1, 1) translateX(0px);
        }
        9% {
          transform: scale(1.1, 0.9) translateY(20px);
        }
        28% {
          transform: scale(0.7, 1.3) translateY(-100px) translateX(55px);
        }
        35% {
          transform: scale(1, 1) translateY(20px);
        }
        50% {
          transform: scale(1, 1.1);
        }
        60% {
          transform: scale(1.1, 0.9) translateY(20px);
        }
        80% {
          transform: scale(0.7, 1.3) translateY(-100px) translateX(-55px);
        }
        88% {
          transform: scale(1, 1) translateY(20px);
        }
        100% {
          transform: scale(1, 1) translateX(0px);
        }
      }

    .line {
      position: absolute;
      bottom: 20%;
      width: 20vw;
      height: 0.5vw;
      background: white;
      transform: rotate(-8deg);
      box-shadow: 2px 2px 0px black;
      animation: line 4s ease infinite reverse;
    }

    @keyframes line {
        0% {
          transform: rotate(-8deg);
        }
        9% {
          transform: rotate(-8deg);
        }
        28% {
          transform: rotate(28deg);
        }
        35% {
          transform: rotate(20deg);
        }
        50% {
          transform: rotate(10deg);
        }
        60% {
          transform: rotate(-8deg);
        }
        80% {
          transform: rotate(-12deg);
        }

        88% {
          transform: rotate(-18deg);
        }

        100% {
          transform: rotate(-8deg);
        }
      }

    .text {
      display: flex;
      position: absolute;
      top: 20%;
      font-size: 4vw;
      text-shadow: 2px 2px black;
      font-family: 'Anton', sans-serif;




    }

    p:nth-child(1n) {
      transform: rotate(8deg);
      animation: shake 0.5s ease infinite;
      color: #F7EA25

      }
      p:nth-child(2n) {
      transform: rotate(5deg);
      animation: shake 0.5s ease-out infinite reverse;
      color: white

      }
     p:nth-child(3n) {
      transform: rotate(-2deg);
      animation: shake 0.5s 0.1s ease infinite;


      }

     p:nth-child(4n) {
        transform: rotate(-5deg);
        animation: shake 0.5s ease-in infinite reverse;
      }

    @keyframes shake {
        0% {
          transform: translateX(0) rotate(8deg);
        }
        50% {
          transform: translateX(4px) rotate(-3deg);
        }

        100% {
          transform: translateX(0) rotate(6deg);
        }
      }

    i {
      color: #2867B2;
      margin-top: 1vw
    }`,
  });
  await Component.create({
    name: `Link Hover Button`,
    type: `button`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/imanirudh1/pen/PoNrLdP`,
    markup: ` <a href="#">Hover Me</a>`,
    stylesheet: `body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: rgb(58, 56, 56);
      }
      a {
        text-decoration: none;
        border: 3px solid yellow;
        color: transparent;
        padding: 40px 80px;
        font-size: 28px;
        font-family: sans-serif;
        letter-spacing: 5px;
        transition: all 0.5s;
        position: relative;
      }
      a:before {
        content: "Hover Me";
        display: flex;
        justify-content: center;
        align-items: center;
        color: yellow;
        background: rgb(34, 34, 34);
        font-size: 28px;
        top: 0;
        left: 100%;
        font-family: sans-serif;
        letter-spacing: 5px;
        transition: all 1s;
        height: 100%;
        width: 100%;
        position: absolute;
        transform: scale(0) rotatey(0);
        opacity: 0;
      }
      a:hover:before {
        transform: scale(1) rotatey(360deg);
        left: 0;
        opacity: 1;
      }
      a:after {
        content: "Hover Me";
        display: flex;
        justify-content: center;
        align-items: center;
        color: yellow;
        background: rgb(34, 34, 34);
        font-size: 28px;
        top: 0;
        left: 0;
        font-family: sans-serif;
        letter-spacing: 5px;
        transition: all 1s;
        height: 100%;
        width: 100%;
        position: absolute;
        transform: scale(1) rotatey(0);
        opacity: 1;
      }
      a:hover:after {
        transform: scale(0) rotatey(360deg);
        left: -100%;
        opacity: 0;
      }`,
  });
  await Component.create({
    name: `Animated Button Pack`,
    type: `button`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/phat-xluong/pen/ZEWNxdq`,
    markup: `<div class='container'>
    <button class='one'>Play some <b>amazing</b> games</button>
    <button class='two'>Continue shopping <b>now</b></button>
    <button class='three'><a href="https://www.codepen.io/jcoulterdesign" target="_blank">Follow me on <b>Codepen</b></a></button>
    <button class='four'>Change some <b>settings</b></button>
    <button class='five'>Do something <b>fun</b> today</button>
  </div>
  `,
    stylesheet: `@charset "UTF-8";
    @import url(https://fonts.googleapis.com/css?family=Oswald:400,700);
    @import url(https://fonts.googleapis.com/css?family=Nunito:400,700);
    :root {
      background: -webkit-linear-gradient(top, #222838 0%, #131621 100%);
      height: 100vh;
    }

    .container {
      width: 334px;
      margin: 0 auto;
      position: absolute;
      top: 50%;
      left: 0;
      text-align: center;
      right: 0;
      -webkit-transform: translateY(-50%);
              transform: translateY(-50%);
    }

    body
    {
      background:#333;
    }
    a {
      color: white;
      text-decoration: none;
    }

    h1, h2 {
      color: white;
      font-family: 'Oswald', sans-serif;
      font-weight: normal;
    }

    h2 {
      font-size: 14px;
      margin-bottom: 30px;
      color: #24E2B8;
    }

    .one, .two, .three, .four, .five {
      border: none;
      border-radius: 4px;
      text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.48);
      overflow: hidden;
      padding: 20px 50px 20px 70px;
      margin-bottom: 20px;
      font-size: 20px;
      position: relative;
      color: white;
      outline: none;
      cursor: pointer;
      width: 100%;
      -webkit-transition: background-position .7s,box-shadow .4s;
      transition: background-position .7s,box-shadow .4s;
      background-size: 110%;
      font-family: 'Oswald', sans-serif;
    }
    .one:hover, .two:hover, .three:hover, .four:hover, .five:hover {
      background-position: 0% 30%;
    }
    .one:hover:after, .two:hover:after, .three:hover:after, .four:hover:after, .five:hover:after {
      right: -40px;
      -webkit-transition: right .4s,-webkit-transform 30s .2s linear;
      transition: right .4s,-webkit-transform 30s .2s linear;
      transition: right .4s,transform 30s .2s linear;
      transition: right .4s,transform 30s .2s linear,-webkit-transform 30s .2s linear;
    }
    .one:before, .two:before, .three:before, .four:before, .five:before, .one:after, .two:after, .three:after, .four:after, .five:after {
      font-family: FontAwesome;
      display: block;
      position: absolute;
    }
    .one:before, .two:before, .three:before, .four:before, .five:before {
      -webkit-transition: all 1s;
      transition: all 1s;
      font-size: 30px;
      left: 25px;
      top: 19px;
    }
    .one:after, .two:after, .three:after, .four:after, .five:after {
      -webkit-transition: right .4s, -webkit-transform .2s;
      transition: right .4s, -webkit-transform .2s;
      transition: right .4s, transform .2s;
      transition: right .4s, transform .2s, -webkit-transform .2s;
      font-size: 100px;
      opacity: .3;
      right: -120px;
      top: -17px;
    }

    .one {
      box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 10px 0px #782CDA;
      background-image: -webkit-gradient(linear, left top, left bottom, from(#782CDA), to(rgba(126, 94, 162, 0.51))), url("http://gearnuke.com/wp-content/uploads/2015/11/1280x720-cuU.jpg");
      background-image: linear-gradient(to bottom, #782CDA, rgba(126, 94, 162, 0.51)), url("http://gearnuke.com/wp-content/uploads/2015/11/1280x720-cuU.jpg");
    }
    .one:hover {
      box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 30px 0px #782CDA;
    }
    .one:hover:after {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
    .one:hover:before {
      -webkit-transform: scale(1.2);
              transform: scale(1.2);
    }
    .one:after, .one:before {
      content: "";
    }
    .one b {
      color: #DDA6FF;
      font-weight: 700;
    }

    .two {
      box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 10px 0px #E48A3C;
      background-image: -webkit-gradient(linear, left top, left bottom, from(#E48A3C), to(rgba(222, 135, 61, 0.24))), url("http://www.eatweartravel.com/wp-content/uploads/2015/04/i-love-shopping_1920x1200_83206.jpg");
      background-image: linear-gradient(to bottom, #E48A3C, rgba(222, 135, 61, 0.24)), url("http://www.eatweartravel.com/wp-content/uploads/2015/04/i-love-shopping_1920x1200_83206.jpg");
    }
    .two:hover {
      box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 30px 0px #E48A3C;
    }
    .two:hover:after {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
    .two:hover:before {
      -webkit-transform: scale(1.2);
              transform: scale(1.2);
    }
    .two:after, .two:before {
      content: "";
    }
    .two b {
      color: #FFD9B4;
      font-weight: 700;
    }

    .three {
      box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 10px 0px #36C176;
      background-image: -webkit-gradient(linear, left top, left bottom, from(#36C176), to(rgba(86, 202, 139, 0.18))), url("http://blog.teamthinklabs.com/wp-content/uploads/2012/09/codepen-460x253.png");
      background-image: linear-gradient(to bottom, #36C176, rgba(86, 202, 139, 0.18)), url("http://blog.teamthinklabs.com/wp-content/uploads/2012/09/codepen-460x253.png");
    }
    .three:hover {
      box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 30px 0px #36C176;
    }
    .three:hover:after {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
    .three:hover:before {
      -webkit-transform: scale(1.2);
              transform: scale(1.2);
    }
    .three:after, .three:before {
      content: "";
    }
    .three b {
      color: #63FFAC;
      font-weight: 700;
    }

    .four {
      box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 10px 0px #33E7EA;
      background-image: -webkit-gradient(linear, left top, left bottom, from(#33E7EA), to(rgba(161, 245, 245, 0.24))), url("https://cdn2.itpro.co.uk/sites/itpro/files/server_room.jpg");
      background-image: linear-gradient(to bottom, #33E7EA, rgba(161, 245, 245, 0.24)), url("https://cdn2.itpro.co.uk/sites/itpro/files/server_room.jpg");
    }
    .four:hover {
      box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 30px 0px #33E7EA;
    }
    .four:hover:after {
      -webkit-transform: rotate(3000deg);
              transform: rotate(3000deg);
    }
    .four:hover:before {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
    .four:after, .four:before {
      content: "";
    }
    .four b {
      color: #1CF4FF;
      font-weight: 700;
    }

    .five {
      box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 10px 0px #DE3964;
      background-image: -webkit-gradient(linear, left top, left bottom, from(#DE3964), to(rgba(154, 40, 87, 0.24))), url("http://nightlifeassociates.com/wp-content/uploads/2014/03/hakkasan-nightclub_tiesto-smalls.jpg");
      background-image: linear-gradient(to bottom, #DE3964, rgba(154, 40, 87, 0.24)), url("http://nightlifeassociates.com/wp-content/uploads/2014/03/hakkasan-nightclub_tiesto-smalls.jpg");
    }
    .five:hover {
      box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 30px 0px #DE3964;
    }
    .five:hover:after {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
    .five:hover:before {
      -webkit-transform: scale(1.2);
              transform: scale(1.2);
    }
    .five:after, .five:before {
      content: "";
    }
    .five b {
      color: #F764FF;
      font-weight: 700;
    }`,
  });

  await Component.create({
    name: `Pastel Animated Buttons`,
    type: `button`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/joebocock/pen/ZEWoMPb`,
    markup: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap" rel="stylesheet" />

    <button type="button" class="simple">Simple</button>

    <button type="button" class="fill">Fill</button>

    <button type="button" class="slide">
      <div>Slide</div>
      <i class="icon-arrow-right"></i>
    </button>`,
    stylesheet: `html,
    body {
      margin: 0;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      font-family: "Roboto Mono", monospace;
    }

    button {
      margin: 50px;
      font-family: inherit;
    }
    /* End of Page styling */

    /* Simple button styling -- No animation */
    .simple {
      font-size: 20px;
      font-weight: 200;
      letter-spacing: 1px;
      padding: 13px 50px 13px;
      outline: 0;
      border: 1px solid black;
      cursor: pointer;
      position: relative;
      background-color: rgba(0, 0, 0, 0);
    }

    .simple::after {
      content: "";
      background-color: #dcbaff;
      width: 100%;
      z-index: -1;
      position: absolute;
      height: 100%;
      top: 7px;
      left: 7px;
    }
    /* End of Simple Button */

    /* Fill button styling */
    .fill {
      font-size: 20px;
      font-weight: 200;
      letter-spacing: 1px;
      padding: 13px 50px 13px;
      outline: 0;
      border: 1px solid black;
      cursor: pointer;
      position: relative;
      background-color: rgba(0, 0, 0, 0);
    }

    .fill::after {
      content: "";
      background-color: #ffe54c;
      width: 100%;
      z-index: -1;
      position: absolute;
      height: 100%;
      top: 7px;
      left: 7px;
      transition: 0.2s;
    }

    .fill:hover::after {
      top: 0px;
      left: 0px;
    }
    /* End of Fill Button  */

    /* Slide button styling */
    .slide {
      font-size: 20px;
      font-weight: 200;
      letter-spacing: 1px;
      padding: 13px 30px 13px;
      outline: 0;
      border: 1px solid black;
      cursor: pointer;
      position: relative;
      background-color: rgba(0, 0, 0, 0);
    }

    .slide i {
      opacity: 0;
      font-size: 13px;
      transition: 0.2s;
      position: absolute;
      right: 10px;
      top: 21px;
      transition: transform 1;
    }

    .slide div {
      transition: transform 0.8s;
    }

    .slide:hover div {
      transform: translateX(-6px);
    }

    .slide::after {
      content: "";
      background-color: #66f2d5;
      width: 100%;
      z-index: -1;
      position: absolute;
      height: 100%;
      top: 7px;
      left: 7px;
    }

    .slide:hover i {
      opacity: 1;
      transform: translateX(-6px);
    }`,
  });

  await Component.create({
    name: `Spinning Atom`,
    type: `animation`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/pedroo_andre/details/oNdKvGd`,
    markup: `<div class="atom">
    <div class="line line-1"></div>
    <div class="line line-2"></div>
    <div class="line line-3"></div>
  </div>`,
    stylesheet: `* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 110vh;
      background: radial-gradient(#113, #000);
    }
    
    .atom {
      position: relative;
      display: flex;
      width: 300px;
      height: 300px;
      align-items: center;
      justify-content: center;
    }
    
    .atom::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      background: transparent;
      box-shadow: inset 0 0 10px #fff;
      border-radius: 50%;
    }
    
    .line {
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0.7;
    }
    
    .line-1 {
      --color: #40ff9c;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border-bottom: 10px solid var(--color);
      border-top: 10px solid var(--color);
      animation: line1 2s linear infinite;
      filter:drop-shadow( 0 0 10px var(--color));
    }
    
    @keyframes line1 {
      0% {
        transform: rotateY(70deg) rotateZ(0deg);
      }
      100% {
        transform: rotateY(70deg) rotateZ(360deg);
      }
    }
    
    .line-2 {
      --color: #0ff;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border-right: 10px solid var(--color);
      border-left: 10px solid var(--color);
      animation: line2 3s linear infinite;
      filter:drop-shadow( 0 0 10px var(--color));
    }
    
    @keyframes line2 {
      0% {
        transform: rotateX(80deg) rotateY(25deg) rotateZ(0deg);
      }
      100% {
        transform: rotateX(80deg) rotateY(25deg) rotateZ(360deg);
      }
    }
    
    .line-3 {
      --color: #c096ff;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border-right: 10px solid var(--color);
      border-left: 10px solid var(--color);
      animation: line3 3s linear infinite;
      filter:drop-shadow( 0 0 10px var(--color));
    }
    
    @keyframes line3 {
      0% {
        transform: rotateX(-80deg) rotateY(25deg) rotateZ(0deg);
      }
      100% {
        transform: rotateX(-80deg) rotateY(25deg) rotateZ(360deg);
      }
    }`,
  });

  await Component.create({
    name: `Gradient Text Animation`,
    type: `animation`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/chriiss/details/VwxBbVg`,
    markup: `<div class="container-text">
    <h1>Hello World</h1>
  </div>`,
    stylesheet: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
    .container-text {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
    }
    
    h1 {
      text-transform: uppercase;
      background-image: linear-gradient(to right top, #ffff34, #ffc812, #ff8f2f, #ff554d, #eb1267);
       background-size: 50% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: 'Poppins', sans-serif;
      font-size: 8vw;
      animation: gradientAnim 7.5s ease  alternate infinite;
    }
    
    
    @keyframes gradientAnim {
      to {
        background-position: 100% top;
      }
    }`,
  });

  await Component.create({
    name: `Simple Dropdown`,
    type: `drop-down`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/sanketbodke/pen/poLmXNy`,
    markup: `    <div class="container">
    <select name="menu" id="meun-items">
      <option disabled selected>Select Cource</option>
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="js">JAVASCRIPT</option>
      <option value="c">C LANGUAGE</option>
    </select>
  </div>`,
    stylesheet: `@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
    
    body{
        background-color: #D9AFD9;
        background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
    }
    
    .container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    
    p{
        color: #fff;
        margin-bottom: 0.5rem;
        font-size: 1.4rem;
        text-align: center
    }
    
    select{
        width: 350px;
        outline: none;
        border: 1px solid #fff;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 0.5rem;
        box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
        cursor: pointer;
    }
    
    select:focus,
    select:hover{
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.329);
    }
    `,
  });

  await Component.create({
    name: `Colorful Dropdowns`,
    type: `drop-down`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/animationbro/pen/VwQONxV`,
    markup: `
    <ul class="main__menu">
      <li class="list-item">
        <a href="#" class="home item--js">
          <span>Home</span>
          <i class="ion ion-ios-home-outline"></i>
        </a>
      </li>
      <li class="list-item">
        <a href="#" class="about item--js">
          <span>About</span>
          <i class="ion ion-ios-contact-outline"></i>
        </a>
      </li>
      <li class="list-item">
        <a href="#" class="widget item--js">
          <span>Widgets</span>
          <i class="ion ion-ios-partly-sunny-outline"></i>
        </a>
        <ul class="drop-menu menu-4">
          <li class="drop-item"><a href="#" class="item--1">Big Widget</a></li>
          <li class="drop-item"><a href="#" class="item--2">Bigger Widget</a></li>
          <li class="drop-item"><a href="#" class="item--3">Huge Widget</a></li>
        </ul>
      </li>
      <li class="list-item">
        <a href="#" class="kabobs item--js">
          <span>KaBoBs</span>
          <img src="https://res.cloudinary.com/elafreet/image/upload/v1530189897/cooking1.svg" alt="">
        </a>
        <ul class="drop-menu menu-2">
          <li class="drop-item"><a href="#" class="item--1">Shish Kabobs</a></li>
          <li class="drop-item"><a href="#" class="item--2">BBQ Kabobs</a></li>
          <li class="drop-item"><a href="#" class="item--3">Summer Kabobs</a></li>
        </ul>
      </li>
      <li class="list-item">
        <a href="#" class="contact item--js">
          <span>Contact</span>
          <i class="ion ion-ios-mail-open-outline"></i>
        </a>
      </li>
    </ul>`,
    stylesheet: `/*Colors*/
    /*Font*/
    /* Reset*/
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    
    body {
      background: linear-gradient(90deg, #3f4593, #5960bd);
      margin: 0;
    }
    
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    a {
      text-decoration: none;
      color: inherit;
    }
    
    /* Start Style*/
    .main__menu {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
    @media (max-width: 900px) {
      .main__menu {
        grid-template-columns: 1fr;
        max-width: 300px;
      }
    }
    .main__menu .list-item:hover .drop-menu li {
      display: block;
    }
    .main__menu .list-item:hover .menu-1 {
      perspective: 1000px;
    }
    .main__menu .list-item:hover .menu-1 .drop-item {
      opacity: 0;
    }
    .main__menu .list-item:hover .menu-1 .drop-item:nth-child(1) {
      animation-name: leftToRight;
      animation-duration: 400ms;
      animation-delay: -150ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    .main__menu .list-item:hover .menu-1 .drop-item:nth-child(2) {
      animation-name: leftToRight;
      animation-duration: 400ms;
      animation-delay: 0ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    .main__menu .list-item:hover .menu-1 .drop-item:nth-child(3) {
      animation-name: leftToRight;
      animation-duration: 400ms;
      animation-delay: 150ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    .main__menu .list-item:hover .menu-1 .drop-item:nth-child(4) {
      animation-name: leftToRight;
      animation-duration: 400ms;
      animation-delay: 300ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    .main__menu .list-item:hover .menu-2 {
      perspective: 1000px;
    }
    .main__menu .list-item:hover .menu-2 .drop-item {
      opacity: 0;
      transform-origin: top center;
    }
    .main__menu .list-item:hover .menu-2 .drop-item:nth-child(1) {
      animation-name: topToBottom;
      animation-duration: 400ms;
      animation-delay: -150ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    .main__menu .list-item:hover .menu-2 .drop-item:nth-child(2) {
      animation-name: topToBottom;
      animation-duration: 400ms;
      animation-delay: 0ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    .main__menu .list-item:hover .menu-2 .drop-item:nth-child(3) {
      animation-name: topToBottom;
      animation-duration: 400ms;
      animation-delay: 150ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    .main__menu .list-item:hover .menu-2 .drop-item:nth-child(4) {
      animation-name: topToBottom;
      animation-duration: 400ms;
      animation-delay: 300ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    .main__menu .list-item:hover .menu-3 {
      perspective: 1000px;
    }
    .main__menu .list-item:hover .menu-3 .drop-item {
      opacity: 0;
    }
    .main__menu .list-item:hover .menu-3 .drop-item:nth-child(1) {
      animation-name: itemBounce;
      animation-duration: 400ms;
      animation-delay: -150ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    .main__menu .list-item:hover .menu-3 .drop-item:nth-child(2) {
      animation-name: itemBounce;
      animation-duration: 400ms;
      animation-delay: 0ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    .main__menu .list-item:hover .menu-3 .drop-item:nth-child(3) {
      animation-name: itemBounce;
      animation-duration: 400ms;
      animation-delay: 150ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    .main__menu .list-item:hover .menu-3 .drop-item:nth-child(4) {
      animation-name: itemBounce;
      animation-duration: 400ms;
      animation-delay: 300ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    .main__menu .list-item:hover .menu-4 {
      perspective: 1000px;
    }
    .main__menu .list-item:hover .menu-4 .drop-item {
      opacity: 0;
      transform-origin: top right;
    }
    .main__menu .list-item:hover .menu-4 .drop-item:nth-child(1) {
      animation-name: bottomToTop;
      animation-duration: 400ms;
      animation-delay: -150ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    .main__menu .list-item:hover .menu-4 .drop-item:nth-child(2) {
      animation-name: bottomToTop;
      animation-duration: 400ms;
      animation-delay: 0ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    .main__menu .list-item:hover .menu-4 .drop-item:nth-child(3) {
      animation-name: bottomToTop;
      animation-duration: 400ms;
      animation-delay: 150ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    .main__menu .list-item:hover .menu-4 .drop-item:nth-child(4) {
      animation-name: bottomToTop;
      animation-duration: 400ms;
      animation-delay: 300ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    .main__menu .list-item:hover .home {
      border-top: 6px solid #33658a;
    }
    .main__menu .list-item:hover .about {
      border-top: 6px solid #9966cc;
    }
    .main__menu .list-item:hover .widget {
      border-top: 6px solid #ff3333;
    }
    .main__menu .list-item:hover .kabobs {
      border-top: 6px solid #ffcc33;
    }
    .main__menu .list-item:hover .contact {
      border-top: 6px solid #55dde0;
    }
    .main__menu .list-item a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 200px;
      color: #fff;
      cursor: unset;
    }
    .main__menu .list-item a:hover {
      cursor: pointer;
    }
    .main__menu .list-item a span {
      font: 600 25px "Roboto", sans-serif;
      order: 2;
    }
    .main__menu .list-item a img {
      width: 100px;
    }
    .main__menu .list-item a.home {
      background: #ff3333;
    }
    .main__menu .list-item a.about {
      background: #ffcc33;
    }
    .main__menu .list-item a.widget {
      background: #55dde0;
    }
    .main__menu .list-item a.kabobs {
      background: #9966cc;
    }
    .main__menu .list-item a.contact {
      background: #33658a;
    }
    .main__menu .list-item a i {
      color: #fff;
      font-size: 100px;
    }
    .main__menu .list-item .drop-menu .drop-item {
      display: none;
    }
    .main__menu .list-item .drop-menu .drop-item a {
      height: 80px;
      font: 300 22px "Roboto", sans-serif;
    }
    .main__menu .list-item .drop-menu .drop-item a.item--1 {
      background: #ffcc33;
    }
    .main__menu .list-item .drop-menu .drop-item a.item--2 {
      background: #33658a;
    }
    .main__menu .list-item .drop-menu .drop-item a.item--3 {
      background: #ff3333;
    }
    
    @keyframes leftToRight {
      0% {
        opacity: 0;
        transform: rotateY(-90deg) translateY(30px);
      }
      100% {
        opacity: 1;
        transform: rotateY(0deg) translateY(0px);
      }
    }
    @keyframes topToBottom {
      0% {
        opacity: 0;
        transform: rotateX(-90deg);
      }
      100% {
        opacity: 1;
        transform: rotateX(0deg);
      }
    }
    @keyframes itemBounce {
      0% {
        opacity: 0;
        transform: scale(0.3) translateY(-60px);
      }
      80% {
        transform: scale(1.2) translateY(10px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0px);
      }
    }
    @keyframes bottomToTop {
      0% {
        opacity: 0;
        transform: rotate(-30deg);
      }
      100% {
        opacity: 1;
        transform: rotate(0deg);
      }
    }`,
  });

  await Component.create({
    name: `Mobile Friendly Footer`,
    type: `mobile`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/SSSlick/pen/oNdvEZv`,
    markup: `<div class="dummy_page">
    Mobile responsive footer
  </div>
  <!-- FOOTER START -->
  <div class="footer">
    <div class="contain">
    <div class="col">
      <h1>Company</h1>
      <ul>
        <li>About</li>
        <li>Mission</li>
        <li>Services</li>
        <li>Social</li>
        <li>Get in touch</li>
      </ul>
    </div>
    <div class="col">
      <h1>Products</h1>
      <ul>
        <li>About</li>
        <li>Mission</li>
        <li>Services</li>
        <li>Social</li>
        <li>Get in touch</li>
      </ul>
    </div>
    <div class="col">
      <h1>Accounts</h1>
      <ul>
        <li>About</li>
        <li>Mission</li>
        <li>Services</li>
        <li>Social</li>
        <li>Get in touch</li>
      </ul>
    </div>
    <div class="col">
      <h1>Resources</h1>
      <ul>
        <li>Webmail</li>
        <li>Redeem code</li>
        <li>WHOIS lookup</li>
        <li>Site map</li>
        <li>Web templates</li>
        <li>Email templates</li>
      </ul>
    </div>
    <div class="col">
      <h1>Support</h1>
      <ul>
        <li>Contact us</li>
        <li>Web chat</li>
        <li>Open ticket</li>
      </ul>
    </div>
    <div class="col social">
      <h1>Social</h1>
      <ul>
        <li><img src="https://svgshare.com/i/5fq.svg" width="32" style="width: 32px;"></li>
        <li><img src="https://svgshare.com/i/5eA.svg" width="32" style="width: 32px;"></li>
        <li><img src="https://svgshare.com/i/5f_.svg" width="32" style="width: 32px;"></li>
      </ul>
    </div>
  <div class="clearfix"></div>
  </div>
  </div>`,
    stylesheet: `/* REMOVE THIS, USE YOUR OWN  */
    html,body {
      margin: 0;
      padding: 0;
      font-family: Arial, Helvetica, Sans-serif;
      background-color: #070617;
    }
    .dummy_page {
      height: 200px;
      width: 100%;
      background-color: #f0f0f0;
      text-align: center;
      box-sizing: border-box;
      padding: 60px 0px;
    }
    /* STYLES SPECIFIC TO FOOTER  */
    .footer {
      width: 100%;
      position: relative;
      height: auto;
      background-color: #070617;
    }
    .footer .col {
      width: 190px;
      height: auto;
      float: left;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      padding: 0px 20px 20px 20px;
    }
    .footer .col h1 {
      margin: 0;
      margin-left: 40%;
      padding: 0;
      font-family: inherit;
      font-size: 12px;
      line-height: 17px;
      padding: 20px 0px 5px 0px;
      color: rgba(255,255,255,0.2);
      font-weight: normal;
      text-transform: uppercase;
      letter-spacing: 0.250em;
    }
    .footer .col ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    .footer .col ul li {
      color: #999999;
      font-size: 14px;
      font-family: inherit;
      font-weight: bold;
      padding: 5px 0px 5px 0px;
      cursor: pointer;
      transition: .2s;
      -webkit-transition: .2s;
      -moz-transition: .2s;
    }
    .social ul li {
      display: inline-block;
      padding-right: 5px !important;
    }
    
    .footer .col ul li:hover {
      color: #ffffff;
      transition: .1s;
      -webkit-transition: .1s;
      -moz-transition: .1s;
    }
    .clearfix {
      clear: both;
    }
    @media only screen and (min-width: 1280px) {
      .contain {
        width: 1200px;
        margin: 0 auto;
      }
    }
    @media only screen and (max-width: 1139px) {
      .contain .social {
        width: 1000px;
        display: block;
      }
      .social h1 {
        margin: 0px;
      }
    }
    @media only screen and (max-width: 950px) {
      .footer .col {
        width: 33%;
      }
      .footer .col h1 {
        font-size: 14px;
      }
      .footer .col ul li {
        font-size: 13px;
      }
    }
    @media only screen and (max-width: 500px) {
        .footer .col {
          width: 50%;
        }
        .footer .col h1 {
          font-size: 14px;
        }
        .footer .col ul li {
          font-size: 13px;
        }
    }
    @media only screen and (max-width: 340px) {
      .footer .col {
        width: 100%;
      }
    }`,
  });

  await Component.create({
    name: `Shopping Footer`,
    type: `footer`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/animationbro/pen/OJQEVEj`,
    markup: `  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><a href="#">watch</a></li>
            <li><a href="#">bag</a></li>
            <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>follow us</h4>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
 </footer>
 <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">`,
    stylesheet: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    body{
      line-height: 1.5;
      font-family: 'Poppins', sans-serif;
    }
    *{
      margin:0;
      padding:0;
      box-sizing: border-box;
    }
    .container{
      max-width: 1170px;
      margin:auto;
    }
    .row{
      display: flex;
      flex-wrap: wrap;
    }
    ul{
      list-style: none;
    }
    .footer{
      background-color: #24262b;
        padding: 70px 0;
    }
    .footer-col{
       width: 25%;
       padding: 0 15px;
    }
    .footer-col h4{
      font-size: 18px;
      color: #ffffff;
      text-transform: capitalize;
      margin-bottom: 35px;
      font-weight: 500;
      position: relative;
    }
    .footer-col h4::before{
      content: '';
      position: absolute;
      left:0;
      bottom: -10px;
      background-color: #e91e63;
      height: 2px;
      box-sizing: border-box;
      width: 50px;
    }
    .footer-col ul li:not(:last-child){
      margin-bottom: 10px;
    }
    .footer-col ul li a{
      font-size: 16px;
      text-transform: capitalize;
      color: #ffffff;
      text-decoration: none;
      font-weight: 300;
      color: #bbbbbb;
      display: block;
      transition: all 0.3s ease;
    }
    .footer-col ul li a:hover{
      color: #ffffff;
      padding-left: 8px;
    }
    .footer-col .social-links a{
      display: inline-block;
      height: 40px;
      width: 40px;
      background-color: rgba(255,255,255,0.2);
      margin:0 10px 10px 0;
      text-align: center;
      line-height: 40px;
      border-radius: 50%;
      color: #ffffff;
      transition: all 0.5s ease;
    }
    .footer-col .social-links a:hover{
      color: #24262b;
      background-color: #ffffff;
    }
    
    /*responsive*/
    @media(max-width: 767px){
      .footer-col{
        width: 50%;
        margin-bottom: 30px;
    }
    }
    @media(max-width: 574px){
      .footer-col{
        width: 100%;
    }
    }`,
  });

  await Component.create({
    name: `Hamburger Menu`,
    type: `mobile`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/widyatmoko/pen/vYGwrPb`,
    markup: `<div id="menu">
    <div id="pencet">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>`,
    stylesheet: `*{
      padding:0;
      margin:0;
    }
    
    body{
      background-color:tan;
    }
    
    #pencet{
      display:flex;
      align-items:center;
      margin-top:50vh;
      flex-direction:column;
      cursor:pointer;
    }
    
    #pencet span{
      background-color:ghostwhite;
      width:2em;
      height:.2em;
      margin:0.26em 0;
      display:block;
      transition: all .4s ease;
      transform-origin:0 0;
    }
    
    .Diam span:nth-child(1) {
      transform: rotate(45deg) translate(1px, -1px);
    }
    
    .Diam span:nth-child(2) {
      Transform: scaleX(0);
    }
    
    .Diam span:nth-child(3) {
      transform: rotate(-45deg) translate(1px, 0);
    }`,
    js: `const clickx= document.getElementById('pencet');

    clickx.addEventListener('click', function(){
      clickx.classList.toggle('Diam');
    });`,
  });

  await Component.create({
    name: `Exploding Circles`,
    type: `graphic`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/ZevanRosser/details/MWORXqw`,
    js: `const { 
      random, min, sqrt, cos, sin, PI 
    } = Math
    
    let TWO_PI = PI * 2
    let minSize
    
    document.body.style.margin = 0
    document.body.style.background = 'black'
    const canvas = document.body.appendChild(
      document.createElement('canvas')
    )
    const c = canvas.getContext('2d')
    
    addEventListener('resize', resize)
    resize()
    
    function resize() {
      canvas.width = innerWidth
      canvas.height = innerHeight
      minSize = min(innerWidth, innerHeight)
      clear()
    }
    
    function clear() {
      c.fillStyle = 'rgba(0, 0, 0, .15)'
      c.fillRect(0, 0, innerWidth, innerHeight)
    }
    
    let dots = []
    function dot({x, y, vx, vy, rad, grav = .15}) {
      let sx = x
      let sy = y
      let svx = vx
      let svy = vy
      let intersected
      let partsNum = 20
      let parts = []
      let delay = random() * 5
      let time = 0
    
      dots.push(() => y > innerHeight)
    
      return {
        step() {
          time++
          if (time < delay) return
          if (intersected) {
            for (let i = 0; i < partsNum; i++) {
              parts[i].step()
            }
            return
          }
          x += vx
          y += vy
          vy += grav;
          c.beginPath()
          c.arc(x, y, rad(), 0, 7)
          c.fill()
        },
        reset() {
          x = sx;
          y = sy;
          vx = svx;
          vy = svy;
          intersected = false
        },
        hit() {
          if (!intersected) {
            partsNum = rad() / 3
            for (let i = 0; i < partsNum; i++) {
              let t = random() * TWO_PI
              let r = 5 + random() * 5
              let size = random() * 10
    
              parts.push(
                dot({
                  x, y,
                  vx: r * cos(t),
                  vy: r * sin(t),
                  rad: () => size
                })
              )
            }
          }
          intersected = true
        },
        get x() {
          return x
        },
        get y() {
          return y
        }
      }
    }
    
    const bigRad = () => minSize * .14;
    
    let leftDot
    let rightDot
    
    function start() {
      rightDot = dot({
        x: innerWidth, 
        y: innerHeight / 2, 
        vx: -innerWidth * .005, 
        vy: -6, rad: bigRad
      })
    
      leftDot = dot({
        x: 0, 
        y: innerHeight / 2, 
        vx: innerWidth * .005, 
        vy: -6, rad: bigRad
      })
    }
    start()
    
    function collide(a, b) {
      const dx = a.x - b.x
      const dy = a.y - b.y
      const dist = sqrt(dx**2 + dy**2)
      return dist <= bigRad() * 1.8
    }
    
    function loop() {
      let inc = 2
    
      clear()
      c.fillStyle = 'white'
      if (collide(leftDot, rightDot)) {
        leftDot.hit()
        rightDot.hit()
      }
    
      leftDot.step()
      rightDot.step()
    
      dots.forEach(done => {
        if (done()) inc++;
      }) 
    
      if (dots.length > 2 && inc == dots.length)  {
        dots = []
        start()
      }
    
      requestAnimationFrame(loop)
    }
    loop()`,
    markup: ` `,
    stylesheet: ` `,
  });

  await Component.create({
    name: `Coffee Cup`,
    type: `graphic`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/loetcodes/pen/ZEQrQog`,
    markup: `<body class="main">
    <div class="section">
      <div class="saucer"></div>
      <div class="cup">
        <div class="cup-center">
          <div class="coffee"></div>    
          <div class="froth"></div>
          <div class="coffee-dark-top"></div> 
          <div class="hot-steam steam-move"></div>
        </div>
        <div class="cup-handle"></div>
      </div>
      <div class="teaspoon">
        <div class="spoon-center"></div>
        <div class="spoon-handle"></div>
      </div>
    </div>
  </body>`,
    stylesheet: `@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

    .main {
      background-color: #dc9a00;
      display: grid;
      grid-template: 70% 30% / 100%;
      justify-items: center;
      margin: 5px;
    }
    
    .section {
      max-height: 700px;
      max-width: 700px;
      min-width: 0px;
      min-height: 0px;
      width: 50vmin;
      height: 50vmin;
      overflow: hidden;
    }
    
    .saucer {
      width: 80%;
      height: 80%;
      position: relative;
      top: 10%;
      left: 10%;
      border-radius: 50%;
      background-color: #f1f1f1;
      background: radial-gradient(circle, #f1f1f1 0%, #e8e8e8 39%, #b1b1b1 42%, #e8e8e8 44%, #d2d2d2 68%, #eaeaea 70%, #dadada 100%);
    }
    
    .cup {
      width: 100%;
      height: 100%;
      position: relative;
      top: -54%;
      left: 25%;
      z-index: 1;
    }
    
    .cup-center {
      width: 48%;
      height: 48%;
      border-radius: 50%;
      border: 1px solid #fdfdfd;
      background:radial-gradient(circle,rgba(241,241,241,1) 0%, rgb(232, 232, 232) 44%, rgb(199, 199, 199) 54%, rgb(189, 189, 189) 62%, rgb(199, 199, 199) 62%, rgb(232, 232, 232) 65%,rgb(241, 241, 241) 100%);
      filter: drop-shadow(17px 10px 11px #979797);
    }
    
    .cup-handle {
      width: 12%;
      height: 6%;
      position: relative;
      top: -6%;
      left: 39%;
      transform: rotate(45deg);
      background-color: #e9e9e9;
      border: 2px solid #e9e9e9;
      border-radius: 0% 20% 20% 0%;
      border-left-color: #cacaca;
      border-right-width: 5px;
      filter: drop-shadow(24px 14px 15px #979797);
    }
    
    .coffee {
      width: 86%;
      height: 86%;
      position: relative;
      top: 7%;
      left: 7%;
      border-radius: 50%;
      border: 1px solid #a5a5a5;
      background: radial-gradient(circle,rgb(45, 27, 0) 0%, rgb(53, 31, 1) 44%, rgb(54, 32, 0) 54%, rgb(60, 35, 0) 62%, rgb(154, 129, 103) 62%, rgba(158, 95, 29, 0.38) 65%,rgba(95, 65, 53, 0.33) 100%);
    }
    
    .froth {
      width: 76%;
      height: 76%;
      position: relative;
      top: -74.2%;
      left: 12%;
      border-radius: 50%;
      border: 1px solid #a28143d9;
      background: radial-gradient(circle,rgb(125, 88, 32) 0%, rgb(130, 92, 34) 44%, rgb(128, 91, 33) 62%, rgb(187, 140, 70) 100%);
      background-color: #9e7b3a;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 90 90'%3E%3Ccircle fill-opacity='0.94' fill='%23362000' cx='45' cy='45' r='5'/%3E%3Cg fill='%23362000' fill-opacity='0.94'%3E%3Ccircle cx='0' cy='90' r='12'/%3E%3Ccircle cx='90' cy='90' r='12'/%3E%3Ccircle cx='90' cy='0' r='12'/%3E%3Ccircle cx='0' cy='0' r='12'/%3E%3C/g%3E%3C/svg%3E");
    }
    
    .coffee-dark-top {
      width: 76%;
      height: 76%;
      position: relative;
      bottom: 150%;
      left: 12%;
      border-radius: 50%;
      background: radial-gradient(circle,rgb(47, 29, 3) 0%,rgb(47, 29, 3) 42%, rgb(46, 28, 3) 49%, rgb(51, 34, 9) 59%, rgb(39, 23, 2) 65%, rgb(25, 15, 1) 68%,rgb(51, 30, 0) 100%);
      clip-path: polygon(11% 29%, 14% 27%,18% 22%, 21% 18%, 24% 16%, 33% 12%, 37% 9%, 41% 7%, 43% 6%, 49% 5%, 53% 5%, 56% 6%, 62% 8%, 66% 9%, 70% 12%, 72% 14%, 74% 17%, 75% 22%, 76% 23%, 77% 24%, 80% 25%, 82% 27%, 86% 32%, 87% 36%, 88% 40%, 90% 42%, 92% 43%, 93% 52%, 93% 56%, 94% 61%, 93% 65%, 92% 68%, 89% 70%, 87% 74%, 73% 86%, 67% 89%, 62% 92%, 57% 94%, 53% 94%, 52% 94%, 48% 91%, 45% 90%, 39% 87%, 29% 84%, 21% 79%, 19% 76%, 12% 70%, 8% 68%, 5% 67%, 1% 56%, 1% 46%, 4% 36%);
      box-shadow:inset 8px 10px 17px 5px #020100;
    }
    
    .hot-steam {
      width: 100%;
      height: 100%;
      position: relative;
      bottom: 240%;
      left: 23%;
      background: linear-gradient(70deg,rgba(187, 164, 129, 0.29) 0%, rgba(111, 97, 84, 0.42) 44%, rgba(169, 157, 134, 0.25) 54%, rgba(173, 166, 150, 0.46) 65%, rgba(226, 220, 220, 0.19) 74%,rgba(220, 220, 220, 0.23) 100%);
      clip-path:polygon(12% 17%, 14% 16%, 16% 15%, 20% 14%, 26% 13%, 29% 13%, 34% 14%, 36% 14%, 39% 14%, 41% 14%, 43% 15%, 45% 16%, 49% 17%, 56% 18%, 60% 20%, 65% 21%, 68% 23%, 78% 25%, 80% 27%, 83% 30%, 88% 38%, 92% 41%, 94% 44%, 94% 46%, 92% 50%, 92% 52%, 92% 56%, 89% 59%, 87% 60%, 85% 60%, 83% 59%, 81% 58%, 79% 58%, 78% 59%, 77% 62%, 77% 66%, 76% 69%, 74% 74%, 73% 75%, 72% 76%, 69% 77%, 68% 79%, 66% 82%, 64% 83%, 60% 84%, 58% 84%, 56% 84%, 52% 85%, 50% 86%, 47% 87%, 44% 88%, 40% 89%, 37% 90%, 35% 90%, 29% 90%, 28% 90%, 20% 89%, 17% 88%, 10% 84%, 4% 79%, 2% 75%, 3% 71%, 3% 63%, 5% 59%, 5% 50%, 2% 45%, 1% 41%, 2% 34%, 5% 27%, 8% 24%, 9% 22%, 10% 19%);
    }
    
    .steam-move {
      animation-name: steam-fade;
      animation-duration: 10s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: 20;
      animation-direction: alternate;
    }
    
    .teaspoon {
      width: 40%;
      height: 100%;
      position: relative;
      left: 43%;
      bottom: 224%;
      z-index: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: rotate(235deg);
    }
    
    .spoon-center {
      width: 25%;
      height: 15%;
      border-radius: 50%;
      border: 4px solid #6c6c6c;
      background-color: #626262;
      background: radial-gradient(ellipse at top, #7d7d7d , #100f0f70),radial-gradient(ellipse at bottom, #000000, #cacaca);
      filter: drop-shadow(0px 0px 1px #000);
      box-shadow: -5px 7px 12px -5px #545454;
    }
    
    .spoon-handle {
      width: 15%;
      height: 36%;
      position: relative;
      top: -0.95%;
      background-color: #626262;
      background: linear-gradient(90deg, #444444 10%, #525252 20%, #5f5f5f 35%, #6b6a6a 50%, #5f5f5f 65%, #5d5d5d 80%, #525252 100%);
      clip-path: polygon(60% 2.5%, 70% 2.2%, 75% 2.0%, 85% 1.3%, 90% 1%, 75% 10%, 70% 15%, 70% 30%, 75% 40%, 80% 50%, 85% 60%, 90% 70%, 90% 85%, 85% 90%, 76% 95%, 70% 97%, 60% 99%, 52% 100%, 51% 100%, 49% 100%, 48% 100%, 40% 99%, 30% 97%, 24% 95%, 15% 90%, 10% 85%, 10% 70%, 15% 60%, 20% 50%, 25% 40%, 30% 30%, 30% 15%, 25% 10%, 10% 1%, 15% 1.3%, 25% 2.0%, 30% 2.2%, 40% 2.5%);
      box-shadow: -5px 7px 12px -5px #545454;
    }
    
    .text {
      color: #fff;
      text-transform: uppercase;
      font-size: 17vmin;
      word-break: break-word;
      font-family: "Anton", sans-serif;
      text-shadow: 12px -2px 6px #2e1c034d;
    }
    
    @keyframes steam-fade {
      50% {
        left: 23%;
        clip-path: polygon(12% 17%, 14% 16%, 16% 15%, 20% 14%, 27% 15%, 29% 17%, 32% 19%, 36% 19%, 39% 20%, 41% 21%, 43% 22%, 45% 22%, 49% 21%, 56% 16%, 58% 15%, 60% 14%, 66% 14%, 72% 12%, 78% 6%, 82% 4%, 89% 4%, 95% 3%, 96% 3%, 97% 8%, 99% 15%, 100% 20%, 100% 26%, 97% 34%, 96% 44%, 95% 46%, 94% 48%, 92% 50%, 87% 51%, 86% 51%, 84% 51%, 83% 51%, 82% 51%, 80% 52%, 79% 57%, 77% 59%, 75% 60%, 74% 61%, 72% 64%, 71% 65%, 70% 70%, 69% 73%, 67% 75%, 65% 77%, 56% 83%, 54% 84%, 51% 85%, 48% 86%, 40% 87%, 36% 88%, 32% 88%, 25% 88%, 20% 87%, 17% 84%, 15% 79%, 13% 75%, 12% 72%, 12% 64%, 16% 59%, 18% 56%, 22% 54%, 23% 53%, 25% 49%, 25% 44%, 24% 39%, 20% 33%, 12% 26%, 9% 20%);
      }
    }
    
    @media (min-width:1400px) and (min-height:600px) {
      .main {
          grid-template: 100% / 50% 50%;
          margin: 4%;
      }
    
      .text {
          margin-left: 5%;
          font-size: 24vmin;
      }
    }`,
  });

  await Component.create({
    name: `Social Media Icons`,
    type: `icon`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/Mahe76/pen/dyemrJN`,
    markup: `<div class="social-icons-btn">
    <a class="icons twitter"  href="">
      <ion-icon name="logo-twitter"></ion-icon>
    </a>
    <a class="icons facebook"  href="">
      <ion-icon name="logo-facebook"></ion-icon>
    </a>
    <a class="icons instagram"  href="">
      <ion-icon name="logo-instagram"></ion-icon>
    </a>
    <a class="icons linkedin"  href="">
      <ion-icon name="logo-linkedin"></ion-icon>
    </a>
  </div>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>`,
    stylesheet: `body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    .social-icons-btn {
      display: flex;
    }
    .icons {
      width: 80px;
      height: 80px;
      font-size: 2.5rem;
      font-weight: 500;
      text-decoration: none;
      background: #111;
      margin: 0.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      box-shadow: 
        0 2px 2px #d1d1d1;
      color: #fff;
      cursor: pointer;
      transition:
        all 0.15s ease;
    }
    .twitter:hover {
      background: #00ECEE;
    }
    .facebook:hover {
      background: #4267B2;
    }
    .instagram:hover {
      background-image: 
        linear-gradient(
        #8a3ab9,
        #e95950, 
        #bc2a8d, 
        #fccc63
        );
    }
    .linkedin:hover {
      background: #0A66C2;
    }`,
  });

  await Component.create({
    name: `Card Animation w/Name`,
    type: `info-card`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/Nene_/pen/LYrYEjP`,
    markup: `<div class="container">
    <div class="box">
      <div class="text"><span>Your name<span></div>
    </div>
  
  </div>`,
    stylesheet: `@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
    *
    {
      padding:0;
      margin:0;
      box-sizing:border-box;
    }
    .container
    {
      width:100%;
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      font-family: Montserrat, sans-serif;
    }
    .box
    {
      width:16rem;
      height:16rem;
      transition:all 0.5s cubic-bezier(.55,0,.1,1);
      background:url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDkyNTc&ixlib=rb-4.0.3&q=80");
      background-size: 120%;
      border-radius: 10%;
      box-shadow: 0px .5rem 1rem rgba(0,0,0,.75);
    }
    .box:hover
    {
      box-shadow: 0px .5rem 2rem rgba(0,0,0,.75);
      background-position: 0% 40%;
    }
    .box .text 
    {
      display:flex;
      justify-content:center;
      align-items:center;
      position:absolute;
      left: 50%;
      top: 50%;
      margin-top:-4rem;
      margin-left:4rem;
      width:calc(16rem/2);
      height:calc(16rem/2);
      border-radius:10%;
      color:#fff;
      background-color:rgba(0, 0, 0, 0.8);
        transform: rotate(-180deg) translate(-8) rotate(180deg);
          box-shadow: 0px .5rem 1rem rgba(0,0,0,.5);
        transition: all 0.5s cubic-bezier(.55,0,.1,1);;
    }
    .text span 
    {
      font-size:20px;
    }
    .box:hover .text
    {
      transform: rotate(-45deg) translate(0) rotate(-315deg);
      background: rgba(0,0,0,.5);
      width: 16rem;
      height:16rem;
      letter-spacing:0.7rem;
            margin-top: -8rem;
          margin-left: -8rem;
       transition:
             all 0.5s cubic-bezier(.55,0,.1,1),
            letter-spacing 1.5s ease-out;
      
    }`,
  });

  await Component.create({
    name: `Card Hover Effect`,
    type: `info-card`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/melikeoztekin/pen/gOzqvGm`,
    markup: `<div class="card">
    <ul>
      <li>
        <i class="fa-solid fa-mug-hot"></i>
      </li>
      <li>
        <i class="fa-solid fa-film"></i>
      </li>
      <li>
        <i class="fa-solid fa-store-alt"></i>
      </li>
      <li>
        <i class="fa-solid fa-map"></i>
      </li>
    </ul>
    <img
      src="https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
      alt=""
    />
    <div class="content">
      <h2>Coffee</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
        labore laborum necessitatibus quis, earum, repellat facilis adipisci,
        dolores corporis ipsam ratione eaque vitae quia sunt nemo et
        repudiandae porro incidunt.
        <button>See more...</button>
      </p>
    </div>
  </div>`,
    stylesheet: `body{
      background-color:#D9CBBF ;
  }
  .card{
      margin: 50px auto;
      width: 300px;
      height: 400px;
      border-radius: 30px;
      overflow: hidden;
      backface-visibility: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
      transition: all .25s ease;
  }
  .card .content p{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: column;
      font-size: 1rem;
      opacity: 0;
      margin-bottom: -160px;
      transition: all .25s ease;
  }
  .card .content p button{
      padding: 8px  18px;
      border-radius: 10px;
      background: transparent;
      border: 2px solid #fff;
      color: #fff;
      font-size: .8rem;
      margin-top: 10px;
      margin-left: auto;
      cursor: pointer;
      transition: all .25s ease;
  }
  .card:hover .content p{
      margin-bottom: 0;
      opacity: 1;
  }
  .card:hover img{
      transform: scale(1.50);
  }
  .card:hover ul{
      transform: translate(0);
      opacity: 1;
  }
  .card:after{
      width: 100%;
      content: "";
      left: 0;
      bottom: 0;
      height: 150px;
      position: absolute;
      background: linear-gradient(180deg, rgba(0,0,0,0)0%,rgba(0,0,0,1)100%);
      z-index: 20;
      transition: all .25s ease;
  }
  .card img{
      height: 112%;
      z-index: 10;
      transition: all .25s ease;
  }
  .card .content{
      z-index: 30;
      position: absolute;
      bottom: 0;
      color: #fff;
      padding: 20px;
      padding-bottom: 20px;
  }
  .card .content p button:hover{
      background: #fff;
      color: #000;
  }
  ul{
      position: absolute;
      right: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      z-index: 40;
      border-radius: 15px;
      padding-left: 0;
      padding-top: 8px;
      padding-bottom: 8px;
      top: 0;
      opacity: 0;
      transform: translate(100%);
      transition: all .25s ease;
  }
  ul li{
      display: flex;
      align-items: center;
      justify-content: center;
      backface-visibility: hidden;
      width: 35px;
      height: 35px;
      background: #fff;
      opacity: .7;
      list-style: none;
      transition: all .25s ease;
  }
  ul li:last-child{
      border-radius: 0 0 10px 10px;
  }
  ul li:first-child{
      border-radius: 10px 10px 0 0;
  }
  ul li:hover{
      opacity: 1;
      transform: translate(-7px, -4px);
      border-radius: 6px;
  }
  ul li i{
      font-size: 1rem;
      color: #000;
  }`,
  });

  await Component.create({
    name: `Brightness Slider`,
    type: `slider`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/ehsanshahbazii/pen/qBYQKdO`,
    markup: `  <div class="container">
    <div class="brightness-box">
        <i class="far fa-sun"></i>
        <input type="range" id="range" min="10" max="100" value="100">
        <i class="fas fa-sun"></i>
    </div>
</div>`,
    stylesheet: `* {
      margin:0;
      padding:0;
      box-sizing:border-box;
  }
  
  .container {
     background:url("https://img.freepik.com/free-photo/beautiful-shot-tall-city-buildings-cloudy-sky-night_181624-46658.jpg?w=1380&t=st=1665430586~exp=1665431186~hmac=9aed47a4d8c34770a0e3077c5ba4e92d79dda7779f5e5b4822bd3f82ad62a24e") no-repeat center;
     background-size:cover;
     
     min-height:100vh;
     
     display:flex;
     align-items:center;
     justify-content:center;
  }
  
  .brightness-box {
     width:400px;
     height:60px;
     
     background:#f9f9f9;
     
     border-radius:8px;
     
     padding:0 20px;
  
     display:flex;
     align-items:center;
     justify-content:space-between;
  }
  
  .brightness-box i {
     margin:0 10px;
  }
  
  #range {
     width:100%;
     height:3px;
     
     /*tira a barra do input range*/
     -webkit-appearance:none;
     
     background:#0a85ff;
     
     outline:none;
  }
  
  #range::-webkit-slider-thumb {
     -webkit-appearance:none;
     
     background:#333;
     
     width:22px;
     height:22px;
     
     border-radius:50%;
     
     cursor:pointer;
  }`,
    js: `const rangeInput = document.querySelector('input')
    const container = document.querySelector('.container')
    
    
    rangeInput.addEventListener('change', function (event) {
        container.style.filter = 'brightness(' + event.target.value + '%)'
    })`,
  });

  await Component.create({
    name: `Sample Colored Sliders`,
    type: `slider`,
    framework: `html`,
    stylingFramework: `css`,
    src: `https://codepen.io/JordanMRutherford/pen/RwywxOm`,
    markup: `<h1>Simple Toggle Sliders</h1>
    <p class="desc">A sample of sliders built from checkboxes...</p>
    
    <p>Standard</p>
      <div class="wrapper row-1">
    
          <label class="switch switch-1-1" for="switch-1-1">
            <input type="checkbox" name="switch-1-1" id="switch-1-1">
            <span class="slider round slider-1-1"></span>
          </label>
    
          <label class="switch switch-1-2" for="switch-1-2">
            <input type="checkbox" name="switch-1-2" id="switch-1-2">
            <span class="slider round slider-1-2"></span>
          </label>
    
          <label class="switch switch-1-3" for="switch-1-3">
            <input type="checkbox" name="switch-1-3" id="switch-1-3">
            <span class="slider round slider-1-3"></span>
          </label>
    
          <label class="switch switch-1-4" for="switch-1-4">
            <input type="checkbox" name="switch-1-4" id="switch-1-4">
            <span class="slider round slider-1-4"></span>
          </label>
    
          <label class="switch switch-1-5" for="switch-1-5">
            <input type="checkbox" name="switch-1-5" id="switch-1-5">
            <span class="slider round slider-1-5"></span>
          </label>
    
      </div>
    
      <p>Outer Glow</p>
      <div class="wrapper row-2">
    
        <label class="switch switch-2-1" for="switch-2-1">
          <input type="checkbox" name="switch-2-1" id="switch-2-1">
          <span class="slider round slider-2-1"></span>
        </label>
    
        <label class="switch switch-2-2" for="switch-2-2">
          <input type="checkbox" name="switch-2-2" id="switch-2-2">
          <span class="slider round slider-2-2"></span>
        </label>
    
        <label class="switch switch-2-3" for="switch-2-3">
          <input type="checkbox" name="switch-2-3" id="switch-2-3">
          <span class="slider round slider-2-3"></span>
        </label>
    
        <label class="switch switch-2-4" for="switch-2-4">
          <input type="checkbox" name="switch-2-4" id="switch-2-4">
          <span class="slider round slider-2-4"></span>
        </label>
    
        <label class="switch switch-2-5" for="switch-2-5">
          <input type="checkbox" name="switch-2-5" id="switch-2-5">
          <span class="slider round slider-2-5"></span>
        </label>
    
      </div>
    
      <p>Inverted</p>
      <div class="wrapper row-3">
    
        <label class="switch switch-3-1" for="switch-3-1">
          <input type="checkbox" name="switch-3-1" id="switch-3-1">
          <span class="slider round slider-3-1"></span>
        </label>
    
        <label class="switch switch-3-2" for="switch-3-2">
          <input type="checkbox" name="switch-3-2" id="switch-3-2">
          <span class="slider round slider-3-2"></span>
        </label>
    
        <label class="switch switch-3-3" for="switch-3-3">
          <input type="checkbox" name="switch-3-3" id="switch-3-3">
          <span class="slider round slider-3-3"></span>
        </label>
    
        <label class="switch switch-3-4" for="switch-3-4">
          <input type="checkbox" name="switch-3-4" id="switch-3-4">
          <span class="slider round slider-3-4"></span>
        </label>
    
        <label class="switch switch-3-5" for="switch-3-5">
          <input type="checkbox" name="switch-3-5" id="switch-3-5">
          <span class="slider round slider-3-5"></span>
        </label>
    
      </div>
    
      <p>Outline</p>
      <div class="wrapper row-4">
    
        <label class="switch switch-4-1" for="switch-4-1">
          <input type="checkbox" name="switch-4-1" id="switch-4-1">
          <span class="slider round slider-4-1"></span>
        </label>
    
        <label class="switch switch-4-2" for="switch-4-2">
          <input type="checkbox" name="switch-4-2" id="switch-4-2">
          <span class="slider round slider-4-2"></span>
        </label>
    
        <label class="switch switch-4-3" for="switch-4-3">
          <input type="checkbox" name="switch-4-3" id="switch-4-3">
          <span class="slider round slider-4-3"></span>
        </label>
    
        <label class="switch switch-4-4" for="switch-4-4">
          <input type="checkbox" name="switch-4-4" id="switch-4-4">
          <span class="slider round slider-4-4"></span>
        </label>
    
        <label class="switch switch-4-5" for="switch-4-5">
          <input type="checkbox" name="switch-4-5" id="switch-4-5">
          <span class="slider round slider-4-5"></span>
        </label>
    
      </div>`,
    stylesheet: `:root {
      --text: #FFFFFF;
      --slider: #E0E0E0; 
      --text-dark: #0A0C08;
      --background: #3E3C3C;
      --glow: #ffffff80;
      --shadow: #0000001a;
    
      --col-1-up: #FFD35C;
      --col-1: #FFBE0B;
      --col-1-down: #B88700;
      --col-2-up: #FC7536;
      --col-2: #FB5607;
      --col-2-down: #A13502;
      --col-3-up: #FF338B;
      --col-3: #FF006E;
      --col-3-down: #A30047;
      --col-4-up: #AE7CF3;
      --col-4: #8338EC;
      --col-4-down: #4F0FA9;
      --col-5-up: #70A7FF;
      --col-5: #3A86FF;
      --col-5-down: #0056E0;
    }
    
    body {
      background: var(--background);
    }
    
    h1 {
      position: relative;
      font-size: 3rem;
      font-family: 'Helvetica',sans-serif;
      color: var(--text);
      text-align: center;
    }
    
    p {
      font-family: 'Trebuchet MS', sans-serif;
      font-weight: lighter;
      font-size: 1rem;
      color: var(--text);
      text-align: center;
    }
    
    
    .desc {
      margin-bottom: 2rem;
    }
    
    .wrapper {
      width: 90%;
      margin: 1rem auto;
      text-align: center;
    }
    
    .switch  {
      position: relative;
      display: inline-block;
      width: 5rem;
      height: 2.5rem;
      margin: 0 2rem 0 2rem;
    }
    
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    .slider {
      position: absolute;
      cursor: pointer; 
      background-color: var(--slider);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 1.5rem;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    .slider:before {
      position: absolute;
      content: '';
      background-color: var(--text);
      height: 2rem;
      width: 2rem;
      left: .25rem;
      bottom: .25rem;
      border-radius: 50%;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    input:checked + .slider:before {
      -webkit-transform: translateX(2.5rem);
      -ms-transform: translateX(2.5rem);
      transform: translateX(2.5rem);
    }
    
    /* ------ Row 1 ------ */
    
    input:checked + .slider-1-1 {
      background-color: var(--col-1);
    }
    
    input:checked + .slider-1-2 {
      background-color: var(--col-2);
    }
    
    input:checked + .slider-1-3 {
      background-color: var(--col-3);
    }
    
    input:checked + .slider-1-4 {
      background-color: var(--col-4);
    }
    
    input:checked + .slider-1-5 {
      background-color: var(--col-5);
    }
    
    /* ------ Row 2 ------ */
    
    input:checked + .slider-2-1{
      background: var(--col-1); 
      box-shadow:
      .01rem -.01rem 0.5rem 0 var(--col-1-up),
      0.5rem 0.5rem 1.25rem 0 var(--shadow),
      0.25rem 0.25rem 0.5rem 0 var(--shadow);
    }
    
    input:checked + .slider-2-2 {
      background-color: var(--col-2);
      box-shadow:
      .01rem -.01rem 0.5rem 0 var(--col-2-up),
      0.5rem 0.5rem 1.25rem 0 var(--shadow),
      0.25rem 0.25rem 0.5rem 0 var(--shadow);
    }
    
    input:checked + .slider-2-3 {
      background-color: var(--col-3);
      box-shadow:
      .01rem -.01rem 0.5rem 0 var(--col-3-up),
      0.5rem 0.5rem 1.25rem 0 var(--shadow),
      0.25rem 0.25rem 0.5rem 0 var(--shadow);
    }
    
    input:checked + .slider-2-4 {
      background-color: var(--col-4);
      box-shadow:
      .01rem -.01rem 0.5rem 0 var(--col-4-up),
      0.5rem 0.5rem 1.25rem 0 var(--shadow),
      0.25rem 0.25rem 0.5rem 0 var(--shadow);
    }
    
    input:checked + .slider-2-5 {
      background-color: var(--col-5);
      box-shadow:
      .01rem -.01rem 0.5rem 0 var(--col-5-up),
      0.5rem 0.5rem 1.25rem 0 var(--shadow),
      0.25rem 0.25rem 0.5rem 0 var(--shadow);
    }
    
    /* ------ Row 3 ------ */
    
    input:checked + .slider-3-1 {
      background-color: var(--col-1);
      box-shadow:
      .01rem -.01rem 0.5rem 0 var(--col-1-down),
      0.5rem 0.5rem 1.25rem 0 var(--shadow),
      0.25rem 0.25rem 0.5rem 0 var(--shadow);
    }
    input:checked + .slider-3-1:before {
      background: var(--col-1-down);
    }
    
    input:checked + .slider-3-2 {
      background-color: var(--col-2);
      box-shadow:
      .01rem -.01rem 0.5rem 0 var(--col-2-down),
      0.5rem 0.5rem 1.25rem 0 var(--shadow),
      0.25rem 0.25rem 0.5rem 0 var(--shadow);
    }
    input:checked + .slider-3-2:before {
      background: var(--col-2-down);
    }
    
    input:checked + .slider-3-3 {
      background-color: var(--col-3);
      box-shadow:
      .01rem -.01rem 0.5rem 0 var(--col-3-down),
      0.5rem 0.5rem 1.25rem 0 var(--shadow),
      0.25rem 0.25rem 0.5rem 0 var(--shadow);
    }
    input:checked + .slider-3-3:before {
      background: var(--col-3-down);
    }
    
    input:checked + .slider-3-4 {
      background-color: var(--col-4);
      box-shadow:
      .01rem -.01rem 0.5rem 0 var(--col-4-down),
      0.5rem 0.5rem 1.25rem 0 var(--shadow),
      0.25rem 0.25rem 0.5rem 0 var(--shadow);
    }
    input:checked + .slider-3-4:before {
      background: var(--col-4-down);
    }
    
    input:checked + .slider-3-5 {
      background-color: var(--col-5);
      box-shadow:
      .01rem -.01rem 0.5rem 0 var(--col-5-down),
      0.5rem 0.5rem 1.25rem 0 var(--shadow),
      0.25rem 0.25rem 0.5rem 0 var(--shadow);
    }
    input:checked + .slider-3-5:before {
      background: var(--col-5-down);
    }
    
    /* ------ Row 4 ------ */
    
    input:checked + .slider-4-1 {
      background: var(--background);
      outline: solid 0.05rem var(--col-1);
      box-shadow:
      .01rem -.01rem 0.5rem 0 var(--col-1-up),
      0.5rem 0.5rem 1.25rem 0 var(--shadow),
      0.25rem 0.25rem 0.5rem 0 var(--shadow);
    }
    input:checked + .slider-4-1:before {
      background: var(--col-1);
    }
    
    input:checked + .slider-4-2 {
      background: var(--background);
      outline: solid 0.05rem var(--col-2);
      box-shadow:
      .01rem -.01rem 0.5rem 0 var(--col-2-up),
      0.5rem 0.5rem 1.25rem 0 var(--shadow),
      0.25rem 0.25rem 0.5rem 0 var(--shadow);
    }
    input:checked + .slider-4-2:before {
      background: var(--col-2);
    }
    
    input:checked + .slider-4-3 {
      background: var(--background);
      outline: solid 0.05rem var(--col-3);
      box-shadow:
      .01rem -.01rem 0.5rem 0 var(--col-3-up),
      0.5rem 0.5rem 1.25rem 0 var(--shadow),
      0.25rem 0.25rem 0.5rem 0 var(--shadow);
    }
    input:checked + .slider-4-3:before {
      background: var(--col-3);
    }
    
    input:checked + .slider-4-4 {
      background: var(--background);
      outline: solid 0.05rem var(--col-4);
      box-shadow:
      .01rem -.01rem 0.5rem 0 var(--col-4-up),
      0.5rem 0.5rem 1.25rem 0 var(--shadow),
      0.25rem 0.25rem 0.5rem 0 var(--shadow);
    }
    input:checked + .slider-4-4:before {
      background: var(--col-4);
    }
    
    input:checked + .slider-4-5 {
      background: var(--background);
      outline: solid 0.05rem var(--col-5);
      box-shadow:
      .01rem -.01rem 0.5rem 0 var(--col-5-up),
      0.5rem 0.5rem 1.25rem 0 var(--shadow),
      0.25rem 0.25rem 0.5rem 0 var(--shadow);
    }
    input:checked + .slider-4-5:before {
      background: var(--col-5);
    }`,
  });

  console.log("🌱🌱  Seeding Successful  🌱🌱");
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
