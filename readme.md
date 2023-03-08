>> na servidor git
*** instalando insomnia e MariaDB ***
1) copiar e instalar linha por linha do arquivo "instala-docker.."
2) digitar "sudo docker ps" para vê se funcionou corretamente

_NOTA: DIGITAR SUDO DOCKER RM "NOMECONTAINER" PARA APAGAR E SUDO DOCKER STOP "NOMECONTAINER" PARA PARAR_

>> google cloud platform
*** criando regra de firewall ***
1) entrar no google plataforma cloud
2) na aba rede vpc em compute engine acessar firewall e clicar em "criar regra de firewall"
3) colocar um nome, destinos - todas as intâncias na rede, intervalos de ip de origem - 0.0.0.0/0 (para todos os ips), tcp - 3306 (porta que pretende utilizar)
4) e criar para finalizar o processo

_obs: caso possua um ip fixo, colocar em intervalos de ip_

>> MYSQL WORKBENCH
*** criando o banco ***
1) criar conexão
2) em hostname colocar o ip fixo do servidor
3) na port digitar a porta que vai usar
4) fazer um test conection e colocar a senha que foi colocada no docker



# INICIANDO O PROJETO

*** terminal ***
1) apert ctrl+shift+c para abrir o terminal dentro da pasta
2) digitar npm init -y

*** configurando o eslint - terminal ***
1) instale o eslint digitando "npm i eslint"
2) digite npx eslint --init
3) no eslint: op1 - escolhe opção para forçar código e verificar problemas, op2 - javascript modules, op3 - none, op4 - no, op5 - node, op6 - use popular style..., op7 - airbnb, op8 - js

*** settings ***
1) clicar no canto superior direito em open settings
2) adicionar
    "editor.codeActionsOnSave":{
        "source.fixAll.eslint": true
    }

_obs: caso ocorra alguma regra que não deveria, entrar em .eslintrc.js "rules" e digitar a regra que deseja inserir e colocar off para desativar_



# Nodemon e Sucrase

*** instalando dependências ***
1) digite no terminal "npm i nodemon sucrase --save-dev"
2) criar arquivo "nodemon.json" na pasta principal, dentro dele digitar
    {
      "execMap": {
        "js": "node -r sucrase/register"
      }
    }
3) entrar na package.json a criar em scripts
4) digitar no terminal "npm run dev" para testar funcionamento

_obs: --save-dev serve para torna em devdependece_



# Estruturação do projeto

*** pastas e documentos ***
1) pastas:
        src - todos arquivos e pastas relacionadas ao código fonte. Dentro dela teremos a pasta models (modelos de classes), controllers (intermedia requisições), config, database, middlewares (recursos comuns a aplicação) e routes
2) após configurado a porta de entrada, abrir insomnia

*** insomnia ***
1) acessar create -> collection -> manege environments: digitar "{ 'base_ur': 'http://localhost:3001' }" e fechar
2) criar uma pasta -> http request -> ao lado de get digitar base_url -> clicar em send para testar



# Configurando o sequelize

*** banco de dados ***
1) abrir MySQL e entrar no banco
2) na aba de schemas criar um nova schema
3) colocar nome, charset - utf8mb4 e utf8mb4_general_ci

*** instalando sequelize ***
1) digitar no terminal npm i sequelize mariadb
2) digitar npm i -D sequelize-cli
3) digitar no terminal "npx sequelize migration:create --name=alunos"

_obs: o comando na parte 3 sempre deverá ser feito quando se desejar criar uma nova tabela_

4) após isso um arquivo será criado na pasta migrations e estará relacionado ao banco de dados, mais especificadamente a tabela alunos
5) depois de fazer todos as devidas alterações no documento criado, digitar no terminal "npx sequelize db:migrate"

_obs: caso deseje desfazer uma migração digitar "npx sequelize db:migrate:undo"_

6) no MYSQL irá aparecer a tabela aluno e sequelizeMeta para manter histórico das migrações feitas

*nota: os nomes de métodos de controle podem ser index(geralmente GET) - lista todos os usuários, store/create (geralmente POST) - cria um novo usuário, delete (geralmente DELETE) - apaga um usúario, show (geralmente GET) - mostra um usuário, updata (geralmente PATCH OR PUT) - atualiza um usuário*



# Gerando o JWT

*** .env ***
1) no arquivo criar dois nomes de token diferentes, um para guardar os caracteres e outro para guarda a chave token do cliente.
2) no terminal digitar "npm i jsonwentoken"



# Criando seeds

*** no terminal ***
1)digitar no terminal "npx sequelize seed:generate --name cria-usuario"
2) após criado o arquivo e feita as devidas alterações no código, digite "npx sequelize db:seed:all" para executar o seeds para inserir os dados no banco



# Rotas alunos

*** alterando uma migrations ***
1) no terminal digite "npx sequelize migration:create --name=mudar-email-aluno-unique"
2) na pasta de migrations irá surgir um arquivo que após editado deve-se digitar no terminal "npx sequelize db:migrate"

_obs: colocar nome caracteristico_



# Upload de arquivos

*** instalando o multer ***
1) digitar no terminal "npm i multer"
