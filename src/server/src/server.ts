import { addAlias } from "module-alias";

// server.ts lives in src/ (dev) or dist/ (compiled), so __dirname is the right "@" root
const aliasPath = __dirname;

addAlias("@", aliasPath);

import { createApp } from "./app";

const PORT = process.env.PORT || 5000;

async function bootstrap() {
  const { httpServer } = await createApp();

  httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  httpServer.on("error", (err) => {
    console.error("Server error:", err);
    process.exit(1);
  });
}

bootstrap();
