import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '@/lib/clients/sanity';

const builder = imageUrlBuilder(sanityClient)

function urlFor(source: string) {
  return builder.image(source)
}

function statusBadge(status: string) {
  switch (status) {
    case 'completed':
      return (
        <div className='bg-green-500 text-white text-xs font-semibold rounded-full px-2 py-1'>
          <span>Completed</span>
        </div>
      )
    case 'delayed':
      return (
        <div className='bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-1'>
          <span>Delayed</span>
        </div>
      )
    case 'inProgress':
      return (
        <div className='bg-yellow-500 text-white text-xs font-semibold rounded-full px-2 py-1'>
          <span>In Progress</span>
        </div>
      )
    default:
      return (
        <div className='bg-gray-500 text-white text-xs font-semibold rounded-full px-2 py-1'>
          <span>{status}</span>
        </div>
      )
  }
}

export default function ClientPortal({
  client
}: {
  client: Client;
}) {

  const icon = client.icon.asset._ref ? urlFor(client.icon.asset._ref).url() : '/favicon-96x96.png'
  
  return (
    <div className='w-full flex flex-col gap-y-12'>
      <div className='flex gap-x-4 items-center'>
        <Image
          src={icon}
          alt={client.companyName}
          width={50}
          height={50}
        />
        <h2 className='text-5xl font-bold'>{client.companyName}</h2>
      </div>
      <h3 className='text-3xl font-semibold text-primary'>
        {client.projects.length > 1 ? 'Projects' : 'Project'}
      </h3>
      <div className='flex flex-col gap-y-8'>
        {client.projects.map(project => (
          <div key={project._key} className='flex flex-col'>
            <h3 className='text-2xl font-semibold'>{project.title}</h3>
            <div className='mt-6 flex flex-col gap-y-4'>
              {project.updates.map(update => (
                <div key={update._key ? update._key : 21} className='flex flex-col gap-y-6 border border-zinc-600 rounded-lg p-6'>
                  <p className='text-lg font-bold'>{update.title}</p>
                  {update.tasks.map(task => (
                    <div key={task._key} className='flex flex-col gap-y-2'>
                      <div className='flex items-center justify-between'>
                        <h4 className='text-lg font-semibold'>{task.title}</h4>
                        {statusBadge(task.status)}
                      </div>
                      <div className='flex flex-col gap-y-2'>
                        {task.description.map((block) => (
                          <div key={block._key} className='flex flex-col gap-y-2'>
                            {block.children.map(span => (
                              <span key={span._key} className='text-sm prose prose-pixel'>{span.text}</span>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}