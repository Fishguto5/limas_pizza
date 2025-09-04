# 🚀 Guia Prático: Aplicando Hooks no Projeto Limas Pizza

## Contexto
Você acabou de assistir à aula sobre React Hooks e agora é hora de aplicar esse conhecimento no nosso projeto de pizzaria. O objetivo é dar vida à página do catálogo, implementando o carrinho de compras e as notificações.

**Lembre-se:** A aula cobriu o que são `useState` e `useEffect` e as regras de como usá-los. Este guia foca em **como aplicar** esses conceitos no nosso código específico.

---

## 💡 Dicas para `useState` (Carrinho e Notificação)

A aula mostrou um contador com `useState(0)`. No nosso projeto, os estados são um pouco mais complexos: uma lista de objetos (pizzas) e um texto (notificação).

<details>
  <summary><strong>Dica 1:</strong> Identificando os estados necessários</summary>
  
  Pense nas duas "memórias" dinâmicas que nosso componente precisa:
  1.  Uma para guardar a **lista de pizzas** que o utilizador adiciona ao carrinho.
  2.  Outra para guardar a **mensagem de notificação** que aparece temporariamente.
  
  Cada uma delas será uma variável de estado separada, criada com `useState`.
</details>

<details>
  <summary><strong>Dica 2:</strong> Usando `useState` com Tipos (TypeScript)</summary>
  
  No nosso projeto, usamos TypeScript, então precisamos dizer ao `useState` qual o tipo de dado que ele vai guardar.
  
  - **Para o carrinho:** O valor inicial é uma lista vazia `[]` e o tipo é uma lista de Pizzas, ou seja, `Pizza[]`.
    ```typescript
    const [carrinho, setCarrinho] = useState<Pizza[]>([]);
    ```
  - **Para a notificação:** O valor inicial é um texto vazio `''` e o tipo é `string`.
    ```typescript
    const [notificacao, setNotificacao] = useState<string>('');
    ```
</details>

<details>
  <summary><strong>Dica 3:</strong> Como atualizar uma lista no estado (imutabilidade)</summary>
  
  Como vimos na aula, o estado é imutável. Não podemos simplesmente usar `carrinho.push(pizza)`. Precisamos dar ao React uma **lista completamente nova**.
  
  A "spread syntax" (`...`) é a ferramenta perfeita para isso. Ela cria uma cópia de todos os itens antigos e nos permite adicionar o novo.
  
  ```javascript
  // Dentro da sua função de adicionar ao carrinho...
  setCarrinho([...carrinho, novaPizza]); 
  ```
  Isto diz ao React: "O novo estado do carrinho é uma nova lista que contém tudo o que estava no `carrinho` antigo, mais a `novaPizza`".
</details>

---

## 💡 Dicas para `useEffect` (Temporizador da Notificação)

A aula explicou a "magia das dependências". Agora, vamos usar isso para criar um efeito colateral: um temporizador que limpa a notificação.

<details>
  <summary><strong>Dica 1:</strong> Conectando o efeito à notificação</summary>
  
  Queremos que o nosso efeito (o temporizador) seja executado sempre que a mensagem de `notificacao` **mudar**.
  
  Isso significa que o `useEffect` deve "observar" a variável `notificacao`. Como fazemos isso com o array de dependências?
  
  ```javascript
  useEffect(() => {
    // A lógica do nosso temporizador virá aqui...
  }, [notificacao]); // A dependência é a notificação!
  ```
</details>

<details>
  <summary><strong>Dica 2:</strong> Criando e limpando o temporizador</summary>
  
  Dentro do `useEffect`, podemos usar a função `setTimeout` do JavaScript. Ela agenda uma ação para acontecer depois de um certo tempo. A nossa ação será chamar `setNotificacao('')`.
  
  Também é uma boa prática garantir que o temporizador só seja criado se houver uma notificação para exibir.
  
  ```javascript
  if (notificacao) {
      // Cria um timer que executará a função após 3000ms
      const timer = setTimeout(() => {
        setNotificacao(''); 
      }, 3000);
  }
  ```
</details>

<details>
  <summary><strong>Dica 3 (Avançada):</strong> A função de limpeza (Cleanup Function)</summary>
  
  O que acontece se o utilizador adicionar outra pizza antes dos 3 segundos acabarem? Teremos dois timers competindo!
  
  Para evitar isso, podemos retornar uma função dentro do `useEffect`. Essa função de "limpeza" é executada **antes** do efeito rodar novamente, sendo o lugar perfeito para cancelar o timer anterior usando `clearTimeout`.
  
  ```javascript
  // Estrutura final e segura
  useEffect(() => {
    if (notificacao) {
      const timer = setTimeout(() => {
        setNotificacao('');
      }, 3000);
      
      // Esta função será executada para limpar o efeito anterior
      return () => clearTimeout(timer);
    }
  }, [notificacao]);
  ```
</details>

Com estas dicas, você tem as ferramentas práticas para conectar a teoria da aula com o código. Bom trabalho! 🚀