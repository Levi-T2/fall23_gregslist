import { AboutController } from "./controllers/AboutController.js";
import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HousesController } from "./controllers/HousesController.js";
import { JobsController } from "./controllers/JobsController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { CarsView } from "./views/CarsView.js";
import { HousesView } from "./views/HousesView.js";


export const router = [
  {
    path: '',
    controller: HomeController,
    view: /*html*/`
    <h1 class="p-3">Welcome to Gregslist!</h1>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  },
  {
    path: '#/cars',
    controller: CarsController,
    view: CarsView
    // view: null
  },
  {
    path: '#/houses',
    controller: HousesController,
    view: HousesView
    // view: null
  },
  {
    path: '#/jobs',
    controller: JobsController,
    view: null
  }






]