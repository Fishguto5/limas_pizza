
'use client';
import Image from "next/image";
import pizzaImg from "@/assets/imagem_pizza.jpg"
type Pizza = {
  id: number;
  nome: string;
  ingredientes: string[];
  preco: number;
};

type PizzaCardProps = {
  pizza: Pizza;
  onAdicionarAoCarrinho: (pizza: Pizza) => void;
};

export default function PizzaCard({ pizza, onAdicionarAoCarrinho }: PizzaCardProps) {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
      <Image src={pizzaImg} alt=""/>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{pizza.nome}</h3>
        <p className="text-gray-600 text-sm mb-4 h-12">
          {pizza.ingredientes.join(', ')}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-green-600">
            R$ {pizza.preco.toFixed(2).replace('.', ',')}
          </p>
          <button
            onClick={() => onAdicionarAoCarrinho(pizza)}
            className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-300"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}