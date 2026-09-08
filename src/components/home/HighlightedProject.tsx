import { PROJECTS, type ProjectInfo } from "../../constants/Project"

type HighlightedProjectProps = {
  slug: string
}

const HighlightedProject = ({slug}: HighlightedProjectProps) => {

  const projectDetails: ProjectInfo | undefined = PROJECTS.find((item) => item.slug === slug)
  if (!projectDetails) {
    console.error(`No Project has slug that matches: ${slug}`)
  }

  return (
    <section className="bg-gray-700 h-150 text-white w-full flex">

      <img className="h-full min-w-[50%] object-cover" src={projectDetails?.imgUrl ?? 'https://placehold.co/500x320'}/>
     
      <div className="px-10 py-12">
        <h2 className="uppercase text-7xl mb-20">
          {projectDetails?.title}
        </h2>
        <p className="text-4xl">
          {projectDetails?.description}
        </p>
      </div>
    </section>
  )

}

export default HighlightedProject