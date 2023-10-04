import { Car } from "./models/Car.js"
import { House } from "./models/House.js"
import { Job } from "./models/Job.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/IsValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])


  /** @type {Car[]} */
  cars = [
    new Car({
      year: 2004,
      make: 'Mazda',
      model: 'Miata',
      mileage: 60000,
      runs: false,
      imgUrl: 'https://images.unsplash.com/photo-1561043845-2f5e09749871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWlhdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      isNew: false,
      price: 12000,
      color: '#080f14',
      description: 'This one is just for Jeremy, no one else contact me'
    }),
    new Car({
      year: 1998,
      make: 'Suzuki',
      model: 'Escudo',
      mileage: 80,
      runs: true,
      imgUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2021/06/Suzuki-Escudo-Pikes-Peak-Motor-1.jpg',
      isNew: true,
      price: 400000,
      color: '#940109',
      description: 'The fastest car in Gran Turismo 2 on Playstation'
    }),
  ]


  houses = [
    new House({
      address: '4486 Brennen Street West',
      year: 2004,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2000,
      price: 400000,
      description: 'This place is pretty sick big backyard and cool basement for epic swag game nights.',
      imgUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }),
    new House({
      address: '6479 Deer Flat Road',
      year: 1925,
      bedrooms: 5,
      bathrooms: 4.5,
      sqft: 9400,
      price: 960000,
      description: 'Yeah its a cool house.',
      imgUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    })
  ]

  jobs = [
    new Job({
      title: 'Pro Gamer',
      wage: 20,
      isFulltime: false,
      location: '6479 Deer Flat Rd',
      description: 'You will be gaming and doing a good job of it.'
    }),
    new Job({
      title: 'Bathroom Cleaner',
      wage: 25,
      isFulltime: true,
      location: '4486 West Brennen Str',
      description: 'Cleaning the Winco bathroom.'
    }),
  ]

  // NOTE Used to load initial data
  init() {
    this.cars = loadState('cars', [Car])
    this.houses = loadState('houses', [House])
  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
