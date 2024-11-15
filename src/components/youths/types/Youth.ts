export default interface Youth {
  id?: number
  name: {
    first: string
    last: string
  }
  phone: {
    mobile: string
  }
  address: {
    houseNumber: number
    street: string
    city: {
      name: string
    }
    country : {
      name: string
    }
  }
}
