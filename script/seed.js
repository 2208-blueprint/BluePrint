// "use strict";

// const { db, models: {
//   User,
//   Component,
//   Comment,
//   UserComments,
//   UserComponent
// }} = require("../server/db");

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

  // const thomas = await User.create({
  //   username: "Thomas",
  //   password: "test",
  // });

  // const ben = await User.create({
  //   username: "Ben",
  //   password: "test",
  // });
  // const cathal = await User.create({
  //   username: "Cathal",
  //   password: "test",
  //   firstName: 'Cathal',
  //   lastName: 'O Cuinneagain',
  //   img: 'https://i2-prod.dailystar.co.uk/tech/gaming/article21695234.ece/ALTERNATES/s615/0_CrashBandicoot.jpg'
  // });
  // const alec = await User.create({
  //   username: "Alec",
  //   password: "test",
  // });
  //source model ben has the foreign key of following_id, thomas has the key of creator_id. ben is following the creator thomas.
  ben.addFollowing(thomas);
  cathal.addFollowing(thomas);
  alec.addFollowing(thomas);
  //source model cathal has the foreign key of creator_id, thomas has the key of following_id. cathal is adding thomas as a follower (following)
  cathal.addFollower(thomas);
  await Comment.create({ message: "hello" });

  const arr = [];

  arr.push(
    await Component.create({
      name: "Button 3",
      type: "button",
      framework: "html",
      stylingFramework: "css",
      markup: `<!-- HTML !-->
    <button class="button-3" role="button">Button 3</button>`,
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
      name: "Button 19",
      type: "button",
      framework: "html",
      stylingFramework: "css",
      markup: `<!-- HTML !-->
    <button class="button-19" role="button">Button 19</button>`,
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
      name: "Button 56",
      type: "button",
      framework: "html",
      stylingFramework: "css",
      markup: `<!-- HTML !-->
    <button class="button-56" role="button">Button 56</button>`,
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
      name: "Button 53",
      type: "button",
      framework: "html",
      stylingFramework: "css",
      markup: `<!-- HTML !-->
    <button class="button-53" role="button">Button 53</button>`,
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
      name: "Navbar 1",
      type: "navbar",
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
      name: "Mobile Nav 1",
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
      name: "Form 1",
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
      name: "Login 1",
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
    type: "Button",
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
    type: `Button`,
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
        background: linear-gradient(90deg, #f5ed00 70%, #e6de00 70%), #fff700;
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

  //   await Component.create({
  //     name: ``,
  //     type: ``,
  //     framework: ``,
  //     stylingFramework: ``,
  //     src: ``,
  //     markup: ``,
  //     stylesheet: ``,
  //   });

  for (let i = 0; i < arr.length; i++) {
    if (i < 5) {
      thomas.addComponent(arr[i], { through: { isAuthor: true } });
    } else {
      ben.addComponent(arr[i], { through: { isAuthor: true } });
    }
  }

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
