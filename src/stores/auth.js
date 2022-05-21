import {
  defineStore
} from 'pinia'

const authStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      email: "",
      password: "",
      photo: ""
    }
  },
  actions: {
    register() {
      let formData = new FormData()
      formData.append('email', this.email)
      formData.append('password', this.password)
      formData.append('photo', this.photo)
      axios({
          url: 'http://localhost:3000/auth/register',
          method: 'post',
          data: formData
        })
        .then(({data}) => {
          swal("Yeah", `${data.message}`, "success")
          this.router.push({
            name: 'login'
          })
        }).catch((err) => {
          swal("Failed!", `${err.response.data.message}`, "error")
        });
    },
    login() {
      axios({
          url: 'http://localhost:3000/auth/login',
          method: 'post',
          data: {
            email : this.email,
            password : this.password
          }
        })
        .then(({data}) => {
          localStorage.setItem('access_token', data.access_token)
          this.router.push({
            name: 'buy'
          })
        }).catch((err) => {
          swal("Failed!", `${err.response.data.message}`, "error")          
        });
    }
  }
})

export default authStore