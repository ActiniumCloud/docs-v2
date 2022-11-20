# net.minecraftforge.fml.common.DuplicateModsFoundException

The server crashes and the console reports the following error:

```
Encountered an unexpected exception
net.minecraftforge.fml.common.DuplicateModsFoundException: 
Duplicate Mods:
	XXX : /publish/app/mc-docker/mc-1.12.2/server/./mods/xxx1.jar
	XXX : /publish/app/mc-docker/mc-1.12.2/server/./mods/xxx2.jar


	at net.minecraftforge.fml.common.Loader.identifyDuplicates(Loader.java:466) ~[Loader.class:?]
	at net.minecraftforge.fml.common.Loader.identifyMods(Loader.java:428) ~[Loader.class:?]
	at net.minecraftforge.fml.common.Loader.loadMods(Loader.java:568) ~[Loader.class:?]
	at net.minecraftforge.fml.server.FMLServerHandler.beginServerLoading(FMLServerHandler.java:98) ~[FMLServerHandler.class:?]
	at net.minecraftforge.fml.common.FMLCommonHandler.onServerStart(FMLCommonHandler.java:333) ~[FMLCommonHandler.class:?]
	at net.minecraft.server.dedicated.DedicatedServer.func_71197_b(DedicatedServer.java:125) ~[nz.class:?]
	at net.minecraft.server.MinecraftServer.run(MinecraftServer.java:486) [MinecraftServer.class:?]
	at java.lang.Thread.run(Thread.java:823) [?:1.8.0_292]
```

This means you have two of the same mods installed. Please go to your /mods folder, delete the duplicated mod, and restart the server.