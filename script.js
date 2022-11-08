import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { target: 1, duration: '2s' },
    { target: 1, duration: '2s' },
    { target: 10, duration: '10s' },
    { target: 10, duration: '10s' },
    { target: 100, duration: '45s' },
    { target: 100, duration: '45s' },
    { target: 1000, duration: '120s' },
    { target: 1000, duration: '120s' },
    { target: 0, duration: '120s' },
  ],
};

export default function () {
  let product_id = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1;

  const URL = 'http://localhost:3000';
  const responses = http.batch([
    ['GET', `${URL}/products`],
    ['GET', `${URL}/products/:${product_id}`],
    ['GET', `${URL}/products/:${product_id}/related`],
    ['GET', `${URL}/products/:${product_id}/styles`],
  ]);

  check(responses[0], { 'getProducts was 200': (r) => r.status == 200 });
  check(responses[1], { 'getOne was 200': (r) => r.status == 200 });
  check(responses[2], { 'getRelated was 200': (r) => r.status == 200 });
  check(responses[3], { 'getStyles was 200': (r) => r.status == 200 });

  sleep(1);
}
