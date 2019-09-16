import axios from '@/libs/axios'

const getMyBaseInfo = (params) => {
  return axios({
    url: 'sales/api/v1/sellerUser/user'
  })
}

export { getMyBaseInfo }