FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci || npm i

FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx --yes next@latest telemetry disable || true
RUN npm run build || npx --yes next@latest build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public 2>/dev/null || true
COPY package*.json ./
RUN npm ci --omit=dev || npm i --omit=dev
EXPOSE 3000
CMD ["npm","start"]
