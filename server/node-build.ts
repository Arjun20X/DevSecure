import { createServer } from "./index";

const app = createServer();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Fusion Starter API running on port ${PORT}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 SIGTERM received");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 SIGINT received");
  process.exit(0);
});