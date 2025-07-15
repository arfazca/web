import { getHighlighter, type Highlighter } from 'shiki'

let highlighter: Highlighter | null = null

export async function getShikiHighlighter(): Promise<Highlighter> {
  if (!highlighter) {
    highlighter = await getHighlighter({
      themes: ['github-light', 'github-dark'],
      langs: [
        'javascript',
        'typescript',
        'jsx',
        'tsx',
        'css',
        'html',
        'json',
        'markdown',
        'bash',
        'python',
        'sql',
      ],
    })
  }
  return highlighter
}

export function disposeShikiHighlighter() {
  if (highlighter) {
    highlighter.dispose()
    highlighter = null
  }
}