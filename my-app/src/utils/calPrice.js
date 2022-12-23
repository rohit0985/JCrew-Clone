const calPrice = (price)=>{
let currPrice = Number(price.split(".")[0].replace(",",""))
return currPrice
}

export default calPrice