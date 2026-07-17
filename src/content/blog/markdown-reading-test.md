---
title: "Test: Markdown Reading Experience"
description: "Dedicated test content for headings, math, highlighted code, and long-form article styles."
published: "2026-07-17"
tags:
  - astro
  - Markdown
  - Test
category: "Site Tests"
draft: true
featured: false
---

> This is dedicated test content for the site implementation. It is not a real article.

这篇文章同时放入中文与 English sentences，用来检查混合排版的字距、行高和换行。Inline code such as `const answer = 42` should remain distinct without interrupting the paragraph rhythm.

## Headings and navigation

The table of contents should link to this section, and the heading’s trailing anchor should be reachable with a keyboard.

### A nested heading

This third-level heading verifies indentation in the table of contents.

#### A deeper heading

This fourth-level heading completes the multi-level navigation test.

## Mathematics

Inline math should sit naturally in a sentence: $a^2 + b^2 = c^2$.

Display math should remain readable and scroll horizontally if it becomes wider than the article:

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

## Syntax highlighting

### C++

```cpp
#include <iostream>
#include <vector>

int main() {
  const std::vector<int> values{1, 2, 3, 4};
  for (const int value : values) {
    std::cout << value * value << '\n';
  }
}
```

### Go

```go
package main

import "fmt"

func main() {
	values := []int{1, 2, 3, 4}
	for _, value := range values {
		fmt.Println(value * value)
	}
}
```

### TypeScript

```ts
const values: number[] = [1, 2, 3, 4];
const squares = values.map((value) => value * value);

console.log(squares);
```

### Shell

```sh
set -eu

for file in src/content/blog/*.md; do
  printf '%s\n' "$file"
done
```

## Structured content

| Element | Expected behavior | Narrow screens |
| --- | --- | --- |
| Table | Clear borders and aligned cells | Scrolls without widening the page |
| Code block | Theme-aware highlighting | Keeps long lines on one row |
| Formula | Build-time KaTeX output | Scrolls when necessary |

> Blockquotes use a calm background and visible leading border. They should work in both light and dark themes.

Lists share the same vertical rhythm:

1. First ordered item
2. Second ordered item
   - Nested unordered item
   - Another nested item with `inline code`
3. Third ordered item

The following visible URL is intentionally long to verify wrapping: [https://example.com/documentation/a-very-long-path-segment-that-keeps-going/another-long-segment/reference?query=markdown-reading-experience&mode=responsive](https://example.com/documentation/a-very-long-path-segment-that-keeps-going/another-long-segment/reference?query=markdown-reading-experience&mode=responsive).

The next code block contains one deliberately unbroken line. It must scroll horizontally instead of squeezing the article or widening the page:

```ts
const deliberatelyLongDiagnosticMessage = "This_single_code_line_is_intentionally_long_to_verify_horizontal_scrolling_without_wrapping_or_breaking_the_article_layout_across_desktop_and_narrow_mobile_viewports_0123456789_abcdefghijklmnopqrstuvwxyz_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
```

## Images

The existing site mark below verifies responsive image sizing and alternative text.

![Site placeholder mark rendered inside an article.](/favicon.svg)
