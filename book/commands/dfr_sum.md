---
title: dfr sum
version: 0.63.0
usage: |
  Aggregates columns to their sum value or creates a sum expression
---

<script>
  import { usePageFrontmatter } from '@vuepress/client';
  export default { computed: { frontmatter() { return usePageFrontmatter().value; } } }
</script>

# <code>{{ frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ frontmatter.usage }}</div>

## Signature

```> dfr sum ```

## Examples


```shell
>
```