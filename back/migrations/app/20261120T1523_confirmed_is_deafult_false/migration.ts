#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/289b3547a10b46ad469413ba31f171ea4edf9669112258b11cdb2069c213ecf2/contract';
import endContract from '../../snapshots/289b3547a10b46ad469413ba31f171ea4edf9669112258b11cdb2069c213ecf2/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/583c22cdb4f4d9926cd17c64ac45f6c7bbf5813666929f6688265b18fce04999/contract';
import startContract from '../../snapshots/583c22cdb4f4d9926cd17c64ac45f6c7bbf5813666929f6688265b18fce04999/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, lit } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.setDefault({
        schema: 'public',
        table: 'user',
        column: col('confirmed', 'bool', {
          default: lit(false),
          codecRef: { codecId: 'pg/bool@1' },
        }),
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
