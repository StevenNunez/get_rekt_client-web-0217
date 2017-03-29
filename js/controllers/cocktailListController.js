class CocktailListController {
  constructor($target, cocktails, detailController) {
    this.$target = $target
    this.cocktails = cocktails
    this.detailController = detailController
    this.attachListeners()
    this.render()
  }

  render(){
    CocktailView.renderListItems(this.$target, this.cocktails)
  }

  attachListeners(){
    this.$target.on('click', 'li.cocktail', (e) => {
      e.preventDefault()
      this.detailController.setCurrent()
    })
  }
}
