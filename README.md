# 🏁 Projeto Final: KImóveis - TypeORM com Relacionamentos

  <article style="display: flex, flex-direction: column, justify-content: space-between;">
  
  <p>Este é um projeto backend, feito no módulo 4 da Kenzie Academy Brasil, afim de  demonstrar as minhas habilidades e conhecimentos que eu adquiri durante 
  os primeiros meses que eu estudei desenvolvimento backend. 
  Esta é uma API a qual eu criei ao longo de uma semana, cujo, a intenção é criar anúncios de propriedades, agendar horáriso de visitas para tais propriedades e categoriza-las,
  este projeto utiliza-se das seguintes tecnologias: Typescript, TypeORM, ExpressJs e Jest.
  </p>

  <p> O uso  do Express é uma estrutura minimalista e leve que permite criar aplicativos da web de forma rápida e fácil. Sua simplicidade proporciona flexibilidade para criar APIs RESTful e servidores HTTP de forma eficiente.
Express possui um vasto ecossistema de middleware que oferece funcionalidades adicionais, como análise de cookies, manipulação de sessões, compressão de resposta e muito mais. Isso permite estender facilmente a funcionalidade do seu aplicativo sem reinventar a roda.
Como uma das estruturas mais populares para Node.js, Express possui uma comunidade ativa que fornece suporte, bibliotecas de terceiros e recursos educacionais para ajudar os desenvolvedores a resolver problemas e melhorar seus projetos.
</p>

 <p>TypeORM oferece uma camada de abstração sobre diferentes sistemas de banco de dados, permitindo que os desenvolvedores escrevam consultas usando objetos e classes TypeScript, em vez de SQL puro. Isso simplifica o desenvolvimento e torna o código mais legível e manutenível.
Suporte a TypeScript nativo. Como o próprio nome sugere, TypeORM é totalmente compatível com TypeScript, o que significa que os tipos de dados são verificados em tempo de compilação, proporcionando maior segurança e menos erros durante o desenvolvimento.
TypeORM facilita a criação e execução de migrações de banco de dados para manter o esquema do banco de dados sincronizado com o código-fonte. Isso simplifica o processo de evolução do esquema do banco de dados ao longo do tempo.
</p>

  <p>
Jest é uma estrutura de teste de JavaScript fácil de usar e configurar, que oferece uma experiência de desenvolvimento agradável para escrever e executar testes de unidade e integração.
Jest oferece suporte nativo ao TypeScript, permitindo que os desenvolvedores escrevam testes com tipagem estática e obtenham vantagens como conclusão automática de código e detecção de erros em tempo de compilação.
Jest é conhecido por sua abordagem centrada no desenvolvedor, com recursos como execução paralela de testes, snapshots de componentes e mocks de fácil configuração, que facilitam a escrita de testes eficazes e confiáveis.
  </p>

<p> Este projeto demonstra o meu comprometimento e desenvolvimento como desenvolvedor fullstack, ao longo de muitos meses de esforço e 
dedicação, e para demonstrar o meu potencial me foi confiado a realização deste projeto. </p>
  
 </article>
  




Para iniciar este projeto, é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

```bash
# caso use npm
npm run i

# caso use yarn
yarn
```

## Instalação

Apenas as bibliotecas de teste, ou que os testes dependem, estão no **package.json**. Por isso, instale as dependências do projeto manualmente e não se esqueça de inicia-lo também.

```bash
# caso use npm
npm init -y

# caso use yarn
yarn init -y
```

## Dependências dos testes

Para que os testes funcionem corretamente, existem algumas dependências.

* O `app` tem que ser exportado como **default** em **src/app.ts**. Exemplo:

```ts
export default app
```

* O `AppDataSource` tem que ser exportado em **src/data-source.ts**. Exemplo:

```ts
export { AppDataSource }

// ou

export const AppDataSource = new DataSource(dataSourceConfig());
```

* As Entities **tem que ter os respectivos nomes** e **tem que ter a exportação centralizada** em **entities/index.ts**. Exemplo:

```ts
import { Address } from './<arquivo>';
import { Category } from './<arquivo>';
import { RealEstate } from './<arquivo>';
import { Schedule } from './<arquivo>';
import { User } from './<arquivo>';

export { Address, RealEstate, Category, User, Schedule };
```

## Sobre os testes

Essa aplicação possui testes, que serão utilizados para validar, se todas as regras de negócio foram aplicadas de maneira correta.

Os testes estão localizados em `src/__tests__`.

Na subpasta `integration` estão os testes.

Já na subpasta `mocks` estão os dados que serão utilizados para os testes.

No arquivo `jest.config.ts` estão algumas configurações necessárias para os testes rodarem.

**`De modo algum altere qualquer um desses arquivos.`** Isso poderá comprometer a integridade dos testes.

E também não altere o script de `test` localizado no `package.json`. Isso será utilizado para rodar os testes.

## Rodando os testes

Para rodar os testes é necessário que no seu terminal, você esteja dentro do diretório do projeto.

Estando no terminal e dentro do caminho correto, você poderá utilizar os comandos a seguir:

### Rodar todos os testes

```bash
# caso use npm
npm run test

# caso use yarn
yarn test
```

### Rodar todos os testes e ter um log ainda mais completo

```bash
# caso use npm
npm run test --all

# caso use yarn
yarn test --all
```

### Rodar os testes de uma pasta específica

> detalhe: repare que tests está envolvido por 2 underlines. Isso se chama ***dunder***.

```bash
# caso use npm
npm run test <subpasta>

# caso use yarn
yarn test <subpasta>
```

### Rodar os testes de um arquivo específico

```bash
# caso use npm
npm run test <subpasta>/<arquivo>

# caso use yarn
yarn test <subpasta>/<arquivo>
```

## **Endpoints**

| HTTP Method | Description            | Endpoint                      | Authentication Required |
| ----------- | ---------------------- | ----------------------------- | ----------------------- |
| POST        | Register user          | `/users`                      | No Authentication       |
| POST        | Login user             | `/login`                      | No Authentication       |
| PATCH       | Update user            | `/users/:id`                  | Authenticated           |
| GET         | Get user profile       | `/users/profile`              | Authenticated           |
| GET         | Get user               | `/users/:id`                  | Authenticated           |
| DELETE      | Delete user            | `/users/:id`                  | Authenticated           |
| POST        | Create schedule        | `/schedules`                  | Authenticated           |
| GET         | List all schedules     | `/schedules/realEstate/:id`   | Authenticated           |
| POST        | Create realEstate      | `/realEstate`                 | Authenticated           |
| GET         | Retrieve realEstate    | `/realEstate`                 | Authenticated           |
| POST        | Create Category        | `/category`                   | Authenticated           |
| GET         | Retrieve Categories    | `/category`                   | Authenticated           |
| GET         | Get Retrieve Categories| `/category/:id/realEstate`    | Authenticated           |
| POST        | Create Schedules       | `/schedules`                  | Authenticated           |
| GET         | Get Schedules          | `/schedules/realEstate/:id`   | Authenticated           |


# Rotas que não precisam de autentificação

<h2 align ='center'> Criando usuário </h2>
 
 Nessa aplicação o usuário pode se cadastrar utilizando seu nome e  email  também é possível, definir se o usuário será um administrador 
 

```json
{
    "name": "Fabio",
    "email": "fabio@kenzie.com.br",
    "password": "1234",
    "admin": true,
}

```

`POST /users - FORMATO DA RESPOSTA - STATUS 201`


```json
{
   "id": 1,
  "name": "Fabio",
  "email": "fabio@kenzie.com.br",
  "admin": true,
  
}
```

em caso de erro:

```json
{
    "name": "[This Field is Required]" ,
    "email": "[This Field is Required]",
    "password": "[This Field is Required]",
    
}
```
<h2 align ='center'> Login de usuário </h2>

É possível também fazer o login do usuário, e com isso será gerado um token, o que será fundamental para a ter acesso às outras funcionalidades da aplicação

body:

```json
{
  "email": "Thal1z3ra@gmail.com",
  "password": "12345678"
}
```

`POST /login - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc1NlbGxlciI6dHJ1ZSwiaWF0IjoxNjg4MDYy
MjE5LCJleHAiOjE2ODgwNjU4MTksInN1YiI6IjEifQ.zfhQ5ZGv6PkRhiB9AgJZAX0n3bfzUohJ_59CW8COpXc",
  "user_id": 1
}
```

# Rotas que precisam de autentificação


<h2>Editar usuário</h2>

É possível que o usuário edite a sua conta e mude suas informações pessoais em relação a sua conta dentro da aplicação


```json
{
    "name": "Ricardo",
    "email": "fabio@kenzie.com.br",
    "password": "1234",
    "admin": true,
}
```

`PATCH /user/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{   "id": 1,
    "name": "Ricardo",
    "email": "fabio@kenzie.com.br",
    "password": "1234",
    "admin": true,
}
```
<h2>Deletar usuário</h2>

É possível que o usuário delete a sua conta do aplicativo, passando o id do usuário através do parâmetro da requisição
essa rota não possui retorno.


NO BODY

`DELETE /user/:id - FORMATO DA RESPOSTA - STATUS 204 NO RESPONSE`


<h2> Postar propriedade </h2>

Esta rota se destina ao administrador, para que ele possa registrar uma propriedade existente, somente o administrador consegue ter acesso a essa rota.

```json
  {
    "id": 1,
    "value": "100000.99",
    "size": "400",
    "sold": "false",
    "address": {
      "id": "1",
      "street": "street",
      "zipCode": "zipCode",
      "number": "number",
      "city": "city",
      "state": "s0",
    }
    "categoryToCreate": {
      "name": "category2",
    },

   }

```


<h2> Listar propriedade </h2>

Nesta rota é possível que o usuário veja quais são as propriedades disponíveis para agendamento e visita.

`GET /realEstate - FORMATO DA RESPOSTA - STATUS 200`

```json
   {
    "id": 1,
    "value": "100000.99",
    "size": "400",
    "sold": "false",
    "address": {
      "id": "1",
      "street": "street",
      "zipCode": "zipCode",
      "number": "number",
      "city": "city",
      "state": "s0",
    }
    "categoryToCreate": {
      "name": "category2",
    },
    "created_at": "2024-02-16T00:47:09.762Z",
    "updatedAt": "2024-02-16T00:47:09.762Z"
   },
  {
    "id": 2,
    "value": "1600000.00",
    "size": "12000",
    "sold": "false",
    "address": {
      "id": "1",
      "street": "street",
      "zipCode": "zipCode",
      "number": "number",
      "city": "city",
      "state": "s0",
    }
    "categoryToCreate": {
      "name": "category2",
    },
    "created_at": "2024-02-16T00:47:09.762Z",
    "updatedAt": undefined
   },
   {
    "id": 3,
    "value": "550000.00",
    "size": "6000",
    "sold": "false",
    "address": {
      "id": "1",
      "street": "street",
      "zipCode": "zipCode",
      "number": "number",
      "city": "city",
      "state": "s0",
    }
    "categoryToCreate": {
      "name": "category2",
    },
    "created_at": "2024-02-16T00:47:09.762Z",
    "updatedAt": "2024-02-16T00:47:09.762Z"
   }
```
 
<h2>Agendamento de visita</h2>

Nesta rota é possível que o usuário agende uma visita para determinada, propriedade caso ela esteja disponível.


```json
  {
   "date": "2024/06/12",
   "hour": "12:30"
  }

```

`POST /schedule - FORMATO DA RESPOSTA - STATUS 201`

```json
    {
    "date": "2024/06/12",
    "hour": "12:30",
    "realEstateId": 1
   }
```

<h2>Listar agendamentos</h2>

Nesta rota é possível que o usuário consulte o agendamento de visitas para determinada propriedade caso ela esteja disponível,
o id da propriedade tem de ser passado através do parâmetro da requisição.


```json
  {
   "date": "2024/06/12",
   "hour": "12:30"
  }

```

`GET /schedule/realEstate/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
    [
   {
    "date": "2024/06/12",
    "hour": "12:30",
    "realEstateId": 1
   },
    {
    "date": "2024/06/12",
    "hour": "7:30",
    "realEstateId": 2
   },
   {
    "date": "2024/08/20",
    "hour": "12:30",
    "realEstateId": 3
   },
   {
    "date": "2024/05/19",
    "hour": "15:30",
    "realEstateId": 4
   },
   ]
```

<h2> Criar categoria </h2>

Nesta rota é possível criar uma categoria para atribui-la a uma propriedade, e não é possível
que uma categoria tenha mais de uma categoria.  


```json
{
"name": "Apartamento"
}
```
`POST /category - FORMATO DA RESPOSTA - STATUS 201`

```json
{
"name": "Apartamento",
"id": 1
}
```

<h2> Listar categoria  </h2>

NO BODY

Esta rota é utilizada para listar as categorias criadas na rota anterior 

`GET /category - FORMATO DA RESPOSTA - STATUS 200`

```json
[
{
"name": "Apartamento",
"id": 1
},
{
"name": "Casa",
"id": 2
},
{
"name": "Flat",
"id": 3
}
]
```
<h2> Listar categorias na propriedade  </h2>

NO BODY

Esta rota é utilizada para listar as categorias criadas na rota anterior, e listar que  

`GET /category/realEstate/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
[
   {
    "id": 1,
    "value": "100000.99",
    "size": "400",
    "sold": "false",
    "address": {
      "id": "1",
      "street": "street",
      "zipCode": "zipCode",
      "number": "number",
      "city": "city",
      "state": "s0",
    }
    "categoryToCreate": {
      "name": "Casa",
    },
    "created_at": "2024-02-16T00:47:09.762Z",
    "updatedAt": "2024-02-16T00:47:09.762Z"
   },
  {
    "id": 2,
    "value": "1600000.00",
    "size": "12000",
    "sold": "false",
    "address": {
      "id": "1",
      "street": "street",
      "zipCode": "zipCode",
      "number": "number",
      "city": "city",
      "state": "s0",
    }
    "categoryToCreate": {
      "name": "Studio",
    },
    "created_at": "2024-02-16T00:47:09.762Z",
    "updatedAt": undefined
   },
   {
    "id": 3,
    "value": "550000.00",
    "size": "6000",
    "sold": "false",
    "address": {
      "id": "1",
      "street": "street",
      "zipCode": "zipCode",
      "number": "number",
      "city": "city",
      "state": "s0",
    }
    "categoryToCreate": {
      "name": "Flat",
    },
    "created_at": "2024-02-16T00:47:09.762Z",
    "updatedAt": "2024-02-16T00:47:09.762Z"
   }
]
```

 



