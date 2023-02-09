let id: number = 38;
let company: string = "Yavar";
let isJoin: boolean = true;
let x: any = "Hello";


let ids: number[] = [1,2,3];
let arr: any[] = [true,"string",1];


// Tuple
let person: [number,string,boolean] = [1,"string",true];


// Tuple Array
let employee: [number,string];

// Union

let pid: string | number | boolean;
pid = "22";


enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}
console.log(Direction1["Up"])
console.log(Direction2.Up)

// Objects
type User = {
    id: number,
    name: string
}
const user1: {id: number, name: string} = {
    id: 1,
    name: "John"
}
const user2: User = {
    id: 1,
    name: "John"
}
console.log(user1)
console.log(user2)

type Demo = number[]

const val: Demo = [];

// Type Assertion

let cid: any = 1;
let customerId1 = <number>cid;
let customerId2 = cid as number;

// Functions

function add(x: number, y: number): number{
    return x + y;    
}
console.log(add(1,2));

function log(message: string | number): void{
    console.log(message);
}
log("hello")

// Interfaces

interface UserInterface{
   readonly id: number
    name: string
    age?: number
}

const user3: UserInterface = {
    id: 1,
    name: "John"
}



type Point = number | string;
//interface Point = number | string;
const p1: Point = 1;


type us = {
  readonly id: number
    name?: string
}
const u: us = {
    id: 1,
    name: "string"
};

// Function Interface

interface MathFunc {
    (x: number, y: number): number
}

const addFunc: MathFunc = (x: number, y: number): number => x + y
const subFunc: MathFunc = (x: number, y: number): number => x - y


// Classes

class Person {
    private id: number
    name?: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
}

const john = new Person(1, "John");

// Data Modifiers
console.log(john.name)


// Implement Interface in Class

interface PersonInterface {
    id: number
    name: string
    register(): string
}


class Person1 implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`;
    }
}

class Employee extends Person1{
    position: string

    constructor(id: number, name: string, position: string){
        super(id,name)
        this.position = position
    }
}

const emp = new Employee(3, "Hello", "Developer");
console.log(emp.register())


// Generics

function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['string'])

numArray.push()

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let card: cardDetails = {
    cardnumber: "123",
    cardDate: "12/12/2022",
    cvv: 7867
}

const arrHero : Array<number> = [];
const data3 : (string | number | boolean)[] = ["1",2];

let seatAllotment: "aisle" | "middle" | "window";


enum SwatChoice {
    AISLE = "aisle",
    MIDDLE = 3,
    WINDOW,
    FOURTH
}

const enum SwatChoice1 { // It hides lot of code in js
    AISLE = "aisle",
    MIDDLE = 3,
    WINDOW,
    FOURTH
}

// Interface


interface UserCreate {
    readonly dbId : number,
    email: string,
    userId: number,
    googleId?: string,
    startTrail: () => string,
    getCoupon(couponname: string, value: number): number
}

interface UserCreate{
    githubToken: string
}

interface Admin extends UserCreate{
    role: "admin" | "ta" | "learner"
}

const userJohn: Admin = {
    dbId: 2,
    email: "usermail@gmail.com",
    userId: 1,
    githubToken: "HGT#!",
    role: "admin",
    startTrail() {
        return "Started"
    },
    getCoupon(){
        return 1
    }
}
console.log(userJohn.startTrail())


// class
class UserCourse {
    protected _courseCount = 1
    readonly city: string = "CH"

    constructor(public email: string,public name: string){

    }
    private deleteToken(){
        console.log("delete Token")
    }
    get courseCount(): number{
        return this._courseCount
    }
    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends UserCourse{
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}
const uc = new SubUser("user@gmail.com","John")
uc.changeCourseCount()
console.log(uc)

// interface

interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStroy(): void
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
    }
}
class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){
    }  

    createStroy(): void {
        console.log("Create Story")
    }
}

// Abstract class
abstract class TakePhoto1 {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
    }
    abstract getValue(): void

}

class Instagram1 implements TakePhoto1{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        //super(cameraMode,filter)
    }
    getValue(): void {
        console.log("Value")
    }
}