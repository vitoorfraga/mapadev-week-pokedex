

// Variaveis 

const ListaSelecaoPokemons = document.querySelectorAll('.pokemon')
const PokemonsCard = document.querySelectorAll('.cartao-pokemon')

ListaSelecaoPokemons.forEach(pokemon => {

  pokemon.addEventListener('click', () => {

// Remover a classe aberto SOMENTE do cartão que está aberto.
  const cartaoPokemonAberto = document.querySelector('.aberto')
  cartaoPokemonAberto.classList.remove('aberto')

// Ao clicar no pokemon da listagem, pegamos o ID do Pokemon e adicionar a classe aberto.
  const IdPokemonSelecionado = pokemon.attributes.id.value
  
  const idPokemonParaAbrir = 'cartao-' + IdPokemonSelecionado
  const CartaoPokemonParaAbrir = document.getElementById(idPokemonParaAbrir)
  CartaoPokemonParaAbrir.classList.add('aberto')
  
  
  // Remover Classe "ativo" da listagem
  const pokemonAtivoNaListagem = document.querySelector('.ativo')
  pokemonAtivoNaListagem.classList.remove('ativo')

  // Ativar classe "Ativa"
  const pokemonSelecionadoNaListagem = document.getElementById(IdPokemonSelecionado)
  pokemonSelecionadoNaListagem.classList.add('ativo')

  })


})
