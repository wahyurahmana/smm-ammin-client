import {defineStore} from 'pinia'

const checkOrderStore = defineStore({
  id : 'checkOrder',
  orderId : "",
  actions : {
    getCheck(){
      axios({
        url : 'http://localhost:3000/check-order',
        method: 'POST',
        data : {
          orderId : this.orderId
        }
      })
        .then((result) => {
          console.log(result.data);
          if (result.data.status === false) {
            swal("Hello!", `Order ${this.orderId} is ${result.data.data}`, "warning") 
          } else {
            swal("Hello!", `Order ${this.orderId} is ${result.data.data.status}`, "warning")
          }     
        }).catch((err) => {
          swal("Failed!", err.response.data.message, "error")      
        });
    }
  }
})

export default checkOrderStore