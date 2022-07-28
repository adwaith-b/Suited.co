/*==============================
 * Author : AdwaithB aka AdvoidhB
 * Date : Sep 13 2021
 * For : Gentlemen(TM)
===============================*/

"use strict";

const year = document.getElementById("year");
let date = new Date(),
    dy = date.getFullYear();
  year.textContent = dy;
  
 	document.body.onload = () => {
 	let divFade = document.getElementsByClassName('showcase-div')[0],
 		btnFade = document.getElementsByClassName('explore')[0];
 	divFade.style.animation = 'fadeup 2s';
 	btnFade.style.animation = 'fadeup 2s';
 	};

