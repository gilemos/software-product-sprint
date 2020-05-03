// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
    const greetings =
      ['We are all stories in the end. Just make it a good one, eh? (Doctor Who)', 'Your assumptions are your windows on the world. Scrub them off every once in a while, or the light will not come in. (Isaac Asimov)', 'If you wish to make an apple pie from scratch, you must first invent the universe. (Carl Sagan)', 'Time is an illusion. Lunchtime doubly so. (The Hitchhikers Guide to the Galaxy)'];

    // Pick a random greeting.
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    // Add it to the page.
    const greetingContainer = document.getElementById('greeting-container');
    greetingContainer.innerText = greeting;
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("movingcell").style.width = "95%";
    document.getElementById("mainHello").style.opacity = 0;
    document.getElementById("gifDiv").style.width = "50%";
    document.getElementById("gifDiv").style.height = "50%";
  } else {
    document.getElementById("movingcell").style.width = "45%";
    document.getElementById("mainHello").style.opacity = 1;
    document.getElementById("gifDiv").style.width = "0%";
    document.getElementById("gifDiv").style.height = "0%";
  }


  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("miniBioText").style.opacity = 1;
    document.getElementById("bioWavyLine").style.opacity = 1;
    document.getElementById("miniBioHeader").style.opacity = 1;
    document.getElementById("waveGif").style.opacity = 1;
    document.getElementById("gifDiv").style.opacity = 1;
    document.getElementById("gifDescriptDiv").style.opacity = 1;
  } else {
    document.getElementById("miniBioText").style.opacity = 0;
    document.getElementById("bioWavyLine").style.opacity = 0;
    document.getElementById("miniBioHeader").style.opacity = 0;
    document.getElementById("waveGif").style.opacity = 0;
    document.getElementById("gifDiv").style.opacity = 0;
    document.getElementById("gifDescriptDiv").style.opacity = 0;
  }

}
