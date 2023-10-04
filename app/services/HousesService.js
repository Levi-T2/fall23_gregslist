import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { saveState } from "../utils/Store.js";

function _saveHouses() {
    saveState('houses', AppState.houses)
}

class HousesService {
    createHouse(houseData) {
        const newHouse = new House(houseData)
        console.log('new house just dropped', newHouse)
        AppState.houses.push(newHouse)
        _saveHouses()
        AppState.emit('houses')
    }
    removeHouse(houseId) {
        const houses = AppState.houses
        const houseIndex = houses.findIndex(house => house.id == houseId)

        if (houseIndex == -1) {
            window.alert("couldn't find house that id bud")
        }
        houses.splice(houseIndex, 1)
        _saveHouses()
        AppState.emit('houses')
    }
}

export const housesService = new HousesService()