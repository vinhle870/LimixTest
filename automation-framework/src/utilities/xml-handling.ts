import { parseString } from 'xml2js';
import { TxtHandling } from './txt-handling';
export class XmlHandling extends TxtHandling {

  /**
   * Convert xml format text to javascript object
   * @param filepath
   * @returns return javascript object or undefined value if any error
   */
  static async parseXmlDataToObject(filepath: string): Promise<object | undefined> {
    try {
      let xmlData;
      const rawdata = await this.readRawFile(filepath)
      if (rawdata) {
        parseString(rawdata, (_err: Error | null, result: object) => {
          xmlData = result;
        });
      }
      return xmlData;
    } catch (error) {
        return undefined;
    }
  }

}