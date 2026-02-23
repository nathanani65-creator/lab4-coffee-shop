import Api from './Api'
import { useAuthenStore } from '@/stores/authen'

export default {

  index () {
    return Api().get('coffees')
  },

  show (coffeeId) {
    return Api().get('coffee/' + coffeeId)
  },

  post (coffee) {
    const authenStore = useAuthenStore()

    return Api().post('coffee', coffee, {
      headers: {
        Authorization: `Bearer ${authenStore.token}`
      }
    })
  },

  put (coffee) {
    const authenStore = useAuthenStore()

    return Api().put('coffee/' + coffee.id, coffee, {
      headers: {
        Authorization: `Bearer ${authenStore.token}`
      }
    })
  },

  delete (coffeeId) {
    const authenStore = useAuthenStore()

    return Api().delete('coffee/' + coffeeId, {
      headers: {
        Authorization: `Bearer ${authenStore.token}`
      }
    })
  }

}
