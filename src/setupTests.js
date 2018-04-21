/*
  The react-scripts package requires this file to live at /src/setupTests.js
*/

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";

// This line is required for enzyme to work with React
Enzyme.configure({ adapter: new Adapter() });

// Defines additional globals to cut down on imports within test files
global.mount = Enzyme.mount;
global.render = Enzyme.render;
global.shallow = Enzyme.shallow;
