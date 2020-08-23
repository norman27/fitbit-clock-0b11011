import { me } from "appbit";
import clock from "clock";
import document from "document";
import * as fs from "fs";
import * as messaging from "messaging";
import inverseBinaryFromNumber from "../common/utils.js";

const SETTINGS_FILE = 'settings.json';

clock.granularity = "seconds";

// initialize settings with default colors
let settings = loadSettings();

const hours = {
  1: document.getElementById("hours_1"),
  2: document.getElementById("hours_2"),
  4: document.getElementById("hours_4"),
  8: document.getElementById("hours_8"),
  16: document.getElementById("hours_16"),
};
const minutes = {
  1: document.getElementById("minutes_1"),
  2: document.getElementById("minutes_2"),
  4: document.getElementById("minutes_4"),
  8: document.getElementById("minutes_8"),
  16: document.getElementById("minutes_16"),
  32: document.getElementById("minutes_32"),
};
const seconds = {
  1: document.getElementById("seconds_1"),
  2: document.getElementById("seconds_2"),
  4: document.getElementById("seconds_4"),
  8: document.getElementById("seconds_8"),
  16: document.getElementById("seconds_16"),
  32: document.getElementById("seconds_32"),
};

clock.ontick = (evt) => {
  let today = evt.date;
  let hoursBinary = inverseBinaryFromNumber(today.getHours(), 5);
  let minutesBinary = inverseBinaryFromNumber(today.getMinutes(), 6);
  let secondsBinary = inverseBinaryFromNumber(today.getSeconds(), 6);

  for (let i = 0; i < hoursBinary.length; i++) {
    hours[Math.pow(2, i)].style.fill = (hoursBinary.charAt(i) === '1')
        ? settings["color.active"]
        : settings["color.inactive"];
  }

  for (let i = 0; i < minutesBinary.length; i++) {
    minutes[Math.pow(2, i)].style.fill = (minutesBinary.charAt(i) === '1')
        ? settings["color.active"]
        : settings["color.inactive"];
  }

  for (let i = 0; i < secondsBinary.length; i++) {
    seconds[Math.pow(2, i)].style.fill = (secondsBinary.charAt(i) === '1')
        ? settings["color.active"]
        : settings["color.inactive"];
  }
}

// listen on settings changes
messaging.peerSocket.onmessage = function(evt) {
  settings[evt.data.key] = evt.data.value;
}

// register for unload event
me.onunload = saveSettings;

function loadSettings() {
  try {
    return fs.readFileSync(SETTINGS_FILE, {encoding: "json"});
  } catch (exception) {
    console.log("default settings");
    return {
      "color.active": "white",
      "color.inactive": "slategray"
    }
  }
}

function saveSettings() {
  fs.writeFileSync(SETTINGS_FILE, settings)
}