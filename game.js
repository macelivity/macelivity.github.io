class Game{
    constructor(){
        this.name = "";
        this.people = [""];
        this.place = "";
    }

    addPerson(){
        this.number = 3;
        this.people.push();
    }

    removePerson(i){
        this.people.splice(i, 1);
    }

    setPerson(i, name){
        this.people[i] = name;
    }

    getPerson(){
        personName = this.people[getRandomInt(0, this.people.length)]
        this.people.splice(people.indexOf(personName), 1);
        return personName;
    }

    getPeople(){
        return this.people;
    }

    setPlace(place){
        this.place = place;
    }
    getPlace(){
        return this.place;
    }

    /**
     * returns a random int
     * @param {minimum int (inclusive)} min 
     * @param {maximum int (exclusive)} max 
     */
    getRandomInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}