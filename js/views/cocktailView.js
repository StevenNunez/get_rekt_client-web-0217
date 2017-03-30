class CocktailView {

  static renderDetails($target, cocktail) {
    $target.html(this.detailTemplate(cocktail))
  }

  static detailTemplate(cocktail){
    return `
      <h1>${cocktail.name}</h1>
      <blockquote class="blockquote">
        <p class="mb-0">${cocktail.description}</p>
        <footer class="blockquote-footer">${cocktail.source.replace("—", "")}</footer>
      </blockquote>
      <ul class="proportions">
        ${this.proportions(cocktail.proportions)}
      </ul>
      <p>${cocktail.instructions}</p>
    `
  }

  static proportions(proportions){
    return proportions.map((proportion) => {
      return `<li>${proportion}</li>`
    }).join("")
  }

  static renderListItems($target, cocktails) {
    let listItems = cocktails.map(this.listItemTemplate)
    $target.append(listItems)
  }

  static listItemTemplate(cocktail){
    return `<li class="cocktail" data-id="${cocktail.id}">
      <a href="#">${cocktail.name}</a>
    </li>
    `
  }
}
