import PageTemplate from "../PageTemplate"
import ProjectCard from "../components/home/ProjectCard"
import { PROJECTS } from "../constants/Project"
import HighlightedProject from "../components/home/HighlightedProject"
import ATFHome from "../components/home/ATFHome"

const Home = () => {

  const highlightedArticles: string[] = [
    'portfolio-site',
    'blueprint-website-v2',
    'cip-cta'
  ]

  return (
    <PageTemplate>
      {/* Cover */}
      <ATFHome />
      <hr className="my-4"/>
      <HighlightedProject slug="portfolio-site"/>
      {/* Project Showcase */}
      <section className="mt-16">
        <h2 className="font-semibold text-[30px] text-center mb-9">
          Projects
        </h2>
        <div className="flex flex-row gap-4 h-100 mb-2">
          {PROJECTS.filter((item) => highlightedArticles.includes(item.slug)).map((item) => 
            <ProjectCard 
              key={item.slug}
              title={item.title}
              description={item.description}
              imgUrl={item.imgUrl}
              imgAlt={item.imgAlt}
              slug={item.slug}
              className="flex-1 hover:flex-2 transition-all duration-200"
            />
          )}
        </div>
        <button className="w-full text-[18px] bg-gray-500 rounded-xs text-white hover:cursor-pointer transition-colors duration-200 hover:bg-blue-primary">
          View All
        </button>
      </section>
    </PageTemplate>
  )
}

export default Home