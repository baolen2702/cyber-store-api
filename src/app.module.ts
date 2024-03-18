import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RepositoryModule } from './shared/repository/repository.module';
import { BlModule } from './bl/bl.module';
import { FieldModule } from './field/field.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), RepositoryModule, BlModule, FieldModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
