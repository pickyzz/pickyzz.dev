import LatestPostsGroup from '@/components/LatestPostsGroup'
// import TagGroups from '@/components/TagGroups'
import { useGlobal } from '@/lib/global'
import {
  faAngleDoubleRight,
  faHistory,
  faThList
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import CategoryGroup from '@/components/CategoryGroup'

const SideAreaRight = ({
  title,
  tags,
  currentTag,
  post,
  posts,
  categories,
  currentCategory,
  currentSearch,
  targetRef
}) => {
  const { locale } = useGlobal()
  // const postCount = posts?.length || 0
  // const showToc = post && post.toc && post.toc.length > 1

  return (
    <>
      {/* <section className='hidden lg:block mb-5 bg-white dark:bg-gray-800 hover:shadow-xl duration-200 py-8 '>
        <InfoCard postCount={postCount} />
      </section> */}

      {/* menu */}
      {/* <section className='hidden lg:block mb-5 py-5  bg-white dark:bg-gray-800  hover:shadow-xl duration-200'>
        <MenuButtonGroup allowCollapse={true} />
        <div className='px-5 pt-2'>
           <SearchInput currentTag={currentTag} currentSearch={currentSearch} />
        </div>
      </section> */}

      {/* <section className="shadow mb-5 py-4 px-2 bg-white dark:bg-gray-800 hover:shadow-xl duration-200"> */}
      {/* display ads  */}
      {/* <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-adtest="on"
          data-ad-client=""
          data-ad-slot=""
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </section> */}

      {/* <Analytics postCount={postCount}/> */}

      <div className="sticky top-8">
        {/* {showToc && (
        <section className='pb-10 mb-5  bg-white dark:bg-gray-800 hover:shadow-xl duration-200'>
          <div className='border-b text-center text-2xl bg-white text-black dark:border-gray-700 dark:bg-gray-700 dark:text-white py-6 px-6'>
            {locale.COMMON.TABLE_OF_CONTENTS}
          </div>
          <Toc toc={post.toc} targetRef={targetRef} />
        </section>
        )} */}

        {/* Latest update bar */}
        {posts && (
          <section className="shadow py-4 mb-5 bg-white dark:bg-gray-800 hover:shadow-xl duration-200">
            <div className="text-md pb-2 px-5 flex flex-nowrap justify-between">
              <div className="font-normal text-gray-600  dark:text-gray-300">
                <FontAwesomeIcon icon={faHistory} className="mr-2" />
                {locale.COMMON.LATEST_POSTS}
              </div>
            </div>
            <LatestPostsGroup posts={posts} />
          </section>
        )}

        {/* Classification  */}
        {categories && (
          <section className="shadow py-4 mb-5 bg-white dark:bg-gray-800 hover:shadow-xl duration-200">
            <div className="text-md px-5 mb-2 flex flex-nowrap justify-between font-normal">
              <div className="pb-1 text-gray-600  dark:text-gray-300">
                <FontAwesomeIcon icon={faThList} className="mr-2" />
                {locale.COMMON.CATEGORY}
              </div>
              <Link href="/category" passHref>
                <a className="text-gray-400 text-sm mt-1 hover:text-black dark:text-gray-400 dark:hover:text-white hover:underline cursor-pointer">
                  {locale.COMMON.MORE}{' '}
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </a>
              </Link>
            </div>
            <CategoryGroup
              currentCategory={currentCategory}
              categories={categories}
            />
          </section>
        )}

        {/* <section className="shadow py-4 px-5 mb-5 bg-white dark:bg-gray-800 hover:shadow-xl duration-200">
          <SearchInput currentTag={currentTag} currentSearch={currentSearch}/>
        </section> */}

        {/* tag bar */}
        {/* {tags && (
          <section className="shadow py-4 mb-5 bg-white dark:bg-gray-800 hover:shadow-xl duration-200">
            <div className="text-md  pb-1 px-5 flex flex-nowrap justify-between font-normal dark:text-gray-200">
              <div className="text-gray-600 dark:text-gray-200">
                <FontAwesomeIcon icon={faTags} className="mr-2" />
                {locale.COMMON.TAGS}
              </div>
              <Link href="/tag" passHref>
                <a className="text-gray-400 text-sm mt-1 hover:text-black dark:hover:text-white hover:underline cursor-pointer">
                  {locale.COMMON.MORE}{' '}
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </a>
              </Link>
            </div>
            <div className="px-5 pt-2">
              <TagGroups tags={tags} currentTag={currentTag} />
            </div>
          </section>
        )} */}
      </div>
    </>
  )
}
export default SideAreaRight
