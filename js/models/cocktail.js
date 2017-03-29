class Cocktail {
  static all(){
    return Api.getJSON("cocktails.json")
  }
}
