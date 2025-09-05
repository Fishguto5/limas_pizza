'use client';

 //importa os hooks useState e useEffect
import PizzaCard from '../components/pizzacard'; //importando o componente da pizza

type Pizza = { //interface das pizzas
  id: number;
  nome: string;
  ingredientes: string[];
  preco: number;
};

const pizzas: Pizza[] = [ //defininfo os tipos das pizzas
    { id: 1, nome: 'Calabresa', ingredientes: ['Molho de tomate', 'Mussarela', 'Calabresa', 'Cebola'], preco: 45.50 },
    { id: 2, nome: 'Margherita', ingredientes: ['Molho de tomate', 'Mussarela', 'Manjericão fresco'], preco: 42.00 },
    { id: 3, nome: 'Frango com Catupiry', ingredientes: ['Molho de tomate', 'Mussarela', 'Frango desfiado', 'Catupiry'], preco: 52.90 },
];

export default function CatalogoPizzaria() {

  //Aqui vai o useState

  //Aqui vai o useEffect

  function teste (){

  }
  //função que adiciona a pizza no carrinho
  

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-red-600">Limas Pizza</h1>
          <div className="text-lg font-semibold text-gray-700">
            Itens no Carrinho: <span className="text-blue-600 font-bold">Quantidade de pizzas no carrinho</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-8">
        {/* dispara a mensagem que a pizza foi adicionada no carrinho */}

        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Nosso Cardápio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzas.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              onAdicionarAoCarrinho = {teste}//função que adiciona a pizza no carrinho
            />
          ))}
        </div>
      </main>
    </div>
  );
}