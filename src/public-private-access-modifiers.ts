class Developer{
    name: string;
    private skills: string[] = [];

    constructor(name: string){
        this.name = name;
    }

    addSkills(skill: string){
        this.skills.push(skill);
    }
    print(){
        console.log(this.name,this.skills)
    }

}

const userDeveloper1 = new Developer("John");
console.log(userDeveloper1);