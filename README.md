# Configure .env with .env.example

# Install Modules
npm install

# Create Database and schema
---------------------------------------------------------------------------------------------------------------------

# Run Migration
node ace migration:run

# Run Seed
node ace db:seed

# Create Seed
Example: node ace make:seeder User

# Start
npm run dev

---

# DB Local
Requisitos:
Ter SQL Server instalado (Senha "root") e algum SGBD.

-Criar uma conexão local sem apontar o schema principal

-Criar database com nome 'database'

# Dependencies Version
- Node Version: 18.18.0
- Adonis Version: 5.9.0


# Rollback Migration
node ace migration:rollback

# Create Migration
Example: node ace make:migration users