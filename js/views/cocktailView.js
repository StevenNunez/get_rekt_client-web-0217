class CocktailView {
  static renderListItems($target, cocktails) {
    let listItems = cocktails.map(this.listItemTemplate)
    $target.append(listItems)
  }

  static listItemTemplate(cocktail){
    return `<li class="cocktail">
      <a href="#">${cocktail.name}</a>
    </li>
    `
  }
}
