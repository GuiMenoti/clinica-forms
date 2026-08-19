# Deploy na Vercel

## 🚀 Pré-requisitos

1. **Git** instalado
2. **Node.js** instalado
3. Conta na **Vercel** (gratuita em https://vercel.com)
4. **Vercel CLI** instalada

## 📦 Instalar Vercel CLI

```bash
npm install -g vercel
```

## 🔧 Configurar Projeto

### 1. Inicializar Git (se ainda não fez)

```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Fazer Login na Vercel

```bash
vercel login
```

## 🎯 Deploy

### Opção 1: Via CLI (Recomendado)

```bash
vercel
```

Durante o deploy:
- Confirme os valores padrão
- Clique no link ou aguarde a conclusão

### Opção 2: Via GitHub (Mais fácil para futuras atualizações)

1. Envie seu código para GitHub:
```bash
git remote add origin https://github.com/seu-usuario/seu-repo.git
git branch -M main
git push -u origin main
```

2. Na Vercel Dashboard:
   - Clique em "Add New Project"
   - Selecione seu repositório GitHub
   - Clique em "Deploy"

## 🔑 Configurar Variáveis de Ambiente

Após o deploy inicial:

1. Vá para **https://vercel.com/dashboard**
2. Selecione seu projeto
3. Clique em **Settings → Environment Variables**
4. Adicione as 3 variáveis:

```
EMAIL_USER=anacarolina.floris@gmail.com
EMAIL_PASS=sua_senha_de_app_aqui
CLINIC_EMAIL=anacarolina.floris@gmail.com
```

5. Clique em **Redeploy** para aplicar as mudanças

## 🌍 Acessar seu Formulário

Após o deploy, você receberá uma URL como:
```
https://seu-projeto.vercel.app
```

Acesse:
```
https://seu-projeto.vercel.app/formulario.html
```

## ✅ Testar

1. Abra o formulário
2. Preencha os dados
3. Envie
4. Verifique se os emails chegam

## 🔄 Atualizar após mudanças

Se fizer mudanças no código local:

```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

A Vercel fará o deploy automaticamente!

## 📊 Monitorar

Na Vercel Dashboard você pode:
- Ver logs de erro
- Monitorar performance
- Ver uso de funções serverless
- Gerenciar domínios customizados

## 💡 Dicas

- **Domínio customizado:** Vá em Settings → Domains para adicionar seu próprio domínio
- **Logs em tempo real:** `vercel logs`
- **Redeployar tudo:** `vercel --prod`
