'use client'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar
} from '@nextui-org/react'

import { IconHeart, IconMessageCircle, IconRepeat } from '@tabler/icons-react'

export default function PostCard({
  user_name,
  avatarUrl,
  userFullName,
  content
}: {
  user_name: string
  avatarUrl: string
  userFullName: string
  content: string
}) {
  return (
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <a href={`/${user_name}`}>
            <Avatar radius="full" size="md" src={avatarUrl} />
          </a>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {userFullName}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{user_name}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white">
        <p>{content}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className='h-4 w-4' />
        </button>
        <button>
          <IconHeart className='h-4 w-4' />
        </button>
        <button>
          <IconRepeat className='h-4 w-4' />
        </button>
      </CardFooter>
    </Card>
  )
}
