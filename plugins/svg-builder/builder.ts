import type { Plugin } from 'vite'
import { readFileSync, readdirSync } from 'fs'
import { clearReturnStr, formatSvgTagAsSymbolTag, isSvg } from './utils'
import type { IOption } from './type'

let idPrefix = ''

const findSvgFile = (dir: string) => {
  const svgContents: string[] = []
  if (dir === '') return svgContents

  const direntList = readdirSync(dir, {
    withFileTypes: true
  })

  direntList.forEach((dirent) => {
    const path = `${dir}${dirent.name}`
    if (dirent.isDirectory()) {
      svgContents.push(...findSvgFile(`${path}/`))
    } else if (isSvg(dirent.name)) {
      const fileContent = readFileSync(path).toString()
      const svgContent = formatSvgTagAsSymbolTag(clearReturnStr(fileContent), dirent.name, idPrefix)
      svgContents.push(svgContent)
    }
  })
  return svgContents
}

// eslint-disable-next-line import/prefer-default-export
export const svgBuilder = (option: IOption): Plugin => {
  const { path = '', prefix = '' } = option
  idPrefix = prefix
  const res = findSvgFile(path)
  return {
    name: 'svg-transform',
    transformIndexHtml(html): string {
      return res.length > 0
        ? html.replace(
            /<body(.*?)>/,
            `
              <body $1>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">
                  ${res.join('')}
                </svg>
            `
          )
        : html
    }
  }
}
