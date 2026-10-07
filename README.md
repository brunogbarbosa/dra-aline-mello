# Dra. Aline Mello

Site institucional adaptado do template premium-vendas. Um único projeto Next.js, pronto para importação na Vercel.

## Desenvolvimento

Node.js 20.9 ou superior.

```sh
npm ci
npm run dev
npm run build
npm start
```

## Publicação na Vercel

Importe este repositório e mantenha o preset Next.js. A raiz do repositório é a raiz do projeto. Build: `npm run build`. Não é necessário configurar banco de dados nem segredos.

O endereço de compartilhamento usa automaticamente `VERCEL_PROJECT_PRODUCTION_URL`. Após conectar um domínio próprio, preencha `site.seo.url` em `data/site.ts` para definir também o endereço canônico.

## Conteúdo

Dados, Instagram, WhatsApp, registro profissional e galeria: `data/site.ts`. Identidade e ajustes de enquadramento: `app/aline.css`. Fontes locais com suas licenças em `public/fonts`.

O contato e CRBM foram transcritos da referência fornecida. As fotografias são os materiais enviados para este projeto. Não foram transferidos retratos, resultados, métricas ou depoimentos da profissional do template.

A galeria apresenta os seis registros enviados, preservando as fotografias completas. Todos oferecem ampliação e comparação por controle deslizante, com recortes ajustados à divisão de cada montagem. Cada resultado é individual.

Favicon SVG, ICO e ícone Apple personalizados com monograma AM. Sem formulários ou coleta própria de dados; agendamento abre o WhatsApp.
