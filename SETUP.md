# Setup do Servidor de Email

## 🚀 Instalação Rápida

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar variáveis de ambiente

**Copie o arquivo `.env.example` para `.env`:**
```bash
cp .env.example .env
```

**Edite o arquivo `.env` com seus dados:**

```
EMAIL_USER=seu.email@gmail.com
EMAIL_PASS=sua_senha_de_app
CLINIC_EMAIL=clinica@exemplo.com
PORT=3000
```

### 3. Gerar Senha de App (Gmail)

Se você usa **Gmail**:

1. Acesse: https://myaccount.google.com/apppasswords
2. Selecione "Mail" e "Windows Computer"
3. Copie a senha gerada (ex: `abcd efgh ijkl mnop`)
4. Cole no `.env` como `EMAIL_PASS`

> ⚠️ **Nota:** Você precisa ter autenticação de 2 fatores ativada no Gmail para isso funcionar.

### 4. Outros provedores de email

Se não usa Gmail, você pode usar qualquer provedor:

```javascript
// Exemplo com Outlook/Hotmail
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

Veja: https://nodemailer.com/smtp/well-known/

### 5. Rodar o servidor

```bash
npm start
```

O servidor rodará em `http://localhost:3000`

Para desenvolvimento (com auto-reload):
```bash
npm run dev
```

## 📧 O que acontece quando alguém preenche o formulário?

1. **Email para a clínica** - Recebe todos os dados do agendamento
2. **Email para o cliente** - Confirmação que o agendamento foi recebido

## 🌐 Acessar o formulário

Abra no navegador:
```
http://localhost:3000/formulario.html
```

## ✅ Testes

Preencha o formulário e verifique se:
- ✓ Um email chega na clínica
- ✓ Um email de confirmação chega no cliente
- ✓ Os dados estão corretos

## 🔒 Segurança

- Nunca commite o arquivo `.env` no git
- A senha está salva localmente apenas
- Os dados são enviados via HTTPS em produção

## 📦 Deploy em Produção

Para colocar online (Heroku, Railway, Render, etc.):

1. Configure as variáveis de ambiente no painel do provedor
2. O código já funciona sem modificações
