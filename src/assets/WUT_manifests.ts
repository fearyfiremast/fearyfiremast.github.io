import type { WUT_manifest } from "../components/writeup-template/WUT-types";

const WUT_MANIFESTS: WUT_manifest[] = [
  {
    slug: 'test',
    manifest: [
      {
        type: 'text',
        body: ' Hello this is basically lorem ipsum'
      },
      {
        type: 'img',
        url: '',
        alt: '',
        caption: 'This is my favourite placeholder image'
      }
    ]
  }
]

export default WUT_MANIFESTS