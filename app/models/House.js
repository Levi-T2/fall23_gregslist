import { generateId } from "../utils/GenerateId.js";

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.address = data.address
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get HouseCard() {
    return `<div class="col-12 col-md-6">
        <div class="houses-card d-flex">
          <div>
            <img class="house-img"
              src=${this.imgUrl}>
          </div>
          <div>
            <p class="mb-0 fs-2">${this.address}</p>
            <p class="mb-0">Year: ${this.year}</p>
            <p class="mb-0">Bedroom Count: ${this.bedrooms}</p>
            <p class="mb-0">Bathroom Count: ${this.bathrooms}</p>
            <p class="mb-0">Square Feet: ${this.sqft}</p>
            <p class="mb-0">Price: ${this.price}</p>
            <p class="mb-0">Description: ${this.description}</p>
            <button onclick='app.HousesController.removeHouse("${this.id}")' class='btn btn-danger'>Delete House</button>
          </div>
        </div>
      </div>`
  }
}