export class EventClass {
    id: string;
    name: string;
    date: Date;
    description: string;

    constructor(id: string, name: string, date: Date, description: string) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.description = description;
    }
}
