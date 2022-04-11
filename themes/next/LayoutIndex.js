import LayoutBase from './LayoutBase'
import Header from './components/Header'
import LatestPostsGroup from './components/LatestPostsGroup'
import Card from './components/Card'
import BlogPostListScroll from './components/BlogPostListScroll'
import BlogPostListPage from './components/BlogPostListPage'
import CONFIG_NEXT from './config_next'

export const LayoutIndex = (props) => {
  const { latestPosts } = props
  const rightAreaSlot = CONFIG_NEXT.RIGHT_LATEST_POSTS && <Card><LatestPostsGroup latestPosts={latestPosts} /></Card>
  return <LayoutBase
    headerSlot={CONFIG_NEXT.HOME_BANNER && <Header {...props} />}
    sideBarSlot={<LatestPostsGroup posts={latestPosts} />}
    rightAreaSlot={rightAreaSlot}
    {...props}
  >
    {CONFIG_NEXT.POST_LIST_TYPE !== 'page'
      ? <BlogPostListScroll {...props} showSummary={true} />
      : <BlogPostListPage {...props} />
    }
  </LayoutBase>
}
