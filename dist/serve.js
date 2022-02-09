"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config()
var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = process.env.PORT || 3001;
_app2.default.listen(port, ()=>{
  console.log(`Serve running on http://localhost:${port}`);
})
 












/* products = [

  {
    name:'laptop',
    price: 1000,
    count: 3
  },
  {
    name:'phone',
    price: 500,
    count: 10
  },
  {
    name:'desktop',
    price: 1500,
    count: 2
  }
];

function double(val,index, array){
  return val*2;
}

const totalProductsValue = products.map(item => ({
  name: item.name,
  totalValue: item.price*item.count
}))

console.log(totalProductsValue);
*/



/* numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = 0;
numbers.forEach((el, index, array) => {
  sum += el;
});
console.log(sum);

letters = ['a','b','a','c','b','d','e','f','e','i','f','e','a','c','f','d','i'] 
count = {}
letters.forEach(item =>{
  //console.log(count)
  if(count[item]){
    count[item]++
  }else count[item] = 1
})
 */
