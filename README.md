
  

  

# Projeto para teste técnico da SMARKIO.

  

  

  

Este projeto foi desenvolvido usando as tecnologias [React.Js](https://github.com/facebook/create-react-app), [Node.Js](https://nodejs.org/en/docs/), [MySql](https://dev.mysql.com/doc/), [Axios](https://axios-http.com/docs/intro), [Express](https://expressjs.com/pt-br/4x/api.html) e [Text To Speech do IBM Watson](https://www.ibm.com/cloud/watson-text-to-speech).

  

  

  

## Como rodar localmente o projeto

## Antes de começar :

### Crie uma conta free na [IBM](https://www.ibm.com/cloud/watson-text-to-speech) para obter a Api Key que será utilizada nos passos seguintes.

1. Clone o repositório

- `git clone git@github.com:Arnaelcio/Smarkio-Challenge.git`.
 
- Entre na pasta do repositório que você acabou de clonar:

- `cd Smarkio-Challenge`

**ATENÇÃO!!**

#### Note que existem dois diretórios; um chamado `backEnd` e outro chamado `frontend`; Cada um desses diretórios possui um script para poder funcionar como mostrado abaixo:

2. Entre no diretório `backEnd`

- `cd backEnd`.

3. Instale as dependências para o `backEnd`
  
- `npm install`

4. Volte para o diretório raiz do projeto `Smarkio-Challenge`

- `cd ..`

5. Entre no diretório `frontend`

- `cd Frontend`.

6. Instale as dependências para o `frontend`

- `npm install`

7. Volte para o diretório raiz do projeto `Smarkio-Challenge`

- `cd ..`

8. Abra 2 terminais de linha de comando (bash, shell, ou de sua preferência)

9. No primeiro terminal, entre no diretório `backEnd`

- `cd BackEnd`.

10. Renomeie o arquivo de nome   `.env_sample` para   `.env`

11. Substitua os valores das variáveis do pelos dados da sua conexão MySql;

#### Atenção !! não é necessário alterar o valor da variável mantenha a variáve `.MYSQL_DATABASE` . 
#### Você também precisará definir o valor da variável `API_KEY_WATSON` com suas credenciais do site da [IBM](https://www.ibm.com/cloud/watson-text-to-speech). 
  
12. Rode o comando abaixo para criar o banco de dados local

- `npx sequelize db:create`.

##### nesse momento seu banco de dados local foi criado, todavia, ainda está vazio;

13. Rode o comando abaixo para criar a tabela do banco de dados

- `npx sequelize db:migrate`.

##### nesse momento a tabela 'Comments' deve ter sido criada, mas também está vazia ;

14. Rode o comando abaixo para popular a tabela que foi criada no passo anterior

- `npx sequelize db:seed:all`.

##### Agora o banco de dados local está criado e sua tabela de comentários já possui dados; Podemos iniciar o servidor node local ;

15. Rode o comando abaixo para inciar o servidor do `backEnd`

- `npm run dev`.

16. Ainda no primeiro terminal, você deverá ver a mensagem abaixo:

`ouvindo a porta 3001`

##### Isso significa que está tudo OK e o backEnd já está rodando!

17. No segundo terminal, entre no diretório `frontend`

- `cd frontend`.

18. Rode o comando abaixo para inciar a aplicação em React

- `npm start`.

19. Ainda no segundo terminal, você deverá verificar se existe a mensagem abaixo:

`Compiled successfully!`

##### Isso significa que está tudo OK e o frontend já está rodando! Deverá abrir uma guia do seu browser automaticamente com a plicação rodando, mas caso isso não aconteça, basta digitar: `http://localhost:3000` na barra de endereço do seu navegador para ver a aplicação rodando!

### Pronto !! Agora é só testar a aplicação. : - )

#### Caso haja algum problema em rodar a aplicação, não hesite em me contactar via e-mail ou LinkedIn:

E-mail: arnaelcio.gomes@gmail.com

[LinkedIn](https://www.linkedin.com/in/arnaelciogomespereira/)