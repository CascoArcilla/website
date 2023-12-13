import PostItem from "../PostItem/post-item";
import type { CardProps } from "./Card.d";

type ArticlesListProps = {
  posts: [];
  title?: string;
  children?: JSX.Element | string | null;
};

export default function ArticlesList({
  posts,
  title,
  children,
}: ArticlesListProps) {
  return (
    <section>
      <div className="w-full">
        <div className="pb-12 md:pb-20">
          <div className="lg:flex lg:justify-between">
            {/* Main content */}
            <div className="lg:grow" data-aos="fade-down" data-aos-delay="200">
              {/* Section title */}
              <p className="text-3xl text-white mb-8">{title}</p>

              {/* Articles container */}
              <div
                className={`grid gap-12 ${
                  !children ? "sm:grid-cols-3" : "sm:grid-cols-2"
                } sm:gap-x-6 md:gap-y-8 items-start`}
              >
                {posts.map(
                  ({
                    id,
                    to,
                    title,
                    image,
                    createdAt,
                    user,
                    tags,
                    summary,
                  }: CardProps) => (
                    <PostItem
                      key={id}
                      to={to}
                      title={title}
                      createdAt={createdAt}
                      authorImg={user.photoURL}
                      author={user.displayName}
                      tags={tags}
                      imageSrc={image.src}
                      imageAlt={image.alt}
                      summary={summary}
                    />
                  ),
                )}
              </div>
            </div>

            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
