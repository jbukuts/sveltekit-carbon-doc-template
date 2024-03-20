import slugify from 'slugify';
import { defineConfig, s } from 'velite';

export default defineConfig({
  root: './',
  output: {
    data: 'src/lib/.velite'
  },
  collections: {
    labs: {
      name: 'Lab',
      pattern: 'content/**/*.md',
      schema: s
        .object({
          title: s.string().max(99).optional(),
          updated: s.isodate().optional(),
          timeToComplete: s.number().optional(),
          path: s.path(),
          toc: s.boolean().optional(),
          toc_tree: s.toc()
        })
        .transform((data) => {
          const splitSlug = data.path.split('/').slice(1);
          const name = splitSlug.pop();

          const splitName = (name || '').split('.');

          if (splitName.length === 1) splitName.push('en');
          const locale = splitName[1];

          const slug = [locale, ...splitSlug, splitName[0]]
            .map((i) => slugify(i, { lower: true }))
            .filter((i) => i !== 'readme')
            .join('/');

          return { slug, locale, ...data };
        })
    }
  }
});
