export class Product{
    public name : string;
    public description : string;
    public quantity:number;
    public thresholdQuantity:number;
    public unitPrice : number;
    public supplier:string;

    constructor(name:string,description:string,quantity:number,thresholdQuantity:number,unitPrice:number,supplier:string){
        this.name=name;
        this.description=description;
        this.quantity=quantity;
        this.thresholdQuantity=thresholdQuantity;
        this.unitPrice=unitPrice;
        this.supplier=supplier;
    }
}