# Clean Architecture - Use Cases para Product

Projeto desenvolvido como exercício do curso de Clean Architecture, replicando a arquitetura implementada para a entidade Customer na entidade Product.

## 📋 Requisitos

- Node.js (versão compatível com o projeto)
- npm

## 🚀 Instalação

```bash
# Instalar dependências
npm install
```

## 🧪 Executando os Testes

### Todos os testes
```bash
npm test
```

### Testes dos Use Cases de Product
```bash
npm test -- --testPathPattern="usecase/product"
```

### Testes de Unidade de Product
```bash
npm test -- --testPathPattern="usecase/product" --testNamePattern="Unit"
```

### Teste de unidade da entidade Product
```bash
npm test -- src/domain/product/entity/product.spec.ts
```

### Testes de Integração de Product
```bash
npm test -- --testPathPattern="usecase/product" --testNamePattern="Integration"
```

### Testes específicos por Use Case
```bash
# Create
npm test -- --testPathPattern="create.product"

# Find
npm test -- --testPathPattern="find.product"

# List
npm test -- --testPathPattern="list.product"

# Update
npm test -- --testPathPattern="update.product"
```

## 📁 Estrutura do Projeto

```
src/
├── domain/
│   ├── @shared/          # Entidades e interfaces compartilhadas
│   ├── checkout/         # Entidades de pedido (Order, OrderItem)
│   ├── customer/         # Entidade Customer (referência)
│   └── product/          # Entidade Product e repositórios
│       ├── entity/       # Entidade Product e interfaces
│       ├── event/        # Eventos de domínio
│       ├── factory/      # Factory para criação de produtos
│       ├── repository/   # Interface do repositório
│       └── service/      # Serviços de domínio
├── infrastructure/
│   ├── api/              # API Express e rotas
│   ├── customer/         # Repositório Customer (Sequelize)
│   ├── order/            # Repositório Order (Sequelize)
│   └── product/          # Repositório Product (Sequelize)
└── usecase/
    ├── customer/         # Use Cases de Customer (referência)
    └── product/          # Use Cases de Product (implementado)
        ├── create/       # Criação de produto
        ├── find/         # Busca de produto por ID
        ├── list/         # Listagem de produtos
        └── update/       # Atualização de produto
```

## 🏗️ Use Cases Implementados

### 1. Create Product
- **Arquivo**: `src/usecase/product/create/create.product.usecase.ts`
- **DTO**: `create.product.dto.ts`
- **Testes**: 
  - Unitário: `create.product.unit.spec.ts` (3 testes)
  - Integração: `create.product.integration.spec.ts` (1 teste)
- **Funcionalidade**: Cria um novo produto com nome e preço

### 2. Find Product
- **Arquivo**: `src/usecase/product/find/find.product.usecase.ts`
- **DTO**: `find.product.dto.ts`
- **Testes**:
  - Unitário: `find.product.unit.spec.ts` (2 testes)
  - Integração: `find.product.integration.spec.ts` (1 teste)
- **Funcionalidade**: Busca um produto pelo ID

### 3. List Product
- **Arquivo**: `src/usecase/product/list/list.product.usecase.ts`
- **DTO**: `list.product.dto.ts`
- **Testes**:
  - Unitário: `list.product.unit.spec.ts` (1 teste)
  - Integração: `list.product.integration.spec.ts` (1 teste)
- **Funcionalidade**: Lista todos os produtos cadastrados

### 4. Update Product
- **Arquivo**: `src/usecase/product/update/update.product.usecase.ts`
- **DTO**: `update.product.dto.ts`
- **Testes**:
  - Unitário: `update.product.unit.spec.ts` (1 teste)
  - Integração: `update.product.integration.spec.ts` (1 teste)
- **Funcionalidade**: Atualiza nome e preço de um produto existente

## 📊 Cobertura de Testes

Cada Use Case possui:
- **Testes de Unidade**: Validam a lógica de negócio isolada usando mocks
- **Testes de Integração**: Validam o fluxo completo com banco de dados SQLite em memória

**Total**: 11 testes específicos para Product (66 testes no projeto completo)

## 🏛️ Arquitetura

O projeto segue os princípios da **Clean Architecture**:

- **Domain Layer**: Entidades, value objects, eventos e interfaces de repositório
- **Use Case Layer**: Casos de uso da aplicação (create, find, list, update)
- **Infrastructure Layer**: Implementações concretas (repositórios com Sequelize, API Express)

## 📝 DTOs (Data Transfer Objects)

Cada Use Case possui DTOs de Input e Output para garantir o isolamento entre camadas:

```typescript
// Exemplo: Create Product
interface InputCreateProductDto {
  name: string;
  price: number;
}

interface OutputCreateProductDto {
  id: string;
  name: string;
  price: number;
}
```

## 🛠️ Tecnologias

- **TypeScript**: Linguagem principal
- **Jest**: Framework de testes
- **Sequelize**: ORM para persistência
- **SQLite**: Banco de dados para testes de integração
- **uuid**: Geração de IDs únicos

## 📄 Licença

Projeto desenvolvido para fins educacionais no curso Full Cycle.
