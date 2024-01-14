import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { Avatar } from '@nextui-org/react'

export function ComposePost ({

  userAvatarUrl
}: {

  userAvatarUrl: string
}) {
  const addPost = async (formData: FormData) => {
    'use server'
    const content = formData.get('content')
    // eslint-disable-next-line no-useless-return
    if (content == null) return
    const supabase = createServerActionClient({ cookies })
    // chequear si el usuario esta logeado
    const { data: { user } } = await supabase.auth.getUser()
    if (user == null) return
    await supabase.from('post').insert({ content, user_id: user.id })
    revalidatePath('/')
  }

  return (
    <form action={addPost} className='flex flex-row space-x-4 p-4 border-b border-white'>
    <Avatar radius='full' size='lg' src={userAvatarUrl} />
    <div className='flex flex-1 flex-col gap-y-4'>
        <textarea
            name='content'
            rows={4}
            className='w-full text-2xl bg-black placeholder-gray-500'
            placeholder="¡¿Qué estás pensando?!"
            ></textarea>
            <button type='submit' className='bg-sky-300 font-bold rounded-full px-5 py-2 self-end p-2'>
            Postear
            </button>
    </div>
    </form>

  )
}
