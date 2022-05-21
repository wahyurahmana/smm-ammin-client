import {
  defineStore
} from 'pinia'

const getFreeStore = defineStore({
  id: 'getFree',
  state: () => {
    return {
      baseUrl: 'https://smm-ammin.herokuapp.com/',
      service: "",
      target: ""
    }
  },
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    freeFollowerIg() {
      axios({
          url: this.baseUrl + 'free-order',
          method: 'POST',
          data: {
            service: this.service,
            target: this.target
          }
        })
        .then((result) => {
          swal("Success!", `Target ${result.data.data.target} With Order ID : ${result.data.order.data.id}`, "success")
        }).catch((err) => {
          swal("Failed!", err.response.data.message, "error")
        });
    }
  }
})

export default getFreeStore