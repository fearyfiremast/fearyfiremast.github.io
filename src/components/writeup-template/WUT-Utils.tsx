import WriteUpText from "./WriteUpText";
import WriteUpImg from "./WriteUpImg";

import type { ReactNode } from "react";
import type { WUT_manifest } from "./WUT-types";

/**
 * Takes a manifest from the WUT_object and transforms each into its proper component.
 * @param manifest 
 * @returns 
 */
export function transformWUTManifest(manifest: WUT_manifest): ReactNode[]  {
  return manifest.manifest.map((item) => {
    switch (item.type) {
      case 'text': {
        return (
          <WriteUpText 
            body={item.body}
          />
        )
      }
      case "img": {
        return (
          <WriteUpImg 
            url={item.url}
            alt={item.alt}
            caption={item.caption}
          />
        )
      }
      default: {
        break
      }
    }
  })
}