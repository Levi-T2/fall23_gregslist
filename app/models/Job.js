
export class Job {
    constructor(data) {
        this.id = data.id || generateId()
        this.title = data.title
        this.wage = data.wage
        this.isFulltime = data.isFulltime
        this.location = data.location
        this.description = data.description
    }
}