import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import path from 'path';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectDataSource() private dataSource: DataSource,
  ) { }

  loadCsvData() {
    console.log(process.cwd())
    const filePath = process.cwd() + '/data/data.csv';

    return this.dataSource.query(`LOAD DATA INFILE "${filePath}" INTO TABLE decidim.data FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;`)
  }
}
