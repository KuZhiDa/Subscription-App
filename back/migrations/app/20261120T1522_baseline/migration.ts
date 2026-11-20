#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/583c22cdb4f4d9926cd17c64ac45f6c7bbf5813666929f6688265b18fce04999/contract';
import endContract from '../../snapshots/583c22cdb4f4d9926cd17c64ac45f6c7bbf5813666929f6688265b18fce04999/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  checkExpression,
  col,
  fn,
  primaryKey,
  sql,
} from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: 'public' }),
      this.createTable({
        schema: 'public',
        table: 'account_user',
        columns: [
          col('id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('login', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('user_id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'payment',
        columns: [
          col('count', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('payment_date', 'timestamptz(3)', {
            notNull: true,
            default: fn(sql`now()`),
            codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
          }),
          col('period', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('price', 'float8', { notNull: true, codecRef: { codecId: 'pg/float8@1' } }),
          col('subscription_id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'payment_period_check_96e53b24',
            sql`"period" IN ('Day', 'Week', 'Month', 'Year', 'Lifetime')`,
          ),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'session',
        columns: [
          col('created_at', 'timestamptz(3)', {
            notNull: true,
            default: fn(sql`now()`),
            codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
          }),
          col('deleted_at', 'timestamptz(3)', {
            codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
          }),
          col('id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('token', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updated_at', 'timestamptz(3)', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
          }),
          col('user_id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'subscription',
        columns: [
          col('account_id', 'uuid', { codecRef: { codecId: 'pg/uuid@1' } }),
          col('category', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('created_at', 'timestamptz(3)', {
            notNull: true,
            default: fn(sql`now()`),
            codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
          }),
          col('deleted_at', 'timestamptz(3)', {
            codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
          }),
          col('id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('status', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updated_at', 'timestamptz(3)', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
          }),
          col('user_id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'subscription_category_check_a1ae0f05',
            sql`"category" IN ('Music', 'Cinema', 'Games', 'Books', 'TV', 'Education', 'Other')`,
          ),
          checkExpression(
            'subscription_status_check_e68fb242',
            sql`"status" IN ('Active', 'Paused', 'Canceled')`,
          ),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'user',
        columns: [
          col('confirmed', 'bool', { notNull: true, codecRef: { codecId: 'pg/bool@1' } }),
          col('created_at', 'timestamptz(3)', {
            notNull: true,
            default: fn(sql`now()`),
            codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
          }),
          col('email', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('password', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('role', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('two_fa_auth', 'bool', { notNull: true, codecRef: { codecId: 'pg/bool@1' } }),
          col('updated_at', 'timestamptz(3)', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
          }),
          col('username', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression('user_role_check_6f974fce', sql`"role" IN ('Admin', 'User')`),
        ],
      }),
      this.addUnique({
        schema: 'public',
        table: 'account_user',
        constraint: 'account_user_user_id_login_key',
        columns: ['user_id', 'login'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'session',
        constraint: 'session_token_key',
        columns: ['token'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'subscription',
        constraint: 'subscription_user_id_name_key',
        columns: ['user_id', 'name'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'user',
        constraint: 'user_email_key',
        columns: ['email'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'account_user',
        index: 'account_user_user_id_idx_6c952402',
        columns: ['user_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'payment',
        index: 'payment_subscription_id_idx_1e74615f',
        columns: ['subscription_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'session',
        index: 'session_user_id_idx_6c952402',
        columns: ['user_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'subscription',
        index: 'subscription_account_id_idx_3b48271c',
        columns: ['account_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'subscription',
        index: 'subscription_user_id_idx_6c952402',
        columns: ['user_id'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'account_user',
        foreignKey: {
          name: 'account_user_user_id_fkey',
          columns: ['user_id'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'payment',
        foreignKey: {
          name: 'payment_subscription_id_fkey',
          columns: ['subscription_id'],
          references: { schema: 'public', table: 'subscription', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'session',
        foreignKey: {
          name: 'session_user_id_fkey',
          columns: ['user_id'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'subscription',
        foreignKey: {
          name: 'subscription_user_id_fkey',
          columns: ['user_id'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'subscription',
        foreignKey: {
          name: 'subscription_account_id_fkey',
          columns: ['account_id'],
          references: { schema: 'public', table: 'account_user', columns: ['id'] },
          onDelete: 'setNull',
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
