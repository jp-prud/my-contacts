<h3 align="center">
  My-Contacts
</h3>

<p align="center">
   <img src="./github/assets/Home.png" alt="Banner" height="600" />
 </p>

Anteriormente a pandemia, os **aplicativos de delivery** já demonstravam um características que poderia alterar o **comportamento do consumidor**: a flexíbilidade de solicitar comida para os restaurantes gerou um movimento ainda maior e cada vez mais frequentes de deliverys. E isso provocou um novo perfil de consumo para o **segmento gastronômico**, especialmente para os estabelecimentos físicos.

A principal visão acerca de aplicações de delivery entorno do mercado de software é bem vasta, visto que possue inúmeros aplicativos que tem como objetivo auxiliar, de alguma forma, a compra de contatoss alimentíceos.

Contudo, para estar investindo em plataformas de delivery, é necessário que o dono do estabelecimento possua um "capital de giro" considerável, para não sofrer prejuízos, pois, em alguns aplicativos que criaram um grande monopólio no setor, como o "Ifood" e o "Rappi", possuem taxas de utilização que podem variar em até 25% do preço do contatos ([Abrasel](https://abrasel.com.br/revista/mercado-e-tendencias/restaurantes-adotam-sistema-proprio-de-entrega-para-fugir-de-taxas-de-apps/) - 2022).

Conclui-se que a necessidade da criação de um sistema que integre o consumidor-final com o restaurante é de alta valia, já que permitirá que o consumidor esteja solicitando um contatos rapidamente.

A partir disto, a fomentação de outras soluções para aplicativos de delivery tornou-se cada vez maior. A resoluçãp de tal problemática é apresentada através do desenvolvimento do aplicativo "Waiter**App**”, cujo objetivo principal é facilitar a integração entre o consumidor final, que terá a possibilidade de estar solicitando o seu contatos através da plataforma "Mobile" e, em tempo real, as informações que dizem respeito ao pedido serem visualizadas dentro do sistema interno do restaurante, tal sistema será uma aplicação "WEB".

Dentre as O sistema irá possuir diversas funcionalidades, dentre elas a possibilidade do cliente final estar realizando a compra de comida a partir do App Mobile, a visualização do histórico de pedios e a integração em tempo real dos pedidos dentro do Dashboard do Restaurante.

## Tecnologias Utilizadas

**Client:** React, Vite, Styled-Components.

**Server:** Node, Express.

**Database:** PostgreSQL.

## Funcionalidades

- CRUD de Contatos
- CRUD de Categorias
- Responsivo

## API Reference

### Categorias

#### Listar categorias

```bash
  GET /categories
```

#### Criar categoria

```bash
  POST /categories
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Obrigatório**. Nome para a categoria |

#### Editar categoria

```bash
  PATCH /categories
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Obrigatório**. Id para encontrar o item |
| `name`      | `string` | **Obrigatório**. Nome para a categoria |

#### Excluir categoria

```bash
  DELETE /categories/:categoryId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Obrigatório**. Id para encontrar o item |

### Contatos

#### Listar contatos

```bash
  GET /contacts
```

#### Criar contato

```bash
  POST /contacts
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`         | `string` | **Obrigatório**. Nome do contato |
| `email`        | `string` | **Obrigatório**. email do contato |
| `phone`        | `string` | **Obrigatório**. telefone do contato |
| `category`     | `string` | **Obrigatório**. Id da Categoria para o contato |

#### Editar contato

```bash
  PATCH /contacts
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`         | `string` | **Obrigatório**. ID do contato |
| `name`         | `string` | **Obrigatório**. Nome do contato |
| `email`        | `string` | **Obrigatório**. email do contato |
| `phone`        | `string` | **Obrigatório**. telefone do contato |
| `category`     | `string` | **Obrigatório**. Id da Categoria para o contato |

#### Deletar contato

```bash
  DELETE /contacts/:productId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Obrigatório**. Id do item |

Clone o projeto

```bash
  git clone https://github.com/jp-prud/my-contacts
```

Entre no diretório do projeto

```bash
  cd my-contacts
```

Acesse o diretório do back-end do projeto

```bash
 cd back-end
```

Baixe o Docker e instale através deste link

```bash
https://docs.docker.com/desktop/install/windows-install/
```

Instale e Rode os schemas do BD - Schema dentro do repositório
```bash
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

Após estes comandos, siga o processo abaixo para criar o Banco de Dados
```
docker exec -it pg bash

psql -U root root

CREATE DATABASE mycontacts;
```

Rode as criações de tabela presente dentro do arquivo de `Schema.sql` prasente dentro da pasta chamada `database`.

Instale as dependências e inicie o projeto.

```bash
  yarn start
```

Para rodar o Desktop, acesse a pasta "front-end" a partir do diretório raiz do projeto
```bash
 cd front-end
```

Após isto, rode o comando:

```bash
 yarn dev
```

## Autores

- [@jpprud_](https://github.com/jp-prud)
