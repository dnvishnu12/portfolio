import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`#`}>{article.title}</Card.Title>
        <Card.Eyebrow className="md:hidden" decorate>
          {article.feature}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>end-to-end</Card.Cta>
      </Card>
      <Card.Eyebrow className="mt-1 max-md:hidden">
        {article.feature}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata = {
  title: 'Experience',
  description: 'Projects and features I have built.',
}

export default async function Experience() {
  const articles = [
    {
      feature: 'KreateWebsites',
      title: 'Instant Website Generation',
      description:
        'A tool that allows users to instantly generate and manage professional websites with ease.',
    },
    {
      feature: 'KreateBots',
      title: 'Custom Assistants',
      description:
        'A chatbot framework enabling users to create, deploy, and manage assistants tailored to their business needs.',
    },
    {
      feature: 'AI Stocks Assistant',
      title: 'Real-time Market Insights',
      description:
        'A chatbot delivering up-to-date stock market insights based on company earnings calls and news.',
    },
    {
      feature: 'SEO Optimization',
      title: 'Automated SEO Enhancement',
      description:
        'Integrated SEO strategies that improved search rankings, driving a 75% increase in website traffic.',
    },
    {
      feature: 'Payment & Credit System',
      title: 'Flexible Usage-Based Payments',
      description:
        'A credit-based payment system allowing users to purchase credits for various platform operations.',
    },
  ]

  return (
    <SimpleLayout
      title="Building Powerful and Scalable Products at Dataknobs"
      intro="A collection of tools and features I have designed and developed to enhance efficiency, usability, and performance."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.title} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
