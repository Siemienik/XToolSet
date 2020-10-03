import { Workbook } from 'exceljs';
import { IImporter } from './IImporter';
import { Importer } from './Importer';

export class ImporterFactory {
    // todo obsolete and rename to loverCase
    public async From(path: string): Promise<IImporter> {
        const wb = new Workbook();
        await wb.xlsx.readFile(path);

        return new Importer(wb);
    }
}

/** @deprecated Default exports will be removed in January 2021. Please to use brackets (`{ ImporterFactory }`). */
// tslint:disable-next-line:no-empty-interface max-classes-per-file
export default class ImporterFactoryLegacy extends ImporterFactory {};

