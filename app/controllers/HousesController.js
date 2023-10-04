import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawHouses() {
    const houses = AppState.houses
    let content = ''
    houses.forEach(houses => content += houses.HouseCard)
    setHTML('houses', content)
}

export class HousesController {
    constructor() {
        console.log('House controller is online')
        _drawHouses()

        AppState.on('houses', _drawHouses)
    }

    createHouse(event) {
        try {
            event.preventDefault()
            const form = event.target
            const houseData = getFormData(form)
            houseData.isNew = houseData.isNew == 'on'
            houseData.runs = houseData.runs == 'on'
            console.log('house made', houseData)
            housesService.createHouse(houseData)
            form.reset()
        } catch {
            window.alert('this failed btw')
        }
    }
    async removeHouse(houseId) {
        const wantsToDelete = await Pop.confirm('Are you sure you want to remove the house bud?')

        if (!wantsToDelete) {
            return
        }

        console.log('They wanna delete le house');
        housesService.removeHouse(houseId)
    }
}

