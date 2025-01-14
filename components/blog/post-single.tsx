import React from 'react';
import { Stalinist_One, Bona_Nova } from 'next/font/google'
import Author from '../../interfaces/author';
import Backlinks from '../misc/backlinks';
import PostBody from './post-body';
import PostMeta from './post-meta';

type Props = {
  title: string,
  content: string,
  date?: string,
  author?: Author,
  backlinks: {
    [k: string]: {
      title: string,
      excerpt: string,
    }
  }
}

const bona = Bona_Nova({ weight: "400", subsets: ["cyrillic"] })
const stalinist = Stalinist_One({ weight: "400", subsets: ["cyrillic"] });

function PostSingle({
  title,
  date,
  author,
  content,
  backlinks
}: Props) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-24 pb-12 md:pt-34 md:pb-20">
          <div className="max-w-3xl mx-auto lg:max-w-none">

            {/* Breadcrumbs */}
            <div className={`pt-8 pb-4 flex justify-start ${bona.className} backlinks gap-x-4`}>
              {
                (Object.keys(backlinks).length > 0) && [
                  <p className={bona.className}>Пов'язані сторінки:</p>,
                  <Backlinks backlinks={backlinks} />
                ]
              }
            </div>
            <article>

              {/* Article header */}
              <header className="max-w-3xl mx-auto md:mb-20 mb-10">
                {/* Title */}
                <h1 className={`h1 text-center md:text-6xl text-3xl ${stalinist.className}`}>{title}</h1>
              </header>

              {/* Article content */}
              <div className="lg:flex lg:justify-between" data-sticky-container>


                {/* Main content */}
                <div className={bona.className}>

                  {/* Article meta */}
                  {(author || date) && (
                    <>
                      <PostMeta author={author} date={date} />
                      <hr className="w-16 h-px pt-px bg-gray-200 border-0 my-6" />
                    </>
                  )}

                  {/* Article body */}
                  <PostBody content={content} />

                </div>

              </div>

              {/* Article footer */}
            </article>

          </div>

        </div>
      </div>
    </section>
  );
}

export default PostSingle;
