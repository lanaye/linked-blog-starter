import React from 'react';
import { Stalinist_One, Bona_Nova } from 'next/font/google'
import PostBody from './post-body';

type Props = {
  title: string,
  content: string,
}

const bona = Bona_Nova({ weight: "400", subsets: ["cyrillic"] })
const stalinist = Stalinist_One({ weight: "400", subsets: ["cyrillic"] });

function PostSingle({
  title,
  content,
}: Props) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-24 pb-12 md:pt-34 md:pb-20">
          <div className="max-w-3xl mx-auto lg:max-w-none">

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
