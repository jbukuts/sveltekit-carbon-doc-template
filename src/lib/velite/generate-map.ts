import { labs } from '../.velite';

/**
 *
 * @returns
 */
export default function generateMap() {
  return labs.reduce(
    (acc, curr) => {
      acc[curr.slug] = curr;
      return acc;
    },
    {} as Record<string, (typeof labs)[0] | undefined>
  );
}
