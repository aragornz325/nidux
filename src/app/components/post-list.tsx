import PostCard from './post-card'

export function PostList ({ posts }) {
  return (
        <>
        {
      posts?.map((post) => {
        const {
          id,
          user,
          content
        } = post
        const {
          user_name,
          name: userFullName,
          avatar_url: avatarUrl
        } = user
        return (
        <PostCard
        key={id}
        user_name={user_name}
        userFullName={userFullName}
        avatarUrl= {avatarUrl}
        content= {content} />
        )
      })

    }
        </>
    )
}