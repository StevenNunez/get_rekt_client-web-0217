class CocktailShowController {
  constructor($target) {
    this.$target = $target
  }

  setCurrent(cocktail){
    CocktailView.renderDetails(this.$target, cocktail)
  }
}
