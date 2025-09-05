'use client';

import { useState, useEffect } from 'react';
import PizzaCard from '../components/pizzacard';

type Pizza = { //cria o tipo Pizza
  id: number;
  nome: string;
  ingredientes: string[];
  preco: number;
};

const pizzas: Pizza[] = [
    { id: 1, nome: 'Calabresa', ingredientes: ['Molho de tomate', 'Mussarela', 'Calabresa', 'Cebola'], preco: 45.50 },
    { id: 2, nome: 'Margherita', ingredientes: ['Molho de tomate', 'Mussarela', 'Manjericão fresco'], preco: 42.00 },
    { id: 3, nome: 'Frango com Catupiry', ingredientes: ['Molho de tomate', 'Mussarela', 'Frango desfiado', 'Catupiry'], preco: 52.90 },
];

export default function CatalogoPizzaria() {

  // UseState, aqui a gente define a variável e uma função respectiva a ela
  const [carrinho, setCarrinho] = useState<Pizza[]>([]);
  const [mensagem, setMensagem] = useState<string>(''); 

  //exibe na tela a atualização após a mudança na variável carrinho
  useEffect(() => {
    if (carrinho.length > 0) {
      const ultimaPizza = carrinho[carrinho.length - 1];
      const novaMensagem = `Oba! ${ultimaPizza.nome} está no seu carrinho! 🍕`;
      setMensagem(novaMensagem);

      const timerId = setTimeout(() => {
        setMensagem('');
      }, 3000); //faz  notificação aparecer por um tempo determinado
    }
  }, [carrinho]); //só executa essa lógica quando o `carrinho` mudar.


  function handleAdicionarAoCarrinho(pizzaEscolhida: Pizza) {
    setCarrinho([...carrinho, pizzaEscolhida]); //adiciona o pizza no carrinho
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-red-600">Limas Pizza</h1>
          <div className="text-lg font-semibold text-gray-700">
            Itens no Carrinho: <span className="text-blue-600 font-bold">{carrinho.length}</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-8">
        {mensagem && (
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6 rounded-md shadow-md" role="alert">
            <p className="font-bold">{mensagem}</p>
          </div>
        )}

        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Nosso Cardápio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzas.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              onAdicionarAoCarrinho={handleAdicionarAoCarrinho}
            />
          ))}
        </div>
      </main>
    </div>
  );
}