'use client'; 

import { useState, useEffect } from 'react';
import PizzaCard from '../components/pizzacard'; 

type Pizza = {
  id: number;
  nome: string;
  ingredientes: string[];
  preco: number;
};

const pizzasDisponiveis: Pizza[] = [
  { id: 1, nome: 'Calabresa', ingredientes: ['Molho de tomate', 'Mussarela', 'Calabresa', 'Cebola'], preco: 45.50 },
  { id: 2, nome: 'Margherita', ingredientes: ['Molho de tomate', 'Mussarela', 'Manjericão fresco'], preco: 42.00 },
  { id: 3, nome: 'Frango com Catupiry', ingredientes: ['Molho de tomate', 'Mussarela', 'Frango desfiado', 'Catupiry'], preco: 52.90 },
  { id: 4, nome: 'Portuguesa', ingredientes: ['Molho de tomate', 'Mussarela', 'Presunto', 'Ovo', 'Cebola', 'Azeitona'], preco: 48.00 },
];

export default function CatalogoPage() {
  const [carrinho, setCarrinho] = useState<Pizza[]>([]);
  const [notificacao, setNotificacao] = useState<string>('');

  const handleAdicionarAoCarrinho = (pizza: Pizza) => {
    setCarrinho([...carrinho, pizza]);
    setNotificacao(`🍕 ${pizza.nome} foi adicionada ao carrinho!`);
  };

  useEffect(() => {
    
    if (notificacao) {
      // ...cria um timer para limpar a notificação após 3 segundos (3000 ms)
      const timer = setTimeout(() => {
        setNotificacao(''); // Limpa a notificação, fazendo-a desaparecer da tela
      }, 3000);
      // Função de limpeza (cleanup function):
      // Isso é importante! Se o usuário adicionar outra pizza antes dos 3s,
      // o timer anterior é cancelado, evitando bugs. (opcional)
      return () => clearTimeout(timer);
    }
  }, [notificacao]); 

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
        {notificacao && (
          <div className="bg-green-500 text-white text-center p-3 rounded-lg mb-8 shadow-lg transition-all duration-300">
            {notificacao}
          </div>
        )}

        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Nosso Cardápio</h2>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pizzasDisponiveis.map((pizza) => (
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
