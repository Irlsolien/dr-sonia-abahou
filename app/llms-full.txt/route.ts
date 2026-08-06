import { llmsFull } from "../llms";

/* Généré au build : le site est en export statique, ce fichier devient un
   fichier texte servi tel quel (`out/llms-full.txt`). */
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsFull(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
