class Cocktail {
  static all(){
    return Api.getJSON("cocktails.json")
  }

  static find(id){
    if(store.find("cocktails", id)) {
      return new Promise((resolve) => {
        resolve(store.find("cocktails", id))
      })
    } else {
      return Api.getJSON(`cocktails/${id}.json`)
                .then((cocktail) =>{
                  store.add("cocktails", cocktail)
                  return cocktail
                })
    }
  }
}

let store = new Store()
