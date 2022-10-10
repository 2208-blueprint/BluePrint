// "use strict";

// const { db, models: {
//   User,
//   Component,
//   Comment, 
//   UserComments, 
//   UserComponent 
// }} = require("../server/db");

const db = require('../server/db/database')
const User = require('../server/db/User')
const Component = require('../server/db/Component')
const Comment = require('../server/db/Comment')
const UserComments = require('../server/db/UserComments')
const UserComponent = require('../server/db/UserComponent')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true });

  const thomas = await User.create({
    username: "Thomas",
    password: "test",
  });

  const ben = await User.create({
    username: "Ben",
    password: "test",
  });
  const cathal = await User.create({
    username: "Cathal",
    password: "test",
  });
  const alec = await User.create({
    username: "Alec",
    password: "test",
  });
  //source model ben has the foreign key of following_id, thomas has the key of creator_id. ben is following the creator thomas.
  ben.addFollowing(thomas);
  cathal.addFollowing(thomas);
  alec.addFollowing(thomas);
  //source model cathal has the foreign key of creator_id, thomas has the key of following_id. cathal is adding thomas as a follower (following)
  cathal.addFollower(thomas);
  const item = await Component.create({
    name: "Test Button2",
    type: "button",
    framework: "html",
    stylingFramework: "css",
  });
  const item2 = await Component.create({
    name: "Test Slider",
    type: "slider",
    framework: "react",
    stylingFramework: "less",
  });
  thomas.addComponent(item, { through: { isAuthor: true } })
  await Comment.create({message: 'hello'})

  const arr = []

  arr.push(await Component.create({
    name:"Button 3",
    type: "button",
    framework: 'html',
    stylingFramework: 'css',
    markup: `<!-- HTML !-->
    <button class="button-3" role="button">Button 3</button>`,
    stylesheet: `/* CSS */
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
    }`
  }))

  arr.push(await Component.create({
    name:"Button 19",
    type: "button",
    framework: 'html',
    stylingFramework: 'css',
    markup: `<!-- HTML !-->
    <button class="button-19" role="button">Button 19</button>`,
    stylesheet: `/* CSS */
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
      width: 10%;
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
    }`
  }))

  arr.push(await Component.create({
    name:"Button 56",
    type: "button",
    framework: 'html',
    stylingFramework: 'css',
    markup: `<!-- HTML !-->
    <button class="button-56" role="button">Button 56</button>`,
    stylesheet: `/* CSS */
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
    }`
  }))

  arr.push(await Component.create({
    name:"Button 53",
    type: "button",
    framework: 'html',
    stylingFramework: 'css',
    markup: `<!-- HTML !-->
    <button class="button-53" role="button">Button 53</button>`,
    stylesheet: `/* CSS */
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
    }`
  }))

  arr.push(await Component.create({
    name:"Navbar 1",
    type: "navbar",
    framework: 'html',
    stylingFramework: 'css',
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
    }`
  }))

  arr.push(await Component.create({
    name:"Mobile Nav 1",
    type: "navbar",
    framework: 'html',
    stylingFramework: 'css',
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
    }`
  }))

  arr.push(await Component.create({
    name:"Social Media Footer",
    type: "footer",
    framework: 'html',
    stylingFramework: 'less',
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
    }`
  }))

  arr.push(await Component.create({
    name:"Form 1",
    type: "form",
    framework: 'html',
    stylingFramework: 'css',
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
    }`
  }))

  arr.push(await Component.create({
    name:"Login 1",
    type: "form",
    framework: 'html',
    stylingFramework: 'css',
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
    `
  }))

  for (let i = 0; i<arr.length; i++) {
    if (i < 5) {
      thomas.addComponent(arr[i], {through: {isAuthor:true}})
    } else {
      ben.addComponent(arr[i], {through: {isAuthor:true}})
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
