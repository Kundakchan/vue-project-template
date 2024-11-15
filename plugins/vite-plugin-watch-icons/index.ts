import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'
import { Plugin } from 'vite'

const execPromise = promisify(exec)

function getFileName(fileName: string): string | null {
  const match = fileName.match(/(.+?)\.[^.]+$/)
  return match ? match[1] : null
}

interface VitePluginWatchIconsParams {
  folderPath: string
  outputFile: string
  script?: string
}

interface WriteToFileParams extends VitePluginWatchIconsParams {}

const writeToFile = async ({
  folderPath,
  outputFile,
  script
}: WriteToFileParams): Promise<void> => {
  try {
    const files = await fs.promises.readdir(folderPath)
    const fileNames = files.map((file) => `'${getFileName(file)}'`).join(' |\n')
    const content = `export type Name = \n${fileNames}\n;`

    await fs.promises.writeFile(outputFile, content)
    console.log('Имена файлов успешно записаны в Types.ts')

    if (script) {
      await execPromise(script, { cwd: path.resolve(__dirname, '../') })
    }
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

export default function vitePluginWatchIcons({
  folderPath,
  outputFile,
  script
}: VitePluginWatchIconsParams): Plugin {
  return {
    name: 'vite-plugin-watch-icons',
    apply: 'serve',
    configureServer(server) {
      writeToFile({ folderPath, outputFile, script })

      fs.watch(folderPath, (eventType, filename) => {
        console.log(`Файл ${filename} был ${eventType}`)
        writeToFile({ folderPath, outputFile, script })
      })
    }
  }
}
