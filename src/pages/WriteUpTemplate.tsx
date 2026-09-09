import { useParams } from "react-router"

import PageTemplate from "../PageTemplate"
import WUT_MANIFESTS from "../assets/WUT_manifests"
import { transformWUTManifest } from "../components/writeup-template/WUT-Utils"

/**
 * Template Page that presents the aspects common to all write ups. Dynamically creates
 * the project body based on its manifest.
 * @param slug - Project Identifier
 * @returns 
 */
const WriteUpTemplate = () => {
  const {slug} = useParams()
  const writeUpManifest = WUT_MANIFESTS.find((item) => item.slug === slug);

  return (
    <PageTemplate>
      <div>Introductory Component</div>
      {writeUpManifest ? transformWUTManifest(writeUpManifest) : <p>No Manifest exists for this project</p>}
    </PageTemplate>
  )
}

export default WriteUpTemplate