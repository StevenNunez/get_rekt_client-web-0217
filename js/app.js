$(() => {
  Cocktail.all()
  .then((cocktails) => {
    let $target = $('ul.cocktails')
    let $detailTarget = $(".cocktail-details")
    let detailController = new CocktailShowController($detailTarget)
    let listController = new CocktailListController($target, cocktails, detailController)
  })
})
