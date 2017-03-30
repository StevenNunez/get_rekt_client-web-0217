class Cocktail {
  static all(){
    return Api.getJSON("cocktails.json")
  }

  static find(id){
    return Api.getJSON(`cocktails/${id}.json`)
  }
}
