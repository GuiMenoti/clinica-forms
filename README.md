# 💎 Formulário de Agendamento - Clínica de Estética

Formulário luxuoso e responsivo para agendamento de procedimentos estéticos com envio automático de emails.

## ✨ Características

- **Splash Screen** animado (3 segundos) com sua logo
- **Formulário elegante** baseado na identidade visual da clínica
- **Validação automática** de CPF, email e dados
- **23 procedimentos** para selecionar
- **Envio de emails** automático para clínica e cliente
- **Design responsivo** para mobile e desktop
- **Hospedagem na Vercel** (serverless)

## 🎨 Design

Identidade visual:
- Cor principal: Dourado metálico (#C99A3D)
- Fundo: Branco (#FFFFFF)
- Estilo: Luxo minimalista + estética médica + beleza sofisticada

## 🚀 Quick Start

### Local (Desenvolvimento)

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.example .env
# Edite .env com seu email e senha

# 3. Rodar servidor
npm start

# 4. Abrir no navegador
http://localhost:3000/formulario.html
```

### Vercel (Produção)

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Fazer login
vercel login

# 3. Deploy
vercel

# 4. Configurar variáveis de ambiente na Vercel Dashboard
# Settings → Environment Variables
```

Ver guia completo em [DEPLOY.md](DEPLOY.md)

## 📧 Como configurar email

### Opção 1: Senha de App (Recomendado)
1. Acesse: https://myaccount.google.com/apppasswords
2. Gere uma senha
3. Cole no `.env` como `EMAIL_PASS`

### Opção 2: Senha Normal
Use sua senha do Gmail diretamente (menos seguro)

Ver guia completo em [SETUP.md](SETUP.md)

## 📋 Dados coletados

- Nome completo
- Email
- CPF (com validação)
- Data de nascimento
- Procedimento selecionado
- Como conheceu a clínica

## 📬 Emails enviados

**Para a clínica:**
- Todos os dados do agendamento
- Data e hora de submissão
- Link para responder ao cliente

**Para o cliente:**
- Confirmação de recebimento
- Procedimento selecionado
- Mensagem de que entrarão em contato

## 📁 Estrutura

```
.
├── formulario.html       # Página do formulário
├── api/
│   └── submit-form.js    # Função serverless (Vercel)
├── assets/
│   └── logo.png          # Logo da clínica
├── server.js             # Servidor Express (local)
├── package.json          # Dependências
├── vercel.json           # Configuração Vercel
├── .env.example          # Template de variáveis
├── SETUP.md              # Guia de setup
├── DEPLOY.md             # Guia de deploy
└── README.md             # Este arquivo
```

## 🔧 Tecnologias

- **Frontend:** HTML5, CSS3, JavaScript vanilla
- **Backend:** Node.js + Express (local) / Serverless Functions (Vercel)
- **Email:** Nodemailer
- **Hospedagem:** Vercel

## 🔒 Segurança

- ✅ Validação de dados no backend
- ✅ `.env` não é commitado
- ✅ Senha de app isolada
- ✅ CORS configurado
- ✅ Sem exposição de credenciais

## 📊 Monitorar

### Local
```bash
npm run dev  # Com auto-reload
```

### Vercel
- Dashboard: https://vercel.com/dashboard
- Logs: `vercel logs`
- Redeploy: `vercel --prod`

## 🐛 Troubleshooting

**Email não envia:**
- Verifique `EMAIL_USER` e `EMAIL_PASS` no `.env`
- Confira se a senha de app foi gerada corretamente
- Verifique `CLINIC_EMAIL`

**Formulário não aparece:**
- Aguarde 3 segundos (splash screen)
- Verifique se a logo está em `assets/logo.png`

**Erro 405 no submit:**
- Verifique se o servidor está rodando (`npm start`)
- Verifique a URL em `formulario.html` (deve ser `/api/submit-form`)

## 📝 Licença

Propriedade da clínica. Todos os direitos reservados.

## 👤 Autor

Desenvolvido com ❤️ para sua clínica.

---

**Precisa de ajuda?** Entre em contato com o suporte do desenvolvedor.
