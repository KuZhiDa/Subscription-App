#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/4cb6a344a30f59bfe8086a4b317b708040ac8bc7217efa6ec0cb790c448a9b9b/contract';
import endContract from '../../snapshots/4cb6a344a30f59bfe8086a4b317b708040ac8bc7217efa6ec0cb790c448a9b9b/contract.json' with { type: 'json' };
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
      this.setDefault({
        schema: 'public',
        table: 'user',
        column: col('role', 'text', { default: lit('User'), codecRef: { codecId: 'pg/text@1' } }),
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
