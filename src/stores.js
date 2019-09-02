import { writable } from 'svelte/store';

export const numItemsInCart = writable(0);
export const costConstraints = writable({
  total: [NaN, NaN],
  perMl: [NaN, NaN],
  rank: [NaN, NaN]
});

export const propertyConstraints = writable({
  abv: [NaN, NaN]
})
