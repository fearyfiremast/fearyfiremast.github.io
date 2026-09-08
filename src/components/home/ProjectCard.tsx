import type { ProjectInfo } from "../../constants/Project"

const ProjectCard = ({title, description, imgUrl, imgAlt, className}: ProjectInfo) => {
  return (
    <div className={`flex flex-col gap-3 bg-white hover:cursor-pointer hover:ring-2 ring-gray-600 rounded-[5px] overflow-hidden p-4 ${className}`}>
      <div className="w-full overflow-clip h-[50%] object-cover bg-gray-500">
        <img src={imgUrl ?? 'https://placehold.co/400'} alt={imgAlt} />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl underline font-semibold">{title}</h1>
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard