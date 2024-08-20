class scheduler{
    name: string;
    description: string = "";

   constructor(name: string){
    this.name = name;
   }

   setDes(des:string){
    this.description = des;
   }

   getDes(): string{
    return this.description;
   }

}

let mine = new scheduler("hold");
mine.setDes("testing123");
console.log(mine.getDes());



function test(name: string): string{
    return "My name is " + name;
}

console.log(test("Ariyo"));
