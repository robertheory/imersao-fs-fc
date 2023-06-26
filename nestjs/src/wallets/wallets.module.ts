import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { WalletAssetsService } from './wallet-assets/wallet-assets.service';
import { WalletAssetsController } from './wallet-assets/wallet-assets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  WalletAsset,
  WalletAssetSchema,
} from './wallet-assets/wallet-asset.schema';
import { WalletAssetsModule } from './wallet-assets/wallet-assets.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WalletAsset.name, schema: WalletAssetSchema },
    ]),
    WalletAssetsModule,
  ],
  controllers: [WalletsController, WalletAssetsController],
  providers: [WalletsService, WalletAssetsService],
  exports: [WalletsService, WalletAssetsService],
})
export class WalletsModule {}
