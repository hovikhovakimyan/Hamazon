IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20211219073923_AddProductstoDatabase')
BEGIN
    CREATE TABLE [Products] (
        [id] int NOT NULL IDENTITY,
        [storeName] nvarchar(max) NOT NULL,
        [name] nvarchar(max) NOT NULL,
        [description] nvarchar(max) NOT NULL,
        [price] nvarchar(max) NOT NULL,
        [image] nvarchar(max) NOT NULL,
        CONSTRAINT [PK_Products] PRIMARY KEY ([id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20211219073923_AddProductstoDatabase')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20211219073923_AddProductstoDatabase', N'6.0.1');
END;
GO

COMMIT;
GO

