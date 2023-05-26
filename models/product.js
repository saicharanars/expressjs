const path = require("path");
const fs = require("fs");
const rootDir = require("../util/path");
const p= path.join(rootDir,'../data','data.json');

const getProductsfromfile= cb=>{
    
    fs.readFile(p,(err,filleContent)=>{
        if(err){
            cb([]);
        }
        console.log(JSON.parse(filleContent));
        cb(JSON.parse(filleContent));
        
    })
    
};



module.exports=class Product{
    constructor(name,size){
        this.name=name;
        this.size=size
    }
    save(){
        getProductsfromfile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });
        
    }
    static fetchall(){
        getProductsfromfile(cb);
        
    }
}