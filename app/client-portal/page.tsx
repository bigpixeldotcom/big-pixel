import { Suspense } from 'react'
import { auth } from '@clerk/nextjs/server'
import { sanityClient } from '@/lib/clients/sanity'
import { type SanityDocument } from 'next-sanity'
import ClientPortal from '@/components/client-portal/client'

export default async function ClientPortalPage() {

  const { userId } = await auth()

  const query = `*[_type == "client" && clerkId == $id ]{
    companyName,
    _updatedAt,
    icon,
    projects[]{
      _key,
      linearProjectId,
      title,
      updates[]{
        _key,
        title,
        tasks[]{
          _key,
          title,
          status,
          description
        },
      }
    }
  }`
  const options = { next: { revalidate: 30 } };

  const clientData = await sanityClient.fetch<SanityDocument[]>(query, { id: userId }, options)
  const client: unknown = clientData[0]

  return (
    <main className='mt-12 max-w-7xl mx-6 md:mx-auto overflow-x-hidden'>
      <div className='flex flex-col gap-y-16'>
        <div className='mx-auto max-w-4xl'>
          <Suspense fallback={<div>Loading...</div>}>
            <ClientPortal client={client as Client} />
          </Suspense>
        </div> 
      </div>    
    </main> 
  )
}