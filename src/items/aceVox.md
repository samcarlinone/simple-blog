# Ace Vox
First, [take Ace Vox for a spin](/ace-vox/index.html)
-	WASD: move
-	QE: height
-	left click: destroy a block
-	right click: place a block

### Notes on this Project
The original goal was a Minecraft alpha clone that would run in the browser. However, I soon realized that to reach this goal would take far more time than I wanted, especially since other such projects already existed. So, I got the prototype to the minimal functional state and ceased work on it.

As with many of these personal exercises my focus was less on the goal, and more on learning along the way. This project helped me deepen my understanding of OpenGL and modern graphics pipelines. In addition, it was a good exercise in architecting larger software projects.

### Technical Details
When it comes to storing voxel worlds in memory there are several approaches. The repetitive nature of Minecraft like worlds might might seem ripe for compression. However, one of the most important requirements for games is low latency. Compression would increase the latency of modifying the chunk and so I opted for a simple flat array, which would also have the benefit of simplifying the implementation. The final implementation is a flat array of 32-bit integers encoding each block’s id, orientation, properties, and the lighting conditions. This approach works, but it is costly, requiring large amounts of memory and plays poorly with modern CPU architectures which use small caches of very fast memory to speed up computations.

Another interesting aspect was the way the voxel data for each chunk is meshed. This was setup so that every “dirty” chunk would be queued to be remeshed, with low priority chunks remeshed using other threads (through the web worker API). This approach had some problems with synchronizing changes that could happen across chunk borders. Another problem was moving the data around, the way this was written the chunk data would be copied into the web worker, then the resulting mesh data would be copied back to the main thread, before finally being uploaded to the GPU. This approach meant a lot of time was wasted copying data around. Especially since the difference between versions of a chunk were usually only a few tris apart.

### Final Thoughts
From a code style and organization standpoint I think this project is of middling quality, however this project suffered from my lack of knowledge when it came to many of the common approaches to optimizations and algorithms available. If I wanted to work on this project again I would probably rebuild it from the ground up and try to find more efficient ways of processing and pipelining the data to better fit the demands of the system.

