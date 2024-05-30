// Мы используем домен бэкенда, который создали для этого урока,
// а тебе нужно будет указать свой
export const BASE_URL = 'https://pindie-backend.nomoredomainswork.ru/api'

export const endpoints = {
  games: `${BASE_URL}/games`,
  auth: `${BASE_URL}/auth/local`,
  me: `${BASE_URL}/users/me`,
}
