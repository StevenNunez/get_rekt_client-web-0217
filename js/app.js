$(() => {
  Cocktail.all()
  .then((cocktails) => {
    let $listTarget = $('ul.cocktails')
    let $detailTarget = $(".cocktail-details")
    let detailController = new CocktailShowController($detailTarget)
    let listController = new CocktailListController($listTarget, cocktails, detailController)
  })
})
