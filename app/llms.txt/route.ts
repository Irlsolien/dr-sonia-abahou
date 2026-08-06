import { llmsIndex } from "../llms";

/* Généré au build : le site est en export statique, ce fichier devient un
   fichier texte servi tel quel (`out/llms.txt`). */
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsIndex(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
